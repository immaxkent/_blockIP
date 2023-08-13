/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/factory/page",{

/***/ "?84fc":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* (ignored) */

/***/ }),

/***/ "(app-client)/./app/components/EASAttest.jsx":
/*!**************************************!*\
  !*** ./app/components/EASAttest.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethereum-attestation-service/eas-sdk */ \"(app-client)/./node_modules/@ethereum-attestation-service/eas-sdk/dist/index.js\");\n/* harmony import */ var _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _writeToLocal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./writeToLocal.js */ \"(app-client)/./app/components/writeToLocal.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// import { ethers } from 'ethers';\n\nconst ethers = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/ethers/lib.esm/index.js\");\n\nfunction EASAttest(cid, fromAddress, toAddress, hash, setAttestationId) {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const EASContractAddress = \"0x4200000000000000000000000000000000000021\"; //optimism-goerli\n    const submitAttestation = async ()=>{\n        const provider = new ethers.providers.Web3Provider(window.ethereum);\n        await provider.send(\"eth_requestAccounts\", []); // ATTEMPT 3 - successfully prompts MM to connect\n        const signer = provider.getSigner();\n        const eas = new _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__.EAS(EASContractAddress, signer);\n        eas.connect(signer);\n        const schema = new _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__.SchemaEncoder(\"string _to, string _from, string _CID, string _nftHash\");\n        const encodedData = schema.encodeData([\n            {\n                name: \"_to\",\n                value: toAddress,\n                type: \"address\"\n            },\n            {\n                name: \"_from\",\n                value: fromAddress,\n                type: \"address\"\n            },\n            {\n                name: \"_CID\",\n                value: cid,\n                type: \"string\"\n            },\n            {\n                name: \"_nftHash\",\n                value: hash,\n                type: \"string\"\n            }\n        ]);\n        const schemaUID = \"0xfedbd92ecc310f217b7a53b2b5f5b2d1bbe8a4a7cac7f54c70dbc3e18fc0d555\";\n        const transaction = await eas.attest({\n            schema: schemaUID,\n            data: {\n                recipient: toAddress,\n                expirationTime: 0,\n                revocable: true,\n                data: encodedData\n            }\n        });\n        setIsLoading(true);\n        const newUID = await transaction.wait();\n        setAttestationId(newUID);\n        setIsLoading(false);\n        (0,_writeToLocal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(toAddress, fromAddress, cid, hash, newUID);\n        setCurrentStep(\"completed\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-72 p-2 mt-12 text-white bg-blue-500 rounded-md\",\n                onClick: submitAttestation,\n                children: \"Submit Attestation\"\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/EASAttest.jsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-whit mt-4\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/EASAttest.jsx\",\n                lineNumber: 59,\n                columnNumber: 27\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/EASAttest.jsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(EASAttest, \"EmvgwIb3cHpoFpeP+WmEDbjx4y4=\");\n_c = EASAttest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EASAttest);\nvar _c;\n$RefreshReg$(_c, \"EASAttest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvRUFTQXR0ZXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDcUc7QUFDckcsbUNBQW1DO0FBQ0Y7QUFDakMsTUFBTUssU0FBU0MsbUJBQU9BLENBQUM7QUFDc0I7QUFFN0MsU0FBU0UsVUFBVUMsR0FBRyxFQUFFQyxXQUFXLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxnQkFBZ0I7O0lBRWxFLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUczQyxNQUFNWSxxQkFBcUIsOENBQThDLGlCQUFpQjtJQUMxRixNQUFNQyxvQkFBb0I7UUFFbEIsTUFBTUMsV0FBVyxJQUFJYixPQUFPYyxTQUFTLENBQUNDLFlBQVksQ0FBQ0MsT0FBT0MsUUFBUTtRQUNsRSxNQUFNSixTQUFTSyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxpREFBaUQ7UUFDakcsTUFBTUMsU0FBU04sU0FBU08sU0FBUztRQUNqQyxNQUFNQyxNQUFNLElBQUkxQixzRUFBR0EsQ0FBQ2dCLG9CQUFvQlE7UUFDeENFLElBQUlDLE9BQU8sQ0FBQ0g7UUFFWixNQUFNSSxTQUFTLElBQUkxQixnRkFBYUEsQ0FBQztRQUNqQyxNQUFNMkIsY0FBY0QsT0FBT0UsVUFBVSxDQUFDO1lBQ3RDO2dCQUFDQyxNQUFNO2dCQUFPQyxPQUFPckI7Z0JBQVdzQixNQUFNO1lBQVM7WUFDL0M7Z0JBQUNGLE1BQU07Z0JBQVNDLE9BQU90QjtnQkFBYXVCLE1BQU07WUFBUztZQUNuRDtnQkFBQ0YsTUFBTTtnQkFBUUMsT0FBT3ZCO2dCQUFLd0IsTUFBTTtZQUFRO1lBQ3pDO2dCQUFDRixNQUFNO2dCQUFZQyxPQUFPcEI7Z0JBQU1xQixNQUFNO1lBQVE7U0FDN0M7UUFFRCxNQUFNQyxZQUFZO1FBQ2xCLE1BQU1DLGNBQWMsTUFBTVQsSUFBSVUsTUFBTSxDQUFDO1lBQ2pDUixRQUFRTTtZQUNSRyxNQUFNO2dCQUNGQyxXQUFXM0I7Z0JBQ1g0QixnQkFBZ0I7Z0JBQ2hCQyxXQUFXO2dCQUNYSCxNQUFNUjtZQUNWO1FBQ0o7UUFFQWQsYUFBYTtRQUNiLE1BQU0wQixTQUFTLE1BQU1OLFlBQVlPLElBQUk7UUFDckM3QixpQkFBaUI0QjtRQUNqQjFCLGFBQWE7UUFDYlIsNERBQVlBLENBQUNJLFdBQVdELGFBQWFELEtBQUtHLE1BQU02QjtRQUNoREUsZUFBZTtJQUV2QjtJQUNBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFFWCw4REFBQ0M7Z0JBQ0RELFdBQVU7Z0JBQ1ZFLFNBQVM5QjswQkFDUjs7Ozs7O1lBSUFILDJCQUFhLDhEQUFDa0M7Z0JBQUVILFdBQVU7MEJBQWlCOzs7Ozs7Ozs7Ozs7QUFNeEQ7R0F6RFNyQztLQUFBQTtBQTJEVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9FQVNBdHRlc3QuanN4PzM5MzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IEVBUywgT2ZmY2hhaW4sIFNjaGVtYUVuY29kZXIsIFNjaGVtYVJlZ2lzdHJ5IH0gZnJvbSBcIkBldGhlcmV1bS1hdHRlc3RhdGlvbi1zZXJ2aWNlL2Vhcy1zZGtcIjtcbi8vIGltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IGV0aGVycyA9IHJlcXVpcmUoJ2V0aGVycycpO1xuaW1wb3J0IHdyaXRlVG9Mb2NhbCBmcm9tICcuL3dyaXRlVG9Mb2NhbC5qcyc7XG5cbmZ1bmN0aW9uIEVBU0F0dGVzdChjaWQsIGZyb21BZGRyZXNzLCB0b0FkZHJlc3MsIGhhc2gsIHNldEF0dGVzdGF0aW9uSWQpIHtcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICAgIGNvbnN0IEVBU0NvbnRyYWN0QWRkcmVzcyA9ICcweDQyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjEnOyAvL29wdGltaXNtLWdvZXJsaVxuICAgIGNvbnN0IHN1Ym1pdEF0dGVzdGF0aW9uID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pO1xuICAgICAgICAgICAgYXdhaXQgcHJvdmlkZXIuc2VuZCgnZXRoX3JlcXVlc3RBY2NvdW50cycsIFtdKTsgLy8gQVRURU1QVCAzIC0gc3VjY2Vzc2Z1bGx5IHByb21wdHMgTU0gdG8gY29ubmVjdFxuICAgICAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG4gICAgICAgICAgICBjb25zdCBlYXMgPSBuZXcgRUFTKEVBU0NvbnRyYWN0QWRkcmVzcywgc2lnbmVyKTtcbiAgICAgICAgICAgIGVhcy5jb25uZWN0KHNpZ25lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IG5ldyBTY2hlbWFFbmNvZGVyKFwic3RyaW5nIF90bywgc3RyaW5nIF9mcm9tLCBzdHJpbmcgX0NJRCwgc3RyaW5nIF9uZnRIYXNoXCIpO1xuICAgICAgICAgICAgY29uc3QgZW5jb2RlZERhdGEgPSBzY2hlbWEuZW5jb2RlRGF0YShbXG4gICAgICAgICAgICB7bmFtZTogJ190bycsIHZhbHVlOiB0b0FkZHJlc3MsIHR5cGU6IFwiYWRkcmVzc1wifSxcbiAgICAgICAgICAgIHtuYW1lOiAnX2Zyb20nLCB2YWx1ZTogZnJvbUFkZHJlc3MsIHR5cGU6IFwiYWRkcmVzc1wifSxcbiAgICAgICAgICAgIHtuYW1lOiAnX0NJRCcsIHZhbHVlOiBjaWQsIHR5cGU6IFwic3RyaW5nXCJ9LFxuICAgICAgICAgICAge25hbWU6ICdfbmZ0SGFzaCcsIHZhbHVlOiBoYXNoLCB0eXBlOiBcInN0cmluZ1wifSxcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICBjb25zdCBzY2hlbWFVSUQgPSAnMHhmZWRiZDkyZWNjMzEwZjIxN2I3YTUzYjJiNWY1YjJkMWJiZThhNGE3Y2FjN2Y1NGM3MGRiYzNlMThmYzBkNTU1JztcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgZWFzLmF0dGVzdCh7XG4gICAgICAgICAgICAgICAgc2NoZW1hOiBzY2hlbWFVSUQsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICByZWNpcGllbnQ6IHRvQWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJhdGlvblRpbWU6IDAsXG4gICAgICAgICAgICAgICAgICAgIHJldm9jYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZW5jb2RlZERhdGFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCBuZXdVSUQgPSBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KCk7XG4gICAgICAgICAgICBzZXRBdHRlc3RhdGlvbklkKG5ld1VJRCk7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgd3JpdGVUb0xvY2FsKHRvQWRkcmVzcywgZnJvbUFkZHJlc3MsIGNpZCwgaGFzaCwgbmV3VUlEKTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRTdGVwKCdjb21wbGV0ZWQnKTtcblxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctNzIgcC0yIG10LTEyIHRleHQtd2hpdGUgYmctYmx1ZS01MDAgcm91bmRlZC1tZCdcbiAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEF0dGVzdGF0aW9ufVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN1Ym1pdCBBdHRlc3RhdGlvblxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0IG10LTRcIj5Mb2FkaW5nLi4uPC9wPn1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRUFTQXR0ZXN0O1xuIl0sIm5hbWVzIjpbIkVBUyIsIk9mZmNoYWluIiwiU2NoZW1hRW5jb2RlciIsIlNjaGVtYVJlZ2lzdHJ5IiwidXNlU3RhdGUiLCJldGhlcnMiLCJyZXF1aXJlIiwid3JpdGVUb0xvY2FsIiwiRUFTQXR0ZXN0IiwiY2lkIiwiZnJvbUFkZHJlc3MiLCJ0b0FkZHJlc3MiLCJoYXNoIiwic2V0QXR0ZXN0YXRpb25JZCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIkVBU0NvbnRyYWN0QWRkcmVzcyIsInN1Ym1pdEF0dGVzdGF0aW9uIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInNlbmQiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJlYXMiLCJjb25uZWN0Iiwic2NoZW1hIiwiZW5jb2RlZERhdGEiLCJlbmNvZGVEYXRhIiwibmFtZSIsInZhbHVlIiwidHlwZSIsInNjaGVtYVVJRCIsInRyYW5zYWN0aW9uIiwiYXR0ZXN0IiwiZGF0YSIsInJlY2lwaWVudCIsImV4cGlyYXRpb25UaW1lIiwicmV2b2NhYmxlIiwibmV3VUlEIiwid2FpdCIsInNldEN1cnJlbnRTdGVwIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/EASAttest.jsx\n"));

