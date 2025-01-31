/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2Fhome%2Fmegagig%2FDesktop%2FMERN%2Fmultiuserblog%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmegagig%2FDesktop%2FMERN%2Fmultiuserblog&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2Fhome%2Fmegagig%2FDesktop%2FMERN%2Fmultiuserblog%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmegagig%2FDesktop%2FMERN%2Fmultiuserblog&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_megagig_Desktop_MERN_multiuserblog_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/home/megagig/Desktop/MERN/multiuserblog/app/api/auth/[...nextauth]/route.js\",\n    nextConfigOutput,\n    userland: _home_megagig_Desktop_MERN_multiuserblog_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZob21lJTJGbWVnYWdpZyUyRkRlc2t0b3AlMkZNRVJOJTJGbXVsdGl1c2VyYmxvZyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRm1lZ2FnaWclMkZEZXNrdG9wJTJGTUVSTiUyRm11bHRpdXNlcmJsb2cmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzRCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9tZWdhZ2lnL0Rlc2t0b3AvTUVSTi9tdWx0aXVzZXJibG9nL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9ob21lL21lZ2FnaWcvRGVza3RvcC9NRVJOL211bHRpdXNlcmJsb2cvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2Fhome%2Fmegagig%2FDesktop%2FMERN%2Fmultiuserblog%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmegagig%2FDesktop%2FMERN%2Fmultiuserblog&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_authOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/authOptions */ \"(rsc)/./utils/authOptions.js\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_utils_authOptions__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNpQjtBQUVsRCxNQUFNRSxVQUFVRixnREFBUUEsQ0FBQ0MsMkRBQVdBO0FBRU8iLCJzb3VyY2VzIjpbIi9ob21lL21lZ2FnaWcvRGVza3RvcC9NRVJOL211bHRpdXNlcmJsb2cvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvdXRpbHMvYXV0aE9wdGlvbnMnO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./models/user.models.js":
/*!*******************************!*\
  !*** ./models/user.models.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose-unique-validator */ \"(rsc)/./node_modules/mongoose-unique-validator/index.js\");\n/* harmony import */ var mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: String,\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        index: true,\n        lowercase: true\n    },\n    password: String,\n    role: {\n        type: [\n            String\n        ],\n        default: [\n            'subscriber'\n        ]\n    },\n    image: String,\n    resetCode: {\n        data: String,\n        expiresAt: {\n            type: Date,\n            default: ()=>new Date(Date.now() + 15 * 60 * 1000)\n        }\n    }\n}, {\n    timestamps: true\n});\nuserSchema.plugin((mongoose_unique_validator__WEBPACK_IMPORTED_MODULE_1___default()), {\n    message: 'Email is already taken.'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlci5tb2RlbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDd0I7QUFFeEQsTUFBTUUsYUFBYSxJQUFJRix3REFBZSxDQUNwQztJQUNFSSxNQUFNQztJQUNOQyxPQUFPO1FBQ0xDLE1BQU1GO1FBQ05HLFVBQVU7UUFDVkMsUUFBUTtRQUNSQyxPQUFPO1FBQ1BDLFdBQVc7SUFDYjtJQUNBQyxVQUFVUDtJQUNWUSxNQUFNO1FBQ0pOLE1BQU07WUFBQ0Y7U0FBTztRQUNkUyxTQUFTO1lBQUM7U0FBYTtJQUN6QjtJQUNBQyxPQUFPVjtJQUNQVyxXQUFXO1FBQ1RDLE1BQU1aO1FBQ05hLFdBQVc7WUFDVFgsTUFBTVk7WUFDTkwsU0FBUyxJQUFNLElBQUlLLEtBQUtBLEtBQUtDLEdBQUcsS0FBSyxLQUFLLEtBQUs7UUFDakQ7SUFDRjtBQUNGLEdBQ0E7SUFBRUMsWUFBWTtBQUFLO0FBR3JCbkIsV0FBV29CLE1BQU0sQ0FBQ3JCLGtFQUFlQSxFQUFFO0lBQUVzQixTQUFTO0FBQTBCO0FBRXhFLGlFQUFldkIsd0RBQWUsQ0FBQ3lCLElBQUksSUFBSXpCLHFEQUFjLENBQUMsUUFBUUUsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsiL2hvbWUvbWVnYWdpZy9EZXNrdG9wL01FUk4vbXVsdGl1c2VyYmxvZy9tb2RlbHMvdXNlci5tb2RlbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB1bmlxdWVWYWxpZGF0b3IgZnJvbSAnbW9uZ29vc2UtdW5pcXVlLXZhbGlkYXRvcic7XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgbmFtZTogU3RyaW5nLFxuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgbG93ZXJjYXNlOiB0cnVlLFxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IFN0cmluZyxcbiAgICByb2xlOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IFsnc3Vic2NyaWJlciddLFxuICAgIH0sXG4gICAgaW1hZ2U6IFN0cmluZyxcbiAgICByZXNldENvZGU6IHtcbiAgICAgIGRhdGE6IFN0cmluZyxcbiAgICAgIGV4cGlyZXNBdDoge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICBkZWZhdWx0OiAoKSA9PiBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTUgKiA2MCAqIDEwMDApLCAvLyAxNSBtaW51dGVzXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XG4pO1xuXG51c2VyU2NoZW1hLnBsdWdpbih1bmlxdWVWYWxpZGF0b3IsIHsgbWVzc2FnZTogJ0VtYWlsIGlzIGFscmVhZHkgdGFrZW4uJyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVuaXF1ZVZhbGlkYXRvciIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwiU3RyaW5nIiwiZW1haWwiLCJ0eXBlIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJpbmRleCIsImxvd2VyY2FzZSIsInBhc3N3b3JkIiwicm9sZSIsImRlZmF1bHQiLCJpbWFnZSIsInJlc2V0Q29kZSIsImRhdGEiLCJleHBpcmVzQXQiLCJEYXRlIiwibm93IiwidGltZXN0YW1wcyIsInBsdWdpbiIsIm1lc3NhZ2UiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/user.models.js\n");

