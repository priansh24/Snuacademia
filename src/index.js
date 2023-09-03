import "./Style.css";
import logo1 from "../src/reasources/10.png";
import logo2 from "../src/reasources/9.png";
import dpic from "../src/reasources/darkmode.svg";
import lpic from "../src/reasources/lightmode.svg";
import spic1 from "../src/reasources/goal.svg";
import spic2 from "../src/reasources/journey.svg";
import spic3 from "../src/reasources/opensource.svg";
import computer from "../src/reasources/computer.svg";
import helpPic from "../src/reasources/helpLight.svg";

//Intial logo generation
document.getElementById("lg").src = logo1;
document.getElementById("ft-logo").src = logo2;
//intial homepage pic generation
const img = document.getElementById("image");
img.src = lpic;
document.getElementById("goal").src = spic1;
document.getElementById("journey").src = spic2;
document.getElementById("os").src = spic3;
//DarkMode LightMode Toggle
const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const options = document.getElementById("options");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  document.body.classList.toggle("dark");
  const logo = document.getElementById("lg");
  const img = document.getElementById("image");

  //see which mode it is
  let isDarkMode = body.classList.contains("dark");

  if (isDarkMode) {
    logo.src = logo2;
    if (img) {
      img.src = dpic;
    }
  } else {
    logo.src = logo1;
    if (img) {
      img.src = lpic;
    }
  }
});

let generate = document.querySelector(".generate");
const hoe = document.getElementById("home");
const stud = document.getElementById("study");
const road = document.getElementById("road");
const erp = document.getElementById("erp");

//Generate homePage dynamically
let homegen = () => {
  const isDarkMode = body.classList.contains("dark");
  hoe.style.borderBottom = "2px solid var(--font-color)";
  stud.style.borderBottom = "none";
  road.style.borderBottom = "none";
  erp.style.borderBottom = "none";
  generate.innerHTML = `<div class="home">
    <div class="content">
        <div class="text">
            <div class="slogan">
              Simplify academics with us
            </div>
            <div class="slogan-para">
                Welcome to SnuAcademia, the ultimate student designed website that helps in simplifying study life
                at SNU
            </div>
            <div class="sloganButton">About us</div>
        </div>
    </div>
    <img id="image" src='${lpic}' style="width:50%;margin-right: 10%;">
</div>
<section id="slider">
        <input type="radio" name="slider" id="s1" checked />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <label for="s1" id="slide1"
          ><h2>Our Goal</h2>
          <div class="sliderContent">
            <img src="${spic1}" width="50%" />
            <p>
              SnuAcademia aims to assist students throughout their academic
              journey with study materials, notes, PYQs, and assignments. Our
              website also addresses common questions about ERP, Blackboard, and
              other general queries for freshers.
            </p>
          </div>
        </label>
        <label for="s2" id="slide2"
          ><h2>Our Journey</h2>
          <div class="sliderContent">
            <img src="${spic2}" width="50%" />
            <p>
              Our journey began on a random afternoon in our hostel room, where
              we started working on this project with the support of our peers.
            </p>
          </div>
        </label>
        <label for="s3" id="slide3"
          ><h2>Open Source Contribution</h2>
          <div class="sliderContent">
            <img src="${spic3}" width="40%" />
            <p>
              Our website is open-source, allowing students to access and
              contribute to the source code through our GitHub repository. We
              welcome your participation and collaboration in making our
              platform even better.
            </p>
          </div>
        </label>
      </section>`;

  const img = document.getElementById("image");
  if (isDarkMode) {
    if (img) {
      img.src = dpic;
    }
  } else {
    if (img) {
      img.src = lpic;
    }
  }
};

