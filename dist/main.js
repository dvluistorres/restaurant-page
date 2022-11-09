"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NexaRustSlab.otf */ "./src/fonts/NexaRustSlab.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/chickenFace.png */ "./src/images/chickenFace.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/probaleBackground.png */ "./src/images/probaleBackground.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n@font-face {\n    font-family: 'NexaRustSlab';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('opentype');\n  }\n\n:root{\n    --kokored : #e22628;\n    --kokoback : #aa2224;\n    }\n\nbody{\n    background-color: var(--kokoback);\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-repeat: repeat;\n    background-size: 90px;\n    transform: rotate(45°);\n}\n\n#header{\n    display:flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 0px auto 32px auto;\n    padding-bottom: 10px;\n    padding-top: 10px;\n    background-color: white;\n    max-width: max(75%,780px);\n    width: 100%;\n    align-items: center;\n    height: 60px;\n    border-radius: 20px;\n    flex: 1;\n    background-color: rgba(255, 255, 255, 0.8);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    border: black solid 2px;\n    }\n\n#header img{\n    padding-left: 10px;\n    padding-bottom: 10px;\n}\n\n#header #tabs {\n    display:flex;\n    flex-direction: row;\n    gap: 16px;\n}\n\n#tabs .tab{\n    cursor: pointer;\n    font-family: NexaRustSlab , 'Courier New', Courier, monospace;\n    color: var(--kokored);\n    font-size: larger;\n    margin: auto 16px auto 16px;\n}\n\n#tabs .tab::after{\n    display: block;\n    content: \"\";\n    border-bottom: solid 1px var(--kokored);\n    padding-bottom: 1%;\n    transform: scaleX(0);\n    transition: transform 300ms ease-in-out;\n}\n\n#tabs .tab:hover::after{\n    transform: scaleX(1);\n}\n\n#inicioContent {\n    display:block;\n    flex-direction: column;\n    background-color: rgba(255, 255, 255, 0.8);\n    border: black solid 2px;\n    max-width: max(75%,780px);\n    width: 100%;\n    align-items: center;\n    border-radius: 20px;\n    margin: 0px auto 0px auto;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: var(--kokored);\n    text-align: center;\n    font-size: 24px;\n    font-weight: bold;\n    padding: 60px 0px 60px 0px;\n    margin-bottom: 30px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-position: 15px;\n}\n\n#inicioContent::first-line {\n    font-size: 30px;\n}\n\n#inicioContent img{\n    width: 60%;\n    margin-top: -5%;\n}\n\n#footer{\n    height: 45px;\n    background: #eee;\n    color: rgb(255, 255, 255);\n    flex: initial;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position:relative;\n    bottom:0;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100%;\n    }\n\n#footer img{\n    height: 30px;\n    cursor: pointer;\n}\n\n#menuContent {\n    display:flex;\n    flex-wrap: wrap;\n    background-color: rgba(255, 255, 255, 0.8);\n    border: black solid 2px;\n    max-width: max(75%,780px);\n    width: 100%;\n    justify-content: center;\n    border-radius: 20px;\n    margin: 0px auto 0px auto;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: var(--kokored);\n    text-align: center;\n    font-size: 24px;\n    font-weight: bold;\n    padding: 60px 0px 60px 0px;\n    margin-bottom: 30px;\n    gap: 20px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n#menuContent .bannerPromo{\n    width: 60%;\n}\n\n#menuContent .card{\n    display: flex;\n    border: 0.1px solid rgb(68, 68, 68);\n    border-radius: 10px;\n    background-color: white;\n    width: 350px;\n    background-color: var(--kokoback);\n    height: 150px;\n    text-align: left;\n}\n\n.card img{\n    width: 120px;\n    border-radius: 10px;\n    background-color: white;\n}\n\n.card .cardText{\n    white-space: pre-line;\n    color: white;\n    font-size: 12px;\n    font-weight: 400;\n    font-style: italic;\n    margin: auto 0px auto 0px;\n    padding-left: 10px;\n}\n\n.cardText .cardTitle{\n    font-size: 25px;\n    font-style: normal;\n    font-weight: bold;\n}\n\n.cardText .cardPrice{\n    font-size: 18px;\n    font-style: normal;\n    font-weight: bold;\n    margin: 5px 0px 5px 0px;\n}\n\n#contactoContent {\n    display:flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    background-color: rgba(255, 255, 255, 0.8);\n    border: black solid 2px;\n    max-width: max(75%,780px);\n    width: 100%;\n    justify-content: center;\n    border-radius: 20px;\n    margin: 0px auto 0px auto;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: var(--kokored);\n    text-align: center;\n    font-size: 24px;\n    font-weight: bold;\n    padding: 60px 0px 60px 0px;\n    margin-bottom: 30px;\n    gap: 20px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n#contactoContent .pideWhatsapp{\n    display: flex;\n    height: 320px;\n\n}\n\n.pideWhatsapp{\n    width: 100%;\n}\n\n.pideWhatsapp>img{\n    width: 50%;\n    height: 320px;\n}\n\n.pideWhatsapp>div>h3>img{\n    width: 25px;\n    height: fit-content;\n    cursor: pointer;\n    \n}\n\n.pideWhatsapp>div{\n    display: flex;\n    flex-direction: column;\n    padding: auto 10px auto 10px;\n    white-space: pre-line;\n    background-color: var(--kokored);\n    color: white;\n    width: 50%;\n    align-items: center;\n    justify-content: center;\n    gap: 30px;\n    font-size: 30px;\n}\n\n.pideWhatsapp p{\n    font-size: 18px;\n    font-weight: 600;\n    font-family: 'NexaRustSlab',sans-serif;\n}\n\n.pideWhatsapp button {\n    background-color: #f3f4f6;\n    border-radius: 100px;\n    color: #333238;\n    cursor: pointer;\n    display: inline-block;\n    font-family: 'NexaRustSlab',sans-serif;\n    padding: 7px 20px;\n    text-align: center;\n    text-decoration: none;\n    transition: all 250ms;\n    border: 0;\n    font-size: 16px;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    width: 150px;\n    flex: initial;\n    font-weight: bolder;\n  }\n\n  .pideWhatsapp button:hover{\n    box-shadow: #333238;\n    transform: scale(1.15);\n  }\n\n  #contactoContent .restaurantBanner{\n    width: 100%;\n  }\n\n#contactoContent .restaurantsDiv{\n    display: flex;\n}\n\n#contactoContent .restaurantsList{\n    height: 90vh;\n    overflow-y: auto;\n    overflow-x: hidden;\n    width: 352px;\n}\n\n#contactoContent .restaurantsList::-webkit-scrollbar{\n    width: 0px;\n}\n\n.restaurantsDiv>div>iframe{\n    width:100%;\n    height:90vh;\n    border:0;\n}\n\n.restaurantsDiv>div{\n    width: calc(100% - 352px)\n}\n\n#contactoContent .restaurantCard{\n    display: flex;\n    border: 0.1px solid rgb(68, 68, 68);\n    border-radius: 10px;\n    background-color: white;\n    width: 350px;\n    height: 180px;\n    text-align: left;\n    font-size: 16px;\n}\n\n.restaurantCard>div>div>img{\n    height: 16px;\n}\n\n.restaurantCard>div>div{\n    display: flex;\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n@font-face {\n    font-family: 'NexaRustSlab';\n    src: url('./fonts/NexaRustSlab.otf') format('opentype');\n  }\n\n:root{\n    --kokored : #e22628;\n    --kokoback : #aa2224;\n    }\n\nbody{\n    background-color: var(--kokoback);\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    flex-direction: column;\n    background-image: url(./images/chickenFace.png);\n    background-repeat: repeat;\n    background-size: 90px;\n    transform: rotate(45°);\n}\n\n#header{\n    display:flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 0px auto 32px auto;\n    padding-bottom: 10px;\n    padding-top: 10px;\n    background-color: white;\n    max-width: max(75%,780px);\n    width: 100%;\n    align-items: center;\n    height: 60px;\n    border-radius: 20px;\n    flex: 1;\n    background-color: rgba(255, 255, 255, 0.8);\n    background-image: url(./images/probaleBackground.png);\n    border: black solid 2px;\n    }\n\n#header img{\n    padding-left: 10px;\n    padding-bottom: 10px;\n}\n\n#header #tabs {\n    display:flex;\n    flex-direction: row;\n    gap: 16px;\n}\n\n#tabs .tab{\n    cursor: pointer;\n    font-family: NexaRustSlab , 'Courier New', Courier, monospace;\n    color: var(--kokored);\n    font-size: larger;\n    margin: auto 16px auto 16px;\n}\n\n#tabs .tab::after{\n    display: block;\n    content: \"\";\n    border-bottom: solid 1px var(--kokored);\n    padding-bottom: 1%;\n    transform: scaleX(0);\n    transition: transform 300ms ease-in-out;\n}\n\n#tabs .tab:hover::after{\n    transform: scaleX(1);\n}\n\n#inicioContent {\n    display:block;\n    flex-direction: column;\n    background-color: rgba(255, 255, 255, 0.8);\n    border: black solid 2px;\n    max-width: max(75%,780px);\n    width: 100%;\n    align-items: center;\n    border-radius: 20px;\n    margin: 0px auto 0px auto;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: var(--kokored);\n    text-align: center;\n    font-size: 24px;\n    font-weight: bold;\n    padding: 60px 0px 60px 0px;\n    margin-bottom: 30px;\n    background-image: url(./images/probaleBackground.png);\n    background-position: 15px;\n}\n\n#inicioContent::first-line {\n    font-size: 30px;\n}\n\n#inicioContent img{\n    width: 60%;\n    margin-top: -5%;\n}\n\n#footer{\n    height: 45px;\n    background: #eee;\n    color: rgb(255, 255, 255);\n    flex: initial;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position:relative;\n    bottom:0;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100%;\n    }\n\n#footer img{\n    height: 30px;\n    cursor: pointer;\n}\n\n#menuContent {\n    display:flex;\n    flex-wrap: wrap;\n    background-color: rgba(255, 255, 255, 0.8);\n    border: black solid 2px;\n    max-width: max(75%,780px);\n    width: 100%;\n    justify-content: center;\n    border-radius: 20px;\n    margin: 0px auto 0px auto;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: var(--kokored);\n    text-align: center;\n    font-size: 24px;\n    font-weight: bold;\n    padding: 60px 0px 60px 0px;\n    margin-bottom: 30px;\n    gap: 20px;\n    background-image: url(./images/probaleBackground.png);\n}\n\n#menuContent .bannerPromo{\n    width: 60%;\n}\n\n#menuContent .card{\n    display: flex;\n    border: 0.1px solid rgb(68, 68, 68);\n    border-radius: 10px;\n    background-color: white;\n    width: 350px;\n    background-color: var(--kokoback);\n    height: 150px;\n    text-align: left;\n}\n\n.card img{\n    width: 120px;\n    border-radius: 10px;\n    background-color: white;\n}\n\n.card .cardText{\n    white-space: pre-line;\n    color: white;\n    font-size: 12px;\n    font-weight: 400;\n    font-style: italic;\n    margin: auto 0px auto 0px;\n    padding-left: 10px;\n}\n\n.cardText .cardTitle{\n    font-size: 25px;\n    font-style: normal;\n    font-weight: bold;\n}\n\n.cardText .cardPrice{\n    font-size: 18px;\n    font-style: normal;\n    font-weight: bold;\n    margin: 5px 0px 5px 0px;\n}\n\n#contactoContent {\n    display:flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    background-color: rgba(255, 255, 255, 0.8);\n    border: black solid 2px;\n    max-width: max(75%,780px);\n    width: 100%;\n    justify-content: center;\n    border-radius: 20px;\n    margin: 0px auto 0px auto;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: var(--kokored);\n    text-align: center;\n    font-size: 24px;\n    font-weight: bold;\n    padding: 60px 0px 60px 0px;\n    margin-bottom: 30px;\n    gap: 20px;\n    background-image: url(./images/probaleBackground.png);\n}\n\n#contactoContent .pideWhatsapp{\n    display: flex;\n    height: 320px;\n\n}\n\n.pideWhatsapp{\n    width: 100%;\n}\n\n.pideWhatsapp>img{\n    width: 50%;\n    height: 320px;\n}\n\n.pideWhatsapp>div>h3>img{\n    width: 25px;\n    height: fit-content;\n    cursor: pointer;\n    \n}\n\n.pideWhatsapp>div{\n    display: flex;\n    flex-direction: column;\n    padding: auto 10px auto 10px;\n    white-space: pre-line;\n    background-color: var(--kokored);\n    color: white;\n    width: 50%;\n    align-items: center;\n    justify-content: center;\n    gap: 30px;\n    font-size: 30px;\n}\n\n.pideWhatsapp p{\n    font-size: 18px;\n    font-weight: 600;\n    font-family: 'NexaRustSlab',sans-serif;\n}\n\n.pideWhatsapp button {\n    background-color: #f3f4f6;\n    border-radius: 100px;\n    color: #333238;\n    cursor: pointer;\n    display: inline-block;\n    font-family: 'NexaRustSlab',sans-serif;\n    padding: 7px 20px;\n    text-align: center;\n    text-decoration: none;\n    transition: all 250ms;\n    border: 0;\n    font-size: 16px;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    width: 150px;\n    flex: initial;\n    font-weight: bolder;\n  }\n\n  .pideWhatsapp button:hover{\n    box-shadow: #333238;\n    transform: scale(1.15);\n  }\n\n  #contactoContent .restaurantBanner{\n    width: 100%;\n  }\n\n#contactoContent .restaurantsDiv{\n    display: flex;\n}\n\n#contactoContent .restaurantsList{\n    height: 90vh;\n    overflow-y: auto;\n    overflow-x: hidden;\n    width: 352px;\n}\n\n#contactoContent .restaurantsList::-webkit-scrollbar{\n    width: 0px;\n}\n\n.restaurantsDiv>div>iframe{\n    width:100%;\n    height:90vh;\n    border:0;\n}\n\n.restaurantsDiv>div{\n    width: calc(100% - 352px)\n}\n\n#contactoContent .restaurantCard{\n    display: flex;\n    border: 0.1px solid rgb(68, 68, 68);\n    border-radius: 10px;\n    background-color: white;\n    width: 350px;\n    height: 180px;\n    text-align: left;\n    font-size: 16px;\n}\n\n.restaurantCard>div>div>img{\n    height: 16px;\n}\n\n.restaurantCard>div>div{\n    display: flex;\n\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/contacto.js":
/*!*************************!*\
  !*** ./src/contacto.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactoFunctionTab": () => (/* binding */ contactoFunctionTab)
