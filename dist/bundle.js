/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    font-size: 20px;
}

body {
    padding: 0;
    margin: 0;
}

.invisible {
    display: none;
}

.hidden {
    visibility: hidden;
}

/* MAIN DISPLAY*/
.container {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border: 1px solid cyan;
    width: clamp(300px, 100vw, 1000px);
    height: 100vh;
    overflow: scroll;
}

.display-header {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    height: 100px;
    background-color: gainsboro;
}

.left-panel, .right-panel {
    width: 100%;
}

.add-button {
    filter: invert(100%) sepia(100%) saturate(10000%) hue-rotate(80deg);
}

.projects-button, .add-button {
    width: 20vw;
    height: 20vw;
}

/* PROJECT TILE */
.project-tile {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 15vh;
    width: 100%;
    border: 1px solid green;
}

.project-name {
    font-size: 1.25rem;
    overflow-wrap: break-word;
}

.edit-project {
    margin: 3vw;
}

.project-tile:hover {
    background-color: aquamarine;
}

/* TODO TILE */
.todo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    border: 1px solid green;
}

.todo-text-container {
    width: 60%;
    overflow-wrap: break-word;
}

.todo-btns-container {
    display: flex;
    gap: 20px;
}

/* BUTTONS */
.edit-project, .delete-project, .dialog-close-button, .view-btn, .delete-btn, .is-done-btn, .edit-btn, .submit-button {
    width: 15vw;
    height: 15vw;
}

.edit-project:hover, .delete-project:hover, .dialog-close-button:hover, .view-btn:hover, .delete-btn:hover, .is-done-btn:hover, .edit-btn:hover, .submit-button:hover, .projects-button:hover, .add-button:hover {
    filter: drop-shadow(3px 3px 3px red);
}

/* DIALOG */
.dialog {
    position: relative;
    width: 98vw;
    height: 90vh;
    padding: 10px;
    border-radius: 10px;
}

.form-content {
    max-width: 90vw;
}

.dialog-close-container {
    text-align: right;
}

.dialog::backdrop {
    background: rgba(0, 0, 0, 0.85)
}

.isproject {
    width: 95vw;
    height: 30vh;
}

.counter {
    position: absolute;
    top: 10vw;
    left: 10vw;
    font-size: 1.25rem;
    color: goldenrod;
}

.overcap {
    color: red;
}

.submit-disabled {
    filter: invert(50%);
}

/* PROJECT DIALOG */
.project-name-input {
    border: 1px solid red;
    padding: 5px 5px 5px 10px;
    border-radius: 10px;
    margin-top: 2vw;
}

.description-view {
    font-style: italic;
}

.btn-container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: 5vw;
}

.new-project-submit {
    /* float: right; */
}

/* EDIT or NEW TODO DIALOG */
.todo-dialog-container {
    padding: 3vw;
}

.form-input {
    border: 1px solid red;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 3vw;
    padding: 5px 0 5px 10px;
}

textarea.notes {
    height: 35vh;
    padding-right: 5px;
}

.new-todo-submit, .edit-todo-submit {
    float: right;
    margin-right: 3vw;
}

/* VIEW TODO DIALOG */
.todo-view-container {
    padding: 3vw;
}

.description-view {
    height: 15vh;
    border: 1px solid green;
}

.notes-view {
    height: 20vh;
    border: 1px solid green;
    overflow-wrap: break-word;
    overflow-y: scroll;
}

.description-view, .notes-view {
    padding: 5px;
}