/***/ }),

/***/ "(rsc)/./utils/authOptions.js":
/*!******************************!*\
  !*** ./utils/authOptions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _models_user_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/user.models */ \"(rsc)/./models/user.models.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/dbConnect */ \"(rsc)/./utils/dbConnect.js\");\n\n\n\n\nconst authOptions = {\n    session: {\n        strategy: 'jwt'\n    },\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            async authorize (credentials, req) {\n                (0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                const { email, password } = credentials;\n                const user = await _models_user_models__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                    email\n                });\n                if (!user) {\n                    throw new Error('Invalid email or password');\n                }\n                //if the user has no password (i.e they signed up via a social network, throw an error)\n                if (!user?.password) {\n                    throw new Error('Please login via the method you used to signup');\n                }\n                const isPasswordMatch = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compare(password, user?.password);\n                if (!isPasswordMatch) {\n                    throw new Error('Invalid email or password');\n                }\n                return user;\n            }\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    pages: {\n        signIn: '/login'\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9hdXRoT3B0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBa0U7QUFDMUI7QUFDUjtBQUNVO0FBRW5DLE1BQU1JLGNBQWM7SUFDekJDLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBRUFDLFdBQVc7UUFDVFAsMkVBQW1CQSxDQUFDO1lBQ2xCLE1BQU1RLFdBQVVDLFdBQVcsRUFBRUMsR0FBRztnQkFDOUJQLDREQUFTQTtnQkFDVCxNQUFNLEVBQUVRLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdIO2dCQUM1QixNQUFNSSxPQUFPLE1BQU1aLDJEQUFJQSxDQUFDYSxPQUFPLENBQUM7b0JBQUVIO2dCQUFNO2dCQUN4QyxJQUFJLENBQUNFLE1BQU07b0JBQ1QsTUFBTSxJQUFJRSxNQUFNO2dCQUNsQjtnQkFDQSx1RkFBdUY7Z0JBQ3ZGLElBQUksQ0FBQ0YsTUFBTUQsVUFBVTtvQkFDbkIsTUFBTSxJQUFJRyxNQUFNO2dCQUNsQjtnQkFDQSxNQUFNQyxrQkFBa0IsTUFBTWQsdURBQWdCLENBQzVDVSxVQUNBQyxNQUFNRDtnQkFFUixJQUFJLENBQUNJLGlCQUFpQjtvQkFDcEIsTUFBTSxJQUFJRCxNQUFNO2dCQUNsQjtnQkFDQSxPQUFPRjtZQUNUO1FBQ0Y7S0FDRDtJQUVESyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFDbkNDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsiL2hvbWUvbWVnYWdpZy9EZXNrdG9wL01FUk4vbXVsdGl1c2VyYmxvZy91dGlscy9hdXRoT3B0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcbmltcG9ydCBVc2VyIGZyb20gJ0AvbW9kZWxzL3VzZXIubW9kZWxzJztcbmltcG9ydCBiY3J5cHRqcyBmcm9tICdiY3J5cHRqcyc7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJ0AvdXRpbHMvZGJDb25uZWN0JztcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxuICB9LFxuXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgZGJDb25uZWN0KCk7XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBjcmVkZW50aWFscztcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pO1xuICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIHRoZSB1c2VyIGhhcyBubyBwYXNzd29yZCAoaS5lIHRoZXkgc2lnbmVkIHVwIHZpYSBhIHNvY2lhbCBuZXR3b3JrLCB0aHJvdyBhbiBlcnJvcilcbiAgICAgICAgaWYgKCF1c2VyPy5wYXNzd29yZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGxvZ2luIHZpYSB0aGUgbWV0aG9kIHlvdSB1c2VkIHRvIHNpZ251cCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzUGFzc3dvcmRNYXRjaCA9IGF3YWl0IGJjcnlwdGpzLmNvbXBhcmUoXG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgdXNlcj8ucGFzc3dvcmRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKCFpc1Bhc3N3b3JkTWF0Y2gpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG5cbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2xvZ2luJyxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsIlVzZXIiLCJiY3J5cHRqcyIsImRiQ29ubmVjdCIsImF1dGhPcHRpb25zIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicHJvdmlkZXJzIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJyZXEiLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlciIsImZpbmRPbmUiLCJFcnJvciIsImlzUGFzc3dvcmRNYXRjaCIsImNvbXBhcmUiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwicGFnZXMiLCJzaWduSW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./utils/authOptions.js\n");