/***/ }),

/***/ "(app-client)/./app/components/writeToLocal.js":
/*!****************************************!*\
  !*** ./app/components/writeToLocal.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"?84fc\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst localPath = \"../issuance/issued.json\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (writeToLocal = (toAddress, fromAddress, cid, hash, newUID)=>{\n    const newEntry = {\n        \"toAddress\": toAddress,\n        \"fromAddress\": fromAddress,\n        \"cid\": cid,\n        \"hash\": hash,\n        \"newUID\": newUID\n    };\n    const issued = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(localPath, \"utf8\"));\n    issued.push(newEntry);\n    fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(localPath, JSON.stringify(issued));\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvd3JpdGVUb0xvY2FsLmpzIiwibWFwcGluZ3MiOiI7Ozs2REFFb0I7QUFDcEIsTUFBTUMsWUFBWTtBQUdsQiwrREFBZUMsZUFBZSxDQUFDQyxXQUFXQyxhQUFhQyxLQUFLQyxNQUFNQztJQUM5RCxNQUFNQyxXQUFXO1FBQ2IsYUFBYUw7UUFDYixlQUFlQztRQUNmLE9BQU9DO1FBQ1AsUUFBUUM7UUFDUixVQUFVQztJQUNkO0lBRUEsTUFBTUUsU0FBU0MsS0FBS0MsS0FBSyxDQUFDWCxzREFBZSxDQUFDQyxXQUFXO0lBQ3JEUSxPQUFPSSxJQUFJLENBQUNMO0lBQ1pSLHVEQUFnQixDQUFDQyxXQUFXUyxLQUFLSyxTQUFTLENBQUNOO0FBQy9DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvd3JpdGVUb0xvY2FsLmpzPzNiMGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnIFxuXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuY29uc3QgbG9jYWxQYXRoID0gJy4uL2lzc3VhbmNlL2lzc3VlZC5qc29uJztcblxuXG5leHBvcnQgZGVmYXVsdCB3cml0ZVRvTG9jYWwgPSAodG9BZGRyZXNzLCBmcm9tQWRkcmVzcywgY2lkLCBoYXNoLCBuZXdVSUQpID0+IHtcbiAgICBjb25zdCBuZXdFbnRyeSA9IHtcbiAgICAgICAgXCJ0b0FkZHJlc3NcIjogdG9BZGRyZXNzLFxuICAgICAgICBcImZyb21BZGRyZXNzXCI6IGZyb21BZGRyZXNzLFxuICAgICAgICBcImNpZFwiOiBjaWQsXG4gICAgICAgIFwiaGFzaFwiOiBoYXNoLFxuICAgICAgICBcIm5ld1VJRFwiOiBuZXdVSURcbiAgICB9XG5cbiAgICBjb25zdCBpc3N1ZWQgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhsb2NhbFBhdGgsICd1dGY4JykpO1xuICAgIGlzc3VlZC5wdXNoKG5ld0VudHJ5KTtcbiAgICBmcy53cml0ZUZpbGVTeW5jKGxvY2FsUGF0aCwgSlNPTi5zdHJpbmdpZnkoaXNzdWVkKSk7XG59Il0sIm5hbWVzIjpbImZzIiwibG9jYWxQYXRoIiwid3JpdGVUb0xvY2FsIiwidG9BZGRyZXNzIiwiZnJvbUFkZHJlc3MiLCJjaWQiLCJoYXNoIiwibmV3VUlEIiwibmV3RW50cnkiLCJpc3N1ZWQiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJwdXNoIiwid3JpdGVGaWxlU3luYyIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/components/writeToLocal.js\n"));

/***/ })

});