.buttons-container {
    display: flex;
    justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA,gBAAgB;AAChB;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,sBAAsB;IACtB,kCAAkC;IAClC,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,MAAM;IACN,aAAa;IACb,8BAA8B;IAC9B,aAAa;IACb,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,mEAAmE;AACvE;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,4BAA4B;AAChC;;AAEA,cAAc;AACd;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA,YAAY;AACZ;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA,WAAW;AACX;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI;AACJ;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,mBAAmB;AACvB;;AAEA,mBAAmB;AACnB;IACI,qBAAqB;IACrB,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA,4BAA4B;AAC5B;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,WAAW;IACX,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA,qBAAqB;AACrB;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC","sourcesContent":["* {\n    box-sizing: border-box;\n    font-size: 20px;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n}\n\n.invisible {\n    display: none;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n/* MAIN DISPLAY*/\n.container {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    margin: 0 auto;\n    border: 1px solid cyan;\n    width: clamp(300px, 100vw, 1000px);\n    height: 100vh;\n    overflow: scroll;\n}\n\n.display-header {\n    position: sticky;\n    top: 0;\n    display: flex;\n    justify-content: space-between;\n    padding: 10px;\n    height: 100px;\n    background-color: gainsboro;\n}\n\n.left-panel, .right-panel {\n    width: 100%;\n}\n\n.add-button {\n    filter: invert(100%) sepia(100%) saturate(10000%) hue-rotate(80deg);\n}\n\n.projects-button, .add-button {\n    width: 20vw;\n    height: 20vw;\n}\n\n/* PROJECT TILE */\n.project-tile {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    height: 15vh;\n    width: 100%;\n    border: 1px solid green;\n}\n\n.project-name {\n    font-size: 1.25rem;\n    overflow-wrap: break-word;\n}\n\n.edit-project {\n    margin: 3vw;\n}\n\n.project-tile:hover {\n    background-color: aquamarine;\n}\n\n/* TODO TILE */\n.todo {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px 10px;\n    border: 1px solid green;\n}\n\n.todo-text-container {\n    width: 60%;\n    overflow-wrap: break-word;\n}\n\n.todo-btns-container {\n    display: flex;\n    gap: 20px;\n}\n\n/* BUTTONS */\n.edit-project, .delete-project, .dialog-close-button, .view-btn, .delete-btn, .is-done-btn, .edit-btn, .submit-button {\n    width: 15vw;\n    height: 15vw;\n}\n\n.edit-project:hover, .delete-project:hover, .dialog-close-button:hover, .view-btn:hover, .delete-btn:hover, .is-done-btn:hover, .edit-btn:hover, .submit-button:hover, .projects-button:hover, .add-button:hover {\n    filter: drop-shadow(3px 3px 3px red);\n}\n\n/* DIALOG */\n.dialog {\n    position: relative;\n    width: 98vw;\n    height: 90vh;\n    padding: 10px;\n    border-radius: 10px;\n}\n\n.form-content {\n    max-width: 90vw;\n}\n\n.dialog-close-container {\n    text-align: right;\n}\n\n.dialog::backdrop {\n    background: rgba(0, 0, 0, 0.85)\n}\n\n.isproject {\n    width: 95vw;\n    height: 30vh;\n}\n\n.counter {\n    position: absolute;\n    top: 10vw;\n    left: 10vw;\n    font-size: 1.25rem;\n    color: goldenrod;\n}\n\n.overcap {\n    color: red;\n}\n\n.submit-disabled {\n    filter: invert(50%);\n}\n\n/* PROJECT DIALOG */\n.project-name-input {\n    border: 1px solid red;\n    padding: 5px 5px 5px 10px;\n    border-radius: 10px;\n    margin-top: 2vw;\n}\n\n.description-view {\n    font-style: italic;\n}\n\n.btn-container {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    margin-top: 5vw;\n}\n\n.new-project-submit {\n    /* float: right; */\n}\n\n/* EDIT or NEW TODO DIALOG */\n.todo-dialog-container {\n    padding: 3vw;\n}\n\n.form-input {\n    border: 1px solid red;\n    border-radius: 10px;\n    width: 100%;\n    margin-bottom: 3vw;\n    padding: 5px 0 5px 10px;\n}\n\ntextarea.notes {\n    height: 35vh;\n    padding-right: 5px;\n}\n\n.new-todo-submit, .edit-todo-submit {\n    float: right;\n    margin-right: 3vw;\n}\n\n/* VIEW TODO DIALOG */\n.todo-view-container {\n    padding: 3vw;\n}\n\n.description-view {\n    height: 15vh;\n    border: 1px solid green;\n}\n\n.notes-view {\n    height: 20vh;\n    border: 1px solid green;\n    overflow-wrap: break-word;\n    overflow-y: scroll;\n}\n\n.description-view, .notes-view {\n    padding: 5px;\n}\n\n.buttons-container {\n    display: flex;\n    justify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/checkbox-blank.png":
/*!***************************************!*\
  !*** ./src/images/checkbox-blank.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/checkbox-marked.png":
/*!****************************************!*\
  !*** ./src/images/checkbox-marked.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/close-box-outline.png":
/*!******************************************!*\
  !*** ./src/images/close-box-outline.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/eye-outline.png":
/*!************************************!*\
  !*** ./src/images/eye-outline.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/floppy-disk.png":
/*!************************************!*\
  !*** ./src/images/floppy-disk.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/menu.png":
/*!*****************************!*\
  !*** ./src/images/menu.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/pen.png":
/*!****************************!*\
  !*** ./src/images/pen.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAAXNSR0IArs4c6QAAEZxJREFUeF7tnVnIfVUZxh8vpIFIgqAyabKIsCgtMYfU5gGvIuqigagI1CJtoLIBJbOIsMnqIggC66KBLqQybLKy0QyTBjS0IpoxLIwuSjsvfse+//l/5+w1j79981186117rd/7Ps9aZ5999j5CHBCAwLQEjph25kwcAhAQBkARQGBiAhjAxMln6hDAAKgBCExMAAOYOPlMHQIYADUAgYkJYAATJ5+pQwADoAYgMDEBDGDi5DN1CGAA1AAEJiaAAUycfKYOAQyAGoDAxAQwgImTz9QhgAFQAxCYmAAGMHHymToEMABqAAITE8AAJk4+U4cABkANQGBiAhjAxMln6hDAAKgBCExMAAOYOPlMHQIYADUAgYkJYAATJ5+pQwADoAYgMDEBDGDi5DN1CGAA1AAEJiaAAUycfKYOAQyAGoDAxAQwgImTz9QhgAFQAxCYmAAGMHHymToEMABqYHQCp0l6jqSTJT1S0kMk/U7STZKukXSFpGtHh7BtfhjArJkff97HS7pU0pkOUzUTOE/SzQ5th2qCAQyVTiazR+CNki6RdKQHkdslvVzS5z1ium+KAXSfQiawQeBjks6OoHK+pA9GxHcVigF0lS4Gu0AgVvzr7qcxAQwATY1CIJX4pzIBDGCU8p97HqnFP40JYABzC2eE2ecS/5rNOZI+PgKog+aAAYya2TnmlVv8w5sABjCHUEacZSnxD20CGMCI0hh/TqXFP6wJYADji2W0GdYS/5AmgAGMJo+x51Nb/MOZAAYwtmBGml0r4h/KBDCAkSQy7lxaE/8wJoABjCuaUWbWqviHMAEMYBSZjDmP1sXfvQlgAGMKZ4RZ9SL+rk0AAxhBKuPNoTfxd2sCGMB44ul9Rr2Kv0sTwAB6l8tY4+9d/N2ZAAYwloB6ns0o4u/KBDCAniUzzthHE383JoABjCOiXmcyqvjX+Xjl6lHkn2w1ORhAq5mZY1yji9+yeKekV7VqAhjAHEJrcZYziH/NvVkTwABalMb4Y5pJ/E2bAAYwvtham+GM4m/WBDCA1uQx9nhmFv9+E3jZ6j2Fl7eQagyghSzMMYbLJJ07x1SdZnmKpO87tczYCAPICJeu7ybAyn94MVzt+OLSrGWEAWTFS+eSWPm3l8GTJP2kZpVgADXpj39uVv7dOX6PpAtqlgEGUJP+2Odm5V/O748knbTcLF8LDCAf25l7ZuV3y/6fJT3QrWmeVhhAHq4z9/oRSa+ZGYDn3KtqsOrJPUHRvH0CrPx+OfqjpKP9QtK2xgDS8py5N1Z+/+x/T9Kp/mHpIjCAdCxn7omVPyz7F63CLgwLTROFAaThOHMvrPzh2T9O0i/Cw+MjMYB4hjP3wMofnv1PS3pJeHiaSAwgDccZe2HlD8/6rZIeJ+kP4V2kicQA0nCcrRdW/vCM28NBnifpyvAu0kViAOlYztIT4g/P9B2SXiHpU+FdpI3EANLynKG3SyWdP8NEM8zxhZI+l6Hf4C4xgGB0UwdiAv7pf4Mk49bUgQE0lY6uBvMBSed1NeJ6g63+ff+2qWMA9YpihDNjAstZ/KKk5y83q9MCA6jDfaSzYgLbs3mLpMdL+merCccAWs1MX+PimsDB+TpR0rUtpxIDaDk79cZmT6q5TdJ7PYbATuBQWB+W9DoPflWaYgBVsDd9UhP/W/ZG+FZMIChX9n3/MZLs575NHxhA0+kpPrhLJJno9x++JsDHAekHkk4unr2AE2IAAdAGDTlI/OupYgJ+Sf+CpBf4hdRpjQHU4d7aWfdv+7eNzdcEZr4m0PRXf/sTjAG0JsXy43ERf+hOYFYTuFHSo8un0v+MGIA/s5Eidm37U+0EZr0mUP2lHy6FigG4UBqzjc/Kv0mAjwPLNXGVpGctN6vbAgOoy7/W2WPEz8cB96zZ7/6/4t68fEsMoDzz2mdMIX5MwC2Ldh/AE1u+HwADcEvkKK1CPvMvzd3348Bs1wR+KumMVn8PgAEslfc4/0+58nNNwK8uvivp2ZL+5ReWvzUGkJ9xC2fIsfLHmsBsO4HvSHqupNtbKIj1GDCAlrKRZyw5V/5YE5jtPgG7Rdh2Av/Ik2r/XjEAf2Y9RZQUPxcG3Srjx5Ke3so1AQzALWk9tqohfkzArVLsnYBmAv92a56vFQaQj23NnmuKHxNwy7y9F+AsSf91a56nFQaQh2vNXlsQPybgVgGXS3qpW9M8rTCAPFxr9dqS+DEBtyq4TNJr3Zqmb4UBpGdaq8cSX/WFzq2Hm4U+KunnkuzNR6WP90l6c+mT2vkwgBrU05+zxZV/c5a+JlDyK8JPrF7U+eq9AZ9dyQReJOmz6Utjd48YQGni6c/X8sofawIlbhb60AEvODlHku0ISh52g9Dxkm4qeVIMoCTt9OfqYeWPNYGcO4Fdn79r7ARukHSCpP+kL5WDe8QASpFOf54exb+m0MLHATOW1y+kpcZO4F2S3pm+XDCAUkxLnKdn8bdgAu9f3ZP/JsdEld4J2FuEHrp6p8DfHccX1YwdQBS+KsE9feZfAlRjJ2AvO9l89PnSOEvvBHy5LI1/6/8xgGB0VQJHWPlrXhPwWfk3x1lyJ/BDSU8uUWEYQAnKac4x0spfwwTevbq49vbIVJwryS4cljiOKvGrQQygRCrjzzHiyl/SBOzzvq3+KY5SOwF7lNh1KQa8qw8MIDfh+P5HXvljTcDlPoHUn6fvL+l6SUfHp3ZnD6evfjFoDxHJemAAWfFGdz7Dyh9rArvuE0i58ts4Tfz2eK8SL/14gKS/RFfQQgcYQG7C4f3PtPLHmsBBOwH7jt/MIdVhgvympMek6nBHPzdLOrbAefgtQAnIAeeYceWPNYH9OwH7dV3Ki3UmfnuIxyMCchkScuHqdzoXhQT6xrAD8CWWv71drb4g/2m6OIPv53fbCfxWkt3fn+p40N7KX2Lbb2O2pwSZ0dg7BbIfGEB2xF4nYOU/HJevCXgBX2hceuW34Vy8ekrQO1JOYldfGEAp0svnmfkz/xKdGibw4L2V/1FLg0v4/1skPbbk+wMwgITZi+iKlX8ZXkkTMPFfs3dP/vLI0rS4Q5K9UdjeJFTswACKod56IlZ+9xyUMAET/9WlrsLvm3rqryydqGIATpiyNWLl90eb0wRqrPxG4DOrB4G82B9FfAQGEM8wtAdW/lByd/2az37Vl/Iw8duddw9P2alDX19f3Vz0DId2WZpgAFmwLnbKyr+IaGeD1AZgv7+3bb/9LXnYW4LOLHnRb3NyGEDJdN91Llb+OOapxW8r/rclHRM3LO/on61M56mSbvWOTBiAASSE6dAVK78DpB1NUovfVny72m/b/5LHrySdWlv8NmEMoFzaWfnjWKcWv91rb9v+0uL/5er+gjMk/TUOR5poDCANx6VeWPmXCO3+f2rx2622tu0vLf5fSzqlFfGzA4grStdoVn5XUge3Sy1+u7PPVn67x7/kcePeyv+nkiddOhc7gCVCcf9n5Y/jl1r8tvLbr/rsHv+Sh638T5HUlPjZAeQtAcQfxxfxx/FzimYH4ITJuxHi90Z2SEBq8dtPeW3bz8q/kRcMIK5QD4pG/HFMc4jfHuNlj/MqefxG0sktbvv3Q8AA0pYE4o/jOZL47TP/7+Nw5I/GANIxRvxxLBF/HL+gaAwgCNthQYg/jmNq8R+3usf+W5W2/V2s/Ot0YQBxhWvRiD+OYQ7x26/67hc3LO9o+8zflfhthhiAd54PCUD8cfwQfxy/6GgMIBwh4g9nZ5GIP45fkmgMIAwj4g/jto5KLf4nSPoG237/pGAA/swQvz+z/RE5xG83+dw3blje0fYVn33P3/xXfbtmhgH45R3x+/HabD2S+O2Cn1346/rAANzTh/jdWR3UEvHH8csSjQG4YUX8bpy2tUot/hMlfa3Stn+IlX+dKAxgubAR/zKjXS1yiN8u+N0nblje0fZZfyjxGwEMYHcdIH5vnRwSgPjj+GWPxgC2I0b8ceWH+OP4FYnGAA7GjPjjyi+1+O05el+tsO23J/jYV33dX+3flk4M4HAyiL898dsFv3vFDcs72sRvn/ntcV7DHhjAoalF/HGlnmPlR/xxOdkZjQH8Hw/ijys0xB/Hr0o0BnAXdsQfV36pxW/vy/sy2/64pLhEYwCI36VOdrXJIf4rV6Z8j9iBecZP8Zl/k8nsBsDK76mSjeaIP45f9eiZDQDxx5XfKOK3d/TZ14xDX+3flupZDQDxtyX+Z0q6osK238R/uiR7W++Ux4wGgPjjSj31ym/i/5KkI+OG5R09vfiN2GwGcLGkt3mXCgFrAqnFb/3ayn9WYcR/27vJZ9qVf817JgNg5Y9TWQ7x24juubcDeFrc8JyjWfn3oZrFABC/sz4ObJhL/OuTlTIBxL+R3hkMAPG3Lf5SJoD4D6iD0Q0A8fch/v0mcNXqaT+nxQ37sGjEvwXoyAaA+ONUlHvbv21099776W8qE7hV0qkzf9W3qwxGNQDE36f416NOZQImfvtdwQ1xOMaNHtEAEH9cvdZa+TdHHWsCiN+hDkYzAMTvkPQdTVoR//6dgD0A9CTPaSF+R2AjGQDid0z6lmatiX89THv6rz0UxNUEEL9HHYxiAIjfI+kHNG1V/L4mgPg962AEA0D8nknfaN66+F1NAPEH1EHvBoD4A5K+L6QX8S+ZwG179/Zztd+zHno2AMTvmexOV/7NWdo1AXsb8Al7/zDx2+8IrovDMWd0rwaA+OPqtbeVf3O2R61+x2/fDhyL+OMKoUcD4Ce9cTnvXfzr2ZsJPEzS9XE45o7uzQBY+ePqdRTxx1Eg+m4CPRkA4o8rXMQfx2/I6F4MAPHHlR/ij+M3bHQPBoD448oP8cfxGzq6dQNA/HHlh/jj+A0f3bIBIP648kP8cfymiG7VABB/XPkh/jh+00S3aACIP678EH8cv6miWzMAxB9Xfog/jt900S0ZAOKPKz/EH8dvyuhWDADxx5Uf4o/jN210CwaA+OPKD/HH8Zs6ugUDuHPqDMRNHvHH8Zs+GgPotwQQf7+5a2bkGEAzqfAaCOL3wkXjbQQwgP5qA/H3l7NmR4wBNJuaAweG+PvKV/OjxQCaT9HdA0T8/eSqm5FiAH2kCvH3kafuRokBtJ8yxN9+jrodIQbQduoQf9v56X50GEC7KUT87eZmmJFhAG2mEvG3mZfhRoUBtJdSxN9eToYdEQbQVmoRf1v5GH40GEA7KUb87eRimpFgAG2kGvG3kYfpRoEB1E854q+fg2lHgAHUTT3ir8t/+rNjAPVKAPHXY8+Z9whgAHVKAfHX4c5ZNwhgAOVLAvGXZ84ZtxDAAMqWBuIvy5uzLRDAAMqVCOIvx5ozORLAABxBRTZD/JEACc9DAAPIw3V/r4g/P2POEEgAAwgE5xiG+B1B0awOAQwgH3fEn48tPScigAEkArnRDeLPw5VeExPAABIDlYT40zOlx0wEMIC0YBF/Wp70lpkABpAOMOJPx5KeChHAANKARvxpONJLYQIYQDxwxB/PkB4qEcAA4sAj/jh+RFcmgAGEJwDxh7MjshECGEBYIhB/GDeiGiOAAfgnBPH7MyOiUQIYgF9iEL8fL1o3TgADcE8Q4ndnRctOCGAAbolC/G6caNUZAQxgOWGIf5kRLTol0IIBdIqOYUOgfwIYQP85ZAYQCCaAAQSjIxAC/RPAAPrPITOAQDABDCAYHYEQ6J8ABtB/DpkBBIIJYADB6AiEQP8EMID+c8gMIBBMAAMIRkcgBPongAH0n0NmAIFgAhhAMDoCIdA/AQyg/xwyAwgEE8AAgtERCIH+CWAA/eeQGUAgmAAGEIyOQAj0TwAD6D+HzAACwQQwgGB0BEKgfwIYQP85ZAYQCCaAAQSjIxAC/RPAAPrPITOAQDABDCAYHYEQ6J8ABtB/DpkBBIIJYADB6AiEQP8EMID+c8gMIBBMAAMIRkcgBPongAH0n0NmAIFgAhhAMDoCIdA/AQyg/xwyAwgEE8AAgtERCIH+CWAA/eeQGUAgmAAGEIyOQAj0TwAD6D+HzAACwQT+Bz9unh+haKc9AAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/images/plus-box-outline.png":
/*!*****************************************!*\
  !*** ./src/images/plus-box-outline.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/images/trash-can-outline.png":
/*!******************************************!*\
  !*** ./src/images/trash-can-outline.png ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateHandler: () => (/* binding */ DateHandler)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");


class DateHandler {
    static formatDate(date) {
        if (!Date.parse(date)) {
            return "no date"
        } else {
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(date, "do MMMM yyyy")
        }
    }

    static formatDateForInput(date) {
        if (!Date.parse(date)) {
            return date
        }
       return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(date, "yyyy-MM-dd")
    }
}

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayController: () => (/* binding */ displayController)
/* harmony export */ });
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date.js */ "./src/date.js");
/* harmony import */ var _images_pen_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pen.png */ "./src/images/pen.png");
/* harmony import */ var _images_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/trash-can-outline.png */ "./src/images/trash-can-outline.png");
/* harmony import */ var _images_close_box_outline_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/close-box-outline.png */ "./src/images/close-box-outline.png");
/* harmony import */ var _images_eye_outline_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/eye-outline.png */ "./src/images/eye-outline.png");
/* harmony import */ var _images_checkbox_blank_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/checkbox-blank.png */ "./src/images/checkbox-blank.png");
/* harmony import */ var _images_checkbox_marked_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/checkbox-marked.png */ "./src/images/checkbox-marked.png");
/* harmony import */ var _images_floppy_disk_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/floppy-disk.png */ "./src/images/floppy-disk.png");
/* harmony import */ var _images_menu_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/menu.png */ "./src/images/menu.png");
/* harmony import */ var _images_plus_box_outline_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/plus-box-outline.png */ "./src/images/plus-box-outline.png");












