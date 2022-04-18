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
		exports["bitmap"] = factory();
	else
		root["bitmap"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n/*\n *   bit map 管理\n */\n\nvar BitMap = /** @class */ (function () {\n    function BitMap(data) {\n        this.data = data || {};\n    }\n    BitMap.prototype.getIdx = function (num) {\n        return Math.floor(num / 32);\n    };\n    BitMap.prototype.getPos = function (num) {\n        return num % 32;\n    };\n    BitMap.prototype.getData = function () {\n        return this.data;\n    };\n    BitMap.prototype.add = function (num) {\n        var index = this.getIdx(num);\n        var pos = this.getPos(num);\n        if (this.data[index] === undefined)\n            this.data[index] = 0;\n        this.data[index] |= 1 << pos;\n    };\n    BitMap.prototype.remove = function (num) {\n        var index = this.getIdx(num);\n        var pos = this.getPos(num);\n        if (this.data[index] === undefined)\n            this.data[index] = 0;\n        this.data[index] -= 1 << pos;\n    };\n    BitMap.prototype.exist = function (num) {\n        var index = this.getIdx(num);\n        var pos = this.getPos(num);\n        return !!(this.data[index] && this.data[index] & (1 << pos));\n    };\n    BitMap.prototype.getAllNumber = function () {\n        var _this = this;\n        var data = this.data;\n        var numberArray = [];\n        Object.keys(data).forEach(function (index) {\n            var hex10Num = _this.data[index];\n            var layerNumber = Number(index) * 32;\n            var numberMerge = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.reverseString)(Number(hex10Num).toString(2));\n            for (var i = 0; i < numberMerge.length; i++) {\n                if (numberMerge[i] === \"1\") {\n                    numberArray.push(layerNumber + i);\n                }\n            }\n        });\n        return numberArray;\n    };\n    return BitMap;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BitMap);\n\n\n//# sourceURL=webpack://bitmap/./src/index.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reverseString\": () => (/* binding */ reverseString),\n/* harmony export */   \"sort\": () => (/* binding */ sort)\n/* harmony export */ });\n/*\n * @Author: your name\n * @Date: 2022-04-11 18:21:27\n * @LastEditTime: 2022-04-11 19:38:25\n * @LastEditors: Please set LastEditors\n * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE\n * @FilePath: /me/mm-rocket/packages/bitmap/src/utils.ts\n */\nfunction reverseString(s) {\n    return s.split(\"\").reverse().join(\"\");\n}\nfunction sort(arr) {\n    for (var i = 0; i < arr.length - 1; i++) {\n        var flag = false; // 防止数组已经有序而继续排序\n        for (var j = 0; j < arr.length - i - 1; j++) {\n            if (arr[j] > arr[j + 1]) {\n                // 交换两个\n                var temp = arr[j];\n                arr[j] = arr[j + 1];\n                arr[j + 1] = temp;\n                flag = true;\n            }\n        }\n        // console.log(arr);\n        if (!flag) {\n            // 数组有序后直接跳出循环\n            break;\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://bitmap/./src/utils.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});