/* harmony export */ });
/* harmony import */ var _images_ochopresas_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/ochopresas.png */ "./src/images/ochopresas.png");
/* harmony import */ var _images_whatsapp_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/whatsapp-icon.png */ "./src/images/whatsapp-icon.png");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _images_chickenFace_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/chickenFace.png */ "./src/images/chickenFace.png");
/* harmony import */ var _images_restaurantBanner_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/restaurantBanner.png */ "./src/images/restaurantBanner.png");
/* harmony import */ var _images_phone_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/phone-svgrepo-com.svg */ "./src/images/phone-svgrepo-com.svg");
/* harmony import */ var _images_clock_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/clock-svgrepo-com.svg */ "./src/images/clock-svgrepo-com.svg");
/* harmony import */ var _images_calendar_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/calendar-svgrepo-com.svg */ "./src/images/calendar-svgrepo-com.svg");









const contactoFunctionTab = (() =>{
    const create = ()=>{
        erase();
        const contactoContent = document.createElement("div");
        contactoContent.setAttribute('id', 'contactoContent');
        
        const pideWhatsapp = document.createElement("div");
        pideWhatsapp.setAttribute("class","pideWhatsapp");
        const combo8Presas = new Image();
        combo8Presas.src = _images_ochopresas_png__WEBPACK_IMPORTED_MODULE_0__;
        const domicilioTitulo = document.createElement("h3");
        const whatsappPng = new Image();
        whatsappPng.src = _images_whatsapp_icon_png__WEBPACK_IMPORTED_MODULE_1__;
        domicilioTitulo.addEventListener("click", ()=>{
            window.open("https://api.whatsapp.com/send?phone=573004100111&text=Hola!%20quiero%20un%20rico%20pollo", '_blank');
         });
        const bannerRight = document.createElement("div");
        domicilioTitulo.innerHTML="DOMICILIOS:\r\n";
        domicilioTitulo.appendChild(whatsappPng);
        domicilioTitulo.innerHTML += "+57 300 410 0111";
        const fraseRico = document.createElement("p");
        fraseRico.textContent = "NADA MÁS RICO\r\nQUE COMER EN KOKORIKO"
        const pideBtn = document.createElement("button");
        pideBtn.addEventListener("click",_menu__WEBPACK_IMPORTED_MODULE_2__.menuFunctionTab.create);
        pideBtn.innerText = "PIDE AQUI";
        bannerRight.appendChild(domicilioTitulo);
        bannerRight.appendChild(fraseRico);
        bannerRight.appendChild(pideBtn);
        pideWhatsapp.appendChild(combo8Presas);
        pideWhatsapp.appendChild(bannerRight);
        contactoContent.appendChild(pideWhatsapp);

        const restaurantBanner = new Image();
        restaurantBanner.src = _images_restaurantBanner_png__WEBPACK_IMPORTED_MODULE_4__
        restaurantBanner.setAttribute("class","restaurantBanner");
        contactoContent.appendChild(restaurantBanner);

        const restaurants = [
            [
                "AEROPUERTO",
                "Edificio crespo 70Cartagena, Bolívar",
                "6628111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "AEROPUERTO ALFONSO B.",
                "Aeropuerto Alfonso Bonilla AragonPalmira, Valle del Cauca",
                "2727724",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "AL PASO CALLE 71",
                "Calle 71 #9-06Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "ARMENIA I",
                "Carrera 14 #10-85Armenia, Quindio",
                "7469920",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "ARMENIA II",
                "Carrera 14 #16-58Armenia, Quindio",
                "7469920",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "AV VENEZUELA",
                "Calle 33 #9-64Cartagena, Bolívar",
                "6628111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "BOCAGRANDE",
                "Carrera 2 #8-13Cartagena, Bolívar",
                "6628111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "BOSQUE",
                "Diagonal 21 #45A-19Cartagena, Bolívar",
                "6628111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "BUENAVENTURA",
                "Calle 2 #2-05Buenaventura, Valle del Cauca",
                "6028881111",
                " 11:00 AM - 10:00 PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "BUENAVISTA",
                "Calle 29a #9A-14Santa Marta, Magdalena",
                "4220111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "BUENAVISTA",
                "Centro Comercial BuenavistaBarranquilla, Atlántico",
                "3571121",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CAFAM FLORESTA",
                "Avenida Carrera 68 #96-50Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CALLE 125",
                "Avenida 19 #125-17Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CAPITAL TOWER",
                "Avenida Calle 24 #51-40Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CC Los molinos",
                "Calle 30A # 82A-26Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CC Puerta del norte",
                "Diagonal 55 #34-67Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CC San diego",
                "Calle 33 #42B-06Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CC Santafé",
                "Carrera 43A #7-117Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CC Unicentro",
                "Carrera 66B #43A-76Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CENTRO",
                "Carrera 6 #10-41Cali, Valle del Cauca",
                "8881111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CENTRO CHIA",
                "Avenida Pradilla #9-00 EsteBogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CITYPLAZA",
                "Calle 36D SUR #27A-105Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CIUDAD 2000",
                "Carrera 68 #25-12Cali, Valle del Cauca",
                "8881111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "COLINA CAMPESTRE",
                "Calle 138 #55-85Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "COLON",
                "Carrera 1 Calle 61a-30Cali, Valle del Cauca",
                "8881111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CORFERIAS",
                "Carrera 37 #24-67Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "CRESPO",
                "Calle 70 #1D-11Cartagena, Bolívar",
                "6628111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "Cucuta Aventura",
                "Aventura PlazaCúcuta, Norte de Santander",
                "5756671",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "EL PROGRESO",
                "Carrera 16 #38-130Dosquebradas, Risaralda",
                "3242400",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "ENVIGADO",
                "Carrera 42 #38S-56Envigado, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "FERIA EXPOSICION",
                "Avenida Calle 24 #36-09Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "FONTANAR",
                "Avenida Cajica #143-78Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "FONTIBON",
                "Carrera 100 #20C-32Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "GALERIAS",
                "Carrera 24 # 52-85Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "GIRARDOT",
                "Calle 20 #10-27Girardot, Cundinamarca",
                "8330206",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "HOMECENTER  170",
                "Carrera 45 #175-50Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "HOMECENTER  80",
                "Avenida 68 #80-70Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "IBAGUÉ I",
                "Carrera 3 #11A-43Ibagué, Tolima",
                "2655111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "IBAGUÉ II",
                "Carrera 5 #43-55Ibagué, Tolima",
                "2655111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "ILARCO",
                "Avenida Suba #114A-88Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "Itagui",
                "Carrera 50 #50-68Itagui, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "JARDIN PLAZA",
                "Carrera 98 #16-200Cali, Valle del Cauca",
                "8881111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "KENNEDY",
                "Carrera 78B #38b-02 SurBogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "LAGO",
                "Calle 24 #7-29Pereira, Risaralda",
                "3242400",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "LAS VILLAS",
                "Calle 128A #54-50Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "Laureles",
                "Carrera 76 #33A-35Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "LIDO",
                "Calle 5 #45-20Cali, Valle del Cauca",
                "8881111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "MELGAR",
                "Calle 5 BIS #25A-30Melgar, Tolima",
                "2450246",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "MERCED",
                "Avenida 3 Norte #47C-06Cali, Valle del Cauca",
                "8881111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "MULTIDRIVE",
                "Carrera 59 #152B-75Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "OBELISCO",
                "Carrera 74 #48-53Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "Oriental",
                "Carrera 46 #49A-43Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "PALATINO",
                "Carrera 7 #139-09Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "PALMIRA",
                "Calle 30 #30-72Palmira, Valle del Cauca",
                "6028881111",
                " 11:00 AM - 10:00 PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "PANCE",
                "Calle 18 #121-451Cali, Valle del Cauca",
                "8881111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "PARQUE 43",
                "Calle 42 #9-85Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "PASEO BOLIVAR",
                "Avenida 4N #10N-130Cali, Valle del Cauca",
                "8881111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "Poblado",
                "Carrera 36 #10-62Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "PUENTE AEREO",
                "Calle 26 #106-28Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "RESTREPO",
                "Calle 16 #18-44 SurBogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "Rionegro",
                "Calle 43 #54-139Rionegro, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "RODADERO",
                "Calle 6 #1-64Santa Marta, Magdalena",
                "4220111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "SALITRE PLAZA",
                "Carrera 68B #40-39Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "SAN DIEGO",
                "Carrera 7 #24-02Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "SANCANCIO",
                "Carrera 27A #66-30Manizales, Caldas",
                "8876790",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "SANTA ISABEL",
                "Carrera 27 #1C-14Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "Terminal",
                "Carrera 64C #78-440Medellin, Antioquia",
                "4442020",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "TUNJA",
                "Calle 42A #1ATunja, Boyacá",
                "3144530309",
                " 11:00 AM - 10:00 PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "UNIABASTOS",
                "UniabastosCota, Cundinamarca",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "UNICENTRO",
                "Carrera 15 #124-30Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "Unicentro pereira",
                "Avenida 30 De Agosto #75-51Pereira, Risaralda",
                "3242400",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "USAQUEN",
                "Calle 119 #7-54Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "VILLA ALSACIA",
                "Calle 12B #71d-61Bogotá",
                "4100111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "VILLAVICENCIO  CENTRO",
                "Calle 38 #30a-88Villavicencio, Meta",
                "6821111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "VIVA VILLAVICENCIO",
                "Calle 7 #45-185Villavicencio, Meta",
                "6821111",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ],
            [
                "YOPAL",
                "Carrera 29 #14-47Yopal, Casanare",
                "6333100",
                " 11:00AM - 10:00PM",
                "Lun, Mar, Mie, Jue, Vie, Sab, Dom"
            ]
        ]
        
        const restaurantsDiv = document.createElement("div");
        restaurantsDiv.setAttribute("class","restaurantsDiv");
        const restaurantsList = document.createElement("div");
        restaurantsList.setAttribute("class","restaurantsList");
        const restaurantMap = document.createElement("div");
        for (const restaurant of restaurants){
            const restaurantCard = document.createElement("div");
            const restaurantInfo = document.createElement("div");
            const restaurantName = document.createElement("div");
            const restaurantAdress = document.createElement("div");
            const restaurantPhone = document.createElement("div");
            const restaurantPhoneText = document.createElement("p");
            const phoneImg = new Image();
            phoneImg.src = _images_phone_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_5__;
            restaurantPhone.appendChild(phoneImg);
            restaurantPhone.appendChild(restaurantPhoneText);
            const restaurantHours = document.createElement("div");
            const restaurantHoursText = document.createElement("p");
            const clockImg = new Image();
            clockImg.src = _images_clock_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_6__;
            restaurantHours.appendChild(clockImg);
            restaurantHours.appendChild(restaurantHoursText);
            const restaurantDays = document.createElement("div");
            const restaurantDaysText = document.createElement("p");
            const calendarImg = new Image();
            calendarImg.src = _images_calendar_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_7__;
            restaurantDays.appendChild(calendarImg);
            restaurantDays.appendChild(restaurantDaysText);
            restaurantName.textContent += restaurant[0];
            restaurantAdress.textContent += restaurant[1];
            restaurantPhoneText.textContent += restaurant[2];
            restaurantHoursText.textContent += restaurant[3];
            restaurantDaysText.textContent += restaurant[4];
            restaurantInfo.append(restaurantName , restaurantAdress , restaurantPhone , restaurantHours , restaurantDays);
            const chickenFace = new Image();
            chickenFace.src = _images_chickenFace_png__WEBPACK_IMPORTED_MODULE_3__;
            restaurantCard.appendChild(chickenFace);
            restaurantCard.appendChild(restaurantInfo);
            restaurantCard.setAttribute("class","restaurantCard");
            restaurantsList.appendChild(restaurantCard);
        }
        const map2 = document.createElement("iframe");
        map2.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126914.3295750815!2d-75.64573068313165!3d6.254139314010602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428562b9e8f0f%3A0xae20d955e506c981!2sKokoriko%20Oriental!5e0!3m2!1ses!2sco!4v1668001835209!5m2!1ses!2sco");
        restaurantMap.appendChild(map2);
        restaurantsDiv.appendChild(restaurantsList);
        restaurantsDiv.appendChild(restaurantMap);
        contactoContent.appendChild(restaurantsDiv);

        content.appendChild(contactoContent);
        };
        
    const erase = () => {
        const toBeRemoved = document.getElementById("content").firstChild;
        content.removeChild(toBeRemoved);
    }

    
    return {create , erase}
})()



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_logoRed_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logoRed.png */ "./src/images/logoRed.png");
/* harmony import */ var _images_github_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/github.png */ "./src/images/github.png");
/* harmony import */ var _inicio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio */ "./src/inicio.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contacto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacto */ "./src/contacto.js");
/* harmony import */ var _images_fondoBanner_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/fondoBanner.png */ "./src/images/fondoBanner.png");
console.log("runing webpcket");