const displayController = (function() {
    let currentProjectIndex = 0
    const bodyEl = document.querySelector("body")

    const containerEl = document.createElement("div")
    const displayTopEl = document.createElement("div")
    const leftPanelEl = document.createElement("div")
    const rightPanelEl = document.createElement("div")
    const displayHeaderEl = document.createElement("div")
    const projectsBtnEl = document.createElement("img")
    const addBtn = document.createElement("img")
    const dialogEl = document.createElement("dialog")
    const counterEl = document.createElement("div")
    const dialogCloseBtnEl = document.createElement("img")
    const dialogCloseContainerEl = document.createElement("div")
    const formEl = document.createElement("form")
    const formContentEl = document.createElement("div")
    const submitBtnEl = document.createElement("img")
    const todoDialogContainerEl = document.createElement("div")
    const todoTitleInputEl = document.createElement("input")
    const todoDescriptionInputEl = document.createElement("input")
    const todoDueDateInputEl = document.createElement("input")
    const todoNotesInputEl = document.createElement("textarea")
    const todoPriorityEl = document.createElement("button")
    const btnContainerEl = document.createElement("div")

    const nameInputEl = document.createElement("input")

    attachTogglePriorityButtonDisplayEvent()
    attachCounterEvent()

    function createMainLayout() {
        containerEl.classList.add("container")
        displayTopEl.classList.add("display-top")
        leftPanelEl.classList.add("left-panel")
        rightPanelEl.classList.add("right-panel")
        rightPanelEl.classList.add("invisible")
        displayHeaderEl.classList.add("display-header")
        dialogEl.classList.add("dialog")
        counterEl.classList.add("counter")
        dialogCloseBtnEl.classList.add("dialog-close-button")
        dialogCloseContainerEl.classList.add("dialog-close-container")
        formEl.classList.add("form")
        formContentEl.classList.add("form-content")
        submitBtnEl.classList.add("submit-button")
        todoDialogContainerEl.classList.add("todo-dialog-container")
        projectsBtnEl.classList.add("projects-button")
        addBtn.classList.add("add-button")
        btnContainerEl.classList.add("btn-container")

        submitBtnEl.setAttribute("type", "submit")
        submitBtnEl.setAttribute("formmethod", "dialog")
        submitBtnEl.setAttribute("value", "submit")

        projectsBtnEl.setAttribute("src", _images_menu_png__WEBPACK_IMPORTED_MODULE_8__["default"])
        addBtn.setAttribute("src", _images_plus_box_outline_png__WEBPACK_IMPORTED_MODULE_9__["default"])
        dialogCloseBtnEl.setAttribute("src", _images_close_box_outline_png__WEBPACK_IMPORTED_MODULE_3__["default"])

        submitBtnEl.setAttribute("src", _images_floppy_disk_png__WEBPACK_IMPORTED_MODULE_7__["default"])
        counterEl.textContent = ""

        displayTopEl.appendChild(leftPanelEl)
        displayTopEl.appendChild(rightPanelEl)
        dialogEl.appendChild(counterEl)
        dialogCloseContainerEl.appendChild(dialogCloseBtnEl)
        dialogEl.appendChild(dialogCloseContainerEl)
        dialogEl.appendChild(formEl)
        containerEl.appendChild(displayHeaderEl)
        containerEl.appendChild(displayTopEl)
        displayHeaderEl.appendChild(projectsBtnEl)
        displayHeaderEl.appendChild(addBtn)
        containerEl.appendChild(dialogEl)
        formEl.appendChild(formContentEl)
        btnContainerEl.appendChild(submitBtnEl)
        formEl.appendChild(btnContainerEl)
        bodyEl.appendChild(containerEl)        
    }

    function renderProjects(projectsArray, projectIndex = 0) {
        leftPanelEl.textContent = ""
        
        projectsArray.forEach((project, index) => {
            const projectEl = document.createElement("div")
            const projectNameSpanEl = document.createElement("span")
            const editProjectImgEl = document.createElement("img")

            projectEl.classList.add("project-tile")
            projectNameSpanEl.classList.add("project-name")
            editProjectImgEl.classList.add("edit-project")

            editProjectImgEl.setAttribute("src", `${_images_pen_png__WEBPACK_IMPORTED_MODULE_1__["default"]}`)
            projectEl.setAttribute("data-index", index)
            editProjectImgEl.setAttribute("data-index", index)
            projectNameSpanEl.setAttribute("data-index", index)
            projectNameSpanEl.textContent = project.name

            projectEl.appendChild(editProjectImgEl)
            projectEl.appendChild(projectNameSpanEl)
            leftPanelEl.appendChild(projectEl)
        })

        renderTodos(projectsArray, projectIndex)
    }


    function renderTodos(projectsArray, projectIndex = 0) {
        rightPanelEl.textContent = ""

        currentProjectIndex = projectIndex
        const currentProject = projectsArray[projectIndex]
        
        console.log(`currentProjectIndex: ${currentProjectIndex}`)
        console.log(`looking at:`)
        console.log(projectsArray[currentProjectIndex])
        if (!currentProject || !currentProject.todos || currentProject.todos.length === 0) {
            rightPanelEl.textContent = "First task: make todo list!"
         } else {
            projectsArray[projectIndex].todos.forEach((todo, index) => {
                const todoEl = document.createElement("div")
                const todoTitleEl = document.createElement("h3")
                const todoDueDateEl = document.createElement("h3")
                const viewTodoBtnEl = document.createElement("img")
                const isDoneBtn = document.createElement("img")
                const todoTextContainer = document.createElement("div")
                const todoBtnsContainer = document.createElement("div")

                todoEl.setAttribute("data-index", index)
                viewTodoBtnEl.setAttribute("data-index", index)
                isDoneBtn.setAttribute("data-index", index)

                todoEl.classList.add("todo")
                todoTitleEl.classList.add("todo-title")
                todoDueDateEl.classList.add("todo-duedate")
                viewTodoBtnEl.classList.add("view-btn")
                isDoneBtn.classList.add("is-done-btn")
                todoTextContainer.classList.add("todo-text-container")
                todoBtnsContainer.classList.add("todo-btns-container")

                todoTitleEl.textContent = todo.title
                todoDueDateEl.textContent = _date_js__WEBPACK_IMPORTED_MODULE_0__.DateHandler.formatDate(todo.dueDate)
                viewTodoBtnEl.setAttribute("src", _images_eye_outline_png__WEBPACK_IMPORTED_MODULE_4__["default"])

                isDoneBtn.setAttribute("src", getIsDone(todo, isDoneBtn))

                todoBtnsContainer.appendChild(viewTodoBtnEl)
                todoBtnsContainer.appendChild(isDoneBtn)

                todoTextContainer.appendChild(todoTitleEl)
                todoTextContainer.appendChild(todoDueDateEl)

                todoEl.appendChild(todoTextContainer)
                todoEl.appendChild(todoBtnsContainer)
                rightPanelEl.appendChild(todoEl)
        })
        }
    }


    function renderDialog(isProjectPanelVisible = 0) {
        resetDialogClass()
        dialogEl.showModal()

        const formContentEl = document.querySelector(".form-content")
        formContentEl.textContent = ""

        if (isProjectPanelVisible) {
            dialogEl.classList.add("isproject")

            formContentEl.appendChild(projectDialog())
            nameInputEl.focus()
        } else {
            formContentEl.appendChild(todoDialog())
            todoTitleInputEl.focus()
        }
    }

    function resetDialogClass() {
        dialogEl.classList.remove("isproject")
    }


    function projectDialog() {
        console.log("rendering project dialog")
        resetSubmitBtnClass()
        resetCounter()
        checkIfDisableButton()
        submitBtnEl.classList.add("new-project-submit")

        const projectDialogContainerEl = document.createElement("div")
        projectDialogContainerEl.classList.add("project-dialog-container")
        nameInputEl.classList.add("project-name-input")

        nameInputEl.setAttribute("type", "text")
        nameInputEl.setAttribute("placeholder", "My Project")
        nameInputEl.value = ""

        projectDialogContainerEl.appendChild(nameInputEl)

        const deleteExists = document.querySelector(".delete-project")

        if (deleteExists) {
            btnContainerEl.removeChild(deleteExists)
        }

        return projectDialogContainerEl
    }

    function todoDialog() {
        console.log("rendering todo dialog")
        const today = new Date()

        resetSubmitBtnClass()
        resetTodoForm()
        resetCounter()
        checkIfDisableButton()
        submitBtnEl.classList.add("new-todo-submit")

        todoTitleInputEl.classList.add("form-input", "title")
        todoDescriptionInputEl.classList.add("form-input", "description")
        todoDueDateInputEl.classList.add("form-input", "date")
        todoNotesInputEl.classList.add("form-input", "notes")
        todoPriorityEl.classList.add("form-input", "priority")

        todoPriorityEl.textContent = "Normal"
        todoPriorityEl.classList.remove("high-priority")

        todoTitleInputEl.setAttribute("type", "text")
        todoDescriptionInputEl.setAttribute("type", "text")
        todoDueDateInputEl.setAttribute("type", "date")

        todoTitleInputEl.setAttribute("placeholder", "snappyNameForTask")
        todoDescriptionInputEl.setAttribute("placeholder", "shortDescription")
        todoNotesInputEl.setAttribute("placeholder", "upTo300charactersOfNotesForDetailedInformationIfYouSoDesireButItIsOptionalJustLikeTheDescription")

        const deleteExists = document.querySelector(".delete-project")

        if (deleteExists) {
            btnContainerEl.removeChild(deleteExists)
        }

        todoDialogContainerEl.appendChild(todoTitleInputEl)
        todoDialogContainerEl.appendChild(todoDescriptionInputEl)
        todoDialogContainerEl.appendChild(todoDueDateInputEl)
        todoDialogContainerEl.appendChild(todoNotesInputEl)
        todoDialogContainerEl.appendChild(todoPriorityEl)

        return todoDialogContainerEl
    }

    function togglePanelInvisible() {
        leftPanelEl.classList.toggle("invisible")
        rightPanelEl.classList.toggle("invisible")
        addBtn.classList.toggle("add-todo")
    }

    function toggleSubmitInvisible() {
        if (submitBtnEl.getAttribute("class") === "submit-button") {
            submitBtnEl.classList.add("invisible")
            
        }
    }

    function getCurrentProjectIndex() {
        return currentProjectIndex
    }

    function getTodoFormValues(todoIndex) {
        const obj = {
            title: todoTitleInputEl.value,
            description: todoDescriptionInputEl.value,
            dueDate: todoDueDateInputEl.value,
            notes: todoNotesInputEl.value,
            isHighPriority: getFormTodoPriority(),
            isDone: getCurrentIsDoneState(todoIndex)
        }

        console.log(obj)
        return obj
    }

    function getProjectName() {
        if (nameInputEl.value) {
            return nameInputEl.value
        } 
        return "My Project"
        
    }

    function attachTogglePriorityButtonDisplayEvent() {
        todoPriorityEl.addEventListener("click", (e) => {

            todoPriorityEl.textContent === "Normal" ? todoPriorityEl.textContent = "High" : todoPriorityEl.textContent = "Normal"

            if (todoPriorityEl.textContent === "Normal") {
                todoPriorityEl.classList.remove("high-priority")
            } else if (todoPriorityEl.textContent === "High") {
                todoPriorityEl.classList.add("high-priority")
            }

            e.preventDefault()
        })
    }

    function getFormTodoPriority(){
        return [...todoPriorityEl.classList].includes("high-priority")
    }

    function getCurrentIsDoneState(todoIndex) {
        const isDoneBtn = document.querySelector(`.is-done-btn[data-index="${todoIndex}"]`)

        if (isDoneBtn) {
            return isDoneBtn.classList.contains("done")
        } else {
            return false
        }
    }

    function renderViewTodo(projectsArray, currentProjectIndex, todoIndex) {
        formContentEl.textContent = ""
        resetSubmitBtnClass()
        toggleSubmitInvisible()
        resetCounter()
        resetDialogClass()

        const deleteExists = document.querySelector(".delete-project")

        if (deleteExists) {
            btnContainerEl.removeChild(deleteExists)
        }

        const todoViewContainer = document.createElement("div")
        todoViewContainer.classList.add("todo-view-container")

        const todoTitleViewEl = document.createElement("p")
        const todoDescriptionViewEl = document.createElement("p")
        const todoDueDateViewEl = document.createElement("p")
        const todoNotesViewEl = document.createElement("p")
        const todoIsHighPriorityViewEl = document.createElement("p")
        const todoIsDoneViewEl = document.createElement("p")
        const deleteTodoBtnEl = document.createElement("img")
        const editBtnEl = document.createElement("img")
        const buttonsContainerEl = document.createElement("div")

        todoTitleViewEl.classList.add("title-view")
        todoDescriptionViewEl.classList.add("description-view")
        todoDueDateViewEl.classList.add("date-view")
        todoNotesViewEl.classList.add("notes-view")
        todoIsHighPriorityViewEl.classList.add("priority-view")
        todoIsDoneViewEl.classList.add("is-done-view")
        buttonsContainerEl.classList.add("buttons-container")
       
        todoTitleViewEl.textContent = projectsArray[currentProjectIndex].todos[todoIndex].title
        todoDescriptionViewEl.textContent = projectsArray[currentProjectIndex].todos[todoIndex].description
        todoDueDateViewEl.textContent = _date_js__WEBPACK_IMPORTED_MODULE_0__.DateHandler.formatDate(projectsArray[currentProjectIndex].todos[todoIndex].dueDate)
        todoNotesViewEl.textContent = projectsArray[currentProjectIndex].todos[todoIndex].notes

        const isHighPriority = projectsArray[currentProjectIndex].todos[todoIndex].isHighPriority
        if (isHighPriority) {
            todoIsHighPriorityViewEl.textContent = "Priority: High"
            todoIsHighPriorityViewEl.classList.add("priority-high")
        } else if (!isHighPriority) {
            todoIsHighPriorityViewEl.textContent = "Priority: Normal"
            todoIsHighPriorityViewEl.classList.add("priority-normal")
        }

        const isDone = projectsArray[currentProjectIndex].todos[todoIndex].isDone
        if (isDone) {
            todoIsDoneViewEl.textContent = "Done"
            todoIsDoneViewEl.classList.add("task-done")
        } else if (!isDone) {
            todoIsDoneViewEl.textContent = "Not done"
            todoIsDoneViewEl.classList.add("task-not-done")
        }
        deleteTodoBtnEl.setAttribute("data-index", todoIndex)
        deleteTodoBtnEl.classList.add("delete-btn")
        deleteTodoBtnEl.setAttribute("src", _images_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_2__["default"])

        editBtnEl.setAttribute("src", _images_pen_png__WEBPACK_IMPORTED_MODULE_1__["default"])
        editBtnEl.classList.add("edit-btn")
        editBtnEl.setAttribute("data-index", todoIndex)

        buttonsContainerEl.appendChild(deleteTodoBtnEl)
        buttonsContainerEl.appendChild(editBtnEl)   

        todoViewContainer.appendChild(todoTitleViewEl)
        todoViewContainer.appendChild(todoDescriptionViewEl)
        todoViewContainer.appendChild(todoDueDateViewEl)
        todoViewContainer.appendChild(todoNotesViewEl)
        todoViewContainer.appendChild(todoIsHighPriorityViewEl)
        todoViewContainer.appendChild(todoIsDoneViewEl)
        todoViewContainer.appendChild(buttonsContainerEl)
        formContentEl.appendChild(todoViewContainer)
    }

    function editTodoForm(projectsArray, projectIndex, todoIndex) {
        formContentEl.textContent = ""
        formContentEl.appendChild(todoDialog())

        resetSubmitBtnClass()
        submitBtnEl.classList.add("edit-todo-submit")

        todoTitleInputEl.value = projectsArray[projectIndex].todos[todoIndex].title
        todoDescriptionInputEl.value = projectsArray[currentProjectIndex].todos[todoIndex].description
        todoDueDateInputEl.value = _date_js__WEBPACK_IMPORTED_MODULE_0__.DateHandler.formatDateForInput(projectsArray[currentProjectIndex].todos[todoIndex].dueDate)
        todoNotesInputEl.value = projectsArray[currentProjectIndex].todos[todoIndex].notes

        const isHighPriority = projectsArray[currentProjectIndex].todos[todoIndex].isHighPriority

        if (!isHighPriority) {
            todoPriorityEl.textContent = "Normal"
        } else if (isHighPriority) {
            todoPriorityEl.textContent = "High"
            todoPriorityEl.classList.add("high-priority")
        }
    }

    function editProjectForm(projectsArray, projectIndex) {
        const deleteProjectEl = document.createElement("img")
        deleteProjectEl.setAttribute("src",`${_images_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_2__["default"]}`)
        deleteProjectEl.classList.add("delete-project")

        formContentEl.textContent = ""
        formContentEl.appendChild(projectDialog())
        dialogEl.classList.add("isproject")

        const deleteExists = document.querySelector(".delete-project")

        if (!deleteExists) {
            btnContainerEl.appendChild(deleteProjectEl)
        }
        // console.log("editing")
        
        resetSubmitBtnClass()
        submitBtnEl.classList.add("edit-project-submit")

        nameInputEl.value = projectsArray[projectIndex].name

        dialogEl.showModal()
    }

    function resetSubmitBtnClass() {
        submitBtnEl.removeAttribute("class")
        submitBtnEl.classList.add("submit-button")
    }

    function resetTodoForm() {        
        todoTitleInputEl.value = ""
        todoDescriptionInputEl.value = ""
        todoDueDateInputEl.value = ""   
        todoNotesInputEl.value = ""
        todoPriorityEl.textContent = "Normal"
        todoPriorityEl.classList.remove("high-priority")
    }

    function toggleIsDoneEvent() {
        const isDoneBtn = document.querySelector(".is-done-btn")
        console.log(isDoneBtn)
        let text

        if (isDoneBtn.classList.contains("not-done")) {
            isDoneBtn.classList.remove("not-done")
            isDoneBtn.classList.add("done")
            text = "done"
        } else if (isDoneBtn.classList.contains("done")) {
            isDoneBtn.classList.remove("done")
            isDoneBtn.classList.add("not-done")
            text = "not done"
        }
        isDoneBtn.textContent = text
    }

    function getIsDone(todo, isDoneBtn) {
        
        if(todo.isDone) {
            isDoneBtn.classList.remove("not-done")
            isDoneBtn.classList.add("done")
            return _images_checkbox_marked_png__WEBPACK_IMPORTED_MODULE_6__["default"]
        } else if (!todo.isDone) {
            isDoneBtn.classList.remove("done")
            isDoneBtn.classList.add("not-done")
            return _images_checkbox_blank_png__WEBPACK_IMPORTED_MODULE_5__["default"]
        }
    }

    function getSubmitBtnState() {
        let state

        if (submitBtnEl.classList.contains("new-project-submit")) {
            state = "new-project"
        }
        if (submitBtnEl.classList.contains("new-todo-submit")) {
            state = "new-todo"
        }
        if (submitBtnEl.classList.contains("edit-todo-submit")) {
            state = "edit-todo"
        } if (submitBtnEl.classList.contains("edit-project-submit")) {
            state = "edit-project"
        }
        return state
    }

    function getActiveInputElement() {
        const type = document.activeElement.getAttribute("type")
        console.log(document.activeElement.tagName)

        if (type === "text" || document.activeElement.tagName === "TEXTAREA") {
            return document.activeElement
        }
    }

    function getInputIdentifier() {
        const classList = getActiveInputElement().classList
        let state
        
        if (classList.contains("title")) {
            console.log("title")
            state = "title"
        }
        if (classList.contains("description")) {
            console.log("description")
            state = "description"
        }
        if (classList.contains("notes")) {
            console.log("notes")
            state = "notes"
        }
        if (classList.contains("project-name-input")) {
            console.log("project")
            state = "project"
        }
        return state
    }

    function getActiveInputLength() {
        const activeInput = getActiveInputElement()
        if (activeInput) {
            console.log(activeInput.value.length)
            return activeInput.value.length
        }
        return 0;
    }

    function attachCounterEvent() {
        document.addEventListener("keyup", (event) => {
            if (event.key === "Tab") {
                return
            }
            if (getActiveInputElement()) {
            counterEvent()
            }
        })
    }

    const counterObj = {
        titleCount: 0,
        descriptionCount: 0,
        notesCount: 0,
        projectCount: 0,
    }

    const counterLimitTracker = {
        isTitleTooLong: false,
        isDescriptionTooLong: false,
        isNotesTooLong: false,
        isProjectTooLong: false,
    }

    function resetCounter() {
        counterObj.titleCount = 0
        counterObj.descriptionCount = 0
        counterObj.notesCount = 0
        counterObj.projectCount = 0

        counterLimitTracker.isTitleTooLong = false
        counterLimitTracker.isDescriptionTooLong = false
        counterLimitTracker.isNotesTooLong = false
        counterLimitTracker.isProjectTooLong = false

        counterEl.textContent = ""
    }

    function counterEvent() {
        const counterLimits = {
            titleLimit: 30,
            descriptionLimit: 100,
            notesLimit: 300,
            projectLimit:30,
        }

        let isPastLimit = false

        switch (getInputIdentifier()) {
            case "title":
                counterObj.titleCount = getActiveInputLength()
                counterEl.textContent = `${counterObj.titleCount} / ${counterLimits.titleLimit}`

                isPastLimit = counterLimitTracker.isTitleTooLong
                inputLimiter(counterObj.titleCount, counterLimits.titleLimit, isPastLimit)
                checkIfDisableButton()
                updateCounterStyling(counterObj.titleCount / counterLimits.titleLimit)
                break
            case "description":
                counterObj.descriptionCount = getActiveInputLength()
                counterEl.textContent = `${counterObj.descriptionCount} / ${counterLimits.descriptionLimit}`

                isPastLimit = counterLimitTracker.isdescriptionTooLong
                inputLimiter(counterObj.descriptionCount, counterLimits.descriptionLimit, isPastLimit)
                checkIfDisableButton()
                updateCounterStyling(counterObj.descriptionCount / counterLimits.descriptionLimit)
                break
            case "notes":
                counterObj.notesCount = getActiveInputLength()
                counterEl.textContent = `${counterObj.notesCount} / ${counterLimits.notesLimit}`

                isPastLimit = counterLimitTracker.isNotesTooLong
                inputLimiter(counterObj.notesCount, counterLimits.notesLimit, isPastLimit)
                checkIfDisableButton()
                updateCounterStyling(counterObj.notesCount / counterLimits.notesLimit)
                break
            case "project":
                counterObj.projectCount = getActiveInputLength()
                counterEl.textContent = `${counterObj.projectCount} / ${counterLimits.projectLimit}`

                isPastLimit = counterLimitTracker.isProjectTooLong
                inputLimiter(counterObj.projectCount, counterLimits.projectLimit, isPastLimit)
                checkIfDisableButton()
                updateCounterStyling(counterObj.projectCount / counterLimits.projectLimit)
                break
        }
        console.log(counterObj)
        return counterLimits
    }

    function inputLimiter(countProp, countLimit, isPastLimit) {
        const activeElement = document.activeElement
        let inputIdentifier = getInputIdentifier()

        if (countProp > countLimit) {
            if (!activeElement.classList.contains("overmax")) {
                activeElement.classList.add("overmax")
                isPastLimit = true
                updateCounterLimitTracker(inputIdentifier, true)
            }
        } else if (countProp <= countLimit) {
            if (activeElement.classList.contains("overmax")) {
                activeElement.classList.remove("overmax")
                isPastLimit = false
                updateCounterLimitTracker(inputIdentifier, false)
            }
        }
        console.log(counterLimitTracker)
    }

    function updateCounterLimitTracker(identifier, isPastLimit) {
        switch (identifier) {
            case "title":
                counterLimitTracker.isTitleTooLong = isPastLimit;
                break;
            case "description":
                counterLimitTracker.isDescriptionTooLong = isPastLimit;
                break;
            case "notes":
                counterLimitTracker.isNotesTooLong = isPastLimit;
                break;
            case "project":
                counterLimitTracker.isProjectTooLong = isPastLimit;
                break;
        }
    }

    function checkIfDisableButton() {
        let anyPropertyTrue = false
        let isAtodoDialog = false

        const getCurrentDialogState = getSubmitBtnState()

        if (getCurrentDialogState === "new-todo" ||
            getCurrentDialogState === "edit-todo") {
                isAtodoDialog = true
                console.log("is a todo dialog")
        }
    
        for (const [key, value] of Object.entries(counterLimitTracker)) {
            if (value === true) {
                anyPropertyTrue = true;
                break
            }
        }
    
        // if (anyPropertyTrue || (!counterObj.titleCount && isAtodoDialog)) {
        //     submitBtnEl.setAttribute("disabled", "disabled")
        // } else {
        //     submitBtnEl.removeAttribute("disabled")
        // }
        
        // updated to use an image instead of a button
        if (anyPropertyTrue || (!counterObj.titleCount && isAtodoDialog)) {
            submitBtnEl.style.pointerEvents = "none"
            if (!submitBtnEl.classList.contains("submit-disabled")) {
                submitBtnEl.classList.add("submit-disabled")
            }
        } else {
            submitBtnEl.style.pointerEvents = "auto"
            submitBtnEl.classList.remove("submit-disabled")
        }
    }

    function updateCounterStyling(ratio) {
        if (ratio > 0.75) {
            counterEl.classList.remove("hidden")
            counterEl.classList.remove("overcap")

        } else if (ratio <= 0.75) {
            if(!counterEl.classList.contains("hidden")) {
                counterEl.classList.add("hidden")
            }
        }
        if (ratio > 1) {
            if (!counterEl.classList.contains("overcap")) {
                counterEl.classList.add("overcap")
            }
        }


    }


    return { createMainLayout, renderProjects, renderTodos, renderDialog, renderViewTodo, getCurrentProjectIndex, getTodoFormValues, editTodoForm, getSubmitBtnState, getProjectName, togglePanelInvisible, toggleIsDoneEvent, editProjectForm }

}())