/***/ }),

/***/ "(rsc)/./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst dbConnect = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState >= 1) {\n        console.log('Already connected to MongoDB');\n        return;\n    }\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb://megagig:overcomer@46.202.140.97:27017/multiuserblog?authSource=admin\");\n    console.log('Connected to MongoDB successfully');\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9kYkNvbm5lY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ2hDLE1BQU1DLFlBQVk7SUFDaEIsSUFBSUQsNERBQW1CLENBQUNHLFVBQVUsSUFBSSxHQUFHO1FBQ3ZDQyxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNGO0lBQ0FMLHVEQUFnQixDQUFDTyxnRkFBdUI7SUFDeENILFFBQVFDLEdBQUcsQ0FBQztBQUNkO0FBQ0EsaUVBQWVKLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIi9ob21lL21lZ2FnaWcvRGVza3RvcC9NRVJOL211bHRpdXNlcmJsb2cvdXRpbHMvZGJDb25uZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5jb25zdCBkYkNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPj0gMSkge1xuICAgIGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZCB0byBNb25nb0RCJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpO1xuICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHRvIE1vbmdvREIgc3VjY2Vzc2Z1bGx5Jyk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0O1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiZGJDb25uZWN0IiwiY29ubmVjdGlvbiIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/dbConnect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/mongoose-unique-validator","vendor-chunks/lru-cache","vendor-chunks/lodash.merge","vendor-chunks/lodash.get","vendor-chunks/lodash.foreach","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2Fhome%2Fmegagig%2FDesktop%2FMERN%2Fmultiuserblog%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fmegagig%2FDesktop%2FMERN%2Fmultiuserblog&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();