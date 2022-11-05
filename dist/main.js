(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./src/contacto.js":
/*!*************************!*\
  !*** ./src/contacto.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactoFunctionTab": () => (/* binding */ contactoFunctionTab)
/* harmony export */ });
/* harmony import */ var _images_ASADO_FAMILIAR_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/ASADO_FAMILIAR.png */ "./src/images/ASADO_FAMILIAR.png");


const contactoFunctionTab = (() =>{
    const create = ()=>{
        erase();
        const contactoContent = document.createElement("div");
        contactoContent.setAttribute('id', 'tabContent');
        const pollito = new Image();
        pollito.src = _images_ASADO_FAMILIAR_png__WEBPACK_IMPORTED_MODULE_0__;

        contactoContent.innerHTML = `contacto a Kokoriko, 
        \r\ndonde encuentras el mejor pollo del pais\r\n`
        contactoContent.appendChild(pollito);
        contactoContent.innerHTML +=`\r\nDel campo a tu mesa`;
        contactoContent.setAttribute('style', 'white-space: pre-line');
        content.appendChild(contactoContent);
        };
        
    const erase = () => {
        const contactoContent = document.getElementById("tabContent");
        content.removeChild(contactoContent);
    }

    
    return {create , erase}
})()



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_logoRed_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logoRed.png */ "./src/images/logoRed.png");
/* harmony import */ var _images_github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/github.png */ "./src/images/github.png");
/* harmony import */ var _inicio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio */ "./src/inicio.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contacto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacto */ "./src/contacto.js");
console.log("runing webpcket");








const content = document.getElementById("content");

const create = (() => {
  function Header() {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const myLogo = new Image();
    myLogo.src = _images_logoRed_png__WEBPACK_IMPORTED_MODULE_0__;
    header.appendChild(myLogo);

    function createTab(tabElement , tabFunction){
      const newElement = document.createElement('h3');
      newElement.textContent = tabElement.toUpperCase();
      newElement.setAttribute('class', 'tab');
      newElement.setAttribute('id', `${tabElement}Tab`);
      newElement.addEventListener("click",tabFunction);
      window[`${tabElement}`+"Tab"] = newElement;
      return window[`${tabElement}`+"Tab"];
    }

    createTab("inicio", _inicio__WEBPACK_IMPORTED_MODULE_2__.inicioFunctionTab.create);
    createTab("menu", _menu__WEBPACK_IMPORTED_MODULE_3__.menuFunctionTab.create);
    createTab("contacto", _contacto__WEBPACK_IMPORTED_MODULE_4__.contactoFunctionTab.create);
    console.log(createTab);


    header.appendChild(inicioTab);
    header.appendChild(menuTab);
    header.appendChild(contactoTab);

    return header;
  }

  function Footer() {
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.textContent = "Copyright © 2021 devLuisTorres"
    const githubLogo = new Image();
    githubLogo.src = _images_github_png__WEBPACK_IMPORTED_MODULE_1__;
    footer.appendChild(githubLogo);
    return footer
  }

return {Header,Footer}
})()



const parentContent = content.parentNode;
parentContent.insertBefore(create.Header(),content);
parentContent.appendChild(create.Footer());

_inicio__WEBPACK_IMPORTED_MODULE_2__.inicioFunctionTab.create();


/***/ }),

/***/ "./src/inicio.js":
/*!***********************!*\
  !*** ./src/inicio.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imagenPollo": () => (/* reexport default export from named module */ _images_ASADO_FAMILIAR_png__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "inicioFunctionTab": () => (/* binding */ inicioFunctionTab)
/* harmony export */ });
/* harmony import */ var _images_ASADO_FAMILIAR_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/ASADO_FAMILIAR.png */ "./src/images/ASADO_FAMILIAR.png");


const inicioFunctionTab = (() =>{

    const create = ()=>{
        erase();
        const inicioContent = document.createElement("div");
        inicioContent.setAttribute('id', 'tabContent');
        const pollito = new Image();
        pollito.src = _images_ASADO_FAMILIAR_png__WEBPACK_IMPORTED_MODULE_0__;

        inicioContent.innerHTML = `Bienvenido a Kokoriko, \r\n
                            donde encuentras el mejor pollo del pais\r\n`
        inicioContent.appendChild(pollito);
        inicioContent.innerHTML +=`\r\nDel campo a tu mesa`;
        inicioContent.setAttribute('style', 'white-space: pre-line');
        content.appendChild(inicioContent);
        };
        
    const erase = () => {
        if (!!document.getElementById("tabContent")){
        const inicioContent = document.getElementById("tabContent");
        content.removeChild(inicioContent);
        };
    }

    
    return {create , erase}
})()



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (13:17)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n|               };\n| \n>               set.image() = \"\";\n|             }\n|         ");

