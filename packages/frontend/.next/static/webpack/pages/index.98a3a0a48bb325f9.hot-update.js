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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"../../node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Web3Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Web3Header */ \"./components/Web3Header.js\");\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moralis */ \"../../node_modules/react-moralis/lib/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar supportedChains = [\n    \"80001\"\n];\nfunction Home() {\n    _s();\n    var ref = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis)(), isWeb3Enabled = ref.isWeb3Enabled, chainId = ref.chainId;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Web3Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/host/Projects/ens/packages/frontend/pages/index.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            isWeb3Enabled ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: supportedChains.includes(parseInt(chainId).toString()) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row\"\n                }, void 0, false, {\n                    fileName: \"/home/host/Projects/ens/packages/frontend/pages/index.js\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"You are on chain: \".concat(chainId, \". Please switch to the Polygon Mumbai Testnet at ChainID 80001\")\n                }, void 0, false, {\n                    fileName: \"/home/host/Projects/ens/packages/frontend/pages/index.js\",\n                    lineNumber: 22,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/host/Projects/ens/packages/frontend/pages/index.js\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Please connect to a Wallet\"\n            }, void 0, false, {\n                fileName: \"/home/host/Projects/ens/packages/frontend/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/host/Projects/ens/packages/frontend/pages/index.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"uGrKZmZJN1CLo7MWqkNHglhiauE=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDa0I7QUFDRztBQUNQO0FBRTNDLElBQU1JLGVBQWUsR0FBRztJQUFDLE9BQU87Q0FBQztBQUVsQixTQUFTQyxJQUFJLEdBQUc7O0lBQzdCLElBQW1DRixHQUFZLEdBQVpBLHlEQUFVLEVBQUUsRUFBdkNHLGFBQWEsR0FBY0gsR0FBWSxDQUF2Q0csYUFBYSxFQUFFQyxPQUFPLEdBQUtKLEdBQVksQ0FBeEJJLE9BQU87SUFFOUIscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFUiwwRUFBZ0I7OzBCQUU5Qiw4REFBQ0MsOERBQVU7Ozs7b0JBQUc7WUFDYkksYUFBYSxpQkFDWiw4REFBQ0UsS0FBRzswQkFDREosZUFBZSxDQUFDTyxRQUFRLENBQUNDLFFBQVEsQ0FBQ0wsT0FBTyxDQUFDLENBQUNNLFFBQVEsRUFBRSxDQUFDLGlCQUNyRCw4REFBQ0wsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGVBQWU7Ozs7O3dCQUV4QixpQkFFTiw4REFBQ0QsS0FBRzs4QkFBRSxvQkFBbUIsQ0FBVSxNQUE4RCxDQUF0RUQsT0FBTyxFQUFDLGdFQUE4RCxDQUFDOzs7Ozt3QkFBTzs7Ozs7b0JBRXZHLGlCQUVOLDhEQUFDQyxLQUFHOzBCQUFDLDRCQUEwQjs7Ozs7b0JBQU07Ozs7OztZQUVuQyxDQUNOO0NBQ0g7R0F0QnVCSCxJQUFJOztRQUNTRixxREFBVTs7O0FBRHZCRSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFdlYjNIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvV2ViM0hlYWRlclwiO1xuaW1wb3J0IHsgdXNlTW9yYWxpcyB9IGZyb20gXCJyZWFjdC1tb3JhbGlzXCI7XG5cbmNvbnN0IHN1cHBvcnRlZENoYWlucyA9IFtcIjgwMDAxXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGlzV2ViM0VuYWJsZWQsIGNoYWluSWQgfSA9IHVzZU1vcmFsaXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cblxuICAgICAgPFdlYjNIZWFkZXIgLz5cbiAgICAgIHtpc1dlYjNFbmFibGVkID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHtzdXBwb3J0ZWRDaGFpbnMuaW5jbHVkZXMocGFyc2VJbnQoY2hhaW5JZCkudG9TdHJpbmcoKSkgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgey8qIDxMb3R0ZXJ5RW50cmFuY2UgY2xhc3NOYW1lPVwicC04XCIgLz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdj57YFlvdSBhcmUgb24gY2hhaW46ICR7Y2hhaW5JZH0uIFBsZWFzZSBzd2l0Y2ggdG8gdGhlIFBvbHlnb24gTXVtYmFpIFRlc3RuZXQgYXQgQ2hhaW5JRCA4MDAwMWB9PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PlBsZWFzZSBjb25uZWN0IHRvIGEgV2FsbGV0PC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiV2ViM0hlYWRlciIsInVzZU1vcmFsaXMiLCJzdXBwb3J0ZWRDaGFpbnMiLCJIb21lIiwiaXNXZWIzRW5hYmxlZCIsImNoYWluSWQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbmNsdWRlcyIsInBhcnNlSW50IiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});