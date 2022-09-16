"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": function() { return /* binding */ AuthContext; },\n/* harmony export */   \"AuthProvider\": function() { return /* binding */ AuthProvider; },\n/* harmony export */   \"signOut\": function() { return /* binding */ signOut; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_codeiro_Documentos_estudo_Rocketseat_React_Next_Autentica_o_login_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_codeiro_Documentos_estudo_Rocketseat_React_Next_Autentica_o_login_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_codeiro_Documentos_estudo_Rocketseat_React_Next_Autentica_o_login_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nfunction signOut() {\n    (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(undefined, \"nextauth.token\");\n    (0,nookies__WEBPACK_IMPORTED_MODULE_4__.destroyCookie)(undefined, \"nextauth.refreshToken\");\n    next_router__WEBPACK_IMPORTED_MODULE_5___default().push(\"/\");\n}\nfunction AuthProvider(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), user = ref[0], setUser = ref[1];\n    var isAuthenticated = !!user;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var ref = (0,nookies__WEBPACK_IMPORTED_MODULE_4__.parseCookies)(), token = ref[\"nextauth.token\"];\n        if (token) {\n            _services_api__WEBPACK_IMPORTED_MODULE_3__.api.get(\"/me\").then(function(response) {\n                var _data = response.data, email = _data.email, permissions = _data.permissions, roles = _data.roles;\n                setUser({\n                    email: email,\n                    permissions: permissions,\n                    roles: roles\n                });\n            }).catch(function() {\n                signOut();\n            });\n        }\n    }, []);\n    function signIn(_) {\n        return _signIn.apply(this, arguments);\n    }\n    function _signIn() {\n        _signIn = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_home_codeiro_Documentos_estudo_Rocketseat_React_Next_Autentica_o_login_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(param) {\n            var email, password, response, _data, token, refreshToken, permissions, roles;\n            return _home_codeiro_Documentos_estudo_Rocketseat_React_Next_Autentica_o_login_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        email = param.email, password = param.password;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return _services_api__WEBPACK_IMPORTED_MODULE_3__.api.post(\"sessions\", {\n                            email: email,\n                            password: password\n                        });\n                    case 4:\n                        response = _ctx.sent;\n                        _data = response.data, token = _data.token, refreshToken = _data.refreshToken, permissions = _data.permissions, roles = _data.roles;\n                        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, \"nextauth.token\", token, {\n                            maxAge: 60 * 60 * 24 * 30,\n                            path: \"/\"\n                        });\n                        (0,nookies__WEBPACK_IMPORTED_MODULE_4__.setCookie)(undefined, \"nextauth.refreshToken\", refreshToken, {\n                            maxAge: 60 * 60 * 24 * 30,\n                            path: \"/\"\n                        });\n                        setUser({\n                            email: email,\n                            permissions: permissions,\n                            roles: roles\n                        });\n                        _services_api__WEBPACK_IMPORTED_MODULE_3__.api.defaults.headers.Authorization = \"Bearer \".concat(token);\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    12\n                ]\n            ]);\n        }));\n        return _signIn.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            signIn: signIn,\n            isAuthenticated: isAuthenticated,\n            user: user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/codeiro/Documentos/estudo/Rocketseat/React/Next/Autentica\\xe7\\xe3o/login/src/contexts/AuthContext.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthProvider, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7NEJBQ3pCQyxJQUFJLEVBQUUsR0FBRzt5QkFDVixDQUFDLENBQUM7d0JBRUhoQixPQUFPLENBQUM7NEJBQUVPLEtBQUssRUFBTEEsS0FBSzs0QkFBRUMsV0FBVyxFQUFYQSxXQUFXOzRCQUFFQyxLQUFLLEVBQUxBLEtBQUs7eUJBQUUsQ0FBQyxDQUFDO3dCQUV2Q3JCLDZFQUFxQyxHQUFHLFNBQVEsQ0FBUSxPQUFOYyxLQUFLLENBQUUsQ0FBQzs7Ozs7O3dCQUkxRGlCLE9BQU8sQ0FBQ0MsR0FBRyxTQUFLLENBQUM7Ozs7Ozs7Ozs7O1NBR3BCO2VBeEJjVCxPQUFNOztJQXlCckIscUJBQ0UsOERBQUNsQixXQUFXLENBQUM0QixRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFFWCxNQUFNLEVBQU5BLE1BQU07WUFBRVYsZUFBZSxFQUFmQSxlQUFlO1lBQUVGLElBQUksRUFBSkEsSUFBSTtTQUFDO2tCQUMxREQsUUFBUTs7Ozs7WUFDWSxDQUN4QjtDQUNGO0dBakRlRCxZQUFZO0FBQVpBLEtBQUFBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD8xZmEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XG5pbXBvcnQgeyBzZXRDb29raWUsIHBhcnNlQ29va2llcywgZGVzdHJveUNvb2tpZSB9IGZyb20gJ25vb2tpZXMnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5cbnR5cGUgVXNlciA9IHsgXG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBlcm1pc3Npb25zOiBzdHJpbmdbXTtcbiAgcm9sZXM6IHN0cmluZ1tdO1xufVxuXG50eXBlIFNpZ25JbkNyZWRlbnRpYWxzID0geyBcbiAgZW1haWw6IHN0cmluZ1xuICBwYXNzd29yZDogc3RyaW5nXG59XG5cbnR5cGUgQXV0aENvbnRleHREYXRhID0ge1xuICBzaWduSW4oY3JlZGVudGlhbHM6IFNpZ25JbkNyZWRlbnRpYWxzKTogUHJvbWlzZTx2b2lkPjtcbiAgdXNlcjogVXNlcjtcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xufVxuXG50eXBlIEF1dGhDb250ZXh0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoKSB7XG4gIGRlc3Ryb3lDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgudG9rZW4nKTtcbiAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nKTtcblxuICBSb3V0ZXIucHVzaCgnLycpXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06IEF1dGhDb250ZXh0UHJvcHMpIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlcj4oKTtcbiAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gISF1c2VyO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyAnbmV4dGF1dGgudG9rZW4nOiB0b2tlbiB9ID0gcGFyc2VDb29raWVzKCk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGFwaS5nZXQoJy9tZScpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBlcm1pc3Npb25zLCByb2xlcyB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICBzZXRVc2VyKHsgZW1haWwsIHBlcm1pc3Npb25zLCByb2xlcyB9KTtcbiAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgc2lnbk91dCgpO1xuICAgICAgfSlcbiAgICB9XG4gIH0sIFtdKVxuICBcbiAgYXN5bmMgZnVuY3Rpb24gc2lnbkluKHsgZW1haWwsIHBhc3N3b3JkIH06IFNpZ25JbkNyZWRlbnRpYWxzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJ3Nlc3Npb25zJywgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgICBcbiAgICAgIGNvbnN0IHsgdG9rZW4sICByZWZyZXNoVG9rZW4sIHBlcm1pc3Npb25zLCByb2xlcyB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgc2V0Q29va2llKHVuZGVmaW5lZCwgJ25leHRhdXRoLnRva2VuJywgdG9rZW4sIHtcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgfSk7XG4gICAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgucmVmcmVzaFRva2VuJywgcmVmcmVzaFRva2VuLCB7XG4gICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICAgIH0pO1xuXG4gICAgICBzZXRVc2VyKHsgZW1haWwsIHBlcm1pc3Npb25zLCByb2xlcyB9KTtcblxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuXG4gICAgICAvLyBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cblxuICB9XG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNpZ25JbiwgaXNBdXRoZW50aWNhdGVkLCB1c2VyfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhcGkiLCJzZXRDb29raWUiLCJwYXJzZUNvb2tpZXMiLCJkZXN0cm95Q29va2llIiwiUm91dGVyIiwiQXV0aENvbnRleHQiLCJzaWduT3V0IiwidW5kZWZpbmVkIiwicHVzaCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ0b2tlbiIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlbWFpbCIsInBlcm1pc3Npb25zIiwicm9sZXMiLCJjYXRjaCIsInNpZ25JbiIsInBhc3N3b3JkIiwicmVmcmVzaFRva2VuIiwicG9zdCIsIm1heEFnZSIsInBhdGgiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n"));

/***/ })

});