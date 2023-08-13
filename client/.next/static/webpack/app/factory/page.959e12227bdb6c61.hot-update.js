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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ethereum-attestation-service/eas-sdk */ \"(app-client)/./node_modules/@ethereum-attestation-service/eas-sdk/dist/index.js\");\n/* harmony import */ var _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// import { ethers } from 'ethers';\n\nconst ethers = __webpack_require__(/*! ethers */ \"(app-client)/./node_modules/ethers/lib.esm/index.js\");\nfunction EASAttest(cid, fromAddress, toAddress, hash, setAttestationId) {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [attestationUID, setAttestationUID] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const EASContractAddress = \"0x4200000000000000000000000000000000000021\"; //optimism-goerli\n    const submitAttestation = async ()=>{\n        setAttestationUID(\"\");\n        // ATTEMPT 2\n        // const wallet = new ethers.Wallet(ethPrivkey, provider);\n        // const signer = wallet.provider.getSigner(wallet.address);\n        // ATTEMPT 1 \n        // const signer = provider.getSigner();\n        const provider = new ethers.providers.Web3Provider(window.ethereum);\n        await provider.send(\"eth_requestAccounts\", []); // ATTEMPT 3 - successfully prompts MM to connect\n        const signer = provider.getSigner();\n        const eas = new _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__.EAS(EASContractAddress, signer);\n        eas.connect(signer);\n        const schema = new _ethereum_attestation_service_eas_sdk__WEBPACK_IMPORTED_MODULE_1__.SchemaEncoder(\"string name, string message\");\n        const encodedData = schema.encodeData([\n            {\n                name: \"name\",\n                value: name,\n                type: \"string\"\n            },\n            {\n                name: \"message\",\n                value: message,\n                type: \"string\"\n            }\n        ]);\n        const schemaUID = \"0xb28844791177681bd44d983e8aaa017f6a378e297271a46fd20d81a5cbadc386\";\n        const transaction = await eas.attest({\n            schema: schemaUID,\n            data: {\n                recipient: address,\n                expirationTime: 0,\n                revocable: true,\n                data: encodedData\n            }\n        });\n        setIsLoading(true);\n        const newUID = await transaction.wait();\n        setAttestationUID(newUID);\n        setAttestationId(newUID);\n        const newAttestationUID = newUID.data;\n        // console.log(check);\n        setIsLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter Name...\",\n                className: \"w-72 p-2 mt-4 text-black rounded-md\",\n                value: name,\n                onChange: (e)=>setName(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/EASAttest.jsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter Address...\",\n                className: \"w-72 p-2 mt-4 text-black rounded-md\",\n                value: address,\n                onChange: (e)=>setAddress(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/EASAttest.jsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter Message\",\n                className: \"w-72 p-2 mt-4 text-black rounded-md\",\n                value: message,\n                onChange: (e)=>setMessage(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/EASAttest.jsx\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"w-72 p-2 mt-12 text-white bg-blue-500 rounded-md\",\n                onClick: submitAttestation,\n                children: \"Submit Attestation\"\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/EASAttest.jsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-whit mt-4\",\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/EASAttest.jsx\",\n                lineNumber: 97,\n                columnNumber: 27\n            }, this),\n            attestationUID && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-4\",\n                children: [\n                    \"New Attestation UID: \",\n                    attestationUID\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/EASAttest.jsx\",\n                lineNumber: 99,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zuludykes/Solace/Code/BlockIP/Main/_blockIP/client/app/components/EASAttest.jsx\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, this);\n}\n_s(EASAttest, \"mM1bYBS+eBkGh7McljkxxMeFln8=\");\n_c = EASAttest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EASAttest);\nvar _c;\n$RefreshReg$(_c, \"EASAttest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvRUFTQXR0ZXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNxRztBQUNyRyxtQ0FBbUM7QUFDRjtBQUNqQyxNQUFNSyxTQUFTQyxtQkFBT0EsQ0FBQztBQUV2QixTQUFTQyxVQUFVQyxHQUFHLEVBQUVDLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLGdCQUFnQjs7SUFDbEUsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDZSxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNpQixnQkFBZ0JDLGtCQUFrQixHQUFHbEIsK0NBQVFBLENBQUM7SUFFckQsTUFBTW1CLHFCQUFxQiw4Q0FBOEMsaUJBQWlCO0lBQzFGLE1BQU1DLG9CQUFvQjtRQUN0QkYsa0JBQWtCO1FBRWxCLFlBQVk7UUFDWiwwREFBMEQ7UUFDMUQsNERBQTREO1FBRTVELGFBQWE7UUFDYix1Q0FBdUM7UUFFdkMsTUFBTUcsV0FBVyxJQUFJcEIsT0FBT3FCLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPQyxRQUFRO1FBQ2xFLE1BQU1KLFNBQVNLLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLGlEQUFpRDtRQUNqRyxNQUFNQyxTQUFTTixTQUFTTyxTQUFTO1FBRzdCLE1BQU1DLE1BQU0sSUFBSWpDLHNFQUFHQSxDQUFDdUIsb0JBQW9CUTtRQUN4Q0UsSUFBSUMsT0FBTyxDQUFDSDtRQUVaLE1BQU1JLFNBQVMsSUFBSWpDLGdGQUFhQSxDQUFDO1FBQ2pDLE1BQU1rQyxjQUFjRCxPQUFPRSxVQUFVLENBQUM7WUFDdEM7Z0JBQUN4QixNQUFNO2dCQUFReUIsT0FBT3pCO2dCQUFNMEIsTUFBTTtZQUFRO1lBQzFDO2dCQUFDMUIsTUFBTTtnQkFBV3lCLE9BQU9yQjtnQkFBU3NCLE1BQU07WUFBUTtTQUMvQztRQUVELE1BQU1DLFlBQVk7UUFFbEIsTUFBTUMsY0FBYyxNQUFNUixJQUFJUyxNQUFNLENBQUM7WUFDakNQLFFBQVFLO1lBQ1JHLE1BQU07Z0JBQ0ZDLFdBQVc3QjtnQkFDWDhCLGdCQUFnQjtnQkFDaEJDLFdBQVc7Z0JBQ1hILE1BQU1QO1lBQ1Y7UUFDSjtRQUVBaEIsYUFBYTtRQUViLE1BQU0yQixTQUFTLE1BQU1OLFlBQVlPLElBQUk7UUFDckMxQixrQkFBa0J5QjtRQUNsQm5DLGlCQUFpQm1DO1FBR2pCLE1BQU1FLG9CQUFvQkYsT0FBT0osSUFBSTtRQUdyQyxzQkFBc0I7UUFHdEJ2QixhQUFhO0lBRXJCO0lBQ0EscUJBQ0ksOERBQUM4QjtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQ0RiLE1BQUs7Z0JBQU9jLGFBQVk7Z0JBQ3hCRixXQUFVO2dCQUNWYixPQUFRekI7Z0JBQ1J5QyxVQUFXLENBQUNDLElBQU16QyxRQUFReUMsRUFBRUMsTUFBTSxDQUFDbEIsS0FBSzs7Ozs7OzBCQUd4Qyw4REFBQ2M7Z0JBQ0RiLE1BQUs7Z0JBQU9jLGFBQVk7Z0JBQ3hCRixXQUFVO2dCQUNWYixPQUFRdkI7Z0JBQ1J1QyxVQUFXLENBQUNDLElBQU12QyxXQUFXdUMsRUFBRUMsTUFBTSxDQUFDbEIsS0FBSzs7Ozs7OzBCQUczQyw4REFBQ2M7Z0JBQ0RiLE1BQUs7Z0JBQU9jLGFBQVk7Z0JBQ3hCRixXQUFVO2dCQUNWYixPQUFRckI7Z0JBQ1JxQyxVQUFXLENBQUNDLElBQU1yQyxXQUFXcUMsRUFBRUMsTUFBTSxDQUFDbEIsS0FBSzs7Ozs7OzBCQUczQyw4REFBQ21CO2dCQUNETixXQUFVO2dCQUNWTyxTQUFTbEM7MEJBQ1I7Ozs7OztZQUlBTCwyQkFBYSw4REFBQ3dDO2dCQUFFUixXQUFVOzBCQUFpQjs7Ozs7O1lBQzNDOUIsZ0NBQ0csOERBQUNzQztnQkFBRVIsV0FBVTs7b0JBQU87b0JBQ005Qjs7Ozs7Ozs7Ozs7OztBQU8xQztHQXBHU2Q7S0FBQUE7QUFzR1QsK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRUFTQXR0ZXN0LmpzeD8zOTMxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyBFQVMsIE9mZmNoYWluLCBTY2hlbWFFbmNvZGVyLCBTY2hlbWFSZWdpc3RyeSB9IGZyb20gXCJAZXRoZXJldW0tYXR0ZXN0YXRpb24tc2VydmljZS9lYXMtc2RrXCI7XG4vLyBpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBldGhlcnMgPSByZXF1aXJlKCdldGhlcnMnKTtcblxuZnVuY3Rpb24gRUFTQXR0ZXN0KGNpZCwgZnJvbUFkZHJlc3MsIHRvQWRkcmVzcywgaGFzaCwgc2V0QXR0ZXN0YXRpb25JZCkge1xuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTsgXG4gICAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFthdHRlc3RhdGlvblVJRCwgc2V0QXR0ZXN0YXRpb25VSURdID0gdXNlU3RhdGUoJycpO1xuXG4gICAgY29uc3QgRUFTQ29udHJhY3RBZGRyZXNzID0gJzB4NDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMSc7IC8vb3B0aW1pc20tZ29lcmxpXG4gICAgY29uc3Qgc3VibWl0QXR0ZXN0YXRpb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldEF0dGVzdGF0aW9uVUlEKCcnKTtcblxuICAgICAgICAvLyBBVFRFTVBUIDJcbiAgICAgICAgLy8gY29uc3Qgd2FsbGV0ID0gbmV3IGV0aGVycy5XYWxsZXQoZXRoUHJpdmtleSwgcHJvdmlkZXIpO1xuICAgICAgICAvLyBjb25zdCBzaWduZXIgPSB3YWxsZXQucHJvdmlkZXIuZ2V0U2lnbmVyKHdhbGxldC5hZGRyZXNzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFUVEVNUFQgMSBcbiAgICAgICAgLy8gY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XG5cbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKTtcbiAgICAgICAgYXdhaXQgcHJvdmlkZXIuc2VuZCgnZXRoX3JlcXVlc3RBY2NvdW50cycsIFtdKTsgLy8gQVRURU1QVCAzIC0gc3VjY2Vzc2Z1bGx5IHByb21wdHMgTU0gdG8gY29ubmVjdFxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcblxuXG4gICAgICAgICAgICBjb25zdCBlYXMgPSBuZXcgRUFTKEVBU0NvbnRyYWN0QWRkcmVzcywgc2lnbmVyKTtcbiAgICAgICAgICAgIGVhcy5jb25uZWN0KHNpZ25lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHNjaGVtYSA9IG5ldyBTY2hlbWFFbmNvZGVyKFwic3RyaW5nIG5hbWUsIHN0cmluZyBtZXNzYWdlXCIpO1xuICAgICAgICAgICAgY29uc3QgZW5jb2RlZERhdGEgPSBzY2hlbWEuZW5jb2RlRGF0YShbXG4gICAgICAgICAgICB7bmFtZTogJ25hbWUnLCB2YWx1ZTogbmFtZSwgdHlwZTogXCJzdHJpbmdcIn0sXG4gICAgICAgICAgICB7bmFtZTogJ21lc3NhZ2UnLCB2YWx1ZTogbWVzc2FnZSwgdHlwZTogXCJzdHJpbmdcIn1cbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICBjb25zdCBzY2hlbWFVSUQgPSAnMHhiMjg4NDQ3OTExNzc2ODFiZDQ0ZDk4M2U4YWFhMDE3ZjZhMzc4ZTI5NzI3MWE0NmZkMjBkODFhNWNiYWRjMzg2JztcblxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBlYXMuYXR0ZXN0KHtcbiAgICAgICAgICAgICAgICBzY2hlbWE6IHNjaGVtYVVJRCxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlY2lwaWVudDogYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgZXhwaXJhdGlvblRpbWU6IDAsXG4gICAgICAgICAgICAgICAgICAgIHJldm9jYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZW5jb2RlZERhdGFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5ld1VJRCA9IGF3YWl0IHRyYW5zYWN0aW9uLndhaXQoKTtcbiAgICAgICAgICAgIHNldEF0dGVzdGF0aW9uVUlEKG5ld1VJRCk7XG4gICAgICAgICAgICBzZXRBdHRlc3RhdGlvbklkKG5ld1VJRCk7XG5cblxuICAgICAgICAgICAgY29uc3QgbmV3QXR0ZXN0YXRpb25VSUQgPSBuZXdVSUQuZGF0YTtcblxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGVjayk7XG5cblxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcblxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J0VudGVyIE5hbWUuLi4nXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctNzIgcC0yIG10LTQgdGV4dC1ibGFjayByb3VuZGVkLW1kJ1xuICAgICAgICAgICAgdmFsdWU9eyhuYW1lKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPSB7KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgPjwvaW5wdXQ+XG5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSdFbnRlciBBZGRyZXNzLi4uJ1xuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTcyIHAtMiBtdC00IHRleHQtYmxhY2sgcm91bmRlZC1tZCdcbiAgICAgICAgICAgIHZhbHVlPXsoYWRkcmVzcyl9XG4gICAgICAgICAgICBvbkNoYW5nZT0geyhlKSA9PiBzZXRBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgID48L2lucHV0PlxuXG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0nRW50ZXIgTWVzc2FnZSdcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndy03MiBwLTIgbXQtNCB0ZXh0LWJsYWNrIHJvdW5kZWQtbWQnXG4gICAgICAgICAgICB2YWx1ZT17KG1lc3NhZ2UpfVxuICAgICAgICAgICAgb25DaGFuZ2U9IHsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICA+PC9pbnB1dD5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPSd3LTcyIHAtMiBtdC0xMiB0ZXh0LXdoaXRlIGJnLWJsdWUtNTAwIHJvdW5kZWQtbWQnXG4gICAgICAgICAgICBvbkNsaWNrPXtzdWJtaXRBdHRlc3RhdGlvbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTdWJtaXQgQXR0ZXN0YXRpb25cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICB7aXNMb2FkaW5nICYmIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdCBtdC00XCI+TG9hZGluZy4uLjwvcD59XG4gICAgICAgICAgICB7YXR0ZXN0YXRpb25VSUQgJiYgKFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgTmV3IEF0dGVzdGF0aW9uIFVJRDoge2F0dGVzdGF0aW9uVUlEfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFQVNBdHRlc3Q7XG4iXSwibmFtZXMiOlsiRUFTIiwiT2ZmY2hhaW4iLCJTY2hlbWFFbmNvZGVyIiwiU2NoZW1hUmVnaXN0cnkiLCJ1c2VTdGF0ZSIsImV0aGVycyIsInJlcXVpcmUiLCJFQVNBdHRlc3QiLCJjaWQiLCJmcm9tQWRkcmVzcyIsInRvQWRkcmVzcyIsImhhc2giLCJzZXRBdHRlc3RhdGlvbklkIiwibmFtZSIsInNldE5hbWUiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiYXR0ZXN0YXRpb25VSUQiLCJzZXRBdHRlc3RhdGlvblVJRCIsIkVBU0NvbnRyYWN0QWRkcmVzcyIsInN1Ym1pdEF0dGVzdGF0aW9uIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInNlbmQiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJlYXMiLCJjb25uZWN0Iiwic2NoZW1hIiwiZW5jb2RlZERhdGEiLCJlbmNvZGVEYXRhIiwidmFsdWUiLCJ0eXBlIiwic2NoZW1hVUlEIiwidHJhbnNhY3Rpb24iLCJhdHRlc3QiLCJkYXRhIiwicmVjaXBpZW50IiwiZXhwaXJhdGlvblRpbWUiLCJyZXZvY2FibGUiLCJuZXdVSUQiLCJ3YWl0IiwibmV3QXR0ZXN0YXRpb25VSUQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/EASAttest.jsx\n"));

/***/ })

});