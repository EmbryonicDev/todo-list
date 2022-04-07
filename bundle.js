/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/forms.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/forms.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* for all forms */\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  position: absolute;\\n  top: 100px;\\n  left: 380px;\\n  border: solid red;\\n  padding: 12px;\\n  gap: 15px;\\n}\\n\\ntextarea {\\n  resize: none;\\n  overflow-y: scroll;\\n}\\n\\nform p {\\n  display: grid;\\n  grid-auto-flow: column;\\n  justify-content: start;\\n  align-items: center;\\n  margin: 0;\\n}\\n\\nform label {\\n  width: 100px;\\n  text-align: end;\\n  margin-right: 8px;\\n}\\n\\nform p:last-of-type label {\\n  align-self: start;\\n}\\n\\n.formBtnDiv {\\n  display: flex;\\n  justify-content: center;\\n  gap: 18px;\\n}\\n\\n/* project form */\\n#projectForm label {\\n  width: fit-content;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://11-todo-list/./src/styles/forms.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/modern-normalize.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/modern-normalize.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\\n\\n/*\\nDocument\\n========\\n*/\\n\\n/**\\nUse a better box model (opinionated).\\n*/\\n\\n*,\\n::before,\\n::after {\\n\\tbox-sizing: border-box;\\n}\\n\\n/**\\n1. Correct the line height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n3. Use a more readable tab size (opinionated).\\n*/\\n\\nhtml {\\n\\tline-height: 1.15; /* 1 */\\n\\t-webkit-text-size-adjust: 100%; /* 2 */\\n\\t-moz-tab-size: 4; /* 3 */\\n\\ttab-size: 4; /* 3 */\\n}\\n\\n/*\\nSections\\n========\\n*/\\n\\n/**\\n1. Remove the margin in all browsers.\\n2. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\\n*/\\n\\nbody {\\n\\tmargin: 0; /* 1 */\\n\\tfont-family:\\n\\t\\tsystem-ui,\\n\\t\\t-apple-system, /* Firefox supports this but not yet `system-ui` */\\n\\t\\t'Segoe UI',\\n\\t\\tRoboto,\\n\\t\\tHelvetica,\\n\\t\\tArial,\\n\\t\\tsans-serif,\\n\\t\\t'Apple Color Emoji',\\n\\t\\t'Segoe UI Emoji'; /* 2 */\\n}\\n\\n/*\\nGrouping content\\n================\\n*/\\n\\n/**\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n*/\\n\\nhr {\\n\\theight: 0; /* 1 */\\n\\tcolor: inherit; /* 2 */\\n}\\n\\n/*\\nText-level semantics\\n====================\\n*/\\n\\n/**\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\n\\nabbr[title] {\\n\\ttext-decoration: underline dotted;\\n}\\n\\n/**\\nAdd the correct font weight in Edge and Safari.\\n*/\\n\\nb,\\nstrong {\\n\\tfont-weight: bolder;\\n}\\n\\n/**\\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\\n2. Correct the odd 'em' font sizing in all browsers.\\n*/\\n\\ncode,\\nkbd,\\nsamp,\\npre {\\n\\tfont-family:\\n\\t\\tui-monospace,\\n\\t\\tSFMono-Regular,\\n\\t\\tConsolas,\\n\\t\\t'Liberation Mono',\\n\\t\\tMenlo,\\n\\t\\tmonospace; /* 1 */\\n\\tfont-size: 1em; /* 2 */\\n}\\n\\n/**\\nAdd the correct font size in all browsers.\\n*/\\n\\nsmall {\\n\\tfont-size: 80%;\\n}\\n\\n/**\\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\\n*/\\n\\nsub,\\nsup {\\n\\tfont-size: 75%;\\n\\tline-height: 0;\\n\\tposition: relative;\\n\\tvertical-align: baseline;\\n}\\n\\nsub {\\n\\tbottom: -0.25em;\\n}\\n\\nsup {\\n\\ttop: -0.5em;\\n}\\n\\n/*\\nTabular data\\n============\\n*/\\n\\n/**\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n*/\\n\\ntable {\\n\\ttext-indent: 0; /* 1 */\\n\\tborder-color: inherit; /* 2 */\\n}\\n\\n/*\\nForms\\n=====\\n*/\\n\\n/**\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n*/\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n\\tfont-family: inherit; /* 1 */\\n\\tfont-size: 100%; /* 1 */\\n\\tline-height: 1.15; /* 1 */\\n\\tmargin: 0; /* 2 */\\n}\\n\\n/**\\nRemove the inheritance of text transform in Edge and Firefox.\\n*/\\n\\nbutton,\\nselect {\\n\\ttext-transform: none;\\n}\\n\\n/**\\nCorrect the inability to style clickable types in iOS and Safari.\\n*/\\n\\nbutton,\\n[type='button'],\\n[type='reset'],\\n[type='submit'] {\\n\\t-webkit-appearance: button;\\n}\\n\\n/**\\nRemove the inner border and padding in Firefox.\\n*/\\n\\n::-moz-focus-inner {\\n\\tborder-style: none;\\n\\tpadding: 0;\\n}\\n\\n/**\\nRestore the focus styles unset by the previous rule.\\n*/\\n\\n:-moz-focusring {\\n\\toutline: 1px dotted ButtonText;\\n}\\n\\n/**\\nRemove the additional ':invalid' styles in Firefox.\\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\\n*/\\n\\n:-moz-ui-invalid {\\n\\tbox-shadow: none;\\n}\\n\\n/**\\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\\n*/\\n\\nlegend {\\n\\tpadding: 0;\\n}\\n\\n/**\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\n\\nprogress {\\n\\tvertical-align: baseline;\\n}\\n\\n/**\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n\\n::-webkit-inner-spin-button,\\n::-webkit-outer-spin-button {\\n\\theight: auto;\\n}\\n\\n/**\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n\\n[type='search'] {\\n\\t-webkit-appearance: textfield; /* 1 */\\n\\toutline-offset: -2px; /* 2 */\\n}\\n\\n/**\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n\\n::-webkit-search-decoration {\\n\\t-webkit-appearance: none;\\n}\\n\\n/**\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to 'inherit' in Safari.\\n*/\\n\\n::-webkit-file-upload-button {\\n\\t-webkit-appearance: button; /* 1 */\\n\\tfont: inherit; /* 2 */\\n}\\n\\n/*\\nInteractive\\n===========\\n*/\\n\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\n\\nsummary {\\n\\tdisplay: list-item;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://11-todo-list/./src/styles/modern-normalize.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root{\\n  --tempBorder: solid black;\\n}\\n\\nbody {\\n  height: 100vh;\\n  width: 100vw;\\n  display: grid;\\n  grid-template: 80px 1fr / 280px 1fr;\\n  position: relative;\\n}\\n\\n#myHeader {\\n  display: flex;\\n  justify-content: start;\\n  align-items: center;\\n  grid-column: 1 / span 2;\\n  grid-row-start: 1;\\n  border: var(--tempBorder);\\n}\\n\\n#myHeader h1 {\\n  margin: 0;\\n}\\n\\n#myHeader img {\\n  height: 3rem;\\n}\\n\\n#iconTitle {\\n  display: grid;\\n  grid-auto-flow: column;\\n  border: var(--tempBorder);\\n  align-items: center;\\n  margin-left: 45vw;\\n  gap: 5px;\\n}\\n\\n#sidebar {\\n  grid-column: 1 / 2;\\n  grid-row-start: 2;\\n  border: var(--tempBorder);\\n  padding: 0 8px;\\n}\\n\\n.sideTitleDiv {\\n  display: grid;\\n  grid-auto-flow: column;\\n  justify-content: space-between;\\n  margin-top: 20px;\\n}\\n\\n.sideTitleDiv button {\\n  width: fit-content;\\n  border: none;\\n  background-color: transparent;\\n  font-size: 1.8rem;\\n\\n}\\n\\n.sideTitle {\\n  margin: 0;\\n}\\n\\n.sideNav {\\n  display: grid;\\n  grid-auto-flow: column;\\n  justify-content: flex-start;\\n  align-items: flex-end;\\n  gap: 6px;\\n  margin-bottom: 16px;\\n}\\n\\n.projectWrap {\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  gap: 6px;\\n  border: var(--tempBorder);\\n}\\n\\n.projectWrap h3 {\\n  margin: 0 auto 0 0;\\n}\\n\\n.projectWrap button {\\n  border: none;\\n  color: red;\\n  background-color: transparent;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://11-todo-list/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://11-todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://11-todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/forms.css":
/*!******************************!*\
  !*** ./src/styles/forms.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./forms.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/forms.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://11-todo-list/./src/styles/forms.css?");

/***/ }),