document.getElementById("home").addEventListener("click", homegen);
document.getElementById("homef").addEventListener("click", homegen);
document.querySelector(".foot-logo").addEventListener("click", homegen);
document.querySelector(".logo").addEventListener("click", homegen);
//generate Study Material Tab
let studyGen = () => {
  hoe.style.borderBottom = "none";
  stud.style.borderBottom = "2px solid var(--font-color)";
  road.style.borderBottom = "none";
  erp.style.borderBottom = "none";
  generate.innerHTML = `<div class="study">
    <div class="tagline">
        <span>Where Textbooks</span>
        <span>And Dreams Collide</span>
        <span class="sub-tag">Explore, Discover, and Shape Your Academic Journey with Limitless Possibilities</span>
    </div>
    <div class="search-bar">
        <span><i class="bi bi-search" style="font-size: max(20px,1.5vw);" ></i></span>
        <input type="text" id="course-select" placeholder="Search..." data-search>
    </div>
    <div class="courses">
        
    </div>
    <div id="pagination">
      <button id="prev-btn" disabled>Previous</button>
      <span id="page-info">Page 1 of 1</span>
      <button id="next-btn">Next</button>
  </div>
</div>`;

  document.getElementById("prev-btn").addEventListener("click", goToPrevPage);
  document.getElementById("next-btn").addEventListener("click", goToNextPage);

  let currentPage = 1;
  let totalPages = 1;

  // Function to fetch subjects for a specific page
  function fetchSubjects(page) {
    fetch(`http://localhost:5500/subjects?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        // Now you have the paginated subjects in the 'data' variable.
        // You can use this data to display content in the browser.
        generateCourses(data.subjects, data.allSubjects);
        currentPage = data.currentPage;
        totalPages = data.totalPages;
        updatePaginationControls();
      })
      .catch((error) => console.error(error));
  }

  const generateCourses = (subjectPage, allSubjects) => {
    let courses = document.querySelector(".courses");
    let searchBar = document.getElementById("course-select");

    searchBar.addEventListener("input", () => {
      //input being typed inside the search bar
      const searchText = searchBar.value.toLowerCase();

      // Clear existing courses
      courses.innerHTML = "";

      const foldersArray =
        searchText.trim().length > 0 ? allSubjects : subjectPage;

      for (let index = 0; index < foldersArray.length; index++) {
        const courseName = allSubjects[index].name.toLowerCase();
        const link = `https://drive.google.com/drive/u/3/folders/${foldersArray[index].id}`;
        const courseCode = foldersArray[index].name.slice(0, 6);
        const subjectName = foldersArray[index].name.slice(7);
        foldersArray[index].courseCode = courseCode;
        foldersArray[index].subjectName = subjectName;

        if (courseName.trim().includes(searchText.trim())) {
          let courseDiv = document.createElement("div");
          let courseDiv1 = document.createElement("div");
          let courseDiv2 = document.createElement("div");
          courseDiv1.classList.add("courseBox");
          courseDiv2.classList.add("courseName");
          courses.appendChild(courseDiv);
          courseDiv.appendChild(courseDiv1);
          courseDiv1.innerHTML = `<span id="course-${index}">${foldersArray[index].courseCode}</span>
            <span class="glink"  id="link-${index}"><a href="${link}" target="_blank">Content</a></span>`;
          // courseDiv2.classList.add('courseName');
          courseDiv.appendChild(courseDiv2);
          courseDiv2.innerHTML = `<h4>${foldersArray[index].subjectName}</h4>`;

          courseDiv1.addEventListener("mouseover", () => {
            document.getElementById(`course-${index}`).style.display = "none";
            document.getElementById(`link-${index}`).style.display = "flex";
          });
          courseDiv1.addEventListener("mouseout", () => {
            document.getElementById(`course-${index}`).style.display = "flex";
            document.getElementById(`link-${index}`).style.display = "none";
          });
          let courseDes = document.createElement("div");
          const html = `<h2 class = 'course-des>${foldersArray[index].name}</h2>`;
          courseDes.innerHTML = html;
          courses.appendChild(courseDes);
        }
      }
    });
    //To generate courses when you load up page
    searchBar.dispatchEvent(new Event("input"));
  };

  function updatePaginationControls() {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const pageInfo = document.getElementById("page-info");

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  }

  // Function to go to the previous page
  function goToPrevPage() {
    if (currentPage > 1) {
      currentPage--;
      fetchSubjects(currentPage);
    }
  }

  // Function to go to the next page
  function goToNextPage() {
    if (currentPage < totalPages) {
      currentPage++;
      fetchSubjects(currentPage);
    }
  }

  // Fetch subjects for the first page initially
  fetchSubjects(1);
};
document.getElementById("study").addEventListener("click", studyGen);
document.getElementById("studyf").addEventListener("click", studyGen);

