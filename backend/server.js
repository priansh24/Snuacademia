const express = require("express");
const { google } = require("googleapis");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const useragent = require("express-useragent");

const cors = require("cors");
const app = express();
const port = 5500;

const credentials = {
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  redirect_uri: process.env.REDIRECT_URI,
};

app.use(cors());
app.use(useragent.express());
app.use(express.static("public"));

const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];
const TOKEN_PATH = "token.json";

const oAuth2Client = new google.auth.OAuth2(
  credentials.client_id,
  credentials.client_secret,
  credentials.redirect_uri
);

// Function to save the access token to token.json
async function saveToken(token) {
  try {
    await fs.promises.writeFile(TOKEN_PATH, JSON.stringify(token));
    console.log("Token stored to", TOKEN_PATH);
  } catch (err) {
    console.error("Error saving token:", err.message);
  }
}

// Function to load the access token from token.json
async function loadToken() {
  try {
    const token = await fs.promises.readFile(TOKEN_PATH);
    return JSON.parse(token);
  } catch (err) {
    return null;
  }
}

// Function to refresh the access token
async function refreshAccessToken() {
  try {
    const token = await loadToken();
    if (!token) {
      console.log(
        "Token not found or expired. Please authorize the app again."
      );
      return;
    }

    const now = Date.now();
    const expiryDate = token.expiry_date;
    if (expiryDate <= now) {
      console.log("Token has expired. Refreshing access token...");
      const { tokens } = await oAuth2Client.refreshAccessToken();
      oAuth2Client.setCredentials(tokens);
      await saveToken(tokens);
      console.log("Token refreshed successfully.");
    } else {
      console.log("Token is still valid.");
    }
  } catch (err) {
    console.error("Error refreshing access token:", err.message);
  }
}

// Function to start the token refresh timer
function startTokenRefreshTimer() {
  const token = loadToken();
  if (token) {
    const now = Date.now();
    const expiryDate = token.expiry_date;
    const timeUntilExpiry = expiryDate - now;
    setTimeout(refreshAccessToken, timeUntilExpiry);
  }
}

//Routing methods

// authenticating the user to get tokens
app.get("/auth", (req, res) => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  console.log(authUrl);
  res.redirect(authUrl);
});

// redirect the user after getting tokens
app.get("/auth/callback", async (req, res) => {
  const { code } = req.query;
  try {
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);
    await saveToken(tokens);
    startTokenRefreshTimer(); // Start the token refresh timer
    res.send("Authorization successful!");
  } catch (error) {
    console.error("Error while authenticating:", error.message);
    res.status(400).send("Error while authenticating.");
  }
});

// getting the data from drive
async function getAllFoldersInFolder(folderId) {
  try {
    const token = await loadToken();
    oAuth2Client.setCredentials(token);
    const drive = google.drive({ version: "v3", auth: oAuth2Client });
    let pageToken = null;
    const foldersArray = [];

    do {
      const response = await drive.files.list({
        q: `'${folderId}' in parents and mimeType = 'application/vnd.google-apps.folder'`,
        fields: "files(id, name)",
        pageSize: 1000,
        pageToken: pageToken,
      });

      const folders = response.data.files;
      if (folders && folders.length > 0) {
        foldersArray.push(...folders);
      }

      pageToken = response.data.nextPageToken;
    } while (pageToken);

    return foldersArray;
  } catch (error) {
    console.error("Error getting folders from Google Drive:", error.message);
    return [];
  }
}

// data from the drive is stored here and it is being fetched in the script file.
let subjectsPerPage; // Number of subject cards per page

app.get("/subjects", async (req, res) => {
  try {
    const folderId = "1T3LQ_KeG7YH0RsNQ9etP1Q-VxdqC74I8"; // Replace with your parent folder ID
    const foldersArray = await getAllFoldersInFolder(folderId);

    // Determine screen size based on user agent or any other method
    const isMobile = req.useragent.isMobile; // This is just an example, you can use other methods
    // Calculate the number of subjects to send based on screen size
    subjectsPerPage = isMobile ? 5 : 8;
    const page = parseInt(req.query.page) || 1;
    const startIndex = (page - 1) * subjectsPerPage;
    const endIndex = startIndex + subjectsPerPage;
    const paginatedFolders = foldersArray.slice(startIndex, endIndex);

    res.json({
      allSubjects: foldersArray,
      subjects: paginatedFolders,
      totalPages: Math.ceil(foldersArray.length / subjectsPerPage),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error getting folders from Google Drive:", error.message);
    res.status(500).send("Error getting folders from Google Drive.");
  }
});

// app.get('/subjects', async(req, res) => {
//     try {
//         const folderId = '1T3LQ_KeG7YH0RsNQ9etP1Q-VxdqC74I8'; // parent folder ID
//         const foldersArray = await getAllFoldersInFolder(folderId);
//         res.json(foldersArray);
//     } catch (error) {
//         console.error('Error getting folders from Google Drive:', error.message);
//         res.status(500).send('Error getting folders from Google Drive.');
//     }
// });

// Start the server and token refresh timer
app.listen(port, () => {
  console.log(`Node.js server listening on port ${port}`);
  startTokenRefreshTimer(); // Start the token refresh timer when the server starts
});