/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageHandler: () => (/* binding */ StorageHandler)
/* harmony export */ });
class StorageHandler {
    static projectsParsed = []
    static projectsProcessed = []

    static saveFrom(array) {
        console.log("saving to local storage")
    
        if (array.length === 0) {
            localStorage.removeItem("projectsJSON")
        } else {
            const projectsJSON = JSON.stringify(array)
            localStorage.setItem("projectsJSON", projectsJSON)
        }
    
        console.log(`local data saved: ${localStorage.getItem("projectsJSON")}`)
    }

    static loadJSON(ref = "projectsJSON") {
        const storedData = localStorage.getItem(ref);
        console.log("Stored Data:", storedData)
    
        if (!storedData) {
            localStorage.setItem(ref, "[]");
            this.projectsParsed = [];
        } else {
            this.projectsParsed = JSON.parse(storedData);
        }
    }

    static loadTo(array, projectConstructor, todoConstructor) {
        console.log("loading stuff to array")

        this.addMethods(projectConstructor, todoConstructor)
        array.splice(0, array.length, ...this.projectsProcessed);
    }

    static addMethods(projectConstructor, todoConstructor) {
        const output = []

        this.projectsParsed.forEach(project => {
            const newProject = new projectConstructor(project.name)
            const todosForNewProject = []

            project.todos.forEach(todo => {
                const newTodo = new todoConstructor(todo)
                
                todosForNewProject.push(newTodo)
            })
        
            newProject.todos = [...todosForNewProject]
            output.push(newProject)
        })

        this.projectsProcessed.push(...output)
        console.log(`local data processed:`)
        console.log(this.projectsProcessed)
    }