//Generate Roadmap
const roadGen = () => {
  hoe.style.borderBottom = "none";
  stud.style.borderBottom = "none";
  road.style.borderBottom = "2px solid var(--font-color)";
  erp.style.borderBottom = "none";
  generate.innerHTML = `<div class="roadMaps">
  <div class="tagline">
      <span>Choose</span>
      <span>Your Academic Trail</span>
      <span class="sub-tag">Chart Your Academic Journey: Explore Major and Minor Paths</span>
  </div>
  <div class="search-bar">
      <span><i class="bi bi-search" style="font-size: max(20px,1.5vw);" ></i></span>
      <input type="text" id="course-select" placeholder="Search..." data-search>
  </div>
  <div class="roads">
      
  </div>`;
  let roadArr = ["CSE", "ECE", "EEE", "MECH", "BMS", "ECO"];
  generateRoad(roadArr);
};

const generateRoad = (array) => {
  let roads = document.querySelector(".roads");
  let searchBar = document.getElementById("course-select");

  searchBar.addEventListener("input", () => {
    //input being typed inside the search bar
    const searchText = searchBar.value.toLowerCase();

    // Clear existing courses
    roads.innerHTML = "";

    for (let index = 0; index < array.length; index++) {
      const branchName = array[index].toLowerCase();
      //const link = linkArray[index];
      if (branchName.includes(searchText)) {
        let mapDiv = document.createElement("div");
        mapDiv.classList.add("roadBox");
        roads.appendChild(mapDiv);
        mapDiv.innerHTML = `<span id="course-${index}">${array[index]}</span>
          <div style="display:flex; justify-content: space-around; width:80%" >
          <span class="glink-r"  id="majorLink-${index}"><a class='ar' href="https://www.google.com/" target="_blank">Major</a></span>
          <span class="glink-r" id="minorLink-${index}"><a class='ar'href="https://www.google.com/" target="_blank">Minor</a></span>
          </div>`;

        mapDiv.addEventListener("mouseover", () => {
          document.getElementById(`course-${index}`).style.display = "none";
          document.getElementById(`majorLink-${index}`).style.display = "flex";
          document.getElementById(`minorLink-${index}`).style.display = "flex";
        });
        mapDiv.addEventListener("mouseout", () => {
          document.getElementById(`course-${index}`).style.display = "flex";
          document.getElementById(`majorLink-${index}`).style.display = "none";
          document.getElementById(`minorLink-${index}`).style.display = "none";
        });
      }
    }
  });
  //To generate courses when you load up page
  searchBar.dispatchEvent(new Event("input"));
};

document.getElementById("road").addEventListener("click", roadGen);
document.getElementById("roadf").addEventListener("click", roadGen);

