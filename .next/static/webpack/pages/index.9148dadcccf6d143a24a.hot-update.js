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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _split_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./split-text */ \"./components/split-text.js\");\n/* harmony import */ var react_cool_inview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cool-inview */ \"./node_modules/react-cool-inview/dist/index.esm.js\");\n/* harmony import */ var _line_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-wrapper */ \"./components/line-wrapper.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/godwin/Desktop/shopify-starter/components/hero.js\",\n    _s = $RefreshSig$();\n\n\n\n // import { SplitText } from \"@cyriacbr/react-split-text\";\n\n\n\nfunction Hero() {\n  _s();\n\n  var _useInView = (0,react_cool_inview__WEBPACK_IMPORTED_MODULE_1__.default)({\n    onEnter: function onEnter() {\n      document.querySelector(\"body\").classList.add(\".hero-blur\");\n    },\n    onLeave: function onLeave() {\n      document.querySelector(\"body\").classList.add(\".hero-blur\");\n    }\n  }),\n      observe = _useInView.observe;\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(HeroBox, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"aside\", {\n      className: \"hero_right-bottom\",\n      ref: observe,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n        className: \"hero_title\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_split_text__WEBPACK_IMPORTED_MODULE_0__.SplitText, {\n          initial: {\n            y: \"110%\",\n            opacity: 0\n          },\n          animate: \"enter\",\n          exit: {\n            y: \"-110%\"\n          },\n          variants: {\n            enter: function enter() {\n              return {\n                y: \"0%\",\n                opacity: 1,\n                transition: {\n                  duration: 1.3,\n                  ease: [0.215, 0.61, 0.355, 1]\n                }\n              };\n            }\n          },\n          children: \"Dive into nature with bloom\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Hero, \"XLlQLn55CgVTJbbLwKlRTvg0fkg=\", false, function () {\n  return [react_cool_inview__WEBPACK_IMPORTED_MODULE_1__.default];\n});\n\n_c = Hero;\nvar HeroBox = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.article.withConfig({\n  displayName: \"hero__HeroBox\",\n  componentId: \"sc-ikhro6-0\"\n})([\"height:90vh;position:relative;background-color:var(--black);.hero_right-bottom{--int:10px;position:absolute;left:var(--spacing-md);bottom:calc(var(--spacing-md) + var(--int));max-width:58rem;.hero_title{font-family:var(--font-2);font-size:3rem;line-height:1.05;letter-spacing:var(--ls-sm);color:var(--off-white);@media (min-width:768px){font-size:5.5vw;}}}\"]);\n_c2 = HeroBox;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Hero\");\n$RefreshReg$(_c2, \"HeroBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlcm8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7O0FBRWUsU0FBU0ssSUFBVCxHQUFnQjtBQUFBOztBQUM3QixtQkFBb0JILDBEQUFTLENBQUM7QUFDNUJJLElBQUFBLE9BQU8sRUFBRSxtQkFBTTtBQUNiQyxNQUFBQSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFNBQS9CLENBQXlDQyxHQUF6QyxDQUE2QyxZQUE3QztBQUNELEtBSDJCO0FBSTVCQyxJQUFBQSxPQUFPLEVBQUUsbUJBQU07QUFDYkosTUFBQUEsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLEVBQStCQyxTQUEvQixDQUF5Q0MsR0FBekMsQ0FBNkMsWUFBN0M7QUFDRDtBQU4yQixHQUFELENBQTdCO0FBQUEsTUFBUUUsT0FBUixjQUFRQSxPQUFSOztBQVFBLHNCQUNFLDhEQUFDLE9BQUQ7QUFBQSwyQkFDRTtBQUFPLGVBQVMsRUFBQyxtQkFBakI7QUFBcUMsU0FBRyxFQUFFQSxPQUExQztBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQyxZQUFkO0FBQUEsK0JBUUUsOERBQUMsa0RBQUQ7QUFDRSxpQkFBTyxFQUFFO0FBQUVDLFlBQUFBLENBQUMsRUFBRSxNQUFMO0FBQWFDLFlBQUFBLE9BQU8sRUFBRTtBQUF0QixXQURYO0FBRUUsaUJBQU8sRUFBQyxPQUZWO0FBR0UsY0FBSSxFQUFFO0FBQ0pELFlBQUFBLENBQUMsRUFBRTtBQURDLFdBSFI7QUFNRSxrQkFBUSxFQUFFO0FBQ1JFLFlBQUFBLEtBQUssRUFBRTtBQUFBLHFCQUFPO0FBQ1pGLGdCQUFBQSxDQUFDLEVBQUUsSUFEUztBQUVaQyxnQkFBQUEsT0FBTyxFQUFFLENBRkc7QUFHWkUsZ0JBQUFBLFVBQVUsRUFBRTtBQUNWQyxrQkFBQUEsUUFBUSxFQUFFLEdBREE7QUFFVkMsa0JBQUFBLElBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsS0FBZCxFQUFxQixDQUFyQjtBQUZJO0FBSEEsZUFBUDtBQUFBO0FBREMsV0FOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0NEOztHQTNDdUJiO1VBQ0ZIOzs7S0FERUc7QUE2Q3hCLElBQU1jLE9BQU8sR0FBR25CLHlFQUFIO0FBQUE7QUFBQTtBQUFBLDRXQUFiO01BQU1tQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlcm8uanM/YmUyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU3BsaXRUZXh0IH0gZnJvbSBcIi4vc3BsaXQtdGV4dFwiO1xuaW1wb3J0IHVzZUluVmlldyBmcm9tIFwicmVhY3QtY29vbC1pbnZpZXdcIjtcbi8vIGltcG9ydCB7IFNwbGl0VGV4dCB9IGZyb20gXCJAY3lyaWFjYnIvcmVhY3Qtc3BsaXQtdGV4dFwiO1xuaW1wb3J0IHsgTWVtb2l6ZWRMZXR0ZXJXcmFwcGVyLCBNZW1vaXplZFdvcmRXcmFwcGVyIH0gZnJvbSBcIi4vbGluZS13cmFwcGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8oKSB7XG4gIGNvbnN0IHsgb2JzZXJ2ZSB9ID0gdXNlSW5WaWV3KHtcbiAgICBvbkVudGVyOiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwiLmhlcm8tYmx1clwiKTtcbiAgICB9LFxuICAgIG9uTGVhdmU6ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5hZGQoXCIuaGVyby1ibHVyXCIpO1xuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxIZXJvQm94PlxuICAgICAgPGFzaWRlIGNsYXNzTmFtZT1cImhlcm9fcmlnaHQtYm90dG9tXCIgcmVmPXtvYnNlcnZlfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImhlcm9fdGl0bGVcIj5cbiAgICAgICAgICB7LyogPFNwbGl0VGV4dFxuICAgICAgICAgICAgTGV0dGVyV3JhcHBlcj17TWVtb2l6ZWRMZXR0ZXJXcmFwcGVyfVxuICAgICAgICAgICAgV29yZFdyYXBwZXI9e01lbW9pemVkV29yZFdyYXBwZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGl2ZSBpbnRvIG5hdHVyZSB3aXRoIGJsb29tXG4gICAgICAgICAgPC9TcGxpdFRleHQ+ICovfVxuXG4gICAgICAgICAgPFNwbGl0VGV4dFxuICAgICAgICAgICAgaW5pdGlhbD17eyB5OiBcIjExMCVcIiwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT1cImVudGVyXCJcbiAgICAgICAgICAgIGV4aXQ9e3tcbiAgICAgICAgICAgICAgeTogXCItMTEwJVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICAgIGVudGVyOiAoKSA9PiAoe1xuICAgICAgICAgICAgICAgIHk6IFwiMCVcIixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjMsXG4gICAgICAgICAgICAgICAgICBlYXNlOiBbMC4yMTUsIDAuNjEsIDAuMzU1LCAxXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGl2ZSBpbnRvIG5hdHVyZSB3aXRoIGJsb29tXG4gICAgICAgICAgPC9TcGxpdFRleHQ+XG4gICAgICAgIDwvaDE+XG4gICAgICA8L2FzaWRlPlxuICAgIDwvSGVyb0JveD5cbiAgKTtcbn1cblxuY29uc3QgSGVyb0JveCA9IHN0eWxlZC5hcnRpY2xlYFxuICBoZWlnaHQ6IDkwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2spO1xuXG4gIC5oZXJvX3JpZ2h0LWJvdHRvbSB7XG4gICAgLS1pbnQ6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IHZhcigtLXNwYWNpbmctbWQpO1xuICAgIGJvdHRvbTogY2FsYyh2YXIoLS1zcGFjaW5nLW1kKSArIHZhcigtLWludCkpO1xuICAgIG1heC13aWR0aDogNThyZW07XG5cbiAgICAuaGVyb190aXRsZSB7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC0yKTtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjA1O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWxzLXNtKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1vZmYtd2hpdGUpO1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNS41dnc7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlNwbGl0VGV4dCIsInVzZUluVmlldyIsIk1lbW9pemVkTGV0dGVyV3JhcHBlciIsIk1lbW9pemVkV29yZFdyYXBwZXIiLCJIZXJvIiwib25FbnRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsIm9uTGVhdmUiLCJvYnNlcnZlIiwieSIsIm9wYWNpdHkiLCJlbnRlciIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJIZXJvQm94IiwiYXJ0aWNsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hero.js\n");

/***/ })

});