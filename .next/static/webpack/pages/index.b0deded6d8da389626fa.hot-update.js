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

/***/ "./components/menu/menu-toggle.js":
/*!****************************************!*\
  !*** ./components/menu/menu-toggle.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MenuToggle\": function() { return /* binding */ MenuToggle; }\n/* harmony export */ });\n/* harmony import */ var _Users_godwin_Desktop_shopify_starter_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/godwin/Desktop/shopify-starter/components/menu/menu-toggle.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_godwin_Desktop_shopify_starter_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar Path = function Path(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.path, _objectSpread({\n    fill: \"transparent\",\n    strokeWidth: \"1.2\",\n    stroke: \"#0a0a0a\",\n    strokeLinecap: \"square\"\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Path;\nvar MenuToggle = function MenuToggle(_ref) {\n  var toggle = _ref.toggle;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n    onClick: toggle,\n    style: {\n      zIndex: \"999\"\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"svg\", {\n      width: \"30\",\n      height: \"30\",\n      viewBox: \"0 0 23 23\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Path, {\n        variants: {\n          exit: {\n            d: \"M 2 2.5 L 30 2.5\"\n          },\n          enter: {\n            d: \"M 3 16.5 L 17 2.5\"\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Path, {\n        d: \"M 2 9.423 L 30 9.423\",\n        variants: {\n          exit: {\n            opacity: 1\n          },\n          enter: {\n            opacity: 0\n          }\n        },\n        transition: {\n          duration: 0.1\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Path, {\n        d: \"M 2 16.346 L 7.5 16.346\",\n        variants: {\n          exit: {\n            opacity: 0\n          },\n          enter: {\n            opacity: 1,\n            d: \"M 3 2.5 L 17 16.346\"\n          }\n        },\n        transition: {\n          duration: 0.1\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 3\n  }, _this);\n};\n_c2 = MenuToggle;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Path\");\n$RefreshReg$(_c2, \"MenuToggle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lbnUvbWVudS10b2dnbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUVBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQ7QUFBQSxzQkFDWCw4REFBQyxpREFBRDtBQUNFLFFBQUksRUFBQyxhQURQO0FBRUUsZUFBVyxFQUFDLEtBRmQ7QUFHRSxVQUFNLEVBQUMsU0FIVDtBQUlFLGlCQUFhLEVBQUM7QUFKaEIsS0FLTUEsS0FMTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFc7QUFBQSxDQUFiOztLQUFNRDtBQVVDLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsc0JBQ3hCO0FBQ0UsV0FBTyxFQUFFQSxNQURYO0FBRUUsU0FBSyxFQUFFO0FBQUVDLE1BQUFBLE1BQU0sRUFBRTtBQUFWLEtBRlQ7QUFBQSwyQkFJRTtBQUFLLFdBQUssRUFBQyxJQUFYO0FBQWdCLFlBQU0sRUFBQyxJQUF2QjtBQUE0QixhQUFPLEVBQUMsV0FBcEM7QUFBQSw4QkFDRSw4REFBQyxJQUFEO0FBQ0UsZ0JBQVEsRUFBRTtBQUNSQyxVQUFBQSxJQUFJLEVBQUU7QUFBRUMsWUFBQUEsQ0FBQyxFQUFFO0FBQUwsV0FERTtBQUVSQyxVQUFBQSxLQUFLLEVBQUU7QUFBRUQsWUFBQUEsQ0FBQyxFQUFFO0FBQUw7QUFGQztBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU9FLDhEQUFDLElBQUQ7QUFDRSxTQUFDLEVBQUMsc0JBREo7QUFFRSxnQkFBUSxFQUFFO0FBQ1JELFVBQUFBLElBQUksRUFBRTtBQUFFRyxZQUFBQSxPQUFPLEVBQUU7QUFBWCxXQURFO0FBRVJELFVBQUFBLEtBQUssRUFBRTtBQUFFQyxZQUFBQSxPQUFPLEVBQUU7QUFBWDtBQUZDLFNBRlo7QUFNRSxrQkFBVSxFQUFFO0FBQUVDLFVBQUFBLFFBQVEsRUFBRTtBQUFaO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGLGVBZUUsOERBQUMsSUFBRDtBQUNFLFNBQUMsRUFBQyx5QkFESjtBQUVFLGdCQUFRLEVBQUU7QUFDUkosVUFBQUEsSUFBSSxFQUFFO0FBQUVHLFlBQUFBLE9BQU8sRUFBRTtBQUFYLFdBREU7QUFFUkQsVUFBQUEsS0FBSyxFQUFFO0FBQUVDLFlBQUFBLE9BQU8sRUFBRSxDQUFYO0FBQWNGLFlBQUFBLENBQUMsRUFBRTtBQUFqQjtBQUZDLFNBRlo7QUFNRSxrQkFBVSxFQUFFO0FBQUVHLFVBQUFBLFFBQVEsRUFBRTtBQUFaO0FBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEd0I7QUFBQSxDQUFuQjtNQUFNUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21lbnUvbWVudS10b2dnbGUuanM/MmFkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgUGF0aCA9IChwcm9wcykgPT4gKFxuICA8bS5wYXRoXG4gICAgZmlsbD1cInRyYW5zcGFyZW50XCJcbiAgICBzdHJva2VXaWR0aD1cIjEuMlwiXG4gICAgc3Ryb2tlPVwiIzBhMGEwYVwiXG4gICAgc3Ryb2tlTGluZWNhcD1cInNxdWFyZVwiXG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IE1lbnVUb2dnbGUgPSAoeyB0b2dnbGUgfSkgPT4gKFxuICA8YnV0dG9uXG4gICAgb25DbGljaz17dG9nZ2xlfVxuICAgIHN0eWxlPXt7IHpJbmRleDogXCI5OTlcIiB9fVxuICA+XG4gICAgPHN2ZyB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiB2aWV3Qm94PVwiMCAwIDIzIDIzXCI+XG4gICAgICA8UGF0aFxuICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgIGV4aXQ6IHsgZDogXCJNIDIgMi41IEwgMzAgMi41XCIgfSxcbiAgICAgICAgICBlbnRlcjogeyBkOiBcIk0gMyAxNi41IEwgMTcgMi41XCIgfSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8UGF0aFxuICAgICAgICBkPVwiTSAyIDkuNDIzIEwgMzAgOS40MjNcIlxuICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgIGV4aXQ6IHsgb3BhY2l0eTogMSB9LFxuICAgICAgICAgIGVudGVyOiB7IG9wYWNpdHk6IDAgfSxcbiAgICAgICAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4xIH19XG4gICAgICAvPlxuICAgICAgPFBhdGhcbiAgICAgICAgZD1cIk0gMiAxNi4zNDYgTCA3LjUgMTYuMzQ2XCJcbiAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICBleGl0OiB7IG9wYWNpdHk6IDAgfSxcbiAgICAgICAgICBlbnRlcjogeyBvcGFjaXR5OiAxLCBkOiBcIk0gMyAyLjUgTCAxNyAxNi4zNDZcIiB9LFxuICAgICAgICB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjEgfX1cbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIDwvYnV0dG9uPlxuKTtcbiJdLCJuYW1lcyI6WyJtIiwiUGF0aCIsInByb3BzIiwiTWVudVRvZ2dsZSIsInRvZ2dsZSIsInpJbmRleCIsImV4aXQiLCJkIiwiZW50ZXIiLCJvcGFjaXR5IiwiZHVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menu/menu-toggle.js\n");

/***/ })

});