    static initializeTo(liveProjectArray, projectConstructor, todoConstructor) {
        this.loadJSON()
        console.log(`data initialized:`)
        console.log(this.projectsParsed)

        if (this.projectsParsed.length !== 0) {
            this.loadTo(liveProjectArray, projectConstructor, todoConstructor)
            console.log(`data loaded to live:`)
            console.log(liveProjectArray)
        } else {
            this.createDefaultProject(liveProjectArray, projectConstructor)
        }
    }

    static createDefaultProject(liveProjectArray, projectConstructor) {
        if (liveProjectArray.length === 0) {
            const defaultProject = new projectConstructor()

            liveProjectArray.push(defaultProject)
            this.saveFrom(liveProjectArray)

            console.log(`starting fresh with: ${liveProjectArray}`)
        }
    }
}

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    const timestamp = date.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




class ProjectHandler {
    static projectsArray = []

    static addProject(name) {
        this.projectsArray.push(new Project(name))
    }

    static addTodo(currentProjectIndex = 0, obj) {
        this.projectsArray[currentProjectIndex].todos.push(new Todo(obj))
    }

    static editTodo(currentProjectIndex = 0, todoIndex, obj) {
        this.deleteTodo(currentProjectIndex, todoIndex)
        this.projectsArray[currentProjectIndex].todos.splice(todoIndex, 0, new Todo(obj))
    }

