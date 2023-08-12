/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*Using Css variable*/
:root {
  --bg-color: white;
  --font-color: black;
  --secondary: #00b0ff;
}

.dark {
  --bg-color: black;
  --font-color: white;
  --secondary: #536dfe;
  --color1: rgb(240, 240, 240);
  --color3: rgb(23, 23, 24);
  --color2: rgb(23, 23, 24);
}

body {
  -webkit-tap-highlight-color: transparent;
  background-color: var(--bg-color);
  color: var(--font-color);
  font-family: "DM Sans", sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  --color1: black;
  --color2: rgb(23, 23, 24);
  --color3: rgb(240, 240, 240);
}

.header {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  margin-right: 2%;

  list-style: none;
  position: relative;
  /* padding: 12px 20px;*/
}

.logo {
  display: flex;
  justify-content: center;
  width: 100px;
}

.options {
  display: flex;
  width: max(500px, 50%);
  justify-content: space-around;
  height: 25px;
  font-size: max(15px, 1vw);
  color: var(--font-color);
}

.options > div:hover {
  cursor: pointer;
  color: var(--secondary);
}

.home {
  margin-top: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10%;
}

.slogan {
  font-size: max(3.5vw, 40px);
  display: flex;
  margin-bottom: 20px;
  font-weight: 900;
}

.slogan-para {
  font-size: max(1vw, 20px);
  width: max(80%, 280px);
}

i {
  font-size: 25px;
  width: auto;
  cursor: pointer;
  /*transform: translate(-50%, -50%);*/
}

.logo {
  display: flex;
  align-items: center;
}

/* study-material page */
.study,
.roadMaps {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tagline {
  margin-top: 5vh;
  font-size: min(8vw, 70px);
  font-weight: 950;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-bar {
  margin-top: 5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  border: 2px solid var(--font-color);
  width: max(40vw, 300px);
  padding: 8px;
  padding-left: 15px;
  gap: 10px;
  border-radius: 5px;
}
#course-select {
  background-color: var(--bg-color);
  color: var(--font-color);
  border: none;
  outline: none;
  color: (--font-color);
  font-size: 25px;
  border-left: 1px solid grey;
  padding-left: 10px;
  font-weight: 100;
  width: 80%;
}

.courses,
.roads {
  width: 90%;

  margin-top: 50px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.courseBox {
  height: 200px;
  width: 300px;
  border: 2px solid var(--font-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--font-color);
}

.glink {
  display: none;
  border-bottom: none;
}
a {
  text-decoration: none;
  color: var(--font-color);
  border-bottom: none;
}
a:visited {
  text-decoration: none;
  color: var(--font-color);
}
a:hover {
  text-decoration: none;
  color: var(--font-color);
}
a:active {
  text-decoration: none;
  color: var(--font-color);
}
.generate {
  padding-bottom: 20px;
}
/*erp management*/
.linkSection {
  margin-top: 5vh;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}
.erpManagement {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.linkSection > div {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--font-color);
  font-size: max(1.2vw, 15px);
  height: max(35px, 5vh);
  width: max(350px, 15vw);
  border-radius: 5px;
  color: var(--font-color);
  background-color: var(--bg-color);
  flex-wrap: wrap;
  cursor: pointer;
}
.linkSection > div:hover {
  color: var(--bg-color);
  background-color: var(--font-color);
  transition: 100ms;
}
.sub-tag {
  font-size: 0.5em;
  font-weight: 200;
  margin-top: 2vh;
  display: flex;
  text-align: center;
}
.faqs {
  display: flex;
  flex-direction: column;
  margin-top: 7vh;
  width: 95%;
  gap: 20px;
}
.faqs > div {
  border: 1px solid var(--font-color);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 15px;
  border-radius: 2px;
}
.sol {
  display: none;
}
.roadBox {
  height: 200px;
  width: 300px;
  border: 2px solid var(--font-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--font-color);
}
.glink-r {
  display: none;
  border: 1px solid var(--font-color);
  background-color: var(--bg-color);
  color: var(--font-color);
  width: 33%;
  padding: 10px;
  justify-content: center;
  border-radius: 5px;
}
.glink-r:hover {
  background-color: var(--font-color);
  color: var(--bg-color);
}
a.ar {
  color: inherit;
}
/* footer */
.footer {
  background-color: rgb(23, 23, 24);
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
}

.reasources {
  display: flex;
  justify-content: center;
  color: white;
  gap: 10px;
  width: 50%;
  flex-wrap: wrap;
}
.reasources > div:hover {
  color: var(--secondary);
  cursor: pointer;
}
.contact > a {
  color: white;
  margin: 10px;
}
.contact > a:hover {
  color: var(--secondary);
}

.foot-logo {
  color: white;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.foot-logo:hover {
  color: var(--secondary);
}
.generate {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
/*About us*/
.sloganButton {
  margin-top: 4vw;
  width: max(200px, 20vw);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid var(--secondary);
  border-radius: 10px;
  font-size: max(1.2vw, 20px);
}
.sloganButton:hover {
  background-color: var(--secondary);
  cursor: pointer;
}
.about {
  margin-top: 1vh;
  padding: 5vw;
}
.aboutContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10vw;
}
.firstContent,
.secondContent {
  display: flex;
  gap: 15vw;
  padding-bottom: 8vw;
  border-bottom: 1px solid var(--font-color);
}
.secondContent {
  flex-direction: row-reverse;
  border-bottom: none;
}
.textContent {
  display: flex;
  flex-direction: column;
}
.question {
  font-size: 3vw;
  margin-bottom: 20px;
}
.question > span {
  color: var(--secondary);
}
.answer {
  font-size: min(2vw, 30px);
}
.team {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: min(6vw, 80px);
}
.meetTeam {
  width: fit-content;
  font-size: 5.5vw;
  font-weight: 600;
  border-bottom: 2px solid var(--secondary);
}
.teamBay {
  display: flex;
  width: 90%;
  justify-content: space-between;
}
.teamBay > div {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: max(1.2vw, 13px);
  width: 25vw;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid var(--font-color);
  border-radius: 10px;
}
.teamBay > div:hover {
  background-color: var(--secondary);
  cursor: pointer;
}
.teamPeople {
  width: 90%;
  padding: 10px;
  border: 1px solid var(--secondary);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
}
.teamPeople > div {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 10%;
}
/*flipcard*/
.person {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flip-card {
  background-color: transparent;
  width: min(45vw, 300px);
  height: min(45vw, 300px);
  perspective: 1000px;
  margin-bottom: 0.8vw;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  border-radius: 10px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}
.flip-card-front > img {
  border-radius: 10px;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  color: var(--font-color);
}

/* Style the back side */
.flip-card-back {
  background-color: var(--secondary);
  color: var(--font-color);
  font-size: min(3vw, 25px);
  transform: rotateY(180deg);
}
.flip-card-back > span {
  margin-bottom: 2.5vw;
  width: 90%;
}
.socials {
  display: flex;
  justify-content: space-between;
  width: 70%;
}
.socials > a > i {
  font-size: min(5vw, 30px);
}
.person > span {
  font-size: min(3vw, 20px);
}
/*slider*/

#slider {
  position: relative;
  width: 60%;
  min-height: 30vw;
  margin: 80px auto;
  font-family: "DM sans", sans-serif;
  perspective: 1400px;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
}

input[type="radio"] {
  display: none;
  position: absolute;
  top: 108%;
  width: 4vw;
  height: 18px;
  margin: 0 15px 0 0;
  opacity: 0.6;
  cursor: pointer;
}

/*input[type=radio]:nth-child(5) {
  margin-right: 0px;
}

input[type=radio]:checked {
  opacity: 1;
}*/

h2 {
  font-size: 2.5vw;
  color: white;
  margin: 0;
  margin-bottom: 20px;
}

p {
  width: 50%;
  font-size: min(30px, 1.5vw);
}

#slider label {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  color: white;
  font-weight: normal;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  transition: transform 400ms ease;
  box-sizing: border-box;
  padding: 20px;
}
.sliderContent {
  display: flex;
  align-items: center;
  gap: 40px;
  height: 100%;
}
#slide1 {
  background: #066892;
}
.dark #slide1 {
  background: #232e6f;
}

#slide2 {
  background: #0d97d2;
}
.dark #slide2 {
  background: #384ab2;
}

#slide3 {
  background: #00b0ff;
}
.dark #slide3 {
  background: #536dfe;
}
/*
#slide4 {
  background: slateblue;
}

#slide5 {
  background: violet;
}*/

/* Slider Functionality */

/* Active Slide */
#s1:checked ~ #slide1,
#s2:checked ~ #slide2,
#s3:checked ~ #slide3,
#s4:checked ~ #slide4,
#s5:checked ~ #slide5 {
  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);
  transform: translate3d(0%, 0, 0px);
}

/* Next Slide */
#s1:checked ~ #slide2,
#s2:checked ~ #slide3,
#s3:checked ~ #slide4,
#s4:checked ~ #slide5,
#s5:checked ~ #slide1 {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);
  transform: translate3d(15%, 0, -100px);
}

/* Next to Next Slide */
#s1:checked ~ #slide3,
#s2:checked ~ #slide4,
#s3:checked ~ #slide5,
#s4:checked ~ #slide1,
#s5:checked ~ #slide2 {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  transform: translate3d(30%, 0, -250px);
}

/* Previous to Previous Slide */
#s1:checked ~ #slide4,
#s2:checked ~ #slide5,
#s3:checked ~ #slide1,
#s4:checked ~ #slide2,
#s5:checked ~ #slide3 {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  transform: translate3d(-30%, 0, -250px);
}

/* Previous Slide */
#s1:checked ~ #slide5,
#s2:checked ~ #slide1,
#s3:checked ~ #slide2,
#s4:checked ~ #slide3,
#s5:checked ~ #slide4 {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);
  transform: translate3d(-15%, 0, -100px);
}

/*Responsive*/
@media screen and (max-width: 800px) {
  /*homepage taglines*/
  body {
    align-items: center;
  }
  #image {
    display: none;
  }
  .home {
    padding-left: 0;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .slogan {
    text-align: center;
  }
  .slogan-para {
    text-align: center;
  }
  /*slider*/
  #slider {
    margin-top: 40px;
    margin-bottom: 20px;
    min-height: 50vh;
    width: 70%;
  }
  #slider label {
    height: 100%;
  }
  .sliderContent {
    flex-direction: column;
    gap: 5px;
    height: 100%;
    align-items: center;
  }
  h2 {
    font-size: max(2.6vw, 14px);
  }
  p {
    width: 80%;
    font-size: max(2.2vw, 11px);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  input[type="radio"] {
    position: absolute;
    top: 104%;
  }
}

