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

/***/ "(app-client)/./app/components/Store.jsx":
/*!**********************************!*\
  !*** ./app/components/Store.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var web3_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3.storage */ \"(app-client)/./node_modules/web3.storage/src/lib.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Store = (param)=>{\n    let { setCid, setCurrentStep } = param;\n    _s();\n    const [isUploaded, setIsUploaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedFiles, setSelectedFiles] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const client = new web3_storage__WEBPACK_IMPORTED_MODULE_2__.Web3Storage({\n        token: \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRGMjFmRkZiYjJGNDRjNDI1ZkEyRGVlNUI3ZTZDNzJlNDQwNzk0NjciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTE0OTAzNDQwNzQsIm5hbWUiOiJCbG9ja0lQIn0.mQe-QcgTO2jdf_bhCLzBV96D8O1UgcHJXQx-6LA2sPg\"\n    });\n    const handleFileChange = (event)=>{\n        event.preventDefault();\n        setSelectedFiles(event.target.files);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (!selectedFiles) {\n            console.log(\"No file selected\");\n            return;\n        }\n        try {\n            const cid = await client.put(selectedFiles);\n            console.log(cid);\n            setSelectedFiles(null);\n            setCid(cid);\n            setCurrentStep(\"minter\");\n            return cid;\n        } catch (err) {\n            console.error(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                id: \"input\",\n                onChange: handleFileChange\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/Store.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Upload\"\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/Store.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/Store.jsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Store, \"FbDAz28rQxeS2EibrUYTLR9GTHI=\");\n_c = Store;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Store);\nvar _c;\n$RefreshReg$(_c, \"Store\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvU3RvcmUuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDd0M7QUFDRztBQUUzQyxNQUFNRyxRQUFRO1FBQUMsRUFBQ0MsTUFBTSxFQUFFQyxjQUFjLEVBQUM7O0lBRW5DLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNPLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNUyxTQUFTLElBQUlSLHFEQUFXQSxDQUFDO1FBQUVTLE9BQU87SUFBbVA7SUFFM1IsTUFBTUMsbUJBQW1CLENBQUNDO1FBQ3RCQSxNQUFNQyxjQUFjO1FBQ3BCTCxpQkFBaUJJLE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztJQUN2QztJQUVBLE1BQU1DLGVBQWUsT0FBT0M7UUFDeEJBLEVBQUVKLGNBQWM7UUFDaEIsSUFBSSxDQUFDTixlQUFlO1lBQ2hCVyxRQUFRQyxHQUFHLENBQUM7WUFDWjtRQUNKO1FBQ0EsSUFBSTtZQUNBLE1BQU1DLE1BQU0sTUFBTVgsT0FBT1ksR0FBRyxDQUFDZDtZQUM3QlcsUUFBUUMsR0FBRyxDQUFDQztZQUNaWixpQkFBaUI7WUFDakJMLE9BQU9pQjtZQUNQaEIsZUFBZTtZQUNmLE9BQU9nQjtRQUNYLEVBQUUsT0FBT0UsS0FBSztZQUNWSixRQUFRSyxLQUFLLENBQUNEO1FBQ2xCO0lBRUo7SUFFQSxxQkFDSSw4REFBQ0U7UUFBS0MsVUFBVVQ7OzBCQUNaLDhEQUFDVTtnQkFBTUMsTUFBSztnQkFBT0MsSUFBRztnQkFBUUMsVUFBVWxCOzs7Ozs7MEJBQ3hDLDhEQUFDbUI7Z0JBQU9ILE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUlsQztHQXJDTXpCO0tBQUFBO0FBdUNOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1N0b3JlLmpzeD9kYmNiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgUmVhY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2ViM1N0b3JhZ2UgfSBmcm9tICd3ZWIzLnN0b3JhZ2UnO1xuXG5jb25zdCBTdG9yZSA9ICh7c2V0Q2lkLCBzZXRDdXJyZW50U3RlcH0pID0+IHtcbiAgICBcbiAgICBjb25zdCBbaXNVcGxvYWRlZCwgc2V0SXNVcGxvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3NlbGVjdGVkRmlsZXMsIHNldFNlbGVjdGVkRmlsZXNdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgY2xpZW50ID0gbmV3IFdlYjNTdG9yYWdlKHsgdG9rZW46ICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKemRXSWlPaUprYVdRNlpYUm9jam93ZURSR01qRm1Sa1ppWWpKR05EUmpOREkxWmtFeVJHVmxOVUkzWlRaRE56SmxORFF3TnprME5qY2lMQ0pwYzNNaU9pSjNaV0l6TFhOMGIzSmhaMlVpTENKcFlYUWlPakUyT1RFME9UQXpORFF3TnpRc0ltNWhiV1VpT2lKQ2JHOWphMGxRSW4wLm1RZS1RY2dUTzJqZGZfYmhDTHpCVjk2RDhPMVVnY0hKWFF4LTZMQTJzUGcnIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRTZWxlY3RlZEZpbGVzKGV2ZW50LnRhcmdldC5maWxlcyk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIXNlbGVjdGVkRmlsZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBmaWxlIHNlbGVjdGVkJyk7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgY2lkID0gYXdhaXQgY2xpZW50LnB1dChzZWxlY3RlZEZpbGVzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNpZCk7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZEZpbGVzKG51bGwpO1xuICAgICAgICAgICAgc2V0Q2lkKGNpZCk7XG4gICAgICAgICAgICBzZXRDdXJyZW50U3RlcChcIm1pbnRlclwiKVxuICAgICAgICAgICAgcmV0dXJuIGNpZDtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJpbnB1dFwiIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+VXBsb2FkPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJXZWIzU3RvcmFnZSIsIlN0b3JlIiwic2V0Q2lkIiwic2V0Q3VycmVudFN0ZXAiLCJpc1VwbG9hZGVkIiwic2V0SXNVcGxvYWRlZCIsInNlbGVjdGVkRmlsZXMiLCJzZXRTZWxlY3RlZEZpbGVzIiwiY2xpZW50IiwidG9rZW4iLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlU3VibWl0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjaWQiLCJwdXQiLCJlcnIiLCJlcnJvciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Store.jsx\n"));

/***/ })

});