/***/ "./src/styles/modern-normalize.css":
/*!*****************************************!*\
  !*** ./src/styles/modern-normalize.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modern-normalize.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/modern-normalize.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://11-todo-list/./src/styles/modern-normalize.css?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://11-todo-list/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://11-todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/functions/global-functions.js":
/*!*******************************************!*\
  !*** ./src/functions/global-functions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"elFactory\": () => (/* binding */ elFactory)\n/* harmony export */ });\nconst elFactory = (type, attributes, appendTo, ...children) => {\n  const el = document.createElement(type)\n\n  for (let key in attributes) {\n    el.setAttribute(key, attributes[key])\n  }\n\n  children.forEach(child => {\n    if (typeof child === 'string') {\n      el.appendChild(document.createTextNode(child))\n    } else {\n      el.appendChild(child)\n    }\n  })\n\n  if (appendTo != \"\") appendTo.append(el);\n\n  return el\n};\n\n//# sourceURL=webpack://11-todo-list/./src/functions/global-functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dom */ \"./src/pages/dom.js\");\n/* harmony import */ var _src_styles_modern_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/styles/modern-normalize.css */ \"./src/styles/modern-normalize.css\");\n/* harmony import */ var _src_styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _src_styles_forms_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/styles/forms.css */ \"./src/styles/forms.css\");\n/* harmony import */ var _pages_tasks_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/tasks.js */ \"./src/pages/tasks.js\");\n/* harmony import */ var _pages_projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/projects */ \"./src/pages/projects.js\");\n\n\n\n\n\n\n\n\n(0,_pages_dom__WEBPACK_IMPORTED_MODULE_0__.buildDom)(_pages_dom__WEBPACK_IMPORTED_MODULE_0__.header, _pages_dom__WEBPACK_IMPORTED_MODULE_0__.sidebar);\n\n(0,_pages_projects__WEBPACK_IMPORTED_MODULE_5__.getStoredProjects)();\n\n(0,_pages_tasks_js__WEBPACK_IMPORTED_MODULE_4__.getTaskForm)();\n(0,_pages_projects__WEBPACK_IMPORTED_MODULE_5__.getProjectForm)();\n\n(0,_pages_projects__WEBPACK_IMPORTED_MODULE_5__.getProjectsArr)();\n\nconsole.log('Locked \\n \\n(⊙.⊙(☉̃ₒ☉)⊙.⊙) \\n \\n & Loaded ');\n\n\n//# sourceURL=webpack://11-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/pages/dom.js":
/*!**************************!*\
  !*** ./src/pages/dom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeProjects\": () => (/* binding */ activeProjects),\n/* harmony export */   \"addProjectForm\": () => (/* binding */ addProjectForm),\n/* harmony export */   \"addTaskForm\": () => (/* binding */ addTaskForm),\n/* harmony export */   \"buildDom\": () => (/* binding */ buildDom),\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"newProject\": () => (/* binding */ newProject),\n/* harmony export */   \"sidebar\": () => (/* binding */ sidebar)\n/* harmony export */ });\n/* harmony import */ var _functions_global_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/global-functions */ \"./src/functions/global-functions.js\");\n/* harmony import */ var _assets_icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/menu.svg */ \"./src/assets/icons/menu.svg\");\n/* harmony import */ var _assets_icons_task_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/task-icon.svg */ \"./src/assets/icons/task-icon.svg\");\n/* harmony import */ var _assets_icons_all_tasks_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/all-tasks.svg */ \"./src/assets/icons/all-tasks.svg\");\n/* harmony import */ var _assets_icons_today_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/today-icon.svg */ \"./src/assets/icons/today-icon.svg\");\n/* harmony import */ var _assets_icons_week_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/week-icon.svg */ \"./src/assets/icons/week-icon.svg\");\n/* harmony import */ var _assets_icons_priority_high_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/priority-high.svg */ \"./src/assets/icons/priority-high.svg\");\n/* harmony import */ var _assets_icons_dots_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/dots.svg */ \"./src/assets/icons/dots.svg\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects */ \"./src/pages/projects.js\");\n\n\n\n\n\n\n\n\n\n\nconst activeProjects = JSON.parse(localStorage.getItem(\"activeProjects\")) || [];\n\n// add header\nconst header = (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('HEADER', { id: 'myHeader' }, document.body,\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: _assets_icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__ }, ''),\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { id: 'iconTitle' }, '',\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: _assets_icons_task_icon_svg__WEBPACK_IMPORTED_MODULE_2__ }, ''),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('h1', '', '', \"Todo List\")\n  )\n);\n\n// Add sidebar\nconst sidebar = (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { id: 'sidebar' }, document.body,\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: 'sideTitleDiv' }, '',\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('h2', { class: 'sideTitle' }, '', 'Tasks'),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('button', { id: 'addTaskBtn' }, '', '+')\n  ),\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('hr', '', ''),\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: \"sideNav\" }, '',\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: _assets_icons_all_tasks_svg__WEBPACK_IMPORTED_MODULE_3__ }, ''),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', '', '', 'All Tasks')\n  ),\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: \"sideNav\" }, '',\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: _assets_icons_today_icon_svg__WEBPACK_IMPORTED_MODULE_4__ }, ''),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', '', '', 'Today')\n  ),\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: \"sideNav\" }, '',\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: _assets_icons_week_icon_svg__WEBPACK_IMPORTED_MODULE_5__ }, ''),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', '', '', 'Next 7 days')\n  ),\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: \"sideNav\" }, '',\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: _assets_icons_priority_high_svg__WEBPACK_IMPORTED_MODULE_6__ }, ''),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', '', '', 'High Priority'),\n  ),\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: 'sideTitleDiv' }, '',\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('h2', { class: 'sideTitle' }, '', 'Projects'),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('button', { id: 'addProjectBtn' }, '', '+')\n  ),\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('hr', '', ''),\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { id: 'projectsDiv' }, '',\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: 'projectWrap' }, '',\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: _assets_icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__ }, ''),\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('h3', '', '', 'General Tasks')\n    )\n  )\n);\n\n// add task form \nfunction addTaskForm() {\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('form', { id: 'taskForm' }, document.body,\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', '', '',\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('label', { for: 'startDate' }, '', 'Start Date:'),\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('input', { type: 'date', id: 'startDate', value: new Date().toISOString().slice(0, 10) }, '')\n    ),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', '', '',\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('label', { for: 'taskName' }, '', 'Task Name: '),\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('input', { id: 'taskName' }, '')\n    ),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', '', '',\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('label', { for: 'description' }, '', 'Description: '),\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('input', { id: 'description' }, '')\n    ),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', '', '',\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('label', { for: 'dueDate' }, '', 'Due Date: '),\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('input', { type: 'date', id: 'dueDate' }, '')\n    ),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', '', '',\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('label', { for: 'projectName' }, '', 'Project: '),\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('select', { id: 'projectName' }, '',\n      )\n    ),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', '', '',\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('label', { for: 'priority' }, '', 'Priority: '),\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('select', { id: 'priority' }, '',\n        (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('option', { id: 'priorityMedium' }, '', \"Medium\"),\n        (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('option', { id: 'priorityHigh' }, '', \"High\"),\n        (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('option', { id: 'priorityLow' }, '', \"Low\")\n      )\n    ),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', '', '',\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('label', { for: 'Notes' }, '', 'Notes:'),\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('textarea', { id: 'notes', cols: \"30\", rows: \"10\", placeHolder: 'Add your notes here...' }, '')\n    ),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: 'formBtnDiv' }, '',\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('button', { type: 'submit', id: 'taskSubmit' }, '', 'Add Task'),\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('button', { class: 'cancelBtn' }, '', 'Cancel'),\n    )\n  );\n  // add project names to task form's project dropdown list\n  (() => {\n    _projects__WEBPACK_IMPORTED_MODULE_8__.projectsArr.forEach(project => {\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('option', '', projectName, project);\n    });\n  })();\n}\n\n// add project form\nfunction addProjectForm() {\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('form', { id: 'projectForm' }, document.body,\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('p', '', '',\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('label', { for: 'newProjectName' }, '', 'New Project Name:'),\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('input', { id: 'newProjectName', name: 'newProjectName' }, ''),\n    ),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: 'formBtnDiv' }, '',\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('button', { type: 'submit', id: 'projectSubmit' }, '', 'Add Project'),\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('button', { class: 'cancelBtn' }, '', 'Cancel'),\n    )\n  )\n};\n\n// add new project\nconst newProject = (projectName, checkActiveProjects) => {\n  const parent = document.getElementById('projectsDiv');\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: 'projectWrap' }, parent,\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: _assets_icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__ }, ''),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('h3', '', '', projectName),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: _assets_icons_dots_svg__WEBPACK_IMPORTED_MODULE_7__, class: 'projectMenu' }, '')\n  )\n  // ensures that projects in local storage are not duplicated\n  if(checkActiveProjects) {\n    activeProjects.push(projectName);\n    localStorage.setItem(\"activeProjects\", JSON.stringify(activeProjects));\n  }\n}\n\nfunction buildDom(...domElements) {\n  domElements.forEach(element => {\n    return element;\n  });\n};\n\n\n\n\n//# sourceURL=webpack://11-todo-list/./src/pages/dom.js?");

