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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _fancy_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fancy-link */ \"./components/fancy-link.js\");\n/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/index */ \"./helpers/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/godwin/Desktop/shopify-starter/components/navigation.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar data = [{\n  label: \"About\",\n  destination: \"/about\",\n  a11yText: \"go to the about page\"\n}, {\n  label: \"Shop\",\n  destination: \"/shop\",\n  a11yText: \"go to the shop page\"\n}, {\n  label: \"Ingredients\",\n  destination: \"/ingredients\",\n  a11yText: \"go to the ingredients page\"\n}, {\n  label: \"Blog\",\n  destination: \"/blog\",\n  a11yText: \"go to the blog page\"\n}];\nvar HeaderBox = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.default)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.m.header).withConfig({\n  displayName: \"navigation__HeaderBox\",\n  componentId: \"sc-1aeqakz-0\"\n})([\"--py-2:1rem;position:fixed;top:var(--spacer-half);left:var(--golden-ratio);right:var(--golden-ratio);padding-top:var(--py-2);padding-bottom:var(--py-2);z-index:90;\"]);\n_c = HeaderBox;\nvar NavBox = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.nav.withConfig({\n  displayName: \"navigation__NavBox\",\n  componentId: \"sc-1aeqakz-1\"\n})([\"display:flex;align-items:center;justify-content:space-between;\"]);\n_c2 = NavBox;\nvar MenuBox = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.ul.withConfig({\n  displayName: \"navigation__MenuBox\",\n  componentId: \"sc-1aeqakz-2\"\n})([\"display:flex;\"]);\n_c3 = MenuBox;\nvar NavList = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.ul.withConfig({\n  displayName: \"navigation__NavList\",\n  componentId: \"sc-1aeqakz-3\"\n})([\"width:40%;display:flex;justify-content:space-between;padding:1rem 3rem;background-color:var(--black);border-radius:999px;&:hover > li{transition:opacity 300ms linear;opacity:0.25;}&:hover > li:hover{opacity:1;color:var(--black);}li{&:not(:last-child){padding-right:var(--spacing-md);}a{text-transform:capitalize;text-align:center;color:rgba(255,255,255,0.7);}}\"]);\n_c4 = NavList;\n\nfunction ListItem(_ref) {\n  var destination = _ref.destination,\n      a11yText = _ref.a11yText,\n      label = _ref.label,\n      className = _ref.className;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_fancy_link__WEBPACK_IMPORTED_MODULE_0__.default, {\n      destination: destination,\n      a11yText: a11yText,\n      label: label,\n      className: className ? className : null\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 5\n  }, this);\n}\n\n_c5 = ListItem;\nvar navAnim = {\n  initial: {\n    y: \"-100%\"\n  },\n  enter: {\n    y: \"0%\",\n    transition: {\n      duration: 1,\n      ease: [0.215, 0.61, 0.355, 1]\n    }\n  },\n  exit: {\n    y: \"-100%\"\n  }\n};\nfunction Navigation() {\n  _s();\n\n  var _this = this;\n\n  var hasMounted = (0,_helpers_index__WEBPACK_IMPORTED_MODULE_1__.useHasMounted)();\n  if (!hasMounted) return null;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.LazyMotion, {\n    features: framer_motion__WEBPACK_IMPORTED_MODULE_4__.domAnimation,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(HeaderBox, {\n      initial: \"initial\",\n      animate: \"enter\",\n      exit: \"initial\",\n      className: \"px-2\",\n      variants: navAnim,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(NavBox, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"aside\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n            \"aria-label\": \"emoji\",\n            children: \"\\u2726\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(NavList, {\n          className: \"hide-for-mobile\",\n          children: data.map(function (item, i) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ListItem, {\n              label: item.label,\n              destination: item.destination,\n              a11yText: item.a11yText,\n              className: \"link link--metis\"\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 129,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MenuBox, {\n          children: \"Menu\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 115,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Navigation, \"a8+9xLbG2xQ65n+hLMc41gVgmKc=\", false, function () {\n  return [_helpers_index__WEBPACK_IMPORTED_MODULE_1__.useHasMounted];\n});\n\n_c6 = Navigation;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"HeaderBox\");\n$RefreshReg$(_c2, \"NavBox\");\n$RefreshReg$(_c3, \"MenuBox\");\n$RefreshReg$(_c4, \"NavList\");\n$RefreshReg$(_c5, \"ListItem\");\n$RefreshReg$(_c6, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQyxPQUFEO0FBQVMsbUJBQVMsRUFBQyxpQkFBbkI7QUFBQSxvQkFDR2IsSUFBSSxDQUFDdUIsR0FBTCxDQUFTLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLGdDQUNSLDhEQUFDLFFBQUQ7QUFFRSxtQkFBSyxFQUFFRCxJQUFJLENBQUN2QixLQUZkO0FBR0UseUJBQVcsRUFBRXVCLElBQUksQ0FBQ3RCLFdBSHBCO0FBSUUsc0JBQVEsRUFBRXNCLElBQUksQ0FBQ3JCLFFBSmpCO0FBS0UsdUJBQVMsRUFBQztBQUxaLGVBQ09zQixDQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFE7QUFBQSxXQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQWVFLDhEQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTZCRDs7R0FqQ3VCSjtVQUNIdEI7OztNQURHc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzPzkzMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IG0sIExhenlNb3Rpb24sIGRvbUFuaW1hdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgRmFuY3lMaW5rIGZyb20gXCIuL2ZhbmN5LWxpbmtcIjtcbmltcG9ydCB7IHVzZUhhc01vdW50ZWQgfSBmcm9tIFwiQC9oZWxwZXJzL2luZGV4XCI7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBsYWJlbDogXCJBYm91dFwiLFxuICAgIGRlc3RpbmF0aW9uOiBcIi9hYm91dFwiLFxuICAgIGExMXlUZXh0OiBcImdvIHRvIHRoZSBhYm91dCBwYWdlXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJTaG9wXCIsXG4gICAgZGVzdGluYXRpb246IFwiL3Nob3BcIixcbiAgICBhMTF5VGV4dDogXCJnbyB0byB0aGUgc2hvcCBwYWdlXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJJbmdyZWRpZW50c1wiLFxuICAgIGRlc3RpbmF0aW9uOiBcIi9pbmdyZWRpZW50c1wiLFxuICAgIGExMXlUZXh0OiBcImdvIHRvIHRoZSBpbmdyZWRpZW50cyBwYWdlXCIsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogXCJCbG9nXCIsXG4gICAgZGVzdGluYXRpb246IFwiL2Jsb2dcIixcbiAgICBhMTF5VGV4dDogXCJnbyB0byB0aGUgYmxvZyBwYWdlXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBIZWFkZXJCb3ggPSBzdHlsZWQobS5oZWFkZXIpYFxuICAtLXB5LTI6IDFyZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiB2YXIoLS1zcGFjZXItaGFsZik7XG4gIGxlZnQ6IHZhcigtLWdvbGRlbi1yYXRpbyk7XG4gIHJpZ2h0OiB2YXIoLS1nb2xkZW4tcmF0aW8pO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tcHktMik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1weS0yKTtcbiAgei1pbmRleDogOTA7XG5gO1xuXG5jb25zdCBOYXZCb3ggPSBzdHlsZWQubmF2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5jb25zdCBNZW51Qm94ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgTmF2TGlzdCA9IHN0eWxlZC51bGBcbiAgd2lkdGg6IDQwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG5cbiAgJjpob3ZlciA+IGxpIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGxpbmVhcjtcbiAgICBvcGFjaXR5OiAwLjI1O1xuICB9XG5cbiAgJjpob3ZlciA+IGxpOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiB2YXIoLS1ibGFjayk7XG4gIH1cblxuICBsaSB7XG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNwYWNpbmctbWQpO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gTGlzdEl0ZW0oeyBkZXN0aW5hdGlvbiwgYTExeVRleHQsIGxhYmVsLCBjbGFzc05hbWUgfSkge1xuICByZXR1cm4gKFxuICAgIDxsaT5cbiAgICAgIDxGYW5jeUxpbmtcbiAgICAgICAgZGVzdGluYXRpb249e2Rlc3RpbmF0aW9ufVxuICAgICAgICBhMTF5VGV4dD17YTExeVRleHR9XG4gICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWUgPyBjbGFzc05hbWUgOiBudWxsfVxuICAgICAgLz5cbiAgICA8L2xpPlxuICApO1xufVxuXG5jb25zdCBuYXZBbmltID0ge1xuICBpbml0aWFsOiB7XG4gICAgeTogXCItMTAwJVwiLFxuICB9LFxuICBlbnRlcjoge1xuICAgIHk6IFwiMCVcIixcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMSxcbiAgICAgIGVhc2U6IFswLjIxNSwgMC42MSwgMC4zNTUsIDFdLFxuICAgIH0sXG4gIH0sXG4gIGV4aXQ6IHtcbiAgICB5OiBcIi0xMDAlXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xuICBjb25zdCBoYXNNb3VudGVkID0gdXNlSGFzTW91bnRlZCgpO1xuICBpZiAoIWhhc01vdW50ZWQpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPExhenlNb3Rpb24gZmVhdHVyZXM9e2RvbUFuaW1hdGlvbn0+XG4gICAgICA8SGVhZGVyQm94XG4gICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgYW5pbWF0ZT1cImVudGVyXCJcbiAgICAgICAgZXhpdD1cImluaXRpYWxcIlxuICAgICAgICBjbGFzc05hbWU9XCJweC0yXCJcbiAgICAgICAgdmFyaWFudHM9e25hdkFuaW19XG4gICAgICA+XG4gICAgICAgIDxOYXZCb3g+XG4gICAgICAgICAgPGFzaWRlPlxuICAgICAgICAgICAgPHNwYW4gYXJpYS1sYWJlbD1cImVtb2ppXCI+4pymPC9zcGFuPlxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgPE5hdkxpc3QgY2xhc3NOYW1lPVwiaGlkZS1mb3ItbW9iaWxlXCI+XG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uPXtpdGVtLmRlc3RpbmF0aW9ufVxuICAgICAgICAgICAgICAgIGExMXlUZXh0PXtpdGVtLmExMXlUZXh0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmsgbGluay0tbWV0aXNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9OYXZMaXN0PlxuICAgICAgICAgIDxNZW51Qm94Pk1lbnU8L01lbnVCb3g+XG4gICAgICAgIDwvTmF2Qm94PlxuICAgICAgPC9IZWFkZXJCb3g+XG4gICAgPC9MYXp5TW90aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIm0iLCJMYXp5TW90aW9uIiwiZG9tQW5pbWF0aW9uIiwiRmFuY3lMaW5rIiwidXNlSGFzTW91bnRlZCIsImRhdGEiLCJsYWJlbCIsImRlc3RpbmF0aW9uIiwiYTExeVRleHQiLCJIZWFkZXJCb3giLCJoZWFkZXIiLCJOYXZCb3giLCJuYXYiLCJNZW51Qm94IiwidWwiLCJOYXZMaXN0IiwiTGlzdEl0ZW0iLCJjbGFzc05hbWUiLCJuYXZBbmltIiwiaW5pdGlhbCIsInkiLCJlbnRlciIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJleGl0IiwiTmF2aWdhdGlvbiIsImhhc01vdW50ZWQiLCJtYXAiLCJpdGVtIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navigation.js\n");

/***/ })

});