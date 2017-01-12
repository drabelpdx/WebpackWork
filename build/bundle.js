/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var smallImage = document.createElement('img');
smallImage.src = _small2.default;

document.body.appendChild(smallImage);

var bigImage = document.createElement('img');
bigImage.src = _big2.default;

document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cab95fe19182efc43b3db836b02325cb.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ }
/******/ ]);