//Generate Erp Management Tab
const erpGen = () => {
  hoe.style.borderBottom = "none";
  stud.style.borderBottom = "none";
  road.style.borderBottom = "none";
  erp.style.borderBottom = "2px solid var(--font-color)";
  generate.innerHTML = `<div class="erpManagement">
  <div class="tagline">
      <span>Simplify</span>
      <span> Your Snu Experience</span>
      <span class="sub-tag" >Commonly asked FAQs </span>
  </div>
  <div class="linkSection">
      <div id="erpLink">Erp</div>
      <div id="fastLink">Fastrack</div>
      <div id="hosteLink">Hostel Management</div>
      <div id="bbLink">Blackboard</div>
  </div>
  <div class="faqs">
      <div class>
          <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
              <span>What is Erp?</span>
              <i class="bi bi-caret-down-fill"></i>
          </div>
          <div class="sol">random image/video</div>                    
      </div>
  </div>
</div>`;
  let linkSection = document.querySelector(".linkSection");
  let links = linkSection.getElementsByTagName("div");
  let faqs = document.querySelector(".faqs");

  function faqFill(array) {
    faqs.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
      let element = array[i];
      let faqDiv = document.createElement("div");
      faqDiv.innerHTML = `<div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
      <span>${element.question}</span>
      <span><i id='drop-${i}' class="bi bi-caret-down-fill"></i></span>
      </div>
      <div class="sol" id='sol-${i}'>${element.answer}</div>`;
      faqs.appendChild(faqDiv);
      faqDiv.addEventListener("click", () => {
        const sol = document.getElementById(`sol-${i}`);
        const arrow = document.getElementById(`drop-${i}`);
        if (sol.style.display == "flex") {
          sol.style.display = "none";
          arrow.classList = "bi-caret-down-fill";
        } else {
          sol.style.display = "flex";
          arrow.classList = "bi-caret-up-fill";
        }
      });
    }
  }
  faqs.innerHTML = "";
  //Example arrays
  let erpFaqs = [
    {
      question: "What is ERP?",
      answer:
        "The Shiv Nadar University ERP portal is a web-based application that provides students, faculty, and staff with access to a variety of university services. The portal includes features such as student self-service, faculty self-service, staff self-service, and parent-student portal.",
    },
    {
      question: "How to log in to the ERP?",
      answer:
        "To log in to your ERP, you must enter your SNU net ID (e.g.- xy123) and password.",
    },
    {
      question: "How to add courses to planner?",
      answer:
        "Upon logging into the ERP, navigate to the 'Academic Planning' section located in the left-hand menu bar, or directly access the 'Plan' option at the top of the page alongside other options like search and enroll. Proceed to click on 'Browse Catalog' and use the text box to input the first letter of the subject you desire to select a course from. All available subject options will be displayed, where you can then click the dropdown button to choose your desired course and click on 'Add Planner' to include it in your planner.",
    },
    {
      question: "Where to see your timetable from?",
      answer:
        "In the ERP system, locate the 'Enrollment' option on the left-hand side of the page, situated under the menu box. Click on the 'My Weekly Schedule' option to access your timetable for the current week.",
    },
    {
      question: "How to check GPA?",
      answer:
        "In the ERP system, find the 'Enrollment' option on the left-hand side of the page, which is located under the menu box. Click on 'Term Statistics' and choose the semester for which you wish to check your GPA. Then, review your GPA for the selected semester.",
    },
    {
      question:
        "How to check the total credits completed and total credits left?",
      answer:
        'Find the "My Academics" option in the ERP system along with other options like "Enrol," "Plan," etc. near the top of the page. Then select "View My Advisement Report." This report will show the credits you have already earned as well as the credits you still need to finish.',
    },
  ];
  let fastrackFaqs = [
    {
      question: "What is Fastrack?",
      answer:
        'To leave the campus for a day or longer, you must obtain approval from the warden. This approval is referred to as "fastrack."',
    },
    {
      question: "How do I apply for Fastrack?",
      answer:
        'Please access the SNULinks website and find the "login" option. Once logged in, you will see a variety of choices. Click on the "fastrack" option to access the form for requesting permission to leave the campus, whether it is for personal or official reasons.',
    },
    {
      question: "What to do in case Fastrack is rejected?",
      answer:
        "If your fastrack request is rejected for any reason, you have two options: You can review the form to see if there are any mistakes, correct them, and resubmit it for approval. Alternatively, if you need to leave urgently, you can directly approach the reception of your hostel and request an early approval from them.",
    },
  ];
  let hostelFaqs = [
    {
      question: "How to choose roommates?",
      answer: "The option to remove roommates is no longer valid as of 2023",
    },
    {
      question: "How to select your room?",
      answer:
        "Please visit the SNULinks website and locate the 'login' option. After logging in, you will be presented with various choices. Click on the 'Hostel Management System' option, and from there, find the 'Room Selection Request' option. During the room selection days assigned by the management, this selection will redirect you to a page where you can choose your room.",
    },
  ];
  let blackboardFaqs = [
    {
      question: "What is Blackboard?",
      answer:
        "Blackboard is an online learning management system (LMS) used by professors to provide course materials, including notes, assignments, announcements, and other resources to students in a digital format.",
    },
    {
      question: "How to log in blackboard?",
      answer:
        "To access the Blackboard platform at SNU, you have two options. Firstly, you can navigate to SNU links and search for the 'Blackboard' option on the website. Alternatively, you may directly search for 'SNU Blackboard' on the internet. Once you find the Blackboard portal, log in using your SNU email ID and password to gain access to the platform..",
    },
    {
      question: "How to add courses to favorites?",
      answer:
        "After logging in to your Blackboard account, find the 'Courses' option located on the left-hand side of the screen and click on it. This action will display a list of all the courses you are currently enrolled in. To mark a course as a favorite, look for the star button situated on the right-hand side of each course heading. Click on the star button to add the course to your favorites list.",
    },
    {
      question: "How can I submit assignments on Blackboard?",
      answer:
        "Normally, the link for submitting assignments can be found in the 'Activity Section' of the course page, along with the deadline for submission. If you are unable to locate the link there, you can follow these steps: First, click on the 'Courses' option on the left-hand side of the screen. Next, find the specific course for which you want to submit the assignment. Once you have selected the course, navigate to the 'Content Section' of the course page and look for the link to the assignment submission.",
    },
    {
      question: "How to access content on blackboard?",
      answer:
        "Usually, the most recent content is visible on the 'Activity Stream.' However, if you want to access all the content available for a particular course, follow these steps: Go to the 'Courses' section and choose the specific course you wish to view the content of. Look for the 'Content' section, typically located on the left-hand side of the screen. By accessing this section, you will be able to see all the content related to the selected course.",
    },
  ];
  document.getElementById("erpLink").addEventListener("click", function () {
    faqFill(erpFaqs);
  });
  document.getElementById("fastLink").addEventListener("click", function () {
    faqFill(fastrackFaqs);
  });
  document.getElementById("hosteLink").addEventListener("click", function () {
    faqFill(hostelFaqs);
  });
  document.getElementById("bbLink").addEventListener("click", function () {
    faqFill(blackboardFaqs);
  });
};