const content = document.getElementById("content");

const create = (() => {
  function Header() {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const myLogo = new Image();
    myLogo.src = _images_logoRed_png__WEBPACK_IMPORTED_MODULE_1__;
    header.appendChild(myLogo);

    const tabs = document.createElement("div");
    tabs.setAttribute("id","tabs")

    function createTab(tabElement , tabFunction){
      const newElement = document.createElement('h3');
      newElement.textContent = tabElement.toUpperCase();
      newElement.setAttribute('class', 'tab');
      newElement.setAttribute('id', `${tabElement}Tab`);
      newElement.addEventListener("click",tabFunction);
      window[`${tabElement}`+"Tab"] = newElement;
      return window[`${tabElement}`+"Tab"];
    }

    createTab("inicio", _inicio__WEBPACK_IMPORTED_MODULE_3__.inicioFunctionTab.create);
    createTab("menu", _menu__WEBPACK_IMPORTED_MODULE_4__.menuFunctionTab.create);
    createTab("contacto", _contacto__WEBPACK_IMPORTED_MODULE_5__.contactoFunctionTab.create);


    tabs.appendChild(inicioTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactoTab);

    header.appendChild(tabs);

    return header;
  }

  function Footer() {
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');
    footer.textContent = "Copyright © 2021 devLuisTorres"
    const githubLogo = new Image();
    githubLogo.src = _images_github_png__WEBPACK_IMPORTED_MODULE_2__;
    footer.appendChild(githubLogo);
    return footer
  }

return {Header,Footer}
})()




const parentContent = content.parentNode;
parentContent.insertBefore(create.Header(),content);
parentContent.appendChild(create.Footer());

_inicio__WEBPACK_IMPORTED_MODULE_3__.inicioFunctionTab.create();


/***/ }),

/***/ "./src/inicio.js":
/*!***********************!*\
  !*** ./src/inicio.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inicioFunctionTab": () => (/* binding */ inicioFunctionTab)
/* harmony export */ });
/* harmony import */ var _images_ASADO_FAMILIAR_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/ASADO_FAMILIAR.png */ "./src/images/ASADO_FAMILIAR.png");


const inicioFunctionTab = (() =>{

    const create = ()=>{
        erase();
        const inicioContent = document.createElement("div");
        inicioContent.setAttribute('id', 'inicioContent');
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
        const toBeRemoved = document.getElementById("content").firstChild;
        if (!!toBeRemoved){
        content.removeChild(toBeRemoved);
        };
    }

    
    return {create , erase}
})()



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuFunctionTab": () => (/* binding */ menuFunctionTab)
/* harmony export */ });
/* harmony import */ var _images_ASADO_FAMILIAR_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/ASADO_FAMILIAR.png */ "./src/images/ASADO_FAMILIAR.png");
/* harmony import */ var _images_KOMBY_ASADO_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/KOMBY_ASADO.png */ "./src/images/KOMBY_ASADO.png");
/* harmony import */ var _images_ochopresas_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/ochopresas.png */ "./src/images/ochopresas.png");
/* harmony import */ var _images_BowlBBQ_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/BowlBBQ.png */ "./src/images/BowlBBQ.png");
/* harmony import */ var _images_ensalada_pollo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/ensalada_pollo.png */ "./src/images/ensalada_pollo.png");
/* harmony import */ var _images_bannerPromocion_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/bannerPromocion.png */ "./src/images/bannerPromocion.png");







const menuFunctionTab = (() =>{
    const create = ()=>{
        erase();
        const tabContent = document.createElement("div");
        tabContent.setAttribute("id","menuContent");

        const bannerPromo = new Image();
        bannerPromo.src = _images_bannerPromocion_png__WEBPACK_IMPORTED_MODULE_5__;
        bannerPromo.setAttribute("class","bannerPromo")
        tabContent.appendChild(bannerPromo);

        let dish = class {
            constructor(title , price , description, image) {
              this.title = title;
              this.price = price;
              this.description = description;
              this.image = image;
              dishes.push(this);
              };
            }
        
        const dishes = [];
        const comboFasado = new dish ("Combo familiar asado", "$59,900 COP" , "El tradicional y único sabor del Kokoriko Asado para compartir. 1 y 1/2 Kokoriko asado (12 presas) + veinte (20) arepas y 3 und de ají.",_images_ASADO_FAMILIAR_png__WEBPACK_IMPORTED_MODULE_0__);
        const kombiAsado = new dish ("Kombi asado", "$20,900 COP", "Dos (2) presas de Kokoriko asado, fríjol con carne molida, arroz, una (1) arepa, una (1) Coca-Cola 400 ml y 1 und de ají. Precio válido únicamente para el canal de domicilios.",_images_KOMBY_ASADO_png__WEBPACK_IMPORTED_MODULE_1__);
        const combo8Presas = new dish ("Combo 8 presas","$42,900 COP","Ocho (8) presas de kokorikronch sin acompañamientos y 4 und de miel",_images_ochopresas_png__WEBPACK_IMPORTED_MODULE_2__);
        const bowlBbq = new dish ("Bowl BBQ","$25,900 COP","Siete (7) trozos de pollo kronch bañados en nuestra salsa BBQ, acompañados de aguacate y pico de gallo, arroz a elección y papa de la casa o yuca.",_images_BowlBBQ_png__WEBPACK_IMPORTED_MODULE_3__);
        const ensaladaPollo = new dish ("Ensalada con pollo","$23,900 COP","Filete de pechuga a la plancha de 90 g, mix de lechuga romana y crespa, tomate, queso mozzarella, jamón, maíz dulce, aguacate, cilantro y vinagreta.",_images_ensalada_pollo_png__WEBPACK_IMPORTED_MODULE_4__);

        function createCards () {
            for (const dish of dishes){
                const card = document.createElement("div");
                card.setAttribute("class","card");
                const menuPicture = new Image();
                menuPicture.src = dish.image;
                const cardText = document.createElement("div");
                cardText.setAttribute("class","cardText");
                const cardTitle = document.createElement("div");
                cardTitle.setAttribute("class","cardTitle");
                cardTitle.textContent = dish.title;
                const cardPrice = document.createElement("div");
                cardPrice.setAttribute("class","cardPrice");
                cardPrice.textContent = dish.price;
                const cardDescription = document.createElement("div");
                cardDescription.setAttribute("class","cardDescription");
                cardDescription.textContent = dish.description;
                cardText.append(cardTitle , cardPrice , cardDescription);
                card.appendChild(menuPicture);
                card.appendChild(cardText);
                tabContent.appendChild(card);
            }
        }
        createCards();

        content.appendChild(tabContent);
    }
    const erase = () => {
        const toBeRemoved = document.getElementById("content").firstChild;
        content.removeChild(toBeRemoved);
    }

    
    return {create , erase}
})()



/***/ }),

/***/ "./src/fonts/NexaRustSlab.otf":
/*!************************************!*\
  !*** ./src/fonts/NexaRustSlab.otf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc993ff31282171241b7.otf";

/***/ }),

/***/ "./src/images/ASADO_FAMILIAR.png":
/*!***************************************!*\
  !*** ./src/images/ASADO_FAMILIAR.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff7e6490b5177936cef3.png";

/***/ }),

/***/ "./src/images/BowlBBQ.png":
/*!********************************!*\
  !*** ./src/images/BowlBBQ.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "463bb7cc4c5f287840d7.png";

/***/ }),

/***/ "./src/images/KOMBY_ASADO.png":
/*!************************************!*\
  !*** ./src/images/KOMBY_ASADO.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3165908813ded3f38d1.png";

/***/ }),

/***/ "./src/images/bannerPromocion.png":
/*!****************************************!*\
  !*** ./src/images/bannerPromocion.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "767aa771cbf76114b2ba.png";

/***/ }),

/***/ "./src/images/calendar-svgrepo-com.svg":
/*!*********************************************!*\
  !*** ./src/images/calendar-svgrepo-com.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e782aa664a611fb0508.svg";

/***/ }),

/***/ "./src/images/chickenFace.png":
/*!************************************!*\
  !*** ./src/images/chickenFace.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fc3bdba80a62d8292a2.png";

/***/ }),

/***/ "./src/images/clock-svgrepo-com.svg":
/*!******************************************!*\
  !*** ./src/images/clock-svgrepo-com.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c299b07c0b304ac06ae.svg";

/***/ }),

/***/ "./src/images/ensalada_pollo.png":
/*!***************************************!*\
  !*** ./src/images/ensalada_pollo.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "413ae79df10efc4bb4bb.png";

/***/ }),

/***/ "./src/images/fondoBanner.png":
/*!************************************!*\
  !*** ./src/images/fondoBanner.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a3d6b1ac22d3d9387ca.png";

/***/ }),

/***/ "./src/images/github.png":
/*!*******************************!*\
  !*** ./src/images/github.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69ffd9cd5a846c976177.png";

/***/ }),

/***/ "./src/images/logoRed.png":
/*!********************************!*\
  !*** ./src/images/logoRed.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb3ae04e3a62e253e118.png";

/***/ }),

/***/ "./src/images/ochopresas.png":
/*!***********************************!*\
  !*** ./src/images/ochopresas.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf4007d758c80c067295.png";

/***/ }),

/***/ "./src/images/phone-svgrepo-com.svg":
/*!******************************************!*\
  !*** ./src/images/phone-svgrepo-com.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1bfb2a2ca96ff57b4b0.svg";

/***/ }),

/***/ "./src/images/probaleBackground.png":
/*!******************************************!*\
  !*** ./src/images/probaleBackground.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c2fbdc0bf8ee4e022c7b.png";

/***/ }),

/***/ "./src/images/restaurantBanner.png":
/*!*****************************************!*\
  !*** ./src/images/restaurantBanner.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "884d9731fe121837ea7d.png";

/***/ }),