/***/ }),

/***/ "./src/pages/projects.js":
/*!*******************************!*\
  !*** ./src/pages/projects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProjectForm\": () => (/* binding */ getProjectForm),\n/* harmony export */   \"getProjectsArr\": () => (/* binding */ getProjectsArr),\n/* harmony export */   \"getStoredProjects\": () => (/* binding */ getStoredProjects),\n/* harmony export */   \"projectsArr\": () => (/* binding */ projectsArr)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/pages/dom.js\");\n\n\n\nlet projectsArr = JSON.parse(localStorage.getItem(\"projectsArr\")) || [];\n\nconst getStoredProjects = () => {\n  if(_dom__WEBPACK_IMPORTED_MODULE_0__.activeProjects.length > 0) {\n    _dom__WEBPACK_IMPORTED_MODULE_0__.activeProjects.forEach(element => {\n      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.newProject)(element);\n    });\n  }\n}\n\nconst getProjectsArr = () => {\n  projectsArr = [];\n  document.querySelectorAll(\".projectWrap h3\").forEach(project => {\n    projectsArr.push(project.innerText);\n  })\n}\n\nconst getProjectForm = () => {\n  document.getElementById('addProjectBtn').onclick = (e) => {\n    // check if any form is on screen\n    if (!document.getElementById('projectForm') && !document.getElementById('taskForm')) {\n      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addProjectForm)();\n      projectSubmit();\n      cancelProject();\n    }\n  }\n}\n\nconst projectSubmit = () => {\n  document.getElementById('projectSubmit').onclick = (e) => {\n    e.preventDefault();\n    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.newProject)(projectForm.newProjectName.value, true);\n    removeProjectForm();\n    getProjectsArr();\n  }\n}\n\nconst cancelProject = () => {\n  document.querySelector('#projectForm .cancelBtn').onclick = (e) => {\n    e.preventDefault();\n      removeProjectForm();\n  }\n};\n\nconst removeProjectForm = () => {\n  projectForm.parentElement.removeChild(projectForm);\n}\n\n\n//# sourceURL=webpack://11-todo-list/./src/pages/projects.js?");

