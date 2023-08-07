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
  --color3: rgb(23, 23, 24) ;
  --color2: rgb(23, 23, 24) ;
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
  
  --color1: black ;
  --color2: rgb(23, 23, 24) ;
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
  width: min(25vw, 300px);
  height: min(25vw, 300px);
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
.flip-card-front > img{
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
  font-size: max(1.2vw, 13px);
  transform: rotateY(180deg);
}
.flip-card-back > span{
  margin-bottom: 2.5vw;
}
.socials {
  display: flex;
  justify-content: center;
  gap: max(1vw, 10%);
  width: 70%;
}
.socials > a > i {
  font-size: max(2vw, 15px);
}
.person > span {
  font-size: max(1.3vw, 13px);
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
.options  {display: flex;}
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
.open-menu , .close-menu {
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
#check {display: none;}
@media(max-width: 610px){
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
  .options div {margin-top: 40px;}
   /* .options div #home #erp #road  #study {padding: 10px;}*/
    .open-menu , .close-menu {display: block;}
    #check:checked ~ .options {top: 0;}
}`, "",{"version":3,"sources":["webpack://./src/Style.css"],"names":[],"mappings":"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EACV,aAAa;EACb,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,mCAAmC;EACnC,sBAAsB;AACxB;AACA;EACE,cAAc;AAChB;AACA,WAAW;AACX;EACE,iCAAiC;EACjC,aAAa;EACb,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,SAAS;EACT,UAAU;EACV,eAAe;AACjB;AACA;EACE,uBAAuB;EACvB,eAAe;AACjB;AACA;EACE,YAAY;EACZ,YAAY;AACd;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,QAAQ;AACV;AACA;EACE,uBAAuB;AACzB;AACA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;AACA,WAAW;AACX;EACE,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,kCAAkC;EAClC,mBAAmB;EACnB,2BAA2B;AAC7B;AACA;EACE,kCAAkC;EAClC,eAAe;AACjB;AACA;EACE,eAAe;EACf,YAAY;AACd;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;AACA;;EAEE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,0CAA0C;AAC5C;AACA;EACE,2BAA2B;EAC3B,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,cAAc;EACd,mBAAmB;AACrB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;EAChB,yCAAyC;AAC3C;AACA;EACE,aAAa;EACb,UAAU;EACV,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB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","sourcesContent":["/*Using Css variable*/\r\n:root {\r\n  --bg-color: white;\r\n  --font-color: black;\r\n  --secondary: #00b0ff;\r\n}\r\n\r\n.dark {\r\n  --bg-color: black;\r\n  --font-color: white;\r\n  --secondary: #536dfe;\r\n  --color1: rgb(240, 240, 240);\r\n  --color3: rgb(23, 23, 24) ;\r\n  --color2: rgb(23, 23, 24) ;\r\n}\r\n\r\nbody {\r\n  background-color: var(--bg-color);\r\n  color: var(--font-color);\r\n  font-family: \"DM Sans\", sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  \r\n  --color1: black ;\r\n  --color2: rgb(23, 23, 24) ;\r\n  --color3: rgb(240, 240, 240);\r\n}\r\n\r\n.header {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 50px;\r\n  align-items: center;\r\n  margin-right: 2%;\r\n\r\n  list-style: none;\r\n  position: relative;\r\n /* padding: 12px 20px;*/\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100px;\r\n}\r\n\r\n.options {\r\n  display: flex;\r\n  width: max(500px, 50%);\r\n  justify-content: space-around;\r\n  height: 25px;\r\n  font-size: max(15px, 1vw);\r\n  color: var(--font-color);\r\n}\r\n\r\n.options > div:hover {\r\n  cursor: pointer;\r\n  color: var(--secondary);\r\n}\r\n\r\n.home {\r\n  margin-top: 10vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding-left: 10%;\r\n}\r\n\r\n.slogan {\r\n  font-size: max(3.5vw, 40px);\r\n  display: flex;\r\n  margin-bottom: 20px;\r\n  font-weight: 900;\r\n}\r\n\r\n.slogan-para {\r\n  font-size: max(1vw, 20px);\r\n  width: max(80%, 280px);\r\n}\r\n\r\ni {\r\n  font-size: 25px;\r\n  width: auto;\r\n  cursor: pointer;\r\n  /*transform: translate(-50%, -50%);*/\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n/* study-material page */\r\n.study,\r\n.roadMaps {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.tagline {\r\n  margin-top: 5vh;\r\n  font-size: min(8vw, 70px);\r\n  font-weight: 950;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.search-bar {\r\n  margin-top: 5vh;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-direction: row;\r\n  border: 2px solid var(--font-color);\r\n  width: max(40vw, 300px);\r\n  padding: 8px;\r\n  padding-left: 15px;\r\n  gap: 10px;\r\n  border-radius: 5px;\r\n}\r\n#course-select {\r\n  background-color: var(--bg-color);\r\n  color: var(--font-color);\r\n  border: none;\r\n  outline: none;\r\n  color: (--font-color);\r\n  font-size: 25px;\r\n  border-left: 1px solid grey;\r\n  padding-left: 10px;\r\n  font-weight: 100;\r\n  width: 80%;\r\n}\r\n\r\n.courses,\r\n.roads {\r\n  width: 90%;\r\n\r\n  margin-top: 50px;\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  gap: 30px;\r\n}\r\n\r\n.courseBox {\r\n  height: 200px;\r\n  width: 300px;\r\n  border: 2px solid var(--font-color);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: var(--font-color);\r\n}\r\n\r\n.glink {\r\n  display: none;\r\n  border-bottom: none;\r\n}\r\na {\r\n  text-decoration: none;\r\n  color: var(--font-color);\r\n  border-bottom: none;\r\n}\r\na:visited {\r\n  text-decoration: none;\r\n  color: var(--font-color);\r\n}\r\na:hover {\r\n  text-decoration: none;\r\n  color: var(--font-color);\r\n}\r\na:active {\r\n  text-decoration: none;\r\n  color: var(--font-color);\r\n}\r\n.generate {\r\n  padding-bottom: 20px;\r\n}\r\n/*erp management*/\r\n.linkSection {\r\n  margin-top: 5vh;\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n}\r\n.erpManagement {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.linkSection > div {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 1px solid var(--font-color);\r\n  font-size: max(1.2vw, 15px);\r\n  height: max(35px, 5vh);\r\n  width: max(350px, 15vw);\r\n  border-radius: 5px;\r\n  color: var(--font-color);\r\n  background-color: var(--bg-color);\r\n  flex-wrap: wrap;\r\n  cursor: pointer;\r\n}\r\n.linkSection > div:hover {\r\n  color: var(--bg-color);\r\n  background-color: var(--font-color);\r\n  transition: 100ms;\r\n}\r\n.sub-tag {\r\n  font-size: 0.5em;\r\n  font-weight: 200;\r\n  margin-top: 2vh;\r\n  display: flex;\r\n  text-align: center;\r\n}\r\n.faqs {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-top: 7vh;\r\n  width: 95%;\r\n  gap: 20px;\r\n}\r\n.faqs > div {\r\n  border: 1px solid var(--font-color);\r\n  display: flex;\r\n  align-items: flex-start;\r\n  flex-direction: column;\r\n  padding: 15px;\r\n  border-radius: 2px;\r\n}\r\n.sol {\r\n  display: none;\r\n}\r\n.roadBox {\r\n  height: 200px;\r\n  width: 300px;\r\n  border: 2px solid var(--font-color);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: var(--font-color);\r\n}\r\n.glink-r {\r\n  display: none;\r\n  border: 1px solid var(--font-color);\r\n  background-color: var(--bg-color);\r\n  color: var(--font-color);\r\n  width: 33%;\r\n  padding: 10px;\r\n  justify-content: center;\r\n  border-radius: 5px;\r\n}\r\n.glink-r:hover {\r\n  background-color: var(--font-color);\r\n  color: var(--bg-color);\r\n}\r\na.ar {\r\n  color: inherit;\r\n}\r\n/* footer */\r\n.footer {\r\n  background-color: rgb(23, 23, 24);\r\n  padding: 15px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  align-self: flex-end;\r\n}\r\n\r\n.reasources {\r\n  display: flex;\r\n  justify-content: center;\r\n  color: white;\r\n  gap: 10px;\r\n  width: 50%;\r\n  flex-wrap: wrap;\r\n}\r\n.reasources > div:hover {\r\n  color: var(--secondary);\r\n  cursor: pointer;\r\n}\r\n.contact > a {\r\n  color: white;\r\n  margin: 10px;\r\n}\r\n.contact > a:hover {\r\n  color: var(--secondary);\r\n}\r\n\r\n.foot-logo {\r\n  color: white;\r\n  font-size: 25px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n}\r\n.foot-logo:hover {\r\n  color: var(--secondary);\r\n}\r\n.generate {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n/*About us*/\r\n.sloganButton {\r\n  margin-top: 4vw;\r\n  width: max(200px, 20vw);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  border: 1px solid var(--secondary);\r\n  border-radius: 10px;\r\n  font-size: max(1.2vw, 20px);\r\n}\r\n.sloganButton:hover {\r\n  background-color: var(--secondary);\r\n  cursor: pointer;\r\n}\r\n.about {\r\n  margin-top: 1vh;\r\n  padding: 5vw;\r\n}\r\n.aboutContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10vw;\r\n}\r\n.firstContent,\r\n.secondContent {\r\n  display: flex;\r\n  gap: 15vw;\r\n  padding-bottom: 8vw;\r\n  border-bottom: 1px solid var(--font-color);\r\n}\r\n.secondContent {\r\n  flex-direction: row-reverse;\r\n  border-bottom: none;\r\n}\r\n.textContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.question {\r\n  font-size: 3vw;\r\n  margin-bottom: 20px;\r\n}\r\n.question > span {\r\n  color: var(--secondary);\r\n}\r\n.answer {\r\n  font-size: min(2vw, 30px);\r\n}\r\n.team {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: min(6vw, 80px);\r\n}\r\n.meetTeam {\r\n  width: fit-content;\r\n  font-size: 5.5vw;\r\n  font-weight: 600;\r\n  border-bottom: 2px solid var(--secondary);\r\n}\r\n.teamBay {\r\n  display: flex;\r\n  width: 90%;\r\n  justify-content: space-between;\r\n}\r\n.teamBay > div {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: max(1.2vw, 13px);\r\n  width: 25vw;\r\n  box-sizing: border-box;\r\n  padding: 10px;\r\n  border: 1px solid var(--font-color);\r\n  border-radius: 10px;\r\n}\r\n.teamBay > div:hover {\r\n  background-color: var(--secondary);\r\n  cursor: pointer;\r\n}\r\n.teamPeople {\r\n  width: 90%;\r\n  padding: 10px;\r\n  border: 1px solid var(--secondary);\r\n}\r\n.teamPeople > div {\r\n  display: flex;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 10%;\r\n}\r\n/*flipcard*/\r\n.person {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n.flip-card {\r\n  background-color: transparent;\r\n  width: min(25vw, 300px);\r\n  height: min(25vw, 300px);\r\n  perspective: 1000px;\r\n  margin-bottom: 0.8vw;\r\n}\r\n\r\n/* This container is needed to position the front and back side */\r\n.flip-card-inner {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  text-align: center;\r\n  transition: transform 0.8s;\r\n  transform-style: preserve-3d;\r\n}\r\n\r\n/* Do an horizontal flip when you move the mouse over the flip box container */\r\n.flip-card:hover .flip-card-inner {\r\n  transform: rotateY(180deg);\r\n}\r\n\r\n/* Position the front and back side */\r\n.flip-card-front,\r\n.flip-card-back {\r\n  border-radius: 10px;\r\n  position: absolute;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-backface-visibility: hidden; /* Safari */\r\n  backface-visibility: hidden;\r\n}\r\n.flip-card-front > img{\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Style the front side (fallback if image is missing) */\r\n.flip-card-front {\r\n  color: var(--font-color);\r\n}\r\n\r\n/* Style the back side */\r\n.flip-card-back {\r\n  background-color: var(--secondary);\r\n  color: var(--font-color);\r\n  font-size: max(1.2vw, 13px);\r\n  transform: rotateY(180deg);\r\n}\r\n.flip-card-back > span{\r\n  margin-bottom: 2.5vw;\r\n}\r\n.socials {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: max(1vw, 10%);\r\n  width: 70%;\r\n}\r\n.socials > a > i {\r\n  font-size: max(2vw, 15px);\r\n}\r\n.person > span {\r\n  font-size: max(1.3vw, 13px);\r\n}\r\n/*slider*/\r\n\r\n#slider {\r\n  position: relative;\r\n  width: 60%;\r\n  min-height: 30vw;\r\n  margin: 80px auto;\r\n  font-family: \"DM sans\", sans-serif;\r\n  perspective: 1400px;\r\n  transform-style: preserve-3d;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\ninput[type=\"radio\"] {\r\n  display: none;\r\n  position: absolute;\r\n  top: 108%;\r\n  width: 4vw;\r\n  height: 18px;\r\n  margin: 0 15px 0 0;\r\n  opacity: 0.6;\r\n  cursor: pointer;\r\n}\r\n\r\n/*input[type=radio]:nth-child(5) {\r\n  margin-right: 0px;\r\n}\r\n\r\ninput[type=radio]:checked {\r\n  opacity: 1;\r\n}*/\r\n\r\nh2 {\r\n  font-size: 2.5vw;\r\n  color: white;\r\n  margin: 0;\r\n  margin-bottom: 20px;\r\n}\r\n\r\np {\r\n  width: 50%;\r\n  font-size: min(30px, 1.5vw);\r\n}\r\n\r\n#slider label {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  color: white;\r\n  font-weight: normal;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n  flex-direction: column;\r\n  transition: transform 400ms ease;\r\n  box-sizing: border-box;\r\n  padding: 20px;\r\n}\r\n.sliderContent {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 40px;\r\n  height: 100%;\r\n}\r\n#slide1 {\r\n  background: #066892;\r\n}\r\n.dark #slide1 {\r\n  background: #232e6f;\r\n}\r\n\r\n#slide2 {\r\n  background: #0d97d2;\r\n}\r\n.dark #slide2 {\r\n  background: #384ab2;\r\n}\r\n\r\n#slide3 {\r\n  background: #00b0ff;\r\n}\r\n.dark #slide3 {\r\n  background: #536dfe;\r\n}\r\n/*\r\n#slide4 {\r\n  background: slateblue;\r\n}\r\n\r\n#slide5 {\r\n  background: violet;\r\n}*/\r\n\r\n/* Slider Functionality */\r\n\r\n/* Active Slide */\r\n#s1:checked ~ #slide1,\r\n#s2:checked ~ #slide2,\r\n#s3:checked ~ #slide3,\r\n#s4:checked ~ #slide4,\r\n#s5:checked ~ #slide5 {\r\n  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);\r\n  transform: translate3d(0%, 0, 0px);\r\n}\r\n\r\n/* Next Slide */\r\n#s1:checked ~ #slide2,\r\n#s2:checked ~ #slide3,\r\n#s3:checked ~ #slide4,\r\n#s4:checked ~ #slide5,\r\n#s5:checked ~ #slide1 {\r\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);\r\n  transform: translate3d(15%, 0, -100px);\r\n}\r\n\r\n/* Next to Next Slide */\r\n#s1:checked ~ #slide3,\r\n#s2:checked ~ #slide4,\r\n#s3:checked ~ #slide5,\r\n#s4:checked ~ #slide1,\r\n#s5:checked ~ #slide2 {\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n  transform: translate3d(30%, 0, -250px);\r\n}\r\n\r\n/* Previous to Previous Slide */\r\n#s1:checked ~ #slide4,\r\n#s2:checked ~ #slide5,\r\n#s3:checked ~ #slide1,\r\n#s4:checked ~ #slide2,\r\n#s5:checked ~ #slide3 {\r\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n  transform: translate3d(-30%, 0, -250px);\r\n}\r\n\r\n/* Previous Slide */\r\n#s1:checked ~ #slide5,\r\n#s2:checked ~ #slide1,\r\n#s3:checked ~ #slide2,\r\n#s4:checked ~ #slide3,\r\n#s5:checked ~ #slide4 {\r\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);\r\n  transform: translate3d(-15%, 0, -100px);\r\n}\r\n\r\n/*Responsive*/\r\n@media screen and (max-width: 800px) {\r\n  /*homepage taglines*/\r\n  body {\r\n    align-items: center;\r\n  }\r\n  #image {\r\n    display: none;\r\n  }\r\n  .home {\r\n    padding-left: 0;\r\n  }\r\n  .text {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  .slogan {\r\n    text-align: center;\r\n  }\r\n  .slogan-para {\r\n    text-align: center;\r\n  }\r\n  /*slider*/\r\n  #slider {\r\n    margin-top: 40px;\r\n    margin-bottom: 20px;\r\n    min-height: 50vh;\r\n    width: 70%;\r\n  }\r\n  #slider label {\r\n    height: 100%;\r\n  }\r\n  .sliderContent {\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    height: 100%;\r\n    align-items: center;\r\n  }\r\n  h2 {\r\n    font-size: max(2.6vw, 14px);\r\n  }\r\n  p {\r\n    width: 80%;\r\n    font-size: max(2.2vw, 11px);\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n  }\r\n  input[type=\"radio\"] {\r\n    position: absolute;\r\n    top: 104%;\r\n  }\r\n}\r\n\r\n/*hamburger menu*/\r\n.options  {display: flex;}\r\n/* .options div {padding-left: 30px;}\r\n/*.options div #home #erp #road #study {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: var(--color1);\r\n    text-align: left;\r\n    transition: 0.15s ease-in-out;\r\n    position: relative;\r\n    text-transform: uppercase;\r\n}\r\n.options div #home \r\n #erp #road #study::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 0;\r\n    height: 1px;\r\n    background-color: var(--color1);\r\n    transition: 0.15s ease-in-out;\r\n}\r\n.options div #home #erp #road  #study:hover:after {width: 100%;}*/\r\n.open-menu , .close-menu {\r\n    position: absolute;\r\n    color: var(--color1);\r\n    cursor: pointer;\r\n    font-size: 1.5rem;\r\n    display: none;\r\n}\r\n.open-menu {\r\n  position: absolute;\r\n    top: 50%;\r\n    left: 52%;\r\n    /*transform: translateY(-50%);*/\r\n    transform: translate(-50%, -50%);\r\n}\r\n.close-menu {\r\n  color: var(--color1);\r\n    top: 40px;\r\n    right: 35px;\r\n}\r\n#check {display: none;}\r\n@media(max-width: 610px){\r\n  .options {\r\n    font-weight: bold;\r\n    font-size: larger;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n      width: 100%;\r\n      height: 50vh;\r\n      position: fixed;\r\n      top: -100%;\r\n      right: 0;\r\n      z-index: 100;\r\n      background-color: var(--color3);\r\n      transition: all 0.4s ease-in-out;\r\n  }\r\n  .options div {margin-top: 40px;}\r\n   /* .options div #home #erp #road  #study {padding: 10px;}*/\r\n    .open-menu , .close-menu {display: block;}\r\n    #check:checked ~ .options {top: 0;}\r\n}"],"sourceRoot":""}]);
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
      <div>Core</div>
      <div>Dev Team</div>
      <div>Content Team</div>
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
};

// let team = {
//   [{
//     firstName:"Vamsi", lastName:"Kaparthi", designation: "Cofounder", insta: "https://www.instagram.com/__vamsi__17/", linkedin: "https://www.linkedin.com/in/vamsi-kaparthi-371730222", git:"https://github.com/VamsiKaparthi", img:
//   },
//   {

//   }
// ]
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsYUFBYTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLDZDQUE2QyxlQUFlO0FBQzVELDhCQUE4QjtBQUM5QiwrQkFBK0I7QUFDL0IsQ0FBQyxPQUFPLHVGQUF1RixNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxzQkFBc0IsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFdBQVcsTUFBTSxhQUFhLGFBQWEsVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLFNBQVMsWUFBWSxhQUFhLE9BQU8sWUFBWSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxZQUFZLHFCQUFxQiwwQkFBMEIsUUFBUSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVB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QUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseURBQVEsQ0FBQztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBEQUFPLEVBQUU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0Msd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvLi9zcmMvU3R5bGUuY3NzIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vc3JjL1N0eWxlLmNzcz9iNmE4Iiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NudWFjYWRlbWlhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc251YWNhZGVtaWEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3NudWFjYWRlbWlhL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9zbnVhY2FkZW1pYS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypVc2luZyBDc3MgdmFyaWFibGUqL1xyXG46cm9vdCB7XHJcbiAgLS1iZy1jb2xvcjogd2hpdGU7XHJcbiAgLS1mb250LWNvbG9yOiBibGFjaztcclxuICAtLXNlY29uZGFyeTogIzAwYjBmZjtcclxufVxyXG5cclxuLmRhcmsge1xyXG4gIC0tYmctY29sb3I6IGJsYWNrO1xyXG4gIC0tZm9udC1jb2xvcjogd2hpdGU7XHJcbiAgLS1zZWNvbmRhcnk6ICM1MzZkZmU7XHJcbiAgLS1jb2xvcjE6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAtLWNvbG9yMzogcmdiKDIzLCAyMywgMjQpIDtcclxuICAtLWNvbG9yMjogcmdiKDIzLCAyMywgMjQpIDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxuICBmb250LWZhbWlseTogXCJETSBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIFxyXG4gIC0tY29sb3IxOiBibGFjayA7XHJcbiAgLS1jb2xvcjI6IHJnYigyMywgMjMsIDI0KSA7XHJcbiAgLS1jb2xvcjM6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG5cclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIC8qIHBhZGRpbmc6IDEycHggMjBweDsqL1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5vcHRpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiBtYXgoNTAwcHgsIDUwJSk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogbWF4KDE1cHgsIDF2dyk7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcblxyXG4ub3B0aW9ucyA+IGRpdjpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4uaG9tZSB7XHJcbiAgbWFyZ2luLXRvcDogMTB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG59XHJcblxyXG4uc2xvZ2FuIHtcclxuICBmb250LXNpemU6IG1heCgzLjV2dywgNDBweCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5zbG9nYW4tcGFyYSB7XHJcbiAgZm9udC1zaXplOiBtYXgoMXZ3LCAyMHB4KTtcclxuICB3aWR0aDogbWF4KDgwJSwgMjgwcHgpO1xyXG59XHJcblxyXG5pIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7Ki9cclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLyogc3R1ZHktbWF0ZXJpYWwgcGFnZSAqL1xyXG4uc3R1ZHksXHJcbi5yb2FkTWFwcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRhZ2xpbmUge1xyXG4gIG1hcmdpbi10b3A6IDV2aDtcclxuICBmb250LXNpemU6IG1pbig4dncsIDcwcHgpO1xyXG4gIGZvbnQtd2VpZ2h0OiA5NTA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnNlYXJjaC1iYXIge1xyXG4gIG1hcmdpbi10b3A6IDV2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgd2lkdGg6IG1heCg0MHZ3LCAzMDBweCk7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBnYXA6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiNjb3Vyc2Utc2VsZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiAoLS1mb250LWNvbG9yKTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmV5O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5jb3Vyc2VzLFxyXG4ucm9hZHMge1xyXG4gIHdpZHRoOiA5MCU7XHJcblxyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDMwcHg7XHJcbn1cclxuXHJcbi5jb3Vyc2VCb3gge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuXHJcbi5nbGluayB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5hOnZpc2l0ZWQge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbn1cclxuYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG5hOmFjdGl2ZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG4uZ2VuZXJhdGUge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi8qZXJwIG1hbmFnZW1lbnQqL1xyXG4ubGlua1NlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDV2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLmVycE1hbmFnZW1lbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5saW5rU2VjdGlvbiA+IGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogbWF4KDEuMnZ3LCAxNXB4KTtcclxuICBoZWlnaHQ6IG1heCgzNXB4LCA1dmgpO1xyXG4gIHdpZHRoOiBtYXgoMzUwcHgsIDE1dncpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmxpbmtTZWN0aW9uID4gZGl2OmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IDEwMG1zO1xyXG59XHJcbi5zdWItdGFnIHtcclxuICBmb250LXNpemU6IDAuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgbWFyZ2luLXRvcDogMnZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mYXFzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLXRvcDogN3ZoO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcbi5mYXFzID4gZGl2IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLnNvbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ucm9hZEJveCB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcbi5nbGluay1yIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uZ2xpbmstcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxufVxyXG5hLmFyIHtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG4vKiBmb290ZXIgKi9cclxuLmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAyMywgMjQpO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5yZWFzb3VyY2VzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBnYXA6IDEwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuLnJlYXNvdXJjZXMgPiBkaXY6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY29udGFjdCA+IGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmNvbnRhY3QgPiBhOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLmZvb3QtbG9nbyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuLmZvb3QtbG9nbzpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbn1cclxuLmdlbmVyYXRlIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLypBYm91dCB1cyovXHJcbi5zbG9nYW5CdXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDR2dztcclxuICB3aWR0aDogbWF4KDIwMHB4LCAyMHZ3KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDIwcHgpO1xyXG59XHJcbi5zbG9nYW5CdXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hYm91dCB7XHJcbiAgbWFyZ2luLXRvcDogMXZoO1xyXG4gIHBhZGRpbmc6IDV2dztcclxufVxyXG4uYWJvdXRDb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwdnc7XHJcbn1cclxuLmZpcnN0Q29udGVudCxcclxuLnNlY29uZENvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxNXZ3O1xyXG4gIHBhZGRpbmctYm90dG9tOiA4dnc7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xyXG59XHJcbi5zZWNvbmRDb250ZW50IHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG4udGV4dENvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ucXVlc3Rpb24ge1xyXG4gIGZvbnQtc2l6ZTogM3Z3O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLnF1ZXN0aW9uID4gc3BhbiB7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbn1cclxuLmFuc3dlciB7XHJcbiAgZm9udC1zaXplOiBtaW4oMnZ3LCAzMHB4KTtcclxufVxyXG4udGVhbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiBtaW4oNnZ3LCA4MHB4KTtcclxufVxyXG4ubWVldFRlYW0ge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBmb250LXNpemU6IDUuNXZ3O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XHJcbn1cclxuLnRlYW1CYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnRlYW1CYXkgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDEzcHgpO1xyXG4gIHdpZHRoOiAyNXZ3O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi50ZWFtQmF5ID4gZGl2OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGVhbVBlb3BsZSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XHJcbn1cclxuLnRlYW1QZW9wbGUgPiBkaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxMCU7XHJcbn1cclxuLypmbGlwY2FyZCovXHJcbi5wZXJzb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mbGlwLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiBtaW4oMjV2dywgMzAwcHgpO1xyXG4gIGhlaWdodDogbWluKDI1dncsIDMwMHB4KTtcclxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDAuOHZ3O1xyXG59XHJcblxyXG4vKiBUaGlzIGNvbnRhaW5lciBpcyBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGZyb250IGFuZCBiYWNrIHNpZGUgKi9cclxuLmZsaXAtY2FyZC1pbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLyogRG8gYW4gaG9yaXpvbnRhbCBmbGlwIHdoZW4geW91IG1vdmUgdGhlIG1vdXNlIG92ZXIgdGhlIGZsaXAgYm94IGNvbnRhaW5lciAqL1xyXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xyXG4uZmxpcC1jYXJkLWZyb250LFxyXG4uZmxpcC1jYXJkLWJhY2sge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgLyogU2FmYXJpICovXHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5mbGlwLWNhcmQtZnJvbnQgPiBpbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGZyb250IHNpZGUgKGZhbGxiYWNrIGlmIGltYWdlIGlzIG1pc3NpbmcpICovXHJcbi5mbGlwLWNhcmQtZnJvbnQge1xyXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGJhY2sgc2lkZSAqL1xyXG4uZmxpcC1jYXJkLWJhY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogbWF4KDEuMnZ3LCAxM3B4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG4uZmxpcC1jYXJkLWJhY2sgPiBzcGFue1xyXG4gIG1hcmdpbi1ib3R0b206IDIuNXZ3O1xyXG59XHJcbi5zb2NpYWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogbWF4KDF2dywgMTAlKTtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcbi5zb2NpYWxzID4gYSA+IGkge1xyXG4gIGZvbnQtc2l6ZTogbWF4KDJ2dywgMTVweCk7XHJcbn1cclxuLnBlcnNvbiA+IHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogbWF4KDEuM3Z3LCAxM3B4KTtcclxufVxyXG4vKnNsaWRlciovXHJcblxyXG4jc2xpZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtaW4taGVpZ2h0OiAzMHZ3O1xyXG4gIG1hcmdpbjogODBweCBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkRNIHNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBwZXJzcGVjdGl2ZTogMTQwMHB4O1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwOCU7XHJcbiAgd2lkdGg6IDR2dztcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qaW5wdXRbdHlwZT1yYWRpb106bnRoLWNoaWxkKDUpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB7XHJcbiAgb3BhY2l0eTogMTtcclxufSovXHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyLjV2dztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgZm9udC1zaXplOiBtaW4oMzBweCwgMS41dncpO1xyXG59XHJcblxyXG4jc2xpZGVyIGxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG4uc2xpZGVyQ29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuI3NsaWRlMSB7XHJcbiAgYmFja2dyb3VuZDogIzA2Njg5MjtcclxufVxyXG4uZGFyayAjc2xpZGUxIHtcclxuICBiYWNrZ3JvdW5kOiAjMjMyZTZmO1xyXG59XHJcblxyXG4jc2xpZGUyIHtcclxuICBiYWNrZ3JvdW5kOiAjMGQ5N2QyO1xyXG59XHJcbi5kYXJrICNzbGlkZTIge1xyXG4gIGJhY2tncm91bmQ6ICMzODRhYjI7XHJcbn1cclxuXHJcbiNzbGlkZTMge1xyXG4gIGJhY2tncm91bmQ6ICMwMGIwZmY7XHJcbn1cclxuLmRhcmsgI3NsaWRlMyB7XHJcbiAgYmFja2dyb3VuZDogIzUzNmRmZTtcclxufVxyXG4vKlxyXG4jc2xpZGU0IHtcclxuICBiYWNrZ3JvdW5kOiBzbGF0ZWJsdWU7XHJcbn1cclxuXHJcbiNzbGlkZTUge1xyXG4gIGJhY2tncm91bmQ6IHZpb2xldDtcclxufSovXHJcblxyXG4vKiBTbGlkZXIgRnVuY3Rpb25hbGl0eSAqL1xyXG5cclxuLyogQWN0aXZlIFNsaWRlICovXHJcbiNzMTpjaGVja2VkIH4gI3NsaWRlMSxcclxuI3MyOmNoZWNrZWQgfiAjc2xpZGUyLFxyXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTMsXHJcbiNzNDpjaGVja2VkIH4gI3NsaWRlNCxcclxuI3M1OmNoZWNrZWQgfiAjc2xpZGU1IHtcclxuICBib3gtc2hhZG93OiAwIDEzcHggMjZweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMTJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDBweCk7XHJcbn1cclxuXHJcbi8qIE5leHQgU2xpZGUgKi9cclxuI3MxOmNoZWNrZWQgfiAjc2xpZGUyLFxyXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTMsXHJcbiNzMzpjaGVja2VkIH4gI3NsaWRlNCxcclxuI3M0OmNoZWNrZWQgfiAjc2xpZGU1LFxyXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTEge1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTUlLCAwLCAtMTAwcHgpO1xyXG59XHJcblxyXG4vKiBOZXh0IHRvIE5leHQgU2xpZGUgKi9cclxuI3MxOmNoZWNrZWQgfiAjc2xpZGUzLFxyXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTQsXHJcbiNzMzpjaGVja2VkIH4gI3NsaWRlNSxcclxuI3M0OmNoZWNrZWQgfiAjc2xpZGUxLFxyXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTIge1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMCUsIDAsIC0yNTBweCk7XHJcbn1cclxuXHJcbi8qIFByZXZpb3VzIHRvIFByZXZpb3VzIFNsaWRlICovXHJcbiNzMTpjaGVja2VkIH4gI3NsaWRlNCxcclxuI3MyOmNoZWNrZWQgfiAjc2xpZGU1LFxyXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTEsXHJcbiNzNDpjaGVja2VkIH4gI3NsaWRlMixcclxuI3M1OmNoZWNrZWQgfiAjc2xpZGUzIHtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwJSwgMCwgLTI1MHB4KTtcclxufVxyXG5cclxuLyogUHJldmlvdXMgU2xpZGUgKi9cclxuI3MxOmNoZWNrZWQgfiAjc2xpZGU1LFxyXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTEsXHJcbiNzMzpjaGVja2VkIH4gI3NsaWRlMixcclxuI3M0OmNoZWNrZWQgfiAjc2xpZGUzLFxyXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTQge1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgLTEwMHB4KTtcclxufVxyXG5cclxuLypSZXNwb25zaXZlKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAvKmhvbWVwYWdlIHRhZ2xpbmVzKi9cclxuICBib2R5IHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gICNpbWFnZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuaG9tZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIC50ZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnNsb2dhbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zbG9nYW4tcGFyYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC8qc2xpZGVyKi9cclxuICAjc2xpZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogNTB2aDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfVxyXG4gICNzbGlkZXIgbGFiZWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuc2xpZGVyQ29udGVudCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IG1heCgyLjZ2dywgMTRweCk7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZvbnQtc2l6ZTogbWF4KDIuMnZ3LCAxMXB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwNCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKmhhbWJ1cmdlciBtZW51Ki9cclxuLm9wdGlvbnMgIHtkaXNwbGF5OiBmbGV4O31cclxuLyogLm9wdGlvbnMgZGl2IHtwYWRkaW5nLWxlZnQ6IDMwcHg7fVxyXG4vKi5vcHRpb25zIGRpdiAjaG9tZSAjZXJwICNyb2FkICNzdHVkeSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3IxKTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLm9wdGlvbnMgZGl2ICNob21lIFxyXG4gI2VycCAjcm9hZCAjc3R1ZHk6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yMSk7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjE1cyBlYXNlLWluLW91dDtcclxufVxyXG4ub3B0aW9ucyBkaXYgI2hvbWUgI2VycCAjcm9hZCAgI3N0dWR5OmhvdmVyOmFmdGVyIHt3aWR0aDogMTAwJTt9Ki9cclxuLm9wZW4tbWVudSAsIC5jbG9zZS1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5vcGVuLW1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTIlO1xyXG4gICAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7Ki9cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5jbG9zZS1tZW51IHtcclxuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIHJpZ2h0OiAzNXB4O1xyXG59XHJcbiNjaGVjayB7ZGlzcGxheTogbm9uZTt9XHJcbkBtZWRpYShtYXgtd2lkdGg6IDYxMHB4KXtcclxuICAub3B0aW9ucyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNTB2aDtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB0b3A6IC0xMDAlO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcjMpO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLm9wdGlvbnMgZGl2IHttYXJnaW4tdG9wOiA0MHB4O31cclxuICAgLyogLm9wdGlvbnMgZGl2ICNob21lICNlcnAgI3JvYWQgICNzdHVkeSB7cGFkZGluZzogMTBweDt9Ki9cclxuICAgIC5vcGVuLW1lbnUgLCAuY2xvc2UtbWVudSB7ZGlzcGxheTogYmxvY2s7fVxyXG4gICAgI2NoZWNrOmNoZWNrZWQgfiAub3B0aW9ucyB7dG9wOiAwO31cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL1N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7QUFDckI7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLHdCQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjs7RUFFakIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7O0VBRWhCLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkIsdUJBQXVCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGFBQWE7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QW9CO0lBQ3BCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0lBQ2hCLFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLGdDQUFnQztBQUNwQztBQUNBO0VBQ0Usb0JBQW9CO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7QUFDQSxRQUFRLGFBQWEsQ0FBQztBQUN0QjtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtNQUNmLHNCQUFzQjtNQUN0QixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLFdBQVc7TUFDWCxZQUFZO01BQ1osZUFBZTtNQUNmLFVBQVU7TUFDVixRQUFRO01BQ1IsWUFBWTtNQUNaLCtCQUErQjtNQUMvQixnQ0FBZ0M7RUFDcEM7RUFDQSxjQUFjLGdCQUFnQixDQUFDO0dBQzlCLDBEQUEwRDtJQUN6RCwwQkFBMEIsY0FBYyxDQUFDO0lBQ3pDLDJCQUEyQixNQUFNLENBQUM7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypVc2luZyBDc3MgdmFyaWFibGUqL1xcclxcbjpyb290IHtcXHJcXG4gIC0tYmctY29sb3I6IHdoaXRlO1xcclxcbiAgLS1mb250LWNvbG9yOiBibGFjaztcXHJcXG4gIC0tc2Vjb25kYXJ5OiAjMDBiMGZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFyayB7XFxyXFxuICAtLWJnLWNvbG9yOiBibGFjaztcXHJcXG4gIC0tZm9udC1jb2xvcjogd2hpdGU7XFxyXFxuICAtLXNlY29uZGFyeTogIzUzNmRmZTtcXHJcXG4gIC0tY29sb3IxOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxyXFxuICAtLWNvbG9yMzogcmdiKDIzLCAyMywgMjQpIDtcXHJcXG4gIC0tY29sb3IyOiByZ2IoMjMsIDIzLCAyNCkgO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRE0gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIFxcclxcbiAgLS1jb2xvcjE6IGJsYWNrIDtcXHJcXG4gIC0tY29sb3IyOiByZ2IoMjMsIDIzLCAyNCkgO1xcclxcbiAgLS1jb2xvcjM6IHJnYigyNDAsIDI0MCwgMjQwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMiU7XFxyXFxuXFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAvKiBwYWRkaW5nOiAxMnB4IDIwcHg7Ki9cXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3B0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IG1heCg1MDBweCwgNTAlKTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgZm9udC1zaXplOiBtYXgoMTVweCwgMXZ3KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLm9wdGlvbnMgPiBkaXY6aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxufVxcclxcblxcclxcbi5ob21lIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xvZ2FuIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDMuNXZ3LCA0MHB4KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsb2dhbi1wYXJhIHtcXHJcXG4gIGZvbnQtc2l6ZTogbWF4KDF2dywgMjBweCk7XFxyXFxuICB3aWR0aDogbWF4KDgwJSwgMjgwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG5pIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsqL1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogc3R1ZHktbWF0ZXJpYWwgcGFnZSAqL1xcclxcbi5zdHVkeSxcXHJcXG4ucm9hZE1hcHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4udGFnbGluZSB7XFxyXFxuICBtYXJnaW4tdG9wOiA1dmg7XFxyXFxuICBmb250LXNpemU6IG1pbig4dncsIDcwcHgpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDk1MDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNlYXJjaC1iYXIge1xcclxcbiAgbWFyZ2luLXRvcDogNXZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICB3aWR0aDogbWF4KDQwdncsIDMwMHB4KTtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuI2NvdXJzZS1zZWxlY3Qge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNvbG9yOiAoLS1mb250LWNvbG9yKTtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JleTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY291cnNlcyxcXHJcXG4ucm9hZHMge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG5cXHJcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY291cnNlQm94IHtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi5nbGluayB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG5hOnZpc2l0ZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG5hOmhvdmVyIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuYTphY3RpdmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG4uZ2VuZXJhdGUge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcbi8qZXJwIG1hbmFnZW1lbnQqL1xcclxcbi5saW5rU2VjdGlvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiA1dmg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuLmVycE1hbmFnZW1lbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ubGlua1NlY3Rpb24gPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDE1cHgpO1xcclxcbiAgaGVpZ2h0OiBtYXgoMzVweCwgNXZoKTtcXHJcXG4gIHdpZHRoOiBtYXgoMzUwcHgsIDE1dncpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubGlua1NlY3Rpb24gPiBkaXY6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogMTAwbXM7XFxyXFxufVxcclxcbi5zdWItdGFnIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC41ZW07XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgbWFyZ2luLXRvcDogMnZoO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZhcXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW4tdG9wOiA3dmg7XFxyXFxuICB3aWR0aDogOTUlO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG4uZmFxcyA+IGRpdiB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbn1cXHJcXG4uc29sIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5yb2FkQm94IHtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG4uZ2xpbmstciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxyXFxuICB3aWR0aDogMzMlO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG4uZ2xpbmstcjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxufVxcclxcbmEuYXIge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcbi8qIGZvb3RlciAqL1xcclxcbi5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAyMywgMjQpO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlYXNvdXJjZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuLnJlYXNvdXJjZXMgPiBkaXY6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5jb250YWN0ID4gYSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxufVxcclxcbi5jb250YWN0ID4gYTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3QtbG9nbyB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcbi5mb290LWxvZ286aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxufVxcclxcbi5nZW5lcmF0ZSB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi8qQWJvdXQgdXMqL1xcclxcbi5zbG9nYW5CdXR0b24ge1xcclxcbiAgbWFyZ2luLXRvcDogNHZ3O1xcclxcbiAgd2lkdGg6IG1heCgyMDBweCwgMjB2dyk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDIwcHgpO1xcclxcbn1cXHJcXG4uc2xvZ2FuQnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5hYm91dCB7XFxyXFxuICBtYXJnaW4tdG9wOiAxdmg7XFxyXFxuICBwYWRkaW5nOiA1dnc7XFxyXFxufVxcclxcbi5hYm91dENvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHZ3O1xcclxcbn1cXHJcXG4uZmlyc3RDb250ZW50LFxcclxcbi5zZWNvbmRDb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDE1dnc7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogOHZ3O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcclxcbn1cXHJcXG4uc2Vjb25kQ29udGVudCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbn1cXHJcXG4udGV4dENvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5xdWVzdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDN2dztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcbi5xdWVzdGlvbiA+IHNwYW4ge1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxufVxcclxcbi5hbnN3ZXIge1xcclxcbiAgZm9udC1zaXplOiBtaW4oMnZ3LCAzMHB4KTtcXHJcXG59XFxyXFxuLnRlYW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiBtaW4oNnZ3LCA4MHB4KTtcXHJcXG59XFxyXFxuLm1lZXRUZWFtIHtcXHJcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gIGZvbnQtc2l6ZTogNS41dnc7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXNlY29uZGFyeSk7XFxyXFxufVxcclxcbi50ZWFtQmF5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4udGVhbUJheSA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDEzcHgpO1xcclxcbiAgd2lkdGg6IDI1dnc7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuLnRlYW1CYXkgPiBkaXY6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLnRlYW1QZW9wbGUge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG4udGVhbVBlb3BsZSA+IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAxMCU7XFxyXFxufVxcclxcbi8qZmxpcGNhcmQqL1xcclxcbi5wZXJzb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZmxpcC1jYXJkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgd2lkdGg6IG1pbigyNXZ3LCAzMDBweCk7XFxyXFxuICBoZWlnaHQ6IG1pbigyNXZ3LCAzMDBweCk7XFxyXFxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC44dnc7XFxyXFxufVxcclxcblxcclxcbi8qIFRoaXMgY29udGFpbmVyIGlzIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xcclxcbi5mbGlwLWNhcmQtaW5uZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC44cztcXHJcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcblxcclxcbi8qIERvIGFuIGhvcml6b250YWwgZmxpcCB3aGVuIHlvdSBtb3ZlIHRoZSBtb3VzZSBvdmVyIHRoZSBmbGlwIGJveCBjb250YWluZXIgKi9cXHJcXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXIge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi8qIFBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXFxyXFxuLmZsaXAtY2FyZC1mcm9udCxcXHJcXG4uZmxpcC1jYXJkLWJhY2sge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgLyogU2FmYXJpICovXFxyXFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcbi5mbGlwLWNhcmQtZnJvbnQgPiBpbWd7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTdHlsZSB0aGUgZnJvbnQgc2lkZSAoZmFsbGJhY2sgaWYgaW1hZ2UgaXMgbWlzc2luZykgKi9cXHJcXG4uZmxpcC1jYXJkLWZyb250IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU3R5bGUgdGhlIGJhY2sgc2lkZSAqL1xcclxcbi5mbGlwLWNhcmQtYmFjayB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgZm9udC1zaXplOiBtYXgoMS4ydncsIDEzcHgpO1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XFxyXFxufVxcclxcbi5mbGlwLWNhcmQtYmFjayA+IHNwYW57XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyLjV2dztcXHJcXG59XFxyXFxuLnNvY2lhbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiBtYXgoMXZ3LCAxMCUpO1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG59XFxyXFxuLnNvY2lhbHMgPiBhID4gaSB7XFxyXFxuICBmb250LXNpemU6IG1heCgydncsIDE1cHgpO1xcclxcbn1cXHJcXG4ucGVyc29uID4gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IG1heCgxLjN2dywgMTNweCk7XFxyXFxufVxcclxcbi8qc2xpZGVyKi9cXHJcXG5cXHJcXG4jc2xpZGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBtaW4taGVpZ2h0OiAzMHZ3O1xcclxcbiAgbWFyZ2luOiA4MHB4IGF1dG87XFxyXFxuICBmb250LWZhbWlseTogXFxcIkRNIHNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgcGVyc3BlY3RpdmU6IDE0MDBweDtcXHJcXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTA4JTtcXHJcXG4gIHdpZHRoOiA0dnc7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBtYXJnaW46IDAgMTVweCAwIDA7XFxyXFxuICBvcGFjaXR5OiAwLjY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qaW5wdXRbdHlwZT1yYWRpb106bnRoLWNoaWxkKDUpIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufSovXFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZm9udC1zaXplOiAyLjV2dztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGZvbnQtc2l6ZTogbWluKDMwcHgsIDEuNXZ3KTtcXHJcXG59XFxyXFxuXFxyXFxuI3NsaWRlciBsYWJlbCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGVhc2U7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuLnNsaWRlckNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcbiNzbGlkZTEge1xcclxcbiAgYmFja2dyb3VuZDogIzA2Njg5MjtcXHJcXG59XFxyXFxuLmRhcmsgI3NsaWRlMSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMjMyZTZmO1xcclxcbn1cXHJcXG5cXHJcXG4jc2xpZGUyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMwZDk3ZDI7XFxyXFxufVxcclxcbi5kYXJrICNzbGlkZTIge1xcclxcbiAgYmFja2dyb3VuZDogIzM4NGFiMjtcXHJcXG59XFxyXFxuXFxyXFxuI3NsaWRlMyB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDBiMGZmO1xcclxcbn1cXHJcXG4uZGFyayAjc2xpZGUzIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM1MzZkZmU7XFxyXFxufVxcclxcbi8qXFxyXFxuI3NsaWRlNCB7XFxyXFxuICBiYWNrZ3JvdW5kOiBzbGF0ZWJsdWU7XFxyXFxufVxcclxcblxcclxcbiNzbGlkZTUge1xcclxcbiAgYmFja2dyb3VuZDogdmlvbGV0O1xcclxcbn0qL1xcclxcblxcclxcbi8qIFNsaWRlciBGdW5jdGlvbmFsaXR5ICovXFxyXFxuXFxyXFxuLyogQWN0aXZlIFNsaWRlICovXFxyXFxuI3MxOmNoZWNrZWQgfiAjc2xpZGUxLFxcclxcbiNzMjpjaGVja2VkIH4gI3NsaWRlMixcXHJcXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTMsXFxyXFxuI3M0OmNoZWNrZWQgfiAjc2xpZGU0LFxcclxcbiNzNTpjaGVja2VkIH4gI3NsaWRlNSB7XFxyXFxuICBib3gtc2hhZG93OiAwIDEzcHggMjZweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMTJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMCwgMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmV4dCBTbGlkZSAqL1xcclxcbiNzMTpjaGVja2VkIH4gI3NsaWRlMixcXHJcXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTMsXFxyXFxuI3MzOmNoZWNrZWQgfiAjc2xpZGU0LFxcclxcbiNzNDpjaGVja2VkIH4gI3NsaWRlNSxcXHJcXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTEge1xcclxcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDE1JSwgMCwgLTEwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTmV4dCB0byBOZXh0IFNsaWRlICovXFxyXFxuI3MxOmNoZWNrZWQgfiAjc2xpZGUzLFxcclxcbiNzMjpjaGVja2VkIH4gI3NsaWRlNCxcXHJcXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTUsXFxyXFxuI3M0OmNoZWNrZWQgfiAjc2xpZGUxLFxcclxcbiNzNTpjaGVja2VkIH4gI3NsaWRlMiB7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMCUsIDAsIC0yNTBweCk7XFxyXFxufVxcclxcblxcclxcbi8qIFByZXZpb3VzIHRvIFByZXZpb3VzIFNsaWRlICovXFxyXFxuI3MxOmNoZWNrZWQgfiAjc2xpZGU0LFxcclxcbiNzMjpjaGVja2VkIH4gI3NsaWRlNSxcXHJcXG4jczM6Y2hlY2tlZCB+ICNzbGlkZTEsXFxyXFxuI3M0OmNoZWNrZWQgfiAjc2xpZGUyLFxcclxcbiNzNTpjaGVja2VkIH4gI3NsaWRlMyB7XFxyXFxuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMzAlLCAwLCAtMjUwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQcmV2aW91cyBTbGlkZSAqL1xcclxcbiNzMTpjaGVja2VkIH4gI3NsaWRlNSxcXHJcXG4jczI6Y2hlY2tlZCB+ICNzbGlkZTEsXFxyXFxuI3MzOmNoZWNrZWQgfiAjc2xpZGUyLFxcclxcbiNzNDpjaGVja2VkIH4gI3NsaWRlMyxcXHJcXG4jczU6Y2hlY2tlZCB+ICNzbGlkZTQge1xcclxcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNSUsIDAsIC0xMDBweCk7XFxyXFxufVxcclxcblxcclxcbi8qUmVzcG9uc2l2ZSovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gIC8qaG9tZXBhZ2UgdGFnbGluZXMqL1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAjaW1hZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgLmhvbWUge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICB9XFxyXFxuICAudGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAuc2xvZ2FuIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLnNsb2dhbi1wYXJhIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLypzbGlkZXIqL1xcclxcbiAgI3NsaWRlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICB9XFxyXFxuICAjc2xpZGVyIGxhYmVsIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLnNsaWRlckNvbnRlbnQge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgaDIge1xcclxcbiAgICBmb250LXNpemU6IG1heCgyLjZ2dywgMTRweCk7XFxyXFxuICB9XFxyXFxuICBwIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZm9udC1zaXplOiBtYXgoMi4ydncsIDExcHgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMDQlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKmhhbWJ1cmdlciBtZW51Ki9cXHJcXG4ub3B0aW9ucyAge2Rpc3BsYXk6IGZsZXg7fVxcclxcbi8qIC5vcHRpb25zIGRpdiB7cGFkZGluZy1sZWZ0OiAzMHB4O31cXHJcXG4vKi5vcHRpb25zIGRpdiAjaG9tZSAjZXJwICNyb2FkICNzdHVkeSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3IxKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuLm9wdGlvbnMgZGl2ICNob21lIFxcclxcbiAjZXJwICNyb2FkICNzdHVkeTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4xNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5vcHRpb25zIGRpdiAjaG9tZSAjZXJwICNyb2FkICAjc3R1ZHk6aG92ZXI6YWZ0ZXIge3dpZHRoOiAxMDAlO30qL1xcclxcbi5vcGVuLW1lbnUgLCAuY2xvc2UtbWVudSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yMSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5vcGVuLW1lbnUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTIlO1xcclxcbiAgICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsqL1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuLmNsb3NlLW1lbnUge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XFxyXFxuICAgIHRvcDogNDBweDtcXHJcXG4gICAgcmlnaHQ6IDM1cHg7XFxyXFxufVxcclxcbiNjaGVjayB7ZGlzcGxheTogbm9uZTt9XFxyXFxuQG1lZGlhKG1heC13aWR0aDogNjEwcHgpe1xcclxcbiAgLm9wdGlvbnMge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGhlaWdodDogNTB2aDtcXHJcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgdG9wOiAtMTAwJTtcXHJcXG4gICAgICByaWdodDogMDtcXHJcXG4gICAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IzKTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG4gIC5vcHRpb25zIGRpdiB7bWFyZ2luLXRvcDogNDBweDt9XFxyXFxuICAgLyogLm9wdGlvbnMgZGl2ICNob21lICNlcnAgI3JvYWQgICNzdHVkeSB7cGFkZGluZzogMTBweDt9Ki9cXHJcXG4gICAgLm9wZW4tbWVudSAsIC5jbG9zZS1tZW51IHtkaXNwbGF5OiBibG9jazt9XFxyXFxuICAgICNjaGVjazpjaGVja2VkIH4gLm9wdGlvbnMge3RvcDogMDt9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vU3R5bGUuY3NzXCI7XHJcbmltcG9ydCBsb2dvMSBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvMTAucG5nXCI7XHJcbmltcG9ydCBsb2dvMiBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvOS5wbmdcIjtcclxuaW1wb3J0IGRwaWMgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzL2Rhcmttb2RlLnN2Z1wiO1xyXG5pbXBvcnQgbHBpYyBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvbGlnaHRtb2RlLnN2Z1wiO1xyXG5pbXBvcnQgc3BpYzEgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzL2dvYWwuc3ZnXCI7XHJcbmltcG9ydCBzcGljMiBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvam91cm5leS5zdmdcIjtcclxuaW1wb3J0IHNwaWMzIGZyb20gXCIuLi9zcmMvcmVhc291cmNlcy9vcGVuc291cmNlLnN2Z1wiO1xyXG5pbXBvcnQgY29tcHV0ZXIgZnJvbSBcIi4uL3NyYy9yZWFzb3VyY2VzL2NvbXB1dGVyLnN2Z1wiO1xyXG5pbXBvcnQgaGVscFBpYyBmcm9tIFwiLi4vc3JjL3JlYXNvdXJjZXMvaGVscExpZ2h0LnN2Z1wiO1xyXG5cclxuLy9JbnRpYWwgbG9nbyBnZW5lcmF0aW9uXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGdcIikuc3JjID0gbG9nbzE7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnQtbG9nb1wiKS5zcmMgPSBsb2dvMjtcclxuLy9pbnRpYWwgaG9tZXBhZ2UgcGljIGdlbmVyYXRpb25cclxuY29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVwiKTtcclxuaW1nLnNyYyA9IGxwaWM7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ29hbFwiKS5zcmMgPSBzcGljMTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqb3VybmV5XCIpLnNyYyA9IHNwaWMyO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9zXCIpLnNyYyA9IHNwaWMzO1xyXG4vL0RhcmtNb2RlIExpZ2h0TW9kZSBUb2dnbGVcclxuY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVEYXJrXCIpO1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbmNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wdGlvbnNcIik7XHJcblxyXG50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoXCJiaS1tb29uXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGdcIik7XHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZVwiKTtcclxuXHJcbiAgLy9zZWUgd2hpY2ggbW9kZSBpdCBpc1xyXG4gIGxldCBpc0RhcmtNb2RlID0gYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXJrXCIpO1xyXG5cclxuICBpZiAoaXNEYXJrTW9kZSkge1xyXG4gICAgbG9nby5zcmMgPSBsb2dvMjtcclxuICAgIGlmIChpbWcpIHtcclxuICAgICAgaW1nLnNyYyA9IGRwaWM7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGxvZ28uc3JjID0gbG9nbzE7XHJcbiAgICBpZiAoaW1nKSB7XHJcbiAgICAgIGltZy5zcmMgPSBscGljO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5sZXQgZ2VuZXJhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdlbmVyYXRlXCIpO1xyXG5jb25zdCBob2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVcIik7XHJcbmNvbnN0IHN0dWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0dWR5XCIpO1xyXG5jb25zdCByb2FkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb2FkXCIpO1xyXG5jb25zdCBlcnAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycFwiKTtcclxuXHJcbi8vR2VuZXJhdGUgaG9tZVBhZ2UgZHluYW1pY2FsbHlcclxubGV0IGhvbWVnZW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgaXNEYXJrTW9kZSA9IGJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGFya1wiKTtcclxuICBob2Uuc3R5bGUuYm9yZGVyQm90dG9tID0gXCIycHggc29saWQgdmFyKC0tZm9udC1jb2xvcilcIjtcclxuICBzdHVkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xyXG4gIHJvYWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XHJcbiAgZXJwLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xyXG4gIGdlbmVyYXRlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiaG9tZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xvZ2FuXCI+XHJcbiAgICAgICAgICAgICAgU2ltcGxpZnkgYWNhZGVtaWNzIHdpdGggdXNcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbG9nYW4tcGFyYVwiPlxyXG4gICAgICAgICAgICAgICAgV2VsY29tZSB0byBTbnVBY2FkZW1pYSwgdGhlIHVsdGltYXRlIHN0dWRlbnQgZGVzaWduZWQgd2Vic2l0ZSB0aGF0IGhlbHBzIGluIHNpbXBsaWZ5aW5nIHN0dWR5IGxpZmVcclxuICAgICAgICAgICAgICAgIGF0IFNOVVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsb2dhbkJ1dHRvblwiPkFib3V0IHVzPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxpbWcgaWQ9XCJpbWFnZVwiIHNyYz0nJHtscGljfScgc3R5bGU9XCJ3aWR0aDo1MCU7bWFyZ2luLXJpZ2h0OiAxMCU7XCI+XHJcbjwvZGl2PlxyXG48c2VjdGlvbiBpZD1cInNsaWRlclwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2xpZGVyXCIgaWQ9XCJzMVwiIGNoZWNrZWQgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNsaWRlclwiIGlkPVwiczJcIiAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic2xpZGVyXCIgaWQ9XCJzM1wiIC8+XHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInMxXCIgaWQ9XCJzbGlkZTFcIlxyXG4gICAgICAgICAgPjxoMj5PdXIgR29hbDwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyQ29udGVudFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7c3BpYzF9XCIgd2lkdGg9XCI1MCVcIiAvPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBTbnVBY2FkZW1pYSBhaW1zIHRvIGFzc2lzdCBzdHVkZW50cyB0aHJvdWdob3V0IHRoZWlyIGFjYWRlbWljXHJcbiAgICAgICAgICAgICAgam91cm5leSB3aXRoIHN0dWR5IG1hdGVyaWFscywgbm90ZXMsIFBZUXMsIGFuZCBhc3NpZ25tZW50cy4gT3VyXHJcbiAgICAgICAgICAgICAgd2Vic2l0ZSBhbHNvIGFkZHJlc3NlcyBjb21tb24gcXVlc3Rpb25zIGFib3V0IEVSUCwgQmxhY2tib2FyZCwgYW5kXHJcbiAgICAgICAgICAgICAgb3RoZXIgZ2VuZXJhbCBxdWVyaWVzIGZvciBmcmVzaGVycy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiczJcIiBpZD1cInNsaWRlMlwiXHJcbiAgICAgICAgICA+PGgyPk91ciBKb3VybmV5PC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzbGlkZXJDb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtzcGljMn1cIiB3aWR0aD1cIjUwJVwiIC8+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIE91ciBqb3VybmV5IGJlZ2FuIG9uIGEgcmFuZG9tIGFmdGVybm9vbiBpbiBvdXIgaG9zdGVsIHJvb20sIHdoZXJlXHJcbiAgICAgICAgICAgICAgd2Ugc3RhcnRlZCB3b3JraW5nIG9uIHRoaXMgcHJvamVjdCB3aXRoIHRoZSBzdXBwb3J0IG9mIG91ciBwZWVycy5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgZm9yPVwiczNcIiBpZD1cInNsaWRlM1wiXHJcbiAgICAgICAgICA+PGgyPk9wZW4gU291cmNlIENvbnRyaWJ1dGlvbjwvaDI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyQ29udGVudFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7c3BpYzN9XCIgd2lkdGg9XCI0MCVcIiAvPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICBPdXIgd2Vic2l0ZSBpcyBvcGVuLXNvdXJjZSwgYWxsb3dpbmcgc3R1ZGVudHMgdG8gYWNjZXNzIGFuZFxyXG4gICAgICAgICAgICAgIGNvbnRyaWJ1dGUgdG8gdGhlIHNvdXJjZSBjb2RlIHRocm91Z2ggb3VyIEdpdEh1YiByZXBvc2l0b3J5LiBXZVxyXG4gICAgICAgICAgICAgIHdlbGNvbWUgeW91ciBwYXJ0aWNpcGF0aW9uIGFuZCBjb2xsYWJvcmF0aW9uIGluIG1ha2luZyBvdXJcclxuICAgICAgICAgICAgICBwbGF0Zm9ybSBldmVuIGJldHRlci5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgPC9zZWN0aW9uPmA7XHJcblxyXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VcIik7XHJcbiAgaWYgKGlzRGFya01vZGUpIHtcclxuICAgIGlmIChpbWcpIHtcclxuICAgICAgaW1nLnNyYyA9IGRwaWM7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmIChpbWcpIHtcclxuICAgICAgaW1nLnNyYyA9IGxwaWM7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob21lZ2VuKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lZlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZWdlbik7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdC1sb2dvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob21lZ2VuKTtcclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBob21lZ2VuKTtcclxuLy9nZW5lcmF0ZSBTdHVkeSBNYXRlcmlhbCBUYWJcclxubGV0IHN0dWR5R2VuID0gKCkgPT4ge1xyXG4gIGhvZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcclxuICBzdHVkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwiMnB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpXCI7XHJcbiAgcm9hZC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcclxuICBlcnAuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XHJcbiAgZ2VuZXJhdGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJzdHVkeVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRhZ2xpbmVcIj5cclxuICAgICAgICA8c3Bhbj5XaGVyZSBUZXh0Ym9va3M8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+QW5kIERyZWFtcyBDb2xsaWRlPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3ViLXRhZ1wiPkV4cGxvcmUsIERpc2NvdmVyLCBhbmQgU2hhcGUgWW91ciBBY2FkZW1pYyBKb3VybmV5IHdpdGggTGltaXRsZXNzIFBvc3NpYmlsaXRpZXM8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtYmFyXCI+XHJcbiAgICAgICAgPHNwYW4+PGkgY2xhc3M9XCJiaSBiaS1zZWFyY2hcIiBzdHlsZT1cImZvbnQtc2l6ZTogbWF4KDIwcHgsMS41dncpO1wiID48L2k+PC9zcGFuPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY291cnNlLXNlbGVjdFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgZGF0YS1zZWFyY2g+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb3Vyc2VzXCI+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVDb3Vyc2VzID0gKGFycmF5LCBsaW5rQXJyYXkpID0+IHtcclxuICAgIGxldCBjb3Vyc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3Vyc2VzXCIpO1xyXG4gICAgbGV0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291cnNlLXNlbGVjdFwiKTtcclxuXHJcbiAgICBzZWFyY2hCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcclxuICAgICAgLy9pbnB1dCBiZWluZyB0eXBlZCBpbnNpZGUgdGhlIHNlYXJjaCBiYXJcclxuICAgICAgY29uc3Qgc2VhcmNoVGV4dCA9IHNlYXJjaEJhci52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgLy8gQ2xlYXIgZXhpc3RpbmcgY291cnNlc1xyXG4gICAgICBjb3Vyc2VzLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgY29uc3QgY291cnNlTmFtZSA9IGFycmF5W2luZGV4XS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IGxpbmsgPSBsaW5rQXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgICBpZiAoY291cnNlTmFtZS5pbmNsdWRlcyhzZWFyY2hUZXh0KSkge1xyXG4gICAgICAgICAgbGV0IGNvdXJzZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICBjb3Vyc2VEaXYuY2xhc3NMaXN0LmFkZChcImNvdXJzZUJveFwiKTtcclxuICAgICAgICAgIGNvdXJzZXMuYXBwZW5kQ2hpbGQoY291cnNlRGl2KTtcclxuICAgICAgICAgIGNvdXJzZURpdi5pbm5lckhUTUwgPSBgPHNwYW4gaWQ9XCJjb3Vyc2UtJHtpbmRleH1cIj4ke2FycmF5W2luZGV4XX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImdsaW5rXCIgIGlkPVwibGluay0ke2luZGV4fVwiPjxhIGhyZWY9XCIke2xpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+Q29udGVudDwvYT48L3NwYW4+YDtcclxuXHJcbiAgICAgICAgICBjb3Vyc2VEaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb3Vyc2UtJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsaW5rLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjb3Vyc2VEaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNvdXJzZS0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxpbmstJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy9UbyBnZW5lcmF0ZSBjb3Vyc2VzIHdoZW4geW91IGxvYWQgdXAgcGFnZVxyXG4gICAgc2VhcmNoQmFyLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiaW5wdXRcIikpO1xyXG4gIH07XHJcblxyXG4gIC8vZXhhbXBsZSBhcnJheXNcclxuICBsZXQgY291cnNlQXJyID0gW1wiREVTMTAxXCIsIFwiRkFDMjAyXCIsIFwiTUVDMTA0XCIsIFwiTUtUMjAyXCIsIFwiT0hNNDAxXCIsIFwiU1RNMjA0XCJdO1xyXG4gIGxldCBsaW5rQXJyID0gW1xyXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xcGZXSDBKMmVrN3l4VE1ibW9Ddi00WVFQQjVYS09MSHI/dXNwPXNoYXJpbmdcIixcclxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMXE3VXNLV0ZnNW9kVDZyWDU3VDRMQXJoU1k1ZUxhMlJKP3VzcD1zaGFyaW5nXCIsXHJcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9kcml2ZS9mb2xkZXJzLzFObHJIS0NQNTJiNTNPUWlZY2RCZ083TnZMOWVRODF6dj91c3A9c2hhcmluZ1wiLFxyXG4gICAgXCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xdHpJczJ1eDZsUjF1OGVUOWZUQUQtNUpYQmtoQUdxcmI/dXNwPWRyaXZlX2xpbmtcIixcclxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMV8tbWtkUUhDcXBQY2VpUWVadzdqOTFyMGhWY1VobWhKP3VzcD1zaGFyaW5nXCIsXHJcbiAgICBcImh0dHBzOi8vZHJpdmUuZ29vZ2xlLmNvbS9kcml2ZS9mb2xkZXJzLzFaOUJxSkMxdkNuTXhGU1JUOFlNYWZCMXNkbExBdjhtdT91c3A9c2hhcmluZ1wiLFxyXG4gIF07XHJcbiAgZ2VuZXJhdGVDb3Vyc2VzKGNvdXJzZUFyciwgbGlua0Fycik7XHJcbn07XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3R1ZHlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0dWR5R2VuKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHVkeWZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0dWR5R2VuKTtcclxuXHJcbi8vR2VuZXJhdGUgUm9hZG1hcFxyXG5jb25zdCByb2FkR2VuID0gKCkgPT4ge1xyXG4gIGhvZS5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcclxuICBzdHVkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xyXG4gIHJvYWQuc3R5bGUuYm9yZGVyQm90dG9tID0gXCIycHggc29saWQgdmFyKC0tZm9udC1jb2xvcilcIjtcclxuICBlcnAuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XHJcbiAgZ2VuZXJhdGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJyb2FkTWFwc1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJ0YWdsaW5lXCI+XHJcbiAgICAgIDxzcGFuPkNob29zZTwvc3Bhbj5cclxuICAgICAgPHNwYW4+WW91ciBBY2FkZW1pYyBUcmFpbDwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJzdWItdGFnXCI+Q2hhcnQgWW91ciBBY2FkZW1pYyBKb3VybmV5OiBFeHBsb3JlIE1ham9yIGFuZCBNaW5vciBQYXRoczwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwic2VhcmNoLWJhclwiPlxyXG4gICAgICA8c3Bhbj48aSBjbGFzcz1cImJpIGJpLXNlYXJjaFwiIHN0eWxlPVwiZm9udC1zaXplOiBtYXgoMjBweCwxLjV2dyk7XCIgPjwvaT48L3NwYW4+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiY291cnNlLXNlbGVjdFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgZGF0YS1zZWFyY2g+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJvYWRzXCI+XHJcbiAgICAgIFxyXG4gIDwvZGl2PmA7XHJcbiAgbGV0IHJvYWRBcnIgPSBbXCJDU0VcIiwgXCJFQ0VcIiwgXCJFRUVcIiwgXCJNRUNIXCIsIFwiQk1TXCIsIFwiRUNPXCJdO1xyXG4gIGdlbmVyYXRlUm9hZChyb2FkQXJyKTtcclxufTtcclxuXHJcbmNvbnN0IGdlbmVyYXRlUm9hZCA9IChhcnJheSkgPT4ge1xyXG4gIGxldCByb2FkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm9hZHNcIik7XHJcbiAgbGV0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291cnNlLXNlbGVjdFwiKTtcclxuXHJcbiAgc2VhcmNoQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAvL2lucHV0IGJlaW5nIHR5cGVkIGluc2lkZSB0aGUgc2VhcmNoIGJhclxyXG4gICAgY29uc3Qgc2VhcmNoVGV4dCA9IHNlYXJjaEJhci52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIC8vIENsZWFyIGV4aXN0aW5nIGNvdXJzZXNcclxuICAgIHJvYWRzLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBicmFuY2hOYW1lID0gYXJyYXlbaW5kZXhdLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIC8vY29uc3QgbGluayA9IGxpbmtBcnJheVtpbmRleF07XHJcbiAgICAgIGlmIChicmFuY2hOYW1lLmluY2x1ZGVzKHNlYXJjaFRleHQpKSB7XHJcbiAgICAgICAgbGV0IG1hcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgbWFwRGl2LmNsYXNzTGlzdC5hZGQoXCJyb2FkQm94XCIpO1xyXG4gICAgICAgIHJvYWRzLmFwcGVuZENoaWxkKG1hcERpdik7XHJcbiAgICAgICAgbWFwRGl2LmlubmVySFRNTCA9IGA8c3BhbiBpZD1cImNvdXJzZS0ke2luZGV4fVwiPiR7YXJyYXlbaW5kZXhdfTwvc3Bhbj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB3aWR0aDo4MCVcIiA+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImdsaW5rLXJcIiAgaWQ9XCJtYWpvckxpbmstJHtpbmRleH1cIj48YSBjbGFzcz0nYXInIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPk1ham9yPC9hPjwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2xpbmstclwiIGlkPVwibWlub3JMaW5rLSR7aW5kZXh9XCI+PGEgY2xhc3M9J2FyJ2hyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPk1pbm9yPC9hPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcblxyXG4gICAgICAgIG1hcERpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb3Vyc2UtJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWFqb3JMaW5rLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1pbm9yTGluay0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBtYXBEaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjb3Vyc2UtJHtpbmRleH1gKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbWFqb3JMaW5rLSR7aW5kZXh9YCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYG1pbm9yTGluay0ke2luZGV4fWApLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIC8vVG8gZ2VuZXJhdGUgY291cnNlcyB3aGVuIHlvdSBsb2FkIHVwIHBhZ2VcclxuICBzZWFyY2hCYXIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJpbnB1dFwiKSk7XHJcbn07XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvYWRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvYWRHZW4pO1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvYWRmXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb2FkR2VuKTtcclxuXHJcbi8vR2VuZXJhdGUgRXJwIE1hbmFnZW1lbnQgVGFiXHJcbmNvbnN0IGVycEdlbiA9ICgpID0+IHtcclxuICBob2Uuc3R5bGUuYm9yZGVyQm90dG9tID0gXCJub25lXCI7XHJcbiAgc3R1ZC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIm5vbmVcIjtcclxuICByb2FkLnN0eWxlLmJvcmRlckJvdHRvbSA9IFwibm9uZVwiO1xyXG4gIGVycC5zdHlsZS5ib3JkZXJCb3R0b20gPSBcIjJweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKVwiO1xyXG4gIGdlbmVyYXRlLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZXJwTWFuYWdlbWVudFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJ0YWdsaW5lXCI+XHJcbiAgICAgIDxzcGFuPlNpbXBsaWZ5PC9zcGFuPlxyXG4gICAgICA8c3Bhbj4gWW91ciBTbnUgRXhwZXJpZW5jZTwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJzdWItdGFnXCIgPkNvbW1vbmx5IGFza2VkIEZBUXMgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJsaW5rU2VjdGlvblwiPlxyXG4gICAgICA8ZGl2IGlkPVwiZXJwTGlua1wiPkVycDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwiZmFzdExpbmtcIj5GYXN0cmFjazwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwiaG9zdGVMaW5rXCI+SG9zdGVsIE1hbmFnZW1lbnQ8L2Rpdj5cclxuICAgICAgPGRpdiBpZD1cImJiTGlua1wiPkJsYWNrYm9hcmQ8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiZmFxc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjsgd2lkdGg6IDEwMCU7XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+V2hhdCBpcyBFcnA/PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktY2FyZXQtZG93bi1maWxsXCI+PC9pPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic29sXCI+cmFuZG9tIGltYWdlL3ZpZGVvPC9kaXY+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PmA7XHJcbiAgbGV0IGxpbmtTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saW5rU2VjdGlvblwiKTtcclxuICBsZXQgbGlua3MgPSBsaW5rU2VjdGlvbi5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKTtcclxuICBsZXQgZmFxcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmFxc1wiKTtcclxuXHJcbiAgZnVuY3Rpb24gZmFxRmlsbChhcnJheSkge1xyXG4gICAgZmFxcy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBsZXQgZWxlbWVudCA9IGFycmF5W2ldO1xyXG4gICAgICBsZXQgZmFxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZmFxRGl2LmlubmVySFRNTCA9IGA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB3aWR0aDogMTAwJTtcIj5cclxuICAgICAgPHNwYW4+JHtlbGVtZW50LnF1ZXN0aW9ufTwvc3Bhbj5cclxuICAgICAgPHNwYW4+PGkgaWQ9J2Ryb3AtJHtpfScgY2xhc3M9XCJiaSBiaS1jYXJldC1kb3duLWZpbGxcIj48L2k+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNvbFwiIGlkPSdzb2wtJHtpfSc+JHtlbGVtZW50LmFuc3dlcn08L2Rpdj5gO1xyXG4gICAgICBmYXFzLmFwcGVuZENoaWxkKGZhcURpdik7XHJcbiAgICAgIGZhcURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzb2wtJHtpfWApO1xyXG4gICAgICAgIGNvbnN0IGFycm93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRyb3AtJHtpfWApO1xyXG4gICAgICAgIGlmIChzb2wuc3R5bGUuZGlzcGxheSA9PSBcImZsZXhcIikge1xyXG4gICAgICAgICAgc29sLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgIGFycm93LmNsYXNzTGlzdCA9IFwiYmktY2FyZXQtZG93bi1maWxsXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNvbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICBhcnJvdy5jbGFzc0xpc3QgPSBcImJpLWNhcmV0LXVwLWZpbGxcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBmYXFzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgLy9FeGFtcGxlIGFycmF5c1xyXG4gIGxldCBlcnBGYXFzID0gW1xyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGlzIEVSUD9cIixcclxuICAgICAgYW5zd2VyOlxyXG4gICAgICAgIFwiVGhlIFNoaXYgTmFkYXIgVW5pdmVyc2l0eSBFUlAgcG9ydGFsIGlzIGEgd2ViLWJhc2VkIGFwcGxpY2F0aW9uIHRoYXQgcHJvdmlkZXMgc3R1ZGVudHMsIGZhY3VsdHksIGFuZCBzdGFmZiB3aXRoIGFjY2VzcyB0byBhIHZhcmlldHkgb2YgdW5pdmVyc2l0eSBzZXJ2aWNlcy4gVGhlIHBvcnRhbCBpbmNsdWRlcyBmZWF0dXJlcyBzdWNoIGFzIHN0dWRlbnQgc2VsZi1zZXJ2aWNlLCBmYWN1bHR5IHNlbGYtc2VydmljZSwgc3RhZmYgc2VsZi1zZXJ2aWNlLCBhbmQgcGFyZW50LXN0dWRlbnQgcG9ydGFsLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGxvZyBpbiB0byB0aGUgRVJQP1wiLFxyXG4gICAgICBhbnN3ZXI6XHJcbiAgICAgICAgXCJUbyBsb2cgaW4gdG8geW91ciBFUlAsIHlvdSBtdXN0IGVudGVyIHlvdXIgU05VIG5ldCBJRCAoZS5nLi0geHkxMjMpIGFuZCBwYXNzd29yZC5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBhZGQgY291cnNlcyB0byBwbGFubmVyP1wiLFxyXG4gICAgICBhbnN3ZXI6XHJcbiAgICAgICAgXCJVcG9uIGxvZ2dpbmcgaW50byB0aGUgRVJQLCBuYXZpZ2F0ZSB0byB0aGUgJ0FjYWRlbWljIFBsYW5uaW5nJyBzZWN0aW9uIGxvY2F0ZWQgaW4gdGhlIGxlZnQtaGFuZCBtZW51IGJhciwgb3IgZGlyZWN0bHkgYWNjZXNzIHRoZSAnUGxhbicgb3B0aW9uIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgYWxvbmdzaWRlIG90aGVyIG9wdGlvbnMgbGlrZSBzZWFyY2ggYW5kIGVucm9sbC4gUHJvY2VlZCB0byBjbGljayBvbiAnQnJvd3NlIENhdGFsb2cnIGFuZCB1c2UgdGhlIHRleHQgYm94IHRvIGlucHV0IHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHN1YmplY3QgeW91IGRlc2lyZSB0byBzZWxlY3QgYSBjb3Vyc2UgZnJvbS4gQWxsIGF2YWlsYWJsZSBzdWJqZWN0IG9wdGlvbnMgd2lsbCBiZSBkaXNwbGF5ZWQsIHdoZXJlIHlvdSBjYW4gdGhlbiBjbGljayB0aGUgZHJvcGRvd24gYnV0dG9uIHRvIGNob29zZSB5b3VyIGRlc2lyZWQgY291cnNlIGFuZCBjbGljayBvbiAnQWRkIFBsYW5uZXInIHRvIGluY2x1ZGUgaXQgaW4geW91ciBwbGFubmVyLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiV2hlcmUgdG8gc2VlIHlvdXIgdGltZXRhYmxlIGZyb20/XCIsXHJcbiAgICAgIGFuc3dlcjpcclxuICAgICAgICBcIkluIHRoZSBFUlAgc3lzdGVtLCBsb2NhdGUgdGhlICdFbnJvbGxtZW50JyBvcHRpb24gb24gdGhlIGxlZnQtaGFuZCBzaWRlIG9mIHRoZSBwYWdlLCBzaXR1YXRlZCB1bmRlciB0aGUgbWVudSBib3guIENsaWNrIG9uIHRoZSAnTXkgV2Vla2x5IFNjaGVkdWxlJyBvcHRpb24gdG8gYWNjZXNzIHlvdXIgdGltZXRhYmxlIGZvciB0aGUgY3VycmVudCB3ZWVrLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGNoZWNrIEdQQT9cIixcclxuICAgICAgYW5zd2VyOlxyXG4gICAgICAgIFwiSW4gdGhlIEVSUCBzeXN0ZW0sIGZpbmQgdGhlICdFbnJvbGxtZW50JyBvcHRpb24gb24gdGhlIGxlZnQtaGFuZCBzaWRlIG9mIHRoZSBwYWdlLCB3aGljaCBpcyBsb2NhdGVkIHVuZGVyIHRoZSBtZW51IGJveC4gQ2xpY2sgb24gJ1Rlcm0gU3RhdGlzdGljcycgYW5kIGNob29zZSB0aGUgc2VtZXN0ZXIgZm9yIHdoaWNoIHlvdSB3aXNoIHRvIGNoZWNrIHlvdXIgR1BBLiBUaGVuLCByZXZpZXcgeW91ciBHUEEgZm9yIHRoZSBzZWxlY3RlZCBzZW1lc3Rlci5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOlxyXG4gICAgICAgIFwiSG93IHRvIGNoZWNrIHRoZSB0b3RhbCBjcmVkaXRzIGNvbXBsZXRlZCBhbmQgdG90YWwgY3JlZGl0cyBsZWZ0P1wiLFxyXG4gICAgICBhbnN3ZXI6XHJcbiAgICAgICAgJ0ZpbmQgdGhlIFwiTXkgQWNhZGVtaWNzXCIgb3B0aW9uIGluIHRoZSBFUlAgc3lzdGVtIGFsb25nIHdpdGggb3RoZXIgb3B0aW9ucyBsaWtlIFwiRW5yb2wsXCIgXCJQbGFuLFwiIGV0Yy4gbmVhciB0aGUgdG9wIG9mIHRoZSBwYWdlLiBUaGVuIHNlbGVjdCBcIlZpZXcgTXkgQWR2aXNlbWVudCBSZXBvcnQuXCIgVGhpcyByZXBvcnQgd2lsbCBzaG93IHRoZSBjcmVkaXRzIHlvdSBoYXZlIGFscmVhZHkgZWFybmVkIGFzIHdlbGwgYXMgdGhlIGNyZWRpdHMgeW91IHN0aWxsIG5lZWQgdG8gZmluaXNoLicsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgbGV0IGZhc3RyYWNrRmFxcyA9IFtcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiV2hhdCBpcyBGYXN0cmFjaz9cIixcclxuICAgICAgYW5zd2VyOlxyXG4gICAgICAgICdUbyBsZWF2ZSB0aGUgY2FtcHVzIGZvciBhIGRheSBvciBsb25nZXIsIHlvdSBtdXN0IG9idGFpbiBhcHByb3ZhbCBmcm9tIHRoZSB3YXJkZW4uIFRoaXMgYXBwcm92YWwgaXMgcmVmZXJyZWQgdG8gYXMgXCJmYXN0cmFjay5cIicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBxdWVzdGlvbjogXCJIb3cgZG8gSSBhcHBseSBmb3IgRmFzdHJhY2s/XCIsXHJcbiAgICAgIGFuc3dlcjpcclxuICAgICAgICAnUGxlYXNlIGFjY2VzcyB0aGUgU05VTGlua3Mgd2Vic2l0ZSBhbmQgZmluZCB0aGUgXCJsb2dpblwiIG9wdGlvbi4gT25jZSBsb2dnZWQgaW4sIHlvdSB3aWxsIHNlZSBhIHZhcmlldHkgb2YgY2hvaWNlcy4gQ2xpY2sgb24gdGhlIFwiZmFzdHJhY2tcIiBvcHRpb24gdG8gYWNjZXNzIHRoZSBmb3JtIGZvciByZXF1ZXN0aW5nIHBlcm1pc3Npb24gdG8gbGVhdmUgdGhlIGNhbXB1cywgd2hldGhlciBpdCBpcyBmb3IgcGVyc29uYWwgb3Igb2ZmaWNpYWwgcmVhc29ucy4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiV2hhdCB0byBkbyBpbiBjYXNlIEZhc3RyYWNrIGlzIHJlamVjdGVkP1wiLFxyXG4gICAgICBhbnN3ZXI6XHJcbiAgICAgICAgXCJJZiB5b3VyIGZhc3RyYWNrIHJlcXVlc3QgaXMgcmVqZWN0ZWQgZm9yIGFueSByZWFzb24sIHlvdSBoYXZlIHR3byBvcHRpb25zOiBZb3UgY2FuIHJldmlldyB0aGUgZm9ybSB0byBzZWUgaWYgdGhlcmUgYXJlIGFueSBtaXN0YWtlcywgY29ycmVjdCB0aGVtLCBhbmQgcmVzdWJtaXQgaXQgZm9yIGFwcHJvdmFsLiBBbHRlcm5hdGl2ZWx5LCBpZiB5b3UgbmVlZCB0byBsZWF2ZSB1cmdlbnRseSwgeW91IGNhbiBkaXJlY3RseSBhcHByb2FjaCB0aGUgcmVjZXB0aW9uIG9mIHlvdXIgaG9zdGVsIGFuZCByZXF1ZXN0IGFuIGVhcmx5IGFwcHJvdmFsIGZyb20gdGhlbS5cIixcclxuICAgIH0sXHJcbiAgXTtcclxuICBsZXQgaG9zdGVsRmFxcyA9IFtcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGNob29zZSByb29tbWF0ZXM/XCIsXHJcbiAgICAgIGFuc3dlcjogXCJUaGUgb3B0aW9uIHRvIHJlbW92ZSByb29tbWF0ZXMgaXMgbm8gbG9uZ2VyIHZhbGlkIGFzIG9mIDIwMjNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBzZWxlY3QgeW91ciByb29tP1wiLFxyXG4gICAgICBhbnN3ZXI6XHJcbiAgICAgICAgXCJQbGVhc2UgdmlzaXQgdGhlIFNOVUxpbmtzIHdlYnNpdGUgYW5kIGxvY2F0ZSB0aGUgJ2xvZ2luJyBvcHRpb24uIEFmdGVyIGxvZ2dpbmcgaW4sIHlvdSB3aWxsIGJlIHByZXNlbnRlZCB3aXRoIHZhcmlvdXMgY2hvaWNlcy4gQ2xpY2sgb24gdGhlICdIb3N0ZWwgTWFuYWdlbWVudCBTeXN0ZW0nIG9wdGlvbiwgYW5kIGZyb20gdGhlcmUsIGZpbmQgdGhlICdSb29tIFNlbGVjdGlvbiBSZXF1ZXN0JyBvcHRpb24uIER1cmluZyB0aGUgcm9vbSBzZWxlY3Rpb24gZGF5cyBhc3NpZ25lZCBieSB0aGUgbWFuYWdlbWVudCwgdGhpcyBzZWxlY3Rpb24gd2lsbCByZWRpcmVjdCB5b3UgdG8gYSBwYWdlIHdoZXJlIHlvdSBjYW4gY2hvb3NlIHlvdXIgcm9vbS5cIixcclxuICAgIH0sXHJcbiAgXTtcclxuICBsZXQgYmxhY2tib2FyZEZhcXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgQmxhY2tib2FyZD9cIixcclxuICAgICAgYW5zd2VyOlxyXG4gICAgICAgIFwiQmxhY2tib2FyZCBpcyBhbiBvbmxpbmUgbGVhcm5pbmcgbWFuYWdlbWVudCBzeXN0ZW0gKExNUykgdXNlZCBieSBwcm9mZXNzb3JzIHRvIHByb3ZpZGUgY291cnNlIG1hdGVyaWFscywgaW5jbHVkaW5nIG5vdGVzLCBhc3NpZ25tZW50cywgYW5ub3VuY2VtZW50cywgYW5kIG90aGVyIHJlc291cmNlcyB0byBzdHVkZW50cyBpbiBhIGRpZ2l0YWwgZm9ybWF0LlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGxvZyBpbiBibGFja2JvYXJkP1wiLFxyXG4gICAgICBhbnN3ZXI6XHJcbiAgICAgICAgXCJUbyBhY2Nlc3MgdGhlIEJsYWNrYm9hcmQgcGxhdGZvcm0gYXQgU05VLCB5b3UgaGF2ZSB0d28gb3B0aW9ucy4gRmlyc3RseSwgeW91IGNhbiBuYXZpZ2F0ZSB0byBTTlUgbGlua3MgYW5kIHNlYXJjaCBmb3IgdGhlICdCbGFja2JvYXJkJyBvcHRpb24gb24gdGhlIHdlYnNpdGUuIEFsdGVybmF0aXZlbHksIHlvdSBtYXkgZGlyZWN0bHkgc2VhcmNoIGZvciAnU05VIEJsYWNrYm9hcmQnIG9uIHRoZSBpbnRlcm5ldC4gT25jZSB5b3UgZmluZCB0aGUgQmxhY2tib2FyZCBwb3J0YWwsIGxvZyBpbiB1c2luZyB5b3VyIFNOVSBlbWFpbCBJRCBhbmQgcGFzc3dvcmQgdG8gZ2FpbiBhY2Nlc3MgdG8gdGhlIHBsYXRmb3JtLi5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHF1ZXN0aW9uOiBcIkhvdyB0byBhZGQgY291cnNlcyB0byBmYXZvcml0ZXM/XCIsXHJcbiAgICAgIGFuc3dlcjpcclxuICAgICAgICBcIkFmdGVyIGxvZ2dpbmcgaW4gdG8geW91ciBCbGFja2JvYXJkIGFjY291bnQsIGZpbmQgdGhlICdDb3Vyc2VzJyBvcHRpb24gbG9jYXRlZCBvbiB0aGUgbGVmdC1oYW5kIHNpZGUgb2YgdGhlIHNjcmVlbiBhbmQgY2xpY2sgb24gaXQuIFRoaXMgYWN0aW9uIHdpbGwgZGlzcGxheSBhIGxpc3Qgb2YgYWxsIHRoZSBjb3Vyc2VzIHlvdSBhcmUgY3VycmVudGx5IGVucm9sbGVkIGluLiBUbyBtYXJrIGEgY291cnNlIGFzIGEgZmF2b3JpdGUsIGxvb2sgZm9yIHRoZSBzdGFyIGJ1dHRvbiBzaXR1YXRlZCBvbiB0aGUgcmlnaHQtaGFuZCBzaWRlIG9mIGVhY2ggY291cnNlIGhlYWRpbmcuIENsaWNrIG9uIHRoZSBzdGFyIGJ1dHRvbiB0byBhZGQgdGhlIGNvdXJzZSB0byB5b3VyIGZhdm9yaXRlcyBsaXN0LlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiSG93IGNhbiBJIHN1Ym1pdCBhc3NpZ25tZW50cyBvbiBCbGFja2JvYXJkP1wiLFxyXG4gICAgICBhbnN3ZXI6XHJcbiAgICAgICAgXCJOb3JtYWxseSwgdGhlIGxpbmsgZm9yIHN1Ym1pdHRpbmcgYXNzaWdubWVudHMgY2FuIGJlIGZvdW5kIGluIHRoZSAnQWN0aXZpdHkgU2VjdGlvbicgb2YgdGhlIGNvdXJzZSBwYWdlLCBhbG9uZyB3aXRoIHRoZSBkZWFkbGluZSBmb3Igc3VibWlzc2lvbi4gSWYgeW91IGFyZSB1bmFibGUgdG8gbG9jYXRlIHRoZSBsaW5rIHRoZXJlLCB5b3UgY2FuIGZvbGxvdyB0aGVzZSBzdGVwczogRmlyc3QsIGNsaWNrIG9uIHRoZSAnQ291cnNlcycgb3B0aW9uIG9uIHRoZSBsZWZ0LWhhbmQgc2lkZSBvZiB0aGUgc2NyZWVuLiBOZXh0LCBmaW5kIHRoZSBzcGVjaWZpYyBjb3Vyc2UgZm9yIHdoaWNoIHlvdSB3YW50IHRvIHN1Ym1pdCB0aGUgYXNzaWdubWVudC4gT25jZSB5b3UgaGF2ZSBzZWxlY3RlZCB0aGUgY291cnNlLCBuYXZpZ2F0ZSB0byB0aGUgJ0NvbnRlbnQgU2VjdGlvbicgb2YgdGhlIGNvdXJzZSBwYWdlIGFuZCBsb29rIGZvciB0aGUgbGluayB0byB0aGUgYXNzaWdubWVudCBzdWJtaXNzaW9uLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIGFjY2VzcyBjb250ZW50IG9uIGJsYWNrYm9hcmQ/XCIsXHJcbiAgICAgIGFuc3dlcjpcclxuICAgICAgICBcIlVzdWFsbHksIHRoZSBtb3N0IHJlY2VudCBjb250ZW50IGlzIHZpc2libGUgb24gdGhlICdBY3Rpdml0eSBTdHJlYW0uJyBIb3dldmVyLCBpZiB5b3Ugd2FudCB0byBhY2Nlc3MgYWxsIHRoZSBjb250ZW50IGF2YWlsYWJsZSBmb3IgYSBwYXJ0aWN1bGFyIGNvdXJzZSwgZm9sbG93IHRoZXNlIHN0ZXBzOiBHbyB0byB0aGUgJ0NvdXJzZXMnIHNlY3Rpb24gYW5kIGNob29zZSB0aGUgc3BlY2lmaWMgY291cnNlIHlvdSB3aXNoIHRvIHZpZXcgdGhlIGNvbnRlbnQgb2YuIExvb2sgZm9yIHRoZSAnQ29udGVudCcgc2VjdGlvbiwgdHlwaWNhbGx5IGxvY2F0ZWQgb24gdGhlIGxlZnQtaGFuZCBzaWRlIG9mIHRoZSBzY3JlZW4uIEJ5IGFjY2Vzc2luZyB0aGlzIHNlY3Rpb24sIHlvdSB3aWxsIGJlIGFibGUgdG8gc2VlIGFsbCB0aGUgY29udGVudCByZWxhdGVkIHRvIHRoZSBzZWxlY3RlZCBjb3Vyc2UuXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnBMaW5rXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmYXFGaWxsKGVycEZhcXMpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmFzdExpbmtcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGZhcUZpbGwoZmFzdHJhY2tGYXFzKTtcclxuICB9KTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvc3RlTGlua1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgZmFxRmlsbChob3N0ZWxGYXFzKTtcclxuICB9KTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJiTGlua1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgZmFxRmlsbChibGFja2JvYXJkRmFxcyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGVycEdlbigpO1xyXG59KTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnBmXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZXJwR2VuKCk7XHJcbn0pO1xyXG5cclxuY29uc3QgYWJvdXRHZW4gPSAoKSA9PiB7XHJcbiAgZ2VuZXJhdGUuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJhYm91dFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJhYm91dENvbnRlbnRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaXJzdENvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRleHRDb250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1ZXN0aW9uXCI+V2hhdCBpcyA8c3Bhbj5TbnVBY2FkZW1pYTwvc3Bhbj4/PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlclwiPlxyXG4gICAgICAgICAgVW5sb2NrIHRoZSBkb29ycyB0byBrbm93bGVkZ2UgYW5kIGVtYmFyayBvbiBhIGpvdXJuZXkgb2ZcclxuICAgICAgICAgIGludGVsbGVjdHVhbCBncm93dGggd2l0aCBTbnVBY2FkZW1pYSwgeW91ciBwcmVtaWVyIG9ubGluZVxyXG4gICAgICAgICAgZWR1Y2F0aW9uIHBsYXRmb3JtLiBXaGV0aGVyIHlvdSdyZSBhIGN1cmlvdXMgbGVhcm5lciwgYVxyXG4gICAgICAgICAgZGVkaWNhdGVkIHN0dWRlbnQsIG9yIGEgbGlmZWxvbmcgZW50aHVzaWFzdC5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxpbWcgc3JjPVwiJHtjb21wdXRlcn1cIiBhbHQ9XCJcIiB3aWR0aD1cIjI1JVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRDb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0Q29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvblwiPlxyXG4gICAgICAgICAgSG93PHNwYW4+IFNudUFjYWRlbWlhIDwvc3Bhbj5jYW4gaGVscCB5b3U/XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlclwiPlxyXG4gICAgICAgICAgQW4gZWR1Y2F0aW9uIHdlYnNpdGUgY2FuIHNpZ25pZmljYW50bHkgZW5oYW5jZSB5b3VyIGxlYXJuaW5nXHJcbiAgICAgICAgICBqb3VybmV5IGJ5IHByb3ZpZGluZyBhIGRpdmVyc2UgcmFuZ2Ugb2YgcmVzb3VyY2VzIHRhaWxvcmVkIHRvXHJcbiAgICAgICAgICB2YXJpb3VzIHN1YmplY3RzIGFuZCBsZWFybmluZyBzdHlsZXMsIG9mZmVyaW5nIGZsZXhpYmxlXHJcbiAgICAgICAgICBzY2hlZHVsaW5nIGFuZCBzZWxmLXBhY2VkIHByb2dyZXNzIHRyYWNraW5nLCBjb25uZWN0aW5nIHlvdSB3aXRoXHJcbiAgICAgICAgICBleHBlcnQgaW5zdHJ1Y3RvcnMuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aW1nIHNyYz0ke2hlbHBQaWN9IGFsdD1cIlwiIHdpZHRoPVwiMjUlXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJ0ZWFtXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibWVldFRlYW1cIj5NRUVUIFRIRSBURUFNPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGVhbUJheVwiPlxyXG4gICAgICA8ZGl2PkNvcmU8L2Rpdj5cclxuICAgICAgPGRpdj5EZXYgVGVhbTwvZGl2PlxyXG4gICAgICA8ZGl2PkNvbnRlbnQgVGVhbTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGVhbVBlb3BsZVwiPlxyXG4gICAgICA8ZGl2IGRhdGEtYWN0aXZlPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBlcnNvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZC1mcm9udFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIuLi9zcmMvcmVhc291cmNlcy92YW1zaS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZC1iYWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cIkl0IGlzIHdoYXQgaXQgaXNcIjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb2NpYWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiYmkgYmktaW5zdGFncmFtXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2luLmxpbmtlZGluLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWxpbmtlZGluXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9WYW1zaUthcGFydGhpL1NudWFjYWRlbWlhL3RyZWUvbWFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJiaSBiaS1naXRodWJcIj48L2lcclxuICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4+VmFtc2kgS2FwYXJ0aGk8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5Db2ZvdW5kZXI8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBlcnNvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxpcC1jYXJkLWlubmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZC1mcm9udFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIuLi9zcmMvcmVhc291cmNlcy92YW1zaS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsaXAtY2FyZC1iYWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cIkl0IGlzIHdoYXQgaXQgaXNcIjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb2NpYWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjxpIGNsYXNzPVwiYmkgYmktaW5zdGFncmFtXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2luLmxpbmtlZGluLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgID48aSBjbGFzcz1cImJpIGJpLWxpbmtlZGluXCI+PC9pXHJcbiAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9WYW1zaUthcGFydGhpL1NudWFjYWRlbWlhL3RyZWUvbWFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJiaSBiaS1naXRodWJcIj48L2lcclxuICAgICAgICAgICAgICAgICAgPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4+VmFtc2kgS2FwYXJ0aGk8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5Db2ZvdW5kZXI8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGRhdGEtYWN0aXZlPVwiaW5hY3RpdmVcIj48L2Rpdj5cclxuICAgICAgPGRpdiBkYXRhLWFjdGl2ZT1cImluYWN0aXZlXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+YDtcclxuICBsZXQgdGVhbUJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVhbUJheVwiKTtcclxufTtcclxuXHJcbi8vIGxldCB0ZWFtID0ge1xyXG4vLyAgIFt7XHJcbi8vICAgICBmaXJzdE5hbWU6XCJWYW1zaVwiLCBsYXN0TmFtZTpcIkthcGFydGhpXCIsIGRlc2lnbmF0aW9uOiBcIkNvZm91bmRlclwiLCBpbnN0YTogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL19fdmFtc2lfXzE3L1wiLCBsaW5rZWRpbjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdmFtc2kta2FwYXJ0aGktMzcxNzMwMjIyXCIsIGdpdDpcImh0dHBzOi8vZ2l0aHViLmNvbS9WYW1zaUthcGFydGhpXCIsIGltZzpcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuXHJcbi8vICAgfVxyXG4vLyBdXHJcbi8vIH1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICBjb25zdCBhYm91dEJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnNsb2dhbkJ1dHRvblwiKTtcclxuICBpZiAoYWJvdXRCdXR0b24pIHtcclxuICAgIGFib3V0R2VuKCk7IC8vIEdlbmVyYXRlIFwiQWJvdXQgVXNcIiBjb250ZW50XHJcbiAgfVxyXG59KTtcclxuY29uc3QgcmFkaW9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9cmFkaW9dXCIpO1xyXG5cclxuY29uc3Qgc2xpZGVTaG93ID0gKCkgPT4ge1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmFkaW9CdXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7fSwgMzAwMCk7XHJcbiAgfVxyXG59O1xyXG5zbGlkZVNob3coKTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==