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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledBox\": function() { return /* binding */ StyledBox; },\n/* harmony export */   \"FeaturedContainer\": function() { return /* binding */ FeaturedContainer; },\n/* harmony export */   \"FeatureProductList\": function() { return /* binding */ FeatureProductList; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({\n  displayName: \"box__StyledBox\",\n  componentId: \"sc-5ecxe8-0\"\n})([\"min-height:100%;width:100%;position:relative;margin-left:auto;margin-right:auto;max-width:var(--max-width);&.has-px{padding-left:var(--golden-ratio);padding-right:var(--golden-ratio);}\"]); // export const FeaturedContainer = styled.aside`\n//   display: grid;\n//   grid-column-gap: var(--spacer);\n//   grid-row-gap: var(--spacer-double);\n//   min-height: 70vh;\n//   @media (min-width: 1024px) {\n//     grid-column-gap: 2vw;\n//     grid-template-columns: repeat(12, 1fr);\n//     & > a {\n//       height: 32.472vw;\n//       grid-column: 1/12;\n//       &:not(:last-child) {\n//         margin-bottom: calc(var(--spacer) + 13rem);\n//       }\n//       &:nth-child(1n) {\n//         grid-column: 1/5;\n//       }\n//       &:nth-child(3n - 1) {\n//         /* margin-top: 20rem; */\n//         grid-column: 5/8;\n//       }\n//       &:nth-child(3n) {\n//         grid-column: 8/13;\n//       }\n//     }\n//   }\n//   .img {\n//     height: 540px;\n//   }\n// `;\n\nvar FeaturedContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.aside.withConfig({\n  displayName: \"box__FeaturedContainer\",\n  componentId: \"sc-5ecxe8-1\"\n})([\"display:grid;grid-column-gap:var(--spacer);grid-row-gap:var(--spacer-double);opacity:0;transition:opacity 300ms var(--easing),transform 0.75s var(--easing);transform:translate3d(0,0,0);will-change:transform;min-height:70vh;margin-top:var(--spacing-lg);@media (min-width:600px){grid-template-columns:repeat(2,1fr);}@media (min-width:1024px){grid-template-columns:1fr 1fr 1fr;}&.is-inview{opacity:1;transform:translate3d(0,-20px,0);transition-delay:0.2s;}\"]);\nvar FeatureProductList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({\n  displayName: \"box__FeatureProductList\",\n  componentId: \"sc-5ecxe8-2\"\n})([\"display:grid;grid-column-gap:var(--spacer);grid-row-gap:var(--spacer-double);opacity:0;transition:opacity 400ms var(--easing),transform 0.75s var(--easing);transform:translate3d(0,0,0);will-change:opacity,transform;margin-top:var(--spacing-lg);&.is-inview{opacity:1;transform:translate3d(0,-20px,0);transition-delay:0.2s;}&:hover > li{transition:opacity 400ms linear;opacity:0.25;}&:hover > li:hover{opacity:1;color:var(--black);}@media (min-width:600px){grid-template-columns:repeat(2,1fr);}@media (min-width:1024px){grid-template-columns:repeat(3,1fr);}\"]);\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h1.withConfig({\n  displayName: \"box__Title\",\n  componentId: \"sc-5ecxe8-3\"\n})([\"font-family:\\\"Inter\\\",sans-serif;letter-spacing:-0.03em;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JveC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1DLFNBQVMsR0FBR0QscUVBQUg7QUFBQTtBQUFBO0FBQUEsZ01BQWYsRUFjUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRU8sSUFBTUcsaUJBQWlCLEdBQUdILHVFQUFIO0FBQUE7QUFBQTtBQUFBLDZjQUF2QjtBQThCQSxJQUFNSyxrQkFBa0IsR0FBR0wsb0VBQUg7QUFBQTtBQUFBO0FBQUEsbWpCQUF4QjtBQW1DQSxJQUFNTyxLQUFLLEdBQUdQLG9FQUFIO0FBQUE7QUFBQTtBQUFBLGdFQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYm94LmpzPzFkZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEJveCA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKTtcblxuICAmLmhhcy1weCB7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1nb2xkZW4tcmF0aW8pO1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLWdvbGRlbi1yYXRpbyk7XG4gIH1cbmA7XG5cbi8vIGV4cG9ydCBjb25zdCBGZWF0dXJlZENvbnRhaW5lciA9IHN0eWxlZC5hc2lkZWBcbi8vICAgZGlzcGxheTogZ3JpZDtcbi8vICAgZ3JpZC1jb2x1bW4tZ2FwOiB2YXIoLS1zcGFjZXIpO1xuLy8gICBncmlkLXJvdy1nYXA6IHZhcigtLXNwYWNlci1kb3VibGUpO1xuLy8gICBtaW4taGVpZ2h0OiA3MHZoO1xuXG4vLyAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbi8vICAgICBncmlkLWNvbHVtbi1nYXA6IDJ2dztcbi8vICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcblxuLy8gICAgICYgPiBhIHtcbi8vICAgICAgIGhlaWdodDogMzIuNDcydnc7XG4vLyAgICAgICBncmlkLWNvbHVtbjogMS8xMjtcblxuLy8gICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1zcGFjZXIpICsgMTNyZW0pO1xuLy8gICAgICAgfVxuXG4vLyAgICAgICAmOm50aC1jaGlsZCgxbikge1xuLy8gICAgICAgICBncmlkLWNvbHVtbjogMS81O1xuLy8gICAgICAgfVxuXG4vLyAgICAgICAmOm50aC1jaGlsZCgzbiAtIDEpIHtcbi8vICAgICAgICAgLyogbWFyZ2luLXRvcDogMjByZW07ICovXG4vLyAgICAgICAgIGdyaWQtY29sdW1uOiA1Lzg7XG4vLyAgICAgICB9XG5cbi8vICAgICAgICY6bnRoLWNoaWxkKDNuKSB7XG4vLyAgICAgICAgIGdyaWQtY29sdW1uOiA4LzEzO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuXG4vLyAgIC5pbWcge1xuLy8gICAgIGhlaWdodDogNTQwcHg7XG4vLyAgIH1cblxuLy8gYDtcblxuZXhwb3J0IGNvbnN0IEZlYXR1cmVkQ29udGFpbmVyID0gc3R5bGVkLmFzaWRlYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWNvbHVtbi1nYXA6IHZhcigtLXNwYWNlcik7XG4gIGdyaWQtcm93LWdhcDogdmFyKC0tc3BhY2VyLWRvdWJsZSk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgdmFyKC0tZWFzaW5nKSwgdHJhbnNmb3JtIDAuNzVzIHZhcigtLWVhc2luZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIG1pbi1oZWlnaHQ6IDcwdmg7XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmctbGcpO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcbiAgfVxuXG4gIC8qIC5pbWcge1xuICAgIGhlaWdodDogNTQwcHg7XG4gIH0gKi9cblxuICAmLmlzLWludmlldyB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRmVhdHVyZVByb2R1Y3RMaXN0ID0gc3R5bGVkLnVsYFxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWNvbHVtbi1nYXA6IHZhcigtLXNwYWNlcik7XG4gIGdyaWQtcm93LWdhcDogdmFyKC0tc3BhY2VyLWRvdWJsZSk7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgdmFyKC0tZWFzaW5nKSwgdHJhbnNmb3JtIDAuNzVzIHZhcigtLWVhc2luZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmctbGcpO1xuXG4gICYuaXMtaW52aWV3IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gIH1cblxuICAmOmhvdmVyID4gbGkge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgbGluZWFyO1xuICAgIG9wYWNpdHk6IDAuMjU7XG4gIH1cblxuICAmOmhvdmVyID4gbGk6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrKTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiU3R5bGVkQm94IiwiZGl2IiwiRmVhdHVyZWRDb250YWluZXIiLCJhc2lkZSIsIkZlYXR1cmVQcm9kdWN0TGlzdCIsInVsIiwiVGl0bGUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/box.js\n");

/***/ })

});