document.getElementById("erp").addEventListener("click", () => {
  erpGen();
});
document.getElementById("erpf").addEventListener("click", () => {
  erpGen();
});

//about us
function fillteam(array) {
  let teamPeople = document.querySelector(".teamPeople");
  teamPeople.innerHTML = "";

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let div = document.createElement("div");
    div.innerHTML = `<div class="person">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            src="${element.img}"
            alt="Avatar"
            height="100%"
          />
        </div>
        <div class="flip-card-back">
          <span>'${element.quote}'</span>
          <div class="socials">
            <a href=${element.insta} target="_blank"
              ><i class="bi bi-instagram"></i
            ></a>
            <a href=${element.linkedin} target="_blank"
              ><i class="bi bi-linkedin"></i
            ></a>
            <a
              href=${element.git}
              target="_blank"
              ><i class="bi bi-github"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <span>${element.firstName} ${element.lastName}</span>
    <span>${element.designation}</span>
  </div>`;
    teamPeople.appendChild(div);
  }
}

const aboutGen = () => {
  generate.innerHTML = `<div class="about">
  <div class="aboutContent">
    <div class="firstContent">
      <div class="textContent">
        <div class="question">What is <span>SnuAcademia</span>?</div>
        <div class="answer">
          Unlock the doors to knowledge and embark on a journey of
          intellectual growth with SnuAcademia, your premier online
          education platform. Whether you're a curious learner, a
          dedicated student, or a lifelong enthusiast.
        </div>
      </div>
      <img src="${computer}" alt="" width="25%" />
    </div>
    <div class="secondContent">
      <div class="textContent">
        <div class="question">
          How<span> SnuAcademia </span>can help you?
        </div>
        <div class="answer">
          An education website can significantly enhance your learning
          journey by providing a diverse range of resources tailored to
          various subjects and learning styles, offering flexible
          scheduling and self-paced progress tracking, connecting you with
          expert instructors.
        </div>
      </div>
      <img src=${helpPic} alt="" width="25%" />
    </div>
  </div>
  <div class="team">
    <div class="meetTeam">MEET THE TEAM</div>
    <div class="teamBay">
      <div id='core'>Core</div>
      <div id='dev'>Dev Team</div>
      <div id='content-team'>Content Team</div>
    </div>
    <div class="teamPeople">
      <div data-active="active">
        <div class="person">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="../src/reasources/vamsi.jpg"
                  alt="Avatar"
                  height="100%"
                />
              </div>
              <div class="flip-card-back">
                <span>"It is what it is"</span>
                <div class="socials">
                  <a href="https://www.instagram.com/" target="_blank"
                    ><i class="bi bi-instagram"></i
                  ></a>
                  <a href="https://in.linkedin.com/" target="_blank"
                    ><i class="bi bi-linkedin"></i
                  ></a>
                  <a
                    href="https://github.com/VamsiKaparthi/Snuacademia/tree/main"
                    target="_blank"
                    ><i class="bi bi-github"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <span>Vamsi Kaparthi</span>
          <span>Cofounder</span>
        </div>
        <div class="person">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src="../src/reasources/vamsi.jpg"
                  alt="Avatar"
                  height="100%"
                />
              </div>
              <div class="flip-card-back">
                <span>"It is what it is"</span>
                <div class="socials">
                  <a href="https://www.instagram.com/" target="_blank"
                    ><i class="bi bi-instagram"></i
                  ></a>
                  <a href="https://in.linkedin.com/" target="_blank"
                    ><i class="bi bi-linkedin"></i
                  ></a>
                  <a
                    href="https://github.com/VamsiKaparthi/Snuacademia/tree/main"
                    target="_blank"
                    ><i class="bi bi-github"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <span>Vamsi Kaparthi</span>
          <span>Cofounder</span>
        </div>
      </div>
      <div data-active="inactive"></div>
      <div data-active="inactive"></div>
    </div>
  </div>
</div>`;
  let teamBay = document.querySelector(".teamBay");
  fillteam(team.core);
  document.getElementById("core").addEventListener("click", () => {
    fillteam(team.core);
  });
  document.getElementById("dev").addEventListener("click", () => {
    fillteam(team.dev);
  });
  document.getElementById("content-team").addEventListener("click", () => {
    fillteam(team.content);
  });
};

