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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dom */ \"./src/pages/dom.js\");\n\n\n\n(0,_pages_dom__WEBPACK_IMPORTED_MODULE_0__.firstDom)();\n\nconsole.log('Locked \\n \\n(⊙.⊙(☉̃ₒ☉)⊙.⊙) \\n \\n & Loaded ');\n\n\n//# sourceURL=webpack://11-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/pages/dom.js":
/*!**************************!*\
  !*** ./src/pages/dom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firstDom\": () => (/* binding */ firstDom)\n/* harmony export */ });\n/* harmony import */ var _functions_global_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/global-functions */ \"./src/functions/global-functions.js\");\n\n\n// import [elFactory]\n\n// export function basicDom() {\nconst firstDom = () => {\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('HEADER', { id: 'myHeader' }, document.body,\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: \"../src/assets/icons/menu.svg\" }, ''),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { id: 'iconTitle' }, '',\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', {src: '../src/assets/icons/task-icon.svg'}, ''),\n      (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('h1', '', '', \"Todo List\")\n    )\n  );\n\n  // const header = document.getElementById('myHeader');\n  // header.innerText = \"what the fuck is going on here? \"\n  // document.body.insertAdjacentElement(\"afterbegin\", header);\n}\n// const test = document.createElement('div');\n// header.append(test);\n// const test = elFactory('div', { id: 'test' }, header, \"testing\");\n// // insert header as body's first child\n// };\n\n\n\n\n//# sourceURL=webpack://11-todo-list/./src/pages/dom.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;