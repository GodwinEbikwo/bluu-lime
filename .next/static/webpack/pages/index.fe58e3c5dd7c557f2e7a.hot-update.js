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

/***/ "./components/box.js":
/*!***************************!*\
  !*** ./components/box.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledBox\": function() { return /* binding */ StyledBox; },\n/* harmony export */   \"FeaturedContainer\": function() { return /* binding */ FeaturedContainer; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"box__StyledBox\",\n  componentId: \"sc-5ecxe8-0\"\n})([\"min-height:100%;width:100%;position:relative;margin-left:auto;margin-right:auto;max-width:var(--max-width);&.has-px{padding-left:var(--golden-ratio);padding-right:var(--golden-ratio);}\"]);\nvar FeaturedContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.aside.withConfig({\n  displayName: \"box__FeaturedContainer\",\n  componentId: \"sc-5ecxe8-1\"\n})([\"display:grid;grid-column-gap:var(--spacer);grid-row-gap:var(--spacer-double);min-height:70vh;@media (min-width:1024px){grid-column-gap:2vw;grid-template-columns:repeat(12,1fr);& > a{height:32.472vw;grid-column:1/12;&:not(:last-child){margin-bottom:calc(var(--spacer) + 2.5vw);}&:nth-child(1){height:24.569vw;grid-column:1/5;}&:nth-child(2){height:21.458vw;grid-column:5/8;}&:nth-child(3n){height:24.569vw;grid-column:7/12;}}}.img{height:540px;}\"]); // export const FeaturedContainer = styled.aside`\n//   display: grid;\n//   grid-column-gap: var(--spacer);\n//   grid-row-gap: var(--spacer-double);\n//   opacity: 0;\n//   transition: opacity 300ms var(--easing), transform 0.75s var(--easing);\n//   transform: translate3d(0, 0, 0);\n//   will-change: transform;\n//   min-height: 70vh;\n//   @media (min-width: 600px) {\n//     grid-template-columns: repeat(2, 1fr);\n//   }\n//   @media (min-width: 1024px) {\n//     grid-template-columns: 2fr 1fr 1fr;\n//   }\n//   .img {\n//     height: 540px;\n//   }\n//   &.is-inview {\n//     opacity: 1;\n//     transform: translate3d(0, -20px, 0);\n//     transition-delay: 0.2s;\n//   }\n// `;\n\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h1.withConfig({\n  displayName: \"box__Title\",\n  componentId: \"sc-5ecxe8-2\"\n})([\"font-family:\\\"Inter\\\",sans-serif;letter-spacing:-0.03em;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JveC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRU8sSUFBTUMsU0FBUyxHQUFHRCxxRUFBSDtBQUFBO0FBQUE7QUFBQSxnTUFBZjtBQWNBLElBQU1HLGlCQUFpQixHQUFHSCx1RUFBSDtBQUFBO0FBQUE7QUFBQSxvY0FBdkIsRUE4Q1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1LLEtBQUssR0FBR0wsb0VBQUg7QUFBQTtBQUFBO0FBQUEsZ0VBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib3guanM/MWRkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkQm94ID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xuXG4gICYuaGFzLXB4IHtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWdvbGRlbi1yYXRpbyk7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tZ29sZGVuLXJhdGlvKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZlYXR1cmVkQ29udGFpbmVyID0gc3R5bGVkLmFzaWRlYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWNvbHVtbi1nYXA6IHZhcigtLXNwYWNlcik7XG4gIGdyaWQtcm93LWdhcDogdmFyKC0tc3BhY2VyLWRvdWJsZSk7XG4gIG1pbi1oZWlnaHQ6IDcwdmg7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIGdyaWQtY29sdW1uLWdhcDogMnZ3O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xuXG4gICAgJiA+IGEge1xuICAgICAgaGVpZ2h0OiAzMi40NzJ2dztcbiAgICAgIGdyaWQtY29sdW1uOiAxLzEyO1xuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXNwYWNlcikgKyAyLjV2dyk7XG4gICAgICB9XG5cbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgaGVpZ2h0OiAyNC41Njl2dztcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvNTtcbiAgICAgIH1cblxuICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICBoZWlnaHQ6IDIxLjQ1OHZ3O1xuICAgICAgICBncmlkLWNvbHVtbjogNS84O1xuICAgICAgfVxuXG4gICAgICAmOm50aC1jaGlsZCgzbikge1xuICAgICAgICBoZWlnaHQ6IDI0LjU2OXZ3O1xuICAgICAgICBncmlkLWNvbHVtbjogNy8xMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuaW1nIHtcbiAgICBoZWlnaHQ6IDU0MHB4O1xuICB9XG5cbiAgLyogJi5pcy1pbnZpZXcge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgfSAqL1xuYDtcblxuLy8gZXhwb3J0IGNvbnN0IEZlYXR1cmVkQ29udGFpbmVyID0gc3R5bGVkLmFzaWRlYFxuLy8gICBkaXNwbGF5OiBncmlkO1xuLy8gICBncmlkLWNvbHVtbi1nYXA6IHZhcigtLXNwYWNlcik7XG4vLyAgIGdyaWQtcm93LWdhcDogdmFyKC0tc3BhY2VyLWRvdWJsZSk7XG4vLyAgIG9wYWNpdHk6IDA7XG4vLyAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgdmFyKC0tZWFzaW5nKSwgdHJhbnNmb3JtIDAuNzVzIHZhcigtLWVhc2luZyk7XG4vLyAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4vLyAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4vLyAgIG1pbi1oZWlnaHQ6IDcwdmg7XG5cbi8vICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4vLyAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbi8vICAgfVxuXG4vLyAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbi8vICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyO1xuLy8gICB9XG5cbi8vICAgLmltZyB7XG4vLyAgICAgaGVpZ2h0OiA1NDBweDtcbi8vICAgfVxuXG4vLyAgICYuaXMtaW52aWV3IHtcbi8vICAgICBvcGFjaXR5OiAxO1xuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xuLy8gICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4vLyAgIH1cbi8vIGA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlN0eWxlZEJveCIsImRpdiIsIkZlYXR1cmVkQ29udGFpbmVyIiwiYXNpZGUiLCJUaXRsZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/box.js\n");

/***/ })

});