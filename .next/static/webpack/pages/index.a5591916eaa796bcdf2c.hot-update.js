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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _fancy_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fancy-link */ \"./components/fancy-link.js\");\n/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/index */ \"./helpers/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/godwin/Desktop/shopify-starter/components/navigation.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar data = [{\n  label: \"About\",\n  destination: \"/about\",\n  a11yText: \"go to the about page\"\n}, {\n  label: \"Shop\",\n  destination: \"/shop\",\n  a11yText: \"go to the shop page\"\n}, {\n  label: \"Ingredients\",\n  destination: \"/ingredients\",\n  a11yText: \"go to the ingredients page\"\n}, {\n  label: \"Blog\",\n  destination: \"/blog\",\n  a11yText: \"go to the blog page\"\n}];\nvar HeaderBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.m.header).withConfig({\n  displayName: \"navigation__HeaderBox\",\n  componentId: \"sc-1aeqakz-0\"\n})([\"--py-2:1rem;padding-top:var(--py-2);padding-bottom:var(--py-2);z-index:90;position:fixed;top:var(--spacer-half);left:var(--spacer);right:var(--spacer);\"]);\n_c = HeaderBox;\nvar NavBox = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.nav.withConfig({\n  displayName: \"navigation__NavBox\",\n  componentId: \"sc-1aeqakz-1\"\n})([\"display:flex;align-items:center;justify-content:space-between;\"]);\n_c2 = NavBox;\nvar MenuBox = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.ul.withConfig({\n  displayName: \"navigation__MenuBox\",\n  componentId: \"sc-1aeqakz-2\"\n})([\"display:flex;\"]);\n_c3 = MenuBox;\nvar NavList = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.ul.withConfig({\n  displayName: \"navigation__NavList\",\n  componentId: \"sc-1aeqakz-3\"\n})([\"width:40%;display:flex;justify-content:space-between;padding:1.125rem 3rem;background-color:var(--black);border-radius:999px;border:1px solid var(--border-color);&:hover > li{transition:opacity 300ms linear;opacity:0.25;}&:hover > li:hover{opacity:1;color:var(--black);}li{&:not(:last-child){padding-right:var(--spacing-md);}a{text-transform:capitalize;text-align:center;color:rgba(255,255,255,0.7);}}\"]);\n_c4 = NavList;\n\nfunction ListItem(_ref) {\n  var destination = _ref.destination,\n      a11yText = _ref.a11yText,\n      label = _ref.label,\n      className = _ref.className;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_fancy_link__WEBPACK_IMPORTED_MODULE_0__.default, {\n      destination: destination,\n      a11yText: a11yText,\n      label: label,\n      className: className ? className : null\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 5\n  }, this);\n}\n\n_c5 = ListItem;\nvar navAnim = {\n  initial: {\n    y: \"-100%\"\n  },\n  enter: {\n    y: \"0%\",\n    transition: {\n      duration: 1,\n      ease: [0.215, 0.61, 0.355, 1]\n    }\n  },\n  exit: {\n    y: \"-100%\"\n  }\n};\nfunction Navigation() {\n  _s();\n\n  var _this = this;\n\n  var hasMounted = (0,_helpers_index__WEBPACK_IMPORTED_MODULE_1__.useHasMounted)();\n  if (!hasMounted) return null;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.LazyMotion, {\n    features: framer_motion__WEBPACK_IMPORTED_MODULE_4__.domAnimation,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(HeaderBox, {\n      initial: \"initial\",\n      animate: \"enter\",\n      exit: \"initial\",\n      className: \"px-2\",\n      variants: navAnim,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(NavBox, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"aside\", {\n          children: \"LOGO\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(NavList, {\n          className: \"hide-for-mobile\",\n          children: data.map(function (item, i) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ListItem, {\n              label: item.label,\n              destination: item.destination,\n              a11yText: item.a11yText,\n              className: \"link link--metis\"\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 129,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MenuBox, {\n          children: \"Menu\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 117,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Navigation, \"a8+9xLbG2xQ65n+hLMc41gVgmKc=\", false, function () {\n  return [_helpers_index__WEBPACK_IMPORTED_MODULE_1__.useHasMounted];\n});\n\n_c6 = Navigation;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"HeaderBox\");\n$RefreshReg$(_c2, \"NavBox\");\n$RefreshReg$(_c3, \"MenuBox\");\n$RefreshReg$(_c4, \"NavList\");\n$RefreshReg$(_c5, \"ListItem\");\n$RefreshReg$(_c6, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3VCLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxnQ0FDUiw4REFBQyxRQUFEO0FBRUUsbUJBQUssRUFBRUQsSUFBSSxDQUFDdkIsS0FGZDtBQUdFLHlCQUFXLEVBQUV1QixJQUFJLENBQUN0QixXQUhwQjtBQUlFLHNCQUFRLEVBQUVzQixJQUFJLENBQUNyQixRQUpqQjtBQUtFLHVCQUFTLEVBQUM7QUFMWixlQUNPc0IsQ0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURRO0FBQUEsV0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFhRSw4REFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQ7O0dBL0J1Qko7VUFDSHRCOzs7TUFER3NCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcz85MzA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBtLCBMYXp5TW90aW9uLCBkb21BbmltYXRpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IEZhbmN5TGluayBmcm9tIFwiLi9mYW5jeS1saW5rXCI7XG5pbXBvcnQgeyB1c2VIYXNNb3VudGVkIH0gZnJvbSBcIkAvaGVscGVycy9pbmRleFwiO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgbGFiZWw6IFwiQWJvdXRcIixcbiAgICBkZXN0aW5hdGlvbjogXCIvYWJvdXRcIixcbiAgICBhMTF5VGV4dDogXCJnbyB0byB0aGUgYWJvdXQgcGFnZVwiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiU2hvcFwiLFxuICAgIGRlc3RpbmF0aW9uOiBcIi9zaG9wXCIsXG4gICAgYTExeVRleHQ6IFwiZ28gdG8gdGhlIHNob3AgcGFnZVwiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiSW5ncmVkaWVudHNcIixcbiAgICBkZXN0aW5hdGlvbjogXCIvaW5ncmVkaWVudHNcIixcbiAgICBhMTF5VGV4dDogXCJnbyB0byB0aGUgaW5ncmVkaWVudHMgcGFnZVwiLFxuICB9LFxuICB7XG4gICAgbGFiZWw6IFwiQmxvZ1wiLFxuICAgIGRlc3RpbmF0aW9uOiBcIi9ibG9nXCIsXG4gICAgYTExeVRleHQ6IFwiZ28gdG8gdGhlIGJsb2cgcGFnZVwiLFxuICB9LFxuXTtcblxuY29uc3QgSGVhZGVyQm94ID0gc3R5bGVkKG0uaGVhZGVyKWBcbiAgLS1weS0yOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcHktMik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1weS0yKTtcbiAgei1pbmRleDogOTA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiB2YXIoLS1zcGFjZXItaGFsZik7XG4gIGxlZnQ6IHZhcigtLXNwYWNlcik7XG4gIHJpZ2h0OiB2YXIoLS1zcGFjZXIpO1xuYDtcblxuY29uc3QgTmF2Qm94ID0gc3R5bGVkLm5hdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuY29uc3QgTWVudUJveCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IE5hdkxpc3QgPSBzdHlsZWQudWxgXG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMS4xMjVyZW0gM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcblxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXG4gICY6aG92ZXIgPiBsaSB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBsaW5lYXI7XG4gICAgb3BhY2l0eTogMC4yNTtcbiAgfVxuXG4gICY6aG92ZXIgPiBsaTpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xuICB9XG5cbiAgbGkge1xuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIExpc3RJdGVtKHsgZGVzdGluYXRpb24sIGExMXlUZXh0LCBsYWJlbCwgY2xhc3NOYW1lIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bGk+XG4gICAgICA8RmFuY3lMaW5rXG4gICAgICAgIGRlc3RpbmF0aW9uPXtkZXN0aW5hdGlvbn1cbiAgICAgICAgYTExeVRleHQ9e2ExMXlUZXh0fVxuICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogbnVsbH1cbiAgICAgIC8+XG4gICAgPC9saT5cbiAgKTtcbn1cblxuY29uc3QgbmF2QW5pbSA9IHtcbiAgaW5pdGlhbDoge1xuICAgIHk6IFwiLTEwMCVcIixcbiAgfSxcbiAgZW50ZXI6IHtcbiAgICB5OiBcIjAlXCIsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZHVyYXRpb246IDEsXG4gICAgICBlYXNlOiBbMC4yMTUsIDAuNjEsIDAuMzU1LCAxXSxcbiAgICB9LFxuICB9LFxuICBleGl0OiB7XG4gICAgeTogXCItMTAwJVwiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcbiAgY29uc3QgaGFzTW91bnRlZCA9IHVzZUhhc01vdW50ZWQoKTtcbiAgaWYgKCFoYXNNb3VudGVkKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxMYXp5TW90aW9uIGZlYXR1cmVzPXtkb21BbmltYXRpb259PlxuICAgICAgPEhlYWRlckJveFxuICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgIGFuaW1hdGU9XCJlbnRlclwiXG4gICAgICAgIGV4aXQ9XCJpbml0aWFsXCJcbiAgICAgICAgY2xhc3NOYW1lPVwicHgtMlwiXG4gICAgICAgIHZhcmlhbnRzPXtuYXZBbmltfVxuICAgICAgPlxuICAgICAgICA8TmF2Qm94PlxuICAgICAgICAgIDxhc2lkZT5MT0dPPC9hc2lkZT5cbiAgICAgICAgICA8TmF2TGlzdCBjbGFzc05hbWU9XCJoaWRlLWZvci1tb2JpbGVcIj5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb249e2l0ZW0uZGVzdGluYXRpb259XG4gICAgICAgICAgICAgICAgYTExeVRleHQ9e2l0ZW0uYTExeVRleHR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGluayBsaW5rLS1tZXRpc1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L05hdkxpc3Q+XG4gICAgICAgICAgPE1lbnVCb3g+TWVudTwvTWVudUJveD5cbiAgICAgICAgPC9OYXZCb3g+XG4gICAgICA8L0hlYWRlckJveD5cbiAgICA8L0xhenlNb3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVkIiwibSIsIkxhenlNb3Rpb24iLCJkb21BbmltYXRpb24iLCJGYW5jeUxpbmsiLCJ1c2VIYXNNb3VudGVkIiwiZGF0YSIsImxhYmVsIiwiZGVzdGluYXRpb24iLCJhMTF5VGV4dCIsIkhlYWRlckJveCIsImhlYWRlciIsIk5hdkJveCIsIm5hdiIsIk1lbnVCb3giLCJ1bCIsIk5hdkxpc3QiLCJMaXN0SXRlbSIsImNsYXNzTmFtZSIsIm5hdkFuaW0iLCJpbml0aWFsIiwieSIsImVudGVyIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImV4aXQiLCJOYXZpZ2F0aW9uIiwiaGFzTW91bnRlZCIsIm1hcCIsIml0ZW0iLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navigation.js\n");

/***/ })

});