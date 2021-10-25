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

/***/ "./components/line-wrapper.js":
/*!************************************!*\
  !*** ./components/line-wrapper.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MemoizedLetterWrapper\": function() { return /* binding */ MemoizedLetterWrapper; },\n/* harmony export */   \"MemoizedWordWrapper\": function() { return /* binding */ MemoizedWordWrapper; },\n/* harmony export */   \"LetterDash\": function() { return /* binding */ LetterDash; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cyriacbr_react_split_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cyriacbr/react-split-text */ \"./node_modules/@cyriacbr/react-split-text/dist/react-split-text.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/godwin/Desktop/shopify-starter/components/line-wrapper.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar LetterWrapper = function LetterWrapper(_ref) {\n  var children = _ref.children,\n      countIndex = _ref.countIndex;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"relative inline-block\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n      style: {\n        opacity: 0\n      },\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n      className: \"absolute inset-0 w-full h-full overflow-hidden\",\n      style: {\n        marginLeft: \"calc(-.56vh + -8.4px)\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.span, {\n        transition: {\n          ease: [0.77, 0, 0.175, 1],\n          duration: 0.8,\n          delay: 0.025 * countIndex\n        },\n        initial: {\n          x: \"-103%\",\n          scaleX: 1\n        },\n        animate: {\n          x: \"0%\",\n          scaleX: 1\n        },\n        style: {\n          display: \"inline-block\",\n          transformOrigin: \"0% 50%\",\n          willChange: \"transform\"\n        },\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = LetterWrapper;\n\nvar WordWrapper = function WordWrapper(_ref2) {\n  var children = _ref2.children;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n    style: {\n      whiteSpace: \"pre\"\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 10\n  }, _this);\n};\n\n_c2 = WordWrapper;\nvar MemoizedLetterWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(LetterWrapper);\n_c3 = MemoizedLetterWrapper;\nvar MemoizedWordWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(WordWrapper);\n_c4 = MemoizedWordWrapper;\nvar LetterDash = function LetterDash() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_cyriacbr_react_split_text__WEBPACK_IMPORTED_MODULE_1__.SplitText, {\n    LetterWrapper: MemoizedLetterWrapper,\n    WordWrapper: MemoizedWordWrapper,\n    children: \"Hello world from the LetterDash Component!\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n_c5 = LetterDash;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"LetterWrapper\");\n$RefreshReg$(_c2, \"WordWrapper\");\n$RefreshReg$(_c3, \"MemoizedLetterWrapper\");\n$RefreshReg$(_c4, \"MemoizedWordWrapper\");\n$RefreshReg$(_c5, \"LetterDash\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpbmUtd3JhcHBlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQThCO0FBQUEsTUFBM0JDLFFBQTJCLFFBQTNCQSxRQUEyQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDbEQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQSw0QkFDRTtBQUFNLFdBQUssRUFBRTtBQUFFQyxRQUFBQSxPQUFPLEVBQUU7QUFBWCxPQUFiO0FBQUEsZ0JBQThCRjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUNFLGVBQVMsRUFBQyxnREFEWjtBQUVFLFdBQUssRUFBRTtBQUNMRyxRQUFBQSxVQUFVLEVBQUU7QUFEUCxPQUZUO0FBQUEsNkJBTUUsOERBQUMsaURBQUQ7QUFDRSxrQkFBVSxFQUFFO0FBQ1ZDLFVBQUFBLElBQUksRUFBRSxDQUFDLElBQUQsRUFBTyxDQUFQLEVBQVUsS0FBVixFQUFpQixDQUFqQixDQURJO0FBRVZDLFVBQUFBLFFBQVEsRUFBRSxHQUZBO0FBR1ZDLFVBQUFBLEtBQUssRUFBRSxRQUFRTDtBQUhMLFNBRGQ7QUFNRSxlQUFPLEVBQUU7QUFBRU0sVUFBQUEsQ0FBQyxFQUFFLE9BQUw7QUFBY0MsVUFBQUEsTUFBTSxFQUFFO0FBQXRCLFNBTlg7QUFPRSxlQUFPLEVBQUU7QUFBRUQsVUFBQUEsQ0FBQyxFQUFFLElBQUw7QUFBV0MsVUFBQUEsTUFBTSxFQUFFO0FBQW5CLFNBUFg7QUFRRSxhQUFLLEVBQUU7QUFDTEMsVUFBQUEsT0FBTyxFQUFFLGNBREo7QUFFTEMsVUFBQUEsZUFBZSxFQUFFLFFBRlo7QUFHTEMsVUFBQUEsVUFBVSxFQUFFO0FBSFAsU0FSVDtBQUFBLGtCQWNHWDtBQWRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0E3QkQ7O0tBQU1EOztBQThCTixJQUFNYSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxRQUFrQjtBQUFBLE1BQWZaLFFBQWUsU0FBZkEsUUFBZTtBQUNwQyxzQkFBTztBQUFNLFNBQUssRUFBRTtBQUFFYSxNQUFBQSxVQUFVLEVBQUU7QUFBZCxLQUFiO0FBQUEsY0FBcUNiO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQ7O01BQU1ZO0FBSUMsSUFBTUUscUJBQXFCLGdCQUFHbEIsdUNBQUEsQ0FBV0csYUFBWCxDQUE5QjtNQUFNZTtBQUNOLElBQU1FLG1CQUFtQixnQkFBR3BCLHVDQUFBLENBQVdnQixXQUFYLENBQTVCO01BQU1JO0FBRU4sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUM5QixzQkFDRSw4REFBQyxpRUFBRDtBQUNFLGlCQUFhLEVBQUVILHFCQURqQjtBQUVFLGVBQVcsRUFBRUUsbUJBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVFELENBVE07TUFBTUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saW5lLXdyYXBwZXIuanM/NDkzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNwbGl0VGV4dCB9IGZyb20gXCJAY3lyaWFjYnIvcmVhY3Qtc3BsaXQtdGV4dFwiO1xuaW1wb3J0IHsgbSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IExldHRlcldyYXBwZXIgPSAoeyBjaGlsZHJlbiwgY291bnRJbmRleCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2tcIj5cbiAgICAgIDxzcGFuIHN0eWxlPXt7IG9wYWNpdHk6IDAgfX0+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbCBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiY2FsYygtLjU2dmggKyAtOC40cHgpXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxtLnNwYW5cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICBlYXNlOiBbMC43NywgMCwgMC4xNzUsIDFdLFxuICAgICAgICAgICAgZHVyYXRpb246IDAuOCxcbiAgICAgICAgICAgIGRlbGF5OiAwLjAyNSAqIGNvdW50SW5kZXgsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBpbml0aWFsPXt7IHg6IFwiLTEwMyVcIiwgc2NhbGVYOiAxIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB4OiBcIjAlXCIsIHNjYWxlWDogMSB9fVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcIjAlIDUwJVwiLFxuICAgICAgICAgICAgd2lsbENoYW5nZTogXCJ0cmFuc2Zvcm1cIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L20uc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5jb25zdCBXb3JkV3JhcHBlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIDxzcGFuIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwicHJlXCIgfX0+e2NoaWxkcmVufTwvc3Bhbj47XG59O1xuXG5leHBvcnQgY29uc3QgTWVtb2l6ZWRMZXR0ZXJXcmFwcGVyID0gUmVhY3QubWVtbyhMZXR0ZXJXcmFwcGVyKTtcbmV4cG9ydCBjb25zdCBNZW1vaXplZFdvcmRXcmFwcGVyID0gUmVhY3QubWVtbyhXb3JkV3JhcHBlcik7XG5cbmV4cG9ydCBjb25zdCBMZXR0ZXJEYXNoID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTcGxpdFRleHRcbiAgICAgIExldHRlcldyYXBwZXI9e01lbW9pemVkTGV0dGVyV3JhcHBlcn1cbiAgICAgIFdvcmRXcmFwcGVyPXtNZW1vaXplZFdvcmRXcmFwcGVyfVxuICAgID5cbiAgICAgIEhlbGxvIHdvcmxkIGZyb20gdGhlIExldHRlckRhc2ggQ29tcG9uZW50IVxuICAgIDwvU3BsaXRUZXh0PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNwbGl0VGV4dCIsIm0iLCJMZXR0ZXJXcmFwcGVyIiwiY2hpbGRyZW4iLCJjb3VudEluZGV4Iiwib3BhY2l0eSIsIm1hcmdpbkxlZnQiLCJlYXNlIiwiZHVyYXRpb24iLCJkZWxheSIsIngiLCJzY2FsZVgiLCJkaXNwbGF5IiwidHJhbnNmb3JtT3JpZ2luIiwid2lsbENoYW5nZSIsIldvcmRXcmFwcGVyIiwid2hpdGVTcGFjZSIsIk1lbW9pemVkTGV0dGVyV3JhcHBlciIsIm1lbW8iLCJNZW1vaXplZFdvcmRXcmFwcGVyIiwiTGV0dGVyRGFzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/line-wrapper.js\n");

/***/ })

});