let team = {
  core: [
    {
      firstName: "Vamsi",
      lastName: "Kaparthi",
      designation: "Cofounder and developer",
      insta: "https://www.instagram.com/__vamsi__17/",
      linkedin: "https://www.linkedin.com/in/vamsi-kaparthi-371730222",
      git: "https://github.com/VamsiKaparthi",
      img: "../src/reasources/team/vamsi.jpg",
      quote: "Quote from Vamsi about his role and passion.",
    },
    {
      firstName: "Aditya",
      lastName: "Agarwal",
      designation: "Cofounder and developer",
      insta: "https://www.instagram.com/adityagarg.ag/",
      linkedin: "https://www.linkedin.com/in/aditya-agarwal-977a30240/",
      git: "https://github.com/AdityaECE",
      img: "url_to_aditya_image",
      quote: "Quote from Aditya about his role and vision.",
    },
    {
      firstName: "Vidip",
      lastName: "Jain",
      designation: "Cofounder and Content",
      insta: "https://www.instagram.com/vidipjain/",
      linkedin: "https://www.linkedin.com/in/vidip-jain-a37a841b0/",
      git: "https://github.com/VidipJain7",
      img: "url_to_vidip_image",
      quote: "Quote from Vidip about the importance of content.",
    },
  ],
  content: [
    {
      firstName: "Soham",
      lastName: "Moulree",
      designation: "Content",
      insta: "https://www.instagram.com/__soaham20/",
      linkedin: "https://www.linkedin.com/in/soaham-moulree-818714281/",
      git: "https://github.com",
      img: "url_to_soham_image",
      quote: "Quote from Soham about his creative journey.",
    },
    {
      firstName: "Harika",
      lastName: "Saxena",
      designation: "Content",
      insta: "https://www.instagram.com/_.harika_/",
      linkedin: "https://www.linkedin.com/in/harika-saxena-2850651a0/",
      git: "https://github.com/harikasaxena",
      img: "../src/reasources/team/harika.jpg",
      quote: "Quote from Harika about the impact of storytelling.",
    },
  ],
  dev: [
    {
      firstName: "Priyansh",
      lastName: "Singhal",
      designation: "Developer",
      insta: "https://www.instagram.com/_ansh24/",
      linkedin: "https://www.linkedin.com/in/singhalpriyansh24/",
      git: "https://github.com/AdityaECE",
      img: "../src/reasources/team/priyansh.jpeg",
      quote: "Quote from Priyansh about his journey in coding.",
    },
    {
      firstName: "Tanmay",
      lastName: "Sachan",
      designation: "Developer",
      insta: "https://www.instagram.com/tanmay__258/",
      linkedin: "https://www.linkedin.com/in/tanmay-sachan-72b349236/",
      git: "https://github.com/tanmay812",
      img: "url_to_tanmay_image",
      quote: "Quote from Tanmay about his passion for software development.",
    },
  ],
};

document.addEventListener("click", function (event) {
  const aboutButton = event.target.closest(".sloganButton");
  if (aboutButton) {
    aboutGen(); // Generate "About Us" content
  }
});
const radioButtons = document.querySelectorAll("input[type=radio]");

const slideShow = () => {
  for (let i = 0; i < radioButtons.length; i++) {
    setInterval(() => {}, 3000);
  }
};
slideShow();