/***/ }),

/***/ "./src/pages/tasks.js":
/*!****************************!*\
  !*** ./src/pages/tasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTaskForm\": () => (/* binding */ getTaskForm)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/pages/dom.js\");\n\n\nlet tasksArr = JSON.parse(localStorage.getItem(\"tasksArr\")) || [];\n\nconst getTaskForm = () => {\n  document.getElementById('addTaskBtn').onclick = (e) => {\n    if (!document.getElementById('taskForm') && !document.getElementById('projectForm')) (0,_dom__WEBPACK_IMPORTED_MODULE_0__.addTaskForm)();\n    submitTaskBtn();\n    cancelTask();\n  }\n}\n\nconst submitTaskBtn = () => {\n  document.getElementById('taskSubmit').onclick = (e) => {\n    e.preventDefault();\n    let newTask = taskFactory(startDate.value, taskName.value, description.value, dueDate.value, projectName.value, priority.value, notes.value);\n\n    tasksArr.push(newTask);\n    localStorage.setItem(\"tasksArr\", JSON.stringify(tasksArr));\n\n    removeTasksForm();\n  }\n};\n\nconst cancelTask = () => {\n  document.querySelector('#taskForm .cancelBtn').onclick = (e) => {\n    e.preventDefault();\n      removeTasksForm();\n  }\n};\n\nconst removeTasksForm = () => {\n  const taskForm = document.getElementById('taskForm');\n  taskForm.parentElement.removeChild(taskForm);\n}\n\nconst taskFactory = (startDate, taskName, description, dueDate, project, priority, notes) => {\n  return {\n    taskName: taskName,\n    startDate: startDate,\n    description: description,\n    dueDate: dueDate,\n    project: project,\n    priority: priority,\n    notes: notes,\n  }\n};\n\n//# sourceURL=webpack://11-todo-list/./src/pages/tasks.js?");

