/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parts_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js");
/* harmony import */ var _parts_modals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/modals.js */ "./src/js/parts/modals.js");
/* harmony import */ var _parts_tabs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js");
/* harmony import */ var _parts_images_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parts/images.js */ "./src/js/parts/images.js");
/* harmony import */ var _parts_calc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js");
// jshint esversion: 6





window.addEventListener('DOMContentLoaded', function () {
  // 'use strict';
  //  Timer
  Object(_parts_timer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Modals

  Object(_parts_modals_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); //Tabs

  Object(_parts_tabs_js__WEBPACK_IMPORTED_MODULE_2__["default"])(); //Images

  Object(_parts_images_js__WEBPACK_IMPORTED_MODULE_3__["default"])(); //Calc

  Object(_parts_calc_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calc() {}

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/parts/images.js":
/*!********************************!*\
  !*** ./src/js/parts/images.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function images() {
  var imageLinks = document.querySelectorAll('.image-link'),
      imageOverlay = document.createElement('div'),
      fullImg = document.createElement('img'),
      body = document.querySelector('body');

  var _loop = function _loop(i) {
    imageLinks[i].addEventListener('click', function (event) {
      event.preventDefault();
      imageOverlay.classList.add('popup');
      imageOverlay.style.display = 'block';
      imageOverlay.appendChild(fullImg);
      fullImg.src = imageLinks[i].href;
      fullImg.classList.add('full-image');
      body.appendChild(imageOverlay);
    });
  };

  for (var i = 0; i < imageLinks.length; i++) {
    _loop(i);
  }

  imageOverlay.addEventListener('click', function (event) {
    var target = event.target;

    if (target == imageOverlay) {
      body.removeChild(imageOverlay);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (images);

/***/ }),

/***/ "./src/js/parts/modals.js":
/*!********************************!*\
  !*** ./src/js/parts/modals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);


function modals() {
  // Request an engineer
  var engineerBtn = document.querySelector('.popup_engineer_btn'),
      engineerOverlay = document.querySelector('.popup_engineer'),
      engineerClose = engineerOverlay.querySelector('.popup_close');
  engineerBtn.addEventListener('click', function () {
    showEngineerModal();
  });

  var showEngineerModal = function showEngineerModal() {
    engineerOverlay.style.display = 'block';
  }; // Закрытие модального окна по клику на overlay


  engineerOverlay.addEventListener('click', function (event) {
    var target = event.target;

    if (target == engineerOverlay) {
      engineerOverlay.style.display = 'none';
    }
  }); // Закрытие модального окна по клику на крестик

  engineerClose.addEventListener('click', function () {
    engineerOverlay.style.display = 'none';
  }); // Request a call

  var phoneLinks = document.querySelectorAll('.phone_link'),
      popupOverlay = document.querySelector('.popup'),
      popupClose = popupOverlay.querySelector('.popup_close');

  for (var i = 0; i < phoneLinks.length; i++) {
    phoneLinks[i].addEventListener('click', function (event) {
      event.preventDefault();
      showPopupModal();
    });
  } // Открытие модального окна popup через 60 сек.


  document.addEventListener('readystatechange', function () {
    setTimeout(showPopupModal, 60000);
  });

  var showPopupModal = function showPopupModal() {
    popupOverlay.style.display = 'block';
  }; // Закрытие модального окна по клику на overlay


  popupOverlay.addEventListener('click', function (event) {
    var target = event.target;

    if (target == popupOverlay) {
      popupOverlay.style.display = 'none';
    }
  }); // Закрытие модального окна по клику на крестик

  popupClose.addEventListener('click', function () {
    popupOverlay.style.display = 'none';
  }); //Ввод только цифр в input с телефоном

  var telInputs = document.getElementsByName('user_phone');

  var _loop = function _loop(_i) {
    telInputs[_i].addEventListener('input', function () {
      telInputs[_i].value = telInputs[_i].value.replace(/[^0-9]/g, '');
    });
  };

  for (var _i = 0; _i < telInputs.length; _i++) {
    _loop(_i);
  } //Отправка


  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };
  var statusMessage = document.createElement('div'),
      body = document.querySelector('body');
  var obj = {};

  var requestData = function requestData(target) {
    var input = target.getElementsByTagName('input');
    target.appendChild(statusMessage);
    var request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    var formData = new FormData(target);

    if (obj) {
      for (var key in obj) {
        formData.append(key, obj[key]);
      }
    } // formData.forEach(function(value, key) {
    //     obj[key] = value;
    // });
    // let json = JSON.stringify(obj);


    request.send(formData);
    request.addEventListener('readystatechange', function () {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
      } else if (request.readyState === 4 && request.status === 200) {
        statusMessage.innerHTML = message.success;
      } else {
        statusMessage.innerHTML = message.failure;
      }
    });

    for (var j = 0; j < input.length; j++) {
      input[j].value = '';
    }
  };

  body.addEventListener('submit', function (event) {
    event.preventDefault();
    var target = event.target;

    if (target.classList = 'form') {
      requestData(target);
      obj = {};
    } else {
      return target;
    }
  }); //Calc

  var calcBtn = document.getElementsByClassName('popup_calc_btn'),
      calcOverlay = document.querySelector('.popup_calc'),
      calcClose = document.querySelector('.popup_calc_close'),
      calcInputs = calcOverlay.querySelectorAll('.form-control'); //Валидатор для высоты и ширины

  var _loop2 = function _loop2(_i2) {
    calcInputs[_i2].addEventListener('input', function () {
      calcInputs[_i2].value = calcInputs[_i2].value.replace(/[^0-9]/g, '');
    });
  };

  for (var _i2 = 0; _i2 < calcInputs.length; _i2++) {
    _loop2(_i2);
  } //Открытие popup_calc нажатием на кнопку "Начать расчет"


  for (var _i3 = 0; _i3 < calcBtn.length; _i3++) {
    // console.log(calcBtn[i]);
    calcBtn[_i3].addEventListener('click', function () {
      calcOverlay.style.display = 'block';
    });
  } //Закрытие popup_calc нажатием на крестик


  calcClose.addEventListener('click', function () {
    calcOverlay.style.display = 'none';
    obj = {};

    for (var _i4 = 0; _i4 < calcInputs.length; _i4++) {
      calcInputs[_i4].value = '';
    }
  }); //Выбор окон
  //popup_calc

  var calcTabBlock = document.querySelector('.balcon_icons'),
      calcTab = calcTabBlock.getElementsByTagName('a'),
      calcContentBlock = document.querySelector('.big_img'),
      calcContent = calcContentBlock.getElementsByTagName('img');

  var hideCalcContent = function hideCalcContent(a) {
    for (var j = a; j < calcTab.length; j++) {
      calcTab[j].firstElementChild.style.width = '20%';
    }

    for (var _i5 = a; _i5 < calcContent.length; _i5++) {
      calcContent[_i5].style.display = 'none';
    }
  };

  hideCalcContent(1);

  var showCalcContent = function showCalcContent(b) {
    if (calcTab[b].firstElementChild.style.width == '20%') {
      calcTab[b].firstElementChild.style.width = '30%';
    }

    if (calcContent[b].style.display == 'none') {
      calcContent[b].style.display = 'inline-block';
    }
  };

  var choosenTab = calcTab[0];

  var _loop3 = function _loop3(_i6) {
    calcTab[_i6].addEventListener('click', function () {
      hideCalcContent(0);
      showCalcContent(_i6);
      choosenTab = calcTab[_i6];
    });
  };

  for (var _i6 = 0; _i6 < calcTab.length; _i6++) {
    _loop3(_i6);
  } //popup_calc_profile


  var calcBtnNext = document.querySelector('.popup_calc_button'),
      calcProfileOverlay = document.querySelector('.popup_calc_profile'),
      calcProfileClose = document.querySelector('.popup_calc_profile_close'),
      userWidth = document.getElementById('width'),
      userHiegth = document.getElementById('height'); //Список

  var optionBlock = document.getElementById('view_type'); // obj.Option = optionBlock.value;

  optionBlock.addEventListener('input', function () {
    obj.Option = this.options[this.selectedIndex].value;
  }); //Чекбокс

  var checkBoxes = document.getElementsByName('checkbox-test'); //Выбор только одного чекбокса

  body.addEventListener('input', function (e) {
    e.preventDefault();

    if (checkBoxes[0].checked == true) {
      checkBoxes[1].disabled = true;
    } else {
      checkBoxes[1].disabled = false;
    }

    if (checkBoxes[1].checked == true) {
      checkBoxes[0].disabled = true;
    } else {
      checkBoxes[0].disabled = false;
    }
  });

  var _loop4 = function _loop4(_i7) {
    checkBoxes[_i7].addEventListener('input', function () {
      obj.Temp = checkBoxes[_i7].nextElementSibling.id;
    });
  };

  for (var _i7 = 0; _i7 < checkBoxes.length; _i7++) {
    _loop4(_i7);
  }

  calcBtnNext.addEventListener('click', function () {
    if (calcInputs[0].value != '' && calcInputs[1].value != '') {
      calcOverlay.style.display = 'none';
      calcProfileOverlay.style.display = 'block';
      obj.width = userWidth.value;
      obj.heigth = userHiegth.value;
      obj.windowType = choosenTab.classList; // obj.viewType = choosenOption;
    }
  }); //Закрытие popup_calc_profile на крестик

  calcProfileClose.addEventListener('click', function () {
    calcProfileOverlay.style.display = 'none';
    obj = {};

    for (var _i8 = 0; _i8 < calcInputs.length; _i8++) {
      calcInputs[_i8].value = '';
    }

    for (var j = 0; j < checkBoxes.length; j++) {
      checkBoxes[j].checked = false;
    }
  }); // popup_calc_end

  var calcPofileBtnNext = document.querySelector('.popup_calc_profile_button'),
      calcEndOverlay = document.querySelector('.popup_calc_end'),
      calcBtnEnd = document.querySelector('.popup_calc_end_close');
  calcPofileBtnNext.addEventListener('click', function () {
    if (checkBoxes[0].checked == true || checkBoxes[1].checked == true) {
      calcProfileOverlay.style.display = 'none';
      calcEndOverlay.style.display = 'block';
    }
  }); //Закрытие popup_calc_end на крестик

  calcBtnEnd.addEventListener('click', function (target) {
    calcEndOverlay.style.display = 'none';
    obj = {};

    for (var _i9 = 0; _i9 < calcInputs.length; _i9++) {
      calcInputs[_i9].value = '';
    }

    for (var j = 0; j < checkBoxes.length; j++) {
      checkBoxes[j].checked = false;
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs() {
  //Табы с отделкой
  var tab = document.querySelectorAll('.decoration-link'),
      tabBlock = document.querySelectorAll('.decoration_item'),
      info = document.querySelectorAll('.no_click'),
      tabContent = document.querySelectorAll('.tabcontent'),
      body = document.querySelector('body');

  var hideTabContent = function hideTabContent(a) {
    for (var i = a; i < tab.length; i++) {
      tab[i].style.color = '#000000';
    }

    for (var _i = a; _i < tabContent.length; _i++) {
      tabContent[_i].classList.remove('show');

      tabContent[_i].classList.add('hide');

      info[_i].classList.remove('after_click');
    }
  };

  hideTabContent(1);

  var showTabContent = function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show'); // tab[b].style.color = '#0089cd';
    }

    if (!info[b].classList.contains('after_click')) {
      info[b].classList.add('after_click');
    }

    if (tab[b].style.color = '#000000') {
      tab[b].style.color = '#0089cd';
    } else {
      tab[b].style.color = '#000000';
    }
  };

  for (var i = 0; i < info.length; i++) {
    info[i].addEventListener('click', function (event) {
      var target = event.target;

      if (target && target.classList.contains('decoration-link')) {
        for (var _i2 = 0; _i2 < tab.length; _i2++) {
          if (target == tab[_i2]) {
            hideTabContent(0);
            showTabContent(_i2);
            break;
          }
        }
      }
    });
  }

  body.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains('no_click')) {
      for (var _i3 = 0; _i3 < info.length; _i3++) {
        if (target == info[_i3]) {
          hideTabContent(0);
          showTabContent(_i3);
          break;
        }
      }
    }
  }); //Табы с окнами

  var glazingTab = document.querySelectorAll('.glazing-link'),
      glazingBlock = document.querySelectorAll('.glazing_block'),
      glazingImg = document.querySelectorAll('.glazing-image'),
      glazingTabContent = document.querySelectorAll('.glazing-tabcontent');

  var hideGlazingTabContent = function hideGlazingTabContent(a) {
    for (var _i4 = a; _i4 < glazingTabContent.length; _i4++) {
      glazingTabContent[_i4].classList.remove('show');

      glazingTabContent[_i4].classList.add('hide');

      glazingTab[_i4].classList.remove('active');
    }
  };

  hideTabContent(1);

  var showGlazingTabContent = function showGlazingTabContent(b) {
    if (glazingTabContent[b].classList.contains('hide')) {
      glazingTabContent[b].classList.remove('hide');
      glazingTabContent[b].classList.add('show');
    }

    if (!glazingTab[b].classList.contains('active')) {
      glazingTab[b].classList.add('active');
    }
  };

  body.addEventListener('click', function (event) {
    var target = event.target;

    if (target || target.classList.contains('glazing-link')) {
      for (var _i5 = 0; _i5 < glazingTab.length; _i5++) {
        if (target == glazingTab[_i5]) {
          hideGlazingTabContent(0);
          showGlazingTabContent(_i5);
          break;
        }
      }
    }
  });
  body.addEventListener('click', function (e) {
    var target = e.target;

    if (target && target.classList.contains('glazing-image')) {
      for (var j = 0; j < glazingImg.length; j++) {
        if (target == glazingImg[j]) {
          hideGlazingTabContent(0);
          showGlazingTabContent(j);
          break;
        }
      }
    }
  });
  body.addEventListener('click', function (e) {
    var target = e.target;

    if (target && target.classList.contains('glazing_block')) {
      for (var k = 0; k < glazingBlock.length; k++) {
        if (target == glazingBlock[k]) {
          hideGlazingTabContent(0);
          showGlazingTabContent(k);
          break;
        }
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer() {
  var deadline = '2019-07-04';

  var getTimeRemaining = function getTimeRemaining(endtime) {
    var checkTime = function checkTime(i) {
      if (i < 10) {
        return i = "0" + i;
      } else {
        return i;
      }
    };

    var timeZone = new Date().getTimezoneOffset(),
        t = Date.parse(endtime) - Date.parse(new Date()) + timeZone * 60000,
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / 1000 / 60 / 60 % 24),
        days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': checkTime(days),
      'hours': checkTime(hours),
      'minutes': checkTime(minutes),
      'seconds': checkTime(seconds)
    };
  };

  var setClock = function setClock(id, endtime) {
    var timer = document.querySelector('.eTimer'),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endtime);
      days.textContent = t.days;
      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
        clearInterval(timeInterval);
      }
    }
  };

  setClock('timer', deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map