/***/ }),

/***/ "./src/images/ASADO_FAMILIAR.png":
/*!***************************************!*\
  !*** ./src/images/ASADO_FAMILIAR.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ff7e6490b5177936cef3.png";

/***/ }),

/***/ "./src/images/github.png":
/*!*******************************!*\
  !*** ./src/images/github.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1e5a15070f102d12420a.png";

/***/ }),

/***/ "./src/images/logoRed.png":
/*!********************************!*\
  !*** ./src/images/logoRed.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cb3ae04e3a62e253e118.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVEQUFXOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCRDtBQUMyQztBQUNEO0FBQ0c7QUFDSjtBQUNROzs7O0FBSWpEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGdEQUFPO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQix1QkFBdUIsV0FBVztBQUNsQzs7QUFFQSx3QkFBd0IsNkRBQXdCO0FBQ2hELHNCQUFzQix5REFBc0I7QUFDNUMsMEJBQTBCLGlFQUEwQjtBQUNwRDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwrQ0FBTztBQUM1QjtBQUNBO0FBQ0E7O0FBRUEsUUFBUTtBQUNSLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7O0FBRUEsNkRBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RDZCOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVEQUFXOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdG8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmljaW8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGltYWdlblBvbGxvIGZyb20gXCIuL2ltYWdlcy9BU0FET19GQU1JTElBUi5wbmdcIlxuXG5jb25zdCBjb250YWN0b0Z1bmN0aW9uVGFiID0gKCgpID0+e1xuICAgIGNvbnN0IGNyZWF0ZSA9ICgpPT57XG4gICAgICAgIGVyYXNlKCk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhY3RvQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RhYkNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgcG9sbGl0byA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwb2xsaXRvLnNyYyA9IGltYWdlblBvbGxvO1xuXG4gICAgICAgIGNvbnRhY3RvQ29udGVudC5pbm5lckhUTUwgPSBgY29udGFjdG8gYSBLb2tvcmlrbywgXG4gICAgICAgIFxcclxcbmRvbmRlIGVuY3VlbnRyYXMgZWwgbWVqb3IgcG9sbG8gZGVsIHBhaXNcXHJcXG5gXG4gICAgICAgIGNvbnRhY3RvQ29udGVudC5hcHBlbmRDaGlsZChwb2xsaXRvKTtcbiAgICAgICAgY29udGFjdG9Db250ZW50LmlubmVySFRNTCArPWBcXHJcXG5EZWwgY2FtcG8gYSB0dSBtZXNhYDtcbiAgICAgICAgY29udGFjdG9Db250ZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2hpdGUtc3BhY2U6IHByZS1saW5lJyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdG9Db250ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgY29uc3QgZXJhc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RvQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiQ29udGVudFwiKTtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250YWN0b0NvbnRlbnQpO1xuICAgIH1cblxuICAgIFxuICAgIHJldHVybiB7Y3JlYXRlICwgZXJhc2V9XG59KSgpXG5cbmV4cG9ydCB7Y29udGFjdG9GdW5jdGlvblRhYn0iLCJjb25zb2xlLmxvZyhcInJ1bmluZyB3ZWJwY2tldFwiKTtcbmltcG9ydCBsb2dvUmVkIGZyb20gXCIuL2ltYWdlcy9sb2dvUmVkLnBuZ1wiO1xuaW1wb3J0IGdpdExvZ28gZnJvbSBcIi4vaW1hZ2VzL2dpdGh1Yi5wbmdcIjtcbmltcG9ydCB7IGluaWNpb0Z1bmN0aW9uVGFiIH0gZnJvbSBcIi4vaW5pY2lvXCI7XG5pbXBvcnQgeyBtZW51RnVuY3Rpb25UYWIgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBjb250YWN0b0Z1bmN0aW9uVGFiIH0gZnJvbSBcIi4vY29udGFjdG9cIjtcblxuXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IGNyZWF0ZSA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkZXInKTtcblxuICAgIGNvbnN0IG15TG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIG15TG9nby5zcmMgPSBsb2dvUmVkO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChteUxvZ28pO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFiKHRhYkVsZW1lbnQgLCB0YWJGdW5jdGlvbil7XG4gICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSB0YWJFbGVtZW50LnRvVXBwZXJDYXNlKCk7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFiJyk7XG4gICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YWJFbGVtZW50fVRhYmApO1xuICAgICAgbmV3RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0YWJGdW5jdGlvbik7XG4gICAgICB3aW5kb3dbYCR7dGFiRWxlbWVudH1gK1wiVGFiXCJdID0gbmV3RWxlbWVudDtcbiAgICAgIHJldHVybiB3aW5kb3dbYCR7dGFiRWxlbWVudH1gK1wiVGFiXCJdO1xuICAgIH1cblxuICAgIGNyZWF0ZVRhYihcImluaWNpb1wiLCBpbmljaW9GdW5jdGlvblRhYi5jcmVhdGUpO1xuICAgIGNyZWF0ZVRhYihcIm1lbnVcIiwgbWVudUZ1bmN0aW9uVGFiLmNyZWF0ZSk7XG4gICAgY3JlYXRlVGFiKFwiY29udGFjdG9cIiwgY29udGFjdG9GdW5jdGlvblRhYi5jcmVhdGUpO1xuICAgIGNvbnNvbGUubG9nKGNyZWF0ZVRhYik7XG5cblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChpbmljaW9UYWIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51VGFiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdG9UYWIpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSAyMDIxIGRldkx1aXNUb3JyZXNcIlxuICAgIGNvbnN0IGdpdGh1YkxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBnaXRodWJMb2dvLnNyYyA9IGdpdExvZ287XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxvZ28pO1xuICAgIHJldHVybiBmb290ZXJcbiAgfVxuXG5yZXR1cm4ge0hlYWRlcixGb290ZXJ9XG59KSgpXG5cblxuXG5jb25zdCBwYXJlbnRDb250ZW50ID0gY29udGVudC5wYXJlbnROb2RlO1xucGFyZW50Q29udGVudC5pbnNlcnRCZWZvcmUoY3JlYXRlLkhlYWRlcigpLGNvbnRlbnQpO1xucGFyZW50Q29udGVudC5hcHBlbmRDaGlsZChjcmVhdGUuRm9vdGVyKCkpO1xuXG5pbmljaW9GdW5jdGlvblRhYi5jcmVhdGUoKTtcbiIsImltcG9ydCBpbWFnZW5Qb2xsbyBmcm9tIFwiLi9pbWFnZXMvQVNBRE9fRkFNSUxJQVIucG5nXCJcblxuY29uc3QgaW5pY2lvRnVuY3Rpb25UYWIgPSAoKCkgPT57XG5cbiAgICBjb25zdCBjcmVhdGUgPSAoKT0+e1xuICAgICAgICBlcmFzZSgpO1xuICAgICAgICBjb25zdCBpbmljaW9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5pY2lvQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RhYkNvbnRlbnQnKTtcbiAgICAgICAgY29uc3QgcG9sbGl0byA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwb2xsaXRvLnNyYyA9IGltYWdlblBvbGxvO1xuXG4gICAgICAgIGluaWNpb0NvbnRlbnQuaW5uZXJIVE1MID0gYEJpZW52ZW5pZG8gYSBLb2tvcmlrbywgXFxyXFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZGUgZW5jdWVudHJhcyBlbCBtZWpvciBwb2xsbyBkZWwgcGFpc1xcclxcbmBcbiAgICAgICAgaW5pY2lvQ29udGVudC5hcHBlbmRDaGlsZChwb2xsaXRvKTtcbiAgICAgICAgaW5pY2lvQ29udGVudC5pbm5lckhUTUwgKz1gXFxyXFxuRGVsIGNhbXBvIGEgdHUgbWVzYWA7XG4gICAgICAgIGluaWNpb0NvbnRlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aGl0ZS1zcGFjZTogcHJlLWxpbmUnKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChpbmljaW9Db250ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgY29uc3QgZXJhc2UgPSAoKSA9PiB7XG4gICAgICAgIGlmICghIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiQ29udGVudFwiKSl7XG4gICAgICAgIGNvbnN0IGluaWNpb0NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYkNvbnRlbnRcIik7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoaW5pY2lvQ29udGVudCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgXG4gICAgcmV0dXJuIHtjcmVhdGUgLCBlcmFzZX1cbn0pKClcblxuZXhwb3J0IHtpbmljaW9GdW5jdGlvblRhYiAsIGltYWdlblBvbGxvfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==