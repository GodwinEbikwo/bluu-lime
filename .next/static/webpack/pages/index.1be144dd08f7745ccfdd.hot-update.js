"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _fancy_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fancy-link */ \"./components/fancy-link.js\");\n/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/index */ \"./helpers/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/godwin/Desktop/shopify-starter/components/navigation.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar data = [{\n  label: \"About\",\n  destination: \"/about\",\n  a11yText: \"go to the about page\"\n}, {\n  label: \"Shop\",\n  destination: \"/shop\",\n  a11yText: \"go to the shop page\"\n}, {\n  label: \"Ingredients\",\n  destination: \"/ingredients\",\n  a11yText: \"go to the ingredients page\"\n}, {\n  label: \"Blog\",\n  destination: \"/blog\",\n  a11yText: \"go to the blog page\"\n}];\nvar HeaderBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.m.header).withConfig({\n  displayName: \"navigation__HeaderBox\",\n  componentId: \"sc-1aeqakz-0\"\n})([\"--py-2:1rem;position:relative;padding-top:var(--py-2);padding-bottom:var(--py-2);z-index:90;\"]);\n_c = HeaderBox;\nvar NavBox = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.nav.withConfig({\n  displayName: \"navigation__NavBox\",\n  componentId: \"sc-1aeqakz-1\"\n})([\"display:flex;align-items:center;justify-content:space-between;\"]);\n_c2 = NavBox;\nvar MenuBox = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.ul.withConfig({\n  displayName: \"navigation__MenuBox\",\n  componentId: \"sc-1aeqakz-2\"\n})([\"display:flex;\"]);\n_c3 = MenuBox;\nvar NavList = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.ul.withConfig({\n  displayName: \"navigation__NavList\",\n  componentId: \"sc-1aeqakz-3\"\n})([\"width:40%;display:flex;justify-content:space-between;padding:1.125rem 3rem;background-color:var(--black);border-radius:999px;border:1px solid var(--border-color);&:hover > li{transition:opacity 300ms linear;opacity:0.25;}&:hover > li:hover{opacity:1;color:var(--black);}li{&:not(:last-child){padding-right:var(--spacing-md);}a{text-transform:capitalize;text-align:center;color:rgba(255,255,255,0.7);}}\"]);\n_c4 = NavList;\n\nfunction ListItem(_ref) {\n  var destination = _ref.destination,\n      a11yText = _ref.a11yText,\n      label = _ref.label,\n      className = _ref.className;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_fancy_link__WEBPACK_IMPORTED_MODULE_0__.default, {\n      destination: destination,\n      a11yText: a11yText,\n      label: label,\n      className: className ? className : null\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 5\n  }, this);\n}\n\n_c5 = ListItem;\nvar navAnim = {\n  initial: {\n    y: \"-100%\"\n  },\n  enter: {\n    y: \"0%\",\n    transition: {\n      duration: 0.85,\n      ease: [0.215, 0.61, 0.355, 1]\n    }\n  },\n  exit: {\n    y: \"-100%\"\n  }\n};\nfunction Navigation() {\n  _s();\n\n  var _this = this;\n\n  var hasMounted = (0,_helpers_index__WEBPACK_IMPORTED_MODULE_1__.useHasMounted)();\n  if (!hasMounted) return null;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.LazyMotion, {\n    features: framer_motion__WEBPACK_IMPORTED_MODULE_4__.domAnimation,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(HeaderBox, {\n      initial: \"initial\",\n      animate: \"enter\",\n      exit: \"initial\",\n      className: \"px-2\",\n      variants: navAnim,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(NavBox, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"aside\", {\n          children: \"LOGO\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(NavList, {\n          className: \"hide-for-mobile\",\n          children: data.map(function (item, i) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ListItem, {\n              label: item.label,\n              destination: item.destination,\n              a11yText: item.a11yText,\n              className: \"link link--metis\"\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 126,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MenuBox, {\n          children: \"Menu\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 114,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Navigation, \"a8+9xLbG2xQ65n+hLMc41gVgmKc=\", false, function () {\n  return [_helpers_index__WEBPACK_IMPORTED_MODULE_1__.useHasMounted];\n});\n\n_c6 = Navigation;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"HeaderBox\");\n$RefreshReg$(_c2, \"NavBox\");\n$RefreshReg$(_c3, \"MenuBox\");\n$RefreshReg$(_c4, \"NavList\");\n$RefreshReg$(_c5, \"ListItem\");\n$RefreshReg$(_c6, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3VCLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxnQ0FDUiw4REFBQyxRQUFEO0FBRUUsbUJBQUssRUFBRUQsSUFBSSxDQUFDdkIsS0FGZDtBQUdFLHlCQUFXLEVBQUV1QixJQUFJLENBQUN0QixXQUhwQjtBQUlFLHNCQUFRLEVBQUVzQixJQUFJLENBQUNyQixRQUpqQjtBQUtFLHVCQUFTLEVBQUM7QUFMWixlQUNPc0IsQ0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURRO0FBQUEsV0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFhRSw4REFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQ7O0dBL0J1Qko7VUFDSHRCOzs7TUFER3NCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcz85MzA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBtLCBMYXp5TW90aW9uLCBkb21BbmltYXRpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IEZhbmN5TGluayBmcm9tIFwiLi9mYW5jeS1saW5rXCI7XG5pbXBvcnQgeyB1c2VIYXNNb3VudGVkIH0gZnJvbSBcIkAvaGVscGVycy9pbmRleFwiO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgbGFiZWw6IFwiQWJvdXRcIixcbiAgICBkZXN0aW5hdGlvbjogXCIvYWJvdXRcIixcbiAgICBhMTF5VGV4dDogXCJnbyB0byB0aGUgYWJvdXQgcGFnZVwiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiU2hvcFwiLFxuICAgIGRlc3RpbmF0aW9uOiBcIi9zaG9wXCIsXG4gICAgYTExeVRleHQ6IFwiZ28gdG8gdGhlIHNob3AgcGFnZVwiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiSW5ncmVkaWVudHNcIixcbiAgICBkZXN0aW5hdGlvbjogXCIvaW5ncmVkaWVudHNcIixcbiAgICBhMTF5VGV4dDogXCJnbyB0byB0aGUgaW5ncmVkaWVudHMgcGFnZVwiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiQmxvZ1wiLFxuICAgIGRlc3RpbmF0aW9uOiBcIi9ibG9nXCIsXG4gICAgYTExeVRleHQ6IFwiZ28gdG8gdGhlIGJsb2cgcGFnZVwiLFxuICB9LFxuXTtcblxuY29uc3QgSGVhZGVyQm94ID0gc3R5bGVkKG0uaGVhZGVyKWBcbiAgLS1weS0yOiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1weS0yKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXB5LTIpO1xuICB6LWluZGV4OiA5MDtcbmA7XG5cbmNvbnN0IE5hdkJveCA9IHN0eWxlZC5uYXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmNvbnN0IE1lbnVCb3ggPSBzdHlsZWQudWxgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBOYXZMaXN0ID0gc3R5bGVkLnVsYFxuICB3aWR0aDogNDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEuMTI1cmVtIDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblxuICAmOmhvdmVyID4gbGkge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgbGluZWFyO1xuICAgIG9wYWNpdHk6IDAuMjU7XG4gIH1cblxuICAmOmhvdmVyID4gbGk6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgfVxuXG4gIGxpIHtcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3BhY2luZy1tZCk7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgfVxuICB9XG5gO1xuXG5mdW5jdGlvbiBMaXN0SXRlbSh7IGRlc3RpbmF0aW9uLCBhMTF5VGV4dCwgbGFiZWwsIGNsYXNzTmFtZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAgPEZhbmN5TGlua1xuICAgICAgICBkZXN0aW5hdGlvbj17ZGVzdGluYXRpb259XG4gICAgICAgIGExMXlUZXh0PXthMTF5VGV4dH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZSA/IGNsYXNzTmFtZSA6IG51bGx9XG4gICAgICAvPlxuICAgIDwvbGk+XG4gICk7XG59XG5cbmNvbnN0IG5hdkFuaW0gPSB7XG4gIGluaXRpYWw6IHtcbiAgICB5OiBcIi0xMDAlXCIsXG4gIH0sXG4gIGVudGVyOiB7XG4gICAgeTogXCIwJVwiLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIGR1cmF0aW9uOiAwLjg1LFxuICAgICAgZWFzZTogWzAuMjE1LCAwLjYxLCAwLjM1NSwgMV0sXG4gICAgfSxcbiAgfSxcbiAgZXhpdDoge1xuICAgIHk6IFwiLTEwMCVcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oKSB7XG4gIGNvbnN0IGhhc01vdW50ZWQgPSB1c2VIYXNNb3VudGVkKCk7XG4gIGlmICghaGFzTW91bnRlZCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF6eU1vdGlvbiBmZWF0dXJlcz17ZG9tQW5pbWF0aW9ufT5cbiAgICAgIDxIZWFkZXJCb3hcbiAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICBhbmltYXRlPVwiZW50ZXJcIlxuICAgICAgICBleGl0PVwiaW5pdGlhbFwiXG4gICAgICAgIGNsYXNzTmFtZT1cInB4LTJcIlxuICAgICAgICB2YXJpYW50cz17bmF2QW5pbX1cbiAgICAgID5cbiAgICAgICAgPE5hdkJveD5cbiAgICAgICAgICA8YXNpZGU+TE9HTzwvYXNpZGU+XG4gICAgICAgICAgPE5hdkxpc3QgY2xhc3NOYW1lPVwiaGlkZS1mb3ItbW9iaWxlXCI+XG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uPXtpdGVtLmRlc3RpbmF0aW9ufVxuICAgICAgICAgICAgICAgIGExMXlUZXh0PXtpdGVtLmExMXlUZXh0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmsgbGluay0tbWV0aXNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9OYXZMaXN0PlxuICAgICAgICAgIDxNZW51Qm94Pk1lbnU8L01lbnVCb3g+XG4gICAgICAgIDwvTmF2Qm94PlxuICAgICAgPC9IZWFkZXJCb3g+XG4gICAgPC9MYXp5TW90aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIm0iLCJMYXp5TW90aW9uIiwiZG9tQW5pbWF0aW9uIiwiRmFuY3lMaW5rIiwidXNlSGFzTW91bnRlZCIsImRhdGEiLCJsYWJlbCIsImRlc3RpbmF0aW9uIiwiYTExeVRleHQiLCJIZWFkZXJCb3giLCJoZWFkZXIiLCJOYXZCb3giLCJuYXYiLCJNZW51Qm94IiwidWwiLCJOYXZMaXN0IiwiTGlzdEl0ZW0iLCJjbGFzc05hbWUiLCJuYXZBbmltIiwiaW5pdGlhbCIsInkiLCJlbnRlciIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJleGl0IiwiTmF2aWdhdGlvbiIsImhhc01vdW50ZWQiLCJtYXAiLCJpdGVtIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navigation.js\n");

/***/ })

});