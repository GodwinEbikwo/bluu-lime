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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MemoizedLetterWrapper\": function() { return /* binding */ MemoizedLetterWrapper; },\n/* harmony export */   \"MemoizedWordWrapper\": function() { return /* binding */ MemoizedWordWrapper; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/godwin/Desktop/shopify-starter/components/line-wrapper.js\",\n    _this = undefined;\n\n\n\n\n\nvar LetterWrapper = function LetterWrapper(_ref) {\n  var children = _ref.children,\n      countIndex = _ref.countIndex;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: \"relative inline-block\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n      style: {\n        opacity: 1\n      },\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n      className: \"absolute inset-0 w-full h-full overflow-hidden\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.span, {\n        className: \"inline-block\",\n        transition: {\n          ease: [0.215, 0.61, 0.355, 1],\n          duration: 0.8,\n          delay: 0.03 * countIndex\n        },\n        initial: {\n          x: \"-110%\",\n          scaleX: 1\n        },\n        animate: {\n          x: \"0%\",\n          originX: 0.5,\n          originY: 0.5,\n          scaleX: 1\n        },\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = LetterWrapper;\n\nvar WordWrapper = function WordWrapper(_ref2) {\n  var children = _ref2.children;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n    style: {\n      whiteSpace: \"pre\"\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 10\n  }, _this);\n};\n\n_c2 = WordWrapper;\nvar MemoizedLetterWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(LetterWrapper);\n_c3 = MemoizedLetterWrapper;\nvar MemoizedWordWrapper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(WordWrapper);\n_c4 = MemoizedWordWrapper;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"LetterWrapper\");\n$RefreshReg$(_c2, \"WordWrapper\");\n$RefreshReg$(_c3, \"MemoizedLetterWrapper\");\n$RefreshReg$(_c4, \"MemoizedWordWrapper\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpbmUtd3JhcHBlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBOEI7QUFBQSxNQUEzQkMsUUFBMkIsUUFBM0JBLFFBQTJCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUNsRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyx1QkFBZjtBQUFBLDRCQUNFO0FBQU0sV0FBSyxFQUFFO0FBQUVDLFFBQUFBLE9BQU8sRUFBRTtBQUFYLE9BQWI7QUFBQSxnQkFBOEJGO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQU0sZUFBUyxFQUFDLGdEQUFoQjtBQUFBLDZCQUNFLDhEQUFDLGlEQUFEO0FBQ0UsaUJBQVMsRUFBQyxjQURaO0FBRUUsa0JBQVUsRUFBRTtBQUNWRyxVQUFBQSxJQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLEtBQWQsRUFBcUIsQ0FBckIsQ0FESTtBQUVWQyxVQUFBQSxRQUFRLEVBQUUsR0FGQTtBQUdWQyxVQUFBQSxLQUFLLEVBQUUsT0FBT0o7QUFISixTQUZkO0FBT0UsZUFBTyxFQUFFO0FBQUVLLFVBQUFBLENBQUMsRUFBRSxPQUFMO0FBQWNDLFVBQUFBLE1BQU0sRUFBRTtBQUF0QixTQVBYO0FBUUUsZUFBTyxFQUFFO0FBQUVELFVBQUFBLENBQUMsRUFBRSxJQUFMO0FBQVdFLFVBQUFBLE9BQU8sRUFBRSxHQUFwQjtBQUF5QkMsVUFBQUEsT0FBTyxFQUFFLEdBQWxDO0FBQXVDRixVQUFBQSxNQUFNLEVBQUU7QUFBL0MsU0FSWDtBQUFBLGtCQVVHUDtBQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQkQsQ0FwQkQ7O0tBQU1EOztBQXFCTixJQUFNVyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxRQUFrQjtBQUFBLE1BQWZWLFFBQWUsU0FBZkEsUUFBZTtBQUNwQyxzQkFBTztBQUFNLFNBQUssRUFBRTtBQUFFVyxNQUFBQSxVQUFVLEVBQUU7QUFBZCxLQUFiO0FBQUEsY0FBcUNYO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBRkQ7O01BQU1VO0FBSUMsSUFBTUUscUJBQXFCLGdCQUFHZix1Q0FBQSxDQUFXRSxhQUFYLENBQTlCO01BQU1hO0FBQ04sSUFBTUUsbUJBQW1CLGdCQUFHakIsdUNBQUEsQ0FBV2EsV0FBWCxDQUE1QjtNQUFNSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xpbmUtd3JhcHBlci5qcz80OTNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IExldHRlcldyYXBwZXIgPSAoeyBjaGlsZHJlbiwgY291bnRJbmRleCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpbmxpbmUtYmxvY2tcIj5cbiAgICAgIDxzcGFuIHN0eWxlPXt7IG9wYWNpdHk6IDEgfX0+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgdy1mdWxsIGgtZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPG0uc3BhblxuICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiXG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZWFzZTogWzAuMjE1LCAwLjYxLCAwLjM1NSwgMV0sXG4gICAgICAgICAgICBkdXJhdGlvbjogMC44LFxuICAgICAgICAgICAgZGVsYXk6IDAuMDMgKiBjb3VudEluZGV4LFxuICAgICAgICAgIH19XG4gICAgICAgICAgaW5pdGlhbD17eyB4OiBcIi0xMTAlXCIsIHNjYWxlWDogMSB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgeDogXCIwJVwiLCBvcmlnaW5YOiAwLjUsIG9yaWdpblk6IDAuNSwgc2NhbGVYOiAxIH19XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvbS5zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmNvbnN0IFdvcmRXcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gPHNwYW4gc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJwcmVcIiB9fT57Y2hpbGRyZW59PC9zcGFuPjtcbn07XG5cbmV4cG9ydCBjb25zdCBNZW1vaXplZExldHRlcldyYXBwZXIgPSBSZWFjdC5tZW1vKExldHRlcldyYXBwZXIpO1xuZXhwb3J0IGNvbnN0IE1lbW9pemVkV29yZFdyYXBwZXIgPSBSZWFjdC5tZW1vKFdvcmRXcmFwcGVyKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm0iLCJMZXR0ZXJXcmFwcGVyIiwiY2hpbGRyZW4iLCJjb3VudEluZGV4Iiwib3BhY2l0eSIsImVhc2UiLCJkdXJhdGlvbiIsImRlbGF5IiwieCIsInNjYWxlWCIsIm9yaWdpblgiLCJvcmlnaW5ZIiwiV29yZFdyYXBwZXIiLCJ3aGl0ZVNwYWNlIiwiTWVtb2l6ZWRMZXR0ZXJXcmFwcGVyIiwibWVtbyIsIk1lbW9pemVkV29yZFdyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/line-wrapper.js\n");

/***/ })

});