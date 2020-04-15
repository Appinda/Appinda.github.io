webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/Link.js":
/*!****************************!*\
  !*** ./components/Link.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "D:\\Code Projects\\Git\\Appinda\\Appinda.github.io\\src\\components\\Link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var href = _ref.href,
      children = _ref.children;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var className = children.props.className || ''; // Append active class to active link

  if (router.pathname === href) {
    if (className) className = "".concat(className, " active");else className = "active";
  }

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 10
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
    className: className
  }));
});

/***/ })

})
//# sourceMappingURL=about.js.ceb50f5468328bdd0583.hot-update.js.map