/***/ }),

/***/ "./src/assets/icons/all-tasks.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/all-tasks.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c4e803fe46ce4ffc8a2e.svg\";\n\n//# sourceURL=webpack://11-todo-list/./src/assets/icons/all-tasks.svg?");

/***/ }),

/***/ "./src/assets/icons/dots.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/dots.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7283ce33bca9fdbb6e35.svg\";\n\n//# sourceURL=webpack://11-todo-list/./src/assets/icons/dots.svg?");

/***/ }),

/***/ "./src/assets/icons/menu.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/menu.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f00e2080025681cdfae3.svg\";\n\n//# sourceURL=webpack://11-todo-list/./src/assets/icons/menu.svg?");

/***/ }),

/***/ "./src/assets/icons/priority-high.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/priority-high.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cd1cfadb8bc0a4f75e1f.svg\";\n\n//# sourceURL=webpack://11-todo-list/./src/assets/icons/priority-high.svg?");

/***/ }),

/***/ "./src/assets/icons/task-icon.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/task-icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f8bb494ab5bbe83e3362.svg\";\n\n//# sourceURL=webpack://11-todo-list/./src/assets/icons/task-icon.svg?");

/***/ }),

/***/ "./src/assets/icons/today-icon.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/today-icon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"026599f9eca46bc8f47e.svg\";\n\n//# sourceURL=webpack://11-todo-list/./src/assets/icons/today-icon.svg?");

/***/ }),

/***/ "./src/assets/icons/week-icon.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/week-icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b3a8c5393486225ddc6.svg\";\n\n//# sourceURL=webpack://11-todo-list/./src/assets/icons/week-icon.svg?");

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;