/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["aUtils"] = factory();
	else
		root["aUtils"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Array/concat.js":
/*!*****************************!*\
  !*** ./src/Array/concat.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"concat\": () => (/* binding */ concat)\n/* harmony export */ });\nfunction concat(array,...values){\r\n    const arr = [...array]\r\n    values.forEach(value => {\r\n        if(Array.isArray(value)){\r\n            arr.push(...value)\r\n        }\r\n        arr.push(value)\r\n    })\r\n    return arr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/Array/concat.js?");

/***/ }),

/***/ "./src/Array/declares.js":
/*!*******************************!*\
  !*** ./src/Array/declares.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"every\": () => (/* binding */ every),\n/* harmony export */   \"filter\": () => (/* binding */ filter),\n/* harmony export */   \"find\": () => (/* binding */ find),\n/* harmony export */   \"findIndex\": () => (/* binding */ findIndex),\n/* harmony export */   \"map\": () => (/* binding */ map),\n/* harmony export */   \"reduce\": () => (/* binding */ reduce),\n/* harmony export */   \"some\": () => (/* binding */ some)\n/* harmony export */ });\nfunction map(ary, callback) {\r\n    let arr = []\r\n    for (let index = 0; index < ary.length; index++) {\r\n        arr.push(callback(ary[index], ary))\r\n    }\r\n    return arr\r\n}\r\n\r\nfunction reduce (ary,callback, initVal) {\r\n    let result = initVal\r\n    for (let index = 0; index < ary.length; index++) {\r\n        result = callback(result, ary[index], index)\r\n    }\r\n    return result\r\n}\r\n\r\nfunction filter (ary,callback) {\r\n    let arr = []\r\n    for (let index = 0; index < ary.length; index++) {\r\n        if (callback(ary[index], index)) {\r\n            arr.push(ary[index])\r\n        }\r\n    }\r\n    return arr\r\n}\r\n\r\nfunction find (ary,callback) {\r\n    for (let index = 0; index < ary.length; index++) {\r\n        if (callback(ary[index], index)) {\r\n            return ary[index]\r\n        }\r\n    }\r\n    return undefined\r\n}\r\n\r\nfunction findIndex (ary,callback) {\r\n    for (let index = 0; index < ary.length; index++) {\r\n        if (callback(ary[index], index)) {\r\n            return index\r\n        }\r\n    }\r\n    return -1\r\n}\r\n\r\nfunction every (ary,callback) {\r\n    for (let index = 0; index < ary.length; index++) {\r\n        if (!callback(ary[index], index)) {\r\n            return false\r\n        }\r\n    }\r\n    return true\r\n}\r\n\r\nfunction some (ary,callback) {\r\n    for (let index = 0; index < ary.length; index++) {\r\n        if (callback(ary[index], index)) {\r\n            return true\r\n        }\r\n    }\r\n    return false\r\n}\n\n//# sourceURL=webpack://aUtils/./src/Array/declares.js?");

/***/ }),

/***/ "./src/Array/slice.js":
/*!****************************!*\
  !*** ./src/Array/slice.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slice\": () => (/* binding */ slice)\n/* harmony export */ });\nfunction slice(array,begin,end){\r\n    let arr = []\r\n\r\n    if(array.length === 0){\r\n        return arr\r\n    }\r\n    if(begin < 0){\r\n        begin = 0\r\n    }\r\n    if(end > array.length){\r\n        end = array.length\r\n    }\r\n\r\n    begin = begin || 0\r\n    end = end || array.length\r\n\r\n    for(let index = begin;index < end;index++){\r\n        arr.push(array[index])\r\n    }\r\n\r\n    return arr\r\n}\n\n//# sourceURL=webpack://aUtils/./src/Array/slice.js?");

/***/ }),

/***/ "./src/Array/unique.js":
/*!*****************************!*\
  !*** ./src/Array/unique.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unique1\": () => (/* binding */ unique1),\n/* harmony export */   \"unique2\": () => (/* binding */ unique2),\n/* harmony export */   \"unique3\": () => (/* binding */ unique3)\n/* harmony export */ });\nfunction unique1(array){\r\n    let arr = []\r\n    array.forEach(item => {\r\n        if(arr.indexOf(item) === -1){\r\n            arr.push(item)\r\n        }  \r\n    })\r\n    return arr\r\n}\r\n\r\nfunction unique2(array){\r\n    let arr = []\r\n    const container = {}\r\n    array.forEach(item => {\r\n        if(!container.hasOwnProperty(item)){\r\n            arr.push(item)\r\n            container[item] = true\r\n        }\r\n    })\r\n    return arr\r\n}\r\n\r\nfunction unique3(array){\r\n    // return Array.from(new Set(array)) \r\n    return [...new Set(array)]\r\n}\n\n//# sourceURL=webpack://aUtils/./src/Array/unique.js?");

/***/ }),

