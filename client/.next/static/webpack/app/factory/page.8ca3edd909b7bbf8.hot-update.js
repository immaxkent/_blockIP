"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/factory/page",{

/***/ "(app-client)/./app/factory/page.js":
/*!*****************************!*\
  !*** ./app/factory/page.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Factory; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Upload */ \"(app-client)/./app/components/Upload.jsx\");\n/* harmony import */ var _components_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Store */ \"(app-client)/./app/components/Store.jsx\");\n/* harmony import */ var _components_Minter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Minter */ \"(app-client)/./app/components/Minter.jsx\");\n/* harmony import */ var _components_EASAttest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/EASAttest */ \"(app-client)/./app/components/EASAttest.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Factory() {\n    _s();\n    //here, we can execute the committment of IP data. The process goes:\n    //1. upload data to web3.storage / IPFS and return a CID\n    //2. mint an NFT link the URI to the CID\n    //3. create an attestation of the issuance\n    //4. store these datas locally as a json\n    const [cid, setCid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [toAddress, setToAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [fromAddress, setFromAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [hash, setHash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [attestationId, setAttestationId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [currentStep, setCurrentStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"store\");\n    const handleChange = (e)=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex flex-col items-center p-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center p12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"flex items-center justify-center gap-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"mt-2 font-bold\",\n                        children: \"IP Admission Factory\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/factory/page.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/factory/page.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/factory/page.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            currentStep === \"store\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Store__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                setCid: setCid,\n                setCurrentStep: setCurrentStep\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/factory/page.js\",\n                lineNumber: 37,\n                columnNumber: 11\n            }, this) : \"\" // store the PDF and return the CID, storing it in the state via setCid\n            ,\n            currentStep === \"minter\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Minter__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                setHash: setHash,\n                cid: cid,\n                toAddress: toAddress,\n                setToAddress: setToAddress,\n                setCurrentStep: setCurrentStep\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/factory/page.js\",\n                lineNumber: 42,\n                columnNumber: 35\n            }, this) : \"\",\n            currentStep === \"attest\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EASAttest__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/factory/page.js\",\n                lineNumber: 43,\n                columnNumber: 35\n            }, this) : \"\",\n            currentStep === \"completed\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"IP Issued!! Head over to Explore to check out your uploaded IP\"\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/factory/page.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/factory/page.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Factory, \"6yZIfs35QGWe91Ivpqk3lLSSCHM=\");\n_c = Factory;\nvar _c;\n$RefreshReg$(_c, \"Factory\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2ZhY3RvcnkvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRTBCO0FBQ2dCO0FBQ0Y7QUFDRTtBQUNNO0FBQ0o7QUFFN0IsU0FBU087O0lBQ3RCLG9FQUFvRTtJQUNwRSx3REFBd0Q7SUFDeEQsd0NBQXdDO0lBQ3hDLDBDQUEwQztJQUMxQyx3Q0FBd0M7SUFFeEMsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdILCtDQUFRQSxDQUFDO0lBQy9CLE1BQU0sQ0FBQ0ksV0FBV0MsYUFBYSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNLENBQUNNLGFBQWFDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1UsZUFBZUMsaUJBQWlCLEdBQUdYLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU0sQ0FBQ1ksYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNYyxlQUFlLENBQUNDLEtBQU87SUFFN0IscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0U7b0JBQUdGLFdBQVU7OEJBQ1osNEVBQUNHO3dCQUFLSCxXQUFVO2tDQUFpQjs7Ozs7Ozs7Ozs7Ozs7OztZQUluQ0wsZ0JBQWdCLHdCQUNkLDhEQUFDaEIseURBQUtBO2dCQUFDTyxRQUFRQTtnQkFBUVUsZ0JBQWdCQTs7Ozs7dUJBRXZDLEdBQ0EsdUVBQXVFOztZQUUxRUQsZ0JBQWdCLHlCQUFXLDhEQUFDZiwwREFBTUE7Z0JBQUNZLFNBQVNBO2dCQUFTUCxLQUFLQTtnQkFBS0UsV0FBV0E7Z0JBQVdDLGNBQWNBO2dCQUFjUSxnQkFBZ0JBOzs7Ozt1QkFBb0I7WUFDckpELGdCQUFnQix5QkFBVyw4REFBQ2QsNkRBQVNBOzs7O3VCQUFNO1lBQzNDYyxnQkFBZ0IsNEJBQ2YsOERBQUNNOzBCQUFJOzs7Ozt1QkFHSDs7Ozs7OztBQUdWO0dBekN3QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9mYWN0b3J5L3BhZ2UuanM/YjkwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVwbG9hZCBmcm9tIFwiLi4vY29tcG9uZW50cy9VcGxvYWRcIjtcbmltcG9ydCBTdG9yZSBmcm9tIFwiLi4vY29tcG9uZW50cy9TdG9yZVwiO1xuaW1wb3J0IE1pbnRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9NaW50ZXJcIjtcbmltcG9ydCBFQVNBdHRlc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvRUFTQXR0ZXN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZhY3RvcnkoKSB7XG4gIC8vaGVyZSwgd2UgY2FuIGV4ZWN1dGUgdGhlIGNvbW1pdHRtZW50IG9mIElQIGRhdGEuIFRoZSBwcm9jZXNzIGdvZXM6XG4gIC8vMS4gdXBsb2FkIGRhdGEgdG8gd2ViMy5zdG9yYWdlIC8gSVBGUyBhbmQgcmV0dXJuIGEgQ0lEXG4gIC8vMi4gbWludCBhbiBORlQgbGluayB0aGUgVVJJIHRvIHRoZSBDSURcbiAgLy8zLiBjcmVhdGUgYW4gYXR0ZXN0YXRpb24gb2YgdGhlIGlzc3VhbmNlXG4gIC8vNC4gc3RvcmUgdGhlc2UgZGF0YXMgbG9jYWxseSBhcyBhIGpzb25cblxuICBjb25zdCBbY2lkLCBzZXRDaWRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0b0FkZHJlc3MsIHNldFRvQWRkcmVzc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBbZnJvbUFkZHJlc3MsIHNldEZyb21BZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2hhc2gsIHNldEhhc2hdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthdHRlc3RhdGlvbklkLCBzZXRBdHRlc3RhdGlvbklkXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IFtjdXJyZW50U3RlcCwgc2V0Q3VycmVudFN0ZXBdID0gdXNlU3RhdGUoXCJzdG9yZVwiKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge307XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTEyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHAxMlwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC0yIGZvbnQtYm9sZFwiPklQIEFkbWlzc2lvbiBGYWN0b3J5PC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICB7XG4gICAgICAgIGN1cnJlbnRTdGVwID09PSBcInN0b3JlXCIgPyAoXG4gICAgICAgICAgPFN0b3JlIHNldENpZD17c2V0Q2lkfSBzZXRDdXJyZW50U3RlcD17c2V0Q3VycmVudFN0ZXB9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgXCJcIlxuICAgICAgICApIC8vIHN0b3JlIHRoZSBQREYgYW5kIHJldHVybiB0aGUgQ0lELCBzdG9yaW5nIGl0IGluIHRoZSBzdGF0ZSB2aWEgc2V0Q2lkXG4gICAgICB9XG4gICAgICB7Y3VycmVudFN0ZXAgPT09IFwibWludGVyXCIgPyA8TWludGVyIHNldEhhc2g9e3NldEhhc2h9IGNpZD17Y2lkfSB0b0FkZHJlc3M9e3RvQWRkcmVzc30gc2V0VG9BZGRyZXNzPXtzZXRUb0FkZHJlc3N9IHNldEN1cnJlbnRTdGVwPXtzZXRDdXJyZW50U3RlcH0vPiA6IFwiXCJ9XG4gICAgICB7Y3VycmVudFN0ZXAgPT09IFwiYXR0ZXN0XCIgPyA8RUFTQXR0ZXN0IC8+IDogXCJcIn1cbiAgICAgIHtjdXJyZW50U3RlcCA9PT0gXCJjb21wbGV0ZWRcIiA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBJUCBJc3N1ZWQhISBIZWFkIG92ZXIgdG8gRXhwbG9yZSB0byBjaGVjayBvdXQgeW91ciB1cGxvYWRlZCBJUFxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBcIlwifVxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlVwbG9hZCIsIlN0b3JlIiwiTWludGVyIiwiRUFTQXR0ZXN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGYWN0b3J5IiwiY2lkIiwic2V0Q2lkIiwidG9BZGRyZXNzIiwic2V0VG9BZGRyZXNzIiwiZnJvbUFkZHJlc3MiLCJzZXRGcm9tQWRkcmVzcyIsImhhc2giLCJzZXRIYXNoIiwiYXR0ZXN0YXRpb25JZCIsInNldEF0dGVzdGF0aW9uSWQiLCJjdXJyZW50U3RlcCIsInNldEN1cnJlbnRTdGVwIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/factory/page.js\n"));

/***/ })

});