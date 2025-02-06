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
exports.id = "app/api/users/route";
exports.ids = ["app/api/users/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CApps%5CGitHub%5Cadmin-mongo-stream%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CApps%5CGitHub%5Cadmin-mongo-stream&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CApps%5CGitHub%5Cadmin-mongo-stream%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CApps%5CGitHub%5Cadmin-mongo-stream&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Apps_GitHub_admin_mongo_stream_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/users/route.ts */ \"(rsc)/./app/api/users/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/route\",\n        pathname: \"/api/users\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/route\"\n    },\n    resolvedPagePath: \"C:\\\\Apps\\\\GitHub\\\\admin-mongo-stream\\\\app\\\\api\\\\users\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Apps_GitHub_admin_mongo_stream_app_api_users_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDQXBwcyU1Q0dpdEh1YiU1Q2FkbWluLW1vbmdvLXN0cmVhbSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q0FwcHMlNUNHaXRIdWIlNUNhZG1pbi1tb25nby1zdHJlYW0maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2U7QUFDNUY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXEFwcHNcXFxcR2l0SHViXFxcXGFkbWluLW1vbmdvLXN0cmVhbVxcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS91c2Vycy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXJzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2Vycy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXEFwcHNcXFxcR2l0SHViXFxcXGFkbWluLW1vbmdvLXN0cmVhbVxcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CApps%5CGitHub%5Cadmin-mongo-stream%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CApps%5CGitHub%5Cadmin-mongo-stream&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./app/api/users/route.ts":
/*!********************************!*\
  !*** ./app/api/users/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet client = null;\nasync function getClient() {\n    if (!client) {\n        if (!process.env.DATABASE_URL) {\n            throw new Error(\"DATABASE_URL is not set in your environment variables.\");\n        }\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient(process.env.DATABASE_URL);\n        await client.connect();\n    }\n    return client;\n}\nasync function GET(req) {\n    console.log('GET request received:', req.url);\n    try {\n        const dbClient = await getClient();\n        const db = dbClient.db();\n        const users = await db.collection(\"User\").find().toArray();\n        console.log('Users fetched:', users.length);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(users, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Failed to fetch users:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch users\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    console.log('POST request received:', req.url);\n    try {\n        const dbClient = await getClient();\n        const db = dbClient.db();\n        const body = await req.json();\n        console.log('Request body:', body);\n        const insertResult = await db.collection(\"User\").insertOne(body);\n        const newUser = await db.collection(\"User\").findOne({\n            _id: insertResult.insertedId\n        });\n        console.log('New user created:', newUser);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(newUser, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Failed to create user:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to create user\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(req) {\n    console.log('DELETE request received:', req.url);\n    const id = req.nextUrl.searchParams.get('id');\n    console.log('User ID to delete:', id);\n    if (!id) {\n        console.error('User ID not provided');\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'User ID not provided'\n        }, {\n            status: 400\n        });\n    }\n    try {\n        const dbClient = await getClient();\n        const db = dbClient.db();\n        const result = await db.collection(\"User\").deleteOne({\n            _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(id)\n        });\n        if (result.deletedCount === 1) {\n            console.log('User deleted successfully');\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'User deleted successfully'\n            }, {\n                status: 200\n            });\n        } else {\n            console.error('User not found');\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'User not found'\n            }, {\n                status: 404\n            });\n        }\n    } catch (error) {\n        console.error('Failed to delete user:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to delete user'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBWUEsQ0FBQ3NCLElBQUksQ0FBQztnQkFBRW1CLFNBQVM7WUFBNEIsR0FBRztnQkFBRWxCLFFBQVE7WUFBSTtRQUNuRixPQUFPO1lBQ0xYLFFBQVFZLEtBQUssQ0FBQztZQUNkLE9BQU94QixxREFBWUEsQ0FBQ3NCLElBQUksQ0FBQztnQkFBRUUsT0FBTztZQUFpQixHQUFHO2dCQUFFRCxRQUFRO1lBQUk7UUFDdEU7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZFosUUFBUVksS0FBSyxDQUFDLDBCQUEwQkE7UUFDeEMsT0FBT3hCLHFEQUFZQSxDQUFDc0IsSUFBSSxDQUFDO1lBQUVFLE9BQU87UUFBd0IsR0FBRztZQUFFRCxRQUFRO1FBQUk7SUFDN0U7QUFDRiIsInNvdXJjZXMiOlsiQzpcXEFwcHNcXEdpdEh1YlxcYWRtaW4tbW9uZ28tc3RyZWFtXFxhcHBcXGFwaVxcdXNlcnNcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xyXG5cclxubGV0IGNsaWVudDogTW9uZ29DbGllbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldENsaWVudCgpIHtcclxuICBpZiAoIWNsaWVudCkge1xyXG4gICAgaWYgKCFwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiREFUQUJBU0VfVVJMIGlzIG5vdCBzZXQgaW4geW91ciBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXCIpO1xyXG4gICAgfVxyXG4gICAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCk7XHJcbiAgICBhd2FpdCBjbGllbnQuY29ubmVjdCgpO1xyXG4gIH1cclxuICByZXR1cm4gY2xpZW50O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICBjb25zb2xlLmxvZygnR0VUIHJlcXVlc3QgcmVjZWl2ZWQ6JywgcmVxLnVybCk7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYkNsaWVudCA9IGF3YWl0IGdldENsaWVudCgpO1xyXG4gICAgY29uc3QgZGIgPSBkYkNsaWVudC5kYigpO1xyXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVXNlclwiKS5maW5kKCkudG9BcnJheSgpO1xyXG4gICAgY29uc29sZS5sb2coJ1VzZXJzIGZldGNoZWQ6JywgdXNlcnMubGVuZ3RoKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih1c2VycywgeyBzdGF0dXM6IDIwMCB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1c2VyczpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIHVzZXJzXCIgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcclxuICBjb25zb2xlLmxvZygnUE9TVCByZXF1ZXN0IHJlY2VpdmVkOicsIHJlcS51cmwpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJDbGllbnQgPSBhd2FpdCBnZXRDbGllbnQoKTtcclxuICAgIGNvbnN0IGRiID0gZGJDbGllbnQuZGIoKTtcclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coJ1JlcXVlc3QgYm9keTonLCBib2R5KTtcclxuXHJcbiAgICBjb25zdCBpbnNlcnRSZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiVXNlclwiKS5pbnNlcnRPbmUoYm9keSk7XHJcbiAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgZGIuY29sbGVjdGlvbihcIlVzZXJcIikuZmluZE9uZSh7IF9pZDogaW5zZXJ0UmVzdWx0Lmluc2VydGVkSWQgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnTmV3IHVzZXIgY3JlYXRlZDonLCBuZXdVc2VyKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihuZXdVc2VyLCB7IHN0YXR1czogMjAxIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSB1c2VyOlwiLCBlcnJvcik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJGYWlsZWQgdG8gY3JlYXRlIHVzZXJcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXE6IE5leHRSZXF1ZXN0KSB7XHJcbiAgY29uc29sZS5sb2coJ0RFTEVURSByZXF1ZXN0IHJlY2VpdmVkOicsIHJlcS51cmwpO1xyXG5cclxuICBjb25zdCBpZCA9IHJlcS5uZXh0VXJsLnNlYXJjaFBhcmFtcy5nZXQoJ2lkJyk7XHJcbiAgY29uc29sZS5sb2coJ1VzZXIgSUQgdG8gZGVsZXRlOicsIGlkKTtcclxuXHJcbiAgaWYgKCFpZCkge1xyXG4gICAgY29uc29sZS5lcnJvcignVXNlciBJRCBub3QgcHJvdmlkZWQnKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVXNlciBJRCBub3QgcHJvdmlkZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZGJDbGllbnQgPSBhd2FpdCBnZXRDbGllbnQoKTtcclxuICAgIGNvbnN0IGRiID0gZGJDbGllbnQuZGIoKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJVc2VyXCIpLmRlbGV0ZU9uZSh7IF9pZDogbmV3IE9iamVjdElkKGlkKSB9KTtcclxuICAgIFxyXG4gICAgaWYgKHJlc3VsdC5kZWxldGVkQ291bnQgPT09IDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1VzZXIgZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ1VzZXIgZGVsZXRlZCBzdWNjZXNzZnVsbHknIH0sIHsgc3RhdHVzOiAyMDAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdVc2VyIG5vdCBmb3VuZCcpO1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VzZXIgbm90IGZvdW5kJyB9LCB7IHN0YXR1czogNDA0IH0pO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIHVzZXI6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGYWlsZWQgdG8gZGVsZXRlIHVzZXInIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJNb25nb0NsaWVudCIsIk9iamVjdElkIiwiY2xpZW50IiwiZ2V0Q2xpZW50IiwicHJvY2VzcyIsImVudiIsIkRBVEFCQVNFX1VSTCIsIkVycm9yIiwiY29ubmVjdCIsIkdFVCIsInJlcSIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJkYkNsaWVudCIsImRiIiwidXNlcnMiLCJjb2xsZWN0aW9uIiwiZmluZCIsInRvQXJyYXkiLCJsZW5ndGgiLCJqc29uIiwic3RhdHVzIiwiZXJyb3IiLCJQT1NUIiwiYm9keSIsImluc2VydFJlc3VsdCIsImluc2VydE9uZSIsIm5ld1VzZXIiLCJmaW5kT25lIiwiX2lkIiwiaW5zZXJ0ZWRJZCIsIkRFTEVURSIsImlkIiwibmV4dFVybCIsInNlYXJjaFBhcmFtcyIsImdldCIsInJlc3VsdCIsImRlbGV0ZU9uZSIsImRlbGV0ZWRDb3VudCIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/users/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2Froute&page=%2Fapi%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Froute.ts&appDir=C%3A%5CApps%5CGitHub%5Cadmin-mongo-stream%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CApps%5CGitHub%5Cadmin-mongo-stream&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();