/***/ "./src/function/apply.js":
/*!*******************************!*\
  !*** ./src/function/apply.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* binding */ apply)\n/* harmony export */ });\nfunction apply (fn,obj,args){\r\n    if(obj === 'undefined' || obj === 'null'){\r\n        obj = window\r\n    }\r\n    obj.tempFn = fn\r\n    const result = obj.tempFn(...args)\r\n    delete obj.tempFn\r\n    return result\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/apply.js?");

/***/ }),

/***/ "./src/function/bind.js":
/*!******************************!*\
  !*** ./src/function/bind.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bind\": () => (/* binding */ bind)\n/* harmony export */ });\nfunction bind(fn,obj,...args1){\r\n    return (...args2) => {\r\n        fn.call(obj,...args1,...args2)\r\n    }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/bind.js?");

/***/ }),

/***/ "./src/function/call.js":
/*!******************************!*\
  !*** ./src/function/call.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"call\": () => (/* binding */ call)\n/* harmony export */ });\n function call (fn,obj,...args){\r\n    if(obj === 'undefined' || obj === 'null'){\r\n        obj = window\r\n    }\r\n    obj.tempFn = fn\r\n    const result = obj.tempFn(...args)\r\n    delete obj.tempFn\r\n    return result\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/function/call.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback,delay){\r\n    return function(event){\r\n        if(callback.timeOutId){\r\n            clearTimeout(callback.timeOutId)\r\n        }\r\n\r\n        callback.timeOutId = setTimeout(() => {\r\n            callback.call(this,event)\r\n            delete callback.timeOutId\r\n        },delay)\r\n    }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\nfunction throttle(callback,delay){\r\n    let pre = 0\r\n    return function(event){\r\n        console.log('节流处理事件')\r\n        const current = Date.now()\r\n        // console.log(current)\r\n        if(current - pre > delay){\r\n            callback.call(this,event)\r\n            pre = current\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://aUtils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apply\": () => (/* reexport safe */ _function_apply__WEBPACK_IMPORTED_MODULE_1__.apply),\n/* harmony export */   \"bind\": () => (/* reexport safe */ _function_bind__WEBPACK_IMPORTED_MODULE_2__.bind),\n/* harmony export */   \"call\": () => (/* reexport safe */ _function_call__WEBPACK_IMPORTED_MODULE_0__.call),\n/* harmony export */   \"concat\": () => (/* reexport safe */ _Array_concat__WEBPACK_IMPORTED_MODULE_7__.concat),\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _function_debounce__WEBPACK_IMPORTED_MODULE_3__.debounce),\n/* harmony export */   \"every\": () => (/* reexport safe */ _Array_declares__WEBPACK_IMPORTED_MODULE_5__.every),\n/* harmony export */   \"filter\": () => (/* reexport safe */ _Array_declares__WEBPACK_IMPORTED_MODULE_5__.filter),\n/* harmony export */   \"find\": () => (/* reexport safe */ _Array_declares__WEBPACK_IMPORTED_MODULE_5__.find),\n/* harmony export */   \"findIndex\": () => (/* reexport safe */ _Array_declares__WEBPACK_IMPORTED_MODULE_5__.findIndex),\n/* harmony export */   \"map\": () => (/* reexport safe */ _Array_declares__WEBPACK_IMPORTED_MODULE_5__.map),\n/* harmony export */   \"reduce\": () => (/* reexport safe */ _Array_declares__WEBPACK_IMPORTED_MODULE_5__.reduce),\n/* harmony export */   \"slice\": () => (/* reexport safe */ _Array_slice__WEBPACK_IMPORTED_MODULE_8__.slice),\n/* harmony export */   \"some\": () => (/* reexport safe */ _Array_declares__WEBPACK_IMPORTED_MODULE_5__.some),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_4__.throttle),\n/* harmony export */   \"unique1\": () => (/* reexport safe */ _Array_unique__WEBPACK_IMPORTED_MODULE_6__.unique1),\n/* harmony export */   \"unique2\": () => (/* reexport safe */ _Array_unique__WEBPACK_IMPORTED_MODULE_6__.unique2),\n/* harmony export */   \"unique3\": () => (/* reexport safe */ _Array_unique__WEBPACK_IMPORTED_MODULE_6__.unique3)\n/* harmony export */ });\n/* harmony import */ var _function_call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/call */ \"./src/function/call.js\");\n/* harmony import */ var _function_apply__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/apply */ \"./src/function/apply.js\");\n/* harmony import */ var _function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/bind */ \"./src/function/bind.js\");\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _Array_declares__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Array/declares */ \"./src/Array/declares.js\");\n/* harmony import */ var _Array_unique__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Array/unique */ \"./src/Array/unique.js\");\n/* harmony import */ var _Array_concat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Array/concat */ \"./src/Array/concat.js\");\n/* harmony import */ var _Array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Array/slice */ \"./src/Array/slice.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://aUtils/./src/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});