"use strict";
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
exports.id = "pages/api/form";
exports.ids = ["pages/api/form"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./middleware/middleware.js":
/*!**********************************!*\
  !*** ./middleware/middleware.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst connectDb = (handler)=>async (req, res)=>{\n        if (mongoose.connections[0].readyState) {\n            return handler(req, res);\n        }\n        await mongoose.connect(process.env.MONGO_URI);\n        return handler(req, res);\n    };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlL21pZGRsZXdhcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLE1BQU1DLFlBQVlDLENBQUFBLFVBQVUsT0FBTUMsS0FBSUM7UUFDcEMsSUFBR0wsU0FBU00sV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsWUFBVztZQUNwQyxPQUFPSixRQUFRQyxLQUFJQztRQUVyQjtRQUNBLE1BQU1MLFNBQVNRLFFBQVFDLFFBQVFDLElBQUlDO1FBRW5DLE9BQU9SLFFBQVFDLEtBQUlDO0lBQ3JCO0FBQ0EsaUVBQWVILFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWdlci8uL21pZGRsZXdhcmUvbWlkZGxld2FyZS5qcz85NDg3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuXHJcbmNvbnN0IGNvbm5lY3REYiA9IGhhbmRsZXIgPT5hc3luYyhyZXEscmVzKT0+e1xyXG4gIGlmKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpe1xyXG4gICAgcmV0dXJuIGhhbmRsZXIocmVxLHJlcylcclxuXHJcbiAgfVxyXG4gIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJKVxyXG5cclxuICByZXR1cm4gaGFuZGxlcihyZXEscmVzKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REYlxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiY29ubmVjdERiIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./middleware/middleware.js\n");

/***/ }),

/***/ "(api)/./models/Form.js":
/*!************************!*\
  !*** ./models/Form.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst FormSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    img_path: String\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Form) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Form\", FormSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvRm9ybS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZUUsQ0FBQztJQUVuQ0MsVUFBU0M7QUFDYixHQUFFO0lBQUNDLFlBQVc7QUFBSTtBQUVsQixpRUFBZUwsNkRBQW9CTyxJQUFJUCxxREFBY1EsQ0FBQyxRQUFPUCxXQUFXQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1nZXIvLi9tb2RlbHMvRm9ybS5qcz9hODY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcbmNvbnN0IEZvcm1TY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgXHJcbiAgICBpbWdfcGF0aDpTdHJpbmcsXHJcbn0se3RpbWVzdGFtcHM6dHJ1ZX1cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWxzLkZvcm0gfHwgbW9uZ29vc2UubW9kZWwoXCJGb3JtXCIsRm9ybVNjaGVtYSlcclxuXHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkZvcm1TY2hlbWEiLCJTY2hlbWEiLCJpbWdfcGF0aCIsIlN0cmluZyIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJGb3JtIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Form.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/form.js":
/*!*******************************!*\
  !*** ./src/pages/api/form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/Form */ \"(api)/./models/Form.js\");\n/* harmony import */ var _middleware_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../middleware/middleware */ \"(api)/./middleware/middleware.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nconst handler = async (req, res)=>{\n    if (req.method == \"POST\") {\n        new _models_Form__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            img_path: req.body.img_path\n        }).save();\n        res.status(200).json(\"recived\", req);\n    } else {\n        res.status(200).json(\"only post applied\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_middleware__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2Zvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkVBQTZFO0FBQ3RDO0FBQ2U7QUFFdEQsTUFBTUUsVUFBUyxPQUFNQyxLQUFJQztJQUN2QixJQUFHRCxJQUFJRSxVQUFVLFFBQU87UUFDdkIsSUFBSUwsb0RBQUlBLENBQUM7WUFBQ00sVUFBU0gsSUFBSUksS0FBS0Q7UUFBUSxHQUFHRTtRQUN0Q0osSUFBSUssT0FBTyxLQUFLQyxLQUFLLFdBQVVQO0lBQ2pDLE9BQ0k7UUFDRkMsSUFBSUssT0FBTyxLQUFLQyxLQUFLO0lBQ3ZCO0FBRUY7QUFJQSxpRUFBZ0JULGtFQUFTQSxDQUFDQyxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1nZXIvLi9zcmMvcGFnZXMvYXBpL2Zvcm0uanM/YTQ1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IEZvcm0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9Gb3JtXCJcbmltcG9ydCBjb25uZWN0RGIgZnJvbSBcIi4uLy4uLy4uL21pZGRsZXdhcmUvbWlkZGxld2FyZVwiXG5cbmNvbnN0IGhhbmRsZXI9IGFzeW5jKHJlcSxyZXMpPT57XG4gIGlmKHJlcS5tZXRob2QgPT0gXCJQT1NUXCIpe1xuICAgbmV3IEZvcm0oe2ltZ19wYXRoOnJlcS5ib2R5LmltZ19wYXRofSkuc2F2ZSgpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKFwicmVjaXZlZFwiLHJlcSlcbiAgfVxuICBlbHNle1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKFwib25seSBwb3N0IGFwcGxpZWRcIilcbiAgfVxuICBcbn1cbiBcblxuXG5leHBvcnQgZGVmYXVsdCAgY29ubmVjdERiKGhhbmRsZXIpXG4iXSwibmFtZXMiOlsiRm9ybSIsImNvbm5lY3REYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJpbWdfcGF0aCIsImJvZHkiLCJzYXZlIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/form.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/form.js"));
module.exports = __webpack_exports__;

})();