    static deleteProject(projectIndex) {
        if (this.projectsArray === 1) {
            this.projectsArray = []
        } else {
        this.projectsArray.splice(projectIndex, 1)
        }
    }

    static deleteTodo(projectIndex, todoIndex) {
        this.projectsArray[projectIndex].todos.splice(todoIndex, 1)
    }
}

class Project {
    constructor(name = "My Project") {
        this.name = name
        this.todos = []
    }

    editName(name) {
        this.name = name
    }
}

class Todo {
    constructor(obj) {
        this.title = obj.title
        this.description = obj.description
        this.dueDate = obj.dueDate
        this.notes = obj.notes
        this.isHighPriority = obj.isHighPriority
        this.isDone = obj.isDone
    }

    editProperty(property, value) {
        if (property !== "isHighPriority" && property !== "isDone") {
            this[property] = value
        }
    }

    toggleisDone() {
        this.isDone === false ? this.isDone = true : this.isDone = false;
    }

    togglePriority() {
        this.isHighPriority === false ? this.isHighPriority = false : this.isHighPriority = true;
    }
}

function app() {
    const currentProjectIndex = () => {return _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.getCurrentProjectIndex() }
    let isProjectPanelVisible = true
    let lastClickedTodoIndex = 0
    let lastClickedProjectIndex = 0

    _storage_js__WEBPACK_IMPORTED_MODULE_0__.StorageHandler.initializeTo(ProjectHandler.projectsArray, Project, Todo)
    _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.createMainLayout()
    refreshApp()
    attachMainEvents()

    function attachProjectPanelBtnEvent() {
        const projectPanelBtn = document.querySelector(".projects-button")
        projectPanelBtn.addEventListener("click", projectPanelEvent)
    }

    function projectPanelEvent() {
        _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.togglePanelInvisible()
        isProjectPanelVisible ? isProjectPanelVisible = false : isProjectPanelVisible = true;
        console.log(`panel visibility ${isProjectPanelVisible}`)

    }
    
    function attachProjectTileEvents() {
        const projectTileElList = document.querySelectorAll(".project-tile")

        projectTileElList.forEach(element => {
            element.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index")
                _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.renderTodos(ProjectHandler.projectsArray, index)
                attachTodoEvents()
            })
        })
    }

    function attachTodoEvents() {
        const todoElList = document.querySelectorAll(".todo")
    
        todoElList.forEach(element => {
            element.addEventListener("click", (event) => {
                const todoIndex = event.target.getAttribute("data-index")
                const classList = event.target.classList;
    
                if (classList.contains("view-btn")) {
                    const dialogEl = document.querySelector("dialog")
                    dialogEl.showModal()
                    _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.renderViewTodo(ProjectHandler.projectsArray, currentProjectIndex(), todoIndex);
                    attachEditBtnEvent()
                    attachDeleteBtnEvent()
                } else if (classList.contains("is-done-btn")) {
                    _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.toggleIsDoneEvent();
                    ProjectHandler.projectsArray[currentProjectIndex()].todos[todoIndex].toggleisDone()
                    refreshApp()
                }
            })
        })
    }

    function attachDeleteBtnEvent() {
        const deleteBtnEl = document.querySelector(".delete-btn")
        const dialogEl = document.querySelector(".dialog")

        deleteBtnEl.addEventListener("click", (e) => {
            const todoIndex = e.target.getAttribute("data-index")
            lastClickedTodoIndex = todoIndex
            console.log(`last clicked project is ${lastClickedProjectIndex}`)

            ProjectHandler.deleteTodo(currentProjectIndex(), todoIndex)
            dialogEl.close()
            refreshApp()
        })
    }

    function attachDialogEvent() {
        const addBtnEl = document.querySelector(".add-button")
        addBtnEl.addEventListener("click", (e) => { 
            _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.renderDialog(isProjectPanelVisible)
            e.stopImmediatePropagation()
        })
    }

    function attachCloseDialogEvent() {
        const closeBtnEl = document.querySelector(".dialog-close-button")
        const dialogEl = document.querySelector(".dialog")

        closeBtnEl.addEventListener("click", () => {
            dialogEl.close()
        })
    }

    function attachSubmitEvents() {
        const submitBtnEl = document.querySelector(".submit-button")
        submitBtnEl.addEventListener("click", () => submitEvent())
    }

    function submitEvent() {
        const state = _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.getSubmitBtnState()
        console.log(state)
        
        switch (state) {
            case "new-project":
                ProjectHandler.addProject(_display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.getProjectName())
                break
            case "new-todo":
                const formValues = _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.getTodoFormValues(lastClickedTodoIndex)
                ProjectHandler.addTodo(currentProjectIndex(), formValues)
                break
            case "edit-todo":
                const newFormValues = _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.getTodoFormValues(lastClickedTodoIndex)
                ProjectHandler.editTodo(currentProjectIndex(), lastClickedTodoIndex, newFormValues)
                break
            case "edit-project":
                const newName = _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.getProjectName()
                ProjectHandler.projectsArray[lastClickedProjectIndex].editName(newName)
                break
        }
        
        document.querySelector(".dialog").close()
        refreshApp()

    }

    function attachEditBtnEvent() {
        const editBtnEl = document.querySelector(".edit-btn")

        editBtnEl.addEventListener("click", (e) => {
            const todoIndex = e.target.getAttribute("data-index")
            lastClickedTodoIndex = todoIndex
            console.log(`last clicked project is ${lastClickedProjectIndex}`)

            _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.editTodoForm(ProjectHandler.projectsArray, currentProjectIndex(), todoIndex)
        })
    }

    function attachEditProjectEvents() {
        const editProjectElList = document.querySelectorAll(".edit-project")
        editProjectElList.forEach(element => {
            element.addEventListener("click", event => {
                lastClickedProjectIndex = event.target.getAttribute("data-index")
                _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.editProjectForm(ProjectHandler.projectsArray, lastClickedProjectIndex)
                attachDeleteProjectEvent()
                event.stopImmediatePropagation()
            })
        })
    }

    function attachDeleteProjectEvent() {
        const dialogEl = document.querySelector(".dialog")
        const deleteProjectBtn = document.querySelector(".delete-project")
        deleteProjectBtn.addEventListener("click", (event) => {
            ProjectHandler.deleteProject(lastClickedProjectIndex)
            console.log(ProjectHandler.projectsArray)
            _storage_js__WEBPACK_IMPORTED_MODULE_0__.StorageHandler.saveFrom(ProjectHandler.projectsArray)
            _storage_js__WEBPACK_IMPORTED_MODULE_0__.StorageHandler.createDefaultProject(ProjectHandler.projectsArray, Project)
            event.stopImmediatePropagation()
            dialogEl.close()
            refreshApp()
        }) 
    }

    function refreshApp() {
        if (ProjectHandler.projectsArray.length !== 0) {
            _storage_js__WEBPACK_IMPORTED_MODULE_0__.StorageHandler.saveFrom(ProjectHandler.projectsArray)
            _storage_js__WEBPACK_IMPORTED_MODULE_0__.StorageHandler.createDefaultProject(ProjectHandler.projectsArray, Project)
        }
        _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.renderProjects(ProjectHandler.projectsArray, currentProjectIndex())
        attachProjectTileEvents()
        attachEditProjectEvents()
        attachTodoEvents()
    }

    function attachMainEvents(){
        attachProjectPanelBtnEvent()
        attachDialogEvent()
        attachCloseDialogEvent()
        attachSubmitEvents()
    }
}

app()

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map