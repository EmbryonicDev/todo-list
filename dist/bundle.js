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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dom */ \"./src/pages/dom.js\");\n\n\n\n(0,_pages_dom__WEBPACK_IMPORTED_MODULE_0__.buildDom)(_pages_dom__WEBPACK_IMPORTED_MODULE_0__.header, _pages_dom__WEBPACK_IMPORTED_MODULE_0__.sidebar);\n\nconsole.log('Locked \\n \\n(⊙.⊙(☉̃ₒ☉)⊙.⊙) \\n \\n & Loaded ');\n\n\n//# sourceURL=webpack://11-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/pages/dom.js":
/*!**************************!*\
  !*** ./src/pages/dom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildDom\": () => (/* binding */ buildDom),\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"sidebar\": () => (/* binding */ sidebar)\n/* harmony export */ });\n/* harmony import */ var _functions_global_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/global-functions */ \"./src/functions/global-functions.js\");\n/* harmony import */ var _assets_icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/menu.svg */ \"./src/assets/icons/menu.svg\");\n/* harmony import */ var _assets_icons_task_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/task-icon.svg */ \"./src/assets/icons/task-icon.svg\");\n/* harmony import */ var _assets_icons_all_tasks_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/all-tasks.svg */ \"./src/assets/icons/all-tasks.svg\");\n/* harmony import */ var _assets_icons_today_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/today-icon.svg */ \"./src/assets/icons/today-icon.svg\");\n/* harmony import */ var _assets_icons_week_icon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/week-icon.svg */ \"./src/assets/icons/week-icon.svg\");\n/* harmony import */ var _assets_icons_priority_high_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/priority-high.svg */ \"./src/assets/icons/priority-high.svg\");\n\n\n\n\n\n\n\n\n// add header\nconst header = (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('HEADER', { id: 'myHeader' }, document.body,\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: _assets_icons_menu_svg__WEBPACK_IMPORTED_MODULE_1__ }, ''),\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { id: 'iconTitle' }, '',\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: _assets_icons_task_icon_svg__WEBPACK_IMPORTED_MODULE_2__ }, ''),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('h1', '', '', \"Todo List\")\n  )\n);\n\n// Add sidebar\nconst sidebar = (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { id: 'sidebar' }, document.body,\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('h2', { class: 'sideTitle' }, '', 'Quick View'),\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('hr', '', ''),\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: \"sideNav\" }, '',\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: _assets_icons_all_tasks_svg__WEBPACK_IMPORTED_MODULE_3__ }, ''),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', '', '', 'All Tasks')\n  ),\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: \"sideNav\" }, '',\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: _assets_icons_today_icon_svg__WEBPACK_IMPORTED_MODULE_4__ }, ''),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', '', '', 'Today')\n  ),\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: \"sideNav\" }, '',\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: _assets_icons_week_icon_svg__WEBPACK_IMPORTED_MODULE_5__ }, ''),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', '', '', 'Next 7 days')\n  ),\n  (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', { class: \"sideNav\" }, '',\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('img', { src: _assets_icons_priority_high_svg__WEBPACK_IMPORTED_MODULE_6__ }, ''),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('div', '', '', 'High Priority'),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('h2', { class: 'sideTitle' }, '', 'Projects'),\n    (0,_functions_global_functions__WEBPACK_IMPORTED_MODULE_0__.elFactory)('hr', '', ''),\n  )\n);\n\nfunction buildDom(...domElements) {\n  domElements.forEach(element => {\n    return element;\n  });\n};\n\n\n\n\n//# sourceURL=webpack://11-todo-list/./src/pages/dom.js?");

/***/ }),

/***/ "./src/assets/icons/all-tasks.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/all-tasks.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c4e803fe46ce4ffc8a2e.svg\";\n\n//# sourceURL=webpack://11-todo-list/./src/assets/icons/all-tasks.svg?");

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