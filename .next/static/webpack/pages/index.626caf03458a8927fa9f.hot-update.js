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

/***/ "./components/cta.js":
/*!***************************!*\
  !*** ./components/cta.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cta; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _fancy_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fancy-link */ \"./components/fancy-link.js\");\n/* harmony import */ var react_cool_inview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cool-inview */ \"./node_modules/react-cool-inview/dist/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _split_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./split-text */ \"./components/split-text.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/godwin/Desktop/shopify-starter/components/cta.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Cta() {\n  _s();\n\n  var _useInView = (0,react_cool_inview__WEBPACK_IMPORTED_MODULE_1__.default)({\n    rootMargin: \"150px 0px\"\n  }),\n      observe = _useInView.observe,\n      inView = _useInView.inView;\n\n  var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation)();\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (inView) {\n      controls.start(\"enter\");\n    }\n\n    if (!inView) {\n      controls.start(\"hidden\");\n    }\n  }, [controls, inView]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(CtaBox, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"cta-inner\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.h1, {\n          ref: observe,\n          className: \"cta-title\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_split_text__WEBPACK_IMPORTED_MODULE_3__.SplitText, {\n            initial: {\n              y: \"110%\",\n              opacity: 0\n            },\n            animate: controls,\n            exit: {\n              y: \"110%\"\n            },\n            variants: {\n              enter: function enter(i) {\n                return {\n                  y: \"0%\",\n                  opacity: 1,\n                  transition: {\n                    duration: 1,\n                    ease: [0.77, 0, 0.175, 1],\n                    delay: i * 0.02\n                  }\n                };\n              }\n            },\n            children: \"What goes on the body, should be as pure as the earth\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.m.div, {\n          className: \"cta-btn_container\",\n          ref: observe,\n          style: {\n            opacity: inView ? 1 : 0\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_fancy_link__WEBPACK_IMPORTED_MODULE_0__.default, {\n            a11yText: \"navigates to the perfumes page\",\n            className: \"link link--metis\",\n            destination: \"/care\",\n            label: \"Learn more about perfumes\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\n\n_s(Cta, \"omoUhjTKJOMZTgZKfRzitgP+RCk=\", false, function () {\n  return [react_cool_inview__WEBPACK_IMPORTED_MODULE_1__.default, framer_motion__WEBPACK_IMPORTED_MODULE_5__.useAnimation];\n});\n\n_c = Cta;\nvar CtaBox = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.div.withConfig({\n  displayName: \"cta__CtaBox\",\n  componentId: \"sc-1d80rlo-0\"\n})([\"position:relative;margin-top:var(--golden-ratio);margin-bottom:var(--golden-ratio);padding:50px 0;.cta-inner{display:flex;align-items:center;justify-content:flex-start;text-align:center;flex-direction:column;max-width:45vw;margin:0 auto;&.bg-red{background-color:red;}}.cta-title{font-family:var(--font-2);font-size:2rem;text-transform:none;line-height:1.05;letter-spacing:var(--ls-md);@media (min-width:768px){font-size:3vw;}}.cta-btn_container{margin-top:var(--spacing-md);transition:opacity 400ms linear 0.85s;}a{text-transform:capitalize;}\"]);\n_c2 = CtaBox;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Cta\");\n$RefreshReg$(_c2, \"CtaBox\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2N0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU08sR0FBVCxHQUFlO0FBQUE7O0FBQzVCLG1CQUE0QkwsMERBQVMsQ0FBQztBQUNwQ00sSUFBQUEsVUFBVSxFQUFFO0FBRHdCLEdBQUQsQ0FBckM7QUFBQSxNQUFRQyxPQUFSLGNBQVFBLE9BQVI7QUFBQSxNQUFpQkMsTUFBakIsY0FBaUJBLE1BQWpCOztBQUlBLE1BQU1DLFFBQVEsR0FBR1AsMkRBQVksRUFBN0I7QUFFQUMsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUssTUFBSixFQUFZO0FBQ1ZDLE1BQUFBLFFBQVEsQ0FBQ0MsS0FBVCxDQUFlLE9BQWY7QUFDRDs7QUFDRCxRQUFJLENBQUNGLE1BQUwsRUFBYTtBQUNYQyxNQUFBQSxRQUFRLENBQUNDLEtBQVQsQ0FBZSxRQUFmO0FBQ0Q7QUFDRixHQVBRLEVBT04sQ0FBQ0QsUUFBRCxFQUFXRCxNQUFYLENBUE0sQ0FBVDtBQVNBLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsTUFBRDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0UsOERBQUMsK0NBQUQ7QUFBTSxhQUFHLEVBQUVELE9BQVg7QUFBb0IsbUJBQVMsRUFBQyxXQUE5QjtBQUFBLGlDQUNFLDhEQUFDLGtEQUFEO0FBQ0UsbUJBQU8sRUFBRTtBQUFFSSxjQUFBQSxDQUFDLEVBQUUsTUFBTDtBQUFhQyxjQUFBQSxPQUFPLEVBQUU7QUFBdEIsYUFEWDtBQUVFLG1CQUFPLEVBQUVILFFBRlg7QUFHRSxnQkFBSSxFQUFFO0FBQ0pFLGNBQUFBLENBQUMsRUFBRTtBQURDLGFBSFI7QUFNRSxvQkFBUSxFQUFFO0FBQ1JFLGNBQUFBLEtBQUssRUFBRSxlQUFDQyxDQUFEO0FBQUEsdUJBQVE7QUFDYkgsa0JBQUFBLENBQUMsRUFBRSxJQURVO0FBRWJDLGtCQUFBQSxPQUFPLEVBQUUsQ0FGSTtBQUdiRyxrQkFBQUEsVUFBVSxFQUFFO0FBQ1ZDLG9CQUFBQSxRQUFRLEVBQUUsQ0FEQTtBQUVWQyxvQkFBQUEsSUFBSSxFQUFFLENBQUMsSUFBRCxFQUFPLENBQVAsRUFBVSxLQUFWLEVBQWlCLENBQWpCLENBRkk7QUFHVkMsb0JBQUFBLEtBQUssRUFBRUosQ0FBQyxHQUFHO0FBSEQ7QUFIQyxpQkFBUjtBQUFBO0FBREMsYUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUF3QkUsOERBQUMsZ0RBQUQ7QUFDRSxtQkFBUyxFQUFDLG1CQURaO0FBRUUsYUFBRyxFQUFFUCxPQUZQO0FBR0UsZUFBSyxFQUFFO0FBQ0xLLFlBQUFBLE9BQU8sRUFBRUosTUFBTSxHQUFHLENBQUgsR0FBTztBQURqQixXQUhUO0FBQUEsaUNBT0UsOERBQUMsZ0RBQUQ7QUFDRSxvQkFBUSxFQUFDLGdDQURYO0FBRUUscUJBQVMsRUFBQyxrQkFGWjtBQUdFLHVCQUFXLEVBQUMsT0FIZDtBQUlFLGlCQUFLLEVBQUM7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBNkNEOztHQTdEdUJIO1VBQ01MLHdEQUlYRTs7O0tBTEtHO0FBK0R4QixJQUFNYyxNQUFNLEdBQUdyQixxRUFBSDtBQUFBO0FBQUE7QUFBQSx1aUJBQVo7TUFBTXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY3RhLmpzP2FlN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBGYW5jeUxpbmsgZnJvbSBcIi4vZmFuY3ktbGlua1wiO1xuaW1wb3J0IHVzZUluVmlldyBmcm9tIFwicmVhY3QtY29vbC1pbnZpZXdcIjtcbmltcG9ydCB7IG0sIHVzZUFuaW1hdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNwbGl0VGV4dCB9IGZyb20gXCIuL3NwbGl0LXRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3RhKCkge1xuICBjb25zdCB7IG9ic2VydmUsIGluVmlldyB9ID0gdXNlSW5WaWV3KHtcbiAgICByb290TWFyZ2luOiBcIjE1MHB4IDBweFwiLFxuICB9KTtcblxuICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluVmlldykge1xuICAgICAgY29udHJvbHMuc3RhcnQoXCJlbnRlclwiKTtcbiAgICB9XG4gICAgaWYgKCFpblZpZXcpIHtcbiAgICAgIGNvbnRyb2xzLnN0YXJ0KFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgfSwgW2NvbnRyb2xzLCBpblZpZXddKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q3RhQm94PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YS1pbm5lclwiPlxuICAgICAgICAgIDxtLmgxIHJlZj17b2JzZXJ2ZX0gY2xhc3NOYW1lPVwiY3RhLXRpdGxlXCI+XG4gICAgICAgICAgICA8U3BsaXRUZXh0XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgeTogXCIxMTAlXCIsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XG4gICAgICAgICAgICAgIGV4aXQ9e3tcbiAgICAgICAgICAgICAgICB5OiBcIjExMCVcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgICBlbnRlcjogKGkpID0+ICh7XG4gICAgICAgICAgICAgICAgICB5OiBcIjAlXCIsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcbiAgICAgICAgICAgICAgICAgICAgZWFzZTogWzAuNzcsIDAsIDAuMTc1LCAxXSxcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IGkgKiAwLjAyLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgV2hhdCBnb2VzIG9uIHRoZSBib2R5LCBzaG91bGQgYmUgYXMgcHVyZSBhcyB0aGUgZWFydGhcbiAgICAgICAgICAgIDwvU3BsaXRUZXh0PlxuICAgICAgICAgIDwvbS5oMT5cblxuICAgICAgICAgIDxtLmRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3RhLWJ0bl9jb250YWluZXJcIlxuICAgICAgICAgICAgcmVmPXtvYnNlcnZlfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgb3BhY2l0eTogaW5WaWV3ID8gMSA6IDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGYW5jeUxpbmtcbiAgICAgICAgICAgICAgYTExeVRleHQ9XCJuYXZpZ2F0ZXMgdG8gdGhlIHBlcmZ1bWVzIHBhZ2VcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaW5rIGxpbmstLW1ldGlzXCJcbiAgICAgICAgICAgICAgZGVzdGluYXRpb249XCIvY2FyZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiTGVhcm4gbW9yZSBhYm91dCBwZXJmdW1lc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbS5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DdGFCb3g+XG4gICAgPC8+XG4gICk7XG59XG5cbmNvbnN0IEN0YUJveCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogdmFyKC0tZ29sZGVuLXJhdGlvKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tZ29sZGVuLXJhdGlvKTtcbiAgcGFkZGluZzogNTBweCAwO1xuXG4gIC5jdGEtaW5uZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiA0NXZ3O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgJi5iZy1yZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIH1cbiAgfVxuXG4gIC5jdGEtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LTIpO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogMS4wNTtcbiAgICBsZXR0ZXItc3BhY2luZzogdmFyKC0tbHMtbWQpO1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgfVxuICB9XG5cbiAgLmN0YS1idG5fY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGxpbmVhciAwLjg1cztcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICB9XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkZhbmN5TGluayIsInVzZUluVmlldyIsIm0iLCJ1c2VBbmltYXRpb24iLCJ1c2VFZmZlY3QiLCJTcGxpdFRleHQiLCJDdGEiLCJyb290TWFyZ2luIiwib2JzZXJ2ZSIsImluVmlldyIsImNvbnRyb2xzIiwic3RhcnQiLCJ5Iiwib3BhY2l0eSIsImVudGVyIiwiaSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJkZWxheSIsIkN0YUJveCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/cta.js\n");

/***/ })

});