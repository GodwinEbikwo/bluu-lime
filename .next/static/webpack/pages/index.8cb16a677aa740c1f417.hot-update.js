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

/***/ "./components/hero.js":
/*!****************************!*\
  !*** ./components/hero.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _split_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./split-text */ \"./components/split-text.js\");\n/* harmony import */ var react_cool_inview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cool-inview */ \"./node_modules/react-cool-inview/dist/index.esm.js\");\n/* harmony import */ var _line_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-wrapper */ \"./components/line-wrapper.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/godwin/Desktop/shopify-starter/components/hero.js\",\n    _s = $RefreshSig$();\n\n\n\n // import { SplitText } from \"@cyriacbr/react-split-text\";\n\n\n\nfunction Hero() {\n  _s();\n\n  var _useInView = (0,react_cool_inview__WEBPACK_IMPORTED_MODULE_1__.default)({\n    // onEnter: () => {\n    //   document.querySelector(\".hero-box\").classList.add(\".hero-blur\");\n    // },\n    onLeave: function onLeave() {\n      document.querySelector(\"body\").classList.add(\".hero-blur\");\n    }\n  }),\n      observe = _useInView.observe;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(HeroBox, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"aside\", {\n      className: \"hero_right-bottom\",\n      ref: observe,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n        className: \"hero_title\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_split_text__WEBPACK_IMPORTED_MODULE_0__.SplitText, {\n          initial: {\n            y: \"110%\",\n            opacity: 0\n          },\n          animate: \"enter\",\n          exit: {\n            y: \"-110%\"\n          },\n          variants: {\n            enter: function enter() {\n              return {\n                y: \"0%\",\n                opacity: 1,\n                transition: {\n                  duration: 1.3,\n                  ease: [0.215, 0.61, 0.355, 1]\n                }\n              };\n            }\n          },\n          children: \"Dive into nature with bloom\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Hero, \"XLlQLn55CgVTJbbLwKlRTvg0fkg=\", false, function () {\n  return [react_cool_inview__WEBPACK_IMPORTED_MODULE_1__.default];\n});\n\n_c = Hero;\nvar HeroBox = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.article.withConfig({\n  displayName: \"hero__HeroBox\",\n  componentId: \"sc-ikhro6-0\"\n})([\"height:90vh;position:relative;background-color:var(--black);.hero_right-bottom{--int:10px;position:absolute;left:var(--spacing-md);bottom:calc(var(--spacing-md) + var(--int));max-width:58rem;.hero_title{font-family:var(--font-2);font-size:3rem;line-height:1.05;letter-spacing:var(--ls-sm);color:var(--off-white);@media (min-width:768px){font-size:5.5vw;}}}\"]);\n_c2 = HeroBox;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Hero\");\n$RefreshReg$(_c2, \"HeroBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7O0FBRWUsU0FBU0ssSUFBVCxHQUFnQjtBQUFBOztBQUM3QixtQkFBb0JILDBEQUFTLENBQUM7QUFDNUI7QUFDQTtBQUNBO0FBQ0FJLElBQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiQyxNQUFBQSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFNBQS9CLENBQXlDQyxHQUF6QyxDQUE2QyxZQUE3QztBQUNEO0FBTjJCLEdBQUQsQ0FBN0I7QUFBQSxNQUFRQyxPQUFSLGNBQVFBLE9BQVI7O0FBUUEsc0JBQ0UsOERBQUMsT0FBRDtBQUFBLDJCQUNFO0FBQU8sZUFBUyxFQUFDLG1CQUFqQjtBQUFxQyxTQUFHLEVBQUVBLE9BQTFDO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLFlBQWQ7QUFBQSwrQkFRRSw4REFBQyxrREFBRDtBQUNFLGlCQUFPLEVBQUU7QUFBRUMsWUFBQUEsQ0FBQyxFQUFFLE1BQUw7QUFBYUMsWUFBQUEsT0FBTyxFQUFFO0FBQXRCLFdBRFg7QUFFRSxpQkFBTyxFQUFDLE9BRlY7QUFHRSxjQUFJLEVBQUU7QUFDSkQsWUFBQUEsQ0FBQyxFQUFFO0FBREMsV0FIUjtBQU1FLGtCQUFRLEVBQUU7QUFDUkUsWUFBQUEsS0FBSyxFQUFFO0FBQUEscUJBQU87QUFDWkYsZ0JBQUFBLENBQUMsRUFBRSxJQURTO0FBRVpDLGdCQUFBQSxPQUFPLEVBQUUsQ0FGRztBQUdaRSxnQkFBQUEsVUFBVSxFQUFFO0FBQ1ZDLGtCQUFBQSxRQUFRLEVBQUUsR0FEQTtBQUVWQyxrQkFBQUEsSUFBSSxFQUFFLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxLQUFkLEVBQXFCLENBQXJCO0FBRkk7QUFIQSxlQUFQO0FBQUE7QUFEQyxXQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0Q7O0dBM0N1Qlo7VUFDRkg7OztLQURFRztBQTZDeEIsSUFBTWEsT0FBTyxHQUFHbEIseUVBQUg7QUFBQTtBQUFBO0FBQUEsNFdBQWI7TUFBTWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVyby5qcz9iZTI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBTcGxpdFRleHQgfSBmcm9tIFwiLi9zcGxpdC10ZXh0XCI7XG5pbXBvcnQgdXNlSW5WaWV3IGZyb20gXCJyZWFjdC1jb29sLWludmlld1wiO1xuLy8gaW1wb3J0IHsgU3BsaXRUZXh0IH0gZnJvbSBcIkBjeXJpYWNici9yZWFjdC1zcGxpdC10ZXh0XCI7XG5pbXBvcnQgeyBNZW1vaXplZExldHRlcldyYXBwZXIsIE1lbW9pemVkV29yZFdyYXBwZXIgfSBmcm9tIFwiLi9saW5lLXdyYXBwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybygpIHtcbiAgY29uc3QgeyBvYnNlcnZlIH0gPSB1c2VJblZpZXcoe1xuICAgIC8vIG9uRW50ZXI6ICgpID0+IHtcbiAgICAvLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVyby1ib3hcIikuY2xhc3NMaXN0LmFkZChcIi5oZXJvLWJsdXJcIik7XG4gICAgLy8gfSxcbiAgICBvbkxlYXZlOiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwiLmhlcm8tYmx1clwiKTtcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIChcbiAgICA8SGVyb0JveD5cbiAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJoZXJvX3JpZ2h0LWJvdHRvbVwiIHJlZj17b2JzZXJ2ZX0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJoZXJvX3RpdGxlXCI+XG4gICAgICAgICAgey8qIDxTcGxpdFRleHRcbiAgICAgICAgICAgIExldHRlcldyYXBwZXI9e01lbW9pemVkTGV0dGVyV3JhcHBlcn1cbiAgICAgICAgICAgIFdvcmRXcmFwcGVyPXtNZW1vaXplZFdvcmRXcmFwcGVyfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIERpdmUgaW50byBuYXR1cmUgd2l0aCBibG9vbVxuICAgICAgICAgIDwvU3BsaXRUZXh0PiAqL31cblxuICAgICAgICAgIDxTcGxpdFRleHRcbiAgICAgICAgICAgIGluaXRpYWw9e3sgeTogXCIxMTAlXCIsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9XCJlbnRlclwiXG4gICAgICAgICAgICBleGl0PXt7XG4gICAgICAgICAgICAgIHk6IFwiLTExMCVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgICBlbnRlcjogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICB5OiBcIjAlXCIsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMS4zLFxuICAgICAgICAgICAgICAgICAgZWFzZTogWzAuMjE1LCAwLjYxLCAwLjM1NSwgMV0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIERpdmUgaW50byBuYXR1cmUgd2l0aCBibG9vbVxuICAgICAgICAgIDwvU3BsaXRUZXh0PlxuICAgICAgICA8L2gxPlxuICAgICAgPC9hc2lkZT5cbiAgICA8L0hlcm9Cb3g+XG4gICk7XG59XG5cbmNvbnN0IEhlcm9Cb3ggPSBzdHlsZWQuYXJ0aWNsZWBcbiAgaGVpZ2h0OiA5MHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrKTtcblxuICAuaGVyb19yaWdodC1ib3R0b20ge1xuICAgIC0taW50OiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgICBib3R0b206IGNhbGModmFyKC0tc3BhY2luZy1tZCkgKyB2YXIoLS1pbnQpKTtcbiAgICBtYXgtd2lkdGg6IDU4cmVtO1xuXG4gICAgLmhlcm9fdGl0bGUge1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtMik7XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS4wNTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1scy1zbSk7XG4gICAgICBjb2xvcjogdmFyKC0tb2ZmLXdoaXRlKTtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmb250LXNpemU6IDUuNXZ3O1xuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJTcGxpdFRleHQiLCJ1c2VJblZpZXciLCJNZW1vaXplZExldHRlcldyYXBwZXIiLCJNZW1vaXplZFdvcmRXcmFwcGVyIiwiSGVybyIsIm9uTGVhdmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJvYnNlcnZlIiwieSIsIm9wYWNpdHkiLCJlbnRlciIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJIZXJvQm94IiwiYXJ0aWNsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hero.js\n");

/***/ })

});