/***/ "./src/images/whatsapp-icon.png":
/*!**************************************!*\
  !*** ./src/images/whatsapp-icon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33fa6b3c40d3db33c02b.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcs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QUFDTTtBQUNXO0FBQ0Y7QUFDQTtBQUNNOztBQUU5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbURBQWU7QUFDMUM7QUFDQTtBQUNBLDBCQUEwQixzREFBVztBQUNyQztBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHlEQUFzQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQix5REFBYTtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMERBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwREFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDZEQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvREFBTztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL25CRDtBQUNxQjtBQUNzQjtBQUNEO0FBQ0c7QUFDSjtBQUNRO0FBQ007OztBQUd2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixnREFBTztBQUN4Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQix1QkFBdUIsV0FBVztBQUNsQzs7QUFFQSx3QkFBd0IsNkRBQXdCO0FBQ2hELHNCQUFzQix5REFBc0I7QUFDNUMsMEJBQTBCLGlFQUEwQjs7O0FBR3BEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsK0NBQU87QUFDNUI7QUFDQTtBQUNBOztBQUVBLFFBQVE7QUFDUixDQUFDOzs7OztBQUtEO0FBQ0E7QUFDQTs7QUFFQSw2REFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRTZCOztBQUVyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVEQUFXOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QndEO0FBQ0o7QUFDQztBQUNSO0FBQ2E7QUFDQTs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQix3REFBZTtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3TkFBd04sdURBQWM7QUFDdE8scVBBQXFQLG9EQUFhO0FBQ2xRLDRJQUE0SSxtREFBZTtBQUMzSixnTkFBZ04sZ0RBQVU7QUFDMU4sa09BQWtPLHVEQUFnQjs7QUFFbFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RvLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pY2lvLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL05leGFSdXN0U2xhYi5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jaGlja2VuRmFjZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9wcm9iYWxlQmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTmV4YVJ1c3RTbGFiJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXG4gIH1cXG5cXG46cm9vdHtcXG4gICAgLS1rb2tvcmVkIDogI2UyMjYyODtcXG4gICAgLS1rb2tvYmFjayA6ICNhYTIyMjQ7XFxuICAgIH1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1rb2tvYmFjayk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDkwcHg7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1wrApO1xcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAwcHggYXV0byAzMnB4IGF1dG87XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1heC13aWR0aDogbWF4KDc1JSw3ODBweCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAycHg7XFxuICAgIH1cXG5cXG4jaGVhZGVyIGltZ3tcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI2hlYWRlciAjdGFicyB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4jdGFicyAudGFie1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBOZXhhUnVzdFNsYWIgLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICAgIGNvbG9yOiB2YXIoLS1rb2tvcmVkKTtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICAgIG1hcmdpbjogYXV0byAxNnB4IGF1dG8gMTZweDtcXG59XFxuXFxuI3RhYnMgLnRhYjo6YWZ0ZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLWtva29yZWQpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiN0YWJzIC50YWI6aG92ZXI6OmFmdGVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG59XFxuXFxuI2luaWNpb0NvbnRlbnQge1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMnB4O1xcbiAgICBtYXgtd2lkdGg6IG1heCg3NSUsNzgwcHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bztcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0ta29rb3JlZCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNjBweCAwcHggNjBweCAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE1cHg7XFxufVxcblxcbiNpbmljaW9Db250ZW50OjpmaXJzdC1saW5lIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4jaW5pY2lvQ29udGVudCBpbWd7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIG1hcmdpbi10b3A6IC01JTtcXG59XFxuXFxuI2Zvb3RlcntcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmbGV4OiBpbml0aWFsO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIGJvdHRvbTowO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuI2Zvb3RlciBpbWd7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbWVudUNvbnRlbnQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcXG4gICAgbWF4LXdpZHRoOiBtYXgoNzUlLDc4MHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1rb2tvcmVkKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA2MHB4IDBweCA2MHB4IDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG4jbWVudUNvbnRlbnQgLmJhbm5lclByb21ve1xcbiAgICB3aWR0aDogNjAlO1xcbn1cXG5cXG4jbWVudUNvbnRlbnQgLmNhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogMC4xcHggc29saWQgcmdiKDY4LCA2OCwgNjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1rb2tvYmFjayk7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5jYXJkIGltZ3tcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNhcmQgLmNhcmRUZXh0e1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIG1hcmdpbjogYXV0byAwcHggYXV0byAwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLmNhcmRUZXh0IC5jYXJkVGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNhcmRUZXh0IC5jYXJkUHJpY2V7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XFxufVxcblxcbiNjb250YWN0b0NvbnRlbnQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcXG4gICAgbWF4LXdpZHRoOiBtYXgoNzUlLDc4MHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1rb2tvcmVkKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA2MHB4IDBweCA2MHB4IDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG4jY29udGFjdG9Db250ZW50IC5waWRlV2hhdHNhcHB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuXFxufVxcblxcbi5waWRlV2hhdHNhcHB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGlkZVdoYXRzYXBwPmltZ3tcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG59XFxuXFxuLnBpZGVXaGF0c2FwcD5kaXY+aDM+aW1ne1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG59XFxuXFxuLnBpZGVXaGF0c2FwcD5kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IGF1dG8gMTBweCBhdXRvIDEwcHg7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta29rb3JlZCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ucGlkZVdoYXRzYXBwIHB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1mYW1pbHk6ICdOZXhhUnVzdFNsYWInLHNhbnMtc2VyaWY7XFxufVxcblxcbi5waWRlV2hhdHNhcHAgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIGNvbG9yOiAjMzMzMjM4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1mYW1pbHk6ICdOZXhhUnVzdFNsYWInLHNhbnMtc2VyaWY7XFxuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGZsZXg6IGluaXRpYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB9XFxuXFxuICAucGlkZVdoYXRzYXBwIGJ1dHRvbjpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogIzMzMzIzODtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gIH1cXG5cXG4gICNjb250YWN0b0NvbnRlbnQgLnJlc3RhdXJhbnRCYW5uZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiNjb250YWN0b0NvbnRlbnQgLnJlc3RhdXJhbnRzRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jY29udGFjdG9Db250ZW50IC5yZXN0YXVyYW50c0xpc3R7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgICB3aWR0aDogMzUycHg7XFxufVxcblxcbiNjb250YWN0b0NvbnRlbnQgLnJlc3RhdXJhbnRzTGlzdDo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxuICAgIHdpZHRoOiAwcHg7XFxufVxcblxcbi5yZXN0YXVyYW50c0Rpdj5kaXY+aWZyYW1le1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6OTB2aDtcXG4gICAgYm9yZGVyOjA7XFxufVxcblxcbi5yZXN0YXVyYW50c0Rpdj5kaXZ7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNTJweClcXG59XFxuXFxuI2NvbnRhY3RvQ29udGVudCAucmVzdGF1cmFudENhcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogMC4xcHggc29saWQgcmdiKDY4LCA2OCwgNjgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5yZXN0YXVyYW50Q2FyZD5kaXY+ZGl2PmltZ3tcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4ucmVzdGF1cmFudENhcmQ+ZGl2PmRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLCtEQUF1RDtFQUN6RDs7QUFFRjtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEI7O0FBRUo7SUFDSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlEQUErQztJQUMvQyx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLE9BQU87SUFDUCwwQ0FBMEM7SUFDMUMseURBQXFEO0lBQ3JELHVCQUF1QjtJQUN2Qjs7QUFFSjtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFD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SSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsU0FBUztJQUNULGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUY7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsUUFBUTtBQUNaOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7O0FBRWpCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTmV4YVJ1c3RTbGFiJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvTmV4YVJ1c3RTbGFiLm90ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcXG4gIH1cXG5cXG46cm9vdHtcXG4gICAgLS1rb2tvcmVkIDogI2UyMjYyODtcXG4gICAgLS1rb2tvYmFjayA6ICNhYTIyMjQ7XFxuICAgIH1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1rb2tvYmFjayk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvY2hpY2tlbkZhY2UucG5nKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA5MHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NcKwKTtcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMHB4IGF1dG8gMzJweCBhdXRvO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXgtd2lkdGg6IG1heCg3NSUsNzgwcHgpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9wcm9iYWxlQmFja2dyb3VuZC5wbmcpO1xcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcXG4gICAgfVxcblxcbiNoZWFkZXIgaW1ne1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jaGVhZGVyICN0YWJzIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDE2cHg7XFxufVxcblxcbiN0YWJzIC50YWJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IE5leGFSdXN0U2xhYiAsICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcXG4gICAgY29sb3I6IHZhcigtLWtva29yZWQpO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG4gICAgbWFyZ2luOiBhdXRvIDE2cHggYXV0byAxNnB4O1xcbn1cXG5cXG4jdGFicyAudGFiOjphZnRlcntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggdmFyKC0ta29rb3JlZCk7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxJTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI3RhYnMgLnRhYjpob3Zlcjo6YWZ0ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbn1cXG5cXG4jaW5pY2lvQ29udGVudCB7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAycHg7XFxuICAgIG1heC13aWR0aDogbWF4KDc1JSw3ODBweCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1rb2tvcmVkKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA2MHB4IDBweCA2MHB4IDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3Byb2JhbGVCYWNrZ3JvdW5kLnBuZyk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE1cHg7XFxufVxcblxcbiNpbmljaW9Db250ZW50OjpmaXJzdC1saW5lIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4jaW5pY2lvQ29udGVudCBpbWd7XFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIG1hcmdpbi10b3A6IC01JTtcXG59XFxuXFxuI2Zvb3RlcntcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmbGV4OiBpbml0aWFsO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIGJvdHRvbTowO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuI2Zvb3RlciBpbWd7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbWVudUNvbnRlbnQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDJweDtcXG4gICAgbWF4LXdpZHRoOiBtYXgoNzUlLDc4MHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweCBhdXRvO1xcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1rb2tvcmVkKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiA2MHB4IDBweCA2MHB4IDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvcHJvYmFsZUJhY2tncm91bmQucG5nKTtcXG59XFxuXFxuI21lbnVDb250ZW50IC5iYW5uZXJQcm9tb3tcXG4gICAgd2lkdGg6IDYwJTtcXG59XFxuXFxuI21lbnVDb250ZW50IC5jYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkIHJnYig2OCwgNjgsIDY4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0ta29rb2JhY2spO1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uY2FyZCBpbWd7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jYXJkIC5jYXJkVGV4dHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBtYXJnaW46IGF1dG8gMHB4IGF1dG8gMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5jYXJkVGV4dCAuY2FyZFRpdGxle1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jYXJkVGV4dCAuY2FyZFByaWNle1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogNXB4IDBweCA1cHggMHB4O1xcbn1cXG5cXG4jY29udGFjdG9Db250ZW50IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAycHg7XFxuICAgIG1heC13aWR0aDogbWF4KDc1JSw3ODBweCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bztcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0ta29rb3JlZCk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogNjBweCAwcHggNjBweCAwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL3Byb2JhbGVCYWNrZ3JvdW5kLnBuZyk7XFxufVxcblxcbiNjb250YWN0b0NvbnRlbnQgLnBpZGVXaGF0c2FwcHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG5cXG59XFxuXFxuLnBpZGVXaGF0c2FwcHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5waWRlV2hhdHNhcHA+aW1ne1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDMyMHB4O1xcbn1cXG5cXG4ucGlkZVdoYXRzYXBwPmRpdj5oMz5pbWd7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ucGlkZVdoYXRzYXBwPmRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogYXV0byAxMHB4IGF1dG8gMTBweDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1rb2tvcmVkKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5waWRlV2hhdHNhcHAgcHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LWZhbWlseTogJ05leGFSdXN0U2xhYicsc2Fucy1zZXJpZjtcXG59XFxuXFxuLnBpZGVXaGF0c2FwcCBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY2O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgY29sb3I6ICMzMzMyMzg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LWZhbWlseTogJ05leGFSdXN0U2xhYicsc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogN3B4IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXM7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgZmxleDogaW5pdGlhbDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIH1cXG5cXG4gIC5waWRlV2hhdHNhcHAgYnV0dG9uOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAjMzMzMjM4O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xcbiAgfVxcblxcbiAgI2NvbnRhY3RvQ29udGVudCAucmVzdGF1cmFudEJhbm5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuI2NvbnRhY3RvQ29udGVudCAucmVzdGF1cmFudHNEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNjb250YWN0b0NvbnRlbnQgLnJlc3RhdXJhbnRzTGlzdHtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIHdpZHRoOiAzNTJweDtcXG59XFxuXFxuI2NvbnRhY3RvQ29udGVudCAucmVzdGF1cmFudHNMaXN0Ojotd2Via2l0LXNjcm9sbGJhcntcXG4gICAgd2lkdGg6IDBweDtcXG59XFxuXFxuLnJlc3RhdXJhbnRzRGl2PmRpdj5pZnJhbWV7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDo5MHZoO1xcbiAgICBib3JkZXI6MDtcXG59XFxuXFxuLnJlc3RhdXJhbnRzRGl2PmRpdntcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDM1MnB4KVxcbn1cXG5cXG4jY29udGFjdG9Db250ZW50IC5yZXN0YXVyYW50Q2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCByZ2IoNjgsIDY4LCA2OCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLnJlc3RhdXJhbnRDYXJkPmRpdj5kaXY+aW1ne1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxufVxcblxcbi5yZXN0YXVyYW50Q2FyZD5kaXY+ZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGltZ0NvbWJvOFByZXNhcyBmcm9tIFwiLi9pbWFnZXMvb2Nob3ByZXNhcy5wbmdcIjtcbmltcG9ydCBpbWdXaGF0c2FwcCBmcm9tIFwiLi9pbWFnZXMvd2hhdHNhcHAtaWNvbi5wbmdcIjtcbmltcG9ydCB7IG1lbnVGdW5jdGlvblRhYiB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBjaGlGYWNlIGZyb20gXCIuL2ltYWdlcy9jaGlja2VuRmFjZS5wbmdcIjtcbmltcG9ydCByZXN0YXVyYW50QmFuIGZyb20gXCIuL2ltYWdlcy9yZXN0YXVyYW50QmFubmVyLnBuZ1wiO1xuaW1wb3J0IHBob25lSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL3Bob25lLXN2Z3JlcG8tY29tLnN2Z1wiO1xuaW1wb3J0IGNsb2NrSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2Nsb2NrLXN2Z3JlcG8tY29tLnN2Z1wiO1xuaW1wb3J0IGNhbGVuZGFySW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2NhbGVuZGFyLXN2Z3JlcG8tY29tLnN2Z1wiO1xuXG5jb25zdCBjb250YWN0b0Z1bmN0aW9uVGFiID0gKCgpID0+e1xuICAgIGNvbnN0IGNyZWF0ZSA9ICgpPT57XG4gICAgICAgIGVyYXNlKCk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhY3RvQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3RvQ29udGVudCcpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcGlkZVdoYXRzYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcGlkZVdoYXRzYXBwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJwaWRlV2hhdHNhcHBcIik7XG4gICAgICAgIGNvbnN0IGNvbWJvOFByZXNhcyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjb21ibzhQcmVzYXMuc3JjID0gaW1nQ29tYm84UHJlc2FzO1xuICAgICAgICBjb25zdCBkb21pY2lsaW9UaXR1bG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGNvbnN0IHdoYXRzYXBwUG5nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHdoYXRzYXBwUG5nLnNyYyA9IGltZ1doYXRzYXBwO1xuICAgICAgICBkb21pY2lsaW9UaXR1bG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU3MzAwNDEwMDExMSZ0ZXh0PUhvbGEhJTIwcXVpZXJvJTIwdW4lMjByaWNvJTIwcG9sbG9cIiwgJ19ibGFuaycpO1xuICAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGJhbm5lclJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZG9taWNpbGlvVGl0dWxvLmlubmVySFRNTD1cIkRPTUlDSUxJT1M6XFxyXFxuXCI7XG4gICAgICAgIGRvbWljaWxpb1RpdHVsby5hcHBlbmRDaGlsZCh3aGF0c2FwcFBuZyk7XG4gICAgICAgIGRvbWljaWxpb1RpdHVsby5pbm5lckhUTUwgKz0gXCIrNTcgMzAwIDQxMCAwMTExXCI7XG4gICAgICAgIGNvbnN0IGZyYXNlUmljbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBmcmFzZVJpY28udGV4dENvbnRlbnQgPSBcIk5BREEgTcOBUyBSSUNPXFxyXFxuUVVFIENPTUVSIEVOIEtPS09SSUtPXCJcbiAgICAgICAgY29uc3QgcGlkZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHBpZGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbWVudUZ1bmN0aW9uVGFiLmNyZWF0ZSk7XG4gICAgICAgIHBpZGVCdG4uaW5uZXJUZXh0ID0gXCJQSURFIEFRVUlcIjtcbiAgICAgICAgYmFubmVyUmlnaHQuYXBwZW5kQ2hpbGQoZG9taWNpbGlvVGl0dWxvKTtcbiAgICAgICAgYmFubmVyUmlnaHQuYXBwZW5kQ2hpbGQoZnJhc2VSaWNvKTtcbiAgICAgICAgYmFubmVyUmlnaHQuYXBwZW5kQ2hpbGQocGlkZUJ0bik7XG4gICAgICAgIHBpZGVXaGF0c2FwcC5hcHBlbmRDaGlsZChjb21ibzhQcmVzYXMpO1xuICAgICAgICBwaWRlV2hhdHNhcHAuYXBwZW5kQ2hpbGQoYmFubmVyUmlnaHQpO1xuICAgICAgICBjb250YWN0b0NvbnRlbnQuYXBwZW5kQ2hpbGQocGlkZVdoYXRzYXBwKTtcblxuICAgICAgICBjb25zdCByZXN0YXVyYW50QmFubmVyID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHJlc3RhdXJhbnRCYW5uZXIuc3JjID0gcmVzdGF1cmFudEJhblxuICAgICAgICByZXN0YXVyYW50QmFubmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJyZXN0YXVyYW50QmFubmVyXCIpO1xuICAgICAgICBjb250YWN0b0NvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEJhbm5lcik7XG5cbiAgICAgICAgY29uc3QgcmVzdGF1cmFudHMgPSBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJBRVJPUFVFUlRPXCIsXG4gICAgICAgICAgICAgICAgXCJFZGlmaWNpbyBjcmVzcG8gNzBDYXJ0YWdlbmEsIEJvbMOtdmFyXCIsXG4gICAgICAgICAgICAgICAgXCI2NjI4MTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiQUVST1BVRVJUTyBBTEZPTlNPIEIuXCIsXG4gICAgICAgICAgICAgICAgXCJBZXJvcHVlcnRvIEFsZm9uc28gQm9uaWxsYSBBcmFnb25QYWxtaXJhLCBWYWxsZSBkZWwgQ2F1Y2FcIixcbiAgICAgICAgICAgICAgICBcIjI3Mjc3MjRcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJBTCBQQVNPIENBTExFIDcxXCIsXG4gICAgICAgICAgICAgICAgXCJDYWxsZSA3MSAjOS0wNkJvZ290w6FcIixcbiAgICAgICAgICAgICAgICBcIjQxMDAxMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJBUk1FTklBIElcIixcbiAgICAgICAgICAgICAgICBcIkNhcnJlcmEgMTQgIzEwLTg1QXJtZW5pYSwgUXVpbmRpb1wiLFxuICAgICAgICAgICAgICAgIFwiNzQ2OTkyMFwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwQU0gLSAxMDowMFBNXCIsXG4gICAgICAgICAgICAgICAgXCJMdW4sIE1hciwgTWllLCBKdWUsIFZpZSwgU2FiLCBEb21cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIkFSTUVOSUEgSUlcIixcbiAgICAgICAgICAgICAgICBcIkNhcnJlcmEgMTQgIzE2LTU4QXJtZW5pYSwgUXVpbmRpb1wiLFxuICAgICAgICAgICAgICAgIFwiNzQ2OTkyMFwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwQU0gLSAxMDowMFBNXCIsXG4gICAgICAgICAgICAgICAgXCJMdW4sIE1hciwgTWllLCBKdWUsIFZpZSwgU2FiLCBEb21cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIkFWIFZFTkVaVUVMQVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FsbGUgMzMgIzktNjRDYXJ0YWdlbmEsIEJvbMOtdmFyXCIsXG4gICAgICAgICAgICAgICAgXCI2NjI4MTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiQk9DQUdSQU5ERVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FycmVyYSAyICM4LTEzQ2FydGFnZW5hLCBCb2zDrXZhclwiLFxuICAgICAgICAgICAgICAgIFwiNjYyODExMVwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwQU0gLSAxMDowMFBNXCIsXG4gICAgICAgICAgICAgICAgXCJMdW4sIE1hciwgTWllLCBKdWUsIFZpZSwgU2FiLCBEb21cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIkJPU1FVRVwiLFxuICAgICAgICAgICAgICAgIFwiRGlhZ29uYWwgMjEgIzQ1QS0xOUNhcnRhZ2VuYSwgQm9sw612YXJcIixcbiAgICAgICAgICAgICAgICBcIjY2MjgxMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJCVUVOQVZFTlRVUkFcIixcbiAgICAgICAgICAgICAgICBcIkNhbGxlIDIgIzItMDVCdWVuYXZlbnR1cmEsIFZhbGxlIGRlbCBDYXVjYVwiLFxuICAgICAgICAgICAgICAgIFwiNjAyODg4MTExMVwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwIEFNIC0gMTA6MDAgUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiQlVFTkFWSVNUQVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FsbGUgMjlhICM5QS0xNFNhbnRhIE1hcnRhLCBNYWdkYWxlbmFcIixcbiAgICAgICAgICAgICAgICBcIjQyMjAxMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJCVUVOQVZJU1RBXCIsXG4gICAgICAgICAgICAgICAgXCJDZW50cm8gQ29tZXJjaWFsIEJ1ZW5hdmlzdGFCYXJyYW5xdWlsbGEsIEF0bMOhbnRpY29cIixcbiAgICAgICAgICAgICAgICBcIjM1NzExMjFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJDQUZBTSBGTE9SRVNUQVwiLFxuICAgICAgICAgICAgICAgIFwiQXZlbmlkYSBDYXJyZXJhIDY4ICM5Ni01MEJvZ290w6FcIixcbiAgICAgICAgICAgICAgICBcIjQxMDAxMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJDQUxMRSAxMjVcIixcbiAgICAgICAgICAgICAgICBcIkF2ZW5pZGEgMTkgIzEyNS0xN0JvZ290w6FcIixcbiAgICAgICAgICAgICAgICBcIjQxMDAxMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJDQVBJVEFMIFRPV0VSXCIsXG4gICAgICAgICAgICAgICAgXCJBdmVuaWRhIENhbGxlIDI0ICM1MS00MEJvZ290w6FcIixcbiAgICAgICAgICAgICAgICBcIjQxMDAxMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJDQyBMb3MgbW9saW5vc1wiLFxuICAgICAgICAgICAgICAgIFwiQ2FsbGUgMzBBICMgODJBLTI2TWVkZWxsaW4sIEFudGlvcXVpYVwiLFxuICAgICAgICAgICAgICAgIFwiNDQ0MjAyMFwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwQU0gLSAxMDowMFBNXCIsXG4gICAgICAgICAgICAgICAgXCJMdW4sIE1hciwgTWllLCBKdWUsIFZpZSwgU2FiLCBEb21cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIkNDIFB1ZXJ0YSBkZWwgbm9ydGVcIixcbiAgICAgICAgICAgICAgICBcIkRpYWdvbmFsIDU1ICMzNC02N01lZGVsbGluLCBBbnRpb3F1aWFcIixcbiAgICAgICAgICAgICAgICBcIjQ0NDIwMjBcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJDQyBTYW4gZGllZ29cIixcbiAgICAgICAgICAgICAgICBcIkNhbGxlIDMzICM0MkItMDZNZWRlbGxpbiwgQW50aW9xdWlhXCIsXG4gICAgICAgICAgICAgICAgXCI0NDQyMDIwXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiQ0MgU2FudGFmw6lcIixcbiAgICAgICAgICAgICAgICBcIkNhcnJlcmEgNDNBICM3LTExN01lZGVsbGluLCBBbnRpb3F1aWFcIixcbiAgICAgICAgICAgICAgICBcIjQ0NDIwMjBcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJDQyBVbmljZW50cm9cIixcbiAgICAgICAgICAgICAgICBcIkNhcnJlcmEgNjZCICM0M0EtNzZNZWRlbGxpbiwgQW50aW9xdWlhXCIsXG4gICAgICAgICAgICAgICAgXCI0NDQyMDIwXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiQ0VOVFJPXCIsXG4gICAgICAgICAgICAgICAgXCJDYXJyZXJhIDYgIzEwLTQxQ2FsaSwgVmFsbGUgZGVsIENhdWNhXCIsXG4gICAgICAgICAgICAgICAgXCI4ODgxMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiQ0VOVFJPIENISUFcIixcbiAgICAgICAgICAgICAgICBcIkF2ZW5pZGEgUHJhZGlsbGEgIzktMDAgRXN0ZUJvZ290w6FcIixcbiAgICAgICAgICAgICAgICBcIjQxMDAxMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJDSVRZUExBWkFcIixcbiAgICAgICAgICAgICAgICBcIkNhbGxlIDM2RCBTVVIgIzI3QS0xMDVNZWRlbGxpbiwgQW50aW9xdWlhXCIsXG4gICAgICAgICAgICAgICAgXCI0NDQyMDIwXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiQ0lVREFEIDIwMDBcIixcbiAgICAgICAgICAgICAgICBcIkNhcnJlcmEgNjggIzI1LTEyQ2FsaSwgVmFsbGUgZGVsIENhdWNhXCIsXG4gICAgICAgICAgICAgICAgXCI4ODgxMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiQ09MSU5BIENBTVBFU1RSRVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FsbGUgMTM4ICM1NS04NUJvZ290w6FcIixcbiAgICAgICAgICAgICAgICBcIjQxMDAxMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJDT0xPTlwiLFxuICAgICAgICAgICAgICAgIFwiQ2FycmVyYSAxIENhbGxlIDYxYS0zMENhbGksIFZhbGxlIGRlbCBDYXVjYVwiLFxuICAgICAgICAgICAgICAgIFwiODg4MTExMVwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwQU0gLSAxMDowMFBNXCIsXG4gICAgICAgICAgICAgICAgXCJMdW4sIE1hciwgTWllLCBKdWUsIFZpZSwgU2FiLCBEb21cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIkNPUkZFUklBU1wiLFxuICAgICAgICAgICAgICAgIFwiQ2FycmVyYSAzNyAjMjQtNjdCb2dvdMOhXCIsXG4gICAgICAgICAgICAgICAgXCI0MTAwMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiQ1JFU1BPXCIsXG4gICAgICAgICAgICAgICAgXCJDYWxsZSA3MCAjMUQtMTFDYXJ0YWdlbmEsIEJvbMOtdmFyXCIsXG4gICAgICAgICAgICAgICAgXCI2NjI4MTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiQ3VjdXRhIEF2ZW50dXJhXCIsXG4gICAgICAgICAgICAgICAgXCJBdmVudHVyYSBQbGF6YUPDumN1dGEsIE5vcnRlIGRlIFNhbnRhbmRlclwiLFxuICAgICAgICAgICAgICAgIFwiNTc1NjY3MVwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwQU0gLSAxMDowMFBNXCIsXG4gICAgICAgICAgICAgICAgXCJMdW4sIE1hciwgTWllLCBKdWUsIFZpZSwgU2FiLCBEb21cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIkVMIFBST0dSRVNPXCIsXG4gICAgICAgICAgICAgICAgXCJDYXJyZXJhIDE2ICMzOC0xMzBEb3NxdWVicmFkYXMsIFJpc2FyYWxkYVwiLFxuICAgICAgICAgICAgICAgIFwiMzI0MjQwMFwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwQU0gLSAxMDowMFBNXCIsXG4gICAgICAgICAgICAgICAgXCJMdW4sIE1hciwgTWllLCBKdWUsIFZpZSwgU2FiLCBEb21cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIkVOVklHQURPXCIsXG4gICAgICAgICAgICAgICAgXCJDYXJyZXJhIDQyICMzOFMtNTZFbnZpZ2FkbywgQW50aW9xdWlhXCIsXG4gICAgICAgICAgICAgICAgXCI0NDQyMDIwXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiRkVSSUEgRVhQT1NJQ0lPTlwiLFxuICAgICAgICAgICAgICAgIFwiQXZlbmlkYSBDYWxsZSAyNCAjMzYtMDlCb2dvdMOhXCIsXG4gICAgICAgICAgICAgICAgXCI0MTAwMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiRk9OVEFOQVJcIixcbiAgICAgICAgICAgICAgICBcIkF2ZW5pZGEgQ2FqaWNhICMxNDMtNzhCb2dvdMOhXCIsXG4gICAgICAgICAgICAgICAgXCI0MTAwMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiRk9OVElCT05cIixcbiAgICAgICAgICAgICAgICBcIkNhcnJlcmEgMTAwICMyMEMtMzJCb2dvdMOhXCIsXG4gICAgICAgICAgICAgICAgXCI0MTAwMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiR0FMRVJJQVNcIixcbiAgICAgICAgICAgICAgICBcIkNhcnJlcmEgMjQgIyA1Mi04NUJvZ290w6FcIixcbiAgICAgICAgICAgICAgICBcIjQxMDAxMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJHSVJBUkRPVFwiLFxuICAgICAgICAgICAgICAgIFwiQ2FsbGUgMjAgIzEwLTI3R2lyYXJkb3QsIEN1bmRpbmFtYXJjYVwiLFxuICAgICAgICAgICAgICAgIFwiODMzMDIwNlwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwQU0gLSAxMDowMFBNXCIsXG4gICAgICAgICAgICAgICAgXCJMdW4sIE1hciwgTWllLCBKdWUsIFZpZSwgU2FiLCBEb21cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIkhPTUVDRU5URVIgIDE3MFwiLFxuICAgICAgICAgICAgICAgIFwiQ2FycmVyYSA0NSAjMTc1LTUwQm9nb3TDoVwiLFxuICAgICAgICAgICAgICAgIFwiNDEwMDExMVwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwQU0gLSAxMDowMFBNXCIsXG4gICAgICAgICAgICAgICAgXCJMdW4sIE1hciwgTWllLCBKdWUsIFZpZSwgU2FiLCBEb21cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIkhPTUVDRU5URVIgIDgwXCIsXG4gICAgICAgICAgICAgICAgXCJBdmVuaWRhIDY4ICM4MC03MEJvZ290w6FcIixcbiAgICAgICAgICAgICAgICBcIjQxMDAxMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJJQkFHVcOJIElcIixcbiAgICAgICAgICAgICAgICBcIkNhcnJlcmEgMyAjMTFBLTQzSWJhZ3XDqSwgVG9saW1hXCIsXG4gICAgICAgICAgICAgICAgXCIyNjU1MTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiSUJBR1XDiSBJSVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FycmVyYSA1ICM0My01NUliYWd1w6ksIFRvbGltYVwiLFxuICAgICAgICAgICAgICAgIFwiMjY1NTExMVwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwQU0gLSAxMDowMFBNXCIsXG4gICAgICAgICAgICAgICAgXCJMdW4sIE1hciwgTWllLCBKdWUsIFZpZSwgU2FiLCBEb21cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIklMQVJDT1wiLFxuICAgICAgICAgICAgICAgIFwiQXZlbmlkYSBTdWJhICMxMTRBLTg4Qm9nb3TDoVwiLFxuICAgICAgICAgICAgICAgIFwiNDEwMDExMVwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwQU0gLSAxMDowMFBNXCIsXG4gICAgICAgICAgICAgICAgXCJMdW4sIE1hciwgTWllLCBKdWUsIFZpZSwgU2FiLCBEb21cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIkl0YWd1aVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FycmVyYSA1MCAjNTAtNjhJdGFndWksIEFudGlvcXVpYVwiLFxuICAgICAgICAgICAgICAgIFwiNDQ0MjAyMFwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwQU0gLSAxMDowMFBNXCIsXG4gICAgICAgICAgICAgICAgXCJMdW4sIE1hciwgTWllLCBKdWUsIFZpZSwgU2FiLCBEb21cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIkpBUkRJTiBQTEFaQVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FycmVyYSA5OCAjMTYtMjAwQ2FsaSwgVmFsbGUgZGVsIENhdWNhXCIsXG4gICAgICAgICAgICAgICAgXCI4ODgxMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiS0VOTkVEWVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FycmVyYSA3OEIgIzM4Yi0wMiBTdXJCb2dvdMOhXCIsXG4gICAgICAgICAgICAgICAgXCI0MTAwMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiTEFHT1wiLFxuICAgICAgICAgICAgICAgIFwiQ2FsbGUgMjQgIzctMjlQZXJlaXJhLCBSaXNhcmFsZGFcIixcbiAgICAgICAgICAgICAgICBcIjMyNDI0MDBcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJMQVMgVklMTEFTXCIsXG4gICAgICAgICAgICAgICAgXCJDYWxsZSAxMjhBICM1NC01MEJvZ290w6FcIixcbiAgICAgICAgICAgICAgICBcIjQxMDAxMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJMYXVyZWxlc1wiLFxuICAgICAgICAgICAgICAgIFwiQ2FycmVyYSA3NiAjMzNBLTM1TWVkZWxsaW4sIEFudGlvcXVpYVwiLFxuICAgICAgICAgICAgICAgIFwiNDQ0MjAyMFwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwQU0gLSAxMDowMFBNXCIsXG4gICAgICAgICAgICAgICAgXCJMdW4sIE1hciwgTWllLCBKdWUsIFZpZSwgU2FiLCBEb21cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIkxJRE9cIixcbiAgICAgICAgICAgICAgICBcIkNhbGxlIDUgIzQ1LTIwQ2FsaSwgVmFsbGUgZGVsIENhdWNhXCIsXG4gICAgICAgICAgICAgICAgXCI4ODgxMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiTUVMR0FSXCIsXG4gICAgICAgICAgICAgICAgXCJDYWxsZSA1IEJJUyAjMjVBLTMwTWVsZ2FyLCBUb2xpbWFcIixcbiAgICAgICAgICAgICAgICBcIjI0NTAyNDZcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJNRVJDRURcIixcbiAgICAgICAgICAgICAgICBcIkF2ZW5pZGEgMyBOb3J0ZSAjNDdDLTA2Q2FsaSwgVmFsbGUgZGVsIENhdWNhXCIsXG4gICAgICAgICAgICAgICAgXCI4ODgxMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiTVVMVElEUklWRVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FycmVyYSA1OSAjMTUyQi03NUJvZ290w6FcIixcbiAgICAgICAgICAgICAgICBcIjQxMDAxMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJPQkVMSVNDT1wiLFxuICAgICAgICAgICAgICAgIFwiQ2FycmVyYSA3NCAjNDgtNTNNZWRlbGxpbiwgQW50aW9xdWlhXCIsXG4gICAgICAgICAgICAgICAgXCI0NDQyMDIwXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiT3JpZW50YWxcIixcbiAgICAgICAgICAgICAgICBcIkNhcnJlcmEgNDYgIzQ5QS00M01lZGVsbGluLCBBbnRpb3F1aWFcIixcbiAgICAgICAgICAgICAgICBcIjQ0NDIwMjBcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJQQUxBVElOT1wiLFxuICAgICAgICAgICAgICAgIFwiQ2FycmVyYSA3ICMxMzktMDlCb2dvdMOhXCIsXG4gICAgICAgICAgICAgICAgXCI0MTAwMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiUEFMTUlSQVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FsbGUgMzAgIzMwLTcyUGFsbWlyYSwgVmFsbGUgZGVsIENhdWNhXCIsXG4gICAgICAgICAgICAgICAgXCI2MDI4ODgxMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDAgQU0gLSAxMDowMCBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJQQU5DRVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FsbGUgMTggIzEyMS00NTFDYWxpLCBWYWxsZSBkZWwgQ2F1Y2FcIixcbiAgICAgICAgICAgICAgICBcIjg4ODExMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJQQVJRVUUgNDNcIixcbiAgICAgICAgICAgICAgICBcIkNhbGxlIDQyICM5LTg1Qm9nb3TDoVwiLFxuICAgICAgICAgICAgICAgIFwiNDEwMDExMVwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwQU0gLSAxMDowMFBNXCIsXG4gICAgICAgICAgICAgICAgXCJMdW4sIE1hciwgTWllLCBKdWUsIFZpZSwgU2FiLCBEb21cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIlBBU0VPIEJPTElWQVJcIixcbiAgICAgICAgICAgICAgICBcIkF2ZW5pZGEgNE4gIzEwTi0xMzBDYWxpLCBWYWxsZSBkZWwgQ2F1Y2FcIixcbiAgICAgICAgICAgICAgICBcIjg4ODExMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJQb2JsYWRvXCIsXG4gICAgICAgICAgICAgICAgXCJDYXJyZXJhIDM2ICMxMC02Mk1lZGVsbGluLCBBbnRpb3F1aWFcIixcbiAgICAgICAgICAgICAgICBcIjQ0NDIwMjBcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJQVUVOVEUgQUVSRU9cIixcbiAgICAgICAgICAgICAgICBcIkNhbGxlIDI2ICMxMDYtMjhCb2dvdMOhXCIsXG4gICAgICAgICAgICAgICAgXCI0MTAwMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiUkVTVFJFUE9cIixcbiAgICAgICAgICAgICAgICBcIkNhbGxlIDE2ICMxOC00NCBTdXJCb2dvdMOhXCIsXG4gICAgICAgICAgICAgICAgXCI0MTAwMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiUmlvbmVncm9cIixcbiAgICAgICAgICAgICAgICBcIkNhbGxlIDQzICM1NC0xMzlSaW9uZWdybywgQW50aW9xdWlhXCIsXG4gICAgICAgICAgICAgICAgXCI0NDQyMDIwXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiUk9EQURFUk9cIixcbiAgICAgICAgICAgICAgICBcIkNhbGxlIDYgIzEtNjRTYW50YSBNYXJ0YSwgTWFnZGFsZW5hXCIsXG4gICAgICAgICAgICAgICAgXCI0MjIwMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiU0FMSVRSRSBQTEFaQVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FycmVyYSA2OEIgIzQwLTM5Qm9nb3TDoVwiLFxuICAgICAgICAgICAgICAgIFwiNDEwMDExMVwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwQU0gLSAxMDowMFBNXCIsXG4gICAgICAgICAgICAgICAgXCJMdW4sIE1hciwgTWllLCBKdWUsIFZpZSwgU2FiLCBEb21cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIlNBTiBESUVHT1wiLFxuICAgICAgICAgICAgICAgIFwiQ2FycmVyYSA3ICMyNC0wMkJvZ290w6FcIixcbiAgICAgICAgICAgICAgICBcIjQxMDAxMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJTQU5DQU5DSU9cIixcbiAgICAgICAgICAgICAgICBcIkNhcnJlcmEgMjdBICM2Ni0zME1hbml6YWxlcywgQ2FsZGFzXCIsXG4gICAgICAgICAgICAgICAgXCI4ODc2NzkwXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiU0FOVEEgSVNBQkVMXCIsXG4gICAgICAgICAgICAgICAgXCJDYXJyZXJhIDI3ICMxQy0xNEJvZ290w6FcIixcbiAgICAgICAgICAgICAgICBcIjQxMDAxMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJUZXJtaW5hbFwiLFxuICAgICAgICAgICAgICAgIFwiQ2FycmVyYSA2NEMgIzc4LTQ0ME1lZGVsbGluLCBBbnRpb3F1aWFcIixcbiAgICAgICAgICAgICAgICBcIjQ0NDIwMjBcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJUVU5KQVwiLFxuICAgICAgICAgICAgICAgIFwiQ2FsbGUgNDJBICMxQVR1bmphLCBCb3lhY8OhXCIsXG4gICAgICAgICAgICAgICAgXCIzMTQ0NTMwMzA5XCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDAgQU0gLSAxMDowMCBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJVTklBQkFTVE9TXCIsXG4gICAgICAgICAgICAgICAgXCJVbmlhYmFzdG9zQ290YSwgQ3VuZGluYW1hcmNhXCIsXG4gICAgICAgICAgICAgICAgXCI0MTAwMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiVU5JQ0VOVFJPXCIsXG4gICAgICAgICAgICAgICAgXCJDYXJyZXJhIDE1ICMxMjQtMzBCb2dvdMOhXCIsXG4gICAgICAgICAgICAgICAgXCI0MTAwMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiVW5pY2VudHJvIHBlcmVpcmFcIixcbiAgICAgICAgICAgICAgICBcIkF2ZW5pZGEgMzAgRGUgQWdvc3RvICM3NS01MVBlcmVpcmEsIFJpc2FyYWxkYVwiLFxuICAgICAgICAgICAgICAgIFwiMzI0MjQwMFwiLFxuICAgICAgICAgICAgICAgIFwiIDExOjAwQU0gLSAxMDowMFBNXCIsXG4gICAgICAgICAgICAgICAgXCJMdW4sIE1hciwgTWllLCBKdWUsIFZpZSwgU2FiLCBEb21cIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBcIlVTQVFVRU5cIixcbiAgICAgICAgICAgICAgICBcIkNhbGxlIDExOSAjNy01NEJvZ290w6FcIixcbiAgICAgICAgICAgICAgICBcIjQxMDAxMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJWSUxMQSBBTFNBQ0lBXCIsXG4gICAgICAgICAgICAgICAgXCJDYWxsZSAxMkIgIzcxZC02MUJvZ290w6FcIixcbiAgICAgICAgICAgICAgICBcIjQxMDAxMTFcIixcbiAgICAgICAgICAgICAgICBcIiAxMTowMEFNIC0gMTA6MDBQTVwiLFxuICAgICAgICAgICAgICAgIFwiTHVuLCBNYXIsIE1pZSwgSnVlLCBWaWUsIFNhYiwgRG9tXCJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgXCJWSUxMQVZJQ0VOQ0lPICBDRU5UUk9cIixcbiAgICAgICAgICAgICAgICBcIkNhbGxlIDM4ICMzMGEtODhWaWxsYXZpY2VuY2lvLCBNZXRhXCIsXG4gICAgICAgICAgICAgICAgXCI2ODIxMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiVklWQSBWSUxMQVZJQ0VOQ0lPXCIsXG4gICAgICAgICAgICAgICAgXCJDYWxsZSA3ICM0NS0xODVWaWxsYXZpY2VuY2lvLCBNZXRhXCIsXG4gICAgICAgICAgICAgICAgXCI2ODIxMTExXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIFwiWU9QQUxcIixcbiAgICAgICAgICAgICAgICBcIkNhcnJlcmEgMjkgIzE0LTQ3WW9wYWwsIENhc2FuYXJlXCIsXG4gICAgICAgICAgICAgICAgXCI2MzMzMTAwXCIsXG4gICAgICAgICAgICAgICAgXCIgMTE6MDBBTSAtIDEwOjAwUE1cIixcbiAgICAgICAgICAgICAgICBcIkx1biwgTWFyLCBNaWUsIEp1ZSwgVmllLCBTYWIsIERvbVwiXG4gICAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcmVzdGF1cmFudHNEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInJlc3RhdXJhbnRzRGl2XCIpO1xuICAgICAgICBjb25zdCByZXN0YXVyYW50c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByZXN0YXVyYW50c0xpc3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInJlc3RhdXJhbnRzTGlzdFwiKTtcbiAgICAgICAgY29uc3QgcmVzdGF1cmFudE1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZvciAoY29uc3QgcmVzdGF1cmFudCBvZiByZXN0YXVyYW50cyl7XG4gICAgICAgICAgICBjb25zdCByZXN0YXVyYW50Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCByZXN0YXVyYW50SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCByZXN0YXVyYW50QWRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3RhdXJhbnRQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBjb25zdCByZXN0YXVyYW50UGhvbmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBjb25zdCBwaG9uZUltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgcGhvbmVJbWcuc3JjID0gcGhvbmVJbWFnZTtcbiAgICAgICAgICAgIHJlc3RhdXJhbnRQaG9uZS5hcHBlbmRDaGlsZChwaG9uZUltZyk7XG4gICAgICAgICAgICByZXN0YXVyYW50UGhvbmUuYXBwZW5kQ2hpbGQocmVzdGF1cmFudFBob25lVGV4dCk7XG4gICAgICAgICAgICBjb25zdCByZXN0YXVyYW50SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgcmVzdGF1cmFudEhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgY29uc3QgY2xvY2tJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGNsb2NrSW1nLnNyYyA9IGNsb2NrSW1hZ2U7XG4gICAgICAgICAgICByZXN0YXVyYW50SG91cnMuYXBwZW5kQ2hpbGQoY2xvY2tJbWcpO1xuICAgICAgICAgICAgcmVzdGF1cmFudEhvdXJzLmFwcGVuZENoaWxkKHJlc3RhdXJhbnRIb3Vyc1RleHQpO1xuICAgICAgICAgICAgY29uc3QgcmVzdGF1cmFudERheXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgcmVzdGF1cmFudERheXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBjb25zdCBjYWxlbmRhckltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgY2FsZW5kYXJJbWcuc3JjID0gY2FsZW5kYXJJbWFnZTtcbiAgICAgICAgICAgIHJlc3RhdXJhbnREYXlzLmFwcGVuZENoaWxkKGNhbGVuZGFySW1nKTtcbiAgICAgICAgICAgIHJlc3RhdXJhbnREYXlzLmFwcGVuZENoaWxkKHJlc3RhdXJhbnREYXlzVGV4dCk7XG4gICAgICAgICAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCArPSByZXN0YXVyYW50WzBdO1xuICAgICAgICAgICAgcmVzdGF1cmFudEFkcmVzcy50ZXh0Q29udGVudCArPSByZXN0YXVyYW50WzFdO1xuICAgICAgICAgICAgcmVzdGF1cmFudFBob25lVGV4dC50ZXh0Q29udGVudCArPSByZXN0YXVyYW50WzJdO1xuICAgICAgICAgICAgcmVzdGF1cmFudEhvdXJzVGV4dC50ZXh0Q29udGVudCArPSByZXN0YXVyYW50WzNdO1xuICAgICAgICAgICAgcmVzdGF1cmFudERheXNUZXh0LnRleHRDb250ZW50ICs9IHJlc3RhdXJhbnRbNF07XG4gICAgICAgICAgICByZXN0YXVyYW50SW5mby5hcHBlbmQocmVzdGF1cmFudE5hbWUgLCByZXN0YXVyYW50QWRyZXNzICwgcmVzdGF1cmFudFBob25lICwgcmVzdGF1cmFudEhvdXJzICwgcmVzdGF1cmFudERheXMpO1xuICAgICAgICAgICAgY29uc3QgY2hpY2tlbkZhY2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGNoaWNrZW5GYWNlLnNyYyA9IGNoaUZhY2U7XG4gICAgICAgICAgICByZXN0YXVyYW50Q2FyZC5hcHBlbmRDaGlsZChjaGlja2VuRmFjZSk7XG4gICAgICAgICAgICByZXN0YXVyYW50Q2FyZC5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW5mbyk7XG4gICAgICAgICAgICByZXN0YXVyYW50Q2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwicmVzdGF1cmFudENhcmRcIik7XG4gICAgICAgICAgICByZXN0YXVyYW50c0xpc3QuYXBwZW5kQ2hpbGQocmVzdGF1cmFudENhcmQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgICAgICBtYXAyLnNldEF0dHJpYnV0ZShcInNyY1wiLFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTI2OTE0LjMyOTU3NTA4MTUhMmQtNzUuNjQ1NzMwNjgzMTMxNjUhM2Q2LjI1NDEzOTMxNDAxMDYwMiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4OGU0NDI4NTYyYjllOGYwZiUzQTB4YWUyMGQ5NTVlNTA2Yzk4MSEyc0tva29yaWtvJTIwT3JpZW50YWwhNWUwITNtMiExc2VzITJzY28hNHYxNjY4MDAxODM1MjA5ITVtMiExc2VzITJzY29cIik7XG4gICAgICAgIHJlc3RhdXJhbnRNYXAuYXBwZW5kQ2hpbGQobWFwMik7XG4gICAgICAgIHJlc3RhdXJhbnRzRGl2LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRzTGlzdCk7XG4gICAgICAgIHJlc3RhdXJhbnRzRGl2LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRNYXApO1xuICAgICAgICBjb250YWN0b0NvbnRlbnQuYXBwZW5kQ2hpbGQocmVzdGF1cmFudHNEaXYpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdG9Db250ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgY29uc3QgZXJhc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvQmVSZW1vdmVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQodG9CZVJlbW92ZWQpO1xuICAgIH1cblxuICAgIFxuICAgIHJldHVybiB7Y3JlYXRlICwgZXJhc2V9XG59KSgpXG5cbmV4cG9ydCB7Y29udGFjdG9GdW5jdGlvblRhYn0iLCJjb25zb2xlLmxvZyhcInJ1bmluZyB3ZWJwY2tldFwiKTtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvZ29SZWQgZnJvbSBcIi4vaW1hZ2VzL2xvZ29SZWQucG5nXCI7XG5pbXBvcnQgZ2l0TG9nbyBmcm9tIFwiLi9pbWFnZXMvZ2l0aHViLnBuZ1wiO1xuaW1wb3J0IHsgaW5pY2lvRnVuY3Rpb25UYWIgfSBmcm9tIFwiLi9pbmljaW9cIjtcbmltcG9ydCB7IG1lbnVGdW5jdGlvblRhYiB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGNvbnRhY3RvRnVuY3Rpb25UYWIgfSBmcm9tIFwiLi9jb250YWN0b1wiO1xuaW1wb3J0IGV4YW1wbGVJbWFnZVVybCBmcm9tIFwiLi9pbWFnZXMvZm9uZG9CYW5uZXIucG5nXCI7XG5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuY29uc3QgY3JlYXRlID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgbXlMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbXlMb2dvLnNyYyA9IGxvZ29SZWQ7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG15TG9nbyk7XG5cbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YWJzLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ0YWJzXCIpXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYWIodGFiRWxlbWVudCAsIHRhYkZ1bmN0aW9uKXtcbiAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgbmV3RWxlbWVudC50ZXh0Q29udGVudCA9IHRhYkVsZW1lbnQudG9VcHBlckNhc2UoKTtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YWInKTtcbiAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RhYkVsZW1lbnR9VGFiYCk7XG4gICAgICBuZXdFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHRhYkZ1bmN0aW9uKTtcbiAgICAgIHdpbmRvd1tgJHt0YWJFbGVtZW50fWArXCJUYWJcIl0gPSBuZXdFbGVtZW50O1xuICAgICAgcmV0dXJuIHdpbmRvd1tgJHt0YWJFbGVtZW50fWArXCJUYWJcIl07XG4gICAgfVxuXG4gICAgY3JlYXRlVGFiKFwiaW5pY2lvXCIsIGluaWNpb0Z1bmN0aW9uVGFiLmNyZWF0ZSk7XG4gICAgY3JlYXRlVGFiKFwibWVudVwiLCBtZW51RnVuY3Rpb25UYWIuY3JlYXRlKTtcbiAgICBjcmVhdGVUYWIoXCJjb250YWN0b1wiLCBjb250YWN0b0Z1bmN0aW9uVGFiLmNyZWF0ZSk7XG5cblxuICAgIHRhYnMuYXBwZW5kQ2hpbGQoaW5pY2lvVGFiKTtcbiAgICB0YWJzLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuICAgIHRhYnMuYXBwZW5kQ2hpbGQoY29udGFjdG9UYWIpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRhYnMpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSBcIkNvcHlyaWdodCDCqSAyMDIxIGRldkx1aXNUb3JyZXNcIlxuICAgIGNvbnN0IGdpdGh1YkxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBnaXRodWJMb2dvLnNyYyA9IGdpdExvZ287XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxvZ28pO1xuICAgIHJldHVybiBmb290ZXJcbiAgfVxuXG5yZXR1cm4ge0hlYWRlcixGb290ZXJ9XG59KSgpXG5cblxuXG5cbmNvbnN0IHBhcmVudENvbnRlbnQgPSBjb250ZW50LnBhcmVudE5vZGU7XG5wYXJlbnRDb250ZW50Lmluc2VydEJlZm9yZShjcmVhdGUuSGVhZGVyKCksY29udGVudCk7XG5wYXJlbnRDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZS5Gb290ZXIoKSk7XG5cbmluaWNpb0Z1bmN0aW9uVGFiLmNyZWF0ZSgpO1xuIiwiaW1wb3J0IGltYWdlblBvbGxvIGZyb20gXCIuL2ltYWdlcy9BU0FET19GQU1JTElBUi5wbmdcIlxuXG5jb25zdCBpbmljaW9GdW5jdGlvblRhYiA9ICgoKSA9PntcblxuICAgIGNvbnN0IGNyZWF0ZSA9ICgpPT57XG4gICAgICAgIGVyYXNlKCk7XG4gICAgICAgIGNvbnN0IGluaWNpb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmljaW9Db250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5pY2lvQ29udGVudCcpO1xuICAgICAgICBjb25zdCBwb2xsaXRvID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHBvbGxpdG8uc3JjID0gaW1hZ2VuUG9sbG87XG5cbiAgICAgICAgaW5pY2lvQ29udGVudC5pbm5lckhUTUwgPSBgQmllbnZlbmlkbyBhIEtva29yaWtvLCBcXHJcXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb25kZSBlbmN1ZW50cmFzIGVsIG1lam9yIHBvbGxvIGRlbCBwYWlzXFxyXFxuYFxuICAgICAgICBpbmljaW9Db250ZW50LmFwcGVuZENoaWxkKHBvbGxpdG8pO1xuICAgICAgICBpbmljaW9Db250ZW50LmlubmVySFRNTCArPWBcXHJcXG5EZWwgY2FtcG8gYSB0dSBtZXNhYDtcbiAgICAgICAgaW5pY2lvQ29udGVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3doaXRlLXNwYWNlOiBwcmUtbGluZScpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGluaWNpb0NvbnRlbnQpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICBjb25zdCBlcmFzZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9CZVJlbW92ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuZmlyc3RDaGlsZDtcbiAgICAgICAgaWYgKCEhdG9CZVJlbW92ZWQpe1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHRvQmVSZW1vdmVkKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBcbiAgICByZXR1cm4ge2NyZWF0ZSAsIGVyYXNlfVxufSkoKVxuXG5leHBvcnQge2luaWNpb0Z1bmN0aW9uVGFifSIsImltcG9ydCBpbWdDb21ib0Zhc2FkbyBmcm9tIFwiLi9pbWFnZXMvQVNBRE9fRkFNSUxJQVIucG5nXCI7XG5pbXBvcnQgaW1nS29tYmlBc2FkbyBmcm9tIFwiLi9pbWFnZXMvS09NQllfQVNBRE8ucG5nXCI7XG5pbXBvcnQgaW1nQ29tYm84UHJlc2FzIGZyb20gXCIuL2ltYWdlcy9vY2hvcHJlc2FzLnBuZ1wiO1xuaW1wb3J0IGltZ0Jvd2xCYnEgZnJvbSBcIi4vaW1hZ2VzL0Jvd2xCQlEucG5nXCI7XG5pbXBvcnQgaW1nRW5zYWxhZGFQb2xsbyBmcm9tIFwiLi9pbWFnZXMvZW5zYWxhZGFfcG9sbG8ucG5nXCI7XG5pbXBvcnQgYmFubmVyUHJvbW9jaW9uIGZyb20gXCIuL2ltYWdlcy9iYW5uZXJQcm9tb2Npb24ucG5nXCI7XG5cbmNvbnN0IG1lbnVGdW5jdGlvblRhYiA9ICgoKSA9PntcbiAgICBjb25zdCBjcmVhdGUgPSAoKT0+e1xuICAgICAgICBlcmFzZSgpO1xuICAgICAgICBjb25zdCB0YWJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFiQ29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwibWVudUNvbnRlbnRcIik7XG5cbiAgICAgICAgY29uc3QgYmFubmVyUHJvbW8gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmFubmVyUHJvbW8uc3JjID0gYmFubmVyUHJvbW9jaW9uO1xuICAgICAgICBiYW5uZXJQcm9tby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiYmFubmVyUHJvbW9cIilcbiAgICAgICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChiYW5uZXJQcm9tbyk7XG5cbiAgICAgICAgbGV0IGRpc2ggPSBjbGFzcyB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcih0aXRsZSAsIHByaWNlICwgZGVzY3JpcHRpb24sIGltYWdlKSB7XG4gICAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xuICAgICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgICAgICAgICAgICAgZGlzaGVzLnB1c2godGhpcyk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkaXNoZXMgPSBbXTtcbiAgICAgICAgY29uc3QgY29tYm9GYXNhZG8gPSBuZXcgZGlzaCAoXCJDb21ibyBmYW1pbGlhciBhc2Fkb1wiLCBcIiQ1OSw5MDAgQ09QXCIgLCBcIkVsIHRyYWRpY2lvbmFsIHkgw7puaWNvIHNhYm9yIGRlbCBLb2tvcmlrbyBBc2FkbyBwYXJhIGNvbXBhcnRpci4gMSB5IDEvMiBLb2tvcmlrbyBhc2FkbyAoMTIgcHJlc2FzKSArIHZlaW50ZSAoMjApIGFyZXBhcyB5IDMgdW5kIGRlIGFqw60uXCIsaW1nQ29tYm9GYXNhZG8pO1xuICAgICAgICBjb25zdCBrb21iaUFzYWRvID0gbmV3IGRpc2ggKFwiS29tYmkgYXNhZG9cIiwgXCIkMjAsOTAwIENPUFwiLCBcIkRvcyAoMikgcHJlc2FzIGRlIEtva29yaWtvIGFzYWRvLCBmcsOtam9sIGNvbiBjYXJuZSBtb2xpZGEsIGFycm96LCB1bmEgKDEpIGFyZXBhLCB1bmEgKDEpIENvY2EtQ29sYSA0MDAgbWwgeSAxIHVuZCBkZSBhasOtLiBQcmVjaW8gdsOhbGlkbyDDum5pY2FtZW50ZSBwYXJhIGVsIGNhbmFsIGRlIGRvbWljaWxpb3MuXCIsaW1nS29tYmlBc2Fkbyk7XG4gICAgICAgIGNvbnN0IGNvbWJvOFByZXNhcyA9IG5ldyBkaXNoIChcIkNvbWJvIDggcHJlc2FzXCIsXCIkNDIsOTAwIENPUFwiLFwiT2NobyAoOCkgcHJlc2FzIGRlIGtva29yaWtyb25jaCBzaW4gYWNvbXBhw7FhbWllbnRvcyB5IDQgdW5kIGRlIG1pZWxcIixpbWdDb21ibzhQcmVzYXMpO1xuICAgICAgICBjb25zdCBib3dsQmJxID0gbmV3IGRpc2ggKFwiQm93bCBCQlFcIixcIiQyNSw5MDAgQ09QXCIsXCJTaWV0ZSAoNykgdHJvem9zIGRlIHBvbGxvIGtyb25jaCBiYcOxYWRvcyBlbiBudWVzdHJhIHNhbHNhIEJCUSwgYWNvbXBhw7FhZG9zIGRlIGFndWFjYXRlIHkgcGljbyBkZSBnYWxsbywgYXJyb3ogYSBlbGVjY2nDs24geSBwYXBhIGRlIGxhIGNhc2EgbyB5dWNhLlwiLGltZ0Jvd2xCYnEpO1xuICAgICAgICBjb25zdCBlbnNhbGFkYVBvbGxvID0gbmV3IGRpc2ggKFwiRW5zYWxhZGEgY29uIHBvbGxvXCIsXCIkMjMsOTAwIENPUFwiLFwiRmlsZXRlIGRlIHBlY2h1Z2EgYSBsYSBwbGFuY2hhIGRlIDkwIGcsIG1peCBkZSBsZWNodWdhIHJvbWFuYSB5IGNyZXNwYSwgdG9tYXRlLCBxdWVzbyBtb3p6YXJlbGxhLCBqYW3Ds24sIG1hw616IGR1bGNlLCBhZ3VhY2F0ZSwgY2lsYW50cm8geSB2aW5hZ3JldGEuXCIsaW1nRW5zYWxhZGFQb2xsbyk7XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlQ2FyZHMgKCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBkaXNoIG9mIGRpc2hlcyl7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiY2FyZFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51UGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgICAgIG1lbnVQaWN0dXJlLnNyYyA9IGRpc2guaW1hZ2U7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGNhcmRUZXh0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJjYXJkVGV4dFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGNhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiY2FyZFRpdGxlXCIpO1xuICAgICAgICAgICAgICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IGRpc2gudGl0bGU7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBjYXJkUHJpY2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImNhcmRQcmljZVwiKTtcbiAgICAgICAgICAgICAgICBjYXJkUHJpY2UudGV4dENvbnRlbnQgPSBkaXNoLnByaWNlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJjYXJkRGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICAgICAgY2FyZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGlzaC5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICBjYXJkVGV4dC5hcHBlbmQoY2FyZFRpdGxlICwgY2FyZFByaWNlICwgY2FyZERlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKG1lbnVQaWN0dXJlKTtcbiAgICAgICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUZXh0KTtcbiAgICAgICAgICAgICAgICB0YWJDb250ZW50LmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZUNhcmRzKCk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJDb250ZW50KTtcbiAgICB9XG4gICAgY29uc3QgZXJhc2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvQmVSZW1vdmVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmZpcnN0Q2hpbGQ7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQodG9CZVJlbW92ZWQpO1xuICAgIH1cblxuICAgIFxuICAgIHJldHVybiB7Y3JlYXRlICwgZXJhc2V9XG59KSgpXG5cbmV4cG9ydCB7bWVudUZ1bmN0aW9uVGFifTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=