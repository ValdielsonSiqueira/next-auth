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

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": function() { return /* binding */ api; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\n\n\n\nvar cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\nvar isRefreshing = false;\nvar failedRequestQueue = [];\nvar api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:3333\",\n    headers: {\n        Authorization: \"Bearer \".concat(cookies[\"nextauth.token\"])\n    }\n});\napi.interceptors.response.use(function(response) {\n    return response;\n}, function(error) {\n    if (error.response.status === 401) {\n        var ref;\n        if (((ref = error.response.data) === null || ref === void 0 ? void 0 : ref.code) === \"token.expired\") {\n            cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();\n            var refreshToken = cookies[\"nextauth.refreshToken\"];\n            var originalConfig = error.config;\n            if (!isRefreshing) {\n                isRefreshing = true;\n                api.post(\"/refresh\", {\n                    refreshToken: refreshToken\n                }).then(function(response) {\n                    var token = response.data.token;\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)(undefined, \"nextauth.token\", token, {\n                        maxAge: 60 * 60 * 24 * 30,\n                        path: \"/\"\n                    });\n                    (0,nookies__WEBPACK_IMPORTED_MODULE_1__.setCookie)(undefined, \"nextauth.refreshToken\", response.data.refreshToken, {\n                        maxAge: 60 * 60 * 24 * 30,\n                        path: \"/\"\n                    });\n                    api.defaults.headers[\"Authorization\"] = \"Bearer \".concat(token);\n                    failedRequestQueue.forEach(function(request) {\n                        return request.onSuccess(token);\n                    });\n                    failedRequestQueue = [];\n                }).catch(function(err) {\n                    failedRequestQueue.forEach(function(request) {\n                        return request.onError(err);\n                    });\n                    failedRequestQueue = [];\n                }).finally(function() {\n                    isRefreshing = false;\n                });\n            }\n            return new Promise(function(resolve, reject) {\n                failedRequestQueue.push({\n                    onSuccess: function(token) {\n                        originalConfig.headers[\"Authorization\"] = \"Bearer \".concat(token);\n                        resolve(api(originalConfig));\n                    },\n                    onError: function(error) {\n                        reject(error);\n                    }\n                });\n            });\n        } else {\n            (0,_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n        }\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxTQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztnQkFDdENoQyxrQkFBa0IsQ0FBQ2lDLElBQUksQ0FBQztvQkFDdEJSLFNBQVMsRUFBRSxTQUFDUCxLQUFhLEVBQUs7d0JBQzVCSixjQUFjLENBQUNWLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxTQUFRLENBQVEsT0FBTmMsS0FBSyxDQUFFLENBQUM7d0JBRTVEYSxPQUFPLENBQUM5QixHQUFHLENBQUNhLGNBQWMsQ0FBQyxDQUFDLENBQUM7cUJBQzlCO29CQUNEYyxPQUFPLEVBQUVuQixTQUFBQSxLQUFLLEVBQUk7d0JBQ2hCdUIsTUFBTSxDQUFDdkIsS0FBSyxDQUFDLENBQUM7cUJBQ2Y7aUJBQ0YsQ0FBQzthQUNILENBQUMsQ0FBQztTQUNKLE1BQU07WUFDTFosOERBQU8sRUFBRSxDQUFDO1NBQ1g7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlcnZpY2VzL2FwaS50cz85NTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgcGFyc2VDb29raWVzLCBzZXRDb29raWUgfSBmcm9tICdub29raWVzJztcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tICcuLi9jb250ZXh0cy9BdXRoQ29udGV4dCc7XG5cbmxldCBjb29raWVzID0gcGFyc2VDb29raWVzKCk7XG5sZXQgaXNSZWZyZXNoaW5nID0gZmFsc2U7XG5sZXQgZmFpbGVkUmVxdWVzdFF1ZXVlID0gW107XG5cbmV4cG9ydCBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDozMzMzJyxcbiAgaGVhZGVyczoge1xuICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzWyduZXh0YXV0aC50b2tlbiddfWBcbiAgfVxufSk7XG5cbmFwaS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHJlc3BvbnNlID0+IHtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufSwgZXJyb3IgPT4ge1xuICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICBpZiAoZXJyb3IucmVzcG9uc2UuZGF0YT8uY29kZSA9PT0gJ3Rva2VuLmV4cGlyZWQnKSB7XG4gICAgICBjb29raWVzID0gcGFyc2VDb29raWVzKCk7XG5cbiAgICAgIGNvbnN0IHsgJ25leHRhdXRoLnJlZnJlc2hUb2tlbic6IHJlZnJlc2hUb2tlbiB9ID0gY29va2llcztcbiAgICAgIGNvbnN0IG9yaWdpbmFsQ29uZmlnID0gZXJyb3IuY29uZmlnO1xuXG4gICAgICBpZiAoIWlzUmVmcmVzaGluZykge1xuICAgICAgICBpc1JlZnJlc2hpbmcgPSB0cnVlO1xuXG4gICAgICAgIGFwaS5wb3N0KCcvcmVmcmVzaCcsIHtcbiAgICAgICAgcmVmcmVzaFRva2VuXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnbmV4dGF1dGgudG9rZW4nLCB0b2tlbiwge1xuICAgICAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHNldENvb2tpZSh1bmRlZmluZWQsICduZXh0YXV0aC5yZWZyZXNoVG9rZW4nLCByZXNwb25zZS5kYXRhLnJlZnJlc2hUb2tlbiwge1xuICAgICAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBcbiAgICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XG5cbiAgICAgICAgICBmYWlsZWRSZXF1ZXN0UXVldWUuZm9yRWFjaChyZXF1ZXN0ID0+IHJlcXVlc3Qub25TdWNjZXNzKHRva2VuKSk7XG4gICAgICAgICAgZmFpbGVkUmVxdWVzdFF1ZXVlID0gW107XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgZmFpbGVkUmVxdWVzdFF1ZXVlLmZvckVhY2gocmVxdWVzdCA9PiByZXF1ZXN0Lm9uRXJyb3IoZXJyKSk7XG4gICAgICAgICAgZmFpbGVkUmVxdWVzdFF1ZXVlID0gW107XG4gICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAgIGlzUmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBmYWlsZWRSZXF1ZXN0UXVldWUucHVzaCh7XG4gICAgICAgICAgb25TdWNjZXNzOiAodG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgb3JpZ2luYWxDb25maWcuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XG5cbiAgICAgICAgICAgIHJlc29sdmUoYXBpKG9yaWdpbmFsQ29uZmlnKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbkVycm9yOiBlcnJvciA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2lnbk91dCgpO1xuICAgIH1cbiAgfVxufSkiXSwibmFtZXMiOlsiYXhpb3MiLCJwYXJzZUNvb2tpZXMiLCJzZXRDb29raWUiLCJzaWduT3V0IiwiY29va2llcyIsImlzUmVmcmVzaGluZyIsImZhaWxlZFJlcXVlc3RRdWV1ZSIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwiY29kZSIsInJlZnJlc2hUb2tlbiIsIm9yaWdpbmFsQ29uZmlnIiwiY29uZmlnIiwicG9zdCIsInRoZW4iLCJ0b2tlbiIsInVuZGVmaW5lZCIsIm1heEFnZSIsInBhdGgiLCJkZWZhdWx0cyIsImZvckVhY2giLCJyZXF1ZXN0Iiwib25TdWNjZXNzIiwiY2F0Y2giLCJlcnIiLCJvbkVycm9yIiwiZmluYWxseSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.ts\n"));

/***/ })

});