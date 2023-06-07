/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\nbody {\\n  display: grid;\\n  grid-template-rows: .5fr 5fr;\\n  grid-template-columns: 1.7fr 5fr;\\n  background-color: beige;\\n  height: 100vh;\\n}\\n\\n.top-bar {\\n  grid-area: 1 / 1 / 2 / 3;\\n  display: flex;\\n  justify-content: center;\\n  color: beige;\\n  font-size: 4rem;\\n  font-weight: 900;\\n  background-color: rgb(124, 233, 255);\\n  border-bottom: 4px solid rgb(71, 224, 255);\\n}\\n\\n.side-bar {\\n  grid-area: 2 / 1 / 3 / 2;\\n  display: flex;\\n  flex-direction: column;\\n  font-size: 2.5rem;\\n  font-weight: 700;\\n  border-right: 4px solid rgb(71, 224, 255);\\n}\\n\\n.tasks-title-container,\\n.project-title-container {\\n  display: grid;\\n  grid-template-columns: 1fr 1.4fr;\\n  align-items: center;\\n  margin: 1rem 1.5rem 2rem 1.5rem;\\n  padding-bottom: 1rem;\\n  border-bottom: .1rem solid black;\\n}\\n\\n.add-task-btn,\\n.add-project-btn {\\n  width: fit-content;\\n  height: fit-content;\\n  justify-self: end;\\n  font-size: 1.5rem;\\n  padding: .4rem;\\n  border-radius: 12px;\\n  color: beige;\\n  border: 3px solid rgb(71, 224, 255);\\n  background-color: rgb(124, 233, 255);\\n\\n}\\n\\n.add-task-btn:hover,\\n.add-project-btn:hover {\\n  border: 3px solid rgb(208, 208, 183);\\n  background-color: rgb(208, 208, 183);\\n}\\n\\n.side-bar>button {\\n  display: flex;\\n  justify-content: space-between;\\n  font-size: 1.7rem;\\n  font-weight: 700;\\n  padding: 1rem 3rem 1rem;\\n  border: none;\\n  background-color: beige;\\n\\n}\\n\\n.tasks-amount {\\n  color: beige;\\n  font-size: 1.3rem;\\n  background-color: rgb(124, 233, 255);\\n  padding: .3rem;\\n  border-radius: 50%;\\n}\\n\\n.side-bar>button:hover{\\n  background-color: rgb(208, 208, 183);\\n}\\n\\n.side-bar>button:focus {\\n  background-color: rgb(170, 255, 186);\\n}\\n\\n.tasks-container {\\n  display: grid;\\n  grid-template-rows: repeat(20,1fr);\\n  padding: 1rem;\\n  margin: 1rem;\\n  row-gap: 1rem;\\n  overflow-y: scroll\\n}\\n\\n/* width */\\n::-webkit-scrollbar {\\n  width: 10px;\\n}\\n\\n/* Track */\\n::-webkit-scrollbar-track {\\n  box-shadow: inset 0 0 5px rgb(71, 224, 255); \\n  border-radius: 10px;\\n}\\n \\n/* Handle */\\n::-webkit-scrollbar-thumb {\\n  background: rgb(71, 224, 255); \\n  border-radius: 10px;\\n}\\n\\n/* Handle on hover */\\n::-webkit-scrollbar-thumb:hover {\\n  background: rgb(71, 224, 255); \\n}\\n\\n.task-div {\\n  display: grid;\\n  height: 3.5rem;\\n  grid-template-columns: .1fr 1fr 4fr 1fr 1fr 1fr 1fr;\\n  background-color: rgb(228, 228, 206);\\n  border-radius: 8px 0 0 8px;\\n}\\n\\ninput[type=checkbox] {\\n  width: 2rem;\\n  margin-left: 2rem;\\n  accent-color:  rgb(182, 246, 182);\\n}\\n\\n.task-title {\\n  font-size: 1.2rem;\\n  font-weight: 700;\\n  align-self: center;\\n}\\n\\n.detail-btn {\\n  width: fit-content;\\n  height: fit-content;\\n  align-self: center;\\n  font-size: 1rem;\\n  font-weight: 500;\\n  padding: .5rem 1rem;\\n  border-radius: 5px;\\n  border: 2px solid black;\\n  background-color: rgb(231, 231, 206);\\n}\\n\\n.detail-btn:hover {\\n  background-color: rgb(180, 180, 157);\\n}\\n\\n.task-date {\\n  align-self: center;\\n}\\n\\n.edit-btn,\\n.remove-btn {\\n  width: fit-content;\\n  height: fit-content;\\n  align-self: center;\\n  background-color: rgb(231, 231, 206);\\n  border: none;\\n}\\n\\n.remove-btn {\\n  justify-self: center;\\n}\\n\\n.edit-btn:hover,\\n.remove-btn:hover {\\n  background-color: rgb(180, 180, 157);\\n  border-radius: 5px;\\n}\\n\\n.edit-image,\\n.remove-image {\\n  width: 2.3rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allTask: () => (/* binding */ allTask),\n/* harmony export */   allTaskAmount: () => (/* binding */ allTaskAmount),\n/* harmony export */   tasksContainer: () => (/* binding */ tasksContainer)\n/* harmony export */ });\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _assets_icons_edit_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/edit-icon.svg */ \"./src/assets/icons/edit-icon.svg\");\n/* harmony import */ var _assets_icons_remove_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/remove-icon.svg */ \"./src/assets/icons/remove-icon.svg\");\n\n\n\n\nconst tasksContainer = document.createElement('div');\ntasksContainer.classList.add('tasks-container');\n\nconst allTaskAmount = document.createElement('div');\nallTaskAmount.classList.add('tasks-amount');\n\n// function todayTask\n\nfunction allTask() {\n  for (let i = 0; i < _tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\n    const taskDiv = document.createElement('div');\n    taskDiv.classList.add('task-div');\n    tasksContainer.appendChild(taskDiv);\n\n    const priorityDiv = document.createElement('div');\n    if (_tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].priority === 1) {\n      priorityDiv.style.backgroundColor = '#fc7272';\n    }\n    if (_tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].priority === 2) {\n      priorityDiv.style.backgroundColor = '#ffb773';\n    }\n    if (_tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].priority === 3) {\n      priorityDiv.style.backgroundColor = '#66ce66';\n    }\n    priorityDiv.style.borderRadius = '8px 0px 0px 8px';\n    taskDiv.appendChild(priorityDiv);\n\n    const taskCheckbox = document.createElement('input');\n    taskCheckbox.classList.add('task-checkbox');\n    taskCheckbox.setAttribute('type', 'checkbox');\n    taskDiv.appendChild(taskCheckbox);\n\n    const taskTitle = document.createElement('div');\n    taskTitle.classList.add('task-title');\n    taskDiv.appendChild(taskTitle);\n    taskTitle.innerText = _tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].title;\n\n    const detailsBtn = document.createElement('button');\n    detailsBtn.classList.add('detail-btn');\n    taskDiv.appendChild(detailsBtn);\n    detailsBtn.innerText = 'Details';\n\n    const taskDate = document.createElement('div');\n    taskDate.classList.add('task-date');\n    taskDiv.appendChild(taskDate);\n    taskDate.innerText = _tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].date;\n\n    const editBtn = document.createElement('button');\n    editBtn.classList.add('edit-btn');\n    taskDiv.appendChild(editBtn);\n    const editImg = document.createElement('img');\n    editImg.classList.add('edit-image');\n    editBtn.appendChild(editImg);\n    editImg.src = _assets_icons_edit_icon_svg__WEBPACK_IMPORTED_MODULE_1__;\n\n    const removeBtn = document.createElement('button');\n    removeBtn.classList.add('remove-btn');\n    taskDiv.appendChild(removeBtn);\n    const removeImg = document.createElement('img');\n    removeImg.classList.add('remove-image');\n    removeBtn.appendChild(removeImg);\n    removeImg.src = _assets_icons_remove_icon_svg__WEBPACK_IMPORTED_MODULE_2__;\n\n    allTaskAmount.innerText = _tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length;\n  }\n  console.log('test', _tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length);\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/function.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function */ \"./src/function.js\");\n\n\n\nconst body = document.getElementsByTagName('body')[0];\n// Top Bar\nconst topBar = document.createElement('div');\ntopBar.classList.add('top-bar');\nbody.appendChild(topBar);\ntopBar.innerText = 'TO DO LIST';\n// Side Bar\nconst sideBar = document.createElement('div');\nsideBar.classList.add('side-bar');\nbody.appendChild(sideBar);\n// Side Bar Content\nconst tasksTitleContainer = document.createElement('div');\ntasksTitleContainer.classList.add('tasks-title-container');\nsideBar.appendChild(tasksTitleContainer);\n// Tasks Title\nconst tasksTitle = document.createElement('div');\ntasksTitle.classList.add('tasks-title');\ntasksTitleContainer.appendChild(tasksTitle);\ntasksTitle.innerText = 'Tasks';\n// Add Task Button\nconst addTaskBtn = document.createElement('button');\naddTaskBtn.classList.add('add-task-btn');\ntasksTitleContainer.appendChild(addTaskBtn);\naddTaskBtn.innerText = 'Add Tasks';\n// All Task Button\nconst allTaskBtn = document.createElement('button');\nallTaskBtn.classList.add('home-btn');\nsideBar.appendChild(allTaskBtn);\nallTaskBtn.innerText = 'All Tasks';\nallTaskBtn.appendChild(_function__WEBPACK_IMPORTED_MODULE_1__.allTaskAmount);\n// Today Button\nconst todayBtn = document.createElement('button');\ntodayBtn.classList.add('today-btn');\nsideBar.appendChild(todayBtn);\ntodayBtn.innerText = 'Today';\n// Week Button\nconst weekBtn = document.createElement('button');\nweekBtn.classList.add('week-btn');\nsideBar.appendChild(weekBtn);\nweekBtn.innerText = 'Next 7 Day';\n// Project Title Container\nconst projectTitleContainer = document.createElement('div');\nprojectTitleContainer.classList.add('project-title-container');\nsideBar.appendChild(projectTitleContainer);\n// Projects Title\nconst projectsTitle = document.createElement('div');\nprojectsTitle.classList.add('projects-title');\nprojectTitleContainer.appendChild(projectsTitle);\nprojectsTitle.innerText = 'Projects';\n// Add Project Button\nconst addProjectBtn = document.createElement('button');\naddProjectBtn.classList.add('add-project-btn');\nprojectTitleContainer.appendChild(addProjectBtn);\naddProjectBtn.innerText = 'Add Project';\n// Projects Container\nconst projectsContainer = document.createElement('div');\nprojectsContainer.classList.add('projects-container');\nsideBar.appendChild(projectsContainer);\n// Tasks container\n// const tasksContainer = document.createElement('div');\n// tasksContainer.classList.add('tasks-container');\nbody.appendChild(_function__WEBPACK_IMPORTED_MODULE_1__.tasksContainer);\n\n(0,_function__WEBPACK_IMPORTED_MODULE_1__.allTask)();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tasksArray = [\n  {\n    title: 'Wake up',\n    description: 'get out of bed and brush your teeth and face',\n    date: '2023-06-08',\n    priority: 2,\n  },\n  {\n    title: 'Breakfast',\n    description: '125g of oats and 20g of almonds',\n    date: '2023-06-08',\n    priority: 3,\n  },\n  {\n    title: 'Go grocery shopping',\n    description: 'Buy milk, eggs, and bread',\n    date: '2023-06-08',\n    priority: 2,\n  },\n  {\n    title: 'Clean the house',\n    description: 'Vacuum, wash dishes',\n    date: '2023-06-10',\n    priority: 1,\n  },\n  {\n    title: 'Prepare the presentation',\n    description: 'Gather data, create slides',\n    date: '2023-06-12',\n    priority: 3,\n  },\n  {\n    title: 'Exercise',\n    description: 'Run for 30 minutes',\n    date: '2023-06-07',\n    priority: 2,\n  },\n  {\n    title: 'Call the dentist',\n    description: 'Schedule an appointment',\n    date: '2023-06-09',\n    priority: 1,\n  },\n  {\n    title: 'Pay the bills',\n    description: 'Electricity, water, gas',\n    date: '2023-06-15',\n    priority: 2,\n  },\n  {\n    title: 'Study for the exam',\n    description: 'Read chapter 5',\n    date: '2023-06-13',\n    priority: 3,\n  },\n  {\n    title: 'Organize the trip',\n    description: 'Book hotel, buy tickets',\n    date: '2023-06-20',\n    priority: 1,\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasksArray);\n\n\n//# sourceURL=webpack://to-do-list/./src/tasks.js?");

/***/ }),

/***/ "./src/assets/icons/edit-icon.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/edit-icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"edit-icon.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/icons/edit-icon.svg?");

/***/ }),

/***/ "./src/assets/icons/remove-icon.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/remove-icon.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"remove-icon.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/icons/remove-icon.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;