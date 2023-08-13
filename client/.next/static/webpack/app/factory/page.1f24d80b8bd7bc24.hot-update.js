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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethereum-attestation-service/eas-sdk */ \"(app-client)/./node_modules/@ethereum-attestation-service/eas-sdk/dist/index.js\");\n/* harmony import */ var _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _writeToLocal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./writeToLocal.js */ \"(app-client)/./app/components/writeToLocal.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// import { ethers } from 'ethers';\n\nconst ethers = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/ethers/lib.esm/index.js\");\n\nfunction EASAttest(cid, fromAddress, toAddress, hash, setAttestationId) {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const EASContractAddress = \"0x4200000000000000000000000000000000000021\"; //optimism-goerli\n    const submitAttestation = async ()=>{\n        const thisAddres = toAddress;\n        console.log(\"the address is \" + thisAddres);\n        console.log(cid, fromAddress, toAddress, hash);\n        const provider = new ethers.providers.Web3Provider(window.ethereum);\n        await provider.send(\"eth_requestAccounts\", []); // ATTEMPT 3 - successfully prompts MM to connect\n        const signer = provider.getSigner();\n        const eas = new _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__.EAS(EASContractAddress, signer);\n        eas.connect(signer);\n        const schema = new _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__.SchemaEncoder(\"address _to, address _from, string _CID, string _nftHash\");\n        const encodedData = schema.encodeData([\n            {\n                name: \"_to\",\n                value: toAddress.toAddress,\n                type: \"address\"\n            },\n            {\n                name: \"_from\",\n                value: fromAddress,\n                type: \"address\"\n            },\n            {\n                name: \"_CID\",\n                value: cid,\n                type: \"string\"\n            },\n            {\n                name: \"_nftHash\",\n                value: hash,\n                type: \"string\"\n            }\n        ]);\n        const schemaUID = \"0xfedbd92ecc310f217b7a53b2b5f5b2d1bbe8a4a7cac7f54c70dbc3e18fc0d555\";\n        const transaction = await eas.attest({\n            schema: schemaUID,\n            data: {\n                recipient: toAddress,\n                expirationTime: 0,\n                revocable: true,\n                data: encodedData\n            }\n        });\n        setIsLoading(true);\n        const newUID = await transaction.wait();\n        setAttestationId(newUID);\n        setIsLoading(false);\n        (0,_writeToLocal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(toAddress, fromAddress, cid, hash, newUID);\n        setCurrentStep(\"completed\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-72 p-2 mt-12 text-white bg-blue-500 rounded-md\",\n                onClick: submitAttestation,\n                children: \"Submit Attestation\"\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/EASAttest.jsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-whit mt-4\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/EASAttest.jsx\",\n                lineNumber: 63,\n                columnNumber: 27\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/EASAttest.jsx\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this);\n}\n_s(EASAttest, \"EmvgwIb3cHpoFpeP+WmEDbjx4y4=\");\n_c = EASAttest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EASAttest);\nvar _c;\n$RefreshReg$(_c, \"EASAttest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvRUFTQXR0ZXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDcUc7QUFDckcsbUNBQW1DO0FBQ0Y7QUFDakMsTUFBTUssU0FBU0MsbUJBQU9BLENBQUM7QUFDc0I7QUFFN0MsU0FBU0UsVUFBVUMsR0FBRyxFQUFFQyxXQUFXLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxnQkFBZ0I7O0lBRWxFLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUczQyxNQUFNWSxxQkFBcUIsOENBQThDLGlCQUFpQjtJQUMxRixNQUFNQyxvQkFBb0I7UUFFdEIsTUFBTUMsYUFBYVA7UUFDbkJRLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JGO1FBQ2hDQyxRQUFRQyxHQUFHLENBQUNYLEtBQUtDLGFBQWFDLFdBQVdDO1FBRXJDLE1BQU1TLFdBQVcsSUFBSWhCLE9BQU9pQixTQUFTLENBQUNDLFlBQVksQ0FBQ0MsT0FBT0MsUUFBUTtRQUNsRSxNQUFNSixTQUFTSyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxpREFBaUQ7UUFDakcsTUFBTUMsU0FBU04sU0FBU08sU0FBUztRQUNqQyxNQUFNQyxNQUFNLElBQUk3QixzRUFBR0EsQ0FBQ2dCLG9CQUFvQlc7UUFDeENFLElBQUlDLE9BQU8sQ0FBQ0g7UUFFWixNQUFNSSxTQUFTLElBQUk3QixnRkFBYUEsQ0FBQztRQUNqQyxNQUFNOEIsY0FBY0QsT0FBT0UsVUFBVSxDQUFDO1lBQ3RDO2dCQUFDQyxNQUFNO2dCQUFPQyxPQUFPeEIsVUFBVUEsU0FBUztnQkFBRXlCLE1BQU07WUFBUztZQUN6RDtnQkFBQ0YsTUFBTTtnQkFBU0MsT0FBT3pCO2dCQUFhMEIsTUFBTTtZQUFTO1lBQ25EO2dCQUFDRixNQUFNO2dCQUFRQyxPQUFPMUI7Z0JBQUsyQixNQUFNO1lBQVE7WUFDekM7Z0JBQUNGLE1BQU07Z0JBQVlDLE9BQU92QjtnQkFBTXdCLE1BQU07WUFBUTtTQUM3QztRQUVELE1BQU1DLFlBQVk7UUFDbEIsTUFBTUMsY0FBYyxNQUFNVCxJQUFJVSxNQUFNLENBQUM7WUFDakNSLFFBQVFNO1lBQ1JHLE1BQU07Z0JBQ0ZDLFdBQVc5QjtnQkFDWCtCLGdCQUFnQjtnQkFDaEJDLFdBQVc7Z0JBQ1hILE1BQU1SO1lBQ1Y7UUFDSjtRQUVBakIsYUFBYTtRQUNiLE1BQU02QixTQUFTLE1BQU1OLFlBQVlPLElBQUk7UUFDckNoQyxpQkFBaUIrQjtRQUNqQjdCLGFBQWE7UUFDYlIsNERBQVlBLENBQUNJLFdBQVdELGFBQWFELEtBQUtHLE1BQU1nQztRQUNoREUsZUFBZTtJQUV2QjtJQUNBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFFWCw4REFBQ0M7Z0JBQ0RELFdBQVU7Z0JBQ1ZFLFNBQVNqQzswQkFDUjs7Ozs7O1lBSUFILDJCQUFhLDhEQUFDcUM7Z0JBQUVILFdBQVU7MEJBQWlCOzs7Ozs7Ozs7Ozs7QUFNeEQ7R0E3RFN4QztLQUFBQTtBQStEVCwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9FQVNBdHRlc3QuanN4PzM5MzEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IEVBUywgT2ZmY2hhaW4sIFNjaGVtYUVuY29kZXIsIFNjaGVtYVJlZ2lzdHJ5IH0gZnJvbSBcIkBldGhlcmV1bS1hdHRlc3RhdGlvbi1zZXJ2aWNlL2Vhcy1zZGtcIjtcbi8vIGltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IGV0aGVycyA9IHJlcXVpcmUoJ2V0aGVycycpO1xuaW1wb3J0IHdyaXRlVG9Mb2NhbCBmcm9tICcuL3dyaXRlVG9Mb2NhbC5qcyc7XG5cbmZ1bmN0aW9uIEVBU0F0dGVzdChjaWQsIGZyb21BZGRyZXNzLCB0b0FkZHJlc3MsIGhhc2gsIHNldEF0dGVzdGF0aW9uSWQpIHtcblxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICAgIGNvbnN0IEVBU0NvbnRyYWN0QWRkcmVzcyA9ICcweDQyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjEnOyAvL29wdGltaXNtLWdvZXJsaVxuICAgIGNvbnN0IHN1Ym1pdEF0dGVzdGF0aW9uID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHRoaXNBZGRyZXMgPSB0b0FkZHJlc3M7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhlIGFkZHJlc3MgaXMgXCIgKyB0aGlzQWRkcmVzKTtcbiAgICAgICAgY29uc29sZS5sb2coY2lkLCBmcm9tQWRkcmVzcywgdG9BZGRyZXNzLCBoYXNoKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgICAgIGF3YWl0IHByb3ZpZGVyLnNlbmQoJ2V0aF9yZXF1ZXN0QWNjb3VudHMnLCBbXSk7IC8vIEFUVEVNUFQgMyAtIHN1Y2Nlc3NmdWxseSBwcm9tcHRzIE1NIHRvIGNvbm5lY3RcbiAgICAgICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICAgICAgICAgICAgY29uc3QgZWFzID0gbmV3IEVBUyhFQVNDb250cmFjdEFkZHJlc3MsIHNpZ25lcik7XG4gICAgICAgICAgICBlYXMuY29ubmVjdChzaWduZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBzY2hlbWEgPSBuZXcgU2NoZW1hRW5jb2RlcihcImFkZHJlc3MgX3RvLCBhZGRyZXNzIF9mcm9tLCBzdHJpbmcgX0NJRCwgc3RyaW5nIF9uZnRIYXNoXCIpO1xuICAgICAgICAgICAgY29uc3QgZW5jb2RlZERhdGEgPSBzY2hlbWEuZW5jb2RlRGF0YShbXG4gICAgICAgICAgICB7bmFtZTogJ190bycsIHZhbHVlOiB0b0FkZHJlc3MudG9BZGRyZXNzLCB0eXBlOiBcImFkZHJlc3NcIn0sXG4gICAgICAgICAgICB7bmFtZTogJ19mcm9tJywgdmFsdWU6IGZyb21BZGRyZXNzLCB0eXBlOiBcImFkZHJlc3NcIn0sXG4gICAgICAgICAgICB7bmFtZTogJ19DSUQnLCB2YWx1ZTogY2lkLCB0eXBlOiBcInN0cmluZ1wifSxcbiAgICAgICAgICAgIHtuYW1lOiAnX25mdEhhc2gnLCB2YWx1ZTogaGFzaCwgdHlwZTogXCJzdHJpbmdcIn0sXG4gICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgY29uc3Qgc2NoZW1hVUlEID0gJzB4ZmVkYmQ5MmVjYzMxMGYyMTdiN2E1M2IyYjVmNWIyZDFiYmU4YTRhN2NhYzdmNTRjNzBkYmMzZTE4ZmMwZDU1NSc7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGVhcy5hdHRlc3Qoe1xuICAgICAgICAgICAgICAgIHNjaGVtYTogc2NoZW1hVUlELFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVjaXBpZW50OiB0b0FkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgIGV4cGlyYXRpb25UaW1lOiAwLFxuICAgICAgICAgICAgICAgICAgICByZXZvY2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGVuY29kZWREYXRhXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgY29uc3QgbmV3VUlEID0gYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpO1xuICAgICAgICAgICAgc2V0QXR0ZXN0YXRpb25JZChuZXdVSUQpO1xuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHdyaXRlVG9Mb2NhbCh0b0FkZHJlc3MsIGZyb21BZGRyZXNzLCBjaWQsIGhhc2gsIG5ld1VJRCk7XG4gICAgICAgICAgICBzZXRDdXJyZW50U3RlcCgnY29tcGxldGVkJyk7XG5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTcyIHAtMiBtdC0xMiB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbWQnXG4gICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRBdHRlc3RhdGlvbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTdWJtaXQgQXR0ZXN0YXRpb25cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdCBtdC00XCI+TG9hZGluZy4uLjwvcD59XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVBU0F0dGVzdDtcbiJdLCJuYW1lcyI6WyJFQVMiLCJPZmZjaGFpbiIsIlNjaGVtYUVuY29kZXIiLCJTY2hlbWFSZWdpc3RyeSIsInVzZVN0YXRlIiwiZXRoZXJzIiwicmVxdWlyZSIsIndyaXRlVG9Mb2NhbCIsIkVBU0F0dGVzdCIsImNpZCIsImZyb21BZGRyZXNzIiwidG9BZGRyZXNzIiwiaGFzaCIsInNldEF0dGVzdGF0aW9uSWQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJFQVNDb250cmFjdEFkZHJlc3MiLCJzdWJtaXRBdHRlc3RhdGlvbiIsInRoaXNBZGRyZXMiLCJjb25zb2xlIiwibG9nIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInNlbmQiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJlYXMiLCJjb25uZWN0Iiwic2NoZW1hIiwiZW5jb2RlZERhdGEiLCJlbmNvZGVEYXRhIiwibmFtZSIsInZhbHVlIiwidHlwZSIsInNjaGVtYVVJRCIsInRyYW5zYWN0aW9uIiwiYXR0ZXN0IiwiZGF0YSIsInJlY2lwaWVudCIsImV4cGlyYXRpb25UaW1lIiwicmV2b2NhYmxlIiwibmV3VUlEIiwid2FpdCIsInNldEN1cnJlbnRTdGVwIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/EASAttest.jsx\n"));

/***/ })

});