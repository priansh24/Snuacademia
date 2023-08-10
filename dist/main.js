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
`, "",{"version":3,"sources":["webpack://./src/Style.css"],"names":[],"mappings":"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V,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,mCAAmC;EACnC,sBAAsB;AACxB;AACA;EACE,cAAc;AAChB;AACA,WAAW;AACX;EACE,iCAAiC;EACjC,aAAa;EACb,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,SAAS;EACT,UAAU;EACV,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,YAAY;EACZ,YAAY;AACd;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;AACV;AACA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA,WAAW;AACX;EACE,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,kCAAkC;EAClC,eAAe;AACjB;AACA;EACE,eAAe;EACf,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;;EAEE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,0CAA0C;AAC5C;AACA;EACE,2BAA2B;EAC3B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,yCAAyC;AAC3C;AACA;EACE,aAAa;EACb,UAAU;EACV,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EA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","sourcesContent":["/*Using Css variable*/\n:root {\n  --bg-color: white;\n  --font-color: black;\n  --secondary: #00b0ff;\n}\n\n.dark {\n  --bg-color: black;\n  --font-color: white;\n  --secondary: #536dfe;\n  --color1: rgb(240, 240, 240);\n  --color3: rgb(23, 23, 24);\n  --color2: rgb(23, 23, 24);\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--font-color);\n  font-family: \"DM Sans\", sans-serif;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n\n  --color1: black;\n  --color2: rgb(23, 23, 24);\n  --color3: rgb(240, 240, 240);\n}\n\n.header {\n  width: 100%;\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  height: 50px;\n  align-items: center;\n  margin-right: 2%;\n\n  list-style: none;\n  position: relative;\n  /* padding: 12px 20px;*/\n}\n\n.logo {\n  display: flex;\n  justify-content: center;\n  width: 100px;\n}\n\n.options {\n  display: flex;\n  width: max(500px, 50%);\n  justify-content: space-around;\n  height: 25px;\n  font-size: max(15px, 1vw);\n  color: var(--font-color);\n}\n\n.options > div:hover {\n  cursor: pointer;\n  color: var(--secondary);\n}\n\n.home {\n  margin-top: 10vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 10%;\n}\n\n.slogan {\n  font-size: max(3.5vw, 40px);\n  display: flex;\n  margin-bottom: 20px;\n  font-weight: 900;\n}\n\n.slogan-para {\n  font-size: max(1vw, 20px);\n  width: max(80%, 280px);\n}\n\ni {\n  font-size: 25px;\n  width: auto;\n  cursor: pointer;\n  /*transform: translate(-50%, -50%);*/\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n}\n\n/* study-material page */\n.study,\n.roadMaps {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.tagline {\n  margin-top: 5vh;\n  font-size: min(8vw, 70px);\n  font-weight: 950;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.search-bar {\n  margin-top: 5vh;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: row;\n  border: 2px solid var(--font-color);\n  width: max(40vw, 300px);\n  padding: 8px;\n  padding-left: 15px;\n  gap: 10px;\n  border-radius: 5px;\n}\n#course-select {\n  background-color: var(--bg-color);\n  color: var(--font-color);\n  border: none;\n  outline: none;\n  color: (--font-color);\n  font-size: 25px;\n  border-left: 1px solid grey;\n  padding-left: 10px;\n  font-weight: 100;\n  width: 80%;\n}\n\n.courses,\n.roads {\n  width: 90%;\n\n  margin-top: 50px;\n  padding: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n}\n\n.courseBox {\n  height: 200px;\n  width: 300px;\n  border: 2px solid var(--font-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--font-color);\n}\n\n.glink {\n  display: none;\n  border-bottom: none;\n}\na {\n  text-decoration: none;\n  color: var(--font-color);\n  border-bottom: none;\n}\na:visited {\n  text-decoration: none;\n  color: var(--font-color);\n}\na:hover {\n  text-decoration: none;\n  color: var(--font-color);\n}\na:active {\n  text-decoration: none;\n  color: var(--font-color);\n}\n.generate {\n  padding-bottom: 20px;\n}\n/*erp management*/\n.linkSection {\n  margin-top: 5vh;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.erpManagement {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.linkSection > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid var(--font-color);\n  font-size: max(1.2vw, 15px);\n  height: max(35px, 5vh);\n  width: max(350px, 15vw);\n  border-radius: 5px;\n  color: var(--font-color);\n  background-color: var(--bg-color);\n  flex-wrap: wrap;\n  cursor: pointer;\n}\n.linkSection > div:hover {\n  color: var(--bg-color);\n  background-color: var(--font-color);\n  transition: 100ms;\n}\n.sub-tag {\n  font-size: 0.5em;\n  font-weight: 200;\n  margin-top: 2vh;\n  display: flex;\n  text-align: center;\n}\n.faqs {\n  display: flex;\n  flex-direction: column;\n  margin-top: 7vh;\n  width: 95%;\n  gap: 20px;\n}\n.faqs > div {\n  border: 1px solid var(--font-color);\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 15px;\n  border-radius: 2px;\n}\n.sol {\n  display: none;\n}\n.roadBox {\n  height: 200px;\n  width: 300px;\n  border: 2px solid var(--font-color);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--font-color);\n}\n.glink-r {\n  display: none;\n  border: 1px solid var(--font-color);\n  background-color: var(--bg-color);\n  color: var(--font-color);\n  width: 33%;\n  padding: 10px;\n  justify-content: center;\n  border-radius: 5px;\n}\n.glink-r:hover {\n  background-color: var(--font-color);\n  color: var(--bg-color);\n}\na.ar {\n  color: inherit;\n}\n/* footer */\n.footer {\n  background-color: rgb(23, 23, 24);\n  padding: 15px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  align-self: flex-end;\n}\n\n.reasources {\n  display: flex;\n  justify-content: center;\n  color: white;\n  gap: 10px;\n  width: 50%;\n  flex-wrap: wrap;\n}\n.reasources > div:hover {\n  color: var(--secondary);\n  cursor: pointer;\n}\n.contact > a {\n  color: white;\n  margin: 10px;\n}\n.contact > a:hover {\n  color: var(--secondary);\n}\n\n.foot-logo {\n  color: white;\n  font-size: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.foot-logo:hover {\n  color: var(--secondary);\n}\n.generate {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*About us*/\n.sloganButton {\n  margin-top: 4vw;\n  width: max(200px, 20vw);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  border: 1px solid var(--secondary);\n  border-radius: 10px;\n  font-size: max(1.2vw, 20px);\n}\n.sloganButton:hover {\n  background-color: var(--secondary);\n  cursor: pointer;\n}\n.about {\n  margin-top: 1vh;\n  padding: 5vw;\n}\n.aboutContent {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10vw;\n}\n.firstContent,\n.secondContent {\n  display: flex;\n  gap: 15vw;\n  padding-bottom: 8vw;\n  border-bottom: 1px solid var(--font-color);\n}\n.secondContent {\n  flex-direction: row-reverse;\n  border-bottom: none;\n}\n.textContent {\n  display: flex;\n  flex-direction: column;\n}\n.question {\n  font-size: 3vw;\n  margin-bottom: 20px;\n}\n.question > span {\n  color: var(--secondary);\n}\n.answer {\n  font-size: min(2vw, 30px);\n}\n.team {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: min(6vw, 80px);\n}\n.meetTeam {\n  width: fit-content;\n  font-size: 5.5vw;\n  font-weight: 600;\n  border-bottom: 2px solid var(--secondary);\n}\n.teamBay {\n  display: flex;\n  width: 90%;\n  justify-content: space-between;\n}\n.teamBay > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: max(1.2vw, 13px);\n  width: 25vw;\n  box-sizing: border-box;\n  padding: 10px;\n  border: 1px solid var(--font-color);\n  border-radius: 10px;\n}\n.teamBay > div:hover {\n  background-color: var(--secondary);\n  cursor: pointer;\n}\n.teamPeople {\n  width: 90%;\n  padding: 10px;\n  border: 1px solid var(--secondary);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  gap: 10px;\n}\n.teamPeople > div {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  gap: 10%;\n}\n/*flipcard*/\n.person {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.flip-card {\n  background-color: transparent;\n  width: min(45vw, 300px);\n  height: min(45vw, 300px);\n  perspective: 1000px;\n  margin-bottom: 0.8vw;\n}\n\n/* This container is needed to position the front and back side */\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n\n/* Do an horizontal flip when you move the mouse over the flip box container */\n.flip-card:hover .flip-card-inner {\n  transform: rotateY(180deg);\n}\n\n/* Position the front and back side */\n.flip-card-front,\n.flip-card-back {\n  border-radius: 10px;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden; /* Safari */\n  backface-visibility: hidden;\n}\n.flip-card-front > img {\n  border-radius: 10px;\n}\n\n/* Style the front side (fallback if image is missing) */\n.flip-card-front {\n  color: var(--font-color);\n}\n\n/* Style the back side */\n.flip-card-back {\n  background-color: var(--secondary);\n  color: var(--font-color);\n  font-size: min(3vw, 25px);\n  transform: rotateY(180deg);\n}\n.flip-card-back > span {\n  margin-bottom: 2.5vw;\n  width: 90%;\n}\n.socials {\n  display: flex;\n  justify-content: space-between;\n  width: 70%;\n}\n.socials > a > i {\n  font-size: min(5vw, 30px);\n}\n.person > span {\n  font-size: min(3vw, 20px);\n}\n/*slider*/\n\n#slider {\n  position: relative;\n  width: 60%;\n  min-height: 30vw;\n  margin: 80px auto;\n  font-family: \"DM sans\", sans-serif;\n  perspective: 1400px;\n  transform-style: preserve-3d;\n  display: flex;\n  justify-content: center;\n}\n\ninput[type=\"radio\"] {\n  display: none;\n  position: absolute;\n  top: 108%;\n  width: 4vw;\n  height: 18px;\n  margin: 0 15px 0 0;\n  opacity: 0.6;\n  cursor: pointer;\n}\n\n/*input[type=radio]:nth-child(5) {\n  margin-right: 0px;\n}\n\ninput[type=radio]:checked {\n  opacity: 1;\n}*/\n\nh2 {\n  font-size: 2.5vw;\n  color: white;\n  margin: 0;\n  margin-bottom: 20px;\n}\n\np {\n  width: 50%;\n  font-size: min(30px, 1.5vw);\n}\n\n#slider label {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  color: white;\n  font-weight: normal;\n  border-radius: 5px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  transition: transform 400ms ease;\n  box-sizing: border-box;\n  padding: 20px;\n}\n.sliderContent {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n  height: 100%;\n}\n#slide1 {\n  background: #066892;\n}\n.dark #slide1 {\n  background: #232e6f;\n}\n\n#slide2 {\n  background: #0d97d2;\n}\n.dark #slide2 {\n  background: #384ab2;\n}\n\n#slide3 {\n  background: #00b0ff;\n}\n.dark #slide3 {\n  background: #536dfe;\n}\n/*\n#slide4 {\n  background: slateblue;\n}\n\n#slide5 {\n  background: violet;\n}*/\n\n/* Slider Functionality */\n\n/* Active Slide */\n#s1:checked ~ #slide1,\n#s2:checked ~ #slide2,\n#s3:checked ~ #slide3,\n#s4:checked ~ #slide4,\n#s5:checked ~ #slide5 {\n  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);\n  transform: translate3d(0%, 0, 0px);\n}\n\n/* Next Slide */\n#s1:checked ~ #slide2,\n#s2:checked ~ #slide3,\n#s3:checked ~ #slide4,\n#s4:checked ~ #slide5,\n#s5:checked ~ #slide1 {\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);\n  transform: translate3d(15%, 0, -100px);\n}\n\n/* Next to Next Slide */\n#s1:checked ~ #slide3,\n#s2:checked ~ #slide4,\n#s3:checked ~ #slide5,\n#s4:checked ~ #slide1,\n#s5:checked ~ #slide2 {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n  transform: translate3d(30%, 0, -250px);\n}\n\n/* Previous to Previous Slide */\n#s1:checked ~ #slide4,\n#s2:checked ~ #slide5,\n#s3:checked ~ #slide1,\n#s4:checked ~ #slide2,\n#s5:checked ~ #slide3 {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n  transform: translate3d(-30%, 0, -250px);\n}\n\n/* Previous Slide */\n#s1:checked ~ #slide5,\n#s2:checked ~ #slide1,\n#s3:checked ~ #slide2,\n#s4:checked ~ #slide3,\n#s5:checked ~ #slide4 {\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);\n  transform: translate3d(-15%, 0, -100px);\n}\n\n/*Responsive*/\n@media screen and (max-width: 800px) {\n  /*homepage taglines*/\n  body {\n    align-items: center;\n  }\n  #image {\n    display: none;\n  }\n  .home {\n    padding-left: 0;\n  }\n  .text {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .slogan {\n    text-align: center;\n  }\n  .slogan-para {\n    text-align: center;\n  }\n  /*slider*/\n  #slider {\n    margin-top: 40px;\n    margin-bottom: 20px;\n    min-height: 50vh;\n    width: 70%;\n  }\n  #slider label {\n    height: 100%;\n  }\n  .sliderContent {\n    flex-direction: column;\n    gap: 5px;\n    height: 100%;\n    align-items: center;\n  }\n  h2 {\n    font-size: max(2.6vw, 14px);\n  }\n  p {\n    width: 80%;\n    font-size: max(2.2vw, 11px);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n  }\n  input[type=\"radio\"] {\n    position: absolute;\n    top: 104%;\n  }\n}\n\n/*hamburger menu*/\n.options {\n  display: flex;\n}\n/* .options div {padding-left: 30px;}\n/*.options div #home #erp #road #study {\n    display: inline-block;\n    text-decoration: none;\n    color: var(--color1);\n    text-align: left;\n    transition: 0.15s ease-in-out;\n    position: relative;\n    text-transform: uppercase;\n}\n.options div #home \n #erp #road #study::after {\n    content: \"\";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 0;\n    height: 1px;\n    background-color: var(--color1);\n    transition: 0.15s ease-in-out;\n}\n.options div #home #erp #road  #study:hover:after {width: 100%;}*/\n.open-menu,\n.close-menu {\n  position: absolute;\n  color: var(--color1);\n  cursor: pointer;\n  font-size: 1.5rem;\n  display: none;\n}\n.open-menu {\n  position: absolute;\n  top: 50%;\n  left: 52%;\n  /*transform: translateY(-50%);*/\n  transform: translate(-50%, -50%);\n}\n.close-menu {\n  color: var(--color1);\n  top: 40px;\n  right: 35px;\n}\n#check {\n  display: none;\n}\n@media (max-width: 610px) {\n  .options {\n    font-weight: bold;\n    font-size: larger;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 50vh;\n    position: fixed;\n    top: -100%;\n    right: 0;\n    z-index: 100;\n    background-color: var(--color3);\n    transition: all 0.4s ease-in-out;\n  }\n  .options div {\n    margin-top: 40px;\n  }\n  /* .options div #home #erp #road  #study {padding: 10px;}*/\n  .open-menu,\n  .close-menu {\n    display: block;\n  }\n  #check:checked ~ .options {\n    top: 0;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsYUFBYTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxlQUFlO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVGQUF1RixNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsc0JBQXNCLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxXQUFXLE1BQU0sYUFBYSxhQUFhLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxTQUFTLFlBQVksYUFBYSxPQUFPLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxNQUFNLFVBQVUsS0FBSyx5QkFBeUIsUUFBUSxPQUFPLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyx3REFBd0Qsc0JBQXNCLHdCQUF3Qix5QkFBeUIsR0FBRyxXQUFXLHNCQUFzQix3QkFBd0IseUJBQXlCLGlDQUFpQyw4QkFBOEIsOEJBQThCLEdBQUcsVUFBVSxzQ0FBc0MsNkJBQTZCLHlDQUF5QyxjQUFjLGVBQWUsa0JBQWtCLDJCQUEyQixzQkFBc0Isc0JBQXNCLDhCQUE4QixpQ0FBaUMsR0FBRyxhQUFhLGdCQUFnQixxQkFBcUIsa0JBQWtCLG1DQUFtQyxpQkFBaUIsd0JBQXdCLHFCQUFxQix1QkFBdUIsdUJBQXVCLDBCQUEwQixLQUFLLFdBQVcsa0JBQWtCLDRCQUE0QixpQkFBaUIsR0FBRyxjQUFjLGtCQUFrQiwyQkFBMkIsa0NBQWtDLGlCQUFpQiw4QkFBOEIsNkJBQTZCLEdBQUcsMEJBQTBCLG9CQUFvQiw0QkFBNEIsR0FBRyxXQUFXLHFCQUFxQixrQkFBa0Isd0JBQXdCLG1DQUFtQyxzQkFBc0IsR0FBRyxhQUFhLGdDQUFnQyxrQkFBa0Isd0JBQXdCLHFCQUFxQixHQUFHLGtCQUFrQiw4QkFBOEIsMkJBQTJCLEdBQUcsT0FBTyxvQkFBb0IsZ0JBQWdCLG9CQUFvQix1Q0FBdUMsS0FBSyxXQUFXLGtCQUFrQix3QkFBd0IsR0FBRyxtREFBbUQsa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyxZQUFZLG9CQUFvQiw4QkFBOEIscUJBQXFCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLEdBQUcsZUFBZSxvQkFBb0Isa0JBQWtCLGdDQUFnQyx3QkFBd0Isd0JBQXdCLHdDQUF3Qyw0QkFBNEIsaUJBQWlCLHVCQUF1QixjQUFjLHVCQUF1QixHQUFHLGtCQUFrQixzQ0FBc0MsNkJBQTZCLGlCQUFpQixrQkFBa0IsMEJBQTBCLG9CQUFvQixnQ0FBZ0MsdUJBQXVCLHFCQUFxQixlQUFlLEdBQUcsdUJBQXVCLGVBQWUsdUJBQXVCLGtCQUFrQixrQkFBa0Isb0JBQW9CLDRCQUE0QixjQUFjLEdBQUcsZ0JBQWdCLGtCQUFrQixpQkFBaUIsd0NBQXdDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLDZCQUE2QixHQUFHLFlBQVksa0JBQWtCLHdCQUF3QixHQUFHLEtBQUssMEJBQTBCLDZCQUE2Qix3QkFBd0IsR0FBRyxhQUFhLDBCQUEwQiw2QkFBNkIsR0FBRyxXQUFXLDBCQUEwQiw2QkFBNkIsR0FBRyxZQUFZLDBCQUEwQiw2QkFBNkIsR0FBRyxhQUFhLHlCQUF5QixHQUFHLG9DQUFvQyxvQkFBb0Isa0JBQWtCLGdCQUFnQiw0QkFBNEIsY0FBYyxvQkFBb0IsR0FBRyxrQkFBa0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsR0FBRyxzQkFBc0Isa0JBQWtCLDRCQUE0Qix3QkFBd0Isd0NBQXdDLGdDQUFnQywyQkFBMkIsNEJBQTRCLHVCQUF1Qiw2QkFBNkIsc0NBQXNDLG9CQUFvQixvQkFBb0IsR0FBRyw0QkFBNEIsMkJBQTJCLHdDQUF3QyxzQkFBc0IsR0FBRyxZQUFZLHFCQUFxQixxQkFBcUIsb0JBQW9CLGtCQUFrQix1QkFBdUIsR0FBRyxTQUFTLGtCQUFrQiwyQkFBMkIsb0JBQW9CLGVBQWUsY0FBYyxHQUFHLGVBQWUsd0NBQXdDLGtCQUFrQiw0QkFBNEIsMkJBQTJCLGtCQUFrQix1QkFBdUIsR0FBRyxRQUFRLGtCQUFrQixHQUFHLFlBQVksa0JBQWtCLGlCQUFpQix3Q0FBd0Msa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLDZCQUE2QixHQUFHLFlBQVksa0JBQWtCLHdDQUF3QyxzQ0FBc0MsNkJBQTZCLGVBQWUsa0JBQWtCLDRCQUE0Qix1QkFBdUIsR0FBRyxrQkFBa0Isd0NBQXdDLDJCQUEyQixHQUFHLFFBQVEsbUJBQW1CLEdBQUcseUJBQXlCLHNDQUFzQyxrQkFBa0IsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0Qix5QkFBeUIsR0FBRyxpQkFBaUIsa0JBQWtCLDRCQUE0QixpQkFBaUIsY0FBYyxlQUFlLG9CQUFvQixHQUFHLDJCQUEyQiw0QkFBNEIsb0JBQW9CLEdBQUcsZ0JBQWdCLGlCQUFpQixpQkFBaUIsR0FBRyxzQkFBc0IsNEJBQTRCLEdBQUcsZ0JBQWdCLGlCQUFpQixvQkFBb0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsYUFBYSxHQUFHLG9CQUFvQiw0QkFBNEIsR0FBRyxhQUFhLGlCQUFpQixrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLCtCQUErQixvQkFBb0IsNEJBQTRCLGtCQUFrQix3QkFBd0IsNEJBQTRCLGtCQUFrQix1Q0FBdUMsd0JBQXdCLGdDQUFnQyxHQUFHLHVCQUF1Qix1Q0FBdUMsb0JBQW9CLEdBQUcsVUFBVSxvQkFBb0IsaUJBQWlCLEdBQUcsaUJBQWlCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGNBQWMsR0FBRyxrQ0FBa0Msa0JBQWtCLGNBQWMsd0JBQXdCLCtDQUErQyxHQUFHLGtCQUFrQixnQ0FBZ0Msd0JBQXdCLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsR0FBRyxhQUFhLG1CQUFtQix3QkFBd0IsR0FBRyxvQkFBb0IsNEJBQTRCLEdBQUcsV0FBVyw4QkFBOEIsR0FBRyxTQUFTLGtCQUFrQiwyQkFBMkIsd0JBQXdCLHdCQUF3QixHQUFHLGFBQWEsdUJBQXVCLHFCQUFxQixxQkFBcUIsOENBQThDLEdBQUcsWUFBWSxrQkFBa0IsZUFBZSxtQ0FBbUMsR0FBRyxrQkFBa0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLGdDQUFnQyxnQkFBZ0IsMkJBQTJCLGtCQUFrQix3Q0FBd0Msd0JBQXdCLEdBQUcsd0JBQXdCLHVDQUF1QyxvQkFBb0IsR0FBRyxlQUFlLGVBQWUsa0JBQWtCLHVDQUF1QyxrQkFBa0Isb0JBQW9CLGtDQUFrQyx3QkFBd0IsY0FBYyxHQUFHLHFCQUFxQixrQkFBa0IsaUJBQWlCLHdCQUF3Qiw0QkFBNEIsYUFBYSxHQUFHLHlCQUF5QixrQkFBa0IsMkJBQTJCLHdCQUF3QixHQUFHLGdCQUFnQixrQ0FBa0MsNEJBQTRCLDZCQUE2Qix3QkFBd0IseUJBQXlCLEdBQUcsMEZBQTBGLHVCQUF1QixnQkFBZ0IsaUJBQWlCLHVCQUF1QiwrQkFBK0IsaUNBQWlDLEdBQUcsd0hBQXdILCtCQUErQixHQUFHLGdGQUFnRix3QkFBd0IsdUJBQXVCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLHlDQUF5Qyw0Q0FBNEMsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcsaUZBQWlGLDZCQUE2QixHQUFHLGdEQUFnRCx1Q0FBdUMsNkJBQTZCLDhCQUE4QiwrQkFBK0IsR0FBRywwQkFBMEIseUJBQXlCLGVBQWUsR0FBRyxZQUFZLGtCQUFrQixtQ0FBbUMsZUFBZSxHQUFHLG9CQUFvQiw4QkFBOEIsR0FBRyxrQkFBa0IsOEJBQThCLEdBQUcseUJBQXlCLHVCQUF1QixlQUFlLHFCQUFxQixzQkFBc0IseUNBQXlDLHdCQUF3QixpQ0FBaUMsa0JBQWtCLDRCQUE0QixHQUFHLDJCQUEyQixrQkFBa0IsdUJBQXVCLGNBQWMsZUFBZSxpQkFBaUIsdUJBQXVCLGlCQUFpQixvQkFBb0IsR0FBRyxzQ0FBc0Msc0JBQXNCLEdBQUcsK0JBQStCLGVBQWUsR0FBRyxVQUFVLHFCQUFxQixpQkFBaUIsY0FBYyx3QkFBd0IsR0FBRyxPQUFPLGVBQWUsZ0NBQWdDLEdBQUcsbUJBQW1CLHVCQUF1QixnQkFBZ0IsaUJBQWlCLFlBQVksV0FBVyxpQkFBaUIsd0JBQXdCLHVCQUF1QixvQkFBb0Isa0JBQWtCLHdCQUF3QixnQ0FBZ0MsMkJBQTJCLHFDQUFxQywyQkFBMkIsa0JBQWtCLEdBQUcsa0JBQWtCLGtCQUFrQix3QkFBd0IsY0FBYyxpQkFBaUIsR0FBRyxXQUFXLHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxhQUFhLHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxhQUFhLHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxlQUFlLDBCQUEwQixHQUFHLGFBQWEsdUJBQXVCLEdBQUcsK0tBQStLLDhFQUE4RSx1Q0FBdUMsR0FBRyw2SUFBNkksNEVBQTRFLDJDQUEyQyxHQUFHLHFKQUFxSiw2Q0FBNkMsMkNBQTJDLEdBQUcsNkpBQTZKLDZDQUE2Qyw0Q0FBNEMsR0FBRyxpSkFBaUosNEVBQTRFLDRDQUE0QyxHQUFHLDBEQUEwRCxtQ0FBbUMsMEJBQTBCLEtBQUssWUFBWSxvQkFBb0IsS0FBSyxXQUFXLHNCQUFzQixLQUFLLFdBQVcsb0JBQW9CLDZCQUE2QiwwQkFBMEIsS0FBSyxhQUFhLHlCQUF5QixLQUFLLGtCQUFrQix5QkFBeUIsS0FBSywyQkFBMkIsdUJBQXVCLDBCQUEwQix1QkFBdUIsaUJBQWlCLEtBQUssbUJBQW1CLG1CQUFtQixLQUFLLG9CQUFvQiw2QkFBNkIsZUFBZSxtQkFBbUIsMEJBQTBCLEtBQUssUUFBUSxrQ0FBa0MsS0FBSyxPQUFPLGlCQUFpQixrQ0FBa0Msb0JBQW9CLDBCQUEwQiw4QkFBOEIseUJBQXlCLEtBQUssMkJBQTJCLHlCQUF5QixnQkFBZ0IsS0FBSyxHQUFHLGtDQUFrQyxrQkFBa0IsR0FBRyxtQkFBbUIsb0JBQW9CLDBDQUEwQyw0QkFBNEIsNEJBQTRCLDJCQUEyQix1QkFBdUIsb0NBQW9DLHlCQUF5QixnQ0FBZ0MsR0FBRyxrREFBa0Qsb0JBQW9CLHlCQUF5QixnQkFBZ0IsY0FBYyxlQUFlLGtCQUFrQixzQ0FBc0Msb0NBQW9DLEdBQUcscURBQXFELGFBQWEsOEJBQThCLHVCQUF1Qix5QkFBeUIsb0JBQW9CLHNCQUFzQixrQkFBa0IsR0FBRyxjQUFjLHVCQUF1QixhQUFhLGNBQWMsa0NBQWtDLHVDQUF1QyxHQUFHLGVBQWUseUJBQXlCLGNBQWMsZ0JBQWdCLEdBQUcsVUFBVSxrQkFBa0IsR0FBRyw2QkFBNkIsY0FBYyx3QkFBd0Isd0JBQXdCLDZCQUE2QiwwQkFBMEIsOEJBQThCLGtCQUFrQixtQkFBbUIsc0JBQXNCLGlCQUFpQixlQUFlLG1CQUFtQixzQ0FBc0MsdUNBQXVDLEtBQUssa0JBQWtCLHVCQUF1QixLQUFLLDhDQUE4QyxlQUFlLGtDQUFrQyxxQkFBcUIsS0FBSywrQkFBK0IsYUFBYSxLQUFLLEdBQUcscUJBQXFCO0FBQy96cEI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNoeEIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDd0I7QUFDRDtBQUNNO0FBQ0M7QUFDSjtBQUNHO0FBQ0c7QUFDQztBQUNBOztBQUV0RDtBQUNBLG9DQUFvQyxtREFBSztBQUN6Qyx5Q0FBeUMsa0RBQUs7QUFDOUM7QUFDQTtBQUNBLFVBQVUsMERBQUk7QUFDZCxzQ0FBc0MscURBQUs7QUFDM0MseUNBQXlDLHdEQUFLO0FBQzlDLG9DQUFvQywyREFBSztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGtEQUFLO0FBQ3BCO0FBQ0EsZ0JBQWdCLHlEQUFJO0FBQ3BCO0FBQ0EsSUFBSTtBQUNKLGVBQWUsbURBQUs7QUFDcEI7QUFDQSxnQkFBZ0IsMERBQUk7QUFDcEI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBEQUFJLENBQUMsbUJBQW1CLGtCQUFrQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFLLENBQUM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix3REFBSyxDQUFDO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyREFBSyxDQUFDO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseURBQUk7QUFDcEI7QUFDQSxJQUFJO0FBQ0o7QUFDQSxnQkFBZ0IsMERBQUk7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEIsc0JBQXNCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsTUFBTSxJQUFJLGFBQWE7QUFDM0UsMENBQTBDLE1BQU0sYUFBYSxLQUFLOztBQUVsRTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BELDRDQUE0QyxNQUFNO0FBQ2xELFdBQVc7QUFDWDtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BELDRDQUE0QyxNQUFNO0FBQ2xELFdBQVc7QUFDWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLE1BQU0sSUFBSSxhQUFhO0FBQ3RFLG9DQUFvQywrQkFBK0I7QUFDbkUsaURBQWlELE1BQU07QUFDdkQsZ0RBQWdELE1BQU07QUFDdEQ7O0FBRUE7QUFDQSw0Q0FBNEMsTUFBTTtBQUNsRCwrQ0FBK0MsTUFBTTtBQUNyRCwrQ0FBK0MsTUFBTTtBQUNyRCxTQUFTO0FBQ1Q7QUFDQSw0Q0FBNEMsTUFBTTtBQUNsRCwrQ0FBK0MsTUFBTTtBQUNyRCwrQ0FBK0MsTUFBTTtBQUNyRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFCQUFxQixnQ0FBZ0MsWUFBWTtBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0EscURBQXFELHFCQUFxQixnQ0FBZ0MsWUFBWTtBQUN0SCxjQUFjLGlCQUFpQjtBQUMvQiwwQkFBMEIsRUFBRTtBQUM1QjtBQUNBLGlDQUFpQyxFQUFFLElBQUksZUFBZTtBQUN0RDtBQUNBO0FBQ0EsbURBQW1ELEVBQUU7QUFDckQsc0RBQXNELEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQSxzQkFBc0Isa0JBQWtCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbUJBQW1CLEVBQUUsaUJBQWlCO0FBQ2xELFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlEQUFRLENBQUM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwREFBTyxFQUFFO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0Msd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NudWFjYWRlbWlhLy4vc3JjL1N0eWxlLmNzcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL3NyYy9TdHlsZS5jc3M/YjZhOCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qVXNpbmcgQ3NzIHZhcmlhYmxlKi9cbjpyb290IHtcbiAgLS1iZy1jb2xvcjogd2hpdGU7XG4gIC0tZm9udC1jb2xvcjogYmxhY2s7XG4gIC0tc2Vjb25kYXJ5OiAjMDBiMGZmO1xufVxuXG4uZGFyayB7XG4gIC0tYmctY29sb3I6IGJsYWNrO1xuICAtLWZvbnQtY29sb3I6IHdoaXRlO1xuICAtLXNlY29uZGFyeTogIzUzNmRmZTtcbiAgLS1jb2xvcjE6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgLS1jb2xvcjM6IHJnYigyMywgMjMsIDI0KTtcbiAgLS1jb2xvcjI6IHJnYigyMywgMjMsIDI0KTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBmb250LWZhbWlseTogXCJETSBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG5cbiAgLS1jb2xvcjE6IGJsYWNrO1xuICAtLWNvbG9yMjogcmdiKDIzLCAyMywgMjQpO1xuICAtLWNvbG9yMzogcmdiKDI0MCwgMjQwLCAyNDApO1xufVxuXG4uaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xuXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogcGFkZGluZzogMTJweCAyMHB4OyovXG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLm9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogbWF4KDUwMHB4LCA1MCUpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IG1heCgxNXB4LCAxdncpO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbi5vcHRpb25zID4gZGl2OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cblxuLmhvbWUge1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctbGVmdDogMTAlO1xufVxuXG4uc2xvZ2FuIHtcbiAgZm9udC1zaXplOiBtYXgoMy41dncsIDQwcHgpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xufVxuXG4uc2xvZ2FuLXBhcmEge1xuICBmb250LXNpemU6IG1heCgxdncsIDIwcHgpO1xuICB3aWR0aDogbWF4KDgwJSwgMjgwcHgpO1xufVxuXG5pIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB3aWR0aDogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyovXG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogc3R1ZHktbWF0ZXJpYWwgcGFnZSAqL1xuLnN0dWR5LFxuLnJvYWRNYXBzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50YWdsaW5lIHtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBmb250LXNpemU6IG1pbig4dncsIDcwcHgpO1xuICBmb250LXdlaWdodDogOTUwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlYXJjaC1iYXIge1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XG4gIHdpZHRoOiBtYXgoNDB2dywgMzAwcHgpO1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZ2FwOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4jY291cnNlLXNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAoLS1mb250LWNvbG9yKTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyZXk7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmNvdXJzZXMsXG4ucm9hZHMge1xuICB3aWR0aDogOTAlO1xuXG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbn1cblxuLmNvdXJzZUJveCB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG5cbi5nbGluayB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5hOnZpc2l0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cbmE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbn1cbmE6YWN0aXZlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG59XG4uZ2VuZXJhdGUge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi8qZXJwIG1hbmFnZW1lbnQqL1xuLmxpbmtTZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmVycE1hbmFnZW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxpbmtTZWN0aW9uID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xuICBmb250LXNpemU6IG1heCgxLjJ2dywgMTVweCk7XG4gIGhlaWdodDogbWF4KDM1cHgsIDV2aCk7XG4gIHdpZHRoOiBtYXgoMzUwcHgsIDE1dncpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5saW5rU2VjdGlvbiA+IGRpdjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiAxMDBtcztcbn1cbi5zdWItdGFnIHtcbiAgZm9udC1zaXplOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmFxcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDd2aDtcbiAgd2lkdGg6IDk1JTtcbiAgZ2FwOiAyMHB4O1xufVxuLmZhcXMgPiBkaXYge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5zb2wge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnJvYWRCb3gge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuLmdsaW5rLXIge1xuICBkaXNwbGF5OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIHdpZHRoOiAzMyU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZ2xpbmstcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xufVxuYS5hciB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLyogZm9vdGVyICovXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAyMywgMjQpO1xuICBwYWRkaW5nOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4ucmVhc291cmNlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGdhcDogMTBweDtcbiAgd2lkdGg6IDUwJTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnJlYXNvdXJjZXMgPiBkaXY6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhY3QgPiBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDEwcHg7XG59XG4uY29udGFjdCA+IGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cblxuLmZvb3QtbG9nbyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG4uZm9vdC1sb2dvOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59XG4uZ2VuZXJhdGUge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4vKkFib3V0IHVzKi9cbi5zbG9nYW5CdXR0b24ge1xuICBtYXJnaW4tdG9wOiA0dnc7XG4gIHdpZHRoOiBtYXgoMjAwcHgsIDIwdncpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDIwcHgpO1xufVxuLnNsb2dhbkJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hYm91dCB7XG4gIG1hcmdpbi10b3A6IDF2aDtcbiAgcGFkZGluZzogNXZ3O1xufVxuLmFib3V0Q29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTB2dztcbn1cbi5maXJzdENvbnRlbnQsXG4uc2Vjb25kQ29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTV2dztcbiAgcGFkZGluZy1ib3R0b206IDh2dztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xufVxuLnNlY29uZENvbnRlbnQge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4udGV4dENvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnF1ZXN0aW9uIHtcbiAgZm9udC1zaXplOiAzdnc7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucXVlc3Rpb24gPiBzcGFuIHtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG59XG4uYW5zd2VyIHtcbiAgZm9udC1zaXplOiBtaW4oMnZ3LCAzMHB4KTtcbn1cbi50ZWFtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiBtaW4oNnZ3LCA4MHB4KTtcbn1cbi5tZWV0VGVhbSB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZm9udC1zaXplOiA1LjV2dztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XG59XG4udGVhbUJheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA5MCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi50ZWFtQmF5ID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDEzcHgpO1xuICB3aWR0aDogMjV2dztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4udGVhbUJheSA+IGRpdjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50ZWFtUGVvcGxlIHtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuLnRlYW1QZW9wbGUgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwJTtcbn1cbi8qZmxpcGNhcmQqL1xuLnBlcnNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mbGlwLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IG1pbig0NXZ3LCAzMDBweCk7XG4gIGhlaWdodDogbWluKDQ1dncsIDMwMHB4KTtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMC44dnc7XG59XG5cbi8qIFRoaXMgY29udGFpbmVyIGlzIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xuLmZsaXAtY2FyZC1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLyogRG8gYW4gaG9yaXpvbnRhbCBmbGlwIHdoZW4geW91IG1vdmUgdGhlIG1vdXNlIG92ZXIgdGhlIGZsaXAgYm94IGNvbnRhaW5lciAqL1xuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG5cbi8qIFBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXG4uZmxpcC1jYXJkLWZyb250LFxuLmZsaXAtY2FyZC1iYWNrIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IC8qIFNhZmFyaSAqL1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uZmxpcC1jYXJkLWZyb250ID4gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogU3R5bGUgdGhlIGZyb250IHNpZGUgKGZhbGxiYWNrIGlmIGltYWdlIGlzIG1pc3NpbmcpICovXG4uZmxpcC1jYXJkLWZyb250IHtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG4vKiBTdHlsZSB0aGUgYmFjayBzaWRlICovXG4uZmxpcC1jYXJkLWJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogbWluKDN2dywgMjVweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuLmZsaXAtY2FyZC1iYWNrID4gc3BhbiB7XG4gIG1hcmdpbi1ib3R0b206IDIuNXZ3O1xuICB3aWR0aDogOTAlO1xufVxuLnNvY2lhbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA3MCU7XG59XG4uc29jaWFscyA+IGEgPiBpIHtcbiAgZm9udC1zaXplOiBtaW4oNXZ3LCAzMHB4KTtcbn1cbi5wZXJzb24gPiBzcGFuIHtcbiAgZm9udC1zaXplOiBtaW4oM3Z3LCAyMHB4KTtcbn1cbi8qc2xpZGVyKi9cblxuI3NsaWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDYwJTtcbiAgbWluLWhlaWdodDogMzB2dztcbiAgbWFyZ2luOiA4MHB4IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIkRNIHNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgcGVyc3BlY3RpdmU6IDE0MDBweDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDglO1xuICB3aWR0aDogNHZ3O1xuICBoZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qaW5wdXRbdHlwZT1yYWRpb106bnRoLWNoaWxkKDUpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xuICBvcGFjaXR5OiAxO1xufSovXG5cbmgyIHtcbiAgZm9udC1zaXplOiAyLjV2dztcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbnAge1xuICB3aWR0aDogNTAlO1xuICBmb250LXNpemU6IG1pbigzMHB4LCAxLjV2dyk7XG59XG5cbiNzbGlkZXIgbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgZWFzZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5zbGlkZXJDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jc2xpZGUxIHtcbiAgYmFja2dyb3VuZDogIzA2Njg5Mjtcbn1cbi5kYXJrICNzbGlkZTEge1xuICBiYWNrZ3JvdW5kOiAjMjMyZTZmO1xufVxuXG4jc2xpZGUyIHtcbiAgYmFja2dyb3VuZDogIzBkOTdkMjtcbn1cbi5kYXJrICNzbGlkZTIge1xuICBiYWNrZ3JvdW5kOiAjMzg0YWIyO1xufVxuXG4jc2xpZGUzIHtcbiAgYmFja2dyb3VuZDogIzAwYjBmZjtcbn1cbi5kYXJrICNzbGlkZTMge1xuICBiYWNrZ3JvdW5kOiAjNTM2ZGZlO1xufVxuLypcbiNzbGlkZTQge1xuICBiYWNrZ3JvdW5kOiBzbGF0ZWJsdWU7XG59XG5cbiNzbGlkZTUge1xuICBiYWNrZ3JvdW5kOiB2aW9sZXQ7XG59Ki9cblxuLyogU2xpZGVyIEZ1bmN0aW9uYWxpdHkgKi9cblxuLyogQWN0aXZlIFNsaWRlICovXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTEsXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTIsXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTMsXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTQsXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTUge1xuICBib3gtc2hhZG93OiAwIDEzcHggMjZweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMTJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwLCAwcHgpO1xufVxuXG4vKiBOZXh0IFNsaWRlICovXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTIsXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTMsXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTQsXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTUsXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTEge1xuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxNSUsIDAsIC0xMDBweCk7XG59XG5cbi8qIE5leHQgdG8gTmV4dCBTbGlkZSAqL1xuI3MxOmNoZWNrZWQgfiAjc2xpZGUzLFxuI3MyOmNoZWNrZWQgfiAjc2xpZGU0LFxuI3MzOmNoZWNrZWQgfiAjc2xpZGU1LFxuI3M0OmNoZWNrZWQgfiAjc2xpZGUxLFxuI3M1OmNoZWNrZWQgfiAjc2xpZGUyIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMCUsIDAsIC0yNTBweCk7XG59XG5cbi8qIFByZXZpb3VzIHRvIFByZXZpb3VzIFNsaWRlICovXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTQsXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTUsXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTEsXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTIsXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTMge1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMCUsIDAsIC0yNTBweCk7XG59XG5cbi8qIFByZXZpb3VzIFNsaWRlICovXG4jczE6Y2hlY2tlZCB+ICNzbGlkZTUsXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTEsXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTIsXG4jczQ6Y2hlY2tlZCB+ICNzbGlkZTMsXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTQge1xuICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTUlLCAwLCAtMTAwcHgpO1xufVxuXG4vKlJlc3BvbnNpdmUqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLypob21lcGFnZSB0YWdsaW5lcyovXG4gIGJvZHkge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgI2ltYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5ob21lIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbiAgLnRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5zbG9nYW4ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc2xvZ2FuLXBhcmEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAvKnNsaWRlciovXG4gICNzbGlkZXIge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgI3NsaWRlciBsYWJlbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5zbGlkZXJDb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNXB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IG1heCgyLjZ2dywgMTRweCk7XG4gIH1cbiAgcCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmb250LXNpemU6IG1heCgyLjJ2dywgMTFweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwNCU7XG4gIH1cbn1cblxuLypoYW1idXJnZXIgbWVudSovXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4vKiAub3B0aW9ucyBkaXYge3BhZGRpbmctbGVmdDogMzBweDt9XG4vKi5vcHRpb25zIGRpdiAjaG9tZSAjZXJwICNyb2FkICNzdHVkeSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3IxKTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLm9wdGlvbnMgZGl2ICNob21lIFxuICNlcnAgI3JvYWQgI3N0dWR5OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcbiAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcbn1cbi5vcHRpb25zIGRpdiAjaG9tZSAjZXJwICNyb2FkICAjc3R1ZHk6aG92ZXI6YWZ0ZXIge3dpZHRoOiAxMDAlO30qL1xuLm9wZW4tbWVudSxcbi5jbG9zZS1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5vcGVuLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MiU7XG4gIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLmNsb3NlLW1lbnUge1xuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcbiAgdG9wOiA0MHB4O1xuICByaWdodDogMzVweDtcbn1cbiNjaGVjayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjEwcHgpIHtcbiAgLm9wdGlvbnMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogLTEwMCU7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogMTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLm9wdGlvbnMgZGl2IHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICB9XG4gIC8qIC5vcHRpb25zIGRpdiAjaG9tZSAjZXJwICNyb2FkICAjc3R1ZHkge3BhZGRpbmc6IDEwcHg7fSovXG4gIC5vcGVuLW1lbnUsXG4gIC5jbG9zZS1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAjY2hlY2s6Y2hlY2tlZCB+IC5vcHRpb25zIHtcbiAgICB0b3A6IDA7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL1N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7QUFDckI7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHdCQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjs7RUFFakIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7O0VBRWhCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJB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QUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUVBcUJpRTtBQUNqRTs7RUFFRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsU0FBUztFQUNULFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLFFBQVE7SUFDUixZQUFZO0lBQ1osK0JBQStCO0lBQy9CLGdDQUFnQztFQUNsQztFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0EsMERBQTBEO0VBQzFEOztJQUVFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLE1BQU07RUFDUjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qVXNpbmcgQ3NzIHZhcmlhYmxlKi9cXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yOiB3aGl0ZTtcXG4gIC0tZm9udC1jb2xvcjogYmxhY2s7XFxuICAtLXNlY29uZGFyeTogIzAwYjBmZjtcXG59XFxuXFxuLmRhcmsge1xcbiAgLS1iZy1jb2xvcjogYmxhY2s7XFxuICAtLWZvbnQtY29sb3I6IHdoaXRlO1xcbiAgLS1zZWNvbmRhcnk6ICM1MzZkZmU7XFxuICAtLWNvbG9yMTogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgLS1jb2xvcjM6IHJnYigyMywgMjMsIDI0KTtcXG4gIC0tY29sb3IyOiByZ2IoMjMsIDIzLCAyNCk7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJETSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcbiAgLS1jb2xvcjE6IGJsYWNrO1xcbiAgLS1jb2xvcjI6IHJnYigyMywgMjMsIDI0KTtcXG4gIC0tY29sb3IzOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogNTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDIlO1xcblxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC8qIHBhZGRpbmc6IDEycHggMjBweDsqL1xcbn1cXG5cXG4ubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogbWF4KDUwMHB4LCA1MCUpO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBmb250LXNpemU6IG1heCgxNXB4LCAxdncpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ub3B0aW9ucyA+IGRpdjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuLmhvbWUge1xcbiAgbWFyZ2luLXRvcDogMTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XFxufVxcblxcbi5zbG9nYW4ge1xcbiAgZm9udC1zaXplOiBtYXgoMy41dncsIDQwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uc2xvZ2FuLXBhcmEge1xcbiAgZm9udC1zaXplOiBtYXgoMXZ3LCAyMHB4KTtcXG4gIHdpZHRoOiBtYXgoODAlLCAyODBweCk7XFxufVxcblxcbmkge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyovXFxufVxcblxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBzdHVkeS1tYXRlcmlhbCBwYWdlICovXFxuLnN0dWR5LFxcbi5yb2FkTWFwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi50YWdsaW5lIHtcXG4gIG1hcmdpbi10b3A6IDV2aDtcXG4gIGZvbnQtc2l6ZTogbWluKDh2dywgNzBweCk7XFxuICBmb250LXdlaWdodDogOTUwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2VhcmNoLWJhciB7XFxuICBtYXJnaW4tdG9wOiA1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gIHdpZHRoOiBtYXgoNDB2dywgMzAwcHgpO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jY291cnNlLXNlbGVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6ICgtLWZvbnQtY29sb3IpO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5jb3Vyc2VzLFxcbi5yb2FkcyB7XFxuICB3aWR0aDogOTAlO1xcblxcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbi5jb3Vyc2VCb3gge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmdsaW5rIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbmE6dmlzaXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcbmE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcbi5nZW5lcmF0ZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuLyplcnAgbWFuYWdlbWVudCovXFxuLmxpbmtTZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4uZXJwTWFuYWdlbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5saW5rU2VjdGlvbiA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IG1heCgxLjJ2dywgMTVweCk7XFxuICBoZWlnaHQ6IG1heCgzNXB4LCA1dmgpO1xcbiAgd2lkdGg6IG1heCgzNTBweCwgMTV2dyk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5saW5rU2VjdGlvbiA+IGRpdjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiAxMDBtcztcXG59XFxuLnN1Yi10YWcge1xcbiAgZm9udC1zaXplOiAwLjVlbTtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBtYXJnaW4tdG9wOiAydmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZmFxcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDd2aDtcXG4gIHdpZHRoOiA5NSU7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5mYXFzID4gZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcbi5zb2wge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnJvYWRCb3gge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcbi5nbGluay1yIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIHdpZHRoOiAzMyU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5nbGluay1yOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuYS5hciB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuLyogZm9vdGVyICovXFxuLmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMsIDIzLCAyNCk7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucmVhc291cmNlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogNTAlO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ucmVhc291cmNlcyA+IGRpdjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNvbnRhY3QgPiBhIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuLmNvbnRhY3QgPiBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbn1cXG5cXG4uZm9vdC1sb2dvIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuLmZvb3QtbG9nbzpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuLmdlbmVyYXRlIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLypBYm91dCB1cyovXFxuLnNsb2dhbkJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiA0dnc7XFxuICB3aWR0aDogbWF4KDIwMHB4LCAyMHZ3KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IG1heCgxLjJ2dywgMjBweCk7XFxufVxcbi5zbG9nYW5CdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFib3V0IHtcXG4gIG1hcmdpbi10b3A6IDF2aDtcXG4gIHBhZGRpbmc6IDV2dztcXG59XFxuLmFib3V0Q29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwdnc7XFxufVxcbi5maXJzdENvbnRlbnQsXFxuLnNlY29uZENvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTV2dztcXG4gIHBhZGRpbmctYm90dG9tOiA4dnc7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxufVxcbi5zZWNvbmRDb250ZW50IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi50ZXh0Q29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnF1ZXN0aW9uIHtcXG4gIGZvbnQtc2l6ZTogM3Z3O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnF1ZXN0aW9uID4gc3BhbiB7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuLmFuc3dlciB7XFxuICBmb250LXNpemU6IG1pbigydncsIDMwcHgpO1xcbn1cXG4udGVhbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IG1pbig2dncsIDgwcHgpO1xcbn1cXG4ubWVldFRlYW0ge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC1zaXplOiA1LjV2dztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuLnRlYW1CYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiA5MCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50ZWFtQmF5ID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IG1heCgxLjJ2dywgMTNweCk7XFxuICB3aWR0aDogMjV2dztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4udGVhbUJheSA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGVhbVBlb3BsZSB7XFxuICB3aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG4udGVhbVBlb3BsZSA+IGRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMCU7XFxufVxcbi8qZmxpcGNhcmQqL1xcbi5wZXJzb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmxpcC1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IG1pbig0NXZ3LCAzMDBweCk7XFxuICBoZWlnaHQ6IG1pbig0NXZ3LCAzMDBweCk7XFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMC44dnc7XFxufVxcblxcbi8qIFRoaXMgY29udGFpbmVyIGlzIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xcbi5mbGlwLWNhcmQtaW5uZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxufVxcblxcbi8qIERvIGFuIGhvcml6b250YWwgZmxpcCB3aGVuIHlvdSBtb3ZlIHRoZSBtb3VzZSBvdmVyIHRoZSBmbGlwIGJveCBjb250YWluZXIgKi9cXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxufVxcblxcbi8qIFBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXFxuLmZsaXAtY2FyZC1mcm9udCxcXG4uZmxpcC1jYXJkLWJhY2sge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgLyogU2FmYXJpICovXFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5mbGlwLWNhcmQtZnJvbnQgPiBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogU3R5bGUgdGhlIGZyb250IHNpZGUgKGZhbGxiYWNrIGlmIGltYWdlIGlzIG1pc3NpbmcpICovXFxuLmZsaXAtY2FyZC1mcm9udCB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi8qIFN0eWxlIHRoZSBiYWNrIHNpZGUgKi9cXG4uZmxpcC1jYXJkLWJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogbWluKDN2dywgMjVweCk7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG59XFxuLmZsaXAtY2FyZC1iYWNrID4gc3BhbiB7XFxuICBtYXJnaW4tYm90dG9tOiAyLjV2dztcXG4gIHdpZHRoOiA5MCU7XFxufVxcbi5zb2NpYWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogNzAlO1xcbn1cXG4uc29jaWFscyA+IGEgPiBpIHtcXG4gIGZvbnQtc2l6ZTogbWluKDV2dywgMzBweCk7XFxufVxcbi5wZXJzb24gPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogbWluKDN2dywgMjBweCk7XFxufVxcbi8qc2xpZGVyKi9cXG5cXG4jc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA2MCU7XFxuICBtaW4taGVpZ2h0OiAzMHZ3O1xcbiAgbWFyZ2luOiA4MHB4IGF1dG87XFxuICBmb250LWZhbWlseTogXFxcIkRNIHNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcGVyc3BlY3RpdmU6IDE0MDBweDtcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTA4JTtcXG4gIHdpZHRoOiA0dnc7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBtYXJnaW46IDAgMTVweCAwIDA7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qaW5wdXRbdHlwZT1yYWRpb106bnRoLWNoaWxkKDUpIHtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcXG4gIG9wYWNpdHk6IDE7XFxufSovXFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAyLjV2dztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbnAge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZvbnQtc2l6ZTogbWluKDMwcHgsIDEuNXZ3KTtcXG59XFxuXFxuI3NsaWRlciBsYWJlbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGVhc2U7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuLnNsaWRlckNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNzbGlkZTEge1xcbiAgYmFja2dyb3VuZDogIzA2Njg5MjtcXG59XFxuLmRhcmsgI3NsaWRlMSB7XFxuICBiYWNrZ3JvdW5kOiAjMjMyZTZmO1xcbn1cXG5cXG4jc2xpZGUyIHtcXG4gIGJhY2tncm91bmQ6ICMwZDk3ZDI7XFxufVxcbi5kYXJrICNzbGlkZTIge1xcbiAgYmFja2dyb3VuZDogIzM4NGFiMjtcXG59XFxuXFxuI3NsaWRlMyB7XFxuICBiYWNrZ3JvdW5kOiAjMDBiMGZmO1xcbn1cXG4uZGFyayAjc2xpZGUzIHtcXG4gIGJhY2tncm91bmQ6ICM1MzZkZmU7XFxufVxcbi8qXFxuI3NsaWRlNCB7XFxuICBiYWNrZ3JvdW5kOiBzbGF0ZWJsdWU7XFxufVxcblxcbiNzbGlkZTUge1xcbiAgYmFja2dyb3VuZDogdmlvbGV0O1xcbn0qL1xcblxcbi8qIFNsaWRlciBGdW5jdGlvbmFsaXR5ICovXFxuXFxuLyogQWN0aXZlIFNsaWRlICovXFxuI3MxOmNoZWNrZWQgfiAjc2xpZGUxLFxcbiNzMjpjaGVja2VkIH4gI3NsaWRlMixcXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTMsXFxuI3M0OmNoZWNrZWQgfiAjc2xpZGU0LFxcbiNzNTpjaGVja2VkIH4gI3NsaWRlNSB7XFxuICBib3gtc2hhZG93OiAwIDEzcHggMjZweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMTJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMCwgMHB4KTtcXG59XFxuXFxuLyogTmV4dCBTbGlkZSAqL1xcbiNzMTpjaGVja2VkIH4gI3NsaWRlMixcXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTMsXFxuI3MzOmNoZWNrZWQgfiAjc2xpZGU0LFxcbiNzNDpjaGVja2VkIH4gI3NsaWRlNSxcXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTEge1xcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDE1JSwgMCwgLTEwMHB4KTtcXG59XFxuXFxuLyogTmV4dCB0byBOZXh0IFNsaWRlICovXFxuI3MxOmNoZWNrZWQgfiAjc2xpZGUzLFxcbiNzMjpjaGVja2VkIH4gI3NsaWRlNCxcXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTUsXFxuI3M0OmNoZWNrZWQgfiAjc2xpZGUxLFxcbiNzNTpjaGVja2VkIH4gI3NsaWRlMiB7XFxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMCUsIDAsIC0yNTBweCk7XFxufVxcblxcbi8qIFByZXZpb3VzIHRvIFByZXZpb3VzIFNsaWRlICovXFxuI3MxOmNoZWNrZWQgfiAjc2xpZGU0LFxcbiNzMjpjaGVja2VkIH4gI3NsaWRlNSxcXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTEsXFxuI3M0OmNoZWNrZWQgfiAjc2xpZGUyLFxcbiNzNTpjaGVja2VkIH4gI3NsaWRlMyB7XFxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAlLCAwLCAtMjUwcHgpO1xcbn1cXG5cXG4vKiBQcmV2aW91cyBTbGlkZSAqL1xcbiNzMTpjaGVja2VkIH4gI3NsaWRlNSxcXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTEsXFxuI3MzOmNoZWNrZWQgfiAjc2xpZGUyLFxcbiNzNDpjaGVja2VkIH4gI3NsaWRlMyxcXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTQge1xcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNSUsIDAsIC0xMDBweCk7XFxufVxcblxcbi8qUmVzcG9uc2l2ZSovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC8qaG9tZXBhZ2UgdGFnbGluZXMqL1xcbiAgYm9keSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAjaW1hZ2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLmhvbWUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICB9XFxuICAudGV4dCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuc2xvZ2FuIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgLnNsb2dhbi1wYXJhIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgLypzbGlkZXIqL1xcbiAgI3NsaWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XFxuICAgIHdpZHRoOiA3MCU7XFxuICB9XFxuICAjc2xpZGVyIGxhYmVsIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgLnNsaWRlckNvbnRlbnQge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IG1heCgyLjZ2dywgMTRweCk7XFxuICB9XFxuICBwIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1zaXplOiBtYXgoMi4ydncsIDExcHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDQlO1xcbiAgfVxcbn1cXG5cXG4vKmhhbWJ1cmdlciBtZW51Ki9cXG4ub3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4vKiAub3B0aW9ucyBkaXYge3BhZGRpbmctbGVmdDogMzBweDt9XFxuLyoub3B0aW9ucyBkaXYgI2hvbWUgI2VycCAjcm9hZCAjc3R1ZHkge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yMSk7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4tb3V0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5vcHRpb25zIGRpdiAjaG9tZSBcXG4gI2VycCAjcm9hZCAjc3R1ZHk6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XFxuICAgIHRyYW5zaXRpb246IDAuMTVzIGVhc2UtaW4tb3V0O1xcbn1cXG4ub3B0aW9ucyBkaXYgI2hvbWUgI2VycCAjcm9hZCAgI3N0dWR5OmhvdmVyOmFmdGVyIHt3aWR0aDogMTAwJTt9Ki9cXG4ub3Blbi1tZW51LFxcbi5jbG9zZS1tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ub3Blbi1tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTIlO1xcbiAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7Ki9cXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4uY2xvc2UtbWVudSB7XFxuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gIHRvcDogNDBweDtcXG4gIHJpZ2h0OiAzNXB4O1xcbn1cXG4jY2hlY2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuQG1lZGlhIChtYXgtd2lkdGg6IDYxMHB4KSB7XFxuICAub3B0aW9ucyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDUwdmg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAtMTAwJTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuICB9XFxuICAub3B0aW9ucyBkaXYge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgfVxcbiAgLyogLm9wdGlvbnMgZGl2ICNob21lICNlcnAgI3JvYWQgICNzdHVkeSB7cGFkZGluZzogMTBweDt9Ki9cXG4gIC5vcGVuLW1lbnUsXFxuICAuY2xvc2UtbWVudSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgI2NoZWNrOmNoZWNrZWQgfiAub3B0aW9ucyB7XFxuICAgIHRvcDogMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9TdHlsZS5jc3NcIjtcbmltcG9ydCBsb2dvMSBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvMTAucG5nXCI7XG5pbXBvcnQgbG9nbzIgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzLzkucG5nXCI7XG5pbXBvcnQgZHBpYyBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvZGFya21vZGUuc3ZnXCI7XG5pbXBvcnQgbHBpYyBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvbGlnaHRtb2RlLnN2Z1wiO1xuaW1wb3J0IHNwaWMxIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy9nb2FsLnN2Z1wiO1xuaW1wb3J0IHNwaWMyIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy9qb3VybmV5LnN2Z1wiO1xuaW1wb3J0IHNwaWMzIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy9vcGVuc291cmNlLnN2Z1wiO1xuaW1wb3J0IGNvbXB1dGVyIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy9jb21wdXRlci5zdmdcIjtcbmltcG9ydCBoZWxwUGljIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy9oZWxwTGlnaHQuc3ZnXCI7XG5cbi8vSW50aWFsIGxvZ28gZ2VuZXJhdGlvblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZ1wiKS5zcmMgPSBsb2dvMTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnQtbG9nb1wiKS5zcmMgPSBsb2dvMjtcbi8vaW50aWFsIGhvbWVwYWdlIHBpYyBnZW5lcmF0aW9uXG5jb25zdCBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlXCIpO1xuaW1nLnNyYyA9IGxwaWM7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdvYWxcIikuc3JjID0gc3BpYzE7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpvdXJuZXlcIikuc3JjID0gc3BpYzI7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9zXCIpLnNyYyA9IHNwaWMzO1xuLy9EYXJrTW9kZSBMaWdodE1vZGUgVG9nZ2xlXG5jb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZURhcmtcIik7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCBvcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcHRpb25zXCIpO1xuXG50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwiYmktbW9vblwiKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiZGFya1wiKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGdcIik7XG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VcIik7XG5cbiAgLy9zZWUgd2hpY2ggbW9kZSBpdCBpc1xuICBsZXQgaXNEYXJrTW9kZSA9IGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya1wiKTtcblxuICBpZiAoaXNEYXJrTW9kZSkge1xuICAgIGxvZ28uc3JjID0gbG9nbzI7XG4gICAgaWYgKGltZykge1xuICAgICAgaW1nLnNyYyA9IGRwaWM7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxvZ28uc3JjID0gbG9nbzE7XG4gICAgaWYgKGltZykge1xuICAgICAgaW1nLnNyYyA9IGxwaWM7XG4gICAgfVxuICB9XG59KTtcblxubGV0IGdlbmVyYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZW5lcmF0ZVwiKTtcbmNvbnN0IGhvZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbmNvbnN0IHN0dWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0dWR5XCIpO1xuY29uc3Qgcm9hZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9hZFwiKTtcbmNvbnN0IGVycCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJwXCIpO1xuXG4vL0dlbmVyYXRlIGhvbWVQYWdlIGR5bmFtaWNhbGx5XG5sZXQgaG9tZWdlbiA9ICgpID0+IHtcbiAgY29uc3QgaXNEYXJrTW9kZSA9IGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya1wiKTtcbiAgaG9lLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpXCI7XG4gIHN0dWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIHJvYWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIGVycC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcbiAgZ2VuZXJhdGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJob21lXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbG9nYW5cIj5cbiAgICAgICAgICAgICAgU2ltcGxpZnkgYWNhZGVtaWNzIHdpdGggdXNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsb2dhbi1wYXJhXCI+XG4gICAgICAgICAgICAgICAgV2VsY29tZSB0byBTbnVBY2FkZW1pYSwgdGhlIHVsdGltYXRlIHN0dWRlbnQgZGVzaWduZWQgd2Vic2l0ZSB0aGF0IGhlbHBzIGluIHNpbXBsaWZ5aW5nIHN0dWR5IGxpZmVcbiAgICAgICAgICAgICAgICBhdCBTTlVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsb2dhbkJ1dHRvblwiPkFib3V0IHVzPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxpbWcgaWQ9XCJpbWFnZVwiIHNyYz0nJHtscGljfScgc3R5bGU9XCJ3aWR0aDo1MCU7bWFyZ2luLXJpZ2h0OiAxMCU7XCI+XG48L2Rpdj5cbjxzZWN0aW9uIGlkPVwic2xpZGVyXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2xpZGVyXCIgaWQ9XCJzMVwiIGNoZWNrZWQgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzbGlkZXJcIiBpZD1cInMyXCIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzbGlkZXJcIiBpZD1cInMzXCIgLz5cbiAgICAgICAgPGxhYmVsIGZvcj1cInMxXCIgaWQ9XCJzbGlkZTFcIlxuICAgICAgICAgID48aDI+T3VyIEdvYWw8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXJDb250ZW50XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7c3BpYzF9XCIgd2lkdGg9XCI1MCVcIiAvPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFNudUFjYWRlbWlhIGFpbXMgdG8gYXNzaXN0IHN0dWRlbnRzIHRocm91Z2hvdXQgdGhlaXIgYWNhZGVtaWNcbiAgICAgICAgICAgICAgam91cm5leSB3aXRoIHN0dWR5IG1hdGVyaWFscywgbm90ZXMsIFBZUXMsIGFuZCBhc3NpZ25tZW50cy4gT3VyXG4gICAgICAgICAgICAgIHdlYnNpdGUgYWxzbyBhZGRyZXNzZXMgY29tbW9uIHF1ZXN0aW9ucyBhYm91dCBFUlAsIEJsYWNrYm9hcmQsIGFuZFxuICAgICAgICAgICAgICBvdGhlciBnZW5lcmFsIHF1ZXJpZXMgZm9yIGZyZXNoZXJzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgZm9yPVwiczJcIiBpZD1cInNsaWRlMlwiXG4gICAgICAgICAgPjxoMj5PdXIgSm91cm5leTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlckNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtzcGljMn1cIiB3aWR0aD1cIjUwJVwiIC8+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgT3VyIGpvdXJuZXkgYmVnYW4gb24gYSByYW5kb20gYWZ0ZXJub29uIGluIG91ciBob3N0ZWwgcm9vbSwgd2hlcmVcbiAgICAgICAgICAgICAgd2Ugc3RhcnRlZCB3b3JraW5nIG9uIHRoaXMgcHJvamVjdCB3aXRoIHRoZSBzdXBwb3J0IG9mIG91ciBwZWVycy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGZvcj1cInMzXCIgaWQ9XCJzbGlkZTNcIlxuICAgICAgICAgID48aDI+T3BlbiBTb3VyY2UgQ29udHJpYnV0aW9uPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyQ29udGVudFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3NwaWMzfVwiIHdpZHRoPVwiNDAlXCIgLz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBPdXIgd2Vic2l0ZSBpcyBvcGVuLXNvdXJjZSwgYWxsb3dpbmcgc3R1ZGVudHMgdG8gYWNjZXNzIGFuZFxuICAgICAgICAgICAgICBjb250cmlidXRlIHRvIHRoZSBzb3VyY2UgY29kZSB0aHJvdWdoIG91ciBHaXRIdWIgcmVwb3NpdG9yeS4gV2VcbiAgICAgICAgICAgICAgd2VsY29tZSB5b3VyIHBhcnRpY2lwYXRpb24gYW5kIGNvbGxhYm9yYXRpb24gaW4gbWFraW5nIG91clxuICAgICAgICAgICAgICBwbGF0Zm9ybSBldmVuIGJldHRlci5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvc2VjdGlvbj5gO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VcIik7XG4gIGlmIChpc0RhcmtNb2RlKSB7XG4gICAgaWYgKGltZykge1xuICAgICAgaW1nLnNyYyA9IGRwaWM7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpbWcpIHtcbiAgICAgIGltZy5zcmMgPSBscGljO1xuICAgIH1cbiAgfVxufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob21lZ2VuKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZWZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWVnZW4pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290LWxvZ29cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhvbWVnZW4pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob21lZ2VuKTtcbi8vZ2VuZXJhdGUgU3R1ZHkgTWF0ZXJpYWwgVGFiXG5sZXQgc3R1ZHlHZW4gPSAoKSA9PiB7XG4gIGhvZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcbiAgc3R1ZC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKVwiO1xuICByb2FkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICBlcnAuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIGdlbmVyYXRlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwic3R1ZHlcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGFnbGluZVwiPlxuICAgICAgICA8c3Bhbj5XaGVyZSBUZXh0Ym9va3M8L3NwYW4+XG4gICAgICAgIDxzcGFuPkFuZCBEcmVhbXMgQ29sbGlkZTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzdWItdGFnXCI+RXhwbG9yZSwgRGlzY292ZXIsIGFuZCBTaGFwZSBZb3VyIEFjYWRlbWljIEpvdXJuZXkgd2l0aCBMaW1pdGxlc3MgUG9zc2liaWxpdGllczwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWJhclwiPlxuICAgICAgICA8c3Bhbj48aSBjbGFzcz1cImJpIGJpLXNlYXJjaFwiIHN0eWxlPVwiZm9udC1zaXplOiBtYXgoMjBweCwxLjV2dyk7XCIgPjwvaT48L3NwYW4+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY291cnNlLXNlbGVjdFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgZGF0YS1zZWFyY2g+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvdXJzZXNcIj5cbiAgICAgICAgXG4gICAgPC9kaXY+XG48L2Rpdj5gO1xuXG4gIGNvbnN0IGdlbmVyYXRlQ291cnNlcyA9IChhcnJheSwgbGlua0FycmF5KSA9PiB7XG4gICAgbGV0IGNvdXJzZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdXJzZXNcIik7XG4gICAgbGV0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291cnNlLXNlbGVjdFwiKTtcblxuICAgIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgLy9pbnB1dCBiZWluZyB0eXBlZCBpbnNpZGUgdGhlIHNlYXJjaCBiYXJcbiAgICAgIGNvbnN0IHNlYXJjaFRleHQgPSBzZWFyY2hCYXIudmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgLy8gQ2xlYXIgZXhpc3RpbmcgY291cnNlc1xuICAgICAgY291cnNlcy5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGNvdXJzZU5hbWUgPSBhcnJheVtpbmRleF0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbGluayA9IGxpbmtBcnJheVtpbmRleF07XG5cbiAgICAgICAgaWYgKGNvdXJzZU5hbWUuaW5jbHVkZXMoc2VhcmNoVGV4dCkpIHtcbiAgICAgICAgICBsZXQgY291cnNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb3Vyc2VEaXYuY2xhc3NMaXN0LmFkZChcImNvdXJzZUJveFwiKTtcbiAgICAgICAgICBjb3Vyc2VzLmFwcGVuZENoaWxkKGNvdXJzZURpdik7XG4gICAgICAgICAgY291cnNlRGl2LmlubmVySFRNTCA9IGA8c3BhbiBpZD1cImNvdXJzZS0ke2luZGV4fVwiPiR7YXJyYXlbaW5kZXhdfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImdsaW5rXCIgIGlkPVwibGluay0ke2luZGV4fVwiPjxhIGhyZWY9XCIke2xpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+Q29udGVudDwvYT48L3NwYW4+YDtcblxuICAgICAgICAgIGNvdXJzZURpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb3Vyc2UtJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGluay0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjb3Vyc2VEaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb3Vyc2UtJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGluay0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vVG8gZ2VuZXJhdGUgY291cnNlcyB3aGVuIHlvdSBsb2FkIHVwIHBhZ2VcbiAgICBzZWFyY2hCYXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiKSk7XG4gIH07XG5cbiAgLy9leGFtcGxlIGFycmF5c1xuICBsZXQgY291cnNlQXJyID0gW1wiREVTMTAxXCIsIFwiRkFDMjAyXCIsIFwiTUVDMTA0XCIsIFwiTUtUMjAyXCIsIFwiT0hNNDAxXCIsIFwiU1RNMjA0XCJdO1xuICBsZXQgbGlua0FyciA9IFtcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9kcml2ZS9mb2xkZXJzLzFwZldIMEoyZWs3eXhUTWJtb0N2LTRZUVBCNVhLT0xIcj91c3A9c2hhcmluZ1wiLFxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMXE3VXNLV0ZnNW9kVDZyWDU3VDRMQXJoU1k1ZUxhMlJKP3VzcD1zaGFyaW5nXCIsXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xTmxySEtDUDUyYjUzT1FpWWNkQmdPN052TDllUTgxenY/dXNwPXNoYXJpbmdcIixcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9kcml2ZS9mb2xkZXJzLzF0eklzMnV4NmxSMXU4ZVQ5ZlRBRC01SlhCa2hBR3FyYj91c3A9ZHJpdmVfbGlua1wiLFxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMV8tbWtkUUhDcXBQY2VpUWVadzdqOTFyMGhWY1VobWhKP3VzcD1zaGFyaW5nXCIsXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xWjlCcUpDMXZDbk14RlNSVDhZTWFmQjFzZGxMQXY4bXU/dXNwPXNoYXJpbmdcIixcbiAgXTtcbiAgZ2VuZXJhdGVDb3Vyc2VzKGNvdXJzZUFyciwgbGlua0Fycik7XG59O1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHVkeVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3R1ZHlHZW4pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHVkeWZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0dWR5R2VuKTtcblxuLy9HZW5lcmF0ZSBSb2FkbWFwXG5jb25zdCByb2FkR2VuID0gKCkgPT4ge1xuICBob2Uuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIHN0dWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XG4gIHJvYWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCIycHggc29saWQgdmFyKC0tZm9udC1jb2xvcilcIjtcbiAgZXJwLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xuICBnZW5lcmF0ZS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInJvYWRNYXBzXCI+XG4gIDxkaXYgY2xhc3M9XCJ0YWdsaW5lXCI+XG4gICAgICA8c3Bhbj5DaG9vc2U8L3NwYW4+XG4gICAgICA8c3Bhbj5Zb3VyIEFjYWRlbWljIFRyYWlsPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzdWItdGFnXCI+Q2hhcnQgWW91ciBBY2FkZW1pYyBKb3VybmV5OiBFeHBsb3JlIE1ham9yIGFuZCBNaW5vciBQYXRoczwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzZWFyY2gtYmFyXCI+XG4gICAgICA8c3Bhbj48aSBjbGFzcz1cImJpIGJpLXNlYXJjaFwiIHN0eWxlPVwiZm9udC1zaXplOiBtYXgoMjBweCwxLjV2dyk7XCIgPjwvaT48L3NwYW4+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNvdXJzZS1zZWxlY3RcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIGRhdGEtc2VhcmNoPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInJvYWRzXCI+XG4gICAgICBcbiAgPC9kaXY+YDtcbiAgbGV0IHJvYWRBcnIgPSBbXCJDU0VcIiwgXCJFQ0VcIiwgXCJFRUVcIiwgXCJNRUNIXCIsIFwiQk1TXCIsIFwiRUNPXCJdO1xuICBnZW5lcmF0ZVJvYWQocm9hZEFycik7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVJvYWQgPSAoYXJyYXkpID0+IHtcbiAgbGV0IHJvYWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb2Fkc1wiKTtcbiAgbGV0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291cnNlLXNlbGVjdFwiKTtcblxuICBzZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAvL2lucHV0IGJlaW5nIHR5cGVkIGluc2lkZSB0aGUgc2VhcmNoIGJhclxuICAgIGNvbnN0IHNlYXJjaFRleHQgPSBzZWFyY2hCYXIudmFsdWUudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIENsZWFyIGV4aXN0aW5nIGNvdXJzZXNcbiAgICByb2Fkcy5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgYnJhbmNoTmFtZSA9IGFycmF5W2luZGV4XS50b0xvd2VyQ2FzZSgpO1xuICAgICAgLy9jb25zdCBsaW5rID0gbGlua0FycmF5W2luZGV4XTtcbiAgICAgIGlmIChicmFuY2hOYW1lLmluY2x1ZGVzKHNlYXJjaFRleHQpKSB7XG4gICAgICAgIGxldCBtYXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYXBEaXYuY2xhc3NMaXN0LmFkZChcInJvYWRCb3hcIik7XG4gICAgICAgIHJvYWRzLmFwcGVuZENoaWxkKG1hcERpdik7XG4gICAgICAgIG1hcERpdi5pbm5lckhUTUwgPSBgPHNwYW4gaWQ9XCJjb3Vyc2UtJHtpbmRleH1cIj4ke2FycmF5W2luZGV4XX08L3NwYW4+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6ZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IHdpZHRoOjgwJVwiID5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImdsaW5rLXJcIiAgaWQ9XCJtYWpvckxpbmstJHtpbmRleH1cIj48YSBjbGFzcz0nYXInIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPk1ham9yPC9hPjwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImdsaW5rLXJcIiBpZD1cIm1pbm9yTGluay0ke2luZGV4fVwiPjxhIGNsYXNzPSdhcidocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5NaW5vcjwvYT48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+YDtcblxuICAgICAgICBtYXBEaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvdXJzZS0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWFqb3JMaW5rLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtaW5vckxpbmstJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIH0pO1xuICAgICAgICBtYXBEaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY291cnNlLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBtYWpvckxpbmstJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1pbm9yTGluay0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgLy9UbyBnZW5lcmF0ZSBjb3Vyc2VzIHdoZW4geW91IGxvYWQgdXAgcGFnZVxuICBzZWFyY2hCYXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiKSk7XG59O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvYWRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvYWRHZW4pO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb2FkZlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm9hZEdlbik7XG5cbi8vR2VuZXJhdGUgRXJwIE1hbmFnZW1lbnQgVGFiXG5jb25zdCBlcnBHZW4gPSAoKSA9PiB7XG4gIGhvZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcbiAgc3R1ZC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcbiAgcm9hZC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcbiAgZXJwLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpXCI7XG4gIGdlbmVyYXRlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZXJwTWFuYWdlbWVudFwiPlxuICA8ZGl2IGNsYXNzPVwidGFnbGluZVwiPlxuICAgICAgPHNwYW4+U2ltcGxpZnk8L3NwYW4+XG4gICAgICA8c3Bhbj4gWW91ciBTbnUgRXhwZXJpZW5jZTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3ViLXRhZ1wiID5Db21tb25seSBhc2tlZCBGQVFzIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJsaW5rU2VjdGlvblwiPlxuICAgICAgPGRpdiBpZD1cImVycExpbmtcIj5FcnA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJmYXN0TGlua1wiPkZhc3RyYWNrPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiaG9zdGVMaW5rXCI+SG9zdGVsIE1hbmFnZW1lbnQ8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJiYkxpbmtcIj5CbGFja2JvYXJkPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZmFxc1wiPlxuICAgICAgPGRpdiBjbGFzcz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB3aWR0aDogMTAwJTtcIj5cbiAgICAgICAgICAgICAgPHNwYW4+V2hhdCBpcyBFcnA/PC9zcGFuPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWNhcmV0LWRvd24tZmlsbFwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic29sXCI+cmFuZG9tIGltYWdlL3ZpZGVvPC9kaXY+ICAgICAgICAgICAgICAgICAgICBcbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PmA7XG4gIGxldCBsaW5rU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlua1NlY3Rpb25cIik7XG4gIGxldCBsaW5rcyA9IGxpbmtTZWN0aW9uLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpO1xuICBsZXQgZmFxcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmFxc1wiKTtcblxuICBmdW5jdGlvbiBmYXFGaWxsKGFycmF5KSB7XG4gICAgZmFxcy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBlbGVtZW50ID0gYXJyYXlbaV07XG4gICAgICBsZXQgZmFxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZhcURpdi5pbm5lckhUTUwgPSBgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjsgd2lkdGg6IDEwMCU7XCI+XG4gICAgICA8c3Bhbj4ke2VsZW1lbnQucXVlc3Rpb259PC9zcGFuPlxuICAgICAgPHNwYW4+PGkgaWQ9J2Ryb3AtJHtpfScgY2xhc3M9XCJiaSBiaS1jYXJldC1kb3duLWZpbGxcIj48L2k+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwic29sXCIgaWQ9J3NvbC0ke2l9Jz4ke2VsZW1lbnQuYW5zd2VyfTwvZGl2PmA7XG4gICAgICBmYXFzLmFwcGVuZENoaWxkKGZhcURpdik7XG4gICAgICBmYXFEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3Qgc29sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHNvbC0ke2l9YCk7XG4gICAgICAgIGNvbnN0IGFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRyb3AtJHtpfWApO1xuICAgICAgICBpZiAoc29sLnN0eWxlLmRpc3BsYXkgPT0gXCJmbGV4XCIpIHtcbiAgICAgICAgICBzb2wuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgIGFycm93LmNsYXNzTGlzdCA9IFwiYmktY2FyZXQtZG93bi1maWxsXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc29sLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICBhcnJvdy5jbGFzc0xpc3QgPSBcImJpLWNhcmV0LXVwLWZpbGxcIjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGZhcXMuaW5uZXJIVE1MID0gXCJcIjtcbiAgLy9FeGFtcGxlIGFycmF5c1xuICBsZXQgZXJwRmFxcyA9IFtcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIEVSUD9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJUaGUgU2hpdiBOYWRhciBVbml2ZXJzaXR5IEVSUCBwb3J0YWwgaXMgYSB3ZWItYmFzZWQgYXBwbGljYXRpb24gdGhhdCBwcm92aWRlcyBzdHVkZW50cywgZmFjdWx0eSwgYW5kIHN0YWZmIHdpdGggYWNjZXNzIHRvIGEgdmFyaWV0eSBvZiB1bml2ZXJzaXR5IHNlcnZpY2VzLiBUaGUgcG9ydGFsIGluY2x1ZGVzIGZlYXR1cmVzIHN1Y2ggYXMgc3R1ZGVudCBzZWxmLXNlcnZpY2UsIGZhY3VsdHkgc2VsZi1zZXJ2aWNlLCBzdGFmZiBzZWxmLXNlcnZpY2UsIGFuZCBwYXJlbnQtc3R1ZGVudCBwb3J0YWwuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gbG9nIGluIHRvIHRoZSBFUlA/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiVG8gbG9nIGluIHRvIHlvdXIgRVJQLCB5b3UgbXVzdCBlbnRlciB5b3VyIFNOVSBuZXQgSUQgKGUuZy4tIHh5MTIzKSBhbmQgcGFzc3dvcmQuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gYWRkIGNvdXJzZXMgdG8gcGxhbm5lcj9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJVcG9uIGxvZ2dpbmcgaW50byB0aGUgRVJQLCBuYXZpZ2F0ZSB0byB0aGUgJ0FjYWRlbWljIFBsYW5uaW5nJyBzZWN0aW9uIGxvY2F0ZWQgaW4gdGhlIGxlZnQtaGFuZCBtZW51IGJhciwgb3IgZGlyZWN0bHkgYWNjZXNzIHRoZSAnUGxhbicgb3B0aW9uIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgYWxvbmdzaWRlIG90aGVyIG9wdGlvbnMgbGlrZSBzZWFyY2ggYW5kIGVucm9sbC4gUHJvY2VlZCB0byBjbGljayBvbiAnQnJvd3NlIENhdGFsb2cnIGFuZCB1c2UgdGhlIHRleHQgYm94IHRvIGlucHV0IHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHN1YmplY3QgeW91IGRlc2lyZSB0byBzZWxlY3QgYSBjb3Vyc2UgZnJvbS4gQWxsIGF2YWlsYWJsZSBzdWJqZWN0IG9wdGlvbnMgd2lsbCBiZSBkaXNwbGF5ZWQsIHdoZXJlIHlvdSBjYW4gdGhlbiBjbGljayB0aGUgZHJvcGRvd24gYnV0dG9uIHRvIGNob29zZSB5b3VyIGRlc2lyZWQgY291cnNlIGFuZCBjbGljayBvbiAnQWRkIFBsYW5uZXInIHRvIGluY2x1ZGUgaXQgaW4geW91ciBwbGFubmVyLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hlcmUgdG8gc2VlIHlvdXIgdGltZXRhYmxlIGZyb20/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiSW4gdGhlIEVSUCBzeXN0ZW0sIGxvY2F0ZSB0aGUgJ0Vucm9sbG1lbnQnIG9wdGlvbiBvbiB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIHBhZ2UsIHNpdHVhdGVkIHVuZGVyIHRoZSBtZW51IGJveC4gQ2xpY2sgb24gdGhlICdNeSBXZWVrbHkgU2NoZWR1bGUnIG9wdGlvbiB0byBhY2Nlc3MgeW91ciB0aW1ldGFibGUgZm9yIHRoZSBjdXJyZW50IHdlZWsuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gY2hlY2sgR1BBP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIkluIHRoZSBFUlAgc3lzdGVtLCBmaW5kIHRoZSAnRW5yb2xsbWVudCcgb3B0aW9uIG9uIHRoZSBsZWZ0LWhhbmQgc2lkZSBvZiB0aGUgcGFnZSwgd2hpY2ggaXMgbG9jYXRlZCB1bmRlciB0aGUgbWVudSBib3guIENsaWNrIG9uICdUZXJtIFN0YXRpc3RpY3MnIGFuZCBjaG9vc2UgdGhlIHNlbWVzdGVyIGZvciB3aGljaCB5b3Ugd2lzaCB0byBjaGVjayB5b3VyIEdQQS4gVGhlbiwgcmV2aWV3IHlvdXIgR1BBIGZvciB0aGUgc2VsZWN0ZWQgc2VtZXN0ZXIuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBxdWVzdGlvbjpcbiAgICAgICAgXCJIb3cgdG8gY2hlY2sgdGhlIHRvdGFsIGNyZWRpdHMgY29tcGxldGVkIGFuZCB0b3RhbCBjcmVkaXRzIGxlZnQ/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgICdGaW5kIHRoZSBcIk15IEFjYWRlbWljc1wiIG9wdGlvbiBpbiB0aGUgRVJQIHN5c3RlbSBhbG9uZyB3aXRoIG90aGVyIG9wdGlvbnMgbGlrZSBcIkVucm9sLFwiIFwiUGxhbixcIiBldGMuIG5lYXIgdGhlIHRvcCBvZiB0aGUgcGFnZS4gVGhlbiBzZWxlY3QgXCJWaWV3IE15IEFkdmlzZW1lbnQgUmVwb3J0LlwiIFRoaXMgcmVwb3J0IHdpbGwgc2hvdyB0aGUgY3JlZGl0cyB5b3UgaGF2ZSBhbHJlYWR5IGVhcm5lZCBhcyB3ZWxsIGFzIHRoZSBjcmVkaXRzIHlvdSBzdGlsbCBuZWVkIHRvIGZpbmlzaC4nLFxuICAgIH0sXG4gIF07XG4gIGxldCBmYXN0cmFja0ZhcXMgPSBbXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyBGYXN0cmFjaz9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgJ1RvIGxlYXZlIHRoZSBjYW1wdXMgZm9yIGEgZGF5IG9yIGxvbmdlciwgeW91IG11c3Qgb2J0YWluIGFwcHJvdmFsIGZyb20gdGhlIHdhcmRlbi4gVGhpcyBhcHByb3ZhbCBpcyByZWZlcnJlZCB0byBhcyBcImZhc3RyYWNrLlwiJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyBkbyBJIGFwcGx5IGZvciBGYXN0cmFjaz9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgJ1BsZWFzZSBhY2Nlc3MgdGhlIFNOVUxpbmtzIHdlYnNpdGUgYW5kIGZpbmQgdGhlIFwibG9naW5cIiBvcHRpb24uIE9uY2UgbG9nZ2VkIGluLCB5b3Ugd2lsbCBzZWUgYSB2YXJpZXR5IG9mIGNob2ljZXMuIENsaWNrIG9uIHRoZSBcImZhc3RyYWNrXCIgb3B0aW9uIHRvIGFjY2VzcyB0aGUgZm9ybSBmb3IgcmVxdWVzdGluZyBwZXJtaXNzaW9uIHRvIGxlYXZlIHRoZSBjYW1wdXMsIHdoZXRoZXIgaXQgaXMgZm9yIHBlcnNvbmFsIG9yIG9mZmljaWFsIHJlYXNvbnMuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgdG8gZG8gaW4gY2FzZSBGYXN0cmFjayBpcyByZWplY3RlZD9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJJZiB5b3VyIGZhc3RyYWNrIHJlcXVlc3QgaXMgcmVqZWN0ZWQgZm9yIGFueSByZWFzb24sIHlvdSBoYXZlIHR3byBvcHRpb25zOiBZb3UgY2FuIHJldmlldyB0aGUgZm9ybSB0byBzZWUgaWYgdGhlcmUgYXJlIGFueSBtaXN0YWtlcywgY29ycmVjdCB0aGVtLCBhbmQgcmVzdWJtaXQgaXQgZm9yIGFwcHJvdmFsLiBBbHRlcm5hdGl2ZWx5LCBpZiB5b3UgbmVlZCB0byBsZWF2ZSB1cmdlbnRseSwgeW91IGNhbiBkaXJlY3RseSBhcHByb2FjaCB0aGUgcmVjZXB0aW9uIG9mIHlvdXIgaG9zdGVsIGFuZCByZXF1ZXN0IGFuIGVhcmx5IGFwcHJvdmFsIGZyb20gdGhlbS5cIixcbiAgICB9LFxuICBdO1xuICBsZXQgaG9zdGVsRmFxcyA9IFtcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJIb3cgdG8gY2hvb3NlIHJvb21tYXRlcz9cIixcbiAgICAgIGFuc3dlcjogXCJUaGUgb3B0aW9uIHRvIHJlbW92ZSByb29tbWF0ZXMgaXMgbm8gbG9uZ2VyIHZhbGlkIGFzIG9mIDIwMjNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBzZWxlY3QgeW91ciByb29tP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIlBsZWFzZSB2aXNpdCB0aGUgU05VTGlua3Mgd2Vic2l0ZSBhbmQgbG9jYXRlIHRoZSAnbG9naW4nIG9wdGlvbi4gQWZ0ZXIgbG9nZ2luZyBpbiwgeW91IHdpbGwgYmUgcHJlc2VudGVkIHdpdGggdmFyaW91cyBjaG9pY2VzLiBDbGljayBvbiB0aGUgJ0hvc3RlbCBNYW5hZ2VtZW50IFN5c3RlbScgb3B0aW9uLCBhbmQgZnJvbSB0aGVyZSwgZmluZCB0aGUgJ1Jvb20gU2VsZWN0aW9uIFJlcXVlc3QnIG9wdGlvbi4gRHVyaW5nIHRoZSByb29tIHNlbGVjdGlvbiBkYXlzIGFzc2lnbmVkIGJ5IHRoZSBtYW5hZ2VtZW50LCB0aGlzIHNlbGVjdGlvbiB3aWxsIHJlZGlyZWN0IHlvdSB0byBhIHBhZ2Ugd2hlcmUgeW91IGNhbiBjaG9vc2UgeW91ciByb29tLlwiLFxuICAgIH0sXG4gIF07XG4gIGxldCBibGFja2JvYXJkRmFxcyA9IFtcbiAgICB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIEJsYWNrYm9hcmQ/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiQmxhY2tib2FyZCBpcyBhbiBvbmxpbmUgbGVhcm5pbmcgbWFuYWdlbWVudCBzeXN0ZW0gKExNUykgdXNlZCBieSBwcm9mZXNzb3JzIHRvIHByb3ZpZGUgY291cnNlIG1hdGVyaWFscywgaW5jbHVkaW5nIG5vdGVzLCBhc3NpZ25tZW50cywgYW5ub3VuY2VtZW50cywgYW5kIG90aGVyIHJlc291cmNlcyB0byBzdHVkZW50cyBpbiBhIGRpZ2l0YWwgZm9ybWF0LlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGxvZyBpbiBibGFja2JvYXJkP1wiLFxuICAgICAgYW5zd2VyOlxuICAgICAgICBcIlRvIGFjY2VzcyB0aGUgQmxhY2tib2FyZCBwbGF0Zm9ybSBhdCBTTlUsIHlvdSBoYXZlIHR3byBvcHRpb25zLiBGaXJzdGx5LCB5b3UgY2FuIG5hdmlnYXRlIHRvIFNOVSBsaW5rcyBhbmQgc2VhcmNoIGZvciB0aGUgJ0JsYWNrYm9hcmQnIG9wdGlvbiBvbiB0aGUgd2Vic2l0ZS4gQWx0ZXJuYXRpdmVseSwgeW91IG1heSBkaXJlY3RseSBzZWFyY2ggZm9yICdTTlUgQmxhY2tib2FyZCcgb24gdGhlIGludGVybmV0LiBPbmNlIHlvdSBmaW5kIHRoZSBCbGFja2JvYXJkIHBvcnRhbCwgbG9nIGluIHVzaW5nIHlvdXIgU05VIGVtYWlsIElEIGFuZCBwYXNzd29yZCB0byBnYWluIGFjY2VzcyB0byB0aGUgcGxhdGZvcm0uLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGFkZCBjb3Vyc2VzIHRvIGZhdm9yaXRlcz9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJBZnRlciBsb2dnaW5nIGluIHRvIHlvdXIgQmxhY2tib2FyZCBhY2NvdW50LCBmaW5kIHRoZSAnQ291cnNlcycgb3B0aW9uIGxvY2F0ZWQgb24gdGhlIGxlZnQtaGFuZCBzaWRlIG9mIHRoZSBzY3JlZW4gYW5kIGNsaWNrIG9uIGl0LiBUaGlzIGFjdGlvbiB3aWxsIGRpc3BsYXkgYSBsaXN0IG9mIGFsbCB0aGUgY291cnNlcyB5b3UgYXJlIGN1cnJlbnRseSBlbnJvbGxlZCBpbi4gVG8gbWFyayBhIGNvdXJzZSBhcyBhIGZhdm9yaXRlLCBsb29rIGZvciB0aGUgc3RhciBidXR0b24gc2l0dWF0ZWQgb24gdGhlIHJpZ2h0LWhhbmQgc2lkZSBvZiBlYWNoIGNvdXJzZSBoZWFkaW5nLiBDbGljayBvbiB0aGUgc3RhciBidXR0b24gdG8gYWRkIHRoZSBjb3Vyc2UgdG8geW91ciBmYXZvcml0ZXMgbGlzdC5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyBjYW4gSSBzdWJtaXQgYXNzaWdubWVudHMgb24gQmxhY2tib2FyZD9cIixcbiAgICAgIGFuc3dlcjpcbiAgICAgICAgXCJOb3JtYWxseSwgdGhlIGxpbmsgZm9yIHN1Ym1pdHRpbmcgYXNzaWdubWVudHMgY2FuIGJlIGZvdW5kIGluIHRoZSAnQWN0aXZpdHkgU2VjdGlvbicgb2YgdGhlIGNvdXJzZSBwYWdlLCBhbG9uZyB3aXRoIHRoZSBkZWFkbGluZSBmb3Igc3VibWlzc2lvbi4gSWYgeW91IGFyZSB1bmFibGUgdG8gbG9jYXRlIHRoZSBsaW5rIHRoZXJlLCB5b3UgY2FuIGZvbGxvdyB0aGVzZSBzdGVwczogRmlyc3QsIGNsaWNrIG9uIHRoZSAnQ291cnNlcycgb3B0aW9uIG9uIHRoZSBsZWZ0LWhhbmQgc2lkZSBvZiB0aGUgc2NyZWVuLiBOZXh0LCBmaW5kIHRoZSBzcGVjaWZpYyBjb3Vyc2UgZm9yIHdoaWNoIHlvdSB3YW50IHRvIHN1Ym1pdCB0aGUgYXNzaWdubWVudC4gT25jZSB5b3UgaGF2ZSBzZWxlY3RlZCB0aGUgY291cnNlLCBuYXZpZ2F0ZSB0byB0aGUgJ0NvbnRlbnQgU2VjdGlvbicgb2YgdGhlIGNvdXJzZSBwYWdlIGFuZCBsb29rIGZvciB0aGUgbGluayB0byB0aGUgYXNzaWdubWVudCBzdWJtaXNzaW9uLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGFjY2VzcyBjb250ZW50IG9uIGJsYWNrYm9hcmQ/XCIsXG4gICAgICBhbnN3ZXI6XG4gICAgICAgIFwiVXN1YWxseSwgdGhlIG1vc3QgcmVjZW50IGNvbnRlbnQgaXMgdmlzaWJsZSBvbiB0aGUgJ0FjdGl2aXR5IFN0cmVhbS4nIEhvd2V2ZXIsIGlmIHlvdSB3YW50IHRvIGFjY2VzcyBhbGwgdGhlIGNvbnRlbnQgYXZhaWxhYmxlIGZvciBhIHBhcnRpY3VsYXIgY291cnNlLCBmb2xsb3cgdGhlc2Ugc3RlcHM6IEdvIHRvIHRoZSAnQ291cnNlcycgc2VjdGlvbiBhbmQgY2hvb3NlIHRoZSBzcGVjaWZpYyBjb3Vyc2UgeW91IHdpc2ggdG8gdmlldyB0aGUgY29udGVudCBvZi4gTG9vayBmb3IgdGhlICdDb250ZW50JyBzZWN0aW9uLCB0eXBpY2FsbHkgbG9jYXRlZCBvbiB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIHNjcmVlbi4gQnkgYWNjZXNzaW5nIHRoaXMgc2VjdGlvbiwgeW91IHdpbGwgYmUgYWJsZSB0byBzZWUgYWxsIHRoZSBjb250ZW50IHJlbGF0ZWQgdG8gdGhlIHNlbGVjdGVkIGNvdXJzZS5cIixcbiAgICB9LFxuICBdO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycExpbmtcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBmYXFGaWxsKGVycEZhcXMpO1xuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmYXN0TGlua1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGZhcUZpbGwoZmFzdHJhY2tGYXFzKTtcbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9zdGVMaW5rXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZmFxRmlsbChob3N0ZWxGYXFzKTtcbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmJMaW5rXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZmFxRmlsbChibGFja2JvYXJkRmFxcyk7XG4gIH0pO1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnBcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZXJwR2VuKCk7XG59KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJwZlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBlcnBHZW4oKTtcbn0pO1xuXG4vL2Fib3V0IHVzXG5mdW5jdGlvbiBmaWxsdGVhbShhcnJheSkge1xuICBsZXQgdGVhbVBlb3BsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVhbVBlb3BsZVwiKTtcbiAgdGVhbVBlb3BsZS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInBlcnNvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmQtaW5uZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZC1mcm9udFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIiR7ZWxlbWVudC5pbWd9XCJcbiAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZC1iYWNrXCI+XG4gICAgICAgICAgPHNwYW4+JyR7ZWxlbWVudC5xdW90ZX0nPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb2NpYWxzXCI+XG4gICAgICAgICAgICA8YSBocmVmPSR7ZWxlbWVudC5pbnN0YX0gdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiYmkgYmktaW5zdGFncmFtXCI+PC9pXG4gICAgICAgICAgICA+PC9hPlxuICAgICAgICAgICAgPGEgaHJlZj0ke2VsZW1lbnQubGlua2VkaW59IHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWxpbmtlZGluXCI+PC9pXG4gICAgICAgICAgICA+PC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj0ke2VsZW1lbnQuZ2l0fVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJiaSBiaS1naXRodWJcIj48L2lcbiAgICAgICAgICAgID48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHNwYW4+JHtlbGVtZW50LmZpcnN0TmFtZX0gJHtlbGVtZW50Lmxhc3ROYW1lfTwvc3Bhbj5cbiAgICA8c3Bhbj4ke2VsZW1lbnQuZGVzaWduYXRpb259PC9zcGFuPlxuICA8L2Rpdj5gO1xuICAgIHRlYW1QZW9wbGUuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfVxufVxuXG5jb25zdCBhYm91dEdlbiA9ICgpID0+IHtcbiAgZ2VuZXJhdGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJhYm91dFwiPlxuICA8ZGl2IGNsYXNzPVwiYWJvdXRDb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cImZpcnN0Q29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRleHRDb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvblwiPldoYXQgaXMgPHNwYW4+U251QWNhZGVtaWE8L3NwYW4+PzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW5zd2VyXCI+XG4gICAgICAgICAgVW5sb2NrIHRoZSBkb29ycyB0byBrbm93bGVkZ2UgYW5kIGVtYmFyayBvbiBhIGpvdXJuZXkgb2ZcbiAgICAgICAgICBpbnRlbGxlY3R1YWwgZ3Jvd3RoIHdpdGggU251QWNhZGVtaWEsIHlvdXIgcHJlbWllciBvbmxpbmVcbiAgICAgICAgICBlZHVjYXRpb24gcGxhdGZvcm0uIFdoZXRoZXIgeW91J3JlIGEgY3VyaW91cyBsZWFybmVyLCBhXG4gICAgICAgICAgZGVkaWNhdGVkIHN0dWRlbnQsIG9yIGEgbGlmZWxvbmcgZW50aHVzaWFzdC5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbWcgc3JjPVwiJHtjb21wdXRlcn1cIiBhbHQ9XCJcIiB3aWR0aD1cIjI1JVwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNlY29uZENvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Q29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVlc3Rpb25cIj5cbiAgICAgICAgICBIb3c8c3Bhbj4gU251QWNhZGVtaWEgPC9zcGFuPmNhbiBoZWxwIHlvdT9cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXJcIj5cbiAgICAgICAgICBBbiBlZHVjYXRpb24gd2Vic2l0ZSBjYW4gc2lnbmlmaWNhbnRseSBlbmhhbmNlIHlvdXIgbGVhcm5pbmdcbiAgICAgICAgICBqb3VybmV5IGJ5IHByb3ZpZGluZyBhIGRpdmVyc2UgcmFuZ2Ugb2YgcmVzb3VyY2VzIHRhaWxvcmVkIHRvXG4gICAgICAgICAgdmFyaW91cyBzdWJqZWN0cyBhbmQgbGVhcm5pbmcgc3R5bGVzLCBvZmZlcmluZyBmbGV4aWJsZVxuICAgICAgICAgIHNjaGVkdWxpbmcgYW5kIHNlbGYtcGFjZWQgcHJvZ3Jlc3MgdHJhY2tpbmcsIGNvbm5lY3RpbmcgeW91IHdpdGhcbiAgICAgICAgICBleHBlcnQgaW5zdHJ1Y3RvcnMuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8aW1nIHNyYz0ke2hlbHBQaWN9IGFsdD1cIlwiIHdpZHRoPVwiMjUlXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJ0ZWFtXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1lZXRUZWFtXCI+TUVFVCBUSEUgVEVBTTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZWFtQmF5XCI+XG4gICAgICA8ZGl2IGlkPSdjb3JlJz5Db3JlPC9kaXY+XG4gICAgICA8ZGl2IGlkPSdkZXYnPkRldiBUZWFtPC9kaXY+XG4gICAgICA8ZGl2IGlkPSdjb250ZW50LXRlYW0nPkNvbnRlbnQgVGVhbTwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0ZWFtUGVvcGxlXCI+XG4gICAgICA8ZGl2IGRhdGEtYWN0aXZlPVwiYWN0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwZXJzb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkLWlubmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGlwLWNhcmQtZnJvbnRcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIuLi9zcmMvcmVhc291cmNlcy92YW1zaS5qcGdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkLWJhY2tcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cIkl0IGlzIHdoYXQgaXQgaXNcIjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29jaWFsc1wiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiYmkgYmktaW5zdGFncmFtXCI+PC9pXG4gICAgICAgICAgICAgICAgICA+PC9hPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vaW4ubGlua2VkaW4uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWxpbmtlZGluXCI+PC9pXG4gICAgICAgICAgICAgICAgICA+PC9hPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9WYW1zaUthcGFydGhpL1NudWFjYWRlbWlhL3RyZWUvbWFpblwiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWdpdGh1YlwiPjwvaVxuICAgICAgICAgICAgICAgICAgPjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3Bhbj5WYW1zaSBLYXBhcnRoaTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5Db2ZvdW5kZXI8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGVyc29uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZC1pbm5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkLWZyb250XCI+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vc3JjL3JlYXNvdXJjZXMvdmFtc2kuanBnXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZC1iYWNrXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+XCJJdCBpcyB3aGF0IGl0IGlzXCI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNvY2lhbHNcIj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWluc3RhZ3JhbVwiPjwvaVxuICAgICAgICAgICAgICAgICAgPjwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2luLmxpbmtlZGluLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJiaSBiaS1saW5rZWRpblwiPjwvaVxuICAgICAgICAgICAgICAgICAgPjwvYT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vVmFtc2lLYXBhcnRoaS9TbnVhY2FkZW1pYS90cmVlL21haW5cIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJiaSBiaS1naXRodWJcIj48L2lcbiAgICAgICAgICAgICAgICAgID48L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4+VmFtc2kgS2FwYXJ0aGk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+Q29mb3VuZGVyPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBkYXRhLWFjdGl2ZT1cImluYWN0aXZlXCI+PC9kaXY+XG4gICAgICA8ZGl2IGRhdGEtYWN0aXZlPVwiaW5hY3RpdmVcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5gO1xuICBsZXQgdGVhbUJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVhbUJheVwiKTtcbiAgZmlsbHRlYW0odGVhbS5jb3JlKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3JlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZmlsbHRlYW0odGVhbS5jb3JlKTtcbiAgfSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZmlsbHRlYW0odGVhbS5kZXYpO1xuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50LXRlYW1cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBmaWxsdGVhbSh0ZWFtLmNvbnRlbnQpO1xuICB9KTtcbn07XG5cbmxldCB0ZWFtID0ge1xuICBjb3JlOiBbXG4gICAge1xuICAgICAgZmlyc3ROYW1lOiBcIlZhbXNpXCIsXG4gICAgICBsYXN0TmFtZTogXCJLYXBhcnRoaVwiLFxuICAgICAgZGVzaWduYXRpb246IFwiQ29mb3VuZGVyIGFuZCBkZXZlbG9wZXJcIixcbiAgICAgIGluc3RhOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vX192YW1zaV9fMTcvXCIsXG4gICAgICBsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdmFtc2kta2FwYXJ0aGktMzcxNzMwMjIyXCIsXG4gICAgICBnaXQ6IFwiaHR0cHM6Ly9naXRodWIuY29tL1ZhbXNpS2FwYXJ0aGlcIixcbiAgICAgIGltZzogXCIuLi9zcmMvcmVhc291cmNlcy90ZWFtL3ZhbXNpLmpwZ1wiLFxuICAgICAgcXVvdGU6IFwiUXVvdGUgZnJvbSBWYW1zaSBhYm91dCBoaXMgcm9sZSBhbmQgcGFzc2lvbi5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGZpcnN0TmFtZTogXCJBZGl0eWFcIixcbiAgICAgIGxhc3ROYW1lOiBcIkFnYXJ3YWxcIixcbiAgICAgIGRlc2lnbmF0aW9uOiBcIkNvZm91bmRlciBhbmQgZGV2ZWxvcGVyXCIsXG4gICAgICBpbnN0YTogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FkaXR5YWdhcmcuYWcvXCIsXG4gICAgICBsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vYWRpdHlhLWFnYXJ3YWwtOTc3YTMwMjQwL1wiLFxuICAgICAgZ2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS9BZGl0eWFFQ0VcIixcbiAgICAgIGltZzogXCJ1cmxfdG9fYWRpdHlhX2ltYWdlXCIsXG4gICAgICBxdW90ZTogXCJRdW90ZSBmcm9tIEFkaXR5YSBhYm91dCBoaXMgcm9sZSBhbmQgdmlzaW9uLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgZmlyc3ROYW1lOiBcIlZpZGlwXCIsXG4gICAgICBsYXN0TmFtZTogXCJKYWluXCIsXG4gICAgICBkZXNpZ25hdGlvbjogXCJDb2ZvdW5kZXIgYW5kIENvbnRlbnRcIixcbiAgICAgIGluc3RhOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdmlkaXBqYWluL1wiLFxuICAgICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3ZpZGlwLWphaW4tYTM3YTg0MWIwL1wiLFxuICAgICAgZ2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS9WaWRpcEphaW43XCIsXG4gICAgICBpbWc6IFwidXJsX3RvX3ZpZGlwX2ltYWdlXCIsXG4gICAgICBxdW90ZTogXCJRdW90ZSBmcm9tIFZpZGlwIGFib3V0IHRoZSBpbXBvcnRhbmNlIG9mIGNvbnRlbnQuXCIsXG4gICAgfSxcbiAgXSxcbiAgY29udGVudDogW1xuICAgIHtcbiAgICAgIGZpcnN0TmFtZTogXCJTb2hhbVwiLFxuICAgICAgbGFzdE5hbWU6IFwiTW91bHJlZVwiLFxuICAgICAgZGVzaWduYXRpb246IFwiQ29udGVudFwiLFxuICAgICAgaW5zdGE6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9fX3NvYWhhbTIwL1wiLFxuICAgICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3NvYWhhbS1tb3VscmVlLTgxODcxNDI4MS9cIixcbiAgICAgIGdpdDogXCJodHRwczovL2dpdGh1Yi5jb21cIixcbiAgICAgIGltZzogXCJ1cmxfdG9fc29oYW1faW1hZ2VcIixcbiAgICAgIHF1b3RlOiBcIlF1b3RlIGZyb20gU29oYW0gYWJvdXQgaGlzIGNyZWF0aXZlIGpvdXJuZXkuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBmaXJzdE5hbWU6IFwiSGFyaWthXCIsXG4gICAgICBsYXN0TmFtZTogXCJTYXhlbmFcIixcbiAgICAgIGRlc2lnbmF0aW9uOiBcIkNvbnRlbnRcIixcbiAgICAgIGluc3RhOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXy5oYXJpa2FfL1wiLFxuICAgICAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2hhcmlrYS1zYXhlbmEtMjg1MDY1MWEwL1wiLFxuICAgICAgZ2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS9oYXJpa2FzYXhlbmFcIixcbiAgICAgIGltZzogXCIuLi9zcmMvcmVhc291cmNlcy90ZWFtL2hhcmlrYS5qcGdcIixcbiAgICAgIHF1b3RlOiBcIlF1b3RlIGZyb20gSGFyaWthIGFib3V0IHRoZSBpbXBhY3Qgb2Ygc3Rvcnl0ZWxsaW5nLlwiLFxuICAgIH0sXG4gIF0sXG4gIGRldjogW1xuICAgIHtcbiAgICAgIGZpcnN0TmFtZTogXCJQcml5YW5zaFwiLFxuICAgICAgbGFzdE5hbWU6IFwiU2luZ2hhbFwiLFxuICAgICAgZGVzaWduYXRpb246IFwiRGV2ZWxvcGVyXCIsXG4gICAgICBpbnN0YTogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL19hbnNoMjQvXCIsXG4gICAgICBsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vc2luZ2hhbHByaXlhbnNoMjQvXCIsXG4gICAgICBnaXQ6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FkaXR5YUVDRVwiLFxuICAgICAgaW1nOiBcIi4uL3NyYy9yZWFzb3VyY2VzL3RlYW0vcHJpeWFuc2guanBlZ1wiLFxuICAgICAgcXVvdGU6IFwiUXVvdGUgZnJvbSBQcml5YW5zaCBhYm91dCBoaXMgam91cm5leSBpbiBjb2RpbmcuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBmaXJzdE5hbWU6IFwiVGFubWF5XCIsXG4gICAgICBsYXN0TmFtZTogXCJTYWNoYW5cIixcbiAgICAgIGRlc2lnbmF0aW9uOiBcIkRldmVsb3BlclwiLFxuICAgICAgaW5zdGE6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90YW5tYXlfXzI1OC9cIixcbiAgICAgIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi90YW5tYXktc2FjaGFuLTcyYjM0OTIzNi9cIixcbiAgICAgIGdpdDogXCJodHRwczovL2dpdGh1Yi5jb20vdGFubWF5ODEyXCIsXG4gICAgICBpbWc6IFwidXJsX3RvX3Rhbm1heV9pbWFnZVwiLFxuICAgICAgcXVvdGU6IFwiUXVvdGUgZnJvbSBUYW5tYXkgYWJvdXQgaGlzIHBhc3Npb24gZm9yIHNvZnR3YXJlIGRldmVsb3BtZW50LlwiLFxuICAgIH0sXG4gIF0sXG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnN0IGFib3V0QnV0dG9uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuc2xvZ2FuQnV0dG9uXCIpO1xuICBpZiAoYWJvdXRCdXR0b24pIHtcbiAgICBhYm91dEdlbigpOyAvLyBHZW5lcmF0ZSBcIkFib3V0IFVzXCIgY29udGVudFxuICB9XG59KTtcbmNvbnN0IHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPXJhZGlvXVwiKTtcblxuY29uc3Qgc2xpZGVTaG93ID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJhZGlvQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgIHNldEludGVydmFsKCgpID0+IHt9LCAzMDAwKTtcbiAgfVxufTtcbnNsaWRlU2hvdygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9