/*hamburger menu*/
.options {
  display: flex;
}
/* .options div {padding-left: 30px;}
/*.options div #home #erp #road #study {
    display: inline-block;
    text-decoration: none;
    color: var(--color1);
    text-align: left;
    transition: 0.15s ease-in-out;
    position: relative;
    text-transform: uppercase;
}
.options div #home 
 #erp #road #study::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color1);
    transition: 0.15s ease-in-out;
}
.options div #home #erp #road  #study:hover:after {width: 100%;}*/
.open-menu,
.close-menu {
  position: absolute;
  color: var(--color1);
  cursor: pointer;
  font-size: 1.5rem;
  display: none;
}
.open-menu {
  position: absolute;
  top: 50%;
  left: 52%;
  /*transform: translateY(-50%);*/
  transform: translate(-50%, -50%);
}
.close-menu {
  color: var(--color1);
  top: 40px;
  right: 35px;
}
#check {
  display: none;
}
@media (max-width: 610px) {
  .options {
    font-weight: bold;
    font-size: larger;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50vh;
    position: fixed;
    top: -100%;
    right: 0;
    z-index: 100;
    background-color: var(--color3);
    transition: all 0.4s ease-in-out;
  }
  .options div {
    margin-top: 40px;
  }
  /* .options div #home #erp #road  #study {padding: 10px;}*/
  .open-menu,
  .close-menu {
    display: block;
  }
  #check:checked ~ .options {
    top: 0;
  }
}
`, "",{"version":3,"sources":["webpack://./src/Style.css"],"names":[],"mappings":"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ACxB,UAAU;EACV,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,mCAAmC;EACnC,sBAAsB;AACxB;AACA;EACE,cAAc;AAChB;AACA,WAAW;AACX;EACE,iCAAiC;EACjC,aAAa;EACb,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,SAAS;EACT,UAAU;EACV,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,YAAY;EACZ,YAAY;AACd;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;AACV;AACA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA,WAAW;AACX;EACE,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,kCAAkC;EAClC,eAAe;AACjB;AACA;EACE,eAAe;EACf,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;;EAEE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,0CAA0C;AAC5C;AACA;EACE,2BAA2B;EAC3B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,yCAAyC;AAC3C;AACA;EACE,aAAa;EACb,UAAU;EACV,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EA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","sourcesContent":["/*Using Css variable*/\r\n:root {\r\n  --bg-color: white;\r\n  --font-color: black;\r\n  --secondary: #00b0ff;\r\n}\r\n\r\n.dark {\r\n  --bg-color: black;\r\n  --font-color: white;\r\n  --secondary: #536dfe;\r\n  --color1: rgb(240, 240, 240);\r\n  --color3: rgb(23, 23, 24);\r\n  --color2: rgb(23, 23, 24);\r\n}\r\n\r\nbody {\r\n  -webkit-tap-highlight-color: transparent;\r\n  background-color: var(--bg-color);\r\n  color: var(--font-color);\r\n  font-family: \"DM Sans\", sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n\r\n  --color1: black;\r\n  --color2: rgb(23, 23, 24);\r\n  --color3: rgb(240, 240, 240);\r\n}\r\n\r\n.header {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 50px;\r\n  align-items: center;\r\n  margin-right: 2%;\r\n\r\n  list-style: none;\r\n  position: relative;\r\n  /* padding: 12px 20px;*/\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100px;\r\n}\r\n\r\n.options {\r\n  display: flex;\r\n  width: max(500px, 50%);\r\n  justify-content: space-around;\r\n  height: 25px;\r\n  font-size: max(15px, 1vw);\r\n  color: var(--font-color);\r\n}\r\n\r\n.options > div:hover {\r\n  cursor: pointer;\r\n  color: var(--secondary);\r\n}\r\n\r\n.home {\r\n  margin-top: 10vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding-left: 10%;\r\n}\r\n\r\n.slogan {\r\n  font-size: max(3.5vw, 40px);\r\n  display: flex;\r\n  margin-bottom: 20px;\r\n  font-weight: 900;\r\n}\r\n\r\n.slogan-para {\r\n  font-size: max(1vw, 20px);\r\n  width: max(80%, 280px);\r\n}\r\n\r\ni {\r\n  font-size: 25px;\r\n  width: auto;\r\n  cursor: pointer;\r\n  /*transform: translate(-50%, -50%);*/\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n/* study-material page */\r\n.study,\r\n.roadMaps {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.tagline {\r\n  margin-top: 5vh;\r\n  font-size: min(8vw, 70px);\r\n  font-weight: 950;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.search-bar {\r\n  margin-top: 5vh;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  border: 2px solid var(--font-color);\r\n  width: max(40vw, 300px);\r\n  padding: 8px;\r\n  padding-left: 15px;\r\n  gap: 10px;\r\n  border-radius: 5px;\r\n}\r\n#course-select {\r\n  background-color: var(--bg-color);\r\n  color: var(--font-color);\r\n  border: none;\r\n  outline: none;\r\n  color: (--font-color);\r\n  font-size: 25px;\r\n  border-left: 1px solid grey;\r\n  padding-left: 10px;\r\n  font-weight: 100;\r\n  width: 80%;\r\n}\r\n\r\n.courses,\r\n.roads {\r\n  width: 90%;\r\n\r\n  margin-top: 50px;\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 30px;\r\n}\r\n\r\n.courseBox {\r\n  height: 200px;\r\n  width: 300px;\r\n  border: 2px solid var(--font-color);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: var(--font-color);\r\n}\r\n\r\n.glink {\r\n  display: none;\r\n  border-bottom: none;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: var(--font-color);\r\n  border-bottom: none;\r\n}\r\na:visited {\r\n  text-decoration: none;\r\n  color: var(--font-color);\r\n}\r\na:hover {\r\n  text-decoration: none;\r\n  color: var(--font-color);\r\n}\r\na:active {\r\n  text-decoration: none;\r\n  color: var(--font-color);\r\n}\r\n.generate {\r\n  padding-bottom: 20px;\r\n}\r\n/*erp management*/\r\n.linkSection {\r\n  margin-top: 5vh;\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n}\r\n.erpManagement {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.linkSection > div {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 1px solid var(--font-color);\r\n  font-size: max(1.2vw, 15px);\r\n  height: max(35px, 5vh);\r\n  width: max(350px, 15vw);\r\n  border-radius: 5px;\r\n  color: var(--font-color);\r\n  background-color: var(--bg-color);\r\n  flex-wrap: wrap;\r\n  cursor: pointer;\r\n}\r\n.linkSection > div:hover {\r\n  color: var(--bg-color);\r\n  background-color: var(--font-color);\r\n  transition: 100ms;\r\n}\r\n.sub-tag {\r\n  font-size: 0.5em;\r\n  font-weight: 200;\r\n  margin-top: 2vh;\r\n  display: flex;\r\n  text-align: center;\r\n}\r\n.faqs {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 7vh;\r\n  width: 95%;\r\n  gap: 20px;\r\n}\r\n.faqs > div {\r\n  border: 1px solid var(--font-color);\r\n  display: flex;\r\n  align-items: flex-start;\r\n  flex-direction: column;\r\n  padding: 15px;\r\n  border-radius: 2px;\r\n}\r\n.sol {\r\n  display: none;\r\n}\r\n.roadBox {\r\n  height: 200px;\r\n  width: 300px;\r\n  border: 2px solid var(--font-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: var(--font-color);\r\n}\r\n.glink-r {\r\n  display: none;\r\n  border: 1px solid var(--font-color);\r\n  background-color: var(--bg-color);\r\n  color: var(--font-color);\r\n  width: 33%;\r\n  padding: 10px;\r\n  justify-content: center;\r\n  border-radius: 5px;\r\n}\r\n.glink-r:hover {\r\n  background-color: var(--font-color);\r\n  color: var(--bg-color);\r\n}\r\na.ar {\r\n  color: inherit;\r\n}\r\n/* footer */\r\n.footer {\r\n  background-color: rgb(23, 23, 24);\r\n  padding: 15px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  align-self: flex-end;\r\n}\r\n\r\n.reasources {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: white;\r\n  gap: 10px;\r\n  width: 50%;\r\n  flex-wrap: wrap;\r\n}\r\n.reasources > div:hover {\r\n  color: var(--secondary);\r\n  cursor: pointer;\r\n}\r\n.contact > a {\r\n  color: white;\r\n  margin: 10px;\r\n}\r\n.contact > a:hover {\r\n  color: var(--secondary);\r\n}\r\n\r\n.foot-logo {\r\n  color: white;\r\n  font-size: 25px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n}\r\n.foot-logo:hover {\r\n  color: var(--secondary);\r\n}\r\n.generate {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n/*About us*/\r\n.sloganButton {\r\n  margin-top: 4vw;\r\n  width: max(200px, 20vw);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  border: 1px solid var(--secondary);\r\n  border-radius: 10px;\r\n  font-size: max(1.2vw, 20px);\r\n}\r\n.sloganButton:hover {\r\n  background-color: var(--secondary);\r\n  cursor: pointer;\r\n}\r\n.about {\r\n  margin-top: 1vh;\r\n  padding: 5vw;\r\n}\r\n.aboutContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10vw;\r\n}\r\n.firstContent,\r\n.secondContent {\r\n  display: flex;\r\n  gap: 15vw;\r\n  padding-bottom: 8vw;\r\n  border-bottom: 1px solid var(--font-color);\r\n}\r\n.secondContent {\r\n  flex-direction: row-reverse;\r\n  border-bottom: none;\r\n}\r\n.textContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.question {\r\n  font-size: 3vw;\r\n  margin-bottom: 20px;\r\n}\r\n.question > span {\r\n  color: var(--secondary);\r\n}\r\n.answer {\r\n  font-size: min(2vw, 30px);\r\n}\r\n.team {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: min(6vw, 80px);\r\n}\r\n.meetTeam {\r\n  width: fit-content;\r\n  font-size: 5.5vw;\r\n  font-weight: 600;\r\n  border-bottom: 2px solid var(--secondary);\r\n}\r\n.teamBay {\r\n  display: flex;\r\n  width: 90%;\r\n  justify-content: space-between;\r\n}\r\n.teamBay > div {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: max(1.2vw, 13px);\r\n  width: 25vw;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  border: 1px solid var(--font-color);\r\n  border-radius: 10px;\r\n}\r\n.teamBay > div:hover {\r\n  background-color: var(--secondary);\r\n  cursor: pointer;\r\n}\r\n.teamPeople {\r\n  width: 90%;\r\n  padding: 10px;\r\n  border: 1px solid var(--secondary);\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n.teamPeople > div {\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10%;\r\n}\r\n/*flipcard*/\r\n.person {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.flip-card {\r\n  background-color: transparent;\r\n  width: min(45vw, 300px);\r\n  height: min(45vw, 300px);\r\n  perspective: 1000px;\r\n  margin-bottom: 0.8vw;\r\n}\r\n\r\n/* This container is needed to position the front and back side */\r\n.flip-card-inner {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  transition: transform 0.8s;\r\n  transform-style: preserve-3d;\r\n}\r\n\r\n/* Do an horizontal flip when you move the mouse over the flip box container */\r\n.flip-card:hover .flip-card-inner {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n/* Position the front and back side */\r\n.flip-card-front,\r\n.flip-card-back {\r\n  border-radius: 10px;\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-backface-visibility: hidden; /* Safari */\r\n  backface-visibility: hidden;\r\n}\r\n.flip-card-front > img {\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Style the front side (fallback if image is missing) */\r\n.flip-card-front {\r\n  color: var(--font-color);\r\n}\r\n\r\n/* Style the back side */\r\n.flip-card-back {\r\n  background-color: var(--secondary);\r\n  color: var(--font-color);\r\n  font-size: min(3vw, 25px);\r\n  transform: rotateY(180deg);\r\n}\r\n.flip-card-back > span {\r\n  margin-bottom: 2.5vw;\r\n  width: 90%;\r\n}\r\n.socials {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 70%;\r\n}\r\n.socials > a > i {\r\n  font-size: min(5vw, 30px);\r\n}\r\n.person > span {\r\n  font-size: min(3vw, 20px);\r\n}\r\n/*slider*/\r\n\r\n#slider {\r\n  position: relative;\r\n  width: 60%;\r\n  min-height: 30vw;\r\n  margin: 80px auto;\r\n  font-family: \"DM sans\", sans-serif;\r\n  perspective: 1400px;\r\n  transform-style: preserve-3d;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  display: none;\r\n  position: absolute;\r\n  top: 108%;\r\n  width: 4vw;\r\n  height: 18px;\r\n  margin: 0 15px 0 0;\r\n  opacity: 0.6;\r\n  cursor: pointer;\r\n}\r\n\r\n/*input[type=radio]:nth-child(5) {\r\n  margin-right: 0px;\r\n}\r\n\r\ninput[type=radio]:checked {\r\n  opacity: 1;\r\n}*/\r\n\r\nh2 {\r\n  font-size: 2.5vw;\r\n  color: white;\r\n  margin: 0;\r\n  margin-bottom: 20px;\r\n}\r\n\r\np {\r\n  width: 50%;\r\n  font-size: min(30px, 1.5vw);\r\n}\r\n\r\n#slider label {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  color: white;\r\n  font-weight: normal;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  flex-direction: column;\r\n  transition: transform 400ms ease;\r\n  box-sizing: border-box;\r\n  padding: 20px;\r\n}\r\n.sliderContent {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 40px;\r\n  height: 100%;\r\n}\r\n#slide1 {\r\n  background: #066892;\r\n}\r\n.dark #slide1 {\r\n  background: #232e6f;\r\n}\r\n\r\n#slide2 {\r\n  background: #0d97d2;\r\n}\r\n.dark #slide2 {\r\n  background: #384ab2;\r\n}\r\n\r\n#slide3 {\r\n  background: #00b0ff;\r\n}\r\n.dark #slide3 {\r\n  background: #536dfe;\r\n}\r\n/*\r\n#slide4 {\r\n  background: slateblue;\r\n}\r\n\r\n#slide5 {\r\n  background: violet;\r\n}*/\r\n\r\n/* Slider Functionality */\r\n\r\n/* Active Slide */\r\n#s1:checked ~ #slide1,\r\n#s2:checked ~ #slide2,\r\n#s3:checked ~ #slide3,\r\n#s4:checked ~ #slide4,\r\n#s5:checked ~ #slide5 {\r\n  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);\r\n  transform: translate3d(0%, 0, 0px);\r\n}\r\n\r\n/* Next Slide */\r\n#s1:checked ~ #slide2,\r\n#s2:checked ~ #slide3,\r\n#s3:checked ~ #slide4,\r\n#s4:checked ~ #slide5,\r\n#s5:checked ~ #slide1 {\r\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);\r\n  transform: translate3d(15%, 0, -100px);\r\n}\r\n\r\n/* Next to Next Slide */\r\n#s1:checked ~ #slide3,\r\n#s2:checked ~ #slide4,\r\n#s3:checked ~ #slide5,\r\n#s4:checked ~ #slide1,\r\n#s5:checked ~ #slide2 {\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n  transform: translate3d(30%, 0, -250px);\r\n}\r\n\r\n/* Previous to Previous Slide */\r\n#s1:checked ~ #slide4,\r\n#s2:checked ~ #slide5,\r\n#s3:checked ~ #slide1,\r\n#s4:checked ~ #slide2,\r\n#s5:checked ~ #slide3 {\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n  transform: translate3d(-30%, 0, -250px);\r\n}\r\n\r\n/* Previous Slide */\r\n#s1:checked ~ #slide5,\r\n#s2:checked ~ #slide1,\r\n#s3:checked ~ #slide2,\r\n#s4:checked ~ #slide3,\r\n#s5:checked ~ #slide4 {\r\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);\r\n  transform: translate3d(-15%, 0, -100px);\r\n}\r\n\r\n/*Responsive*/\r\n@media screen and (max-width: 800px) {\r\n  /*homepage taglines*/\r\n  body {\r\n    align-items: center;\r\n  }\r\n  #image {\r\n    display: none;\r\n  }\r\n  .home {\r\n    padding-left: 0;\r\n  }\r\n  .text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  .slogan {\r\n    text-align: center;\r\n  }\r\n  .slogan-para {\r\n    text-align: center;\r\n  }\r\n  /*slider*/\r\n  #slider {\r\n    margin-top: 40px;\r\n    margin-bottom: 20px;\r\n    min-height: 50vh;\r\n    width: 70%;\r\n  }\r\n  #slider label {\r\n    height: 100%;\r\n  }\r\n  .sliderContent {\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    height: 100%;\r\n    align-items: center;\r\n  }\r\n  h2 {\r\n    font-size: max(2.6vw, 14px);\r\n  }\r\n  p {\r\n    width: 80%;\r\n    font-size: max(2.2vw, 11px);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n  }\r\n  input[type=\"radio\"] {\r\n    position: absolute;\r\n    top: 104%;\r\n  }\r\n}\r\n\r\n/*hamburger menu*/\r\n.options {\r\n  display: flex;\r\n}\r\n/* .options div {padding-left: 30px;}\r\n/*.options div #home #erp #road #study {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: var(--color1);\r\n    text-align: left;\r\n    transition: 0.15s ease-in-out;\r\n    position: relative;\r\n    text-transform: uppercase;\r\n}\r\n.options div #home \r\n #erp #road #study::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 0;\r\n    height: 1px;\r\n    background-color: var(--color1);\r\n    transition: 0.15s ease-in-out;\r\n}\r\n.options div #home #erp #road  #study:hover:after {width: 100%;}*/\r\n.open-menu,\r\n.close-menu {\r\n  position: absolute;\r\n  color: var(--color1);\r\n  cursor: pointer;\r\n  font-size: 1.5rem;\r\n  display: none;\r\n}\r\n.open-menu {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 52%;\r\n  /*transform: translateY(-50%);*/\r\n  transform: translate(-50%, -50%);\r\n}\r\n.close-menu {\r\n  color: var(--color1);\r\n  top: 40px;\r\n  right: 35px;\r\n}\r\n#check {\r\n  display: none;\r\n}\r\n@media (max-width: 610px) {\r\n  .options {\r\n    font-weight: bold;\r\n    font-size: larger;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100%;\r\n    height: 50vh;\r\n    position: fixed;\r\n    top: -100%;\r\n    right: 0;\r\n    z-index: 100;\r\n    background-color: var(--color3);\r\n    transition: all 0.4s ease-in-out;\r\n  }\r\n  .options div {\r\n    margin-top: 40px;\r\n  }\r\n  /* .options div #home #erp #road  #study {padding: 10px;}*/\r\n  .open-menu,\r\n  .close-menu {\r\n    display: block;\r\n  }\r\n  #check:checked ~ .options {\r\n    top: 0;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/Style.css":
/*!***********************!*\
  !*** ./src/Style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./Style.css */ "./node_modules/css-loader/dist/cjs.js!./src/Style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/reasources/10.png":
/*!*******************************!*\
  !*** ./src/reasources/10.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e06d3f5e0485d7c981ec.png";

/***/ }),

/***/ "./src/reasources/9.png":
/*!******************************!*\
  !*** ./src/reasources/9.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22ea43c2b7c0f287f84f.png";

/***/ }),

/***/ "./src/reasources/computer.svg":
/*!*************************************!*\
  !*** ./src/reasources/computer.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "65df72cc6f8a3ee1cae1.svg";

/***/ }),

/***/ "./src/reasources/darkmode.svg":
/*!*************************************!*\
  !*** ./src/reasources/darkmode.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7e5aee6776a70d96efc.svg";

/***/ }),

/***/ "./src/reasources/goal.svg":
/*!*********************************!*\
  !*** ./src/reasources/goal.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b90b6194cacc9331bdc.svg";

/***/ }),

/***/ "./src/reasources/helpLight.svg":
/*!**************************************!*\
  !*** ./src/reasources/helpLight.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed792d7154d81d708796.svg";

/***/ }),

/***/ "./src/reasources/journey.svg":
/*!************************************!*\
  !*** ./src/reasources/journey.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7de33925849c04f25298.svg";

/***/ }),

/***/ "./src/reasources/lightmode.svg":
/*!**************************************!*\
  !*** ./src/reasources/lightmode.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aee3578e9dc63b42aa04.svg";

/***/ }),

/***/ "./src/reasources/opensource.svg":
/*!***************************************!*\
  !*** ./src/reasources/opensource.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ae5fc0e744b4a9f0066a.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Style.css */ "./src/Style.css");
/* harmony import */ var _src_reasources_10_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/reasources/10.png */ "./src/reasources/10.png");
/* harmony import */ var _src_reasources_9_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/reasources/9.png */ "./src/reasources/9.png");
/* harmony import */ var _src_reasources_darkmode_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/reasources/darkmode.svg */ "./src/reasources/darkmode.svg");
/* harmony import */ var _src_reasources_lightmode_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/reasources/lightmode.svg */ "./src/reasources/lightmode.svg");
/* harmony import */ var _src_reasources_goal_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/reasources/goal.svg */ "./src/reasources/goal.svg");
/* harmony import */ var _src_reasources_journey_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/reasources/journey.svg */ "./src/reasources/journey.svg");
/* harmony import */ var _src_reasources_opensource_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/reasources/opensource.svg */ "./src/reasources/opensource.svg");
/* harmony import */ var _src_reasources_computer_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/reasources/computer.svg */ "./src/reasources/computer.svg");
/* harmony import */ var _src_reasources_helpLight_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/reasources/helpLight.svg */ "./src/reasources/helpLight.svg");











//Intial logo generation
document.getElementById("lg").src = _src_reasources_10_png__WEBPACK_IMPORTED_MODULE_1__;
document.getElementById("ft-logo").src = _src_reasources_9_png__WEBPACK_IMPORTED_MODULE_2__;
//intial homepage pic generation
const img = document.getElementById("image");
img.src = _src_reasources_lightmode_svg__WEBPACK_IMPORTED_MODULE_4__;
document.getElementById("goal").src = _src_reasources_goal_svg__WEBPACK_IMPORTED_MODULE_5__;
document.getElementById("journey").src = _src_reasources_journey_svg__WEBPACK_IMPORTED_MODULE_6__;
document.getElementById("os").src = _src_reasources_opensource_svg__WEBPACK_IMPORTED_MODULE_7__;
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
    logo.src = _src_reasources_9_png__WEBPACK_IMPORTED_MODULE_2__;
    if (img) {
      img.src = _src_reasources_darkmode_svg__WEBPACK_IMPORTED_MODULE_3__;
    }
  } else {
    logo.src = _src_reasources_10_png__WEBPACK_IMPORTED_MODULE_1__;
    if (img) {
      img.src = _src_reasources_lightmode_svg__WEBPACK_IMPORTED_MODULE_4__;
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
    <img id="image" src='${_src_reasources_lightmode_svg__WEBPACK_IMPORTED_MODULE_4__}' style="width:50%;margin-right: 10%;">
</div>
<section id="slider">
        <input type="radio" name="slider" id="s1" checked />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" />
        <label for="s1" id="slide1"
          ><h2>Our Goal</h2>
          <div class="sliderContent">
            <img src="${_src_reasources_goal_svg__WEBPACK_IMPORTED_MODULE_5__}" width="50%" />
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
            <img src="${_src_reasources_journey_svg__WEBPACK_IMPORTED_MODULE_6__}" width="50%" />
            <p>
              Our journey began on a random afternoon in our hostel room, where
              we started working on this project with the support of our peers.
            </p>
          </div>
        </label>
        <label for="s3" id="slide3"
          ><h2>Open Source Contribution</h2>
          <div class="sliderContent">
            <img src="${_src_reasources_opensource_svg__WEBPACK_IMPORTED_MODULE_7__}" width="40%" />
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
      img.src = _src_reasources_darkmode_svg__WEBPACK_IMPORTED_MODULE_3__;
    }
  } else {
    if (img) {
      img.src = _src_reasources_lightmode_svg__WEBPACK_IMPORTED_MODULE_4__;
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
</div>`;

  const generateCourses = (array, linkArray) => {
    let courses = document.querySelector(".courses");
    let searchBar = document.getElementById("course-select");

    searchBar.addEventListener("input", () => {
      //input being typed inside the search bar
      const searchText = searchBar.value.toLowerCase();

      // Clear existing courses
      courses.innerHTML = "";

      for (let index = 0; index < array.length; index++) {
        const courseName = array[index].toLowerCase();
        const link = linkArray[index];

        if (courseName.includes(searchText)) {
          let courseDiv = document.createElement("div");
          courseDiv.classList.add("courseBox");
          courses.appendChild(courseDiv);
          courseDiv.innerHTML = `<span id="course-${index}">${array[index]}</span>
          <span class="glink"  id="link-${index}"><a href="${link}" target="_blank">Content</a></span>`;

          courseDiv.addEventListener("mouseover", () => {
            document.getElementById(`course-${index}`).style.display = "none";
            document.getElementById(`link-${index}`).style.display = "flex";
          });
          courseDiv.addEventListener("mouseout", () => {
            document.getElementById(`course-${index}`).style.display = "flex";
            document.getElementById(`link-${index}`).style.display = "none";
          });
        }
      }
    });
    //To generate courses when you load up page
    searchBar.dispatchEvent(new Event("input"));
  };

  //example arrays
  let courseArr = ["DES101", "FAC202", "MEC104", "MKT202", "OHM401", "STM204"];
  let linkArr = [
    "https://drive.google.com/drive/folders/1pfWH0J2ek7yxTMbmoCv-4YQPB5XKOLHr?usp=sharing",
    "https://drive.google.com/drive/folders/1q7UsKWFg5odT6rX57T4LArhSY5eLa2RJ?usp=sharing",
    "https://drive.google.com/drive/folders/1NlrHKCP52b53OQiYcdBgO7NvL9eQ81zv?usp=sharing",
    "https://drive.google.com/drive/folders/1tzIs2ux6lR1u8eT9fTAD-5JXBkhAGqrb?usp=drive_link",
    "https://drive.google.com/drive/folders/1_-mkdQHCqpPceiQeZw7j91r0hVcUhmhJ?usp=sharing",
    "https://drive.google.com/drive/folders/1Z9BqJC1vCnMxFSRT8YMafB1sdlLAv8mu?usp=sharing",
  ];
  generateCourses(courseArr, linkArr);
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
      <img src="${_src_reasources_computer_svg__WEBPACK_IMPORTED_MODULE_8__}" alt="" width="25%" />
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
      <img src=${_src_reasources_helpLight_svg__WEBPACK_IMPORTED_MODULE_9__} alt="" width="25%" />
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGFBQWE7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZUFBZTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsc0JBQXNCLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxXQUFXLE1BQU0sYUFBYSxhQUFhLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxTQUFTLFlBQVksYUFBYSxPQUFPLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVks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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseUJBQXlCO0FBQzNDLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL3NyYy9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9zcmMvU3R5bGUuY3NzP2I2YTgiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKlVzaW5nIENzcyB2YXJpYWJsZSovXHJcbjpyb290IHtcclxuICAtLWJnLWNvbG9yOiB3aGl0ZTtcclxuICAtLWZvbnQtY29sb3I6IGJsYWNrO1xyXG4gIC0tc2Vjb25kYXJ5OiAjMDBiMGZmO1xyXG59XHJcblxyXG4uZGFyayB7XHJcbiAgLS1iZy1jb2xvcjogYmxhY2s7XHJcbiAgLS1mb250LWNvbG9yOiB3aGl0ZTtcclxuICAtLXNlY29uZGFyeTogIzUzNmRmZTtcclxuICAtLWNvbG9yMTogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gIC0tY29sb3IzOiByZ2IoMjMsIDIzLCAyNCk7XHJcbiAgLS1jb2xvcjI6IHJnYigyMywgMjMsIDI0KTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkRNIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcblxyXG4gIC0tY29sb3IxOiBibGFjaztcclxuICAtLWNvbG9yMjogcmdiKDIzLCAyMywgMjQpO1xyXG4gIC0tY29sb3IzOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuXHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyogcGFkZGluZzogMTJweCAyMHB4OyovXHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLm9wdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IG1heCg1MDBweCwgNTAlKTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiBtYXgoMTVweCwgMXZ3KTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuXHJcbi5vcHRpb25zID4gZGl2OmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5ob21lIHtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5zbG9nYW4ge1xyXG4gIGZvbnQtc2l6ZTogbWF4KDMuNXZ3LCA0MHB4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLnNsb2dhbi1wYXJhIHtcclxuICBmb250LXNpemU6IG1heCgxdncsIDIwcHgpO1xyXG4gIHdpZHRoOiBtYXgoODAlLCAyODBweCk7XHJcbn1cclxuXHJcbmkge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB3aWR0aDogYXV0bztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsqL1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBzdHVkeS1tYXRlcmlhbCBwYWdlICovXHJcbi5zdHVkeSxcclxuLnJvYWRNYXBzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udGFnbGluZSB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG4gIGZvbnQtc2l6ZTogbWluKDh2dywgNzBweCk7XHJcbiAgZm9udC13ZWlnaHQ6IDk1MDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uc2VhcmNoLWJhciB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcclxuICB3aWR0aDogbWF4KDQwdncsIDMwMHB4KTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIGdhcDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuI2NvdXJzZS1zZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6ICgtLWZvbnQtY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyZXk7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmNvdXJzZXMsXHJcbi5yb2FkcyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuXHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMzBweDtcclxufVxyXG5cclxuLmNvdXJzZUJveCB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG5cclxuLmdsaW5rIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbmE6dmlzaXRlZCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG5hOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcbmE6YWN0aXZlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcbi5nZW5lcmF0ZSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLyplcnAgbWFuYWdlbWVudCovXHJcbi5saW5rU2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4uZXJwTWFuYWdlbWVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxpbmtTZWN0aW9uID4gZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDE1cHgpO1xyXG4gIGhlaWdodDogbWF4KDM1cHgsIDV2aCk7XHJcbiAgd2lkdGg6IG1heCgzNTBweCwgMTV2dyk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubGlua1NlY3Rpb24gPiBkaXY6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgdHJhbnNpdGlvbjogMTAwbXM7XHJcbn1cclxuLnN1Yi10YWcge1xyXG4gIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZhcXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiA3dmg7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuLmZhcXMgPiBkaXYge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4uc29sIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5yb2FkQm94IHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuLmdsaW5rLXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICB3aWR0aDogMzMlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5nbGluay1yOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG59XHJcbmEuYXIge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcbi8qIGZvb3RlciAqL1xyXG4uZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDIzLCAyNCk7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnJlYXNvdXJjZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGdhcDogMTBweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4ucmVhc291cmNlcyA+IGRpdjpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jb250YWN0ID4gYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4uY29udGFjdCA+IGE6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4uZm9vdC1sb2dvIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG4uZm9vdC1sb2dvOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxufVxyXG4uZ2VuZXJhdGUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4vKkFib3V0IHVzKi9cclxuLnNsb2dhbkJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogNHZ3O1xyXG4gIHdpZHRoOiBtYXgoMjAwcHgsIDIwdncpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LXNpemU6IG1heCgxLjJ2dywgMjBweCk7XHJcbn1cclxuLnNsb2dhbkJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFib3V0IHtcclxuICBtYXJnaW4tdG9wOiAxdmg7XHJcbiAgcGFkZGluZzogNXZ3O1xyXG59XHJcbi5hYm91dENvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTB2dztcclxufVxyXG4uZmlyc3RDb250ZW50LFxyXG4uc2Vjb25kQ29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDE1dnc7XHJcbiAgcGFkZGluZy1ib3R0b206IDh2dztcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuLnNlY29uZENvbnRlbnQge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbi50ZXh0Q29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5xdWVzdGlvbiB7XHJcbiAgZm9udC1zaXplOiAzdnc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4ucXVlc3Rpb24gPiBzcGFuIHtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxufVxyXG4uYW5zd2VyIHtcclxuICBmb250LXNpemU6IG1pbigydncsIDMwcHgpO1xyXG59XHJcbi50ZWFtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IG1pbig2dncsIDgwcHgpO1xyXG59XHJcbi5tZWV0VGVhbSB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGZvbnQtc2l6ZTogNS41dnc7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcclxufVxyXG4udGVhbUJheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4udGVhbUJheSA+IGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IG1heCgxLjJ2dywgMTNweCk7XHJcbiAgd2lkdGg6IDI1dnc7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLnRlYW1CYXkgPiBkaXY6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50ZWFtUGVvcGxlIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxufVxyXG4udGVhbVBlb3BsZSA+IGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDEwJTtcclxufVxyXG4vKmZsaXBjYXJkKi9cclxuLnBlcnNvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiBtaW4oNDV2dywgMzAwcHgpO1xyXG4gIGhlaWdodDogbWluKDQ1dncsIDMwMHB4KTtcclxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDAuOHZ3O1xyXG59XHJcblxyXG4vKiBUaGlzIGNvbnRhaW5lciBpcyBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGZyb250IGFuZCBiYWNrIHNpZGUgKi9cclxuLmZsaXAtY2FyZC1pbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLyogRG8gYW4gaG9yaXpvbnRhbCBmbGlwIHdoZW4geW91IG1vdmUgdGhlIG1vdXNlIG92ZXIgdGhlIGZsaXAgYm94IGNvbnRhaW5lciAqL1xyXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xyXG4uZmxpcC1jYXJkLWZyb250LFxyXG4uZmxpcC1jYXJkLWJhY2sge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgLyogU2FmYXJpICovXHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5mbGlwLWNhcmQtZnJvbnQgPiBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBmcm9udCBzaWRlIChmYWxsYmFjayBpZiBpbWFnZSBpcyBtaXNzaW5nKSAqL1xyXG4uZmxpcC1jYXJkLWZyb250IHtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBiYWNrIHNpZGUgKi9cclxuLmZsaXAtY2FyZC1iYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBmb250LXNpemU6IG1pbigzdncsIDI1cHgpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcbi5mbGlwLWNhcmQtYmFjayA+IHNwYW4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDIuNXZ3O1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuLnNvY2lhbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuLnNvY2lhbHMgPiBhID4gaSB7XHJcbiAgZm9udC1zaXplOiBtaW4oNXZ3LCAzMHB4KTtcclxufVxyXG4ucGVyc29uID4gc3BhbiB7XHJcbiAgZm9udC1zaXplOiBtaW4oM3Z3LCAyMHB4KTtcclxufVxyXG4vKnNsaWRlciovXHJcblxyXG4jc2xpZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtaW4taGVpZ2h0OiAzMHZ3O1xyXG4gIG1hcmdpbjogODBweCBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkRNIHNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBwZXJzcGVjdGl2ZTogMTQwMHB4O1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwOCU7XHJcbiAgd2lkdGg6IDR2dztcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qaW5wdXRbdHlwZT1yYWRpb106bnRoLWNoaWxkKDUpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB7XHJcbiAgb3BhY2l0eTogMTtcclxufSovXHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyLjV2dztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZm9udC1zaXplOiBtaW4oMzBweCwgMS41dncpO1xyXG59XHJcblxyXG4jc2xpZGVyIGxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4uc2xpZGVyQ29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuI3NsaWRlMSB7XHJcbiAgYmFja2dyb3VuZDogIzA2Njg5MjtcclxufVxyXG4uZGFyayAjc2xpZGUxIHtcclxuICBiYWNrZ3JvdW5kOiAjMjMyZTZmO1xyXG59XHJcblxyXG4jc2xpZGUyIHtcclxuICBiYWNrZ3JvdW5kOiAjMGQ5N2QyO1xyXG59XHJcbi5kYXJrICNzbGlkZTIge1xyXG4gIGJhY2tncm91bmQ6ICMzODRhYjI7XHJcbn1cclxuXHJcbiNzbGlkZTMge1xyXG4gIGJhY2tncm91bmQ6ICMwMGIwZmY7XHJcbn1cclxuLmRhcmsgI3NsaWRlMyB7XHJcbiAgYmFja2dyb3VuZDogIzUzNmRmZTtcclxufVxyXG4vKlxyXG4jc2xpZGU0IHtcclxuICBiYWNrZ3JvdW5kOiBzbGF0ZWJsdWU7XHJcbn1cclxuXHJcbiNzbGlkZTUge1xyXG4gIGJhY2tncm91bmQ6IHZpb2xldDtcclxufSovXHJcblxyXG4vKiBTbGlkZXIgRnVuY3Rpb25hbGl0eSAqL1xyXG5cclxuLyogQWN0aXZlIFNsaWRlICovXHJcbiNzMTpjaGVja2VkIH4gI3NsaWRlMSxcclxuI3MyOmNoZWNrZWQgfiAjc2xpZGUyLFxyXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTMsXHJcbiNzNDpjaGVja2VkIH4gI3NsaWRlNCxcclxuI3M1OmNoZWNrZWQgfiAjc2xpZGU1IHtcclxuICBib3gtc2hhZG93OiAwIDEzcHggMjZweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMTJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDBweCk7XHJcbn1cclxuXHJcbi8qIE5leHQgU2xpZGUgKi9cclxuI3MxOmNoZWNrZWQgfiAjc2xpZGUyLFxyXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTMsXHJcbiNzMzpjaGVja2VkIH4gI3NsaWRlNCxcclxuI3M0OmNoZWNrZWQgfiAjc2xpZGU1LFxyXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTEge1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTUlLCAwLCAtMTAwcHgpO1xyXG59XHJcblxyXG4vKiBOZXh0IHRvIE5leHQgU2xpZGUgKi9cclxuI3MxOmNoZWNrZWQgfiAjc2xpZGUzLFxyXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTQsXHJcbiNzMzpjaGVja2VkIH4gI3NsaWRlNSxcclxuI3M0OmNoZWNrZWQgfiAjc2xpZGUxLFxyXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTIge1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMCUsIDAsIC0yNTBweCk7XHJcbn1cclxuXHJcbi8qIFByZXZpb3VzIHRvIFByZXZpb3VzIFNsaWRlICovXHJcbiNzMTpjaGVja2VkIH4gI3NsaWRlNCxcclxuI3MyOmNoZWNrZWQgfiAjc2xpZGU1LFxyXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTEsXHJcbiNzNDpjaGVja2VkIH4gI3NsaWRlMixcclxuI3M1OmNoZWNrZWQgfiAjc2xpZGUzIHtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwJSwgMCwgLTI1MHB4KTtcclxufVxyXG5cclxuLyogUHJldmlvdXMgU2xpZGUgKi9cclxuI3MxOmNoZWNrZWQgfiAjc2xpZGU1LFxyXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTEsXHJcbiNzMzpjaGVja2VkIH4gI3NsaWRlMixcclxuI3M0OmNoZWNrZWQgfiAjc2xpZGUzLFxyXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTQge1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgLTEwMHB4KTtcclxufVxyXG5cclxuLypSZXNwb25zaXZlKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAvKmhvbWVwYWdlIHRhZ2xpbmVzKi9cclxuICBib2R5IHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gICNpbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuaG9tZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIC50ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnNsb2dhbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zbG9nYW4tcGFyYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC8qc2xpZGVyKi9cclxuICAjc2xpZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogNTB2aDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfVxyXG4gICNzbGlkZXIgbGFiZWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuc2xpZGVyQ29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IG1heCgyLjZ2dywgMTRweCk7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZvbnQtc2l6ZTogbWF4KDIuMnZ3LCAxMXB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwNCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKmhhbWJ1cmdlciBtZW51Ki9cclxuLm9wdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLyogLm9wdGlvbnMgZGl2IHtwYWRkaW5nLWxlZnQ6IDMwcHg7fVxyXG4vKi5vcHRpb25zIGRpdiAjaG9tZSAjZXJwICNyb2FkICNzdHVkeSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3IxKTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLm9wdGlvbnMgZGl2ICNob21lIFxyXG4gI2VycCAjcm9hZCAjc3R1ZHk6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcclxufVxyXG4ub3B0aW9ucyBkaXYgI2hvbWUgI2VycCAjcm9hZCAgI3N0dWR5OmhvdmVyOmFmdGVyIHt3aWR0aDogMTAwJTt9Ki9cclxuLm9wZW4tbWVudSxcclxuLmNsb3NlLW1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ub3Blbi1tZW51IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTIlO1xyXG4gIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyovXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuLmNsb3NlLW1lbnUge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xyXG4gIHRvcDogNDBweDtcclxuICByaWdodDogMzVweDtcclxufVxyXG4jY2hlY2sge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYxMHB4KSB7XHJcbiAgLm9wdGlvbnMge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogLTEwMCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLm9wdGlvbnMgZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG4gIC8qIC5vcHRpb25zIGRpdiAjaG9tZSAjZXJwICNyb2FkICAjc3R1ZHkge3BhZGRpbmc6IDEwcHg7fSovXHJcbiAgLm9wZW4tbWVudSxcclxuICAuY2xvc2UtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgI2NoZWNrOmNoZWNrZWQgfiAub3B0aW9ucyB7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL1N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7QUFDckI7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGlDQUFpQztFQUNqQyx3QkFBd0I7RUFDeEIsa0NBQWtDO0VBQ2xDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7O0VBRWpCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCOztFQUVoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7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WjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0VBQ1g7QUFDRjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lFQXFCaUU7QUFDakU7O0VBRUUsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixRQUFRO0lBQ1IsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBLDBEQUEwRDtFQUMxRDs7SUFFRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxNQUFNO0VBQ1I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlVzaW5nIENzcyB2YXJpYWJsZSovXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1iZy1jb2xvcjogd2hpdGU7XFxyXFxuICAtLWZvbnQtY29sb3I6IGJsYWNrO1xcclxcbiAgLS1zZWNvbmRhcnk6ICMwMGIwZmY7XFxyXFxufVxcclxcblxcclxcbi5kYXJrIHtcXHJcXG4gIC0tYmctY29sb3I6IGJsYWNrO1xcclxcbiAgLS1mb250LWNvbG9yOiB3aGl0ZTtcXHJcXG4gIC0tc2Vjb25kYXJ5OiAjNTM2ZGZlO1xcclxcbiAgLS1jb2xvcjE6IHJnYigyNDAsIDI0MCwgMjQwKTtcXHJcXG4gIC0tY29sb3IzOiByZ2IoMjMsIDIzLCAyNCk7XFxyXFxuICAtLWNvbG9yMjogcmdiKDIzLCAyMywgMjQpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBmb250LWZhbWlseTogXFxcIkRNIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuXFxyXFxuICAtLWNvbG9yMTogYmxhY2s7XFxyXFxuICAtLWNvbG9yMjogcmdiKDIzLCAyMywgMjQpO1xcclxcbiAgLS1jb2xvcjM6IHJnYigyNDAsIDI0MCwgMjQwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMiU7XFxyXFxuXFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgLyogcGFkZGluZzogMTJweCAyMHB4OyovXFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiBtYXgoNTAwcHgsIDUwJSk7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDE1cHgsIDF2dyk7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5vcHRpb25zID4gZGl2OmhvdmVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsb2dhbiB7XFxyXFxuICBmb250LXNpemU6IG1heCgzLjV2dywgNDBweCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi5zbG9nYW4tcGFyYSB7XFxyXFxuICBmb250LXNpemU6IG1heCgxdncsIDIwcHgpO1xcclxcbiAgd2lkdGg6IG1heCg4MCUsIDI4MHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuaSB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIHN0dWR5LW1hdGVyaWFsIHBhZ2UgKi9cXHJcXG4uc3R1ZHksXFxyXFxuLnJvYWRNYXBzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRhZ2xpbmUge1xcclxcbiAgbWFyZ2luLXRvcDogNXZoO1xcclxcbiAgZm9udC1zaXplOiBtaW4oOHZ3LCA3MHB4KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5NTA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zZWFyY2gtYmFyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDV2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgd2lkdGg6IG1heCg0MHZ3LCAzMDBweCk7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbiNjb3Vyc2Utc2VsZWN0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjb2xvcjogKC0tZm9udC1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyZXk7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdXJzZXMsXFxyXFxuLnJvYWRzIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuXFxyXFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvdXJzZUJveCB7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2xpbmsge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxufVxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuYTp2aXNpdGVkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuYTpob3ZlciB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcbmE6YWN0aXZlIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuLmdlbmVyYXRlIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG4vKmVycCBtYW5hZ2VtZW50Ki9cXHJcXG4ubGlua1NlY3Rpb24ge1xcclxcbiAgbWFyZ2luLXRvcDogNXZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcbi5lcnBNYW5hZ2VtZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmxpbmtTZWN0aW9uID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuMnZ3LCAxNXB4KTtcXHJcXG4gIGhlaWdodDogbWF4KDM1cHgsIDV2aCk7XFxyXFxuICB3aWR0aDogbWF4KDM1MHB4LCAxNXZ3KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmxpbmtTZWN0aW9uID4gZGl2OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IDEwMG1zO1xcclxcbn1cXHJcXG4uc3ViLXRhZyB7XFxyXFxuICBmb250LXNpemU6IDAuNWVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIG1hcmdpbi10b3A6IDJ2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mYXFzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luLXRvcDogN3ZoO1xcclxcbiAgd2lkdGg6IDk1JTtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuLmZhcXMgPiBkaXYge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG59XFxyXFxuLnNvbCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG4ucm9hZEJveCB7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuLmdsaW5rLXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgd2lkdGg6IDMzJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuLmdsaW5rLXI6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbn1cXHJcXG5hLmFyIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG4vKiBmb290ZXIgKi9cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMjMsIDI0KTtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5yZWFzb3VyY2VzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcbi5yZWFzb3VyY2VzID4gZGl2OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uY29udGFjdCA+IGEge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG4uY29udGFjdCA+IGE6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxufVxcclxcblxcclxcbi5mb290LWxvZ28ge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG4uZm9vdC1sb2dvOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG4uZ2VuZXJhdGUge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4vKkFib3V0IHVzKi9cXHJcXG4uc2xvZ2FuQnV0dG9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDR2dztcXHJcXG4gIHdpZHRoOiBtYXgoMjAwcHgsIDIwdncpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuMnZ3LCAyMHB4KTtcXHJcXG59XFxyXFxuLnNsb2dhbkJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYWJvdXQge1xcclxcbiAgbWFyZ2luLXRvcDogMXZoO1xcclxcbiAgcGFkZGluZzogNXZ3O1xcclxcbn1cXHJcXG4uYWJvdXRDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTB2dztcXHJcXG59XFxyXFxuLmZpcnN0Q29udGVudCxcXHJcXG4uc2Vjb25kQ29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxNXZ3O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDh2dztcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuLnNlY29uZENvbnRlbnQge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuLnRleHRDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4ucXVlc3Rpb24ge1xcclxcbiAgZm9udC1zaXplOiAzdnc7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG4ucXVlc3Rpb24gPiBzcGFuIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG4uYW5zd2VyIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWluKDJ2dywgMzBweCk7XFxyXFxufVxcclxcbi50ZWFtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogbWluKDZ2dywgODBweCk7XFxyXFxufVxcclxcbi5tZWV0VGVhbSB7XFxyXFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICBmb250LXNpemU6IDUuNXZ3O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG4udGVhbUJheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuLnRlYW1CYXkgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDEuMnZ3LCAxM3B4KTtcXHJcXG4gIHdpZHRoOiAyNXZ3O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcbi50ZWFtQmF5ID4gZGl2OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi50ZWFtUGVvcGxlIHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbi50ZWFtUGVvcGxlID4gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwJTtcXHJcXG59XFxyXFxuLypmbGlwY2FyZCovXFxyXFxuLnBlcnNvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mbGlwLWNhcmQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICB3aWR0aDogbWluKDQ1dncsIDMwMHB4KTtcXHJcXG4gIGhlaWdodDogbWluKDQ1dncsIDMwMHB4KTtcXHJcXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjh2dztcXHJcXG59XFxyXFxuXFxyXFxuLyogVGhpcyBjb250YWluZXIgaXMgbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXFxyXFxuLmZsaXAtY2FyZC1pbm5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xcclxcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRG8gYW4gaG9yaXpvbnRhbCBmbGlwIHdoZW4geW91IG1vdmUgdGhlIG1vdXNlIG92ZXIgdGhlIGZsaXAgYm94IGNvbnRhaW5lciAqL1xcclxcbi5mbGlwLWNhcmQ6aG92ZXIgLmZsaXAtY2FyZC1pbm5lciB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUG9zaXRpb24gdGhlIGZyb250IGFuZCBiYWNrIHNpZGUgKi9cXHJcXG4uZmxpcC1jYXJkLWZyb250LFxcclxcbi5mbGlwLWNhcmQtYmFjayB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyAvKiBTYWZhcmkgKi9cXHJcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmZsaXAtY2FyZC1mcm9udCA+IGltZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsZSB0aGUgZnJvbnQgc2lkZSAoZmFsbGJhY2sgaWYgaW1hZ2UgaXMgbWlzc2luZykgKi9cXHJcXG4uZmxpcC1jYXJkLWZyb250IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIGJhY2sgc2lkZSAqL1xcclxcbi5mbGlwLWNhcmQtYmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiBtaW4oM3Z3LCAyNXB4KTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcclxcbn1cXHJcXG4uZmxpcC1jYXJkLWJhY2sgPiBzcGFuIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIuNXZ3O1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuLnNvY2lhbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcbi5zb2NpYWxzID4gYSA+IGkge1xcclxcbiAgZm9udC1zaXplOiBtaW4oNXZ3LCAzMHB4KTtcXHJcXG59XFxyXFxuLnBlcnNvbiA+IHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiBtaW4oM3Z3LCAyMHB4KTtcXHJcXG59XFxyXFxuLypzbGlkZXIqL1xcclxcblxcclxcbiNzbGlkZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMwdnc7XFxyXFxuICBtYXJnaW46IDgwcHggYXV0bztcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRE0gc2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBwZXJzcGVjdGl2ZTogMTQwMHB4O1xcclxcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMDglO1xcclxcbiAgd2lkdGg6IDR2dztcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcXHJcXG4gIG9wYWNpdHk6IDAuNjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyppbnB1dFt0eXBlPXJhZGlvXTpudGgtY2hpbGQoNSkge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59Ki9cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6IDIuNXZ3O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgZm9udC1zaXplOiBtaW4oMzBweCwgMS41dncpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2xpZGVyIGxhYmVsIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgZWFzZTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG4uc2xpZGVyQ29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuI3NsaWRlMSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDY2ODkyO1xcclxcbn1cXHJcXG4uZGFyayAjc2xpZGUxIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMyMzJlNmY7XFxyXFxufVxcclxcblxcclxcbiNzbGlkZTIge1xcclxcbiAgYmFja2dyb3VuZDogIzBkOTdkMjtcXHJcXG59XFxyXFxuLmRhcmsgI3NsaWRlMiB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMzg0YWIyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2xpZGUzIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMGIwZmY7XFxyXFxufVxcclxcbi5kYXJrICNzbGlkZTMge1xcclxcbiAgYmFja2dyb3VuZDogIzUzNmRmZTtcXHJcXG59XFxyXFxuLypcXHJcXG4jc2xpZGU0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NsaWRlNSB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2aW9sZXQ7XFxyXFxufSovXFxyXFxuXFxyXFxuLyogU2xpZGVyIEZ1bmN0aW9uYWxpdHkgKi9cXHJcXG5cXHJcXG4vKiBBY3RpdmUgU2xpZGUgKi9cXHJcXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTEsXFxyXFxuI3MyOmNoZWNrZWQgfiAjc2xpZGUyLFxcclxcbiNzMzpjaGVja2VkIH4gI3NsaWRlMyxcXHJcXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTQsXFxyXFxuI3M1OmNoZWNrZWQgfiAjc2xpZGU1IHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMTNweCAyNnB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAxMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwLCAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOZXh0IFNsaWRlICovXFxyXFxuI3MxOmNoZWNrZWQgfiAjc2xpZGUyLFxcclxcbiNzMjpjaGVja2VkIH4gI3NsaWRlMyxcXHJcXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTQsXFxyXFxuI3M0OmNoZWNrZWQgfiAjc2xpZGU1LFxcclxcbiNzNTpjaGVja2VkIH4gI3NsaWRlMSB7XFxyXFxuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTUlLCAwLCAtMTAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOZXh0IHRvIE5leHQgU2xpZGUgKi9cXHJcXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTMsXFxyXFxuI3MyOmNoZWNrZWQgfiAjc2xpZGU0LFxcclxcbiNzMzpjaGVja2VkIH4gI3NsaWRlNSxcXHJcXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTEsXFxyXFxuI3M1OmNoZWNrZWQgfiAjc2xpZGUyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwJSwgMCwgLTI1MHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogUHJldmlvdXMgdG8gUHJldmlvdXMgU2xpZGUgKi9cXHJcXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTQsXFxyXFxuI3MyOmNoZWNrZWQgfiAjc2xpZGU1LFxcclxcbiNzMzpjaGVja2VkIH4gI3NsaWRlMSxcXHJcXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTIsXFxyXFxuI3M1OmNoZWNrZWQgfiAjc2xpZGUzIHtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMCUsIDAsIC0yNTBweCk7XFxyXFxufVxcclxcblxcclxcbi8qIFByZXZpb3VzIFNsaWRlICovXFxyXFxuI3MxOmNoZWNrZWQgfiAjc2xpZGU1LFxcclxcbiNzMjpjaGVja2VkIH4gI3NsaWRlMSxcXHJcXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTIsXFxyXFxuI3M0OmNoZWNrZWQgfiAjc2xpZGUzLFxcclxcbiNzNTpjaGVja2VkIH4gI3NsaWRlNCB7XFxyXFxuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgLTEwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLypSZXNwb25zaXZlKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgLypob21lcGFnZSB0YWdsaW5lcyovXFxyXFxuICBib2R5IHtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gICNpbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICAuaG9tZSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIH1cXHJcXG4gIC50ZXh0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5zbG9nYW4ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAuc2xvZ2FuLXBhcmEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAvKnNsaWRlciovXFxyXFxuICAjc2xpZGVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gICAgbWluLWhlaWdodDogNTB2aDtcXHJcXG4gICAgd2lkdGg6IDcwJTtcXHJcXG4gIH1cXHJcXG4gICNzbGlkZXIgbGFiZWwge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAuc2xpZGVyQ29udGVudCB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWF4KDIuNnZ3LCAxNHB4KTtcXHJcXG4gIH1cXHJcXG4gIHAge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBmb250LXNpemU6IG1heCgyLjJ2dywgMTFweCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwNCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qaGFtYnVyZ2VyIG1lbnUqL1xcclxcbi5vcHRpb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbi8qIC5vcHRpb25zIGRpdiB7cGFkZGluZy1sZWZ0OiAzMHB4O31cXHJcXG4vKi5vcHRpb25zIGRpdiAjaG9tZSAjZXJwICNyb2FkICNzdHVkeSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3IxKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuLm9wdGlvbnMgZGl2ICNob21lIFxcclxcbiAjZXJwICNyb2FkICNzdHVkeTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5vcHRpb25zIGRpdiAjaG9tZSAjZXJwICNyb2FkICAjc3R1ZHk6aG92ZXI6YWZ0ZXIge3dpZHRoOiAxMDAlO30qL1xcclxcbi5vcGVuLW1lbnUsXFxyXFxuLmNsb3NlLW1lbnUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5vcGVuLW1lbnUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MiU7XFxyXFxuICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsqL1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxufVxcclxcbi5jbG9zZS1tZW51IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcclxcbiAgdG9wOiA0MHB4O1xcclxcbiAgcmlnaHQ6IDM1cHg7XFxyXFxufVxcclxcbiNjaGVjayB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjEwcHgpIHtcXHJcXG4gIC5vcHRpb25zIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNTB2aDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IC0xMDAlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG4gIC5vcHRpb25zIGRpdiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICB9XFxyXFxuICAvKiAub3B0aW9ucyBkaXYgI2hvbWUgI2VycCAjcm9hZCAgI3N0dWR5IHtwYWRkaW5nOiAxMHB4O30qL1xcclxcbiAgLm9wZW4tbWVudSxcXHJcXG4gIC5jbG9zZS1tZW51IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxuICAjY2hlY2s6Y2hlY2tlZCB+IC5vcHRpb25zIHtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL1N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgbG9nbzEgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzLzEwLnBuZ1wiO1xyXG5pbXBvcnQgbG9nbzIgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzLzkucG5nXCI7XHJcbmltcG9ydCBkcGljIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy9kYXJrbW9kZS5zdmdcIjtcclxuaW1wb3J0IGxwaWMgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzL2xpZ2h0bW9kZS5zdmdcIjtcclxuaW1wb3J0IHNwaWMxIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy9nb2FsLnN2Z1wiO1xyXG5pbXBvcnQgc3BpYzIgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzL2pvdXJuZXkuc3ZnXCI7XHJcbmltcG9ydCBzcGljMyBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvb3BlbnNvdXJjZS5zdmdcIjtcclxuaW1wb3J0IGNvbXB1dGVyIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy9jb21wdXRlci5zdmdcIjtcclxuaW1wb3J0IGhlbHBQaWMgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzL2hlbHBMaWdodC5zdmdcIjtcclxuXHJcbi8vSW50aWFsIGxvZ28gZ2VuZXJhdGlvblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxnXCIpLnNyYyA9IGxvZ28xO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ0LWxvZ29cIikuc3JjID0gbG9nbzI7XHJcbi8vaW50aWFsIGhvbWVwYWdlIHBpYyBnZW5lcmF0aW9uXHJcbmNvbnN0IGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VcIik7XHJcbmltZy5zcmMgPSBscGljO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvYWxcIikuc3JjID0gc3BpYzE7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiam91cm5leVwiKS5zcmMgPSBzcGljMjtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvc1wiKS5zcmMgPSBzcGljMztcclxuLy9EYXJrTW9kZSBMaWdodE1vZGUgVG9nZ2xlXHJcbmNvbnN0IHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlRGFya1wiKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5jb25zdCBvcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcHRpb25zXCIpO1xyXG5cclxudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYmktbW9vblwiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJkYXJrXCIpO1xyXG4gIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxnXCIpO1xyXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VcIik7XHJcblxyXG4gIC8vc2VlIHdoaWNoIG1vZGUgaXQgaXNcclxuICBsZXQgaXNEYXJrTW9kZSA9IGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya1wiKTtcclxuXHJcbiAgaWYgKGlzRGFya01vZGUpIHtcclxuICAgIGxvZ28uc3JjID0gbG9nbzI7XHJcbiAgICBpZiAoaW1nKSB7XHJcbiAgICAgIGltZy5zcmMgPSBkcGljO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2dvLnNyYyA9IGxvZ28xO1xyXG4gICAgaWYgKGltZykge1xyXG4gICAgICBpbWcuc3JjID0gbHBpYztcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxubGV0IGdlbmVyYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZW5lcmF0ZVwiKTtcclxuY29uc3QgaG9lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xyXG5jb25zdCBzdHVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHVkeVwiKTtcclxuY29uc3Qgcm9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9hZFwiKTtcclxuY29uc3QgZXJwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnBcIik7XHJcblxyXG4vL0dlbmVyYXRlIGhvbWVQYWdlIGR5bmFtaWNhbGx5XHJcbmxldCBob21lZ2VuID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlzRGFya01vZGUgPSBib2R5LmNsYXNzTGlzdC5jb250YWlucyhcImRhcmtcIik7XHJcbiAgaG9lLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpXCI7XHJcbiAgc3R1ZC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcclxuICByb2FkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xyXG4gIGVycC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcclxuICBnZW5lcmF0ZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImhvbWVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsb2dhblwiPlxyXG4gICAgICAgICAgICAgIFNpbXBsaWZ5IGFjYWRlbWljcyB3aXRoIHVzXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xvZ2FuLXBhcmFcIj5cclxuICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gU251QWNhZGVtaWEsIHRoZSB1bHRpbWF0ZSBzdHVkZW50IGRlc2lnbmVkIHdlYnNpdGUgdGhhdCBoZWxwcyBpbiBzaW1wbGlmeWluZyBzdHVkeSBsaWZlXHJcbiAgICAgICAgICAgICAgICBhdCBTTlVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbG9nYW5CdXR0b25cIj5BYm91dCB1czwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8aW1nIGlkPVwiaW1hZ2VcIiBzcmM9JyR7bHBpY30nIHN0eWxlPVwid2lkdGg6NTAlO21hcmdpbi1yaWdodDogMTAlO1wiPlxyXG48L2Rpdj5cclxuPHNlY3Rpb24gaWQ9XCJzbGlkZXJcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNsaWRlclwiIGlkPVwiczFcIiBjaGVja2VkIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzbGlkZXJcIiBpZD1cInMyXCIgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNsaWRlclwiIGlkPVwiczNcIiAvPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJzMVwiIGlkPVwic2xpZGUxXCJcclxuICAgICAgICAgID48aDI+T3VyIEdvYWw8L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlckNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3NwaWMxfVwiIHdpZHRoPVwiNTAlXCIgLz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgU251QWNhZGVtaWEgYWltcyB0byBhc3Npc3Qgc3R1ZGVudHMgdGhyb3VnaG91dCB0aGVpciBhY2FkZW1pY1xyXG4gICAgICAgICAgICAgIGpvdXJuZXkgd2l0aCBzdHVkeSBtYXRlcmlhbHMsIG5vdGVzLCBQWVFzLCBhbmQgYXNzaWdubWVudHMuIE91clxyXG4gICAgICAgICAgICAgIHdlYnNpdGUgYWxzbyBhZGRyZXNzZXMgY29tbW9uIHF1ZXN0aW9ucyBhYm91dCBFUlAsIEJsYWNrYm9hcmQsIGFuZFxyXG4gICAgICAgICAgICAgIG90aGVyIGdlbmVyYWwgcXVlcmllcyBmb3IgZnJlc2hlcnMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInMyXCIgaWQ9XCJzbGlkZTJcIlxyXG4gICAgICAgICAgPjxoMj5PdXIgSm91cm5leTwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyQ29udGVudFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7c3BpYzJ9XCIgd2lkdGg9XCI1MCVcIiAvPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBPdXIgam91cm5leSBiZWdhbiBvbiBhIHJhbmRvbSBhZnRlcm5vb24gaW4gb3VyIGhvc3RlbCByb29tLCB3aGVyZVxyXG4gICAgICAgICAgICAgIHdlIHN0YXJ0ZWQgd29ya2luZyBvbiB0aGlzIHByb2plY3Qgd2l0aCB0aGUgc3VwcG9ydCBvZiBvdXIgcGVlcnMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInMzXCIgaWQ9XCJzbGlkZTNcIlxyXG4gICAgICAgICAgPjxoMj5PcGVuIFNvdXJjZSBDb250cmlidXRpb248L2gyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlckNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3NwaWMzfVwiIHdpZHRoPVwiNDAlXCIgLz5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgT3VyIHdlYnNpdGUgaXMgb3Blbi1zb3VyY2UsIGFsbG93aW5nIHN0dWRlbnRzIHRvIGFjY2VzcyBhbmRcclxuICAgICAgICAgICAgICBjb250cmlidXRlIHRvIHRoZSBzb3VyY2UgY29kZSB0aHJvdWdoIG91ciBHaXRIdWIgcmVwb3NpdG9yeS4gV2VcclxuICAgICAgICAgICAgICB3ZWxjb21lIHlvdXIgcGFydGljaXBhdGlvbiBhbmQgY29sbGFib3JhdGlvbiBpbiBtYWtpbmcgb3VyXHJcbiAgICAgICAgICAgICAgcGxhdGZvcm0gZXZlbiBiZXR0ZXIuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvc2VjdGlvbj5gO1xyXG5cclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlXCIpO1xyXG4gIGlmIChpc0RhcmtNb2RlKSB7XHJcbiAgICBpZiAoaW1nKSB7XHJcbiAgICAgIGltZy5zcmMgPSBkcGljO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoaW1nKSB7XHJcbiAgICAgIGltZy5zcmMgPSBscGljO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZWdlbik7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZWZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWVnZW4pO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3QtbG9nb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZWdlbik7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9nb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZWdlbik7XHJcbi8vZ2VuZXJhdGUgU3R1ZHkgTWF0ZXJpYWwgVGFiXHJcbmxldCBzdHVkeUdlbiA9ICgpID0+IHtcclxuICBob2Uuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XHJcbiAgc3R1ZC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKVwiO1xyXG4gIHJvYWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XHJcbiAgZXJwLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xyXG4gIGdlbmVyYXRlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwic3R1ZHlcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YWdsaW5lXCI+XHJcbiAgICAgICAgPHNwYW4+V2hlcmUgVGV4dGJvb2tzPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPkFuZCBEcmVhbXMgQ29sbGlkZTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInN1Yi10YWdcIj5FeHBsb3JlLCBEaXNjb3ZlciwgYW5kIFNoYXBlIFlvdXIgQWNhZGVtaWMgSm91cm5leSB3aXRoIExpbWl0bGVzcyBQb3NzaWJpbGl0aWVzPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWJhclwiPlxyXG4gICAgICAgIDxzcGFuPjxpIGNsYXNzPVwiYmkgYmktc2VhcmNoXCIgc3R5bGU9XCJmb250LXNpemU6IG1heCgyMHB4LDEuNXZ3KTtcIiA+PC9pPjwvc3Bhbj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNvdXJzZS1zZWxlY3RcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIGRhdGEtc2VhcmNoPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY291cnNlc1wiPlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcblxyXG4gIGNvbnN0IGdlbmVyYXRlQ291cnNlcyA9IChhcnJheSwgbGlua0FycmF5KSA9PiB7XHJcbiAgICBsZXQgY291cnNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291cnNlc1wiKTtcclxuICAgIGxldCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZS1zZWxlY3RcIik7XHJcblxyXG4gICAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgIC8vaW5wdXQgYmVpbmcgdHlwZWQgaW5zaWRlIHRoZSBzZWFyY2ggYmFyXHJcbiAgICAgIGNvbnN0IHNlYXJjaFRleHQgPSBzZWFyY2hCYXIudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgIC8vIENsZWFyIGV4aXN0aW5nIGNvdXJzZXNcclxuICAgICAgY291cnNlcy5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IGNvdXJzZU5hbWUgPSBhcnJheVtpbmRleF0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBsaW5rID0gbGlua0FycmF5W2luZGV4XTtcclxuXHJcbiAgICAgICAgaWYgKGNvdXJzZU5hbWUuaW5jbHVkZXMoc2VhcmNoVGV4dCkpIHtcclxuICAgICAgICAgIGxldCBjb3Vyc2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgY291cnNlRGl2LmNsYXNzTGlzdC5hZGQoXCJjb3Vyc2VCb3hcIik7XHJcbiAgICAgICAgICBjb3Vyc2VzLmFwcGVuZENoaWxkKGNvdXJzZURpdik7XHJcbiAgICAgICAgICBjb3Vyc2VEaXYuaW5uZXJIVE1MID0gYDxzcGFuIGlkPVwiY291cnNlLSR7aW5kZXh9XCI+JHthcnJheVtpbmRleF19PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbGlua1wiICBpZD1cImxpbmstJHtpbmRleH1cIj48YSBocmVmPVwiJHtsaW5rfVwiIHRhcmdldD1cIl9ibGFua1wiPkNvbnRlbnQ8L2E+PC9zcGFuPmA7XHJcblxyXG4gICAgICAgICAgY291cnNlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY291cnNlLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGluay0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY291cnNlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb3Vyc2UtJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaW5rLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vVG8gZ2VuZXJhdGUgY291cnNlcyB3aGVuIHlvdSBsb2FkIHVwIHBhZ2VcclxuICAgIHNlYXJjaEJhci5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIpKTtcclxuICB9O1xyXG5cclxuICAvL2V4YW1wbGUgYXJyYXlzXHJcbiAgbGV0IGNvdXJzZUFyciA9IFtcIkRFUzEwMVwiLCBcIkZBQzIwMlwiLCBcIk1FQzEwNFwiLCBcIk1LVDIwMlwiLCBcIk9ITTQwMVwiLCBcIlNUTTIwNFwiXTtcclxuICBsZXQgbGlua0FyciA9IFtcclxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMXBmV0gwSjJlazd5eFRNYm1vQ3YtNFlRUEI1WEtPTEhyP3VzcD1zaGFyaW5nXCIsXHJcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9kcml2ZS9mb2xkZXJzLzFxN1VzS1dGZzVvZFQ2clg1N1Q0TEFyaFNZNWVMYTJSSj91c3A9c2hhcmluZ1wiLFxyXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xTmxySEtDUDUyYjUzT1FpWWNkQmdPN052TDllUTgxenY/dXNwPXNoYXJpbmdcIixcclxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMXR6SXMydXg2bFIxdThlVDlmVEFELTVKWEJraEFHcXJiP3VzcD1kcml2ZV9saW5rXCIsXHJcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9kcml2ZS9mb2xkZXJzLzFfLW1rZFFIQ3FwUGNlaVFlWnc3ajkxcjBoVmNVaG1oSj91c3A9c2hhcmluZ1wiLFxyXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xWjlCcUpDMXZDbk14RlNSVDhZTWFmQjFzZGxMQXY4bXU/dXNwPXNoYXJpbmdcIixcclxuICBdO1xyXG4gIGdlbmVyYXRlQ291cnNlcyhjb3Vyc2VBcnIsIGxpbmtBcnIpO1xyXG59O1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0dWR5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdHVkeUdlbik7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3R1ZHlmXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdHVkeUdlbik7XHJcblxyXG4vL0dlbmVyYXRlIFJvYWRtYXBcclxuY29uc3Qgcm9hZEdlbiA9ICgpID0+IHtcclxuICBob2Uuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XHJcbiAgc3R1ZC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcclxuICByb2FkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpXCI7XHJcbiAgZXJwLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xyXG4gIGdlbmVyYXRlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicm9hZE1hcHNcIj5cclxuICA8ZGl2IGNsYXNzPVwidGFnbGluZVwiPlxyXG4gICAgICA8c3Bhbj5DaG9vc2U8L3NwYW4+XHJcbiAgICAgIDxzcGFuPllvdXIgQWNhZGVtaWMgVHJhaWw8L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwic3ViLXRhZ1wiPkNoYXJ0IFlvdXIgQWNhZGVtaWMgSm91cm5leTogRXhwbG9yZSBNYWpvciBhbmQgTWlub3IgUGF0aHM8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInNlYXJjaC1iYXJcIj5cclxuICAgICAgPHNwYW4+PGkgY2xhc3M9XCJiaSBiaS1zZWFyY2hcIiBzdHlsZT1cImZvbnQtc2l6ZTogbWF4KDIwcHgsMS41dncpO1wiID48L2k+PC9zcGFuPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNvdXJzZS1zZWxlY3RcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIGRhdGEtc2VhcmNoPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyb2Fkc1wiPlxyXG4gICAgICBcclxuICA8L2Rpdj5gO1xyXG4gIGxldCByb2FkQXJyID0gW1wiQ1NFXCIsIFwiRUNFXCIsIFwiRUVFXCIsIFwiTUVDSFwiLCBcIkJNU1wiLCBcIkVDT1wiXTtcclxuICBnZW5lcmF0ZVJvYWQocm9hZEFycik7XHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZVJvYWQgPSAoYXJyYXkpID0+IHtcclxuICBsZXQgcm9hZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvYWRzXCIpO1xyXG4gIGxldCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdXJzZS1zZWxlY3RcIik7XHJcblxyXG4gIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgLy9pbnB1dCBiZWluZyB0eXBlZCBpbnNpZGUgdGhlIHNlYXJjaCBiYXJcclxuICAgIGNvbnN0IHNlYXJjaFRleHQgPSBzZWFyY2hCYXIudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAvLyBDbGVhciBleGlzdGluZyBjb3Vyc2VzXHJcbiAgICByb2Fkcy5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgYnJhbmNoTmFtZSA9IGFycmF5W2luZGV4XS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAvL2NvbnN0IGxpbmsgPSBsaW5rQXJyYXlbaW5kZXhdO1xyXG4gICAgICBpZiAoYnJhbmNoTmFtZS5pbmNsdWRlcyhzZWFyY2hUZXh0KSkge1xyXG4gICAgICAgIGxldCBtYXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG1hcERpdi5jbGFzc0xpc3QuYWRkKFwicm9hZEJveFwiKTtcclxuICAgICAgICByb2Fkcy5hcHBlbmRDaGlsZChtYXBEaXYpO1xyXG4gICAgICAgIG1hcERpdi5pbm5lckhUTUwgPSBgPHNwYW4gaWQ9XCJjb3Vyc2UtJHtpbmRleH1cIj4ke2FycmF5W2luZGV4XX08L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgd2lkdGg6ODAlXCIgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbGluay1yXCIgIGlkPVwibWFqb3JMaW5rLSR7aW5kZXh9XCI+PGEgY2xhc3M9J2FyJyBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5NYWpvcjwvYT48L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImdsaW5rLXJcIiBpZD1cIm1pbm9yTGluay0ke2luZGV4fVwiPjxhIGNsYXNzPSdhcidocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5NaW5vcjwvYT48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgICAgICBtYXBEaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY291cnNlLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1ham9yTGluay0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtaW5vckxpbmstJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWFwRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY291cnNlLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1ham9yTGluay0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtaW5vckxpbmstJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICAvL1RvIGdlbmVyYXRlIGNvdXJzZXMgd2hlbiB5b3UgbG9hZCB1cCBwYWdlXHJcbiAgc2VhcmNoQmFyLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpO1xyXG59O1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb2FkXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb2FkR2VuKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb2FkZlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm9hZEdlbik7XHJcblxyXG4vL0dlbmVyYXRlIEVycCBNYW5hZ2VtZW50IFRhYlxyXG5jb25zdCBlcnBHZW4gPSAoKSA9PiB7XHJcbiAgaG9lLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xyXG4gIHN0dWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XHJcbiAgcm9hZC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcclxuICBlcnAuc3R5bGUuYm9yZGVyQm90dG9tID0gXCIycHggc29saWQgdmFyKC0tZm9udC1jb2xvcilcIjtcclxuICBnZW5lcmF0ZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImVycE1hbmFnZW1lbnRcIj5cclxuICA8ZGl2IGNsYXNzPVwidGFnbGluZVwiPlxyXG4gICAgICA8c3Bhbj5TaW1wbGlmeTwvc3Bhbj5cclxuICAgICAgPHNwYW4+IFlvdXIgU251IEV4cGVyaWVuY2U8L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwic3ViLXRhZ1wiID5Db21tb25seSBhc2tlZCBGQVFzIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibGlua1NlY3Rpb25cIj5cclxuICAgICAgPGRpdiBpZD1cImVycExpbmtcIj5FcnA8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImZhc3RMaW5rXCI+RmFzdHJhY2s8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImhvc3RlTGlua1wiPkhvc3RlbCBNYW5hZ2VtZW50PC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJiYkxpbmtcIj5CbGFja2JvYXJkPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImZhcXNcIj5cclxuICAgICAgPGRpdiBjbGFzcz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHdpZHRoOiAxMDAlO1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPldoYXQgaXMgRXJwPzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWNhcmV0LWRvd24tZmlsbFwiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNvbFwiPnJhbmRvbSBpbWFnZS92aWRlbzwvZGl2PiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG4gIGxldCBsaW5rU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlua1NlY3Rpb25cIik7XHJcbiAgbGV0IGxpbmtzID0gbGlua1NlY3Rpb24uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIik7XHJcbiAgbGV0IGZhcXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhcXNcIik7XHJcblxyXG4gIGZ1bmN0aW9uIGZhcUZpbGwoYXJyYXkpIHtcclxuICAgIGZhcXMuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbGV0IGVsZW1lbnQgPSBhcnJheVtpXTtcclxuICAgICAgbGV0IGZhcURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGZhcURpdi5pbm5lckhUTUwgPSBgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjsgd2lkdGg6IDEwMCU7XCI+XHJcbiAgICAgIDxzcGFuPiR7ZWxlbWVudC5xdWVzdGlvbn08L3NwYW4+XHJcbiAgICAgIDxzcGFuPjxpIGlkPSdkcm9wLSR7aX0nIGNsYXNzPVwiYmkgYmktY2FyZXQtZG93bi1maWxsXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzb2xcIiBpZD0nc29sLSR7aX0nPiR7ZWxlbWVudC5hbnN3ZXJ9PC9kaXY+YDtcclxuICAgICAgZmFxcy5hcHBlbmRDaGlsZChmYXFEaXYpO1xyXG4gICAgICBmYXFEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBzb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc29sLSR7aX1gKTtcclxuICAgICAgICBjb25zdCBhcnJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkcm9wLSR7aX1gKTtcclxuICAgICAgICBpZiAoc29sLnN0eWxlLmRpc3BsYXkgPT0gXCJmbGV4XCIpIHtcclxuICAgICAgICAgIHNvbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICBhcnJvdy5jbGFzc0xpc3QgPSBcImJpLWNhcmV0LWRvd24tZmlsbFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzb2wuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgYXJyb3cuY2xhc3NMaXN0ID0gXCJiaS1jYXJldC11cC1maWxsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgZmFxcy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIC8vRXhhbXBsZSBhcnJheXNcclxuICBsZXQgZXJwRmFxcyA9IFtcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyBFUlA/XCIsXHJcbiAgICAgIGFuc3dlcjpcclxuICAgICAgICBcIlRoZSBTaGl2IE5hZGFyIFVuaXZlcnNpdHkgRVJQIHBvcnRhbCBpcyBhIHdlYi1iYXNlZCBhcHBsaWNhdGlvbiB0aGF0IHByb3ZpZGVzIHN0dWRlbnRzLCBmYWN1bHR5LCBhbmQgc3RhZmYgd2l0aCBhY2Nlc3MgdG8gYSB2YXJpZXR5IG9mIHVuaXZlcnNpdHkgc2VydmljZXMuIFRoZSBwb3J0YWwgaW5jbHVkZXMgZmVhdHVyZXMgc3VjaCBhcyBzdHVkZW50IHNlbGYtc2VydmljZSwgZmFjdWx0eSBzZWxmLXNlcnZpY2UsIHN0YWZmIHNlbGYtc2VydmljZSwgYW5kIHBhcmVudC1zdHVkZW50IHBvcnRhbC5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBsb2cgaW4gdG8gdGhlIEVSUD9cIixcclxuICAgICAgYW5zd2VyOlxyXG4gICAgICAgIFwiVG8gbG9nIGluIHRvIHlvdXIgRVJQLCB5b3UgbXVzdCBlbnRlciB5b3VyIFNOVSBuZXQgSUQgKGUuZy4tIHh5MTIzKSBhbmQgcGFzc3dvcmQuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gYWRkIGNvdXJzZXMgdG8gcGxhbm5lcj9cIixcclxuICAgICAgYW5zd2VyOlxyXG4gICAgICAgIFwiVXBvbiBsb2dnaW5nIGludG8gdGhlIEVSUCwgbmF2aWdhdGUgdG8gdGhlICdBY2FkZW1pYyBQbGFubmluZycgc2VjdGlvbiBsb2NhdGVkIGluIHRoZSBsZWZ0LWhhbmQgbWVudSBiYXIsIG9yIGRpcmVjdGx5IGFjY2VzcyB0aGUgJ1BsYW4nIG9wdGlvbiBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIGFsb25nc2lkZSBvdGhlciBvcHRpb25zIGxpa2Ugc2VhcmNoIGFuZCBlbnJvbGwuIFByb2NlZWQgdG8gY2xpY2sgb24gJ0Jyb3dzZSBDYXRhbG9nJyBhbmQgdXNlIHRoZSB0ZXh0IGJveCB0byBpbnB1dCB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBzdWJqZWN0IHlvdSBkZXNpcmUgdG8gc2VsZWN0IGEgY291cnNlIGZyb20uIEFsbCBhdmFpbGFibGUgc3ViamVjdCBvcHRpb25zIHdpbGwgYmUgZGlzcGxheWVkLCB3aGVyZSB5b3UgY2FuIHRoZW4gY2xpY2sgdGhlIGRyb3Bkb3duIGJ1dHRvbiB0byBjaG9vc2UgeW91ciBkZXNpcmVkIGNvdXJzZSBhbmQgY2xpY2sgb24gJ0FkZCBQbGFubmVyJyB0byBpbmNsdWRlIGl0IGluIHlvdXIgcGxhbm5lci5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIldoZXJlIHRvIHNlZSB5b3VyIHRpbWV0YWJsZSBmcm9tP1wiLFxyXG4gICAgICBhbnN3ZXI6XHJcbiAgICAgICAgXCJJbiB0aGUgRVJQIHN5c3RlbSwgbG9jYXRlIHRoZSAnRW5yb2xsbWVudCcgb3B0aW9uIG9uIHRoZSBsZWZ0LWhhbmQgc2lkZSBvZiB0aGUgcGFnZSwgc2l0dWF0ZWQgdW5kZXIgdGhlIG1lbnUgYm94LiBDbGljayBvbiB0aGUgJ015IFdlZWtseSBTY2hlZHVsZScgb3B0aW9uIHRvIGFjY2VzcyB5b3VyIHRpbWV0YWJsZSBmb3IgdGhlIGN1cnJlbnQgd2Vlay5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBjaGVjayBHUEE/XCIsXHJcbiAgICAgIGFuc3dlcjpcclxuICAgICAgICBcIkluIHRoZSBFUlAgc3lzdGVtLCBmaW5kIHRoZSAnRW5yb2xsbWVudCcgb3B0aW9uIG9uIHRoZSBsZWZ0LWhhbmQgc2lkZSBvZiB0aGUgcGFnZSwgd2hpY2ggaXMgbG9jYXRlZCB1bmRlciB0aGUgbWVudSBib3guIENsaWNrIG9uICdUZXJtIFN0YXRpc3RpY3MnIGFuZCBjaG9vc2UgdGhlIHNlbWVzdGVyIGZvciB3aGljaCB5b3Ugd2lzaCB0byBjaGVjayB5b3VyIEdQQS4gVGhlbiwgcmV2aWV3IHlvdXIgR1BBIGZvciB0aGUgc2VsZWN0ZWQgc2VtZXN0ZXIuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjpcclxuICAgICAgICBcIkhvdyB0byBjaGVjayB0aGUgdG90YWwgY3JlZGl0cyBjb21wbGV0ZWQgYW5kIHRvdGFsIGNyZWRpdHMgbGVmdD9cIixcclxuICAgICAgYW5zd2VyOlxyXG4gICAgICAgICdGaW5kIHRoZSBcIk15IEFjYWRlbWljc1wiIG9wdGlvbiBpbiB0aGUgRVJQIHN5c3RlbSBhbG9uZyB3aXRoIG90aGVyIG9wdGlvbnMgbGlrZSBcIkVucm9sLFwiIFwiUGxhbixcIiBldGMuIG5lYXIgdGhlIHRvcCBvZiB0aGUgcGFnZS4gVGhlbiBzZWxlY3QgXCJWaWV3IE15IEFkdmlzZW1lbnQgUmVwb3J0LlwiIFRoaXMgcmVwb3J0IHdpbGwgc2hvdyB0aGUgY3JlZGl0cyB5b3UgaGF2ZSBhbHJlYWR5IGVhcm5lZCBhcyB3ZWxsIGFzIHRoZSBjcmVkaXRzIHlvdSBzdGlsbCBuZWVkIHRvIGZpbmlzaC4nLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGxldCBmYXN0cmFja0ZhcXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgRmFzdHJhY2s/XCIsXHJcbiAgICAgIGFuc3dlcjpcclxuICAgICAgICAnVG8gbGVhdmUgdGhlIGNhbXB1cyBmb3IgYSBkYXkgb3IgbG9uZ2VyLCB5b3UgbXVzdCBvYnRhaW4gYXBwcm92YWwgZnJvbSB0aGUgd2FyZGVuLiBUaGlzIGFwcHJvdmFsIGlzIHJlZmVycmVkIHRvIGFzIFwiZmFzdHJhY2suXCInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiSG93IGRvIEkgYXBwbHkgZm9yIEZhc3RyYWNrP1wiLFxyXG4gICAgICBhbnN3ZXI6XHJcbiAgICAgICAgJ1BsZWFzZSBhY2Nlc3MgdGhlIFNOVUxpbmtzIHdlYnNpdGUgYW5kIGZpbmQgdGhlIFwibG9naW5cIiBvcHRpb24uIE9uY2UgbG9nZ2VkIGluLCB5b3Ugd2lsbCBzZWUgYSB2YXJpZXR5IG9mIGNob2ljZXMuIENsaWNrIG9uIHRoZSBcImZhc3RyYWNrXCIgb3B0aW9uIHRvIGFjY2VzcyB0aGUgZm9ybSBmb3IgcmVxdWVzdGluZyBwZXJtaXNzaW9uIHRvIGxlYXZlIHRoZSBjYW1wdXMsIHdoZXRoZXIgaXQgaXMgZm9yIHBlcnNvbmFsIG9yIG9mZmljaWFsIHJlYXNvbnMuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgdG8gZG8gaW4gY2FzZSBGYXN0cmFjayBpcyByZWplY3RlZD9cIixcclxuICAgICAgYW5zd2VyOlxyXG4gICAgICAgIFwiSWYgeW91ciBmYXN0cmFjayByZXF1ZXN0IGlzIHJlamVjdGVkIGZvciBhbnkgcmVhc29uLCB5b3UgaGF2ZSB0d28gb3B0aW9uczogWW91IGNhbiByZXZpZXcgdGhlIGZvcm0gdG8gc2VlIGlmIHRoZXJlIGFyZSBhbnkgbWlzdGFrZXMsIGNvcnJlY3QgdGhlbSwgYW5kIHJlc3VibWl0IGl0IGZvciBhcHByb3ZhbC4gQWx0ZXJuYXRpdmVseSwgaWYgeW91IG5lZWQgdG8gbGVhdmUgdXJnZW50bHksIHlvdSBjYW4gZGlyZWN0bHkgYXBwcm9hY2ggdGhlIHJlY2VwdGlvbiBvZiB5b3VyIGhvc3RlbCBhbmQgcmVxdWVzdCBhbiBlYXJseSBhcHByb3ZhbCBmcm9tIHRoZW0uXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgbGV0IGhvc3RlbEZhcXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBjaG9vc2Ugcm9vbW1hdGVzP1wiLFxyXG4gICAgICBhbnN3ZXI6IFwiVGhlIG9wdGlvbiB0byByZW1vdmUgcm9vbW1hdGVzIGlzIG5vIGxvbmdlciB2YWxpZCBhcyBvZiAyMDIzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gc2VsZWN0IHlvdXIgcm9vbT9cIixcclxuICAgICAgYW5zd2VyOlxyXG4gICAgICAgIFwiUGxlYXNlIHZpc2l0IHRoZSBTTlVMaW5rcyB3ZWJzaXRlIGFuZCBsb2NhdGUgdGhlICdsb2dpbicgb3B0aW9uLiBBZnRlciBsb2dnaW5nIGluLCB5b3Ugd2lsbCBiZSBwcmVzZW50ZWQgd2l0aCB2YXJpb3VzIGNob2ljZXMuIENsaWNrIG9uIHRoZSAnSG9zdGVsIE1hbmFnZW1lbnQgU3lzdGVtJyBvcHRpb24sIGFuZCBmcm9tIHRoZXJlLCBmaW5kIHRoZSAnUm9vbSBTZWxlY3Rpb24gUmVxdWVzdCcgb3B0aW9uLiBEdXJpbmcgdGhlIHJvb20gc2VsZWN0aW9uIGRheXMgYXNzaWduZWQgYnkgdGhlIG1hbmFnZW1lbnQsIHRoaXMgc2VsZWN0aW9uIHdpbGwgcmVkaXJlY3QgeW91IHRvIGEgcGFnZSB3aGVyZSB5b3UgY2FuIGNob29zZSB5b3VyIHJvb20uXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgbGV0IGJsYWNrYm9hcmRGYXFzID0gW1xyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIEJsYWNrYm9hcmQ/XCIsXHJcbiAgICAgIGFuc3dlcjpcclxuICAgICAgICBcIkJsYWNrYm9hcmQgaXMgYW4gb25saW5lIGxlYXJuaW5nIG1hbmFnZW1lbnQgc3lzdGVtIChMTVMpIHVzZWQgYnkgcHJvZmVzc29ycyB0byBwcm92aWRlIGNvdXJzZSBtYXRlcmlhbHMsIGluY2x1ZGluZyBub3RlcywgYXNzaWdubWVudHMsIGFubm91bmNlbWVudHMsIGFuZCBvdGhlciByZXNvdXJjZXMgdG8gc3R1ZGVudHMgaW4gYSBkaWdpdGFsIGZvcm1hdC5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBsb2cgaW4gYmxhY2tib2FyZD9cIixcclxuICAgICAgYW5zd2VyOlxyXG4gICAgICAgIFwiVG8gYWNjZXNzIHRoZSBCbGFja2JvYXJkIHBsYXRmb3JtIGF0IFNOVSwgeW91IGhhdmUgdHdvIG9wdGlvbnMuIEZpcnN0bHksIHlvdSBjYW4gbmF2aWdhdGUgdG8gU05VIGxpbmtzIGFuZCBzZWFyY2ggZm9yIHRoZSAnQmxhY2tib2FyZCcgb3B0aW9uIG9uIHRoZSB3ZWJzaXRlLiBBbHRlcm5hdGl2ZWx5LCB5b3UgbWF5IGRpcmVjdGx5IHNlYXJjaCBmb3IgJ1NOVSBCbGFja2JvYXJkJyBvbiB0aGUgaW50ZXJuZXQuIE9uY2UgeW91IGZpbmQgdGhlIEJsYWNrYm9hcmQgcG9ydGFsLCBsb2cgaW4gdXNpbmcgeW91ciBTTlUgZW1haWwgSUQgYW5kIHBhc3N3b3JkIHRvIGdhaW4gYWNjZXNzIHRvIHRoZSBwbGF0Zm9ybS4uXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gYWRkIGNvdXJzZXMgdG8gZmF2b3JpdGVzP1wiLFxyXG4gICAgICBhbnN3ZXI6XHJcbiAgICAgICAgXCJBZnRlciBsb2dnaW5nIGluIHRvIHlvdXIgQmxhY2tib2FyZCBhY2NvdW50LCBmaW5kIHRoZSAnQ291cnNlcycgb3B0aW9uIGxvY2F0ZWQgb24gdGhlIGxlZnQtaGFuZCBzaWRlIG9mIHRoZSBzY3JlZW4gYW5kIGNsaWNrIG9uIGl0LiBUaGlzIGFjdGlvbiB3aWxsIGRpc3BsYXkgYSBsaXN0IG9mIGFsbCB0aGUgY291cnNlcyB5b3UgYXJlIGN1cnJlbnRseSBlbnJvbGxlZCBpbi4gVG8gbWFyayBhIGNvdXJzZSBhcyBhIGZhdm9yaXRlLCBsb29rIGZvciB0aGUgc3RhciBidXR0b24gc2l0dWF0ZWQgb24gdGhlIHJpZ2h0LWhhbmQgc2lkZSBvZiBlYWNoIGNvdXJzZSBoZWFkaW5nLiBDbGljayBvbiB0aGUgc3RhciBidXR0b24gdG8gYWRkIHRoZSBjb3Vyc2UgdG8geW91ciBmYXZvcml0ZXMgbGlzdC5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyBjYW4gSSBzdWJtaXQgYXNzaWdubWVudHMgb24gQmxhY2tib2FyZD9cIixcclxuICAgICAgYW5zd2VyOlxyXG4gICAgICAgIFwiTm9ybWFsbHksIHRoZSBsaW5rIGZvciBzdWJtaXR0aW5nIGFzc2lnbm1lbnRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgJ0FjdGl2aXR5IFNlY3Rpb24nIG9mIHRoZSBjb3Vyc2UgcGFnZSwgYWxvbmcgd2l0aCB0aGUgZGVhZGxpbmUgZm9yIHN1Ym1pc3Npb24uIElmIHlvdSBhcmUgdW5hYmxlIHRvIGxvY2F0ZSB0aGUgbGluayB0aGVyZSwgeW91IGNhbiBmb2xsb3cgdGhlc2Ugc3RlcHM6IEZpcnN0LCBjbGljayBvbiB0aGUgJ0NvdXJzZXMnIG9wdGlvbiBvbiB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIHNjcmVlbi4gTmV4dCwgZmluZCB0aGUgc3BlY2lmaWMgY291cnNlIGZvciB3aGljaCB5b3Ugd2FudCB0byBzdWJtaXQgdGhlIGFzc2lnbm1lbnQuIE9uY2UgeW91IGhhdmUgc2VsZWN0ZWQgdGhlIGNvdXJzZSwgbmF2aWdhdGUgdG8gdGhlICdDb250ZW50IFNlY3Rpb24nIG9mIHRoZSBjb3Vyc2UgcGFnZSBhbmQgbG9vayBmb3IgdGhlIGxpbmsgdG8gdGhlIGFzc2lnbm1lbnQgc3VibWlzc2lvbi5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBhY2Nlc3MgY29udGVudCBvbiBibGFja2JvYXJkP1wiLFxyXG4gICAgICBhbnN3ZXI6XHJcbiAgICAgICAgXCJVc3VhbGx5LCB0aGUgbW9zdCByZWNlbnQgY29udGVudCBpcyB2aXNpYmxlIG9uIHRoZSAnQWN0aXZpdHkgU3RyZWFtLicgSG93ZXZlciwgaWYgeW91IHdhbnQgdG8gYWNjZXNzIGFsbCB0aGUgY29udGVudCBhdmFpbGFibGUgZm9yIGEgcGFydGljdWxhciBjb3Vyc2UsIGZvbGxvdyB0aGVzZSBzdGVwczogR28gdG8gdGhlICdDb3Vyc2VzJyBzZWN0aW9uIGFuZCBjaG9vc2UgdGhlIHNwZWNpZmljIGNvdXJzZSB5b3Ugd2lzaCB0byB2aWV3IHRoZSBjb250ZW50IG9mLiBMb29rIGZvciB0aGUgJ0NvbnRlbnQnIHNlY3Rpb24sIHR5cGljYWxseSBsb2NhdGVkIG9uIHRoZSBsZWZ0LWhhbmQgc2lkZSBvZiB0aGUgc2NyZWVuLiBCeSBhY2Nlc3NpbmcgdGhpcyBzZWN0aW9uLCB5b3Ugd2lsbCBiZSBhYmxlIHRvIHNlZSBhbGwgdGhlIGNvbnRlbnQgcmVsYXRlZCB0byB0aGUgc2VsZWN0ZWQgY291cnNlLlwiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJwTGlua1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgZmFxRmlsbChlcnBGYXFzKTtcclxuICB9KTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZhc3RMaW5rXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmYXFGaWxsKGZhc3RyYWNrRmFxcyk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob3N0ZUxpbmtcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZhcUZpbGwoaG9zdGVsRmFxcyk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYkxpbmtcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZhcUZpbGwoYmxhY2tib2FyZEZhcXMpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBlcnBHZW4oKTtcclxufSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJwZlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGVycEdlbigpO1xyXG59KTtcclxuXHJcbi8vYWJvdXQgdXNcclxuZnVuY3Rpb24gZmlsbHRlYW0oYXJyYXkpIHtcclxuICBsZXQgdGVhbVBlb3BsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVhbVBlb3BsZVwiKTtcclxuICB0ZWFtUGVvcGxlLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInBlcnNvblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkLWlubmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZC1mcm9udFwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9XCIke2VsZW1lbnQuaW1nfVwiXHJcbiAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkLWJhY2tcIj5cclxuICAgICAgICAgIDxzcGFuPicke2VsZW1lbnQucXVvdGV9Jzwvc3Bhbj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb2NpYWxzXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9JHtlbGVtZW50Lmluc3RhfSB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWluc3RhZ3JhbVwiPjwvaVxyXG4gICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPSR7ZWxlbWVudC5saW5rZWRpbn0gdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJiaSBiaS1saW5rZWRpblwiPjwvaVxyXG4gICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9JHtlbGVtZW50LmdpdH1cclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWdpdGh1YlwiPjwvaVxyXG4gICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3Bhbj4ke2VsZW1lbnQuZmlyc3ROYW1lfSAke2VsZW1lbnQubGFzdE5hbWV9PC9zcGFuPlxyXG4gICAgPHNwYW4+JHtlbGVtZW50LmRlc2lnbmF0aW9ufTwvc3Bhbj5cclxuICA8L2Rpdj5gO1xyXG4gICAgdGVhbVBlb3BsZS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYWJvdXRHZW4gPSAoKSA9PiB7XHJcbiAgZ2VuZXJhdGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJhYm91dFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhYm91dENvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaXJzdENvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRleHRDb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uXCI+V2hhdCBpcyA8c3Bhbj5TbnVBY2FkZW1pYTwvc3Bhbj4/PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlclwiPlxyXG4gICAgICAgICAgVW5sb2NrIHRoZSBkb29ycyB0byBrbm93bGVkZ2UgYW5kIGVtYmFyayBvbiBhIGpvdXJuZXkgb2ZcclxuICAgICAgICAgIGludGVsbGVjdHVhbCBncm93dGggd2l0aCBTbnVBY2FkZW1pYSwgeW91ciBwcmVtaWVyIG9ubGluZVxyXG4gICAgICAgICAgZWR1Y2F0aW9uIHBsYXRmb3JtLiBXaGV0aGVyIHlvdSdyZSBhIGN1cmlvdXMgbGVhcm5lciwgYVxyXG4gICAgICAgICAgZGVkaWNhdGVkIHN0dWRlbnQsIG9yIGEgbGlmZWxvbmcgZW50aHVzaWFzdC5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbWcgc3JjPVwiJHtjb21wdXRlcn1cIiBhbHQ9XCJcIiB3aWR0aD1cIjI1JVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRDb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Q29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvblwiPlxyXG4gICAgICAgICAgSG93PHNwYW4+IFNudUFjYWRlbWlhIDwvc3Bhbj5jYW4gaGVscCB5b3U/XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlclwiPlxyXG4gICAgICAgICAgQW4gZWR1Y2F0aW9uIHdlYnNpdGUgY2FuIHNpZ25pZmljYW50bHkgZW5oYW5jZSB5b3VyIGxlYXJuaW5nXHJcbiAgICAgICAgICBqb3VybmV5IGJ5IHByb3ZpZGluZyBhIGRpdmVyc2UgcmFuZ2Ugb2YgcmVzb3VyY2VzIHRhaWxvcmVkIHRvXHJcbiAgICAgICAgICB2YXJpb3VzIHN1YmplY3RzIGFuZCBsZWFybmluZyBzdHlsZXMsIG9mZmVyaW5nIGZsZXhpYmxlXHJcbiAgICAgICAgICBzY2hlZHVsaW5nIGFuZCBzZWxmLXBhY2VkIHByb2dyZXNzIHRyYWNraW5nLCBjb25uZWN0aW5nIHlvdSB3aXRoXHJcbiAgICAgICAgICBleHBlcnQgaW5zdHJ1Y3RvcnMuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aW1nIHNyYz0ke2hlbHBQaWN9IGFsdD1cIlwiIHdpZHRoPVwiMjUlXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJ0ZWFtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVldFRlYW1cIj5NRUVUIFRIRSBURUFNPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGVhbUJheVwiPlxyXG4gICAgICA8ZGl2IGlkPSdjb3JlJz5Db3JlPC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9J2Rldic+RGV2IFRlYW08L2Rpdj5cclxuICAgICAgPGRpdiBpZD0nY29udGVudC10ZWFtJz5Db250ZW50IFRlYW08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRlYW1QZW9wbGVcIj5cclxuICAgICAgPGRpdiBkYXRhLWFjdGl2ZT1cImFjdGl2ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwZXJzb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmQtZnJvbnRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vc3JjL3JlYXNvdXJjZXMvdmFtc2kuanBnXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmQtYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XCJJdCBpcyB3aGF0IGl0IGlzXCI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29jaWFsc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWluc3RhZ3JhbVwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9pbi5saW5rZWRpbi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJiaSBiaS1saW5rZWRpblwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vVmFtc2lLYXBhcnRoaS9TbnVhY2FkZW1pYS90cmVlL21haW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiYmkgYmktZ2l0aHViXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuPlZhbXNpIEthcGFydGhpPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+Q29mb3VuZGVyPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwZXJzb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmQtZnJvbnRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vc3JjL3JlYXNvdXJjZXMvdmFtc2kuanBnXCJcclxuICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmQtYmFja1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XCJJdCBpcyB3aGF0IGl0IGlzXCI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29jaWFsc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWluc3RhZ3JhbVwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9pbi5saW5rZWRpbi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJiaSBiaS1saW5rZWRpblwiPjwvaVxyXG4gICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vVmFtc2lLYXBhcnRoaS9TbnVhY2FkZW1pYS90cmVlL21haW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiYmkgYmktZ2l0aHViXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuPlZhbXNpIEthcGFydGhpPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+Q29mb3VuZGVyPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBkYXRhLWFjdGl2ZT1cImluYWN0aXZlXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgZGF0YS1hY3RpdmU9XCJpbmFjdGl2ZVwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcbiAgbGV0IHRlYW1CYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlYW1CYXlcIik7XHJcbiAgZmlsbHRlYW0odGVhbS5jb3JlKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvcmVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGZpbGx0ZWFtKHRlYW0uY29yZSk7XHJcbiAgfSk7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGZpbGx0ZWFtKHRlYW0uZGV2KTtcclxuICB9KTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnQtdGVhbVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZmlsbHRlYW0odGVhbS5jb250ZW50KTtcclxuICB9KTtcclxufTtcclxuXHJcbmxldCB0ZWFtID0ge1xyXG4gIGNvcmU6IFtcclxuICAgIHtcclxuICAgICAgZmlyc3ROYW1lOiBcIlZhbXNpXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIkthcGFydGhpXCIsXHJcbiAgICAgIGRlc2lnbmF0aW9uOiBcIkNvZm91bmRlciBhbmQgZGV2ZWxvcGVyXCIsXHJcbiAgICAgIGluc3RhOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vX192YW1zaV9fMTcvXCIsXHJcbiAgICAgIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi92YW1zaS1rYXBhcnRoaS0zNzE3MzAyMjJcIixcclxuICAgICAgZ2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS9WYW1zaUthcGFydGhpXCIsXHJcbiAgICAgIGltZzogXCIuLi9zcmMvcmVhc291cmNlcy90ZWFtL3ZhbXNpLmpwZ1wiLFxyXG4gICAgICBxdW90ZTogXCJRdW90ZSBmcm9tIFZhbXNpIGFib3V0IGhpcyByb2xlIGFuZCBwYXNzaW9uLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmlyc3ROYW1lOiBcIkFkaXR5YVwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJBZ2Fyd2FsXCIsXHJcbiAgICAgIGRlc2lnbmF0aW9uOiBcIkNvZm91bmRlciBhbmQgZGV2ZWxvcGVyXCIsXHJcbiAgICAgIGluc3RhOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYWRpdHlhZ2FyZy5hZy9cIixcclxuICAgICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FkaXR5YS1hZ2Fyd2FsLTk3N2EzMDI0MC9cIixcclxuICAgICAgZ2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS9BZGl0eWFFQ0VcIixcclxuICAgICAgaW1nOiBcInVybF90b19hZGl0eWFfaW1hZ2VcIixcclxuICAgICAgcXVvdGU6IFwiUXVvdGUgZnJvbSBBZGl0eWEgYWJvdXQgaGlzIHJvbGUgYW5kIHZpc2lvbi5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpcnN0TmFtZTogXCJWaWRpcFwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJKYWluXCIsXHJcbiAgICAgIGRlc2lnbmF0aW9uOiBcIkNvZm91bmRlciBhbmQgQ29udGVudFwiLFxyXG4gICAgICBpbnN0YTogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3ZpZGlwamFpbi9cIixcclxuICAgICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3ZpZGlwLWphaW4tYTM3YTg0MWIwL1wiLFxyXG4gICAgICBnaXQ6IFwiaHR0cHM6Ly9naXRodWIuY29tL1ZpZGlwSmFpbjdcIixcclxuICAgICAgaW1nOiBcInVybF90b192aWRpcF9pbWFnZVwiLFxyXG4gICAgICBxdW90ZTogXCJRdW90ZSBmcm9tIFZpZGlwIGFib3V0IHRoZSBpbXBvcnRhbmNlIG9mIGNvbnRlbnQuXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgY29udGVudDogW1xyXG4gICAge1xyXG4gICAgICBmaXJzdE5hbWU6IFwiU29oYW1cIixcclxuICAgICAgbGFzdE5hbWU6IFwiTW91bHJlZVwiLFxyXG4gICAgICBkZXNpZ25hdGlvbjogXCJDb250ZW50XCIsXHJcbiAgICAgIGluc3RhOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vX19zb2FoYW0yMC9cIixcclxuICAgICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NvYWhhbS1tb3VscmVlLTgxODcxNDI4MS9cIixcclxuICAgICAgZ2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbVwiLFxyXG4gICAgICBpbWc6IFwidXJsX3RvX3NvaGFtX2ltYWdlXCIsXHJcbiAgICAgIHF1b3RlOiBcIlF1b3RlIGZyb20gU29oYW0gYWJvdXQgaGlzIGNyZWF0aXZlIGpvdXJuZXkuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaXJzdE5hbWU6IFwiSGFyaWthXCIsXHJcbiAgICAgIGxhc3ROYW1lOiBcIlNheGVuYVwiLFxyXG4gICAgICBkZXNpZ25hdGlvbjogXCJDb250ZW50XCIsXHJcbiAgICAgIGluc3RhOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXy5oYXJpa2FfL1wiLFxyXG4gICAgICBsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vaGFyaWthLXNheGVuYS0yODUwNjUxYTAvXCIsXHJcbiAgICAgIGdpdDogXCJodHRwczovL2dpdGh1Yi5jb20vaGFyaWthc2F4ZW5hXCIsXHJcbiAgICAgIGltZzogXCIuLi9zcmMvcmVhc291cmNlcy90ZWFtL2hhcmlrYS5qcGdcIixcclxuICAgICAgcXVvdGU6IFwiUXVvdGUgZnJvbSBIYXJpa2EgYWJvdXQgdGhlIGltcGFjdCBvZiBzdG9yeXRlbGxpbmcuXCIsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgZGV2OiBbXHJcbiAgICB7XHJcbiAgICAgIGZpcnN0TmFtZTogXCJQcml5YW5zaFwiLFxyXG4gICAgICBsYXN0TmFtZTogXCJTaW5naGFsXCIsXHJcbiAgICAgIGRlc2lnbmF0aW9uOiBcIkRldmVsb3BlclwiLFxyXG4gICAgICBpbnN0YTogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL19hbnNoMjQvXCIsXHJcbiAgICAgIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9zaW5naGFscHJpeWFuc2gyNC9cIixcclxuICAgICAgZ2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS9BZGl0eWFFQ0VcIixcclxuICAgICAgaW1nOiBcIi4uL3NyYy9yZWFzb3VyY2VzL3RlYW0vcHJpeWFuc2guanBlZ1wiLFxyXG4gICAgICBxdW90ZTogXCJRdW90ZSBmcm9tIFByaXlhbnNoIGFib3V0IGhpcyBqb3VybmV5IGluIGNvZGluZy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpcnN0TmFtZTogXCJUYW5tYXlcIixcclxuICAgICAgbGFzdE5hbWU6IFwiU2FjaGFuXCIsXHJcbiAgICAgIGRlc2lnbmF0aW9uOiBcIkRldmVsb3BlclwiLFxyXG4gICAgICBpbnN0YTogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3Rhbm1heV9fMjU4L1wiLFxyXG4gICAgICBsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdGFubWF5LXNhY2hhbi03MmIzNDkyMzYvXCIsXHJcbiAgICAgIGdpdDogXCJodHRwczovL2dpdGh1Yi5jb20vdGFubWF5ODEyXCIsXHJcbiAgICAgIGltZzogXCJ1cmxfdG9fdGFubWF5X2ltYWdlXCIsXHJcbiAgICAgIHF1b3RlOiBcIlF1b3RlIGZyb20gVGFubWF5IGFib3V0IGhpcyBwYXNzaW9uIGZvciBzb2Z0d2FyZSBkZXZlbG9wbWVudC5cIixcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBjb25zdCBhYm91dEJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnNsb2dhbkJ1dHRvblwiKTtcclxuICBpZiAoYWJvdXRCdXR0b24pIHtcclxuICAgIGFib3V0R2VuKCk7IC8vIEdlbmVyYXRlIFwiQWJvdXQgVXNcIiBjb250ZW50XHJcbiAgfVxyXG59KTtcclxuY29uc3QgcmFkaW9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9cmFkaW9dXCIpO1xyXG5cclxuY29uc3Qgc2xpZGVTaG93ID0gKCkgPT4ge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmFkaW9CdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7fSwgMzAwMCk7XHJcbiAgfVxyXG59O1xyXG5zbGlkZVNob3coKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9