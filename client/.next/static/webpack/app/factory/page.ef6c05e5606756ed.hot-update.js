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

/***/ "(app-client)/./app/components/EASAttest.jsx":
/*!**************************************!*\
  !*** ./app/components/EASAttest.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethereum-attestation-service/eas-sdk */ \"(app-client)/./node_modules/@ethereum-attestation-service/eas-sdk/dist/index.js\");\n/* harmony import */ var _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// import { ethers } from 'ethers';\n\nconst ethers = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/ethers/lib.esm/index.js\");\nfunction EASAttest(cid, fromAddress, toAddress, hash, setAttestationId) {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const EASContractAddress = \"0x4200000000000000000000000000000000000021\"; //optimism-goerli\n    const submitAttestation = async ()=>{\n        const provider = new ethers.providers.Web3Provider(window.ethereum);\n        await provider.send(\"eth_requestAccounts\", []); // ATTEMPT 3 - successfully prompts MM to connect\n        const signer = provider.getSigner();\n        const eas = new _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__.EAS(EASContractAddress, signer);\n        eas.connect(signer);\n        const schema = new _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__.SchemaEncoder(\"string _to, string _from, string _CID, string _nftHash\");\n        const encodedData = schema.encodeData([\n            {\n                name: \"_to\",\n                value: toAddress,\n                type: \"address\"\n            },\n            {\n                name: \"_from\",\n                value: fromAddress,\n                type: \"address\"\n            },\n            {\n                name: \"_CID\",\n                value: cid,\n                type: \"string\"\n            },\n            {\n                name: \"_nftHash\",\n                value: hash,\n                type: \"string\"\n            }\n        ]);\n        const schemaUID = \"0xfedbd92ecc310f217b7a53b2b5f5b2d1bbe8a4a7cac7f54c70dbc3e18fc0d555\";\n        const transaction = await eas.attest({\n            schema: schemaUID,\n            data: {\n                recipient: toAddress,\n                expirationTime: 0,\n                revocable: true,\n                data: encodedData\n            }\n        });\n        setIsLoading(true);\n        const newUID = await transaction.wait();\n        setAttestationId(newUID);\n        setIsLoading(false);\n        writeToLocal(toAddress, fromAddress, cid, hash, newUID);\n        setCurrentStep(\"completed\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-72 p-2 mt-12 text-white bg-blue-500 rounded-md\",\n                onClick: submitAttestation,\n                children: \"Submit Attestation\"\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/EASAttest.jsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-whit mt-4\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/EASAttest.jsx\",\n                lineNumber: 59,\n                columnNumber: 27\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/EASAttest.jsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(EASAttest, \"EmvgwIb3cHpoFpeP+WmEDbjx4y4=\");\n_c = EASAttest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EASAttest);\nvar _c;\n$RefreshReg$(_c, \"EASAttest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvRUFTQXR0ZXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNxRztBQUNyRyxtQ0FBbUM7QUFDRjtBQUNqQyxNQUFNSyxTQUFTQyxtQkFBT0EsQ0FBQztBQUd2QixTQUFTQyxVQUFVQyxHQUFHLEVBQUVDLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLGdCQUFnQjs7SUFFbEUsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBRzNDLE1BQU1XLHFCQUFxQiw4Q0FBOEMsaUJBQWlCO0lBQzFGLE1BQU1DLG9CQUFvQjtRQUVsQixNQUFNQyxXQUFXLElBQUlaLE9BQU9hLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPQyxRQUFRO1FBQ2xFLE1BQU1KLFNBQVNLLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLGlEQUFpRDtRQUNqRyxNQUFNQyxTQUFTTixTQUFTTyxTQUFTO1FBQ2pDLE1BQU1DLE1BQU0sSUFBSXpCLHNFQUFHQSxDQUFDZSxvQkFBb0JRO1FBQ3hDRSxJQUFJQyxPQUFPLENBQUNIO1FBRVosTUFBTUksU0FBUyxJQUFJekIsZ0ZBQWFBLENBQUM7UUFDakMsTUFBTTBCLGNBQWNELE9BQU9FLFVBQVUsQ0FBQztZQUN0QztnQkFBQ0MsTUFBTTtnQkFBT0MsT0FBT3JCO2dCQUFXc0IsTUFBTTtZQUFTO1lBQy9DO2dCQUFDRixNQUFNO2dCQUFTQyxPQUFPdEI7Z0JBQWF1QixNQUFNO1lBQVM7WUFDbkQ7Z0JBQUNGLE1BQU07Z0JBQVFDLE9BQU92QjtnQkFBS3dCLE1BQU07WUFBUTtZQUN6QztnQkFBQ0YsTUFBTTtnQkFBWUMsT0FBT3BCO2dCQUFNcUIsTUFBTTtZQUFRO1NBQzdDO1FBRUQsTUFBTUMsWUFBWTtRQUNsQixNQUFNQyxjQUFjLE1BQU1ULElBQUlVLE1BQU0sQ0FBQztZQUNqQ1IsUUFBUU07WUFDUkcsTUFBTTtnQkFDRkMsV0FBVzNCO2dCQUNYNEIsZ0JBQWdCO2dCQUNoQkMsV0FBVztnQkFDWEgsTUFBTVI7WUFDVjtRQUNKO1FBRUFkLGFBQWE7UUFDYixNQUFNMEIsU0FBUyxNQUFNTixZQUFZTyxJQUFJO1FBQ3JDN0IsaUJBQWlCNEI7UUFDakIxQixhQUFhO1FBQ2I0QixhQUFhaEMsV0FBV0QsYUFBYUQsS0FBS0csTUFBTTZCO1FBQ2hERyxlQUFlO0lBRXZCO0lBQ0EscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUVYLDhEQUFDQztnQkFDREQsV0FBVTtnQkFDVkUsU0FBUy9COzBCQUNSOzs7Ozs7WUFJQUgsMkJBQWEsOERBQUNtQztnQkFBRUgsV0FBVTswQkFBaUI7Ozs7Ozs7Ozs7OztBQU14RDtHQXpEU3RDO0tBQUFBO0FBMkRULCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0VBU0F0dGVzdC5qc3g/MzkzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IHsgRUFTLCBPZmZjaGFpbiwgU2NoZW1hRW5jb2RlciwgU2NoZW1hUmVnaXN0cnkgfSBmcm9tIFwiQGV0aGVyZXVtLWF0dGVzdGF0aW9uLXNlcnZpY2UvZWFzLXNka1wiO1xuLy8gaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgZXRoZXJzID0gcmVxdWlyZSgnZXRoZXJzJyk7XG5cblxuZnVuY3Rpb24gRUFTQXR0ZXN0KGNpZCwgZnJvbUFkZHJlc3MsIHRvQWRkcmVzcywgaGFzaCwgc2V0QXR0ZXN0YXRpb25JZCkge1xuXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gICAgY29uc3QgRUFTQ29udHJhY3RBZGRyZXNzID0gJzB4NDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMSc7IC8vb3B0aW1pc20tZ29lcmxpXG4gICAgY29uc3Qgc3VibWl0QXR0ZXN0YXRpb24gPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSk7XG4gICAgICAgICAgICBhd2FpdCBwcm92aWRlci5zZW5kKCdldGhfcmVxdWVzdEFjY291bnRzJywgW10pOyAvLyBBVFRFTVBUIDMgLSBzdWNjZXNzZnVsbHkgcHJvbXB0cyBNTSB0byBjb25uZWN0XG4gICAgICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGVhcyA9IG5ldyBFQVMoRUFTQ29udHJhY3RBZGRyZXNzLCBzaWduZXIpO1xuICAgICAgICAgICAgZWFzLmNvbm5lY3Qoc2lnbmVyKTtcblxuICAgICAgICAgICAgY29uc3Qgc2NoZW1hID0gbmV3IFNjaGVtYUVuY29kZXIoXCJzdHJpbmcgX3RvLCBzdHJpbmcgX2Zyb20sIHN0cmluZyBfQ0lELCBzdHJpbmcgX25mdEhhc2hcIik7XG4gICAgICAgICAgICBjb25zdCBlbmNvZGVkRGF0YSA9IHNjaGVtYS5lbmNvZGVEYXRhKFtcbiAgICAgICAgICAgIHtuYW1lOiAnX3RvJywgdmFsdWU6IHRvQWRkcmVzcywgdHlwZTogXCJhZGRyZXNzXCJ9LFxuICAgICAgICAgICAge25hbWU6ICdfZnJvbScsIHZhbHVlOiBmcm9tQWRkcmVzcywgdHlwZTogXCJhZGRyZXNzXCJ9LFxuICAgICAgICAgICAge25hbWU6ICdfQ0lEJywgdmFsdWU6IGNpZCwgdHlwZTogXCJzdHJpbmdcIn0sXG4gICAgICAgICAgICB7bmFtZTogJ19uZnRIYXNoJywgdmFsdWU6IGhhc2gsIHR5cGU6IFwic3RyaW5nXCJ9LFxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNjaGVtYVVJRCA9ICcweGZlZGJkOTJlY2MzMTBmMjE3YjdhNTNiMmI1ZjViMmQxYmJlOGE0YTdjYWM3ZjU0YzcwZGJjM2UxOGZjMGQ1NTUnO1xuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBlYXMuYXR0ZXN0KHtcbiAgICAgICAgICAgICAgICBzY2hlbWE6IHNjaGVtYVVJRCxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlY2lwaWVudDogdG9BZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uVGltZTogMCxcbiAgICAgICAgICAgICAgICAgICAgcmV2b2NhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBlbmNvZGVkRGF0YVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1VJRCA9IGF3YWl0IHRyYW5zYWN0aW9uLndhaXQoKTtcbiAgICAgICAgICAgIHNldEF0dGVzdGF0aW9uSWQobmV3VUlEKTtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB3cml0ZVRvTG9jYWwodG9BZGRyZXNzLCBmcm9tQWRkcmVzcywgY2lkLCBoYXNoLCBuZXdVSUQpO1xuICAgICAgICAgICAgc2V0Q3VycmVudFN0ZXAoJ2NvbXBsZXRlZCcpO1xuXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy03MiBwLTIgbXQtMTIgdGV4dC13aGl0ZSBiZy1ibHVlLTUwMCByb3VuZGVkLW1kJ1xuICAgICAgICAgICAgb25DbGljaz17c3VibWl0QXR0ZXN0YXRpb259XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3VibWl0IEF0dGVzdGF0aW9uXG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAge2lzTG9hZGluZyAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXQgbXQtNFwiPkxvYWRpbmcuLi48L3A+fVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFQVNBdHRlc3Q7XG4iXSwibmFtZXMiOlsiRUFTIiwiT2ZmY2hhaW4iLCJTY2hlbWFFbmNvZGVyIiwiU2NoZW1hUmVnaXN0cnkiLCJ1c2VTdGF0ZSIsImV0aGVycyIsInJlcXVpcmUiLCJFQVNBdHRlc3QiLCJjaWQiLCJmcm9tQWRkcmVzcyIsInRvQWRkcmVzcyIsImhhc2giLCJzZXRBdHRlc3RhdGlvbklkIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiRUFTQ29udHJhY3RBZGRyZXNzIiwic3VibWl0QXR0ZXN0YXRpb24iLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwic2VuZCIsInNpZ25lciIsImdldFNpZ25lciIsImVhcyIsImNvbm5lY3QiLCJzY2hlbWEiLCJlbmNvZGVkRGF0YSIsImVuY29kZURhdGEiLCJuYW1lIiwidmFsdWUiLCJ0eXBlIiwic2NoZW1hVUlEIiwidHJhbnNhY3Rpb24iLCJhdHRlc3QiLCJkYXRhIiwicmVjaXBpZW50IiwiZXhwaXJhdGlvblRpbWUiLCJyZXZvY2FibGUiLCJuZXdVSUQiLCJ3YWl0Iiwid3JpdGVUb0xvY2FsIiwic2V0Q3VycmVudFN0ZXAiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/EASAttest.jsx\n"));

/***/ })

});