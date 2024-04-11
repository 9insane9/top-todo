/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, `.display-top {
    display: flex;
    border: 1px solid green;
    height: 800px;
    width: 1000px;
}

.left-panel {
    width: 25%;
    border: 1px solid red;
}

.right-panel {
    width: 75%;
    border: 1px solid blue;
}

.invisible {
    display: none;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB","sourcesContent":[".display-top {\n    display: flex;\n    border: 1px solid green;\n    height: 800px;\n    width: 1000px;\n}\n\n.left-panel {\n    width: 25%;\n    border: 1px solid red;\n}\n\n.right-panel {\n    width: 75%;\n    border: 1px solid blue;\n}\n\n.invisible {\n    display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayController: () => (/* binding */ displayController)
/* harmony export */ });
const displayController = (function() {
    let currentProjectIndex = 0

    function createMainLayout() {
        const bodyEl = document.querySelector("body")

        const containerEl = document.createElement("div")
        const displayTopEl = document.createElement("div")
        const leftPanelEl = document.createElement("div")
        const rightPanelEl = document.createElement("div")
        const displayBottomEl = document.createElement("div")
        const projectsBtnEl = document.createElement("button")
        const addBtn = document.createElement("button")
        const dialogEl = document.createElement("dialog")
        const dialogCloseBtnEl = document.createElement("button")
        const dialogCloseBtnImageEl = document.createElement("image")
        const formEl = document.createElement("form")
        const submitBtnEl = document.createElement("button")

        containerEl.classList.add("container")
        displayTopEl.classList.add("display-top")
        leftPanelEl.classList.add("left-panel")
        rightPanelEl.classList.add("right-panel")
        displayBottomEl.classList.add("display-bottom")
        dialogEl.classList.add("dialog")
        dialogCloseBtnEl.classList.add("dialog-close-button")
        dialogCloseBtnImageEl.classList.add("dialog-close-image")
        formEl.classList.add("form")
        submitBtnEl.classList.add("submit-button")

        projectsBtnEl.classList.add("projects-button")
        addBtn.classList.add("add-button")

        submitBtnEl.setAttribute("type", "submit")
        submitBtnEl.setAttribute("formmethod", "dialog")
        submitBtnEl.setAttribute("value", "submit")

        projectsBtnEl.textContent = "PROJECTS" //placeholder
        addBtn.textContent = "ADD" //placeholder
        dialogCloseBtnEl.textContent = "CLOSE" //placeholder
        submitBtnEl.textContent = "SUBMIT" //same

        displayTopEl.appendChild(leftPanelEl)
        displayTopEl.appendChild(rightPanelEl)
        dialogCloseBtnEl.appendChild(dialogCloseBtnImageEl)
        dialogEl.appendChild(dialogCloseBtnEl)
        dialogEl.appendChild(formEl)
        containerEl.appendChild(displayTopEl)
        containerEl.appendChild(displayBottomEl)
        containerEl.appendChild(projectsBtnEl)
        containerEl.appendChild(addBtn)
        containerEl.appendChild(dialogEl)
        formEl.appendChild(submitBtnEl)

        bodyEl.appendChild(containerEl)

        
    }

    function renderProjects(projectsArray) {
        const rightPanelEl = document.querySelector(".right-panel")
        const leftPanelEl = document.querySelector(".left-panel")

        projectsArray.forEach((project, index) => {
            const projectEl = document.createElement("button")

            projectEl.classList.add("project-tile")
            projectEl.setAttribute("data-index", index)
            projectEl.textContent = project.name

            leftPanelEl.appendChild(projectEl)
        })

        renderTodos(projectsArray)
    }

    function renderTodos(projectsArray, projectIndex = 0) {
        const rightPanelEl = document.querySelector(".right-panel")
        rightPanelEl.textContent = ""

        currentProjectIndex = projectIndex
        /* eslint-disable */console.log(...oo_oo(`515347813_82_8_82_64_4`,`current project is ${currentProjectIndex}`))

        if (projectsArray[projectIndex].todos.length === 0) {
            rightPanelEl.textContent = "no todos here yet, let's add some!"
         } else {

        projectsArray[projectIndex].todos.forEach((todo, index) => {
            const todoEl = document.createElement("div")
            todoEl.classList.add("todo")
            todoEl.setAttribute("data-index", index)

            const todoTitleEl = document.createElement("h3")
            todoTitleEl.textContent = todo.title
            todoTitleEl.classList.add("todo-title")

            const todoDueDateEl = document.createElement("h3")
            todoDueDateEl.textContent = todo.dueDate
            todoDueDateEl.classList.add("todo-duedate")

            const editTodoBtnEl = document.createElement("button")
            editTodoBtnEl.classList.add("edit-btn")
            editTodoBtnEl.textContent = "edit"

            const deleteTodoBtnEl = document.createElement("button")
            deleteTodoBtnEl.classList.add("delete-btn")
            deleteTodoBtnEl.textContent = "delete"

            todoEl.appendChild(todoTitleEl)
            todoEl.appendChild(todoDueDateEl)
            todoEl.appendChild(editTodoBtnEl)
            todoEl.appendChild(deleteTodoBtnEl)

            rightPanelEl.appendChild(todoEl)
        })
        }
    }

    function renderDialog(isProjectPanelVisible = 0) {
        const dialogEl = document.querySelector(".dialog")
        dialogEl.showModal()

        if (isProjectPanelVisible) {
            projectDialog()
        } else {
            todoDialog()
        }
    }

    function projectDialog() {
        /* eslint-disable */console.log(...oo_oo(`515347813_131_8_131_51_4`,"rendering new project dialog"))
        
        const formEl = document.querySelector(".form")
        const nameInputEl = document.createElement("input")
        nameInputEl.setAttribute("type", "text")
        nameInputEl.setAttribute("placeholder", "My Project")
        formEl.appendChild(nameInputEl)
    }

    function todoDialog() {
        /* eslint-disable */console.log(...oo_oo(`515347813_141_8_141_48_4`,"rendering new todo dialog"))
    }

    function getCurrentProjectIndex() {
        return currentProjectIndex
    }
    

    return { createMainLayout, renderProjects, renderTodos, renderDialog, getCurrentProjectIndex }

}())


/* istanbul ignore next *//* c8 ignore start *//* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1ce8fd=_0x5cae;function _0x5cae(_0x49db9e,_0xa98099){var _0x22cafa=_0x22ca();return _0x5cae=function(_0x5cae36,_0x2d2af2){_0x5cae36=_0x5cae36-0x1d1;var _0x2b9e81=_0x22cafa[_0x5cae36];return _0x2b9e81;},_0x5cae(_0x49db9e,_0xa98099);}(function(_0x49c6ba,_0x384164){var _0x2c9789=_0x5cae,_0x466bd5=_0x49c6ba();while(!![]){try{var _0x4ce3d3=-parseInt(_0x2c9789(0x29a))/0x1*(-parseInt(_0x2c9789(0x257))/0x2)+-parseInt(_0x2c9789(0x26d))/0x3*(-parseInt(_0x2c9789(0x1f6))/0x4)+-parseInt(_0x2c9789(0x2b2))/0x5*(-parseInt(_0x2c9789(0x248))/0x6)+parseInt(_0x2c9789(0x2b9))/0x7*(-parseInt(_0x2c9789(0x24c))/0x8)+-parseInt(_0x2c9789(0x24a))/0x9+-parseInt(_0x2c9789(0x272))/0xa+parseInt(_0x2c9789(0x2b8))/0xb*(-parseInt(_0x2c9789(0x29f))/0xc);if(_0x4ce3d3===_0x384164)break;else _0x466bd5['push'](_0x466bd5['shift']());}catch(_0x5079bb){_0x466bd5['push'](_0x466bd5['shift']());}}}(_0x22ca,0xd3455));var j=Object[_0x1ce8fd(0x294)],H=Object[_0x1ce8fd(0x22b)],G=Object[_0x1ce8fd(0x27d)],ee=Object[_0x1ce8fd(0x229)],te=Object[_0x1ce8fd(0x1ec)],ne=Object[_0x1ce8fd(0x282)]['hasOwnProperty'],re=(_0x422ba4,_0xb1723a,_0x561d08,_0x1c202d)=>{var _0x5cec72=_0x1ce8fd;if(_0xb1723a&&typeof _0xb1723a==_0x5cec72(0x2a5)||typeof _0xb1723a=='function'){for(let _0x1163dd of ee(_0xb1723a))!ne['call'](_0x422ba4,_0x1163dd)&&_0x1163dd!==_0x561d08&&H(_0x422ba4,_0x1163dd,{'get':()=>_0xb1723a[_0x1163dd],'enumerable':!(_0x1c202d=G(_0xb1723a,_0x1163dd))||_0x1c202d[_0x5cec72(0x284)]});}return _0x422ba4;},x=(_0x2fa7a7,_0x560e1e,_0x4a2cb8)=>(_0x4a2cb8=_0x2fa7a7!=null?j(te(_0x2fa7a7)):{},re(_0x560e1e||!_0x2fa7a7||!_0x2fa7a7['__es'+'Module']?H(_0x4a2cb8,_0x1ce8fd(0x280),{'value':_0x2fa7a7,'enumerable':!0x0}):_0x4a2cb8,_0x2fa7a7)),X=class{constructor(_0x20a70d,_0x44af0d,_0x5f56d0,_0x5f588f,_0x2a2547){var _0x59d782=_0x1ce8fd;this['global']=_0x20a70d,this[_0x59d782(0x216)]=_0x44af0d,this['port']=_0x5f56d0,this['nodeModules']=_0x5f588f,this['dockerizedApp']=_0x2a2547,this[_0x59d782(0x240)]=!0x0,this[_0x59d782(0x21c)]=!0x0,this[_0x59d782(0x1e0)]=!0x1,this[_0x59d782(0x242)]=!0x1,this[_0x59d782(0x200)]=_0x20a70d[_0x59d782(0x28e)]?.['env']?.[_0x59d782(0x26a)]===_0x59d782(0x238),this[_0x59d782(0x262)]=!this['global'][_0x59d782(0x28e)]?.['versions']?.[_0x59d782(0x1f5)]&&!this[_0x59d782(0x200)],this[_0x59d782(0x213)]=null,this[_0x59d782(0x2ba)]=0x0,this[_0x59d782(0x1d5)]=0x14,this[_0x59d782(0x261)]=_0x59d782(0x259),this['_sendErrorMessage']=(this['_inBrowser']?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x59d782(0x247))+this[_0x59d782(0x261)];}async[_0x1ce8fd(0x230)](){var _0x3cdd0e=_0x1ce8fd;if(this[_0x3cdd0e(0x213)])return this[_0x3cdd0e(0x213)];let _0x34ecf2;if(this[_0x3cdd0e(0x262)]||this['_inNextEdge'])_0x34ecf2=this[_0x3cdd0e(0x2b7)][_0x3cdd0e(0x211)];else{if(this[_0x3cdd0e(0x2b7)][_0x3cdd0e(0x28e)]?.[_0x3cdd0e(0x1fb)])_0x34ecf2=this[_0x3cdd0e(0x2b7)][_0x3cdd0e(0x28e)]?.[_0x3cdd0e(0x1fb)];else try{let _0x2dc4fe=await import(_0x3cdd0e(0x29b));_0x34ecf2=(await import((await import(_0x3cdd0e(0x233)))[_0x3cdd0e(0x26b)](_0x2dc4fe[_0x3cdd0e(0x2b0)](this[_0x3cdd0e(0x1d2)],_0x3cdd0e(0x22a)))[_0x3cdd0e(0x270)]()))[_0x3cdd0e(0x280)];}catch{try{_0x34ecf2=require(require(_0x3cdd0e(0x29b))['join'](this['nodeModules'],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x3cdd0e(0x213)]=_0x34ecf2,_0x34ecf2;}[_0x1ce8fd(0x265)](){var _0x22696a=_0x1ce8fd;this[_0x22696a(0x242)]||this['_connected']||this[_0x22696a(0x2ba)]>=this[_0x22696a(0x1d5)]||(this[_0x22696a(0x21c)]=!0x1,this['_connecting']=!0x0,this[_0x22696a(0x2ba)]++,this['_ws']=new Promise((_0x32246a,_0x119d54)=>{var _0x306319=_0x22696a;this[_0x306319(0x230)]()['then'](_0xd2fcb6=>{var _0x928aa7=_0x306319;let _0xf52324=new _0xd2fcb6(_0x928aa7(0x1ee)+(!this[_0x928aa7(0x262)]&&this[_0x928aa7(0x25e)]?_0x928aa7(0x218):this[_0x928aa7(0x216)])+':'+this[_0x928aa7(0x20f)]);_0xf52324['onerror']=()=>{var _0x2dead5=_0x928aa7;this['_allowedToSend']=!0x1,this[_0x2dead5(0x224)](_0xf52324),this['_attemptToReconnectShortly'](),_0x119d54(new Error(_0x2dead5(0x1e6)));},_0xf52324[_0x928aa7(0x1dd)]=()=>{var _0x5c7fa5=_0x928aa7;this[_0x5c7fa5(0x262)]||_0xf52324[_0x5c7fa5(0x255)]&&_0xf52324[_0x5c7fa5(0x255)][_0x5c7fa5(0x266)]&&_0xf52324[_0x5c7fa5(0x255)][_0x5c7fa5(0x266)](),_0x32246a(_0xf52324);},_0xf52324[_0x928aa7(0x1d6)]=()=>{var _0x311c6f=_0x928aa7;this[_0x311c6f(0x21c)]=!0x0,this[_0x311c6f(0x224)](_0xf52324),this[_0x311c6f(0x24d)]();},_0xf52324[_0x928aa7(0x1f9)]=_0x312778=>{var _0x2af7cf=_0x928aa7;try{_0x312778&&_0x312778[_0x2af7cf(0x2a1)]&&this[_0x2af7cf(0x262)]&&JSON['parse'](_0x312778[_0x2af7cf(0x2a1)])['method']===_0x2af7cf(0x203)&&this[_0x2af7cf(0x2b7)][_0x2af7cf(0x209)][_0x2af7cf(0x203)]();}catch{}};})[_0x306319(0x269)](_0x3b0cf3=>(this[_0x306319(0x1e0)]=!0x0,this[_0x306319(0x242)]=!0x1,this[_0x306319(0x21c)]=!0x1,this[_0x306319(0x240)]=!0x0,this['_connectAttemptCount']=0x0,_0x3b0cf3))[_0x306319(0x215)](_0x1eb38f=>(this['_connected']=!0x1,this['_connecting']=!0x1,console['warn'](_0x306319(0x1da)+this[_0x306319(0x261)]),_0x119d54(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x1eb38f&&_0x1eb38f[_0x306319(0x254)])))));}));}[_0x1ce8fd(0x224)](_0x57064e){var _0x385d0c=_0x1ce8fd;this['_connected']=!0x1,this[_0x385d0c(0x242)]=!0x1;try{_0x57064e['onclose']=null,_0x57064e[_0x385d0c(0x236)]=null,_0x57064e[_0x385d0c(0x1dd)]=null;}catch{}try{_0x57064e['readyState']<0x2&&_0x57064e[_0x385d0c(0x2b3)]();}catch{}}[_0x1ce8fd(0x24d)](){var _0x194f8a=_0x1ce8fd;clearTimeout(this[_0x194f8a(0x28b)]),!(this[_0x194f8a(0x2ba)]>=this[_0x194f8a(0x1d5)])&&(this[_0x194f8a(0x28b)]=setTimeout(()=>{var _0x61cf5e=_0x194f8a;this[_0x61cf5e(0x1e0)]||this['_connecting']||(this[_0x61cf5e(0x265)](),this[_0x61cf5e(0x210)]?.[_0x61cf5e(0x215)](()=>this[_0x61cf5e(0x24d)]()));},0x1f4),this[_0x194f8a(0x28b)]['unref']&&this[_0x194f8a(0x28b)]['unref']());}async[_0x1ce8fd(0x27b)](_0x430bf4){var _0x459abc=_0x1ce8fd;try{if(!this[_0x459abc(0x240)])return;this[_0x459abc(0x21c)]&&this[_0x459abc(0x265)](),(await this[_0x459abc(0x210)])[_0x459abc(0x27b)](JSON[_0x459abc(0x1dc)](_0x430bf4));}catch(_0x870d93){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x870d93&&_0x870d93[_0x459abc(0x254)])),this[_0x459abc(0x240)]=!0x1,this[_0x459abc(0x24d)]();}}};function b(_0x5683d7,_0x2e1345,_0x53cee8,_0x56f124,_0x5e1603,_0x43687e){var _0x2af861=_0x1ce8fd;let _0x1480fd=_0x53cee8[_0x2af861(0x2bb)](',')[_0x2af861(0x1fe)](_0x521457=>{var _0x2bbccf=_0x2af861;try{_0x5683d7[_0x2bbccf(0x23d)]||((_0x5e1603===_0x2bbccf(0x1d8)||_0x5e1603==='remix'||_0x5e1603==='astro'||_0x5e1603===_0x2bbccf(0x217))&&(_0x5e1603+=!_0x5683d7[_0x2bbccf(0x28e)]?.[_0x2bbccf(0x204)]?.[_0x2bbccf(0x1f5)]&&_0x5683d7[_0x2bbccf(0x28e)]?.[_0x2bbccf(0x1eb)]?.['NEXT_RUNTIME']!==_0x2bbccf(0x238)?_0x2bbccf(0x207):'\\x20server'),_0x5683d7['_console_ninja_session']={'id':+new Date(),'tool':_0x5e1603});let _0x2eacd4=new X(_0x5683d7,_0x2e1345,_0x521457,_0x56f124,_0x43687e);return _0x2eacd4[_0x2bbccf(0x27b)][_0x2bbccf(0x23a)](_0x2eacd4);}catch(_0x5a757){return console[_0x2bbccf(0x29e)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x5a757&&_0x5a757[_0x2bbccf(0x254)]),()=>{};}});return _0x610bc1=>_0x1480fd[_0x2af861(0x25f)](_0x3e5b5f=>_0x3e5b5f(_0x610bc1));}function W(_0x1eddcd){var _0x25aac9=_0x1ce8fd;let _0x2ebb1a=function(_0x11c59d,_0x32dcc5){return _0x32dcc5-_0x11c59d;},_0xc435cc;if(_0x1eddcd[_0x25aac9(0x1e3)])_0xc435cc=function(){var _0x3408b2=_0x25aac9;return _0x1eddcd[_0x3408b2(0x1e3)][_0x3408b2(0x285)]();};else{if(_0x1eddcd[_0x25aac9(0x28e)]&&_0x1eddcd[_0x25aac9(0x28e)]['hrtime']&&_0x1eddcd['process']?.['env']?.[_0x25aac9(0x26a)]!==_0x25aac9(0x238))_0xc435cc=function(){var _0x69e82b=_0x25aac9;return _0x1eddcd[_0x69e82b(0x28e)][_0x69e82b(0x201)]();},_0x2ebb1a=function(_0x5a463a,_0x3c1951){return 0x3e8*(_0x3c1951[0x0]-_0x5a463a[0x0])+(_0x3c1951[0x1]-_0x5a463a[0x1])/0xf4240;};else try{let {performance:_0x5aa75d}=require(_0x25aac9(0x1f2));_0xc435cc=function(){var _0xda71d7=_0x25aac9;return _0x5aa75d[_0xda71d7(0x285)]();};}catch{_0xc435cc=function(){return+new Date();};}}return{'elapsed':_0x2ebb1a,'timeStamp':_0xc435cc,'now':()=>Date[_0x25aac9(0x285)]()};}function J(_0x46b5e8,_0x2fc621,_0x1ea8a8){var _0x57d75b=_0x1ce8fd;if(_0x46b5e8[_0x57d75b(0x28a)]!==void 0x0)return _0x46b5e8[_0x57d75b(0x28a)];let _0x2e7241=_0x46b5e8['process']?.[_0x57d75b(0x204)]?.[_0x57d75b(0x1f5)]||_0x46b5e8[_0x57d75b(0x28e)]?.[_0x57d75b(0x1eb)]?.[_0x57d75b(0x26a)]===_0x57d75b(0x238);return _0x2e7241&&_0x1ea8a8===_0x57d75b(0x1f0)?_0x46b5e8[_0x57d75b(0x28a)]=!0x1:_0x46b5e8[_0x57d75b(0x28a)]=_0x2e7241||!_0x2fc621||_0x46b5e8['location']?.[_0x57d75b(0x287)]&&_0x2fc621['includes'](_0x46b5e8[_0x57d75b(0x209)][_0x57d75b(0x287)]),_0x46b5e8[_0x57d75b(0x28a)];}function Y(_0x52943c,_0x396865,_0x3267d2,_0x3ef9d8){var _0x1a6332=_0x1ce8fd;_0x52943c=_0x52943c,_0x396865=_0x396865,_0x3267d2=_0x3267d2,_0x3ef9d8=_0x3ef9d8;let _0x24bae9=W(_0x52943c),_0x4b109f=_0x24bae9[_0x1a6332(0x250)],_0x2a3998=_0x24bae9[_0x1a6332(0x26c)];class _0x1084b5{constructor(){var _0x1d0435=_0x1a6332;this[_0x1d0435(0x27f)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x1d0435(0x2a4)]=/^(0|[1-9][0-9]*)$/,this[_0x1d0435(0x2a7)]=/'([^\\\\']|\\\\')*'/,this[_0x1d0435(0x1e7)]=_0x52943c[_0x1d0435(0x1d1)],this[_0x1d0435(0x25c)]=_0x52943c['HTMLAllCollection'],this['_getOwnPropertyDescriptor']=Object[_0x1d0435(0x27d)],this[_0x1d0435(0x20b)]=Object[_0x1d0435(0x229)],this[_0x1d0435(0x228)]=_0x52943c[_0x1d0435(0x249)],this[_0x1d0435(0x244)]=RegExp[_0x1d0435(0x282)]['toString'],this[_0x1d0435(0x279)]=Date[_0x1d0435(0x282)][_0x1d0435(0x270)];}[_0x1a6332(0x1d3)](_0x4e191e,_0xf7b105,_0xe3dd81,_0x1b2991){var _0x175c54=_0x1a6332,_0x1c0566=this,_0x319c19=_0xe3dd81[_0x175c54(0x274)];function _0x173185(_0x4e678f,_0x2e2cdf,_0x19fb2b){var _0x7a117c=_0x175c54;_0x2e2cdf[_0x7a117c(0x251)]=_0x7a117c(0x1f1),_0x2e2cdf[_0x7a117c(0x2ae)]=_0x4e678f[_0x7a117c(0x254)],_0x1d93ca=_0x19fb2b[_0x7a117c(0x1f5)][_0x7a117c(0x1ff)],_0x19fb2b[_0x7a117c(0x1f5)][_0x7a117c(0x1ff)]=_0x2e2cdf,_0x1c0566[_0x7a117c(0x278)](_0x2e2cdf,_0x19fb2b);}try{_0xe3dd81[_0x175c54(0x296)]++,_0xe3dd81[_0x175c54(0x274)]&&_0xe3dd81[_0x175c54(0x286)][_0x175c54(0x2b1)](_0xf7b105);var _0x2f48ec,_0x4f80fb,_0x4ff9a0,_0x4859d2,_0x1d3312=[],_0x5d2316=[],_0x185e5b,_0x5362ba=this[_0x175c54(0x1fc)](_0xf7b105),_0x3f8cf7=_0x5362ba===_0x175c54(0x2be),_0x1fcbe1=!0x1,_0x2693cc=_0x5362ba==='function',_0x3099cf=this[_0x175c54(0x22f)](_0x5362ba),_0x37944e=this[_0x175c54(0x1e2)](_0x5362ba),_0x3cda0f=_0x3099cf||_0x37944e,_0x51702b={},_0x572396=0x0,_0x467259=!0x1,_0x1d93ca,_0xff125f=/^(([1-9]{1}[0-9]*)|0)$/;if(_0xe3dd81['depth']){if(_0x3f8cf7){if(_0x4f80fb=_0xf7b105['length'],_0x4f80fb>_0xe3dd81[_0x175c54(0x252)]){for(_0x4ff9a0=0x0,_0x4859d2=_0xe3dd81[_0x175c54(0x252)],_0x2f48ec=_0x4ff9a0;_0x2f48ec<_0x4859d2;_0x2f48ec++)_0x5d2316[_0x175c54(0x2b1)](_0x1c0566[_0x175c54(0x24b)](_0x1d3312,_0xf7b105,_0x5362ba,_0x2f48ec,_0xe3dd81));_0x4e191e[_0x175c54(0x27a)]=!0x0;}else{for(_0x4ff9a0=0x0,_0x4859d2=_0x4f80fb,_0x2f48ec=_0x4ff9a0;_0x2f48ec<_0x4859d2;_0x2f48ec++)_0x5d2316['push'](_0x1c0566[_0x175c54(0x24b)](_0x1d3312,_0xf7b105,_0x5362ba,_0x2f48ec,_0xe3dd81));}_0xe3dd81['autoExpandPropertyCount']+=_0x5d2316[_0x175c54(0x23b)];}if(!(_0x5362ba===_0x175c54(0x221)||_0x5362ba===_0x175c54(0x1d1))&&!_0x3099cf&&_0x5362ba!==_0x175c54(0x277)&&_0x5362ba!==_0x175c54(0x263)&&_0x5362ba!==_0x175c54(0x2ac)){var _0x64b8a5=_0x1b2991[_0x175c54(0x29c)]||_0xe3dd81['props'];if(this[_0x175c54(0x289)](_0xf7b105)?(_0x2f48ec=0x0,_0xf7b105[_0x175c54(0x25f)](function(_0x4d5680){var _0x39cad1=_0x175c54;if(_0x572396++,_0xe3dd81['autoExpandPropertyCount']++,_0x572396>_0x64b8a5){_0x467259=!0x0;return;}if(!_0xe3dd81[_0x39cad1(0x258)]&&_0xe3dd81[_0x39cad1(0x274)]&&_0xe3dd81[_0x39cad1(0x26e)]>_0xe3dd81[_0x39cad1(0x1d9)]){_0x467259=!0x0;return;}_0x5d2316[_0x39cad1(0x2b1)](_0x1c0566[_0x39cad1(0x24b)](_0x1d3312,_0xf7b105,_0x39cad1(0x20e),_0x2f48ec++,_0xe3dd81,function(_0x491f5e){return function(){return _0x491f5e;};}(_0x4d5680)));})):this[_0x175c54(0x253)](_0xf7b105)&&_0xf7b105['forEach'](function(_0x720a28,_0x1ba6a0){var _0x347c80=_0x175c54;if(_0x572396++,_0xe3dd81[_0x347c80(0x26e)]++,_0x572396>_0x64b8a5){_0x467259=!0x0;return;}if(!_0xe3dd81[_0x347c80(0x258)]&&_0xe3dd81[_0x347c80(0x274)]&&_0xe3dd81[_0x347c80(0x26e)]>_0xe3dd81['autoExpandLimit']){_0x467259=!0x0;return;}var _0x243ceb=_0x1ba6a0[_0x347c80(0x270)]();_0x243ceb[_0x347c80(0x23b)]>0x64&&(_0x243ceb=_0x243ceb[_0x347c80(0x22c)](0x0,0x64)+_0x347c80(0x246)),_0x5d2316[_0x347c80(0x2b1)](_0x1c0566[_0x347c80(0x24b)](_0x1d3312,_0xf7b105,_0x347c80(0x2bd),_0x243ceb,_0xe3dd81,function(_0x5f44cc){return function(){return _0x5f44cc;};}(_0x720a28)));}),!_0x1fcbe1){try{for(_0x185e5b in _0xf7b105)if(!(_0x3f8cf7&&_0xff125f[_0x175c54(0x264)](_0x185e5b))&&!this[_0x175c54(0x23f)](_0xf7b105,_0x185e5b,_0xe3dd81)){if(_0x572396++,_0xe3dd81[_0x175c54(0x26e)]++,_0x572396>_0x64b8a5){_0x467259=!0x0;break;}if(!_0xe3dd81['isExpressionToEvaluate']&&_0xe3dd81[_0x175c54(0x274)]&&_0xe3dd81[_0x175c54(0x26e)]>_0xe3dd81[_0x175c54(0x1d9)]){_0x467259=!0x0;break;}_0x5d2316[_0x175c54(0x2b1)](_0x1c0566[_0x175c54(0x1f4)](_0x1d3312,_0x51702b,_0xf7b105,_0x5362ba,_0x185e5b,_0xe3dd81));}}catch{}if(_0x51702b[_0x175c54(0x298)]=!0x0,_0x2693cc&&(_0x51702b[_0x175c54(0x1df)]=!0x0),!_0x467259){var _0x51e525=[][_0x175c54(0x299)](this['_getOwnPropertyNames'](_0xf7b105))[_0x175c54(0x299)](this[_0x175c54(0x267)](_0xf7b105));for(_0x2f48ec=0x0,_0x4f80fb=_0x51e525['length'];_0x2f48ec<_0x4f80fb;_0x2f48ec++)if(_0x185e5b=_0x51e525[_0x2f48ec],!(_0x3f8cf7&&_0xff125f['test'](_0x185e5b[_0x175c54(0x270)]()))&&!this[_0x175c54(0x23f)](_0xf7b105,_0x185e5b,_0xe3dd81)&&!_0x51702b[_0x175c54(0x1fa)+_0x185e5b[_0x175c54(0x270)]()]){if(_0x572396++,_0xe3dd81[_0x175c54(0x26e)]++,_0x572396>_0x64b8a5){_0x467259=!0x0;break;}if(!_0xe3dd81['isExpressionToEvaluate']&&_0xe3dd81['autoExpand']&&_0xe3dd81[_0x175c54(0x26e)]>_0xe3dd81[_0x175c54(0x1d9)]){_0x467259=!0x0;break;}_0x5d2316[_0x175c54(0x2b1)](_0x1c0566[_0x175c54(0x1f4)](_0x1d3312,_0x51702b,_0xf7b105,_0x5362ba,_0x185e5b,_0xe3dd81));}}}}}if(_0x4e191e[_0x175c54(0x251)]=_0x5362ba,_0x3cda0f?(_0x4e191e[_0x175c54(0x271)]=_0xf7b105['valueOf'](),this[_0x175c54(0x21d)](_0x5362ba,_0x4e191e,_0xe3dd81,_0x1b2991)):_0x5362ba===_0x175c54(0x21b)?_0x4e191e[_0x175c54(0x271)]=this[_0x175c54(0x279)][_0x175c54(0x25b)](_0xf7b105):_0x5362ba==='bigint'?_0x4e191e[_0x175c54(0x271)]=_0xf7b105[_0x175c54(0x270)]():_0x5362ba===_0x175c54(0x27e)?_0x4e191e[_0x175c54(0x271)]=this[_0x175c54(0x244)][_0x175c54(0x25b)](_0xf7b105):_0x5362ba==='symbol'&&this[_0x175c54(0x228)]?_0x4e191e[_0x175c54(0x271)]=this[_0x175c54(0x228)]['prototype'][_0x175c54(0x270)][_0x175c54(0x25b)](_0xf7b105):!_0xe3dd81[_0x175c54(0x21a)]&&!(_0x5362ba===_0x175c54(0x221)||_0x5362ba===_0x175c54(0x1d1))&&(delete _0x4e191e[_0x175c54(0x271)],_0x4e191e[_0x175c54(0x22d)]=!0x0),_0x467259&&(_0x4e191e[_0x175c54(0x1ea)]=!0x0),_0x1d93ca=_0xe3dd81[_0x175c54(0x1f5)][_0x175c54(0x1ff)],_0xe3dd81['node']['current']=_0x4e191e,this[_0x175c54(0x278)](_0x4e191e,_0xe3dd81),_0x5d2316[_0x175c54(0x23b)]){for(_0x2f48ec=0x0,_0x4f80fb=_0x5d2316['length'];_0x2f48ec<_0x4f80fb;_0x2f48ec++)_0x5d2316[_0x2f48ec](_0x2f48ec);}_0x1d3312[_0x175c54(0x23b)]&&(_0x4e191e[_0x175c54(0x29c)]=_0x1d3312);}catch(_0x1a8c25){_0x173185(_0x1a8c25,_0x4e191e,_0xe3dd81);}return this[_0x175c54(0x237)](_0xf7b105,_0x4e191e),this[_0x175c54(0x28f)](_0x4e191e,_0xe3dd81),_0xe3dd81[_0x175c54(0x1f5)][_0x175c54(0x1ff)]=_0x1d93ca,_0xe3dd81[_0x175c54(0x296)]--,_0xe3dd81[_0x175c54(0x274)]=_0x319c19,_0xe3dd81[_0x175c54(0x274)]&&_0xe3dd81[_0x175c54(0x286)][_0x175c54(0x26f)](),_0x4e191e;}[_0x1a6332(0x267)](_0x1bf0c4){var _0x2f46ca=_0x1a6332;return Object[_0x2f46ca(0x2ad)]?Object[_0x2f46ca(0x2ad)](_0x1bf0c4):[];}[_0x1a6332(0x289)](_0x20d570){var _0x1969bd=_0x1a6332;return!!(_0x20d570&&_0x52943c['Set']&&this[_0x1969bd(0x2a8)](_0x20d570)==='[object\\x20Set]'&&_0x20d570[_0x1969bd(0x25f)]);}[_0x1a6332(0x23f)](_0x3f1c37,_0x284724,_0x6750f1){var _0x26d8c9=_0x1a6332;return _0x6750f1[_0x26d8c9(0x1fd)]?typeof _0x3f1c37[_0x284724]==_0x26d8c9(0x24e):!0x1;}['_type'](_0x48dede){var _0x2640fc=_0x1a6332,_0x442280='';return _0x442280=typeof _0x48dede,_0x442280===_0x2640fc(0x2a5)?this[_0x2640fc(0x2a8)](_0x48dede)===_0x2640fc(0x222)?_0x442280=_0x2640fc(0x2be):this[_0x2640fc(0x2a8)](_0x48dede)===_0x2640fc(0x206)?_0x442280=_0x2640fc(0x21b):this['_objectToString'](_0x48dede)==='[object\\x20BigInt]'?_0x442280=_0x2640fc(0x2ac):_0x48dede===null?_0x442280=_0x2640fc(0x221):_0x48dede[_0x2640fc(0x20a)]&&(_0x442280=_0x48dede[_0x2640fc(0x20a)][_0x2640fc(0x281)]||_0x442280):_0x442280==='undefined'&&this[_0x2640fc(0x25c)]&&_0x48dede instanceof this[_0x2640fc(0x25c)]&&(_0x442280=_0x2640fc(0x283)),_0x442280;}['_objectToString'](_0x445ecc){var _0x170443=_0x1a6332;return Object[_0x170443(0x282)][_0x170443(0x270)][_0x170443(0x25b)](_0x445ecc);}[_0x1a6332(0x22f)](_0x4af4a0){var _0x347691=_0x1a6332;return _0x4af4a0==='boolean'||_0x4af4a0==='string'||_0x4af4a0===_0x347691(0x1d7);}[_0x1a6332(0x1e2)](_0xb99a28){var _0x1cd9b4=_0x1a6332;return _0xb99a28===_0x1cd9b4(0x1f8)||_0xb99a28===_0x1cd9b4(0x277)||_0xb99a28===_0x1cd9b4(0x25a);}[_0x1a6332(0x24b)](_0x3b5ff8,_0x100c44,_0x5cc93d,_0x1862c2,_0x5e6642,_0xe29c04){var _0xdfc431=this;return function(_0x2b0b7c){var _0xdf5f00=_0x5cae,_0x527463=_0x5e6642[_0xdf5f00(0x1f5)][_0xdf5f00(0x1ff)],_0x2e1ba9=_0x5e6642['node'][_0xdf5f00(0x220)],_0x34ef74=_0x5e6642[_0xdf5f00(0x1f5)][_0xdf5f00(0x232)];_0x5e6642[_0xdf5f00(0x1f5)][_0xdf5f00(0x232)]=_0x527463,_0x5e6642['node'][_0xdf5f00(0x220)]=typeof _0x1862c2==_0xdf5f00(0x1d7)?_0x1862c2:_0x2b0b7c,_0x3b5ff8[_0xdf5f00(0x2b1)](_0xdfc431[_0xdf5f00(0x1e9)](_0x100c44,_0x5cc93d,_0x1862c2,_0x5e6642,_0xe29c04)),_0x5e6642[_0xdf5f00(0x1f5)][_0xdf5f00(0x232)]=_0x34ef74,_0x5e6642[_0xdf5f00(0x1f5)][_0xdf5f00(0x220)]=_0x2e1ba9;};}[_0x1a6332(0x1f4)](_0x2dbf0a,_0x2c34c4,_0x5e79e1,_0x84fb05,_0x2fcb38,_0x119087,_0x2d46d2){var _0x5b28bf=_0x1a6332,_0x306240=this;return _0x2c34c4[_0x5b28bf(0x1fa)+_0x2fcb38[_0x5b28bf(0x270)]()]=!0x0,function(_0x1965f5){var _0x30620b=_0x5b28bf,_0x143ed0=_0x119087[_0x30620b(0x1f5)][_0x30620b(0x1ff)],_0x268815=_0x119087[_0x30620b(0x1f5)][_0x30620b(0x220)],_0x245e72=_0x119087[_0x30620b(0x1f5)][_0x30620b(0x232)];_0x119087[_0x30620b(0x1f5)][_0x30620b(0x232)]=_0x143ed0,_0x119087['node'][_0x30620b(0x220)]=_0x1965f5,_0x2dbf0a[_0x30620b(0x2b1)](_0x306240[_0x30620b(0x1e9)](_0x5e79e1,_0x84fb05,_0x2fcb38,_0x119087,_0x2d46d2)),_0x119087[_0x30620b(0x1f5)]['parent']=_0x245e72,_0x119087[_0x30620b(0x1f5)][_0x30620b(0x220)]=_0x268815;};}[_0x1a6332(0x1e9)](_0x4c3a9,_0x54670e,_0xa83a5d,_0x233907,_0x204c53){var _0x5200b7=_0x1a6332,_0x1df4ec=this;_0x204c53||(_0x204c53=function(_0x176a86,_0x303511){return _0x176a86[_0x303511];});var _0x6d06e9=_0xa83a5d[_0x5200b7(0x270)](),_0x3f714d=_0x233907['expressionsToEvaluate']||{},_0x18831f=_0x233907['depth'],_0x49bf46=_0x233907[_0x5200b7(0x258)];try{var _0x2b542d=this[_0x5200b7(0x253)](_0x4c3a9),_0x3924cf=_0x6d06e9;_0x2b542d&&_0x3924cf[0x0]==='\\x27'&&(_0x3924cf=_0x3924cf['substr'](0x1,_0x3924cf[_0x5200b7(0x23b)]-0x2));var _0x45de07=_0x233907[_0x5200b7(0x227)]=_0x3f714d[_0x5200b7(0x1fa)+_0x3924cf];_0x45de07&&(_0x233907[_0x5200b7(0x21a)]=_0x233907['depth']+0x1),_0x233907[_0x5200b7(0x258)]=!!_0x45de07;var _0x348761=typeof _0xa83a5d==_0x5200b7(0x2b4),_0xa55f20={'name':_0x348761||_0x2b542d?_0x6d06e9:this['_propertyName'](_0x6d06e9)};if(_0x348761&&(_0xa55f20[_0x5200b7(0x2b4)]=!0x0),!(_0x54670e===_0x5200b7(0x2be)||_0x54670e==='Error')){var _0x188ceb=this[_0x5200b7(0x235)](_0x4c3a9,_0xa83a5d);if(_0x188ceb&&(_0x188ceb[_0x5200b7(0x219)]&&(_0xa55f20[_0x5200b7(0x1e8)]=!0x0),_0x188ceb[_0x5200b7(0x28c)]&&!_0x45de07&&!_0x233907[_0x5200b7(0x295)]))return _0xa55f20[_0x5200b7(0x205)]=!0x0,this[_0x5200b7(0x1de)](_0xa55f20,_0x233907),_0xa55f20;}var _0x36324d;try{_0x36324d=_0x204c53(_0x4c3a9,_0xa83a5d);}catch(_0x2267e9){return _0xa55f20={'name':_0x6d06e9,'type':_0x5200b7(0x1f1),'error':_0x2267e9[_0x5200b7(0x254)]},this[_0x5200b7(0x1de)](_0xa55f20,_0x233907),_0xa55f20;}var _0x4fd9a3=this[_0x5200b7(0x1fc)](_0x36324d),_0x4bb97b=this['_isPrimitiveType'](_0x4fd9a3);if(_0xa55f20[_0x5200b7(0x251)]=_0x4fd9a3,_0x4bb97b)this[_0x5200b7(0x1de)](_0xa55f20,_0x233907,_0x36324d,function(){var _0x117c5d=_0x5200b7;_0xa55f20[_0x117c5d(0x271)]=_0x36324d[_0x117c5d(0x2bf)](),!_0x45de07&&_0x1df4ec[_0x117c5d(0x21d)](_0x4fd9a3,_0xa55f20,_0x233907,{});});else{var _0x2b6df6=_0x233907[_0x5200b7(0x274)]&&_0x233907[_0x5200b7(0x296)]<_0x233907['autoExpandMaxDepth']&&_0x233907[_0x5200b7(0x286)]['indexOf'](_0x36324d)<0x0&&_0x4fd9a3!==_0x5200b7(0x24e)&&_0x233907[_0x5200b7(0x26e)]<_0x233907[_0x5200b7(0x1d9)];_0x2b6df6||_0x233907[_0x5200b7(0x296)]<_0x18831f||_0x45de07?(this[_0x5200b7(0x1d3)](_0xa55f20,_0x36324d,_0x233907,_0x45de07||{}),this[_0x5200b7(0x237)](_0x36324d,_0xa55f20)):this[_0x5200b7(0x1de)](_0xa55f20,_0x233907,_0x36324d,function(){var _0x5daa34=_0x5200b7;_0x4fd9a3===_0x5daa34(0x221)||_0x4fd9a3==='undefined'||(delete _0xa55f20['value'],_0xa55f20[_0x5daa34(0x22d)]=!0x0);});}return _0xa55f20;}finally{_0x233907[_0x5200b7(0x227)]=_0x3f714d,_0x233907[_0x5200b7(0x21a)]=_0x18831f,_0x233907['isExpressionToEvaluate']=_0x49bf46;}}[_0x1a6332(0x21d)](_0x51b644,_0x2a4c67,_0x3d4ee6,_0x1572ed){var _0x22308b=_0x1a6332,_0x2ec147=_0x1572ed[_0x22308b(0x2bc)]||_0x3d4ee6[_0x22308b(0x2bc)];if((_0x51b644==='string'||_0x51b644===_0x22308b(0x277))&&_0x2a4c67['value']){let _0x4a843c=_0x2a4c67[_0x22308b(0x271)][_0x22308b(0x23b)];_0x3d4ee6[_0x22308b(0x293)]+=_0x4a843c,_0x3d4ee6[_0x22308b(0x293)]>_0x3d4ee6[_0x22308b(0x268)]?(_0x2a4c67[_0x22308b(0x22d)]='',delete _0x2a4c67[_0x22308b(0x271)]):_0x4a843c>_0x2ec147&&(_0x2a4c67['capped']=_0x2a4c67[_0x22308b(0x271)][_0x22308b(0x1f3)](0x0,_0x2ec147),delete _0x2a4c67[_0x22308b(0x271)]);}}[_0x1a6332(0x253)](_0x5404a6){var _0x4b4a29=_0x1a6332;return!!(_0x5404a6&&_0x52943c['Map']&&this[_0x4b4a29(0x2a8)](_0x5404a6)===_0x4b4a29(0x1ed)&&_0x5404a6[_0x4b4a29(0x25f)]);}[_0x1a6332(0x297)](_0x54a201){var _0x2df77f=_0x1a6332;if(_0x54a201[_0x2df77f(0x1f7)](/^\\d+$/))return _0x54a201;var _0x190c7a;try{_0x190c7a=JSON[_0x2df77f(0x1dc)](''+_0x54a201);}catch{_0x190c7a='\\x22'+this[_0x2df77f(0x2a8)](_0x54a201)+'\\x22';}return _0x190c7a[_0x2df77f(0x1f7)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x190c7a=_0x190c7a['substr'](0x1,_0x190c7a[_0x2df77f(0x23b)]-0x2):_0x190c7a=_0x190c7a[_0x2df77f(0x226)](/'/g,'\\x5c\\x27')[_0x2df77f(0x226)](/\\\\\"/g,'\\x22')[_0x2df77f(0x226)](/(^\"|\"$)/g,'\\x27'),_0x190c7a;}[_0x1a6332(0x1de)](_0x351686,_0x3b76a7,_0x3e1a1d,_0x399793){var _0x563c73=_0x1a6332;this[_0x563c73(0x278)](_0x351686,_0x3b76a7),_0x399793&&_0x399793(),this[_0x563c73(0x237)](_0x3e1a1d,_0x351686),this['_treeNodePropertiesAfterFullValue'](_0x351686,_0x3b76a7);}[_0x1a6332(0x278)](_0x1cb43f,_0xbe9e75){var _0x29b36b=_0x1a6332;this['_setNodeId'](_0x1cb43f,_0xbe9e75),this[_0x29b36b(0x2a3)](_0x1cb43f,_0xbe9e75),this['_setNodeExpressionPath'](_0x1cb43f,_0xbe9e75),this[_0x29b36b(0x214)](_0x1cb43f,_0xbe9e75);}['_setNodeId'](_0x46a615,_0x22b704){}[_0x1a6332(0x2a3)](_0x4c6fb2,_0x4277a8){}[_0x1a6332(0x241)](_0x40594a,_0x6bedfc){}[_0x1a6332(0x25d)](_0x1a1ada){return _0x1a1ada===this['_undefined'];}[_0x1a6332(0x28f)](_0x421c68,_0x529d75){var _0x52cfc5=_0x1a6332;this[_0x52cfc5(0x241)](_0x421c68,_0x529d75),this[_0x52cfc5(0x1e5)](_0x421c68),_0x529d75[_0x52cfc5(0x1e1)]&&this['_sortProps'](_0x421c68),this[_0x52cfc5(0x243)](_0x421c68,_0x529d75),this['_addLoadNode'](_0x421c68,_0x529d75),this[_0x52cfc5(0x2b6)](_0x421c68);}[_0x1a6332(0x237)](_0x1d7671,_0x5680ea){var _0x4a7f83=_0x1a6332;let _0x20d919;try{_0x52943c[_0x4a7f83(0x2a0)]&&(_0x20d919=_0x52943c['console']['error'],_0x52943c[_0x4a7f83(0x2a0)][_0x4a7f83(0x2ae)]=function(){}),_0x1d7671&&typeof _0x1d7671[_0x4a7f83(0x23b)]==_0x4a7f83(0x1d7)&&(_0x5680ea[_0x4a7f83(0x23b)]=_0x1d7671['length']);}catch{}finally{_0x20d919&&(_0x52943c[_0x4a7f83(0x2a0)][_0x4a7f83(0x2ae)]=_0x20d919);}if(_0x5680ea['type']===_0x4a7f83(0x1d7)||_0x5680ea[_0x4a7f83(0x251)]===_0x4a7f83(0x25a)){if(isNaN(_0x5680ea['value']))_0x5680ea['nan']=!0x0,delete _0x5680ea['value'];else switch(_0x5680ea[_0x4a7f83(0x271)]){case Number[_0x4a7f83(0x22e)]:_0x5680ea['positiveInfinity']=!0x0,delete _0x5680ea[_0x4a7f83(0x271)];break;case Number[_0x4a7f83(0x202)]:_0x5680ea['negativeInfinity']=!0x0,delete _0x5680ea['value'];break;case 0x0:this[_0x4a7f83(0x292)](_0x5680ea[_0x4a7f83(0x271)])&&(_0x5680ea[_0x4a7f83(0x275)]=!0x0);break;}}else _0x5680ea[_0x4a7f83(0x251)]===_0x4a7f83(0x24e)&&typeof _0x1d7671[_0x4a7f83(0x281)]==_0x4a7f83(0x1db)&&_0x1d7671[_0x4a7f83(0x281)]&&_0x5680ea['name']&&_0x1d7671['name']!==_0x5680ea[_0x4a7f83(0x281)]&&(_0x5680ea[_0x4a7f83(0x225)]=_0x1d7671[_0x4a7f83(0x281)]);}[_0x1a6332(0x292)](_0x4ddcc4){var _0x5522ef=_0x1a6332;return 0x1/_0x4ddcc4===Number[_0x5522ef(0x202)];}[_0x1a6332(0x1ef)](_0x27d0ae){var _0x57a927=_0x1a6332;!_0x27d0ae[_0x57a927(0x29c)]||!_0x27d0ae[_0x57a927(0x29c)]['length']||_0x27d0ae[_0x57a927(0x251)]===_0x57a927(0x2be)||_0x27d0ae[_0x57a927(0x251)]===_0x57a927(0x2bd)||_0x27d0ae[_0x57a927(0x251)]===_0x57a927(0x20e)||_0x27d0ae['props'][_0x57a927(0x23c)](function(_0x419b23,_0x4f15a5){var _0x17eb96=_0x57a927,_0x1c8af2=_0x419b23[_0x17eb96(0x281)][_0x17eb96(0x245)](),_0x6de1f2=_0x4f15a5[_0x17eb96(0x281)]['toLowerCase']();return _0x1c8af2<_0x6de1f2?-0x1:_0x1c8af2>_0x6de1f2?0x1:0x0;});}['_addFunctionsNode'](_0x50040b,_0x503b20){var _0xbebcab=_0x1a6332;if(!(_0x503b20[_0xbebcab(0x1fd)]||!_0x50040b[_0xbebcab(0x29c)]||!_0x50040b[_0xbebcab(0x29c)][_0xbebcab(0x23b)])){for(var _0x5ea7ee=[],_0x13a1bb=[],_0x49a877=0x0,_0x221260=_0x50040b[_0xbebcab(0x29c)][_0xbebcab(0x23b)];_0x49a877<_0x221260;_0x49a877++){var _0x3829cd=_0x50040b[_0xbebcab(0x29c)][_0x49a877];_0x3829cd[_0xbebcab(0x251)]===_0xbebcab(0x24e)?_0x5ea7ee[_0xbebcab(0x2b1)](_0x3829cd):_0x13a1bb[_0xbebcab(0x2b1)](_0x3829cd);}if(!(!_0x13a1bb[_0xbebcab(0x23b)]||_0x5ea7ee[_0xbebcab(0x23b)]<=0x1)){_0x50040b['props']=_0x13a1bb;var _0xa7b754={'functionsNode':!0x0,'props':_0x5ea7ee};this[_0xbebcab(0x2a6)](_0xa7b754,_0x503b20),this['_setNodeLabel'](_0xa7b754,_0x503b20),this['_setNodeExpandableState'](_0xa7b754),this[_0xbebcab(0x214)](_0xa7b754,_0x503b20),_0xa7b754['id']+='\\x20f',_0x50040b[_0xbebcab(0x29c)]['unshift'](_0xa7b754);}}}[_0x1a6332(0x288)](_0x4db326,_0xa490f){}[_0x1a6332(0x1e5)](_0x388987){}[_0x1a6332(0x29d)](_0xd2e7a1){var _0x3e9763=_0x1a6332;return Array[_0x3e9763(0x20c)](_0xd2e7a1)||typeof _0xd2e7a1==_0x3e9763(0x2a5)&&this[_0x3e9763(0x2a8)](_0xd2e7a1)==='[object\\x20Array]';}[_0x1a6332(0x214)](_0x448277,_0xf04f35){}[_0x1a6332(0x2b6)](_0x58c7e1){var _0x30aa06=_0x1a6332;delete _0x58c7e1[_0x30aa06(0x1d4)],delete _0x58c7e1[_0x30aa06(0x2a9)],delete _0x58c7e1['_hasMapOnItsPath'];}[_0x1a6332(0x28d)](_0xbb3828,_0x4df80e){}}let _0x5a4cd2=new _0x1084b5(),_0x2dd719={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x4cb876={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x3d5932(_0x4efab3,_0x2d1a8b,_0x450ce5,_0x264b15,_0x11777b,_0x27fd6a){var _0xdb279b=_0x1a6332;let _0x1f4a99,_0x264d73;try{_0x264d73=_0x2a3998(),_0x1f4a99=_0x3267d2[_0x2d1a8b],!_0x1f4a99||_0x264d73-_0x1f4a99['ts']>0x1f4&&_0x1f4a99[_0xdb279b(0x21f)]&&_0x1f4a99['time']/_0x1f4a99[_0xdb279b(0x21f)]<0x64?(_0x3267d2[_0x2d1a8b]=_0x1f4a99={'count':0x0,'time':0x0,'ts':_0x264d73},_0x3267d2[_0xdb279b(0x27c)]={}):_0x264d73-_0x3267d2['hits']['ts']>0x32&&_0x3267d2[_0xdb279b(0x27c)][_0xdb279b(0x21f)]&&_0x3267d2[_0xdb279b(0x27c)][_0xdb279b(0x239)]/_0x3267d2[_0xdb279b(0x27c)]['count']<0x64&&(_0x3267d2[_0xdb279b(0x27c)]={});let _0x5f5af9=[],_0x501d19=_0x1f4a99[_0xdb279b(0x212)]||_0x3267d2[_0xdb279b(0x27c)][_0xdb279b(0x212)]?_0x4cb876:_0x2dd719,_0x1e6e5e=_0x452de7=>{var _0x19c31b=_0xdb279b;let _0x203b31={};return _0x203b31[_0x19c31b(0x29c)]=_0x452de7[_0x19c31b(0x29c)],_0x203b31[_0x19c31b(0x252)]=_0x452de7[_0x19c31b(0x252)],_0x203b31[_0x19c31b(0x2bc)]=_0x452de7[_0x19c31b(0x2bc)],_0x203b31['totalStrLength']=_0x452de7['totalStrLength'],_0x203b31[_0x19c31b(0x1d9)]=_0x452de7[_0x19c31b(0x1d9)],_0x203b31[_0x19c31b(0x208)]=_0x452de7['autoExpandMaxDepth'],_0x203b31[_0x19c31b(0x1e1)]=!0x1,_0x203b31[_0x19c31b(0x1fd)]=!_0x396865,_0x203b31[_0x19c31b(0x21a)]=0x1,_0x203b31[_0x19c31b(0x296)]=0x0,_0x203b31['expId']='root_exp_id',_0x203b31[_0x19c31b(0x291)]='root_exp',_0x203b31[_0x19c31b(0x274)]=!0x0,_0x203b31[_0x19c31b(0x286)]=[],_0x203b31[_0x19c31b(0x26e)]=0x0,_0x203b31['resolveGetters']=!0x0,_0x203b31[_0x19c31b(0x293)]=0x0,_0x203b31[_0x19c31b(0x1f5)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x203b31;};for(var _0x396ffd=0x0;_0x396ffd<_0x11777b[_0xdb279b(0x23b)];_0x396ffd++)_0x5f5af9[_0xdb279b(0x2b1)](_0x5a4cd2[_0xdb279b(0x1d3)]({'timeNode':_0x4efab3==='time'||void 0x0},_0x11777b[_0x396ffd],_0x1e6e5e(_0x501d19),{}));if(_0x4efab3===_0xdb279b(0x256)){let _0x23f1e3=Error[_0xdb279b(0x2b5)];try{Error[_0xdb279b(0x2b5)]=0x1/0x0,_0x5f5af9['push'](_0x5a4cd2[_0xdb279b(0x1d3)]({'stackNode':!0x0},new Error()[_0xdb279b(0x290)],_0x1e6e5e(_0x501d19),{'strLength':0x1/0x0}));}finally{Error[_0xdb279b(0x2b5)]=_0x23f1e3;}}return{'method':_0xdb279b(0x2aa),'version':_0x3ef9d8,'args':[{'ts':_0x450ce5,'session':_0x264b15,'args':_0x5f5af9,'id':_0x2d1a8b,'context':_0x27fd6a}]};}catch(_0x567d14){return{'method':'log','version':_0x3ef9d8,'args':[{'ts':_0x450ce5,'session':_0x264b15,'args':[{'type':_0xdb279b(0x1f1),'error':_0x567d14&&_0x567d14[_0xdb279b(0x254)]}],'id':_0x2d1a8b,'context':_0x27fd6a}]};}finally{try{if(_0x1f4a99&&_0x264d73){let _0x565ee4=_0x2a3998();_0x1f4a99[_0xdb279b(0x21f)]++,_0x1f4a99[_0xdb279b(0x239)]+=_0x4b109f(_0x264d73,_0x565ee4),_0x1f4a99['ts']=_0x565ee4,_0x3267d2[_0xdb279b(0x27c)][_0xdb279b(0x21f)]++,_0x3267d2[_0xdb279b(0x27c)]['time']+=_0x4b109f(_0x264d73,_0x565ee4),_0x3267d2[_0xdb279b(0x27c)]['ts']=_0x565ee4,(_0x1f4a99[_0xdb279b(0x21f)]>0x32||_0x1f4a99[_0xdb279b(0x239)]>0x64)&&(_0x1f4a99[_0xdb279b(0x212)]=!0x0),(_0x3267d2[_0xdb279b(0x27c)][_0xdb279b(0x21f)]>0x3e8||_0x3267d2[_0xdb279b(0x27c)]['time']>0x12c)&&(_0x3267d2[_0xdb279b(0x27c)]['reduceLimits']=!0x0);}}catch{}}}return _0x3d5932;}((_0x309eac,_0x20871a,_0xd9b857,_0x67a346,_0xb8caaf,_0x135dcb,_0x399f10,_0x365094,_0x1ef38d,_0x14bc26)=>{var _0x3f1576=_0x1ce8fd;if(_0x309eac['_console_ninja'])return _0x309eac[_0x3f1576(0x234)];if(!J(_0x309eac,_0x365094,_0xb8caaf))return _0x309eac[_0x3f1576(0x234)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x309eac[_0x3f1576(0x234)];let _0x3b10a6=W(_0x309eac),_0x3e6748=_0x3b10a6[_0x3f1576(0x250)],_0x18a6ec=_0x3b10a6[_0x3f1576(0x26c)],_0x4d5ac2=_0x3b10a6[_0x3f1576(0x285)],_0x360a5b={'hits':{},'ts':{}},_0x3d1a2c=Y(_0x309eac,_0x1ef38d,_0x360a5b,_0x135dcb),_0x29aff0=_0x279913=>{_0x360a5b['ts'][_0x279913]=_0x18a6ec();},_0x132d93=(_0xa2a414,_0x252c8e)=>{var _0x23379d=_0x3f1576;let _0x591cb3=_0x360a5b['ts'][_0x252c8e];if(delete _0x360a5b['ts'][_0x252c8e],_0x591cb3){let _0x2aaa11=_0x3e6748(_0x591cb3,_0x18a6ec());_0x4d2eeb(_0x3d1a2c(_0x23379d(0x239),_0xa2a414,_0x4d5ac2(),_0x5e4644,[_0x2aaa11],_0x252c8e));}},_0x36c483=_0x2d780f=>_0x5ab0ae=>{var _0x4ea5f9=_0x3f1576;try{_0x29aff0(_0x5ab0ae),_0x2d780f(_0x5ab0ae);}finally{_0x309eac[_0x4ea5f9(0x2a0)][_0x4ea5f9(0x239)]=_0x2d780f;}},_0x1c1df6=_0x508e84=>_0x484e84=>{var _0xabfca5=_0x3f1576;try{let [_0x505312,_0x5a492c]=_0x484e84[_0xabfca5(0x2bb)](_0xabfca5(0x1e4));_0x132d93(_0x5a492c,_0x505312),_0x508e84(_0x505312);}finally{_0x309eac[_0xabfca5(0x2a0)][_0xabfca5(0x20d)]=_0x508e84;}};_0x309eac[_0x3f1576(0x234)]={'consoleLog':(_0x48621f,_0x43d490)=>{var _0x2790b8=_0x3f1576;_0x309eac[_0x2790b8(0x2a0)][_0x2790b8(0x2aa)][_0x2790b8(0x281)]!==_0x2790b8(0x2ab)&&_0x4d2eeb(_0x3d1a2c('log',_0x48621f,_0x4d5ac2(),_0x5e4644,_0x43d490));},'consoleTrace':(_0x46210e,_0x50af04)=>{var _0xdb926a=_0x3f1576;_0x309eac[_0xdb926a(0x2a0)][_0xdb926a(0x2aa)][_0xdb926a(0x281)]!==_0xdb926a(0x23e)&&_0x4d2eeb(_0x3d1a2c(_0xdb926a(0x256),_0x46210e,_0x4d5ac2(),_0x5e4644,_0x50af04));},'consoleTime':()=>{var _0x3641ae=_0x3f1576;_0x309eac[_0x3641ae(0x2a0)][_0x3641ae(0x239)]=_0x36c483(_0x309eac[_0x3641ae(0x2a0)][_0x3641ae(0x239)]);},'consoleTimeEnd':()=>{var _0x57354c=_0x3f1576;_0x309eac['console'][_0x57354c(0x20d)]=_0x1c1df6(_0x309eac[_0x57354c(0x2a0)][_0x57354c(0x20d)]);},'autoLog':(_0x3b13b8,_0x44053d)=>{_0x4d2eeb(_0x3d1a2c('log',_0x44053d,_0x4d5ac2(),_0x5e4644,[_0x3b13b8]));},'autoLogMany':(_0x35c2f5,_0x1e0b1c)=>{var _0x373c36=_0x3f1576;_0x4d2eeb(_0x3d1a2c(_0x373c36(0x2aa),_0x35c2f5,_0x4d5ac2(),_0x5e4644,_0x1e0b1c));},'autoTrace':(_0x1fbcea,_0x1244ea)=>{var _0x140d07=_0x3f1576;_0x4d2eeb(_0x3d1a2c(_0x140d07(0x256),_0x1244ea,_0x4d5ac2(),_0x5e4644,[_0x1fbcea]));},'autoTraceMany':(_0x1fb212,_0x580566)=>{var _0x36b925=_0x3f1576;_0x4d2eeb(_0x3d1a2c(_0x36b925(0x256),_0x1fb212,_0x4d5ac2(),_0x5e4644,_0x580566));},'autoTime':(_0xc70b5,_0x5960be,_0x4c3b68)=>{_0x29aff0(_0x4c3b68);},'autoTimeEnd':(_0x212386,_0x5a398f,_0x2f1160)=>{_0x132d93(_0x5a398f,_0x2f1160);},'coverage':_0x46bbd3=>{var _0x21a562=_0x3f1576;_0x4d2eeb({'method':_0x21a562(0x276),'version':_0x135dcb,'args':[{'id':_0x46bbd3}]});}};let _0x4d2eeb=b(_0x309eac,_0x20871a,_0xd9b857,_0x67a346,_0xb8caaf,_0x14bc26),_0x5e4644=_0x309eac[_0x3f1576(0x23d)];return _0x309eac[_0x3f1576(0x234)];})(globalThis,_0x1ce8fd(0x231),_0x1ce8fd(0x24f),\"/home/insane/.vscode/extensions/wallabyjs.console-ninja-1.0.301/node_modules\",_0x1ce8fd(0x223),_0x1ce8fd(0x2af),_0x1ce8fd(0x273),_0x1ce8fd(0x21e),_0x1ce8fd(0x2a2),_0x1ce8fd(0x260));function _0x22ca(){var _0x47fb24=['_keyStrRegExp','default','name','prototype','HTMLAllCollection','enumerable','now','autoExpandPreviousObjects','hostname','_addLoadNode','_isSet','_consoleNinjaAllowedToStart','_reconnectTimeout','get','_setNodeExpressionPath','process','_treeNodePropertiesAfterFullValue','stack','rootExpression','_isNegativeZero','allStrLength','create','resolveGetters','level','_propertyName','_p_length','concat','406439zFdFuJ','path','props','_isArray','warn','320004cMUxrI','console','data','','_setNodeQueryPath','_numberRegExp','object','_setNodeId','_quotedRegExp','_objectToString','_hasSetOnItsPath','log','disabledLog','bigint','getOwnPropertySymbols','error','1.0.0','join','push','355lYxwft','close','symbol','stackTraceLimit','_cleanNode','global','22LPghiW','21FUYedE','_connectAttemptCount','split','strLength','Map','array','valueOf','undefined','nodeModules','serialize','_hasSymbolPropertyOnItsPath','_maxConnectAttemptCount','onclose','number','next.js','autoExpandLimit','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','string','stringify','onopen','_processTreeNodeResult','_p_name','_connected','sortProps','_isPrimitiveWrapperType','performance',':logPointId:','_setNodeExpandableState','logger\\x20websocket\\x20error','_undefined','setter','_property','cappedProps','env','getPrototypeOf','[object\\x20Map]','ws://','_sortProps','nuxt','unknown','perf_hooks','substr','_addObjectProperty','node','8ogzEZg','match','Boolean','onmessage','_p_','_WebSocket','_type','noFunctions','map','current','_inNextEdge','hrtime','NEGATIVE_INFINITY','reload','versions','getter','[object\\x20Date]','\\x20browser','autoExpandMaxDepth','location','constructor','_getOwnPropertyNames','isArray','timeEnd','Set','port','_ws','WebSocket','reduceLimits','_WebSocketClass','_setNodePermissions','catch','host','angular','gateway.docker.internal','set','depth','date','_allowedToConnectOnSend','_capIfString',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Xubuntu\",\"10.0.2.15\"],'count','index','null','[object\\x20Array]','webpack','_disposeWebsocket','funcName','replace','expressionsToEvaluate','_Symbol','getOwnPropertyNames','ws/index.js','defineProperty','slice','capped','POSITIVE_INFINITY','_isPrimitiveType','getWebSocketClass','127.0.0.1','parent','url','_console_ninja','_getOwnPropertyDescriptor','onerror','_additionalMetadata','edge','time','bind','length','sort','_console_ninja_session','disabledTrace','_blacklistedProperty','_allowedToSend','_setNodeLabel','_connecting','_addFunctionsNode','_regExpToString','toLowerCase','...','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','74442gBYsoy','Symbol','6658254AsNemz','_addProperty','1432360MuBURm','_attemptToReconnectShortly','function','34999','elapsed','type','elements','_isMap','message','_socket','trace','8dQOMaG','isExpressionToEvaluate','https://tinyurl.com/37x8b79t','Number','call','_HTMLAllCollection','_isUndefined','dockerizedApp','forEach','','_webSocketErrorDocsLink','_inBrowser','Buffer','test','_connectToHostNow','unref','_getOwnPropertySymbols','totalStrLength','then','NEXT_RUNTIME','pathToFileURL','timeStamp','1068513SMLZFi','autoExpandPropertyCount','pop','toString','value','10233550GIDQRx','1712753012150','autoExpand','negativeZero','coverage','String','_treeNodePropertiesBeforeFullValue','_dateToString','cappedElements','send','hits','getOwnPropertyDescriptor','RegExp'];_0x22ca=function(){return _0x47fb24;};return _0x22ca();}");}catch(e){}};/* istanbul ignore next */function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};/* istanbul ignore next */function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ (() => {

throw new Error("Module parse failed: Unterminated template (51:50)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n|         array = this.projectsProcessed\n|         // console.log(\"saved and rebuilt\")\n>         /* eslint-disable */console.log(...oo_oo(`1");

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storage_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./src/display.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





class ProjectHandler {
    static projectsArray = []

    static addProject(name) {
        this.projectsArray.push(new Project(name))
    }

    static addTodo(projectIndex = 0) {
        this.projectsArray[projectIndex].todos.push(new Todo())
    }

    static deleteProject(projectIndex) {
        this.projectsArray.splice(projectIndex, 1)
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
}

class Todo {
    constructor(title = "Todo title",
                description = "Todo description",
                dueDate = "Todo dueDate",
                notes = "Todo notes",
                priority = "Low",
                isDone = false
                ) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.notes = notes
        this.priority = priority
        this.isDone = isDone
    }

    editProperty(property, value) {
        if (property !== "priority" && property !== "isDone") {
            this[property] = value
        }
    }

    toggleisDone() {
        this.isDone === false ? this.isDone = true : this.isDone = false;
    }

    togglePriority() {
        switch(this.priority) {
            case "Low":
                this.priority = "Normal"
                break
            case "Normal":
                this.priority = "High"
                break
            case "High":
                this.priority = "Low"
                break
        }
    }
}

class DateHandler {
    formatDate(date) {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(date, "do MMMM yyyy")
    }

    static tomorrow() {
        const today = new Date()
        const tomorrow = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.addDays)(today, 1)
        const formatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(tomorrow, "do MMMM yyyy")
        /* eslint-disable */console.log(...oo_oo(`1804870284_83_8_83_30_4`,formatted))
        return formatted
    }
}

_display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.createMainLayout()

ProjectHandler.addProject()
ProjectHandler.addProject("testproject2")
ProjectHandler.addTodo(0)
ProjectHandler.addTodo(1)
ProjectHandler.projectsArray[0].todos[0].editProperty("description", "first test")
ProjectHandler.projectsArray[1].todos[0].editProperty("description", "another test")
ProjectHandler.projectsArray[0].todos[0].editProperty("title", "first todo on first list")
ProjectHandler.projectsArray[1].todos[0].editProperty("title", "first todo, second list")
ProjectHandler.projectsArray[0].todos[0].togglePriority()
ProjectHandler.projectsArray[0].todos[0].togglePriority()

_storage_js__WEBPACK_IMPORTED_MODULE_0___default().saveAndRebuildTo(ProjectHandler.projectsArray, Project, Todo)

ProjectHandler.projectsArray[0].todos[0].toggleisDone()

_display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.renderProjects(ProjectHandler.projectsArray)

function app() {
    let isProjectPanelVisible = 1

    function attachProjectPanelBtnEvent() {
        const projectPanelBtn = document.querySelector(".projects-button")
        projectPanelBtn.addEventListener("click", projectPanelEvent)
    }

    function projectPanelEvent() {
        const leftPanelEl = document.querySelector(".left-panel")
        leftPanelEl.classList.toggle("invisible")
        isProjectPanelVisible === 1 ? isProjectPanelVisible = 0 : isProjectPanelVisible = 1
        /* eslint-disable */console.log(...oo_oo(`1804870284_119_8_119_64_4`,`panel visibility ${isProjectPanelVisible}`))

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
                switch (event.target.getAttribute("class")) {
                    case "edit-btn":
                        /* eslint-disable */console.log(...oo_oo(`1804870284_142_24_142_58_4`,"opening edit dialog"))
                        break
                    case "delete-btn":
                        const currentProject = _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.getCurrentProjectIndex()
                        const currentTodo = event.target.getAttribute("data-index")

                        ProjectHandler.deleteTodo(currentProject, currentTodo)
                        _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.renderTodos(ProjectHandler.projectsArray, currentProject)
                    break
                }})})
    }

    function attachDialogEvent() {
        const addBtn = document.querySelector(".add-button")
        addBtn.addEventListener("click", () => { 
            _display_js__WEBPACK_IMPORTED_MODULE_1__.displayController.renderDialog(isProjectPanelVisible)
        })
    }

    function attachCloseDialogEvent() {
        const closeBtnEl = document.querySelector(".dialog-close-button")
        const dialogEl = document.querySelector(".dialog")

        closeBtnEl.addEventListener("click", () => {
            /* eslint-disable */console.log(...oo_oo(`1804870284_166_12_166_41_4`,"closing dialog"))
            dialogEl.close()
        })

    }

    attachProjectTileEvents()
    attachTodoEvents()
    attachProjectPanelBtnEvent()
    attachDialogEvent()
    attachCloseDialogEvent()

}

app()
/* istanbul ignore next *//* c8 ignore start *//* eslint-disable */;function oo_cm(){try{return (0,eval)("globalThis._console_ninja") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x1ce8fd=_0x5cae;function _0x5cae(_0x49db9e,_0xa98099){var _0x22cafa=_0x22ca();return _0x5cae=function(_0x5cae36,_0x2d2af2){_0x5cae36=_0x5cae36-0x1d1;var _0x2b9e81=_0x22cafa[_0x5cae36];return _0x2b9e81;},_0x5cae(_0x49db9e,_0xa98099);}(function(_0x49c6ba,_0x384164){var _0x2c9789=_0x5cae,_0x466bd5=_0x49c6ba();while(!![]){try{var _0x4ce3d3=-parseInt(_0x2c9789(0x29a))/0x1*(-parseInt(_0x2c9789(0x257))/0x2)+-parseInt(_0x2c9789(0x26d))/0x3*(-parseInt(_0x2c9789(0x1f6))/0x4)+-parseInt(_0x2c9789(0x2b2))/0x5*(-parseInt(_0x2c9789(0x248))/0x6)+parseInt(_0x2c9789(0x2b9))/0x7*(-parseInt(_0x2c9789(0x24c))/0x8)+-parseInt(_0x2c9789(0x24a))/0x9+-parseInt(_0x2c9789(0x272))/0xa+parseInt(_0x2c9789(0x2b8))/0xb*(-parseInt(_0x2c9789(0x29f))/0xc);if(_0x4ce3d3===_0x384164)break;else _0x466bd5['push'](_0x466bd5['shift']());}catch(_0x5079bb){_0x466bd5['push'](_0x466bd5['shift']());}}}(_0x22ca,0xd3455));var j=Object[_0x1ce8fd(0x294)],H=Object[_0x1ce8fd(0x22b)],G=Object[_0x1ce8fd(0x27d)],ee=Object[_0x1ce8fd(0x229)],te=Object[_0x1ce8fd(0x1ec)],ne=Object[_0x1ce8fd(0x282)]['hasOwnProperty'],re=(_0x422ba4,_0xb1723a,_0x561d08,_0x1c202d)=>{var _0x5cec72=_0x1ce8fd;if(_0xb1723a&&typeof _0xb1723a==_0x5cec72(0x2a5)||typeof _0xb1723a=='function'){for(let _0x1163dd of ee(_0xb1723a))!ne['call'](_0x422ba4,_0x1163dd)&&_0x1163dd!==_0x561d08&&H(_0x422ba4,_0x1163dd,{'get':()=>_0xb1723a[_0x1163dd],'enumerable':!(_0x1c202d=G(_0xb1723a,_0x1163dd))||_0x1c202d[_0x5cec72(0x284)]});}return _0x422ba4;},x=(_0x2fa7a7,_0x560e1e,_0x4a2cb8)=>(_0x4a2cb8=_0x2fa7a7!=null?j(te(_0x2fa7a7)):{},re(_0x560e1e||!_0x2fa7a7||!_0x2fa7a7['__es'+'Module']?H(_0x4a2cb8,_0x1ce8fd(0x280),{'value':_0x2fa7a7,'enumerable':!0x0}):_0x4a2cb8,_0x2fa7a7)),X=class{constructor(_0x20a70d,_0x44af0d,_0x5f56d0,_0x5f588f,_0x2a2547){var _0x59d782=_0x1ce8fd;this['global']=_0x20a70d,this[_0x59d782(0x216)]=_0x44af0d,this['port']=_0x5f56d0,this['nodeModules']=_0x5f588f,this['dockerizedApp']=_0x2a2547,this[_0x59d782(0x240)]=!0x0,this[_0x59d782(0x21c)]=!0x0,this[_0x59d782(0x1e0)]=!0x1,this[_0x59d782(0x242)]=!0x1,this[_0x59d782(0x200)]=_0x20a70d[_0x59d782(0x28e)]?.['env']?.[_0x59d782(0x26a)]===_0x59d782(0x238),this[_0x59d782(0x262)]=!this['global'][_0x59d782(0x28e)]?.['versions']?.[_0x59d782(0x1f5)]&&!this[_0x59d782(0x200)],this[_0x59d782(0x213)]=null,this[_0x59d782(0x2ba)]=0x0,this[_0x59d782(0x1d5)]=0x14,this[_0x59d782(0x261)]=_0x59d782(0x259),this['_sendErrorMessage']=(this['_inBrowser']?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x59d782(0x247))+this[_0x59d782(0x261)];}async[_0x1ce8fd(0x230)](){var _0x3cdd0e=_0x1ce8fd;if(this[_0x3cdd0e(0x213)])return this[_0x3cdd0e(0x213)];let _0x34ecf2;if(this[_0x3cdd0e(0x262)]||this['_inNextEdge'])_0x34ecf2=this[_0x3cdd0e(0x2b7)][_0x3cdd0e(0x211)];else{if(this[_0x3cdd0e(0x2b7)][_0x3cdd0e(0x28e)]?.[_0x3cdd0e(0x1fb)])_0x34ecf2=this[_0x3cdd0e(0x2b7)][_0x3cdd0e(0x28e)]?.[_0x3cdd0e(0x1fb)];else try{let _0x2dc4fe=await import(_0x3cdd0e(0x29b));_0x34ecf2=(await import((await import(_0x3cdd0e(0x233)))[_0x3cdd0e(0x26b)](_0x2dc4fe[_0x3cdd0e(0x2b0)](this[_0x3cdd0e(0x1d2)],_0x3cdd0e(0x22a)))[_0x3cdd0e(0x270)]()))[_0x3cdd0e(0x280)];}catch{try{_0x34ecf2=require(require(_0x3cdd0e(0x29b))['join'](this['nodeModules'],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x3cdd0e(0x213)]=_0x34ecf2,_0x34ecf2;}[_0x1ce8fd(0x265)](){var _0x22696a=_0x1ce8fd;this[_0x22696a(0x242)]||this['_connected']||this[_0x22696a(0x2ba)]>=this[_0x22696a(0x1d5)]||(this[_0x22696a(0x21c)]=!0x1,this['_connecting']=!0x0,this[_0x22696a(0x2ba)]++,this['_ws']=new Promise((_0x32246a,_0x119d54)=>{var _0x306319=_0x22696a;this[_0x306319(0x230)]()['then'](_0xd2fcb6=>{var _0x928aa7=_0x306319;let _0xf52324=new _0xd2fcb6(_0x928aa7(0x1ee)+(!this[_0x928aa7(0x262)]&&this[_0x928aa7(0x25e)]?_0x928aa7(0x218):this[_0x928aa7(0x216)])+':'+this[_0x928aa7(0x20f)]);_0xf52324['onerror']=()=>{var _0x2dead5=_0x928aa7;this['_allowedToSend']=!0x1,this[_0x2dead5(0x224)](_0xf52324),this['_attemptToReconnectShortly'](),_0x119d54(new Error(_0x2dead5(0x1e6)));},_0xf52324[_0x928aa7(0x1dd)]=()=>{var _0x5c7fa5=_0x928aa7;this[_0x5c7fa5(0x262)]||_0xf52324[_0x5c7fa5(0x255)]&&_0xf52324[_0x5c7fa5(0x255)][_0x5c7fa5(0x266)]&&_0xf52324[_0x5c7fa5(0x255)][_0x5c7fa5(0x266)](),_0x32246a(_0xf52324);},_0xf52324[_0x928aa7(0x1d6)]=()=>{var _0x311c6f=_0x928aa7;this[_0x311c6f(0x21c)]=!0x0,this[_0x311c6f(0x224)](_0xf52324),this[_0x311c6f(0x24d)]();},_0xf52324[_0x928aa7(0x1f9)]=_0x312778=>{var _0x2af7cf=_0x928aa7;try{_0x312778&&_0x312778[_0x2af7cf(0x2a1)]&&this[_0x2af7cf(0x262)]&&JSON['parse'](_0x312778[_0x2af7cf(0x2a1)])['method']===_0x2af7cf(0x203)&&this[_0x2af7cf(0x2b7)][_0x2af7cf(0x209)][_0x2af7cf(0x203)]();}catch{}};})[_0x306319(0x269)](_0x3b0cf3=>(this[_0x306319(0x1e0)]=!0x0,this[_0x306319(0x242)]=!0x1,this[_0x306319(0x21c)]=!0x1,this[_0x306319(0x240)]=!0x0,this['_connectAttemptCount']=0x0,_0x3b0cf3))[_0x306319(0x215)](_0x1eb38f=>(this['_connected']=!0x1,this['_connecting']=!0x1,console['warn'](_0x306319(0x1da)+this[_0x306319(0x261)]),_0x119d54(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x1eb38f&&_0x1eb38f[_0x306319(0x254)])))));}));}[_0x1ce8fd(0x224)](_0x57064e){var _0x385d0c=_0x1ce8fd;this['_connected']=!0x1,this[_0x385d0c(0x242)]=!0x1;try{_0x57064e['onclose']=null,_0x57064e[_0x385d0c(0x236)]=null,_0x57064e[_0x385d0c(0x1dd)]=null;}catch{}try{_0x57064e['readyState']<0x2&&_0x57064e[_0x385d0c(0x2b3)]();}catch{}}[_0x1ce8fd(0x24d)](){var _0x194f8a=_0x1ce8fd;clearTimeout(this[_0x194f8a(0x28b)]),!(this[_0x194f8a(0x2ba)]>=this[_0x194f8a(0x1d5)])&&(this[_0x194f8a(0x28b)]=setTimeout(()=>{var _0x61cf5e=_0x194f8a;this[_0x61cf5e(0x1e0)]||this['_connecting']||(this[_0x61cf5e(0x265)](),this[_0x61cf5e(0x210)]?.[_0x61cf5e(0x215)](()=>this[_0x61cf5e(0x24d)]()));},0x1f4),this[_0x194f8a(0x28b)]['unref']&&this[_0x194f8a(0x28b)]['unref']());}async[_0x1ce8fd(0x27b)](_0x430bf4){var _0x459abc=_0x1ce8fd;try{if(!this[_0x459abc(0x240)])return;this[_0x459abc(0x21c)]&&this[_0x459abc(0x265)](),(await this[_0x459abc(0x210)])[_0x459abc(0x27b)](JSON[_0x459abc(0x1dc)](_0x430bf4));}catch(_0x870d93){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x870d93&&_0x870d93[_0x459abc(0x254)])),this[_0x459abc(0x240)]=!0x1,this[_0x459abc(0x24d)]();}}};function b(_0x5683d7,_0x2e1345,_0x53cee8,_0x56f124,_0x5e1603,_0x43687e){var _0x2af861=_0x1ce8fd;let _0x1480fd=_0x53cee8[_0x2af861(0x2bb)](',')[_0x2af861(0x1fe)](_0x521457=>{var _0x2bbccf=_0x2af861;try{_0x5683d7[_0x2bbccf(0x23d)]||((_0x5e1603===_0x2bbccf(0x1d8)||_0x5e1603==='remix'||_0x5e1603==='astro'||_0x5e1603===_0x2bbccf(0x217))&&(_0x5e1603+=!_0x5683d7[_0x2bbccf(0x28e)]?.[_0x2bbccf(0x204)]?.[_0x2bbccf(0x1f5)]&&_0x5683d7[_0x2bbccf(0x28e)]?.[_0x2bbccf(0x1eb)]?.['NEXT_RUNTIME']!==_0x2bbccf(0x238)?_0x2bbccf(0x207):'\\x20server'),_0x5683d7['_console_ninja_session']={'id':+new Date(),'tool':_0x5e1603});let _0x2eacd4=new X(_0x5683d7,_0x2e1345,_0x521457,_0x56f124,_0x43687e);return _0x2eacd4[_0x2bbccf(0x27b)][_0x2bbccf(0x23a)](_0x2eacd4);}catch(_0x5a757){return console[_0x2bbccf(0x29e)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0x5a757&&_0x5a757[_0x2bbccf(0x254)]),()=>{};}});return _0x610bc1=>_0x1480fd[_0x2af861(0x25f)](_0x3e5b5f=>_0x3e5b5f(_0x610bc1));}function W(_0x1eddcd){var _0x25aac9=_0x1ce8fd;let _0x2ebb1a=function(_0x11c59d,_0x32dcc5){return _0x32dcc5-_0x11c59d;},_0xc435cc;if(_0x1eddcd[_0x25aac9(0x1e3)])_0xc435cc=function(){var _0x3408b2=_0x25aac9;return _0x1eddcd[_0x3408b2(0x1e3)][_0x3408b2(0x285)]();};else{if(_0x1eddcd[_0x25aac9(0x28e)]&&_0x1eddcd[_0x25aac9(0x28e)]['hrtime']&&_0x1eddcd['process']?.['env']?.[_0x25aac9(0x26a)]!==_0x25aac9(0x238))_0xc435cc=function(){var _0x69e82b=_0x25aac9;return _0x1eddcd[_0x69e82b(0x28e)][_0x69e82b(0x201)]();},_0x2ebb1a=function(_0x5a463a,_0x3c1951){return 0x3e8*(_0x3c1951[0x0]-_0x5a463a[0x0])+(_0x3c1951[0x1]-_0x5a463a[0x1])/0xf4240;};else try{let {performance:_0x5aa75d}=require(_0x25aac9(0x1f2));_0xc435cc=function(){var _0xda71d7=_0x25aac9;return _0x5aa75d[_0xda71d7(0x285)]();};}catch{_0xc435cc=function(){return+new Date();};}}return{'elapsed':_0x2ebb1a,'timeStamp':_0xc435cc,'now':()=>Date[_0x25aac9(0x285)]()};}function J(_0x46b5e8,_0x2fc621,_0x1ea8a8){var _0x57d75b=_0x1ce8fd;if(_0x46b5e8[_0x57d75b(0x28a)]!==void 0x0)return _0x46b5e8[_0x57d75b(0x28a)];let _0x2e7241=_0x46b5e8['process']?.[_0x57d75b(0x204)]?.[_0x57d75b(0x1f5)]||_0x46b5e8[_0x57d75b(0x28e)]?.[_0x57d75b(0x1eb)]?.[_0x57d75b(0x26a)]===_0x57d75b(0x238);return _0x2e7241&&_0x1ea8a8===_0x57d75b(0x1f0)?_0x46b5e8[_0x57d75b(0x28a)]=!0x1:_0x46b5e8[_0x57d75b(0x28a)]=_0x2e7241||!_0x2fc621||_0x46b5e8['location']?.[_0x57d75b(0x287)]&&_0x2fc621['includes'](_0x46b5e8[_0x57d75b(0x209)][_0x57d75b(0x287)]),_0x46b5e8[_0x57d75b(0x28a)];}function Y(_0x52943c,_0x396865,_0x3267d2,_0x3ef9d8){var _0x1a6332=_0x1ce8fd;_0x52943c=_0x52943c,_0x396865=_0x396865,_0x3267d2=_0x3267d2,_0x3ef9d8=_0x3ef9d8;let _0x24bae9=W(_0x52943c),_0x4b109f=_0x24bae9[_0x1a6332(0x250)],_0x2a3998=_0x24bae9[_0x1a6332(0x26c)];class _0x1084b5{constructor(){var _0x1d0435=_0x1a6332;this[_0x1d0435(0x27f)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x1d0435(0x2a4)]=/^(0|[1-9][0-9]*)$/,this[_0x1d0435(0x2a7)]=/'([^\\\\']|\\\\')*'/,this[_0x1d0435(0x1e7)]=_0x52943c[_0x1d0435(0x1d1)],this[_0x1d0435(0x25c)]=_0x52943c['HTMLAllCollection'],this['_getOwnPropertyDescriptor']=Object[_0x1d0435(0x27d)],this[_0x1d0435(0x20b)]=Object[_0x1d0435(0x229)],this[_0x1d0435(0x228)]=_0x52943c[_0x1d0435(0x249)],this[_0x1d0435(0x244)]=RegExp[_0x1d0435(0x282)]['toString'],this[_0x1d0435(0x279)]=Date[_0x1d0435(0x282)][_0x1d0435(0x270)];}[_0x1a6332(0x1d3)](_0x4e191e,_0xf7b105,_0xe3dd81,_0x1b2991){var _0x175c54=_0x1a6332,_0x1c0566=this,_0x319c19=_0xe3dd81[_0x175c54(0x274)];function _0x173185(_0x4e678f,_0x2e2cdf,_0x19fb2b){var _0x7a117c=_0x175c54;_0x2e2cdf[_0x7a117c(0x251)]=_0x7a117c(0x1f1),_0x2e2cdf[_0x7a117c(0x2ae)]=_0x4e678f[_0x7a117c(0x254)],_0x1d93ca=_0x19fb2b[_0x7a117c(0x1f5)][_0x7a117c(0x1ff)],_0x19fb2b[_0x7a117c(0x1f5)][_0x7a117c(0x1ff)]=_0x2e2cdf,_0x1c0566[_0x7a117c(0x278)](_0x2e2cdf,_0x19fb2b);}try{_0xe3dd81[_0x175c54(0x296)]++,_0xe3dd81[_0x175c54(0x274)]&&_0xe3dd81[_0x175c54(0x286)][_0x175c54(0x2b1)](_0xf7b105);var _0x2f48ec,_0x4f80fb,_0x4ff9a0,_0x4859d2,_0x1d3312=[],_0x5d2316=[],_0x185e5b,_0x5362ba=this[_0x175c54(0x1fc)](_0xf7b105),_0x3f8cf7=_0x5362ba===_0x175c54(0x2be),_0x1fcbe1=!0x1,_0x2693cc=_0x5362ba==='function',_0x3099cf=this[_0x175c54(0x22f)](_0x5362ba),_0x37944e=this[_0x175c54(0x1e2)](_0x5362ba),_0x3cda0f=_0x3099cf||_0x37944e,_0x51702b={},_0x572396=0x0,_0x467259=!0x1,_0x1d93ca,_0xff125f=/^(([1-9]{1}[0-9]*)|0)$/;if(_0xe3dd81['depth']){if(_0x3f8cf7){if(_0x4f80fb=_0xf7b105['length'],_0x4f80fb>_0xe3dd81[_0x175c54(0x252)]){for(_0x4ff9a0=0x0,_0x4859d2=_0xe3dd81[_0x175c54(0x252)],_0x2f48ec=_0x4ff9a0;_0x2f48ec<_0x4859d2;_0x2f48ec++)_0x5d2316[_0x175c54(0x2b1)](_0x1c0566[_0x175c54(0x24b)](_0x1d3312,_0xf7b105,_0x5362ba,_0x2f48ec,_0xe3dd81));_0x4e191e[_0x175c54(0x27a)]=!0x0;}else{for(_0x4ff9a0=0x0,_0x4859d2=_0x4f80fb,_0x2f48ec=_0x4ff9a0;_0x2f48ec<_0x4859d2;_0x2f48ec++)_0x5d2316['push'](_0x1c0566[_0x175c54(0x24b)](_0x1d3312,_0xf7b105,_0x5362ba,_0x2f48ec,_0xe3dd81));}_0xe3dd81['autoExpandPropertyCount']+=_0x5d2316[_0x175c54(0x23b)];}if(!(_0x5362ba===_0x175c54(0x221)||_0x5362ba===_0x175c54(0x1d1))&&!_0x3099cf&&_0x5362ba!==_0x175c54(0x277)&&_0x5362ba!==_0x175c54(0x263)&&_0x5362ba!==_0x175c54(0x2ac)){var _0x64b8a5=_0x1b2991[_0x175c54(0x29c)]||_0xe3dd81['props'];if(this[_0x175c54(0x289)](_0xf7b105)?(_0x2f48ec=0x0,_0xf7b105[_0x175c54(0x25f)](function(_0x4d5680){var _0x39cad1=_0x175c54;if(_0x572396++,_0xe3dd81['autoExpandPropertyCount']++,_0x572396>_0x64b8a5){_0x467259=!0x0;return;}if(!_0xe3dd81[_0x39cad1(0x258)]&&_0xe3dd81[_0x39cad1(0x274)]&&_0xe3dd81[_0x39cad1(0x26e)]>_0xe3dd81[_0x39cad1(0x1d9)]){_0x467259=!0x0;return;}_0x5d2316[_0x39cad1(0x2b1)](_0x1c0566[_0x39cad1(0x24b)](_0x1d3312,_0xf7b105,_0x39cad1(0x20e),_0x2f48ec++,_0xe3dd81,function(_0x491f5e){return function(){return _0x491f5e;};}(_0x4d5680)));})):this[_0x175c54(0x253)](_0xf7b105)&&_0xf7b105['forEach'](function(_0x720a28,_0x1ba6a0){var _0x347c80=_0x175c54;if(_0x572396++,_0xe3dd81[_0x347c80(0x26e)]++,_0x572396>_0x64b8a5){_0x467259=!0x0;return;}if(!_0xe3dd81[_0x347c80(0x258)]&&_0xe3dd81[_0x347c80(0x274)]&&_0xe3dd81[_0x347c80(0x26e)]>_0xe3dd81['autoExpandLimit']){_0x467259=!0x0;return;}var _0x243ceb=_0x1ba6a0[_0x347c80(0x270)]();_0x243ceb[_0x347c80(0x23b)]>0x64&&(_0x243ceb=_0x243ceb[_0x347c80(0x22c)](0x0,0x64)+_0x347c80(0x246)),_0x5d2316[_0x347c80(0x2b1)](_0x1c0566[_0x347c80(0x24b)](_0x1d3312,_0xf7b105,_0x347c80(0x2bd),_0x243ceb,_0xe3dd81,function(_0x5f44cc){return function(){return _0x5f44cc;};}(_0x720a28)));}),!_0x1fcbe1){try{for(_0x185e5b in _0xf7b105)if(!(_0x3f8cf7&&_0xff125f[_0x175c54(0x264)](_0x185e5b))&&!this[_0x175c54(0x23f)](_0xf7b105,_0x185e5b,_0xe3dd81)){if(_0x572396++,_0xe3dd81[_0x175c54(0x26e)]++,_0x572396>_0x64b8a5){_0x467259=!0x0;break;}if(!_0xe3dd81['isExpressionToEvaluate']&&_0xe3dd81[_0x175c54(0x274)]&&_0xe3dd81[_0x175c54(0x26e)]>_0xe3dd81[_0x175c54(0x1d9)]){_0x467259=!0x0;break;}_0x5d2316[_0x175c54(0x2b1)](_0x1c0566[_0x175c54(0x1f4)](_0x1d3312,_0x51702b,_0xf7b105,_0x5362ba,_0x185e5b,_0xe3dd81));}}catch{}if(_0x51702b[_0x175c54(0x298)]=!0x0,_0x2693cc&&(_0x51702b[_0x175c54(0x1df)]=!0x0),!_0x467259){var _0x51e525=[][_0x175c54(0x299)](this['_getOwnPropertyNames'](_0xf7b105))[_0x175c54(0x299)](this[_0x175c54(0x267)](_0xf7b105));for(_0x2f48ec=0x0,_0x4f80fb=_0x51e525['length'];_0x2f48ec<_0x4f80fb;_0x2f48ec++)if(_0x185e5b=_0x51e525[_0x2f48ec],!(_0x3f8cf7&&_0xff125f['test'](_0x185e5b[_0x175c54(0x270)]()))&&!this[_0x175c54(0x23f)](_0xf7b105,_0x185e5b,_0xe3dd81)&&!_0x51702b[_0x175c54(0x1fa)+_0x185e5b[_0x175c54(0x270)]()]){if(_0x572396++,_0xe3dd81[_0x175c54(0x26e)]++,_0x572396>_0x64b8a5){_0x467259=!0x0;break;}if(!_0xe3dd81['isExpressionToEvaluate']&&_0xe3dd81['autoExpand']&&_0xe3dd81[_0x175c54(0x26e)]>_0xe3dd81[_0x175c54(0x1d9)]){_0x467259=!0x0;break;}_0x5d2316[_0x175c54(0x2b1)](_0x1c0566[_0x175c54(0x1f4)](_0x1d3312,_0x51702b,_0xf7b105,_0x5362ba,_0x185e5b,_0xe3dd81));}}}}}if(_0x4e191e[_0x175c54(0x251)]=_0x5362ba,_0x3cda0f?(_0x4e191e[_0x175c54(0x271)]=_0xf7b105['valueOf'](),this[_0x175c54(0x21d)](_0x5362ba,_0x4e191e,_0xe3dd81,_0x1b2991)):_0x5362ba===_0x175c54(0x21b)?_0x4e191e[_0x175c54(0x271)]=this[_0x175c54(0x279)][_0x175c54(0x25b)](_0xf7b105):_0x5362ba==='bigint'?_0x4e191e[_0x175c54(0x271)]=_0xf7b105[_0x175c54(0x270)]():_0x5362ba===_0x175c54(0x27e)?_0x4e191e[_0x175c54(0x271)]=this[_0x175c54(0x244)][_0x175c54(0x25b)](_0xf7b105):_0x5362ba==='symbol'&&this[_0x175c54(0x228)]?_0x4e191e[_0x175c54(0x271)]=this[_0x175c54(0x228)]['prototype'][_0x175c54(0x270)][_0x175c54(0x25b)](_0xf7b105):!_0xe3dd81[_0x175c54(0x21a)]&&!(_0x5362ba===_0x175c54(0x221)||_0x5362ba===_0x175c54(0x1d1))&&(delete _0x4e191e[_0x175c54(0x271)],_0x4e191e[_0x175c54(0x22d)]=!0x0),_0x467259&&(_0x4e191e[_0x175c54(0x1ea)]=!0x0),_0x1d93ca=_0xe3dd81[_0x175c54(0x1f5)][_0x175c54(0x1ff)],_0xe3dd81['node']['current']=_0x4e191e,this[_0x175c54(0x278)](_0x4e191e,_0xe3dd81),_0x5d2316[_0x175c54(0x23b)]){for(_0x2f48ec=0x0,_0x4f80fb=_0x5d2316['length'];_0x2f48ec<_0x4f80fb;_0x2f48ec++)_0x5d2316[_0x2f48ec](_0x2f48ec);}_0x1d3312[_0x175c54(0x23b)]&&(_0x4e191e[_0x175c54(0x29c)]=_0x1d3312);}catch(_0x1a8c25){_0x173185(_0x1a8c25,_0x4e191e,_0xe3dd81);}return this[_0x175c54(0x237)](_0xf7b105,_0x4e191e),this[_0x175c54(0x28f)](_0x4e191e,_0xe3dd81),_0xe3dd81[_0x175c54(0x1f5)][_0x175c54(0x1ff)]=_0x1d93ca,_0xe3dd81[_0x175c54(0x296)]--,_0xe3dd81[_0x175c54(0x274)]=_0x319c19,_0xe3dd81[_0x175c54(0x274)]&&_0xe3dd81[_0x175c54(0x286)][_0x175c54(0x26f)](),_0x4e191e;}[_0x1a6332(0x267)](_0x1bf0c4){var _0x2f46ca=_0x1a6332;return Object[_0x2f46ca(0x2ad)]?Object[_0x2f46ca(0x2ad)](_0x1bf0c4):[];}[_0x1a6332(0x289)](_0x20d570){var _0x1969bd=_0x1a6332;return!!(_0x20d570&&_0x52943c['Set']&&this[_0x1969bd(0x2a8)](_0x20d570)==='[object\\x20Set]'&&_0x20d570[_0x1969bd(0x25f)]);}[_0x1a6332(0x23f)](_0x3f1c37,_0x284724,_0x6750f1){var _0x26d8c9=_0x1a6332;return _0x6750f1[_0x26d8c9(0x1fd)]?typeof _0x3f1c37[_0x284724]==_0x26d8c9(0x24e):!0x1;}['_type'](_0x48dede){var _0x2640fc=_0x1a6332,_0x442280='';return _0x442280=typeof _0x48dede,_0x442280===_0x2640fc(0x2a5)?this[_0x2640fc(0x2a8)](_0x48dede)===_0x2640fc(0x222)?_0x442280=_0x2640fc(0x2be):this[_0x2640fc(0x2a8)](_0x48dede)===_0x2640fc(0x206)?_0x442280=_0x2640fc(0x21b):this['_objectToString'](_0x48dede)==='[object\\x20BigInt]'?_0x442280=_0x2640fc(0x2ac):_0x48dede===null?_0x442280=_0x2640fc(0x221):_0x48dede[_0x2640fc(0x20a)]&&(_0x442280=_0x48dede[_0x2640fc(0x20a)][_0x2640fc(0x281)]||_0x442280):_0x442280==='undefined'&&this[_0x2640fc(0x25c)]&&_0x48dede instanceof this[_0x2640fc(0x25c)]&&(_0x442280=_0x2640fc(0x283)),_0x442280;}['_objectToString'](_0x445ecc){var _0x170443=_0x1a6332;return Object[_0x170443(0x282)][_0x170443(0x270)][_0x170443(0x25b)](_0x445ecc);}[_0x1a6332(0x22f)](_0x4af4a0){var _0x347691=_0x1a6332;return _0x4af4a0==='boolean'||_0x4af4a0==='string'||_0x4af4a0===_0x347691(0x1d7);}[_0x1a6332(0x1e2)](_0xb99a28){var _0x1cd9b4=_0x1a6332;return _0xb99a28===_0x1cd9b4(0x1f8)||_0xb99a28===_0x1cd9b4(0x277)||_0xb99a28===_0x1cd9b4(0x25a);}[_0x1a6332(0x24b)](_0x3b5ff8,_0x100c44,_0x5cc93d,_0x1862c2,_0x5e6642,_0xe29c04){var _0xdfc431=this;return function(_0x2b0b7c){var _0xdf5f00=_0x5cae,_0x527463=_0x5e6642[_0xdf5f00(0x1f5)][_0xdf5f00(0x1ff)],_0x2e1ba9=_0x5e6642['node'][_0xdf5f00(0x220)],_0x34ef74=_0x5e6642[_0xdf5f00(0x1f5)][_0xdf5f00(0x232)];_0x5e6642[_0xdf5f00(0x1f5)][_0xdf5f00(0x232)]=_0x527463,_0x5e6642['node'][_0xdf5f00(0x220)]=typeof _0x1862c2==_0xdf5f00(0x1d7)?_0x1862c2:_0x2b0b7c,_0x3b5ff8[_0xdf5f00(0x2b1)](_0xdfc431[_0xdf5f00(0x1e9)](_0x100c44,_0x5cc93d,_0x1862c2,_0x5e6642,_0xe29c04)),_0x5e6642[_0xdf5f00(0x1f5)][_0xdf5f00(0x232)]=_0x34ef74,_0x5e6642[_0xdf5f00(0x1f5)][_0xdf5f00(0x220)]=_0x2e1ba9;};}[_0x1a6332(0x1f4)](_0x2dbf0a,_0x2c34c4,_0x5e79e1,_0x84fb05,_0x2fcb38,_0x119087,_0x2d46d2){var _0x5b28bf=_0x1a6332,_0x306240=this;return _0x2c34c4[_0x5b28bf(0x1fa)+_0x2fcb38[_0x5b28bf(0x270)]()]=!0x0,function(_0x1965f5){var _0x30620b=_0x5b28bf,_0x143ed0=_0x119087[_0x30620b(0x1f5)][_0x30620b(0x1ff)],_0x268815=_0x119087[_0x30620b(0x1f5)][_0x30620b(0x220)],_0x245e72=_0x119087[_0x30620b(0x1f5)][_0x30620b(0x232)];_0x119087[_0x30620b(0x1f5)][_0x30620b(0x232)]=_0x143ed0,_0x119087['node'][_0x30620b(0x220)]=_0x1965f5,_0x2dbf0a[_0x30620b(0x2b1)](_0x306240[_0x30620b(0x1e9)](_0x5e79e1,_0x84fb05,_0x2fcb38,_0x119087,_0x2d46d2)),_0x119087[_0x30620b(0x1f5)]['parent']=_0x245e72,_0x119087[_0x30620b(0x1f5)][_0x30620b(0x220)]=_0x268815;};}[_0x1a6332(0x1e9)](_0x4c3a9,_0x54670e,_0xa83a5d,_0x233907,_0x204c53){var _0x5200b7=_0x1a6332,_0x1df4ec=this;_0x204c53||(_0x204c53=function(_0x176a86,_0x303511){return _0x176a86[_0x303511];});var _0x6d06e9=_0xa83a5d[_0x5200b7(0x270)](),_0x3f714d=_0x233907['expressionsToEvaluate']||{},_0x18831f=_0x233907['depth'],_0x49bf46=_0x233907[_0x5200b7(0x258)];try{var _0x2b542d=this[_0x5200b7(0x253)](_0x4c3a9),_0x3924cf=_0x6d06e9;_0x2b542d&&_0x3924cf[0x0]==='\\x27'&&(_0x3924cf=_0x3924cf['substr'](0x1,_0x3924cf[_0x5200b7(0x23b)]-0x2));var _0x45de07=_0x233907[_0x5200b7(0x227)]=_0x3f714d[_0x5200b7(0x1fa)+_0x3924cf];_0x45de07&&(_0x233907[_0x5200b7(0x21a)]=_0x233907['depth']+0x1),_0x233907[_0x5200b7(0x258)]=!!_0x45de07;var _0x348761=typeof _0xa83a5d==_0x5200b7(0x2b4),_0xa55f20={'name':_0x348761||_0x2b542d?_0x6d06e9:this['_propertyName'](_0x6d06e9)};if(_0x348761&&(_0xa55f20[_0x5200b7(0x2b4)]=!0x0),!(_0x54670e===_0x5200b7(0x2be)||_0x54670e==='Error')){var _0x188ceb=this[_0x5200b7(0x235)](_0x4c3a9,_0xa83a5d);if(_0x188ceb&&(_0x188ceb[_0x5200b7(0x219)]&&(_0xa55f20[_0x5200b7(0x1e8)]=!0x0),_0x188ceb[_0x5200b7(0x28c)]&&!_0x45de07&&!_0x233907[_0x5200b7(0x295)]))return _0xa55f20[_0x5200b7(0x205)]=!0x0,this[_0x5200b7(0x1de)](_0xa55f20,_0x233907),_0xa55f20;}var _0x36324d;try{_0x36324d=_0x204c53(_0x4c3a9,_0xa83a5d);}catch(_0x2267e9){return _0xa55f20={'name':_0x6d06e9,'type':_0x5200b7(0x1f1),'error':_0x2267e9[_0x5200b7(0x254)]},this[_0x5200b7(0x1de)](_0xa55f20,_0x233907),_0xa55f20;}var _0x4fd9a3=this[_0x5200b7(0x1fc)](_0x36324d),_0x4bb97b=this['_isPrimitiveType'](_0x4fd9a3);if(_0xa55f20[_0x5200b7(0x251)]=_0x4fd9a3,_0x4bb97b)this[_0x5200b7(0x1de)](_0xa55f20,_0x233907,_0x36324d,function(){var _0x117c5d=_0x5200b7;_0xa55f20[_0x117c5d(0x271)]=_0x36324d[_0x117c5d(0x2bf)](),!_0x45de07&&_0x1df4ec[_0x117c5d(0x21d)](_0x4fd9a3,_0xa55f20,_0x233907,{});});else{var _0x2b6df6=_0x233907[_0x5200b7(0x274)]&&_0x233907[_0x5200b7(0x296)]<_0x233907['autoExpandMaxDepth']&&_0x233907[_0x5200b7(0x286)]['indexOf'](_0x36324d)<0x0&&_0x4fd9a3!==_0x5200b7(0x24e)&&_0x233907[_0x5200b7(0x26e)]<_0x233907[_0x5200b7(0x1d9)];_0x2b6df6||_0x233907[_0x5200b7(0x296)]<_0x18831f||_0x45de07?(this[_0x5200b7(0x1d3)](_0xa55f20,_0x36324d,_0x233907,_0x45de07||{}),this[_0x5200b7(0x237)](_0x36324d,_0xa55f20)):this[_0x5200b7(0x1de)](_0xa55f20,_0x233907,_0x36324d,function(){var _0x5daa34=_0x5200b7;_0x4fd9a3===_0x5daa34(0x221)||_0x4fd9a3==='undefined'||(delete _0xa55f20['value'],_0xa55f20[_0x5daa34(0x22d)]=!0x0);});}return _0xa55f20;}finally{_0x233907[_0x5200b7(0x227)]=_0x3f714d,_0x233907[_0x5200b7(0x21a)]=_0x18831f,_0x233907['isExpressionToEvaluate']=_0x49bf46;}}[_0x1a6332(0x21d)](_0x51b644,_0x2a4c67,_0x3d4ee6,_0x1572ed){var _0x22308b=_0x1a6332,_0x2ec147=_0x1572ed[_0x22308b(0x2bc)]||_0x3d4ee6[_0x22308b(0x2bc)];if((_0x51b644==='string'||_0x51b644===_0x22308b(0x277))&&_0x2a4c67['value']){let _0x4a843c=_0x2a4c67[_0x22308b(0x271)][_0x22308b(0x23b)];_0x3d4ee6[_0x22308b(0x293)]+=_0x4a843c,_0x3d4ee6[_0x22308b(0x293)]>_0x3d4ee6[_0x22308b(0x268)]?(_0x2a4c67[_0x22308b(0x22d)]='',delete _0x2a4c67[_0x22308b(0x271)]):_0x4a843c>_0x2ec147&&(_0x2a4c67['capped']=_0x2a4c67[_0x22308b(0x271)][_0x22308b(0x1f3)](0x0,_0x2ec147),delete _0x2a4c67[_0x22308b(0x271)]);}}[_0x1a6332(0x253)](_0x5404a6){var _0x4b4a29=_0x1a6332;return!!(_0x5404a6&&_0x52943c['Map']&&this[_0x4b4a29(0x2a8)](_0x5404a6)===_0x4b4a29(0x1ed)&&_0x5404a6[_0x4b4a29(0x25f)]);}[_0x1a6332(0x297)](_0x54a201){var _0x2df77f=_0x1a6332;if(_0x54a201[_0x2df77f(0x1f7)](/^\\d+$/))return _0x54a201;var _0x190c7a;try{_0x190c7a=JSON[_0x2df77f(0x1dc)](''+_0x54a201);}catch{_0x190c7a='\\x22'+this[_0x2df77f(0x2a8)](_0x54a201)+'\\x22';}return _0x190c7a[_0x2df77f(0x1f7)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x190c7a=_0x190c7a['substr'](0x1,_0x190c7a[_0x2df77f(0x23b)]-0x2):_0x190c7a=_0x190c7a[_0x2df77f(0x226)](/'/g,'\\x5c\\x27')[_0x2df77f(0x226)](/\\\\\"/g,'\\x22')[_0x2df77f(0x226)](/(^\"|\"$)/g,'\\x27'),_0x190c7a;}[_0x1a6332(0x1de)](_0x351686,_0x3b76a7,_0x3e1a1d,_0x399793){var _0x563c73=_0x1a6332;this[_0x563c73(0x278)](_0x351686,_0x3b76a7),_0x399793&&_0x399793(),this[_0x563c73(0x237)](_0x3e1a1d,_0x351686),this['_treeNodePropertiesAfterFullValue'](_0x351686,_0x3b76a7);}[_0x1a6332(0x278)](_0x1cb43f,_0xbe9e75){var _0x29b36b=_0x1a6332;this['_setNodeId'](_0x1cb43f,_0xbe9e75),this[_0x29b36b(0x2a3)](_0x1cb43f,_0xbe9e75),this['_setNodeExpressionPath'](_0x1cb43f,_0xbe9e75),this[_0x29b36b(0x214)](_0x1cb43f,_0xbe9e75);}['_setNodeId'](_0x46a615,_0x22b704){}[_0x1a6332(0x2a3)](_0x4c6fb2,_0x4277a8){}[_0x1a6332(0x241)](_0x40594a,_0x6bedfc){}[_0x1a6332(0x25d)](_0x1a1ada){return _0x1a1ada===this['_undefined'];}[_0x1a6332(0x28f)](_0x421c68,_0x529d75){var _0x52cfc5=_0x1a6332;this[_0x52cfc5(0x241)](_0x421c68,_0x529d75),this[_0x52cfc5(0x1e5)](_0x421c68),_0x529d75[_0x52cfc5(0x1e1)]&&this['_sortProps'](_0x421c68),this[_0x52cfc5(0x243)](_0x421c68,_0x529d75),this['_addLoadNode'](_0x421c68,_0x529d75),this[_0x52cfc5(0x2b6)](_0x421c68);}[_0x1a6332(0x237)](_0x1d7671,_0x5680ea){var _0x4a7f83=_0x1a6332;let _0x20d919;try{_0x52943c[_0x4a7f83(0x2a0)]&&(_0x20d919=_0x52943c['console']['error'],_0x52943c[_0x4a7f83(0x2a0)][_0x4a7f83(0x2ae)]=function(){}),_0x1d7671&&typeof _0x1d7671[_0x4a7f83(0x23b)]==_0x4a7f83(0x1d7)&&(_0x5680ea[_0x4a7f83(0x23b)]=_0x1d7671['length']);}catch{}finally{_0x20d919&&(_0x52943c[_0x4a7f83(0x2a0)][_0x4a7f83(0x2ae)]=_0x20d919);}if(_0x5680ea['type']===_0x4a7f83(0x1d7)||_0x5680ea[_0x4a7f83(0x251)]===_0x4a7f83(0x25a)){if(isNaN(_0x5680ea['value']))_0x5680ea['nan']=!0x0,delete _0x5680ea['value'];else switch(_0x5680ea[_0x4a7f83(0x271)]){case Number[_0x4a7f83(0x22e)]:_0x5680ea['positiveInfinity']=!0x0,delete _0x5680ea[_0x4a7f83(0x271)];break;case Number[_0x4a7f83(0x202)]:_0x5680ea['negativeInfinity']=!0x0,delete _0x5680ea['value'];break;case 0x0:this[_0x4a7f83(0x292)](_0x5680ea[_0x4a7f83(0x271)])&&(_0x5680ea[_0x4a7f83(0x275)]=!0x0);break;}}else _0x5680ea[_0x4a7f83(0x251)]===_0x4a7f83(0x24e)&&typeof _0x1d7671[_0x4a7f83(0x281)]==_0x4a7f83(0x1db)&&_0x1d7671[_0x4a7f83(0x281)]&&_0x5680ea['name']&&_0x1d7671['name']!==_0x5680ea[_0x4a7f83(0x281)]&&(_0x5680ea[_0x4a7f83(0x225)]=_0x1d7671[_0x4a7f83(0x281)]);}[_0x1a6332(0x292)](_0x4ddcc4){var _0x5522ef=_0x1a6332;return 0x1/_0x4ddcc4===Number[_0x5522ef(0x202)];}[_0x1a6332(0x1ef)](_0x27d0ae){var _0x57a927=_0x1a6332;!_0x27d0ae[_0x57a927(0x29c)]||!_0x27d0ae[_0x57a927(0x29c)]['length']||_0x27d0ae[_0x57a927(0x251)]===_0x57a927(0x2be)||_0x27d0ae[_0x57a927(0x251)]===_0x57a927(0x2bd)||_0x27d0ae[_0x57a927(0x251)]===_0x57a927(0x20e)||_0x27d0ae['props'][_0x57a927(0x23c)](function(_0x419b23,_0x4f15a5){var _0x17eb96=_0x57a927,_0x1c8af2=_0x419b23[_0x17eb96(0x281)][_0x17eb96(0x245)](),_0x6de1f2=_0x4f15a5[_0x17eb96(0x281)]['toLowerCase']();return _0x1c8af2<_0x6de1f2?-0x1:_0x1c8af2>_0x6de1f2?0x1:0x0;});}['_addFunctionsNode'](_0x50040b,_0x503b20){var _0xbebcab=_0x1a6332;if(!(_0x503b20[_0xbebcab(0x1fd)]||!_0x50040b[_0xbebcab(0x29c)]||!_0x50040b[_0xbebcab(0x29c)][_0xbebcab(0x23b)])){for(var _0x5ea7ee=[],_0x13a1bb=[],_0x49a877=0x0,_0x221260=_0x50040b[_0xbebcab(0x29c)][_0xbebcab(0x23b)];_0x49a877<_0x221260;_0x49a877++){var _0x3829cd=_0x50040b[_0xbebcab(0x29c)][_0x49a877];_0x3829cd[_0xbebcab(0x251)]===_0xbebcab(0x24e)?_0x5ea7ee[_0xbebcab(0x2b1)](_0x3829cd):_0x13a1bb[_0xbebcab(0x2b1)](_0x3829cd);}if(!(!_0x13a1bb[_0xbebcab(0x23b)]||_0x5ea7ee[_0xbebcab(0x23b)]<=0x1)){_0x50040b['props']=_0x13a1bb;var _0xa7b754={'functionsNode':!0x0,'props':_0x5ea7ee};this[_0xbebcab(0x2a6)](_0xa7b754,_0x503b20),this['_setNodeLabel'](_0xa7b754,_0x503b20),this['_setNodeExpandableState'](_0xa7b754),this[_0xbebcab(0x214)](_0xa7b754,_0x503b20),_0xa7b754['id']+='\\x20f',_0x50040b[_0xbebcab(0x29c)]['unshift'](_0xa7b754);}}}[_0x1a6332(0x288)](_0x4db326,_0xa490f){}[_0x1a6332(0x1e5)](_0x388987){}[_0x1a6332(0x29d)](_0xd2e7a1){var _0x3e9763=_0x1a6332;return Array[_0x3e9763(0x20c)](_0xd2e7a1)||typeof _0xd2e7a1==_0x3e9763(0x2a5)&&this[_0x3e9763(0x2a8)](_0xd2e7a1)==='[object\\x20Array]';}[_0x1a6332(0x214)](_0x448277,_0xf04f35){}[_0x1a6332(0x2b6)](_0x58c7e1){var _0x30aa06=_0x1a6332;delete _0x58c7e1[_0x30aa06(0x1d4)],delete _0x58c7e1[_0x30aa06(0x2a9)],delete _0x58c7e1['_hasMapOnItsPath'];}[_0x1a6332(0x28d)](_0xbb3828,_0x4df80e){}}let _0x5a4cd2=new _0x1084b5(),_0x2dd719={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x4cb876={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x3d5932(_0x4efab3,_0x2d1a8b,_0x450ce5,_0x264b15,_0x11777b,_0x27fd6a){var _0xdb279b=_0x1a6332;let _0x1f4a99,_0x264d73;try{_0x264d73=_0x2a3998(),_0x1f4a99=_0x3267d2[_0x2d1a8b],!_0x1f4a99||_0x264d73-_0x1f4a99['ts']>0x1f4&&_0x1f4a99[_0xdb279b(0x21f)]&&_0x1f4a99['time']/_0x1f4a99[_0xdb279b(0x21f)]<0x64?(_0x3267d2[_0x2d1a8b]=_0x1f4a99={'count':0x0,'time':0x0,'ts':_0x264d73},_0x3267d2[_0xdb279b(0x27c)]={}):_0x264d73-_0x3267d2['hits']['ts']>0x32&&_0x3267d2[_0xdb279b(0x27c)][_0xdb279b(0x21f)]&&_0x3267d2[_0xdb279b(0x27c)][_0xdb279b(0x239)]/_0x3267d2[_0xdb279b(0x27c)]['count']<0x64&&(_0x3267d2[_0xdb279b(0x27c)]={});let _0x5f5af9=[],_0x501d19=_0x1f4a99[_0xdb279b(0x212)]||_0x3267d2[_0xdb279b(0x27c)][_0xdb279b(0x212)]?_0x4cb876:_0x2dd719,_0x1e6e5e=_0x452de7=>{var _0x19c31b=_0xdb279b;let _0x203b31={};return _0x203b31[_0x19c31b(0x29c)]=_0x452de7[_0x19c31b(0x29c)],_0x203b31[_0x19c31b(0x252)]=_0x452de7[_0x19c31b(0x252)],_0x203b31[_0x19c31b(0x2bc)]=_0x452de7[_0x19c31b(0x2bc)],_0x203b31['totalStrLength']=_0x452de7['totalStrLength'],_0x203b31[_0x19c31b(0x1d9)]=_0x452de7[_0x19c31b(0x1d9)],_0x203b31[_0x19c31b(0x208)]=_0x452de7['autoExpandMaxDepth'],_0x203b31[_0x19c31b(0x1e1)]=!0x1,_0x203b31[_0x19c31b(0x1fd)]=!_0x396865,_0x203b31[_0x19c31b(0x21a)]=0x1,_0x203b31[_0x19c31b(0x296)]=0x0,_0x203b31['expId']='root_exp_id',_0x203b31[_0x19c31b(0x291)]='root_exp',_0x203b31[_0x19c31b(0x274)]=!0x0,_0x203b31[_0x19c31b(0x286)]=[],_0x203b31[_0x19c31b(0x26e)]=0x0,_0x203b31['resolveGetters']=!0x0,_0x203b31[_0x19c31b(0x293)]=0x0,_0x203b31[_0x19c31b(0x1f5)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x203b31;};for(var _0x396ffd=0x0;_0x396ffd<_0x11777b[_0xdb279b(0x23b)];_0x396ffd++)_0x5f5af9[_0xdb279b(0x2b1)](_0x5a4cd2[_0xdb279b(0x1d3)]({'timeNode':_0x4efab3==='time'||void 0x0},_0x11777b[_0x396ffd],_0x1e6e5e(_0x501d19),{}));if(_0x4efab3===_0xdb279b(0x256)){let _0x23f1e3=Error[_0xdb279b(0x2b5)];try{Error[_0xdb279b(0x2b5)]=0x1/0x0,_0x5f5af9['push'](_0x5a4cd2[_0xdb279b(0x1d3)]({'stackNode':!0x0},new Error()[_0xdb279b(0x290)],_0x1e6e5e(_0x501d19),{'strLength':0x1/0x0}));}finally{Error[_0xdb279b(0x2b5)]=_0x23f1e3;}}return{'method':_0xdb279b(0x2aa),'version':_0x3ef9d8,'args':[{'ts':_0x450ce5,'session':_0x264b15,'args':_0x5f5af9,'id':_0x2d1a8b,'context':_0x27fd6a}]};}catch(_0x567d14){return{'method':'log','version':_0x3ef9d8,'args':[{'ts':_0x450ce5,'session':_0x264b15,'args':[{'type':_0xdb279b(0x1f1),'error':_0x567d14&&_0x567d14[_0xdb279b(0x254)]}],'id':_0x2d1a8b,'context':_0x27fd6a}]};}finally{try{if(_0x1f4a99&&_0x264d73){let _0x565ee4=_0x2a3998();_0x1f4a99[_0xdb279b(0x21f)]++,_0x1f4a99[_0xdb279b(0x239)]+=_0x4b109f(_0x264d73,_0x565ee4),_0x1f4a99['ts']=_0x565ee4,_0x3267d2[_0xdb279b(0x27c)][_0xdb279b(0x21f)]++,_0x3267d2[_0xdb279b(0x27c)]['time']+=_0x4b109f(_0x264d73,_0x565ee4),_0x3267d2[_0xdb279b(0x27c)]['ts']=_0x565ee4,(_0x1f4a99[_0xdb279b(0x21f)]>0x32||_0x1f4a99[_0xdb279b(0x239)]>0x64)&&(_0x1f4a99[_0xdb279b(0x212)]=!0x0),(_0x3267d2[_0xdb279b(0x27c)][_0xdb279b(0x21f)]>0x3e8||_0x3267d2[_0xdb279b(0x27c)]['time']>0x12c)&&(_0x3267d2[_0xdb279b(0x27c)]['reduceLimits']=!0x0);}}catch{}}}return _0x3d5932;}((_0x309eac,_0x20871a,_0xd9b857,_0x67a346,_0xb8caaf,_0x135dcb,_0x399f10,_0x365094,_0x1ef38d,_0x14bc26)=>{var _0x3f1576=_0x1ce8fd;if(_0x309eac['_console_ninja'])return _0x309eac[_0x3f1576(0x234)];if(!J(_0x309eac,_0x365094,_0xb8caaf))return _0x309eac[_0x3f1576(0x234)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x309eac[_0x3f1576(0x234)];let _0x3b10a6=W(_0x309eac),_0x3e6748=_0x3b10a6[_0x3f1576(0x250)],_0x18a6ec=_0x3b10a6[_0x3f1576(0x26c)],_0x4d5ac2=_0x3b10a6[_0x3f1576(0x285)],_0x360a5b={'hits':{},'ts':{}},_0x3d1a2c=Y(_0x309eac,_0x1ef38d,_0x360a5b,_0x135dcb),_0x29aff0=_0x279913=>{_0x360a5b['ts'][_0x279913]=_0x18a6ec();},_0x132d93=(_0xa2a414,_0x252c8e)=>{var _0x23379d=_0x3f1576;let _0x591cb3=_0x360a5b['ts'][_0x252c8e];if(delete _0x360a5b['ts'][_0x252c8e],_0x591cb3){let _0x2aaa11=_0x3e6748(_0x591cb3,_0x18a6ec());_0x4d2eeb(_0x3d1a2c(_0x23379d(0x239),_0xa2a414,_0x4d5ac2(),_0x5e4644,[_0x2aaa11],_0x252c8e));}},_0x36c483=_0x2d780f=>_0x5ab0ae=>{var _0x4ea5f9=_0x3f1576;try{_0x29aff0(_0x5ab0ae),_0x2d780f(_0x5ab0ae);}finally{_0x309eac[_0x4ea5f9(0x2a0)][_0x4ea5f9(0x239)]=_0x2d780f;}},_0x1c1df6=_0x508e84=>_0x484e84=>{var _0xabfca5=_0x3f1576;try{let [_0x505312,_0x5a492c]=_0x484e84[_0xabfca5(0x2bb)](_0xabfca5(0x1e4));_0x132d93(_0x5a492c,_0x505312),_0x508e84(_0x505312);}finally{_0x309eac[_0xabfca5(0x2a0)][_0xabfca5(0x20d)]=_0x508e84;}};_0x309eac[_0x3f1576(0x234)]={'consoleLog':(_0x48621f,_0x43d490)=>{var _0x2790b8=_0x3f1576;_0x309eac[_0x2790b8(0x2a0)][_0x2790b8(0x2aa)][_0x2790b8(0x281)]!==_0x2790b8(0x2ab)&&_0x4d2eeb(_0x3d1a2c('log',_0x48621f,_0x4d5ac2(),_0x5e4644,_0x43d490));},'consoleTrace':(_0x46210e,_0x50af04)=>{var _0xdb926a=_0x3f1576;_0x309eac[_0xdb926a(0x2a0)][_0xdb926a(0x2aa)][_0xdb926a(0x281)]!==_0xdb926a(0x23e)&&_0x4d2eeb(_0x3d1a2c(_0xdb926a(0x256),_0x46210e,_0x4d5ac2(),_0x5e4644,_0x50af04));},'consoleTime':()=>{var _0x3641ae=_0x3f1576;_0x309eac[_0x3641ae(0x2a0)][_0x3641ae(0x239)]=_0x36c483(_0x309eac[_0x3641ae(0x2a0)][_0x3641ae(0x239)]);},'consoleTimeEnd':()=>{var _0x57354c=_0x3f1576;_0x309eac['console'][_0x57354c(0x20d)]=_0x1c1df6(_0x309eac[_0x57354c(0x2a0)][_0x57354c(0x20d)]);},'autoLog':(_0x3b13b8,_0x44053d)=>{_0x4d2eeb(_0x3d1a2c('log',_0x44053d,_0x4d5ac2(),_0x5e4644,[_0x3b13b8]));},'autoLogMany':(_0x35c2f5,_0x1e0b1c)=>{var _0x373c36=_0x3f1576;_0x4d2eeb(_0x3d1a2c(_0x373c36(0x2aa),_0x35c2f5,_0x4d5ac2(),_0x5e4644,_0x1e0b1c));},'autoTrace':(_0x1fbcea,_0x1244ea)=>{var _0x140d07=_0x3f1576;_0x4d2eeb(_0x3d1a2c(_0x140d07(0x256),_0x1244ea,_0x4d5ac2(),_0x5e4644,[_0x1fbcea]));},'autoTraceMany':(_0x1fb212,_0x580566)=>{var _0x36b925=_0x3f1576;_0x4d2eeb(_0x3d1a2c(_0x36b925(0x256),_0x1fb212,_0x4d5ac2(),_0x5e4644,_0x580566));},'autoTime':(_0xc70b5,_0x5960be,_0x4c3b68)=>{_0x29aff0(_0x4c3b68);},'autoTimeEnd':(_0x212386,_0x5a398f,_0x2f1160)=>{_0x132d93(_0x5a398f,_0x2f1160);},'coverage':_0x46bbd3=>{var _0x21a562=_0x3f1576;_0x4d2eeb({'method':_0x21a562(0x276),'version':_0x135dcb,'args':[{'id':_0x46bbd3}]});}};let _0x4d2eeb=b(_0x309eac,_0x20871a,_0xd9b857,_0x67a346,_0xb8caaf,_0x14bc26),_0x5e4644=_0x309eac[_0x3f1576(0x23d)];return _0x309eac[_0x3f1576(0x234)];})(globalThis,_0x1ce8fd(0x231),_0x1ce8fd(0x24f),\"/home/insane/.vscode/extensions/wallabyjs.console-ninja-1.0.301/node_modules\",_0x1ce8fd(0x223),_0x1ce8fd(0x2af),_0x1ce8fd(0x273),_0x1ce8fd(0x21e),_0x1ce8fd(0x2a2),_0x1ce8fd(0x260));function _0x22ca(){var _0x47fb24=['_keyStrRegExp','default','name','prototype','HTMLAllCollection','enumerable','now','autoExpandPreviousObjects','hostname','_addLoadNode','_isSet','_consoleNinjaAllowedToStart','_reconnectTimeout','get','_setNodeExpressionPath','process','_treeNodePropertiesAfterFullValue','stack','rootExpression','_isNegativeZero','allStrLength','create','resolveGetters','level','_propertyName','_p_length','concat','406439zFdFuJ','path','props','_isArray','warn','320004cMUxrI','console','data','','_setNodeQueryPath','_numberRegExp','object','_setNodeId','_quotedRegExp','_objectToString','_hasSetOnItsPath','log','disabledLog','bigint','getOwnPropertySymbols','error','1.0.0','join','push','355lYxwft','close','symbol','stackTraceLimit','_cleanNode','global','22LPghiW','21FUYedE','_connectAttemptCount','split','strLength','Map','array','valueOf','undefined','nodeModules','serialize','_hasSymbolPropertyOnItsPath','_maxConnectAttemptCount','onclose','number','next.js','autoExpandLimit','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','string','stringify','onopen','_processTreeNodeResult','_p_name','_connected','sortProps','_isPrimitiveWrapperType','performance',':logPointId:','_setNodeExpandableState','logger\\x20websocket\\x20error','_undefined','setter','_property','cappedProps','env','getPrototypeOf','[object\\x20Map]','ws://','_sortProps','nuxt','unknown','perf_hooks','substr','_addObjectProperty','node','8ogzEZg','match','Boolean','onmessage','_p_','_WebSocket','_type','noFunctions','map','current','_inNextEdge','hrtime','NEGATIVE_INFINITY','reload','versions','getter','[object\\x20Date]','\\x20browser','autoExpandMaxDepth','location','constructor','_getOwnPropertyNames','isArray','timeEnd','Set','port','_ws','WebSocket','reduceLimits','_WebSocketClass','_setNodePermissions','catch','host','angular','gateway.docker.internal','set','depth','date','_allowedToConnectOnSend','_capIfString',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Xubuntu\",\"10.0.2.15\"],'count','index','null','[object\\x20Array]','webpack','_disposeWebsocket','funcName','replace','expressionsToEvaluate','_Symbol','getOwnPropertyNames','ws/index.js','defineProperty','slice','capped','POSITIVE_INFINITY','_isPrimitiveType','getWebSocketClass','127.0.0.1','parent','url','_console_ninja','_getOwnPropertyDescriptor','onerror','_additionalMetadata','edge','time','bind','length','sort','_console_ninja_session','disabledTrace','_blacklistedProperty','_allowedToSend','_setNodeLabel','_connecting','_addFunctionsNode','_regExpToString','toLowerCase','...','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','74442gBYsoy','Symbol','6658254AsNemz','_addProperty','1432360MuBURm','_attemptToReconnectShortly','function','34999','elapsed','type','elements','_isMap','message','_socket','trace','8dQOMaG','isExpressionToEvaluate','https://tinyurl.com/37x8b79t','Number','call','_HTMLAllCollection','_isUndefined','dockerizedApp','forEach','','_webSocketErrorDocsLink','_inBrowser','Buffer','test','_connectToHostNow','unref','_getOwnPropertySymbols','totalStrLength','then','NEXT_RUNTIME','pathToFileURL','timeStamp','1068513SMLZFi','autoExpandPropertyCount','pop','toString','value','10233550GIDQRx','1712753012150','autoExpand','negativeZero','coverage','String','_treeNodePropertiesBeforeFullValue','_dateToString','cappedElements','send','hits','getOwnPropertyDescriptor','RegExp'];_0x22ca=function(){return _0x47fb24;};return _0x22ca();}");}catch(e){}};/* istanbul ignore next */function oo_oo(i,...v){try{oo_cm().consoleLog(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_tr(i,...v){try{oo_cm().consoleTrace(i, v);}catch(e){} return v};/* istanbul ignore next */function oo_ts(){try{oo_cm().consoleTime();}catch(e){}};/* istanbul ignore next */function oo_te(){try{oo_cm().consoleTimeEnd();}catch(e){}};/*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOUI7QUFDQTtBQUNBLHNEQUFzRCxhQUFhO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYztBQUMzRDs7QUFFQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FB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QUNBOztBQUVBO0FBQ0EsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkN1QjtBQUNOO0FBQytDOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx5QkFBeUIsMkRBQVU7QUFDbkMsMEJBQTBCLDJEQUFVOztBQUVwQztBQUNBLHNCQUFzQix5R0FBK0I7QUFDckQ7QUFDQSx1QkFBdUIseUdBQStCOztBQUV0RDtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsNkRBQWlCO0FBQ3hFOztBQUVBO0FBQ0EsaUVBQWUsd0JBQXdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEaUI7QUFDSztBQUNKO0FBQ1E7QUFLOUI7QUFDSTtBQUNGOztBQUV0QztBQUNBO0FBQ3NDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVnQzs7QUFFaEM7QUFDQSxRQUFRLGNBQWM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LHVEQUF1RCx1RkFBdUYsSUFBSSxpQkFBaUIsT0FBTyw0Q0FBNEMsNENBQTRDLHVFQUF1RSxxQ0FBcUMsSUFBSSxRQUFRLElBQUkseUJBQXlCLDBCQUEwQixvaEJBQW9oQixTQUFTLGtCQUFrQix5R0FBeUcsd0JBQXdCLGtFQUFrRSx5RUFBeUUsbUJBQW1CLHNCQUFzQixxQkFBcUIsd0JBQXdCLGlCQUFpQixxQkFBcUIsdUJBQXVCLGtCQUFrQixtQkFBbUIsa0JBQWtCLHNCQUFzQiw2QkFBNkIsd0pBQXdKLFNBQVMsU0FBUyw0RUFBNEUsd0NBQXdDLG1DQUFtQyx3QkFBd0IseUNBQXlDLGdEQUFnRCwrQ0FBK0MsK0ZBQStGLGtDQUFrQyx3QkFBd0IsSUFBSSwyQ0FBMkMsUUFBUSwwREFBMEQsa0NBQWtDLHdCQUF3QixJQUFJLHdFQUF3RSxxREFBcUQsUUFBUSwyREFBMkQsNkJBQTZCLHFDQUFxQyx3QkFBd0IsMkpBQTJKLHdDQUF3Qyx3QkFBd0Isc0tBQXNLLG9CQUFvQix3QkFBd0Isd0dBQXdHLHVCQUF1Qix3QkFBd0IsaUdBQWlHLG1DQUFtQyx5RUFBeUUsdUNBQXVDLHdCQUF3QixrRkFBa0YscUNBQXFDLHdCQUF3QixvRkFBb0YseUNBQXlDLHdCQUF3QixrRkFBa0YsNkNBQTZDLHNCQUFzQixpREFBaUQsZ0NBQWdDLHdCQUF3Qix3QkFBd0IsV0FBVyx1REFBdUQsZUFBZSxFQUFFLEtBQUssbUhBQW1ILG9DQUFvQyx1T0FBdU8sbUJBQW1CLG9vRkFBb29GLDh4QkFBOHhCLG1CQUFtQixtQkFBbUIsa0JBQWtCLElBQUksWUFBWSxpREFBaUQsSUFBSSwwQkFBMEIsV0FBVyxVQUFVLGlEQUFpRCxJQUFJLDRCQUE0QixXQUFXLFVBQVUsMkNBQTJDLElBQUksdUJBQXVCLFlBQVksMkNBQTJDLElBQUksMEJBQTBCLFlBQVksMlEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvYWRkTGVhZGluZ1plcm9zLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2RlZmF1bHRPcHRpb25zLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvcHJvdGVjdGVkVG9rZW5zLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9hZGREYXlzLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdGFudHMubWpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0cnVjdEZyb20ubWpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0Lm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREYXlPZlllYXIubWpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWsubWpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNEYXRlLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1ZhbGlkLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4ubWpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gubWpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mSVNPV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZXZWVrLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vla1llYXIubWpzIiwid2VicGFjazovL3RvcC10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZZZWFyLm1qcyIsIndlYnBhY2s6Ly90b3AtdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvcC10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC10b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZGlzcGxheS10b3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgICB3aWR0aDogMTAwMHB4O1xufVxuXG4ubGVmdC1wYW5lbCB7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbi5yaWdodC1wYW5lbCB7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xufVxuXG4uaW52aXNpYmxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZGlzcGxheS10b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgaGVpZ2h0OiA4MDBweDtcXG4gICAgd2lkdGg6IDEwMDBweDtcXG59XFxuXFxuLmxlZnQtcGFuZWwge1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5yaWdodC1wYW5lbCB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5pbnZpc2libGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGxldCBjdXJyZW50UHJvamVjdEluZGV4ID0gMFxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTWFpbkxheW91dCgpIHtcbiAgICAgICAgY29uc3QgYm9keUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIilcblxuICAgICAgICBjb25zdCBjb250YWluZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgZGlzcGxheVRvcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCBsZWZ0UGFuZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgcmlnaHRQYW5lbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCBkaXNwbGF5Qm90dG9tRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHByb2plY3RzQnRuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgY29uc3QgZGlhbG9nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGlhbG9nXCIpXG4gICAgICAgIGNvbnN0IGRpYWxvZ0Nsb3NlQnRuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGNvbnN0IGRpYWxvZ0Nsb3NlQnRuSW1hZ2VFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWFnZVwiKVxuICAgICAgICBjb25zdCBmb3JtRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgICAgICBjb25zdCBzdWJtaXRCdG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcblxuICAgICAgICBjb250YWluZXJFbC5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpXG4gICAgICAgIGRpc3BsYXlUb3BFbC5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS10b3BcIilcbiAgICAgICAgbGVmdFBhbmVsRWwuY2xhc3NMaXN0LmFkZChcImxlZnQtcGFuZWxcIilcbiAgICAgICAgcmlnaHRQYW5lbEVsLmNsYXNzTGlzdC5hZGQoXCJyaWdodC1wYW5lbFwiKVxuICAgICAgICBkaXNwbGF5Qm90dG9tRWwuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktYm90dG9tXCIpXG4gICAgICAgIGRpYWxvZ0VsLmNsYXNzTGlzdC5hZGQoXCJkaWFsb2dcIilcbiAgICAgICAgZGlhbG9nQ2xvc2VCdG5FbC5jbGFzc0xpc3QuYWRkKFwiZGlhbG9nLWNsb3NlLWJ1dHRvblwiKVxuICAgICAgICBkaWFsb2dDbG9zZUJ0bkltYWdlRWwuY2xhc3NMaXN0LmFkZChcImRpYWxvZy1jbG9zZS1pbWFnZVwiKVxuICAgICAgICBmb3JtRWwuY2xhc3NMaXN0LmFkZChcImZvcm1cIilcbiAgICAgICAgc3VibWl0QnRuRWwuY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idXR0b25cIilcblxuICAgICAgICBwcm9qZWN0c0J0bkVsLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1idXR0b25cIilcbiAgICAgICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtYnV0dG9uXCIpXG5cbiAgICAgICAgc3VibWl0QnRuRWwuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKVxuICAgICAgICBzdWJtaXRCdG5FbC5zZXRBdHRyaWJ1dGUoXCJmb3JtbWV0aG9kXCIsIFwiZGlhbG9nXCIpXG4gICAgICAgIHN1Ym1pdEJ0bkVsLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwic3VibWl0XCIpXG5cbiAgICAgICAgcHJvamVjdHNCdG5FbC50ZXh0Q29udGVudCA9IFwiUFJPSkVDVFNcIiAvL3BsYWNlaG9sZGVyXG4gICAgICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQUREXCIgLy9wbGFjZWhvbGRlclxuICAgICAgICBkaWFsb2dDbG9zZUJ0bkVsLnRleHRDb250ZW50ID0gXCJDTE9TRVwiIC8vcGxhY2Vob2xkZXJcbiAgICAgICAgc3VibWl0QnRuRWwudGV4dENvbnRlbnQgPSBcIlNVQk1JVFwiIC8vc2FtZVxuXG4gICAgICAgIGRpc3BsYXlUb3BFbC5hcHBlbmRDaGlsZChsZWZ0UGFuZWxFbClcbiAgICAgICAgZGlzcGxheVRvcEVsLmFwcGVuZENoaWxkKHJpZ2h0UGFuZWxFbClcbiAgICAgICAgZGlhbG9nQ2xvc2VCdG5FbC5hcHBlbmRDaGlsZChkaWFsb2dDbG9zZUJ0bkltYWdlRWwpXG4gICAgICAgIGRpYWxvZ0VsLmFwcGVuZENoaWxkKGRpYWxvZ0Nsb3NlQnRuRWwpXG4gICAgICAgIGRpYWxvZ0VsLmFwcGVuZENoaWxkKGZvcm1FbClcbiAgICAgICAgY29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoZGlzcGxheVRvcEVsKVxuICAgICAgICBjb250YWluZXJFbC5hcHBlbmRDaGlsZChkaXNwbGF5Qm90dG9tRWwpXG4gICAgICAgIGNvbnRhaW5lckVsLmFwcGVuZENoaWxkKHByb2plY3RzQnRuRWwpXG4gICAgICAgIGNvbnRhaW5lckVsLmFwcGVuZENoaWxkKGFkZEJ0bilcbiAgICAgICAgY29udGFpbmVyRWwuYXBwZW5kQ2hpbGQoZGlhbG9nRWwpXG4gICAgICAgIGZvcm1FbC5hcHBlbmRDaGlsZChzdWJtaXRCdG5FbClcblxuICAgICAgICBib2R5RWwuYXBwZW5kQ2hpbGQoY29udGFpbmVyRWwpXG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdHNBcnJheSkge1xuICAgICAgICBjb25zdCByaWdodFBhbmVsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0LXBhbmVsXCIpXG4gICAgICAgIGNvbnN0IGxlZnRQYW5lbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sZWZ0LXBhbmVsXCIpXG5cbiAgICAgICAgcHJvamVjdHNBcnJheS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuXG4gICAgICAgICAgICBwcm9qZWN0RWwuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGlsZVwiKVxuICAgICAgICAgICAgcHJvamVjdEVsLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaW5kZXgpXG4gICAgICAgICAgICBwcm9qZWN0RWwudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWVcblxuICAgICAgICAgICAgbGVmdFBhbmVsRWwuYXBwZW5kQ2hpbGQocHJvamVjdEVsKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJlbmRlclRvZG9zKHByb2plY3RzQXJyYXkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVG9kb3MocHJvamVjdHNBcnJheSwgcHJvamVjdEluZGV4ID0gMCkge1xuICAgICAgICBjb25zdCByaWdodFBhbmVsRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJpZ2h0LXBhbmVsXCIpXG4gICAgICAgIHJpZ2h0UGFuZWxFbC50ZXh0Q29udGVudCA9IFwiXCJcblxuICAgICAgICBjdXJyZW50UHJvamVjdEluZGV4ID0gcHJvamVjdEluZGV4XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDUxNTM0NzgxM184Ml84XzgyXzY0XzRgLGBjdXJyZW50IHByb2plY3QgaXMgJHtjdXJyZW50UHJvamVjdEluZGV4fWApKVxuXG4gICAgICAgIGlmIChwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0udG9kb3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByaWdodFBhbmVsRWwudGV4dENvbnRlbnQgPSBcIm5vIHRvZG9zIGhlcmUgeWV0LCBsZXQncyBhZGQgc29tZSFcIlxuICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICBwcm9qZWN0c0FycmF5W3Byb2plY3RJbmRleF0udG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZG9FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgIHRvZG9FbC5jbGFzc0xpc3QuYWRkKFwidG9kb1wiKVxuICAgICAgICAgICAgdG9kb0VsLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaW5kZXgpXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9UaXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgICAgICAgICB0b2RvVGl0bGVFbC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGVcbiAgICAgICAgICAgIHRvZG9UaXRsZUVsLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpXG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICAgICAgICAgIHRvZG9EdWVEYXRlRWwudGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGVcbiAgICAgICAgICAgIHRvZG9EdWVEYXRlRWwuY2xhc3NMaXN0LmFkZChcInRvZG8tZHVlZGF0ZVwiKVxuXG4gICAgICAgICAgICBjb25zdCBlZGl0VG9kb0J0bkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICAgICAgZWRpdFRvZG9CdG5FbC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1idG5cIilcbiAgICAgICAgICAgIGVkaXRUb2RvQnRuRWwudGV4dENvbnRlbnQgPSBcImVkaXRcIlxuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVUb2RvQnRuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgICAgICBkZWxldGVUb2RvQnRuRWwuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIilcbiAgICAgICAgICAgIGRlbGV0ZVRvZG9CdG5FbC50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCJcblxuICAgICAgICAgICAgdG9kb0VsLmFwcGVuZENoaWxkKHRvZG9UaXRsZUVsKVxuICAgICAgICAgICAgdG9kb0VsLmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlRWwpXG4gICAgICAgICAgICB0b2RvRWwuYXBwZW5kQ2hpbGQoZWRpdFRvZG9CdG5FbClcbiAgICAgICAgICAgIHRvZG9FbC5hcHBlbmRDaGlsZChkZWxldGVUb2RvQnRuRWwpXG5cbiAgICAgICAgICAgIHJpZ2h0UGFuZWxFbC5hcHBlbmRDaGlsZCh0b2RvRWwpXG4gICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJEaWFsb2coaXNQcm9qZWN0UGFuZWxWaXNpYmxlID0gMCkge1xuICAgICAgICBjb25zdCBkaWFsb2dFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlhbG9nXCIpXG4gICAgICAgIGRpYWxvZ0VsLnNob3dNb2RhbCgpXG5cbiAgICAgICAgaWYgKGlzUHJvamVjdFBhbmVsVmlzaWJsZSkge1xuICAgICAgICAgICAgcHJvamVjdERpYWxvZygpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2RvRGlhbG9nKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2plY3REaWFsb2coKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDUxNTM0NzgxM18xMzFfOF8xMzFfNTFfNGAsXCJyZW5kZXJpbmcgbmV3IHByb2plY3QgZGlhbG9nXCIpKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9ybUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpXG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgICAgIG5hbWVJbnB1dEVsLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXG4gICAgICAgIG5hbWVJbnB1dEVsLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiTXkgUHJvamVjdFwiKVxuICAgICAgICBmb3JtRWwuYXBwZW5kQ2hpbGQobmFtZUlucHV0RWwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9kb0RpYWxvZygpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgNTE1MzQ3ODEzXzE0MV84XzE0MV80OF80YCxcInJlbmRlcmluZyBuZXcgdG9kbyBkaWFsb2dcIikpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3RJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9qZWN0SW5kZXhcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4geyBjcmVhdGVNYWluTGF5b3V0LCByZW5kZXJQcm9qZWN0cywgcmVuZGVyVG9kb3MsIHJlbmRlckRpYWxvZywgZ2V0Q3VycmVudFByb2plY3RJbmRleCB9XG5cbn0oKSlcblxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLy8qIGM4IGlnbm9yZSBzdGFydCAqLy8qIGVzbGludC1kaXNhYmxlICovO2Z1bmN0aW9uIG9vX2NtKCl7dHJ5e3JldHVybiAoMCxldmFsKShcImdsb2JhbFRoaXMuX2NvbnNvbGVfbmluamFcIikgfHwgKDAsZXZhbCkoXCIvKiBodHRwczovL2dpdGh1Yi5jb20vd2FsbGFieWpzL2NvbnNvbGUtbmluamEjaG93LWRvZXMtaXQtd29yayAqLyd1c2Ugc3RyaWN0Jzt2YXIgXzB4MWNlOGZkPV8weDVjYWU7ZnVuY3Rpb24gXzB4NWNhZShfMHg0OWRiOWUsXzB4YTk4MDk5KXt2YXIgXzB4MjJjYWZhPV8weDIyY2EoKTtyZXR1cm4gXzB4NWNhZT1mdW5jdGlvbihfMHg1Y2FlMzYsXzB4MmQyYWYyKXtfMHg1Y2FlMzY9XzB4NWNhZTM2LTB4MWQxO3ZhciBfMHgyYjllODE9XzB4MjJjYWZhW18weDVjYWUzNl07cmV0dXJuIF8weDJiOWU4MTt9LF8weDVjYWUoXzB4NDlkYjllLF8weGE5ODA5OSk7fShmdW5jdGlvbihfMHg0OWM2YmEsXzB4Mzg0MTY0KXt2YXIgXzB4MmM5Nzg5PV8weDVjYWUsXzB4NDY2YmQ1PV8weDQ5YzZiYSgpO3doaWxlKCEhW10pe3RyeXt2YXIgXzB4NGNlM2QzPS1wYXJzZUludChfMHgyYzk3ODkoMHgyOWEpKS8weDEqKC1wYXJzZUludChfMHgyYzk3ODkoMHgyNTcpKS8weDIpKy1wYXJzZUludChfMHgyYzk3ODkoMHgyNmQpKS8weDMqKC1wYXJzZUludChfMHgyYzk3ODkoMHgxZjYpKS8weDQpKy1wYXJzZUludChfMHgyYzk3ODkoMHgyYjIpKS8weDUqKC1wYXJzZUludChfMHgyYzk3ODkoMHgyNDgpKS8weDYpK3BhcnNlSW50KF8weDJjOTc4OSgweDJiOSkpLzB4NyooLXBhcnNlSW50KF8weDJjOTc4OSgweDI0YykpLzB4OCkrLXBhcnNlSW50KF8weDJjOTc4OSgweDI0YSkpLzB4OSstcGFyc2VJbnQoXzB4MmM5Nzg5KDB4MjcyKSkvMHhhK3BhcnNlSW50KF8weDJjOTc4OSgweDJiOCkpLzB4YiooLXBhcnNlSW50KF8weDJjOTc4OSgweDI5ZikpLzB4Yyk7aWYoXzB4NGNlM2QzPT09XzB4Mzg0MTY0KWJyZWFrO2Vsc2UgXzB4NDY2YmQ1WydwdXNoJ10oXzB4NDY2YmQ1WydzaGlmdCddKCkpO31jYXRjaChfMHg1MDc5YmIpe18weDQ2NmJkNVsncHVzaCddKF8weDQ2NmJkNVsnc2hpZnQnXSgpKTt9fX0oXzB4MjJjYSwweGQzNDU1KSk7dmFyIGo9T2JqZWN0W18weDFjZThmZCgweDI5NCldLEg9T2JqZWN0W18weDFjZThmZCgweDIyYildLEc9T2JqZWN0W18weDFjZThmZCgweDI3ZCldLGVlPU9iamVjdFtfMHgxY2U4ZmQoMHgyMjkpXSx0ZT1PYmplY3RbXzB4MWNlOGZkKDB4MWVjKV0sbmU9T2JqZWN0W18weDFjZThmZCgweDI4MildWydoYXNPd25Qcm9wZXJ0eSddLHJlPShfMHg0MjJiYTQsXzB4YjE3MjNhLF8weDU2MWQwOCxfMHgxYzIwMmQpPT57dmFyIF8weDVjZWM3Mj1fMHgxY2U4ZmQ7aWYoXzB4YjE3MjNhJiZ0eXBlb2YgXzB4YjE3MjNhPT1fMHg1Y2VjNzIoMHgyYTUpfHx0eXBlb2YgXzB4YjE3MjNhPT0nZnVuY3Rpb24nKXtmb3IobGV0IF8weDExNjNkZCBvZiBlZShfMHhiMTcyM2EpKSFuZVsnY2FsbCddKF8weDQyMmJhNCxfMHgxMTYzZGQpJiZfMHgxMTYzZGQhPT1fMHg1NjFkMDgmJkgoXzB4NDIyYmE0LF8weDExNjNkZCx7J2dldCc6KCk9Pl8weGIxNzIzYVtfMHgxMTYzZGRdLCdlbnVtZXJhYmxlJzohKF8weDFjMjAyZD1HKF8weGIxNzIzYSxfMHgxMTYzZGQpKXx8XzB4MWMyMDJkW18weDVjZWM3MigweDI4NCldfSk7fXJldHVybiBfMHg0MjJiYTQ7fSx4PShfMHgyZmE3YTcsXzB4NTYwZTFlLF8weDRhMmNiOCk9PihfMHg0YTJjYjg9XzB4MmZhN2E3IT1udWxsP2oodGUoXzB4MmZhN2E3KSk6e30scmUoXzB4NTYwZTFlfHwhXzB4MmZhN2E3fHwhXzB4MmZhN2E3WydfX2VzJysnTW9kdWxlJ10/SChfMHg0YTJjYjgsXzB4MWNlOGZkKDB4MjgwKSx7J3ZhbHVlJzpfMHgyZmE3YTcsJ2VudW1lcmFibGUnOiEweDB9KTpfMHg0YTJjYjgsXzB4MmZhN2E3KSksWD1jbGFzc3tjb25zdHJ1Y3RvcihfMHgyMGE3MGQsXzB4NDRhZjBkLF8weDVmNTZkMCxfMHg1ZjU4OGYsXzB4MmEyNTQ3KXt2YXIgXzB4NTlkNzgyPV8weDFjZThmZDt0aGlzWydnbG9iYWwnXT1fMHgyMGE3MGQsdGhpc1tfMHg1OWQ3ODIoMHgyMTYpXT1fMHg0NGFmMGQsdGhpc1sncG9ydCddPV8weDVmNTZkMCx0aGlzWydub2RlTW9kdWxlcyddPV8weDVmNTg4Zix0aGlzWydkb2NrZXJpemVkQXBwJ109XzB4MmEyNTQ3LHRoaXNbXzB4NTlkNzgyKDB4MjQwKV09ITB4MCx0aGlzW18weDU5ZDc4MigweDIxYyldPSEweDAsdGhpc1tfMHg1OWQ3ODIoMHgxZTApXT0hMHgxLHRoaXNbXzB4NTlkNzgyKDB4MjQyKV09ITB4MSx0aGlzW18weDU5ZDc4MigweDIwMCldPV8weDIwYTcwZFtfMHg1OWQ3ODIoMHgyOGUpXT8uWydlbnYnXT8uW18weDU5ZDc4MigweDI2YSldPT09XzB4NTlkNzgyKDB4MjM4KSx0aGlzW18weDU5ZDc4MigweDI2MildPSF0aGlzWydnbG9iYWwnXVtfMHg1OWQ3ODIoMHgyOGUpXT8uWyd2ZXJzaW9ucyddPy5bXzB4NTlkNzgyKDB4MWY1KV0mJiF0aGlzW18weDU5ZDc4MigweDIwMCldLHRoaXNbXzB4NTlkNzgyKDB4MjEzKV09bnVsbCx0aGlzW18weDU5ZDc4MigweDJiYSldPTB4MCx0aGlzW18weDU5ZDc4MigweDFkNSldPTB4MTQsdGhpc1tfMHg1OWQ3ODIoMHgyNjEpXT1fMHg1OWQ3ODIoMHgyNTkpLHRoaXNbJ19zZW5kRXJyb3JNZXNzYWdlJ109KHRoaXNbJ19pbkJyb3dzZXInXT8nQ29uc29sZVxcXFx4MjBOaW5qYVxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwc2VuZFxcXFx4MjBsb2dzLFxcXFx4MjByZWZyZXNoaW5nXFxcXHgyMHRoZVxcXFx4MjBwYWdlXFxcXHgyMG1heVxcXFx4MjBoZWxwO1xcXFx4MjBhbHNvXFxcXHgyMHNlZVxcXFx4MjAnOl8weDU5ZDc4MigweDI0NykpK3RoaXNbXzB4NTlkNzgyKDB4MjYxKV07fWFzeW5jW18weDFjZThmZCgweDIzMCldKCl7dmFyIF8weDNjZGQwZT1fMHgxY2U4ZmQ7aWYodGhpc1tfMHgzY2RkMGUoMHgyMTMpXSlyZXR1cm4gdGhpc1tfMHgzY2RkMGUoMHgyMTMpXTtsZXQgXzB4MzRlY2YyO2lmKHRoaXNbXzB4M2NkZDBlKDB4MjYyKV18fHRoaXNbJ19pbk5leHRFZGdlJ10pXzB4MzRlY2YyPXRoaXNbXzB4M2NkZDBlKDB4MmI3KV1bXzB4M2NkZDBlKDB4MjExKV07ZWxzZXtpZih0aGlzW18weDNjZGQwZSgweDJiNyldW18weDNjZGQwZSgweDI4ZSldPy5bXzB4M2NkZDBlKDB4MWZiKV0pXzB4MzRlY2YyPXRoaXNbXzB4M2NkZDBlKDB4MmI3KV1bXzB4M2NkZDBlKDB4MjhlKV0/LltfMHgzY2RkMGUoMHgxZmIpXTtlbHNlIHRyeXtsZXQgXzB4MmRjNGZlPWF3YWl0IGltcG9ydChfMHgzY2RkMGUoMHgyOWIpKTtfMHgzNGVjZjI9KGF3YWl0IGltcG9ydCgoYXdhaXQgaW1wb3J0KF8weDNjZGQwZSgweDIzMykpKVtfMHgzY2RkMGUoMHgyNmIpXShfMHgyZGM0ZmVbXzB4M2NkZDBlKDB4MmIwKV0odGhpc1tfMHgzY2RkMGUoMHgxZDIpXSxfMHgzY2RkMGUoMHgyMmEpKSlbXzB4M2NkZDBlKDB4MjcwKV0oKSkpW18weDNjZGQwZSgweDI4MCldO31jYXRjaHt0cnl7XzB4MzRlY2YyPXJlcXVpcmUocmVxdWlyZShfMHgzY2RkMGUoMHgyOWIpKVsnam9pbiddKHRoaXNbJ25vZGVNb2R1bGVzJ10sJ3dzJykpO31jYXRjaHt0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBmaW5kXFxcXHgyMGFuZFxcXFx4MjBsb2FkXFxcXHgyMFdlYlNvY2tldCcpO319fXJldHVybiB0aGlzW18weDNjZGQwZSgweDIxMyldPV8weDM0ZWNmMixfMHgzNGVjZjI7fVtfMHgxY2U4ZmQoMHgyNjUpXSgpe3ZhciBfMHgyMjY5NmE9XzB4MWNlOGZkO3RoaXNbXzB4MjI2OTZhKDB4MjQyKV18fHRoaXNbJ19jb25uZWN0ZWQnXXx8dGhpc1tfMHgyMjY5NmEoMHgyYmEpXT49dGhpc1tfMHgyMjY5NmEoMHgxZDUpXXx8KHRoaXNbXzB4MjI2OTZhKDB4MjFjKV09ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDAsdGhpc1tfMHgyMjY5NmEoMHgyYmEpXSsrLHRoaXNbJ193cyddPW5ldyBQcm9taXNlKChfMHgzMjI0NmEsXzB4MTE5ZDU0KT0+e3ZhciBfMHgzMDYzMTk9XzB4MjI2OTZhO3RoaXNbXzB4MzA2MzE5KDB4MjMwKV0oKVsndGhlbiddKF8weGQyZmNiNj0+e3ZhciBfMHg5MjhhYTc9XzB4MzA2MzE5O2xldCBfMHhmNTIzMjQ9bmV3IF8weGQyZmNiNihfMHg5MjhhYTcoMHgxZWUpKyghdGhpc1tfMHg5MjhhYTcoMHgyNjIpXSYmdGhpc1tfMHg5MjhhYTcoMHgyNWUpXT9fMHg5MjhhYTcoMHgyMTgpOnRoaXNbXzB4OTI4YWE3KDB4MjE2KV0pKyc6Jyt0aGlzW18weDkyOGFhNygweDIwZildKTtfMHhmNTIzMjRbJ29uZXJyb3InXT0oKT0+e3ZhciBfMHgyZGVhZDU9XzB4OTI4YWE3O3RoaXNbJ19hbGxvd2VkVG9TZW5kJ109ITB4MSx0aGlzW18weDJkZWFkNSgweDIyNCldKF8weGY1MjMyNCksdGhpc1snX2F0dGVtcHRUb1JlY29ubmVjdFNob3J0bHknXSgpLF8weDExOWQ1NChuZXcgRXJyb3IoXzB4MmRlYWQ1KDB4MWU2KSkpO30sXzB4ZjUyMzI0W18weDkyOGFhNygweDFkZCldPSgpPT57dmFyIF8weDVjN2ZhNT1fMHg5MjhhYTc7dGhpc1tfMHg1YzdmYTUoMHgyNjIpXXx8XzB4ZjUyMzI0W18weDVjN2ZhNSgweDI1NSldJiZfMHhmNTIzMjRbXzB4NWM3ZmE1KDB4MjU1KV1bXzB4NWM3ZmE1KDB4MjY2KV0mJl8weGY1MjMyNFtfMHg1YzdmYTUoMHgyNTUpXVtfMHg1YzdmYTUoMHgyNjYpXSgpLF8weDMyMjQ2YShfMHhmNTIzMjQpO30sXzB4ZjUyMzI0W18weDkyOGFhNygweDFkNildPSgpPT57dmFyIF8weDMxMWM2Zj1fMHg5MjhhYTc7dGhpc1tfMHgzMTFjNmYoMHgyMWMpXT0hMHgwLHRoaXNbXzB4MzExYzZmKDB4MjI0KV0oXzB4ZjUyMzI0KSx0aGlzW18weDMxMWM2ZigweDI0ZCldKCk7fSxfMHhmNTIzMjRbXzB4OTI4YWE3KDB4MWY5KV09XzB4MzEyNzc4PT57dmFyIF8weDJhZjdjZj1fMHg5MjhhYTc7dHJ5e18weDMxMjc3OCYmXzB4MzEyNzc4W18weDJhZjdjZigweDJhMSldJiZ0aGlzW18weDJhZjdjZigweDI2MildJiZKU09OWydwYXJzZSddKF8weDMxMjc3OFtfMHgyYWY3Y2YoMHgyYTEpXSlbJ21ldGhvZCddPT09XzB4MmFmN2NmKDB4MjAzKSYmdGhpc1tfMHgyYWY3Y2YoMHgyYjcpXVtfMHgyYWY3Y2YoMHgyMDkpXVtfMHgyYWY3Y2YoMHgyMDMpXSgpO31jYXRjaHt9fTt9KVtfMHgzMDYzMTkoMHgyNjkpXShfMHgzYjBjZjM9Pih0aGlzW18weDMwNjMxOSgweDFlMCldPSEweDAsdGhpc1tfMHgzMDYzMTkoMHgyNDIpXT0hMHgxLHRoaXNbXzB4MzA2MzE5KDB4MjFjKV09ITB4MSx0aGlzW18weDMwNjMxOSgweDI0MCldPSEweDAsdGhpc1snX2Nvbm5lY3RBdHRlbXB0Q291bnQnXT0weDAsXzB4M2IwY2YzKSlbXzB4MzA2MzE5KDB4MjE1KV0oXzB4MWViMzhmPT4odGhpc1snX2Nvbm5lY3RlZCddPSEweDEsdGhpc1snX2Nvbm5lY3RpbmcnXT0hMHgxLGNvbnNvbGVbJ3dhcm4nXShfMHgzMDYzMTkoMHgxZGEpK3RoaXNbXzB4MzA2MzE5KDB4MjYxKV0pLF8weDExOWQ1NChuZXcgRXJyb3IoJ2ZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3Q6XFxcXHgyMCcrKF8weDFlYjM4ZiYmXzB4MWViMzhmW18weDMwNjMxOSgweDI1NCldKSkpKSk7fSkpO31bXzB4MWNlOGZkKDB4MjI0KV0oXzB4NTcwNjRlKXt2YXIgXzB4Mzg1ZDBjPV8weDFjZThmZDt0aGlzWydfY29ubmVjdGVkJ109ITB4MSx0aGlzW18weDM4NWQwYygweDI0MildPSEweDE7dHJ5e18weDU3MDY0ZVsnb25jbG9zZSddPW51bGwsXzB4NTcwNjRlW18weDM4NWQwYygweDIzNildPW51bGwsXzB4NTcwNjRlW18weDM4NWQwYygweDFkZCldPW51bGw7fWNhdGNoe310cnl7XzB4NTcwNjRlWydyZWFkeVN0YXRlJ108MHgyJiZfMHg1NzA2NGVbXzB4Mzg1ZDBjKDB4MmIzKV0oKTt9Y2F0Y2h7fX1bXzB4MWNlOGZkKDB4MjRkKV0oKXt2YXIgXzB4MTk0ZjhhPV8weDFjZThmZDtjbGVhclRpbWVvdXQodGhpc1tfMHgxOTRmOGEoMHgyOGIpXSksISh0aGlzW18weDE5NGY4YSgweDJiYSldPj10aGlzW18weDE5NGY4YSgweDFkNSldKSYmKHRoaXNbXzB4MTk0ZjhhKDB4MjhiKV09c2V0VGltZW91dCgoKT0+e3ZhciBfMHg2MWNmNWU9XzB4MTk0ZjhhO3RoaXNbXzB4NjFjZjVlKDB4MWUwKV18fHRoaXNbJ19jb25uZWN0aW5nJ118fCh0aGlzW18weDYxY2Y1ZSgweDI2NSldKCksdGhpc1tfMHg2MWNmNWUoMHgyMTApXT8uW18weDYxY2Y1ZSgweDIxNSldKCgpPT50aGlzW18weDYxY2Y1ZSgweDI0ZCldKCkpKTt9LDB4MWY0KSx0aGlzW18weDE5NGY4YSgweDI4YildWyd1bnJlZiddJiZ0aGlzW18weDE5NGY4YSgweDI4YildWyd1bnJlZiddKCkpO31hc3luY1tfMHgxY2U4ZmQoMHgyN2IpXShfMHg0MzBiZjQpe3ZhciBfMHg0NTlhYmM9XzB4MWNlOGZkO3RyeXtpZighdGhpc1tfMHg0NTlhYmMoMHgyNDApXSlyZXR1cm47dGhpc1tfMHg0NTlhYmMoMHgyMWMpXSYmdGhpc1tfMHg0NTlhYmMoMHgyNjUpXSgpLChhd2FpdCB0aGlzW18weDQ1OWFiYygweDIxMCldKVtfMHg0NTlhYmMoMHgyN2IpXShKU09OW18weDQ1OWFiYygweDFkYyldKF8weDQzMGJmNCkpO31jYXRjaChfMHg4NzBkOTMpe2NvbnNvbGVbJ3dhcm4nXSh0aGlzWydfc2VuZEVycm9yTWVzc2FnZSddKyc6XFxcXHgyMCcrKF8weDg3MGQ5MyYmXzB4ODcwZDkzW18weDQ1OWFiYygweDI1NCldKSksdGhpc1tfMHg0NTlhYmMoMHgyNDApXT0hMHgxLHRoaXNbXzB4NDU5YWJjKDB4MjRkKV0oKTt9fX07ZnVuY3Rpb24gYihfMHg1NjgzZDcsXzB4MmUxMzQ1LF8weDUzY2VlOCxfMHg1NmYxMjQsXzB4NWUxNjAzLF8weDQzNjg3ZSl7dmFyIF8weDJhZjg2MT1fMHgxY2U4ZmQ7bGV0IF8weDE0ODBmZD1fMHg1M2NlZThbXzB4MmFmODYxKDB4MmJiKV0oJywnKVtfMHgyYWY4NjEoMHgxZmUpXShfMHg1MjE0NTc9Pnt2YXIgXzB4MmJiY2NmPV8weDJhZjg2MTt0cnl7XzB4NTY4M2Q3W18weDJiYmNjZigweDIzZCldfHwoKF8weDVlMTYwMz09PV8weDJiYmNjZigweDFkOCl8fF8weDVlMTYwMz09PSdyZW1peCd8fF8weDVlMTYwMz09PSdhc3Rybyd8fF8weDVlMTYwMz09PV8weDJiYmNjZigweDIxNykpJiYoXzB4NWUxNjAzKz0hXzB4NTY4M2Q3W18weDJiYmNjZigweDI4ZSldPy5bXzB4MmJiY2NmKDB4MjA0KV0/LltfMHgyYmJjY2YoMHgxZjUpXSYmXzB4NTY4M2Q3W18weDJiYmNjZigweDI4ZSldPy5bXzB4MmJiY2NmKDB4MWViKV0/LlsnTkVYVF9SVU5USU1FJ10hPT1fMHgyYmJjY2YoMHgyMzgpP18weDJiYmNjZigweDIwNyk6J1xcXFx4MjBzZXJ2ZXInKSxfMHg1NjgzZDdbJ19jb25zb2xlX25pbmphX3Nlc3Npb24nXT17J2lkJzorbmV3IERhdGUoKSwndG9vbCc6XzB4NWUxNjAzfSk7bGV0IF8weDJlYWNkND1uZXcgWChfMHg1NjgzZDcsXzB4MmUxMzQ1LF8weDUyMTQ1NyxfMHg1NmYxMjQsXzB4NDM2ODdlKTtyZXR1cm4gXzB4MmVhY2Q0W18weDJiYmNjZigweDI3YildW18weDJiYmNjZigweDIzYSldKF8weDJlYWNkNCk7fWNhdGNoKF8weDVhNzU3KXtyZXR1cm4gY29uc29sZVtfMHgyYmJjY2YoMHgyOWUpXSgnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QnLF8weDVhNzU3JiZfMHg1YTc1N1tfMHgyYmJjY2YoMHgyNTQpXSksKCk9Pnt9O319KTtyZXR1cm4gXzB4NjEwYmMxPT5fMHgxNDgwZmRbXzB4MmFmODYxKDB4MjVmKV0oXzB4M2U1YjVmPT5fMHgzZTViNWYoXzB4NjEwYmMxKSk7fWZ1bmN0aW9uIFcoXzB4MWVkZGNkKXt2YXIgXzB4MjVhYWM5PV8weDFjZThmZDtsZXQgXzB4MmViYjFhPWZ1bmN0aW9uKF8weDExYzU5ZCxfMHgzMmRjYzUpe3JldHVybiBfMHgzMmRjYzUtXzB4MTFjNTlkO30sXzB4YzQzNWNjO2lmKF8weDFlZGRjZFtfMHgyNWFhYzkoMHgxZTMpXSlfMHhjNDM1Y2M9ZnVuY3Rpb24oKXt2YXIgXzB4MzQwOGIyPV8weDI1YWFjOTtyZXR1cm4gXzB4MWVkZGNkW18weDM0MDhiMigweDFlMyldW18weDM0MDhiMigweDI4NSldKCk7fTtlbHNle2lmKF8weDFlZGRjZFtfMHgyNWFhYzkoMHgyOGUpXSYmXzB4MWVkZGNkW18weDI1YWFjOSgweDI4ZSldWydocnRpbWUnXSYmXzB4MWVkZGNkWydwcm9jZXNzJ10/LlsnZW52J10/LltfMHgyNWFhYzkoMHgyNmEpXSE9PV8weDI1YWFjOSgweDIzOCkpXzB4YzQzNWNjPWZ1bmN0aW9uKCl7dmFyIF8weDY5ZTgyYj1fMHgyNWFhYzk7cmV0dXJuIF8weDFlZGRjZFtfMHg2OWU4MmIoMHgyOGUpXVtfMHg2OWU4MmIoMHgyMDEpXSgpO30sXzB4MmViYjFhPWZ1bmN0aW9uKF8weDVhNDYzYSxfMHgzYzE5NTEpe3JldHVybiAweDNlOCooXzB4M2MxOTUxWzB4MF0tXzB4NWE0NjNhWzB4MF0pKyhfMHgzYzE5NTFbMHgxXS1fMHg1YTQ2M2FbMHgxXSkvMHhmNDI0MDt9O2Vsc2UgdHJ5e2xldCB7cGVyZm9ybWFuY2U6XzB4NWFhNzVkfT1yZXF1aXJlKF8weDI1YWFjOSgweDFmMikpO18weGM0MzVjYz1mdW5jdGlvbigpe3ZhciBfMHhkYTcxZDc9XzB4MjVhYWM5O3JldHVybiBfMHg1YWE3NWRbXzB4ZGE3MWQ3KDB4Mjg1KV0oKTt9O31jYXRjaHtfMHhjNDM1Y2M9ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGUoKTt9O319cmV0dXJueydlbGFwc2VkJzpfMHgyZWJiMWEsJ3RpbWVTdGFtcCc6XzB4YzQzNWNjLCdub3cnOigpPT5EYXRlW18weDI1YWFjOSgweDI4NSldKCl9O31mdW5jdGlvbiBKKF8weDQ2YjVlOCxfMHgyZmM2MjEsXzB4MWVhOGE4KXt2YXIgXzB4NTdkNzViPV8weDFjZThmZDtpZihfMHg0NmI1ZThbXzB4NTdkNzViKDB4MjhhKV0hPT12b2lkIDB4MClyZXR1cm4gXzB4NDZiNWU4W18weDU3ZDc1YigweDI4YSldO2xldCBfMHgyZTcyNDE9XzB4NDZiNWU4Wydwcm9jZXNzJ10/LltfMHg1N2Q3NWIoMHgyMDQpXT8uW18weDU3ZDc1YigweDFmNSldfHxfMHg0NmI1ZThbXzB4NTdkNzViKDB4MjhlKV0/LltfMHg1N2Q3NWIoMHgxZWIpXT8uW18weDU3ZDc1YigweDI2YSldPT09XzB4NTdkNzViKDB4MjM4KTtyZXR1cm4gXzB4MmU3MjQxJiZfMHgxZWE4YTg9PT1fMHg1N2Q3NWIoMHgxZjApP18weDQ2YjVlOFtfMHg1N2Q3NWIoMHgyOGEpXT0hMHgxOl8weDQ2YjVlOFtfMHg1N2Q3NWIoMHgyOGEpXT1fMHgyZTcyNDF8fCFfMHgyZmM2MjF8fF8weDQ2YjVlOFsnbG9jYXRpb24nXT8uW18weDU3ZDc1YigweDI4NyldJiZfMHgyZmM2MjFbJ2luY2x1ZGVzJ10oXzB4NDZiNWU4W18weDU3ZDc1YigweDIwOSldW18weDU3ZDc1YigweDI4NyldKSxfMHg0NmI1ZThbXzB4NTdkNzViKDB4MjhhKV07fWZ1bmN0aW9uIFkoXzB4NTI5NDNjLF8weDM5Njg2NSxfMHgzMjY3ZDIsXzB4M2VmOWQ4KXt2YXIgXzB4MWE2MzMyPV8weDFjZThmZDtfMHg1Mjk0M2M9XzB4NTI5NDNjLF8weDM5Njg2NT1fMHgzOTY4NjUsXzB4MzI2N2QyPV8weDMyNjdkMixfMHgzZWY5ZDg9XzB4M2VmOWQ4O2xldCBfMHgyNGJhZTk9VyhfMHg1Mjk0M2MpLF8weDRiMTA5Zj1fMHgyNGJhZTlbXzB4MWE2MzMyKDB4MjUwKV0sXzB4MmEzOTk4PV8weDI0YmFlOVtfMHgxYTYzMzIoMHgyNmMpXTtjbGFzcyBfMHgxMDg0YjV7Y29uc3RydWN0b3IoKXt2YXIgXzB4MWQwNDM1PV8weDFhNjMzMjt0aGlzW18weDFkMDQzNSgweDI3ZildPS9eKD8hKD86ZG98aWZ8aW58Zm9yfGxldHxuZXd8dHJ5fHZhcnxjYXNlfGVsc2V8ZW51bXxldmFsfGZhbHNlfG51bGx8dGhpc3x0cnVlfHZvaWR8d2l0aHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZXhwb3J0fGltcG9ydHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzd2l0Y2h8dHlwZW9mfGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnxhcmd1bWVudHN8aW50ZXJmYWNlfHByb3RlY3RlZHxpbXBsZW1lbnRzfGluc3RhbmNlb2YpJClbXyRhLXpBLVpcXFxceEEwLVxcXFx1RkZGRl1bXyRhLXpBLVowLTlcXFxceEEwLVxcXFx1RkZGRl0qJC8sdGhpc1tfMHgxZDA0MzUoMHgyYTQpXT0vXigwfFsxLTldWzAtOV0qKSQvLHRoaXNbXzB4MWQwNDM1KDB4MmE3KV09LycoW15cXFxcXFxcXCddfFxcXFxcXFxcJykqJy8sdGhpc1tfMHgxZDA0MzUoMHgxZTcpXT1fMHg1Mjk0M2NbXzB4MWQwNDM1KDB4MWQxKV0sdGhpc1tfMHgxZDA0MzUoMHgyNWMpXT1fMHg1Mjk0M2NbJ0hUTUxBbGxDb2xsZWN0aW9uJ10sdGhpc1snX2dldE93blByb3BlcnR5RGVzY3JpcHRvciddPU9iamVjdFtfMHgxZDA0MzUoMHgyN2QpXSx0aGlzW18weDFkMDQzNSgweDIwYildPU9iamVjdFtfMHgxZDA0MzUoMHgyMjkpXSx0aGlzW18weDFkMDQzNSgweDIyOCldPV8weDUyOTQzY1tfMHgxZDA0MzUoMHgyNDkpXSx0aGlzW18weDFkMDQzNSgweDI0NCldPVJlZ0V4cFtfMHgxZDA0MzUoMHgyODIpXVsndG9TdHJpbmcnXSx0aGlzW18weDFkMDQzNSgweDI3OSldPURhdGVbXzB4MWQwNDM1KDB4MjgyKV1bXzB4MWQwNDM1KDB4MjcwKV07fVtfMHgxYTYzMzIoMHgxZDMpXShfMHg0ZTE5MWUsXzB4ZjdiMTA1LF8weGUzZGQ4MSxfMHgxYjI5OTEpe3ZhciBfMHgxNzVjNTQ9XzB4MWE2MzMyLF8weDFjMDU2Nj10aGlzLF8weDMxOWMxOT1fMHhlM2RkODFbXzB4MTc1YzU0KDB4Mjc0KV07ZnVuY3Rpb24gXzB4MTczMTg1KF8weDRlNjc4ZixfMHgyZTJjZGYsXzB4MTlmYjJiKXt2YXIgXzB4N2ExMTdjPV8weDE3NWM1NDtfMHgyZTJjZGZbXzB4N2ExMTdjKDB4MjUxKV09XzB4N2ExMTdjKDB4MWYxKSxfMHgyZTJjZGZbXzB4N2ExMTdjKDB4MmFlKV09XzB4NGU2NzhmW18weDdhMTE3YygweDI1NCldLF8weDFkOTNjYT1fMHgxOWZiMmJbXzB4N2ExMTdjKDB4MWY1KV1bXzB4N2ExMTdjKDB4MWZmKV0sXzB4MTlmYjJiW18weDdhMTE3YygweDFmNSldW18weDdhMTE3YygweDFmZildPV8weDJlMmNkZixfMHgxYzA1NjZbXzB4N2ExMTdjKDB4Mjc4KV0oXzB4MmUyY2RmLF8weDE5ZmIyYik7fXRyeXtfMHhlM2RkODFbXzB4MTc1YzU0KDB4Mjk2KV0rKyxfMHhlM2RkODFbXzB4MTc1YzU0KDB4Mjc0KV0mJl8weGUzZGQ4MVtfMHgxNzVjNTQoMHgyODYpXVtfMHgxNzVjNTQoMHgyYjEpXShfMHhmN2IxMDUpO3ZhciBfMHgyZjQ4ZWMsXzB4NGY4MGZiLF8weDRmZjlhMCxfMHg0ODU5ZDIsXzB4MWQzMzEyPVtdLF8weDVkMjMxNj1bXSxfMHgxODVlNWIsXzB4NTM2MmJhPXRoaXNbXzB4MTc1YzU0KDB4MWZjKV0oXzB4ZjdiMTA1KSxfMHgzZjhjZjc9XzB4NTM2MmJhPT09XzB4MTc1YzU0KDB4MmJlKSxfMHgxZmNiZTE9ITB4MSxfMHgyNjkzY2M9XzB4NTM2MmJhPT09J2Z1bmN0aW9uJyxfMHgzMDk5Y2Y9dGhpc1tfMHgxNzVjNTQoMHgyMmYpXShfMHg1MzYyYmEpLF8weDM3OTQ0ZT10aGlzW18weDE3NWM1NCgweDFlMildKF8weDUzNjJiYSksXzB4M2NkYTBmPV8weDMwOTljZnx8XzB4Mzc5NDRlLF8weDUxNzAyYj17fSxfMHg1NzIzOTY9MHgwLF8weDQ2NzI1OT0hMHgxLF8weDFkOTNjYSxfMHhmZjEyNWY9L14oKFsxLTldezF9WzAtOV0qKXwwKSQvO2lmKF8weGUzZGQ4MVsnZGVwdGgnXSl7aWYoXzB4M2Y4Y2Y3KXtpZihfMHg0ZjgwZmI9XzB4ZjdiMTA1WydsZW5ndGgnXSxfMHg0ZjgwZmI+XzB4ZTNkZDgxW18weDE3NWM1NCgweDI1MildKXtmb3IoXzB4NGZmOWEwPTB4MCxfMHg0ODU5ZDI9XzB4ZTNkZDgxW18weDE3NWM1NCgweDI1MildLF8weDJmNDhlYz1fMHg0ZmY5YTA7XzB4MmY0OGVjPF8weDQ4NTlkMjtfMHgyZjQ4ZWMrKylfMHg1ZDIzMTZbXzB4MTc1YzU0KDB4MmIxKV0oXzB4MWMwNTY2W18weDE3NWM1NCgweDI0YildKF8weDFkMzMxMixfMHhmN2IxMDUsXzB4NTM2MmJhLF8weDJmNDhlYyxfMHhlM2RkODEpKTtfMHg0ZTE5MWVbXzB4MTc1YzU0KDB4MjdhKV09ITB4MDt9ZWxzZXtmb3IoXzB4NGZmOWEwPTB4MCxfMHg0ODU5ZDI9XzB4NGY4MGZiLF8weDJmNDhlYz1fMHg0ZmY5YTA7XzB4MmY0OGVjPF8weDQ4NTlkMjtfMHgyZjQ4ZWMrKylfMHg1ZDIzMTZbJ3B1c2gnXShfMHgxYzA1NjZbXzB4MTc1YzU0KDB4MjRiKV0oXzB4MWQzMzEyLF8weGY3YjEwNSxfMHg1MzYyYmEsXzB4MmY0OGVjLF8weGUzZGQ4MSkpO31fMHhlM2RkODFbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rPV8weDVkMjMxNltfMHgxNzVjNTQoMHgyM2IpXTt9aWYoIShfMHg1MzYyYmE9PT1fMHgxNzVjNTQoMHgyMjEpfHxfMHg1MzYyYmE9PT1fMHgxNzVjNTQoMHgxZDEpKSYmIV8weDMwOTljZiYmXzB4NTM2MmJhIT09XzB4MTc1YzU0KDB4Mjc3KSYmXzB4NTM2MmJhIT09XzB4MTc1YzU0KDB4MjYzKSYmXzB4NTM2MmJhIT09XzB4MTc1YzU0KDB4MmFjKSl7dmFyIF8weDY0YjhhNT1fMHgxYjI5OTFbXzB4MTc1YzU0KDB4MjljKV18fF8weGUzZGQ4MVsncHJvcHMnXTtpZih0aGlzW18weDE3NWM1NCgweDI4OSldKF8weGY3YjEwNSk/KF8weDJmNDhlYz0weDAsXzB4ZjdiMTA1W18weDE3NWM1NCgweDI1ZildKGZ1bmN0aW9uKF8weDRkNTY4MCl7dmFyIF8weDM5Y2FkMT1fMHgxNzVjNTQ7aWYoXzB4NTcyMzk2KyssXzB4ZTNkZDgxWydhdXRvRXhwYW5kUHJvcGVydHlDb3VudCddKyssXzB4NTcyMzk2Pl8weDY0YjhhNSl7XzB4NDY3MjU5PSEweDA7cmV0dXJuO31pZighXzB4ZTNkZDgxW18weDM5Y2FkMSgweDI1OCldJiZfMHhlM2RkODFbXzB4MzljYWQxKDB4Mjc0KV0mJl8weGUzZGQ4MVtfMHgzOWNhZDEoMHgyNmUpXT5fMHhlM2RkODFbXzB4MzljYWQxKDB4MWQ5KV0pe18weDQ2NzI1OT0hMHgwO3JldHVybjt9XzB4NWQyMzE2W18weDM5Y2FkMSgweDJiMSldKF8weDFjMDU2NltfMHgzOWNhZDEoMHgyNGIpXShfMHgxZDMzMTIsXzB4ZjdiMTA1LF8weDM5Y2FkMSgweDIwZSksXzB4MmY0OGVjKyssXzB4ZTNkZDgxLGZ1bmN0aW9uKF8weDQ5MWY1ZSl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDQ5MWY1ZTt9O30oXzB4NGQ1NjgwKSkpO30pKTp0aGlzW18weDE3NWM1NCgweDI1MyldKF8weGY3YjEwNSkmJl8weGY3YjEwNVsnZm9yRWFjaCddKGZ1bmN0aW9uKF8weDcyMGEyOCxfMHgxYmE2YTApe3ZhciBfMHgzNDdjODA9XzB4MTc1YzU0O2lmKF8weDU3MjM5NisrLF8weGUzZGQ4MVtfMHgzNDdjODAoMHgyNmUpXSsrLF8weDU3MjM5Nj5fMHg2NGI4YTUpe18weDQ2NzI1OT0hMHgwO3JldHVybjt9aWYoIV8weGUzZGQ4MVtfMHgzNDdjODAoMHgyNTgpXSYmXzB4ZTNkZDgxW18weDM0N2M4MCgweDI3NCldJiZfMHhlM2RkODFbXzB4MzQ3YzgwKDB4MjZlKV0+XzB4ZTNkZDgxWydhdXRvRXhwYW5kTGltaXQnXSl7XzB4NDY3MjU5PSEweDA7cmV0dXJuO312YXIgXzB4MjQzY2ViPV8weDFiYTZhMFtfMHgzNDdjODAoMHgyNzApXSgpO18weDI0M2NlYltfMHgzNDdjODAoMHgyM2IpXT4weDY0JiYoXzB4MjQzY2ViPV8weDI0M2NlYltfMHgzNDdjODAoMHgyMmMpXSgweDAsMHg2NCkrXzB4MzQ3YzgwKDB4MjQ2KSksXzB4NWQyMzE2W18weDM0N2M4MCgweDJiMSldKF8weDFjMDU2NltfMHgzNDdjODAoMHgyNGIpXShfMHgxZDMzMTIsXzB4ZjdiMTA1LF8weDM0N2M4MCgweDJiZCksXzB4MjQzY2ViLF8weGUzZGQ4MSxmdW5jdGlvbihfMHg1ZjQ0Y2Mpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBfMHg1ZjQ0Y2M7fTt9KF8weDcyMGEyOCkpKTt9KSwhXzB4MWZjYmUxKXt0cnl7Zm9yKF8weDE4NWU1YiBpbiBfMHhmN2IxMDUpaWYoIShfMHgzZjhjZjcmJl8weGZmMTI1ZltfMHgxNzVjNTQoMHgyNjQpXShfMHgxODVlNWIpKSYmIXRoaXNbXzB4MTc1YzU0KDB4MjNmKV0oXzB4ZjdiMTA1LF8weDE4NWU1YixfMHhlM2RkODEpKXtpZihfMHg1NzIzOTYrKyxfMHhlM2RkODFbXzB4MTc1YzU0KDB4MjZlKV0rKyxfMHg1NzIzOTY+XzB4NjRiOGE1KXtfMHg0NjcyNTk9ITB4MDticmVhazt9aWYoIV8weGUzZGQ4MVsnaXNFeHByZXNzaW9uVG9FdmFsdWF0ZSddJiZfMHhlM2RkODFbXzB4MTc1YzU0KDB4Mjc0KV0mJl8weGUzZGQ4MVtfMHgxNzVjNTQoMHgyNmUpXT5fMHhlM2RkODFbXzB4MTc1YzU0KDB4MWQ5KV0pe18weDQ2NzI1OT0hMHgwO2JyZWFrO31fMHg1ZDIzMTZbXzB4MTc1YzU0KDB4MmIxKV0oXzB4MWMwNTY2W18weDE3NWM1NCgweDFmNCldKF8weDFkMzMxMixfMHg1MTcwMmIsXzB4ZjdiMTA1LF8weDUzNjJiYSxfMHgxODVlNWIsXzB4ZTNkZDgxKSk7fX1jYXRjaHt9aWYoXzB4NTE3MDJiW18weDE3NWM1NCgweDI5OCldPSEweDAsXzB4MjY5M2NjJiYoXzB4NTE3MDJiW18weDE3NWM1NCgweDFkZildPSEweDApLCFfMHg0NjcyNTkpe3ZhciBfMHg1MWU1MjU9W11bXzB4MTc1YzU0KDB4Mjk5KV0odGhpc1snX2dldE93blByb3BlcnR5TmFtZXMnXShfMHhmN2IxMDUpKVtfMHgxNzVjNTQoMHgyOTkpXSh0aGlzW18weDE3NWM1NCgweDI2NyldKF8weGY3YjEwNSkpO2ZvcihfMHgyZjQ4ZWM9MHgwLF8weDRmODBmYj1fMHg1MWU1MjVbJ2xlbmd0aCddO18weDJmNDhlYzxfMHg0ZjgwZmI7XzB4MmY0OGVjKyspaWYoXzB4MTg1ZTViPV8weDUxZTUyNVtfMHgyZjQ4ZWNdLCEoXzB4M2Y4Y2Y3JiZfMHhmZjEyNWZbJ3Rlc3QnXShfMHgxODVlNWJbXzB4MTc1YzU0KDB4MjcwKV0oKSkpJiYhdGhpc1tfMHgxNzVjNTQoMHgyM2YpXShfMHhmN2IxMDUsXzB4MTg1ZTViLF8weGUzZGQ4MSkmJiFfMHg1MTcwMmJbXzB4MTc1YzU0KDB4MWZhKStfMHgxODVlNWJbXzB4MTc1YzU0KDB4MjcwKV0oKV0pe2lmKF8weDU3MjM5NisrLF8weGUzZGQ4MVtfMHgxNzVjNTQoMHgyNmUpXSsrLF8weDU3MjM5Nj5fMHg2NGI4YTUpe18weDQ2NzI1OT0hMHgwO2JyZWFrO31pZighXzB4ZTNkZDgxWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weGUzZGQ4MVsnYXV0b0V4cGFuZCddJiZfMHhlM2RkODFbXzB4MTc1YzU0KDB4MjZlKV0+XzB4ZTNkZDgxW18weDE3NWM1NCgweDFkOSldKXtfMHg0NjcyNTk9ITB4MDticmVhazt9XzB4NWQyMzE2W18weDE3NWM1NCgweDJiMSldKF8weDFjMDU2NltfMHgxNzVjNTQoMHgxZjQpXShfMHgxZDMzMTIsXzB4NTE3MDJiLF8weGY3YjEwNSxfMHg1MzYyYmEsXzB4MTg1ZTViLF8weGUzZGQ4MSkpO319fX19aWYoXzB4NGUxOTFlW18weDE3NWM1NCgweDI1MSldPV8weDUzNjJiYSxfMHgzY2RhMGY/KF8weDRlMTkxZVtfMHgxNzVjNTQoMHgyNzEpXT1fMHhmN2IxMDVbJ3ZhbHVlT2YnXSgpLHRoaXNbXzB4MTc1YzU0KDB4MjFkKV0oXzB4NTM2MmJhLF8weDRlMTkxZSxfMHhlM2RkODEsXzB4MWIyOTkxKSk6XzB4NTM2MmJhPT09XzB4MTc1YzU0KDB4MjFiKT9fMHg0ZTE5MWVbXzB4MTc1YzU0KDB4MjcxKV09dGhpc1tfMHgxNzVjNTQoMHgyNzkpXVtfMHgxNzVjNTQoMHgyNWIpXShfMHhmN2IxMDUpOl8weDUzNjJiYT09PSdiaWdpbnQnP18weDRlMTkxZVtfMHgxNzVjNTQoMHgyNzEpXT1fMHhmN2IxMDVbXzB4MTc1YzU0KDB4MjcwKV0oKTpfMHg1MzYyYmE9PT1fMHgxNzVjNTQoMHgyN2UpP18weDRlMTkxZVtfMHgxNzVjNTQoMHgyNzEpXT10aGlzW18weDE3NWM1NCgweDI0NCldW18weDE3NWM1NCgweDI1YildKF8weGY3YjEwNSk6XzB4NTM2MmJhPT09J3N5bWJvbCcmJnRoaXNbXzB4MTc1YzU0KDB4MjI4KV0/XzB4NGUxOTFlW18weDE3NWM1NCgweDI3MSldPXRoaXNbXzB4MTc1YzU0KDB4MjI4KV1bJ3Byb3RvdHlwZSddW18weDE3NWM1NCgweDI3MCldW18weDE3NWM1NCgweDI1YildKF8weGY3YjEwNSk6IV8weGUzZGQ4MVtfMHgxNzVjNTQoMHgyMWEpXSYmIShfMHg1MzYyYmE9PT1fMHgxNzVjNTQoMHgyMjEpfHxfMHg1MzYyYmE9PT1fMHgxNzVjNTQoMHgxZDEpKSYmKGRlbGV0ZSBfMHg0ZTE5MWVbXzB4MTc1YzU0KDB4MjcxKV0sXzB4NGUxOTFlW18weDE3NWM1NCgweDIyZCldPSEweDApLF8weDQ2NzI1OSYmKF8weDRlMTkxZVtfMHgxNzVjNTQoMHgxZWEpXT0hMHgwKSxfMHgxZDkzY2E9XzB4ZTNkZDgxW18weDE3NWM1NCgweDFmNSldW18weDE3NWM1NCgweDFmZildLF8weGUzZGQ4MVsnbm9kZSddWydjdXJyZW50J109XzB4NGUxOTFlLHRoaXNbXzB4MTc1YzU0KDB4Mjc4KV0oXzB4NGUxOTFlLF8weGUzZGQ4MSksXzB4NWQyMzE2W18weDE3NWM1NCgweDIzYildKXtmb3IoXzB4MmY0OGVjPTB4MCxfMHg0ZjgwZmI9XzB4NWQyMzE2WydsZW5ndGgnXTtfMHgyZjQ4ZWM8XzB4NGY4MGZiO18weDJmNDhlYysrKV8weDVkMjMxNltfMHgyZjQ4ZWNdKF8weDJmNDhlYyk7fV8weDFkMzMxMltfMHgxNzVjNTQoMHgyM2IpXSYmKF8weDRlMTkxZVtfMHgxNzVjNTQoMHgyOWMpXT1fMHgxZDMzMTIpO31jYXRjaChfMHgxYThjMjUpe18weDE3MzE4NShfMHgxYThjMjUsXzB4NGUxOTFlLF8weGUzZGQ4MSk7fXJldHVybiB0aGlzW18weDE3NWM1NCgweDIzNyldKF8weGY3YjEwNSxfMHg0ZTE5MWUpLHRoaXNbXzB4MTc1YzU0KDB4MjhmKV0oXzB4NGUxOTFlLF8weGUzZGQ4MSksXzB4ZTNkZDgxW18weDE3NWM1NCgweDFmNSldW18weDE3NWM1NCgweDFmZildPV8weDFkOTNjYSxfMHhlM2RkODFbXzB4MTc1YzU0KDB4Mjk2KV0tLSxfMHhlM2RkODFbXzB4MTc1YzU0KDB4Mjc0KV09XzB4MzE5YzE5LF8weGUzZGQ4MVtfMHgxNzVjNTQoMHgyNzQpXSYmXzB4ZTNkZDgxW18weDE3NWM1NCgweDI4NildW18weDE3NWM1NCgweDI2ZildKCksXzB4NGUxOTFlO31bXzB4MWE2MzMyKDB4MjY3KV0oXzB4MWJmMGM0KXt2YXIgXzB4MmY0NmNhPV8weDFhNjMzMjtyZXR1cm4gT2JqZWN0W18weDJmNDZjYSgweDJhZCldP09iamVjdFtfMHgyZjQ2Y2EoMHgyYWQpXShfMHgxYmYwYzQpOltdO31bXzB4MWE2MzMyKDB4Mjg5KV0oXzB4MjBkNTcwKXt2YXIgXzB4MTk2OWJkPV8weDFhNjMzMjtyZXR1cm4hIShfMHgyMGQ1NzAmJl8weDUyOTQzY1snU2V0J10mJnRoaXNbXzB4MTk2OWJkKDB4MmE4KV0oXzB4MjBkNTcwKT09PSdbb2JqZWN0XFxcXHgyMFNldF0nJiZfMHgyMGQ1NzBbXzB4MTk2OWJkKDB4MjVmKV0pO31bXzB4MWE2MzMyKDB4MjNmKV0oXzB4M2YxYzM3LF8weDI4NDcyNCxfMHg2NzUwZjEpe3ZhciBfMHgyNmQ4Yzk9XzB4MWE2MzMyO3JldHVybiBfMHg2NzUwZjFbXzB4MjZkOGM5KDB4MWZkKV0/dHlwZW9mIF8weDNmMWMzN1tfMHgyODQ3MjRdPT1fMHgyNmQ4YzkoMHgyNGUpOiEweDE7fVsnX3R5cGUnXShfMHg0OGRlZGUpe3ZhciBfMHgyNjQwZmM9XzB4MWE2MzMyLF8weDQ0MjI4MD0nJztyZXR1cm4gXzB4NDQyMjgwPXR5cGVvZiBfMHg0OGRlZGUsXzB4NDQyMjgwPT09XzB4MjY0MGZjKDB4MmE1KT90aGlzW18weDI2NDBmYygweDJhOCldKF8weDQ4ZGVkZSk9PT1fMHgyNjQwZmMoMHgyMjIpP18weDQ0MjI4MD1fMHgyNjQwZmMoMHgyYmUpOnRoaXNbXzB4MjY0MGZjKDB4MmE4KV0oXzB4NDhkZWRlKT09PV8weDI2NDBmYygweDIwNik/XzB4NDQyMjgwPV8weDI2NDBmYygweDIxYik6dGhpc1snX29iamVjdFRvU3RyaW5nJ10oXzB4NDhkZWRlKT09PSdbb2JqZWN0XFxcXHgyMEJpZ0ludF0nP18weDQ0MjI4MD1fMHgyNjQwZmMoMHgyYWMpOl8weDQ4ZGVkZT09PW51bGw/XzB4NDQyMjgwPV8weDI2NDBmYygweDIyMSk6XzB4NDhkZWRlW18weDI2NDBmYygweDIwYSldJiYoXzB4NDQyMjgwPV8weDQ4ZGVkZVtfMHgyNjQwZmMoMHgyMGEpXVtfMHgyNjQwZmMoMHgyODEpXXx8XzB4NDQyMjgwKTpfMHg0NDIyODA9PT0ndW5kZWZpbmVkJyYmdGhpc1tfMHgyNjQwZmMoMHgyNWMpXSYmXzB4NDhkZWRlIGluc3RhbmNlb2YgdGhpc1tfMHgyNjQwZmMoMHgyNWMpXSYmKF8weDQ0MjI4MD1fMHgyNjQwZmMoMHgyODMpKSxfMHg0NDIyODA7fVsnX29iamVjdFRvU3RyaW5nJ10oXzB4NDQ1ZWNjKXt2YXIgXzB4MTcwNDQzPV8weDFhNjMzMjtyZXR1cm4gT2JqZWN0W18weDE3MDQ0MygweDI4MildW18weDE3MDQ0MygweDI3MCldW18weDE3MDQ0MygweDI1YildKF8weDQ0NWVjYyk7fVtfMHgxYTYzMzIoMHgyMmYpXShfMHg0YWY0YTApe3ZhciBfMHgzNDc2OTE9XzB4MWE2MzMyO3JldHVybiBfMHg0YWY0YTA9PT0nYm9vbGVhbid8fF8weDRhZjRhMD09PSdzdHJpbmcnfHxfMHg0YWY0YTA9PT1fMHgzNDc2OTEoMHgxZDcpO31bXzB4MWE2MzMyKDB4MWUyKV0oXzB4Yjk5YTI4KXt2YXIgXzB4MWNkOWI0PV8weDFhNjMzMjtyZXR1cm4gXzB4Yjk5YTI4PT09XzB4MWNkOWI0KDB4MWY4KXx8XzB4Yjk5YTI4PT09XzB4MWNkOWI0KDB4Mjc3KXx8XzB4Yjk5YTI4PT09XzB4MWNkOWI0KDB4MjVhKTt9W18weDFhNjMzMigweDI0YildKF8weDNiNWZmOCxfMHgxMDBjNDQsXzB4NWNjOTNkLF8weDE4NjJjMixfMHg1ZTY2NDIsXzB4ZTI5YzA0KXt2YXIgXzB4ZGZjNDMxPXRoaXM7cmV0dXJuIGZ1bmN0aW9uKF8weDJiMGI3Yyl7dmFyIF8weGRmNWYwMD1fMHg1Y2FlLF8weDUyNzQ2Mz1fMHg1ZTY2NDJbXzB4ZGY1ZjAwKDB4MWY1KV1bXzB4ZGY1ZjAwKDB4MWZmKV0sXzB4MmUxYmE5PV8weDVlNjY0Mlsnbm9kZSddW18weGRmNWYwMCgweDIyMCldLF8weDM0ZWY3ND1fMHg1ZTY2NDJbXzB4ZGY1ZjAwKDB4MWY1KV1bXzB4ZGY1ZjAwKDB4MjMyKV07XzB4NWU2NjQyW18weGRmNWYwMCgweDFmNSldW18weGRmNWYwMCgweDIzMildPV8weDUyNzQ2MyxfMHg1ZTY2NDJbJ25vZGUnXVtfMHhkZjVmMDAoMHgyMjApXT10eXBlb2YgXzB4MTg2MmMyPT1fMHhkZjVmMDAoMHgxZDcpP18weDE4NjJjMjpfMHgyYjBiN2MsXzB4M2I1ZmY4W18weGRmNWYwMCgweDJiMSldKF8weGRmYzQzMVtfMHhkZjVmMDAoMHgxZTkpXShfMHgxMDBjNDQsXzB4NWNjOTNkLF8weDE4NjJjMixfMHg1ZTY2NDIsXzB4ZTI5YzA0KSksXzB4NWU2NjQyW18weGRmNWYwMCgweDFmNSldW18weGRmNWYwMCgweDIzMildPV8weDM0ZWY3NCxfMHg1ZTY2NDJbXzB4ZGY1ZjAwKDB4MWY1KV1bXzB4ZGY1ZjAwKDB4MjIwKV09XzB4MmUxYmE5O307fVtfMHgxYTYzMzIoMHgxZjQpXShfMHgyZGJmMGEsXzB4MmMzNGM0LF8weDVlNzllMSxfMHg4NGZiMDUsXzB4MmZjYjM4LF8weDExOTA4NyxfMHgyZDQ2ZDIpe3ZhciBfMHg1YjI4YmY9XzB4MWE2MzMyLF8weDMwNjI0MD10aGlzO3JldHVybiBfMHgyYzM0YzRbXzB4NWIyOGJmKDB4MWZhKStfMHgyZmNiMzhbXzB4NWIyOGJmKDB4MjcwKV0oKV09ITB4MCxmdW5jdGlvbihfMHgxOTY1ZjUpe3ZhciBfMHgzMDYyMGI9XzB4NWIyOGJmLF8weDE0M2VkMD1fMHgxMTkwODdbXzB4MzA2MjBiKDB4MWY1KV1bXzB4MzA2MjBiKDB4MWZmKV0sXzB4MjY4ODE1PV8weDExOTA4N1tfMHgzMDYyMGIoMHgxZjUpXVtfMHgzMDYyMGIoMHgyMjApXSxfMHgyNDVlNzI9XzB4MTE5MDg3W18weDMwNjIwYigweDFmNSldW18weDMwNjIwYigweDIzMildO18weDExOTA4N1tfMHgzMDYyMGIoMHgxZjUpXVtfMHgzMDYyMGIoMHgyMzIpXT1fMHgxNDNlZDAsXzB4MTE5MDg3Wydub2RlJ11bXzB4MzA2MjBiKDB4MjIwKV09XzB4MTk2NWY1LF8weDJkYmYwYVtfMHgzMDYyMGIoMHgyYjEpXShfMHgzMDYyNDBbXzB4MzA2MjBiKDB4MWU5KV0oXzB4NWU3OWUxLF8weDg0ZmIwNSxfMHgyZmNiMzgsXzB4MTE5MDg3LF8weDJkNDZkMikpLF8weDExOTA4N1tfMHgzMDYyMGIoMHgxZjUpXVsncGFyZW50J109XzB4MjQ1ZTcyLF8weDExOTA4N1tfMHgzMDYyMGIoMHgxZjUpXVtfMHgzMDYyMGIoMHgyMjApXT1fMHgyNjg4MTU7fTt9W18weDFhNjMzMigweDFlOSldKF8weDRjM2E5LF8weDU0NjcwZSxfMHhhODNhNWQsXzB4MjMzOTA3LF8weDIwNGM1Myl7dmFyIF8weDUyMDBiNz1fMHgxYTYzMzIsXzB4MWRmNGVjPXRoaXM7XzB4MjA0YzUzfHwoXzB4MjA0YzUzPWZ1bmN0aW9uKF8weDE3NmE4NixfMHgzMDM1MTEpe3JldHVybiBfMHgxNzZhODZbXzB4MzAzNTExXTt9KTt2YXIgXzB4NmQwNmU5PV8weGE4M2E1ZFtfMHg1MjAwYjcoMHgyNzApXSgpLF8weDNmNzE0ZD1fMHgyMzM5MDdbJ2V4cHJlc3Npb25zVG9FdmFsdWF0ZSddfHx7fSxfMHgxODgzMWY9XzB4MjMzOTA3WydkZXB0aCddLF8weDQ5YmY0Nj1fMHgyMzM5MDdbXzB4NTIwMGI3KDB4MjU4KV07dHJ5e3ZhciBfMHgyYjU0MmQ9dGhpc1tfMHg1MjAwYjcoMHgyNTMpXShfMHg0YzNhOSksXzB4MzkyNGNmPV8weDZkMDZlOTtfMHgyYjU0MmQmJl8weDM5MjRjZlsweDBdPT09J1xcXFx4MjcnJiYoXzB4MzkyNGNmPV8weDM5MjRjZlsnc3Vic3RyJ10oMHgxLF8weDM5MjRjZltfMHg1MjAwYjcoMHgyM2IpXS0weDIpKTt2YXIgXzB4NDVkZTA3PV8weDIzMzkwN1tfMHg1MjAwYjcoMHgyMjcpXT1fMHgzZjcxNGRbXzB4NTIwMGI3KDB4MWZhKStfMHgzOTI0Y2ZdO18weDQ1ZGUwNyYmKF8weDIzMzkwN1tfMHg1MjAwYjcoMHgyMWEpXT1fMHgyMzM5MDdbJ2RlcHRoJ10rMHgxKSxfMHgyMzM5MDdbXzB4NTIwMGI3KDB4MjU4KV09ISFfMHg0NWRlMDc7dmFyIF8weDM0ODc2MT10eXBlb2YgXzB4YTgzYTVkPT1fMHg1MjAwYjcoMHgyYjQpLF8weGE1NWYyMD17J25hbWUnOl8weDM0ODc2MXx8XzB4MmI1NDJkP18weDZkMDZlOTp0aGlzWydfcHJvcGVydHlOYW1lJ10oXzB4NmQwNmU5KX07aWYoXzB4MzQ4NzYxJiYoXzB4YTU1ZjIwW18weDUyMDBiNygweDJiNCldPSEweDApLCEoXzB4NTQ2NzBlPT09XzB4NTIwMGI3KDB4MmJlKXx8XzB4NTQ2NzBlPT09J0Vycm9yJykpe3ZhciBfMHgxODhjZWI9dGhpc1tfMHg1MjAwYjcoMHgyMzUpXShfMHg0YzNhOSxfMHhhODNhNWQpO2lmKF8weDE4OGNlYiYmKF8weDE4OGNlYltfMHg1MjAwYjcoMHgyMTkpXSYmKF8weGE1NWYyMFtfMHg1MjAwYjcoMHgxZTgpXT0hMHgwKSxfMHgxODhjZWJbXzB4NTIwMGI3KDB4MjhjKV0mJiFfMHg0NWRlMDcmJiFfMHgyMzM5MDdbXzB4NTIwMGI3KDB4Mjk1KV0pKXJldHVybiBfMHhhNTVmMjBbXzB4NTIwMGI3KDB4MjA1KV09ITB4MCx0aGlzW18weDUyMDBiNygweDFkZSldKF8weGE1NWYyMCxfMHgyMzM5MDcpLF8weGE1NWYyMDt9dmFyIF8weDM2MzI0ZDt0cnl7XzB4MzYzMjRkPV8weDIwNGM1MyhfMHg0YzNhOSxfMHhhODNhNWQpO31jYXRjaChfMHgyMjY3ZTkpe3JldHVybiBfMHhhNTVmMjA9eyduYW1lJzpfMHg2ZDA2ZTksJ3R5cGUnOl8weDUyMDBiNygweDFmMSksJ2Vycm9yJzpfMHgyMjY3ZTlbXzB4NTIwMGI3KDB4MjU0KV19LHRoaXNbXzB4NTIwMGI3KDB4MWRlKV0oXzB4YTU1ZjIwLF8weDIzMzkwNyksXzB4YTU1ZjIwO312YXIgXzB4NGZkOWEzPXRoaXNbXzB4NTIwMGI3KDB4MWZjKV0oXzB4MzYzMjRkKSxfMHg0YmI5N2I9dGhpc1snX2lzUHJpbWl0aXZlVHlwZSddKF8weDRmZDlhMyk7aWYoXzB4YTU1ZjIwW18weDUyMDBiNygweDI1MSldPV8weDRmZDlhMyxfMHg0YmI5N2IpdGhpc1tfMHg1MjAwYjcoMHgxZGUpXShfMHhhNTVmMjAsXzB4MjMzOTA3LF8weDM2MzI0ZCxmdW5jdGlvbigpe3ZhciBfMHgxMTdjNWQ9XzB4NTIwMGI3O18weGE1NWYyMFtfMHgxMTdjNWQoMHgyNzEpXT1fMHgzNjMyNGRbXzB4MTE3YzVkKDB4MmJmKV0oKSwhXzB4NDVkZTA3JiZfMHgxZGY0ZWNbXzB4MTE3YzVkKDB4MjFkKV0oXzB4NGZkOWEzLF8weGE1NWYyMCxfMHgyMzM5MDcse30pO30pO2Vsc2V7dmFyIF8weDJiNmRmNj1fMHgyMzM5MDdbXzB4NTIwMGI3KDB4Mjc0KV0mJl8weDIzMzkwN1tfMHg1MjAwYjcoMHgyOTYpXTxfMHgyMzM5MDdbJ2F1dG9FeHBhbmRNYXhEZXB0aCddJiZfMHgyMzM5MDdbXzB4NTIwMGI3KDB4Mjg2KV1bJ2luZGV4T2YnXShfMHgzNjMyNGQpPDB4MCYmXzB4NGZkOWEzIT09XzB4NTIwMGI3KDB4MjRlKSYmXzB4MjMzOTA3W18weDUyMDBiNygweDI2ZSldPF8weDIzMzkwN1tfMHg1MjAwYjcoMHgxZDkpXTtfMHgyYjZkZjZ8fF8weDIzMzkwN1tfMHg1MjAwYjcoMHgyOTYpXTxfMHgxODgzMWZ8fF8weDQ1ZGUwNz8odGhpc1tfMHg1MjAwYjcoMHgxZDMpXShfMHhhNTVmMjAsXzB4MzYzMjRkLF8weDIzMzkwNyxfMHg0NWRlMDd8fHt9KSx0aGlzW18weDUyMDBiNygweDIzNyldKF8weDM2MzI0ZCxfMHhhNTVmMjApKTp0aGlzW18weDUyMDBiNygweDFkZSldKF8weGE1NWYyMCxfMHgyMzM5MDcsXzB4MzYzMjRkLGZ1bmN0aW9uKCl7dmFyIF8weDVkYWEzND1fMHg1MjAwYjc7XzB4NGZkOWEzPT09XzB4NWRhYTM0KDB4MjIxKXx8XzB4NGZkOWEzPT09J3VuZGVmaW5lZCd8fChkZWxldGUgXzB4YTU1ZjIwWyd2YWx1ZSddLF8weGE1NWYyMFtfMHg1ZGFhMzQoMHgyMmQpXT0hMHgwKTt9KTt9cmV0dXJuIF8weGE1NWYyMDt9ZmluYWxseXtfMHgyMzM5MDdbXzB4NTIwMGI3KDB4MjI3KV09XzB4M2Y3MTRkLF8weDIzMzkwN1tfMHg1MjAwYjcoMHgyMWEpXT1fMHgxODgzMWYsXzB4MjMzOTA3Wydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ109XzB4NDliZjQ2O319W18weDFhNjMzMigweDIxZCldKF8weDUxYjY0NCxfMHgyYTRjNjcsXzB4M2Q0ZWU2LF8weDE1NzJlZCl7dmFyIF8weDIyMzA4Yj1fMHgxYTYzMzIsXzB4MmVjMTQ3PV8weDE1NzJlZFtfMHgyMjMwOGIoMHgyYmMpXXx8XzB4M2Q0ZWU2W18weDIyMzA4YigweDJiYyldO2lmKChfMHg1MWI2NDQ9PT0nc3RyaW5nJ3x8XzB4NTFiNjQ0PT09XzB4MjIzMDhiKDB4Mjc3KSkmJl8weDJhNGM2N1sndmFsdWUnXSl7bGV0IF8weDRhODQzYz1fMHgyYTRjNjdbXzB4MjIzMDhiKDB4MjcxKV1bXzB4MjIzMDhiKDB4MjNiKV07XzB4M2Q0ZWU2W18weDIyMzA4YigweDI5MyldKz1fMHg0YTg0M2MsXzB4M2Q0ZWU2W18weDIyMzA4YigweDI5MyldPl8weDNkNGVlNltfMHgyMjMwOGIoMHgyNjgpXT8oXzB4MmE0YzY3W18weDIyMzA4YigweDIyZCldPScnLGRlbGV0ZSBfMHgyYTRjNjdbXzB4MjIzMDhiKDB4MjcxKV0pOl8weDRhODQzYz5fMHgyZWMxNDcmJihfMHgyYTRjNjdbJ2NhcHBlZCddPV8weDJhNGM2N1tfMHgyMjMwOGIoMHgyNzEpXVtfMHgyMjMwOGIoMHgxZjMpXSgweDAsXzB4MmVjMTQ3KSxkZWxldGUgXzB4MmE0YzY3W18weDIyMzA4YigweDI3MSldKTt9fVtfMHgxYTYzMzIoMHgyNTMpXShfMHg1NDA0YTYpe3ZhciBfMHg0YjRhMjk9XzB4MWE2MzMyO3JldHVybiEhKF8weDU0MDRhNiYmXzB4NTI5NDNjWydNYXAnXSYmdGhpc1tfMHg0YjRhMjkoMHgyYTgpXShfMHg1NDA0YTYpPT09XzB4NGI0YTI5KDB4MWVkKSYmXzB4NTQwNGE2W18weDRiNGEyOSgweDI1ZildKTt9W18weDFhNjMzMigweDI5NyldKF8weDU0YTIwMSl7dmFyIF8weDJkZjc3Zj1fMHgxYTYzMzI7aWYoXzB4NTRhMjAxW18weDJkZjc3ZigweDFmNyldKC9eXFxcXGQrJC8pKXJldHVybiBfMHg1NGEyMDE7dmFyIF8weDE5MGM3YTt0cnl7XzB4MTkwYzdhPUpTT05bXzB4MmRmNzdmKDB4MWRjKV0oJycrXzB4NTRhMjAxKTt9Y2F0Y2h7XzB4MTkwYzdhPSdcXFxceDIyJyt0aGlzW18weDJkZjc3ZigweDJhOCldKF8weDU0YTIwMSkrJ1xcXFx4MjInO31yZXR1cm4gXzB4MTkwYzdhW18weDJkZjc3ZigweDFmNyldKC9eXFxcIihbYS16QS1aX11bYS16QS1aXzAtOV0qKVxcXCIkLyk/XzB4MTkwYzdhPV8weDE5MGM3YVsnc3Vic3RyJ10oMHgxLF8weDE5MGM3YVtfMHgyZGY3N2YoMHgyM2IpXS0weDIpOl8weDE5MGM3YT1fMHgxOTBjN2FbXzB4MmRmNzdmKDB4MjI2KV0oLycvZywnXFxcXHg1Y1xcXFx4MjcnKVtfMHgyZGY3N2YoMHgyMjYpXSgvXFxcXFxcXFxcXFwiL2csJ1xcXFx4MjInKVtfMHgyZGY3N2YoMHgyMjYpXSgvKF5cXFwifFxcXCIkKS9nLCdcXFxceDI3JyksXzB4MTkwYzdhO31bXzB4MWE2MzMyKDB4MWRlKV0oXzB4MzUxNjg2LF8weDNiNzZhNyxfMHgzZTFhMWQsXzB4Mzk5NzkzKXt2YXIgXzB4NTYzYzczPV8weDFhNjMzMjt0aGlzW18weDU2M2M3MygweDI3OCldKF8weDM1MTY4NixfMHgzYjc2YTcpLF8weDM5OTc5MyYmXzB4Mzk5NzkzKCksdGhpc1tfMHg1NjNjNzMoMHgyMzcpXShfMHgzZTFhMWQsXzB4MzUxNjg2KSx0aGlzWydfdHJlZU5vZGVQcm9wZXJ0aWVzQWZ0ZXJGdWxsVmFsdWUnXShfMHgzNTE2ODYsXzB4M2I3NmE3KTt9W18weDFhNjMzMigweDI3OCldKF8weDFjYjQzZixfMHhiZTllNzUpe3ZhciBfMHgyOWIzNmI9XzB4MWE2MzMyO3RoaXNbJ19zZXROb2RlSWQnXShfMHgxY2I0M2YsXzB4YmU5ZTc1KSx0aGlzW18weDI5YjM2YigweDJhMyldKF8weDFjYjQzZixfMHhiZTllNzUpLHRoaXNbJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnXShfMHgxY2I0M2YsXzB4YmU5ZTc1KSx0aGlzW18weDI5YjM2YigweDIxNCldKF8weDFjYjQzZixfMHhiZTllNzUpO31bJ19zZXROb2RlSWQnXShfMHg0NmE2MTUsXzB4MjJiNzA0KXt9W18weDFhNjMzMigweDJhMyldKF8weDRjNmZiMixfMHg0Mjc3YTgpe31bXzB4MWE2MzMyKDB4MjQxKV0oXzB4NDA1OTRhLF8weDZiZWRmYyl7fVtfMHgxYTYzMzIoMHgyNWQpXShfMHgxYTFhZGEpe3JldHVybiBfMHgxYTFhZGE9PT10aGlzWydfdW5kZWZpbmVkJ107fVtfMHgxYTYzMzIoMHgyOGYpXShfMHg0MjFjNjgsXzB4NTI5ZDc1KXt2YXIgXzB4NTJjZmM1PV8weDFhNjMzMjt0aGlzW18weDUyY2ZjNSgweDI0MSldKF8weDQyMWM2OCxfMHg1MjlkNzUpLHRoaXNbXzB4NTJjZmM1KDB4MWU1KV0oXzB4NDIxYzY4KSxfMHg1MjlkNzVbXzB4NTJjZmM1KDB4MWUxKV0mJnRoaXNbJ19zb3J0UHJvcHMnXShfMHg0MjFjNjgpLHRoaXNbXzB4NTJjZmM1KDB4MjQzKV0oXzB4NDIxYzY4LF8weDUyOWQ3NSksdGhpc1snX2FkZExvYWROb2RlJ10oXzB4NDIxYzY4LF8weDUyOWQ3NSksdGhpc1tfMHg1MmNmYzUoMHgyYjYpXShfMHg0MjFjNjgpO31bXzB4MWE2MzMyKDB4MjM3KV0oXzB4MWQ3NjcxLF8weDU2ODBlYSl7dmFyIF8weDRhN2Y4Mz1fMHgxYTYzMzI7bGV0IF8weDIwZDkxOTt0cnl7XzB4NTI5NDNjW18weDRhN2Y4MygweDJhMCldJiYoXzB4MjBkOTE5PV8weDUyOTQzY1snY29uc29sZSddWydlcnJvciddLF8weDUyOTQzY1tfMHg0YTdmODMoMHgyYTApXVtfMHg0YTdmODMoMHgyYWUpXT1mdW5jdGlvbigpe30pLF8weDFkNzY3MSYmdHlwZW9mIF8weDFkNzY3MVtfMHg0YTdmODMoMHgyM2IpXT09XzB4NGE3ZjgzKDB4MWQ3KSYmKF8weDU2ODBlYVtfMHg0YTdmODMoMHgyM2IpXT1fMHgxZDc2NzFbJ2xlbmd0aCddKTt9Y2F0Y2h7fWZpbmFsbHl7XzB4MjBkOTE5JiYoXzB4NTI5NDNjW18weDRhN2Y4MygweDJhMCldW18weDRhN2Y4MygweDJhZSldPV8weDIwZDkxOSk7fWlmKF8weDU2ODBlYVsndHlwZSddPT09XzB4NGE3ZjgzKDB4MWQ3KXx8XzB4NTY4MGVhW18weDRhN2Y4MygweDI1MSldPT09XzB4NGE3ZjgzKDB4MjVhKSl7aWYoaXNOYU4oXzB4NTY4MGVhWyd2YWx1ZSddKSlfMHg1NjgwZWFbJ25hbiddPSEweDAsZGVsZXRlIF8weDU2ODBlYVsndmFsdWUnXTtlbHNlIHN3aXRjaChfMHg1NjgwZWFbXzB4NGE3ZjgzKDB4MjcxKV0pe2Nhc2UgTnVtYmVyW18weDRhN2Y4MygweDIyZSldOl8weDU2ODBlYVsncG9zaXRpdmVJbmZpbml0eSddPSEweDAsZGVsZXRlIF8weDU2ODBlYVtfMHg0YTdmODMoMHgyNzEpXTticmVhaztjYXNlIE51bWJlcltfMHg0YTdmODMoMHgyMDIpXTpfMHg1NjgwZWFbJ25lZ2F0aXZlSW5maW5pdHknXT0hMHgwLGRlbGV0ZSBfMHg1NjgwZWFbJ3ZhbHVlJ107YnJlYWs7Y2FzZSAweDA6dGhpc1tfMHg0YTdmODMoMHgyOTIpXShfMHg1NjgwZWFbXzB4NGE3ZjgzKDB4MjcxKV0pJiYoXzB4NTY4MGVhW18weDRhN2Y4MygweDI3NSldPSEweDApO2JyZWFrO319ZWxzZSBfMHg1NjgwZWFbXzB4NGE3ZjgzKDB4MjUxKV09PT1fMHg0YTdmODMoMHgyNGUpJiZ0eXBlb2YgXzB4MWQ3NjcxW18weDRhN2Y4MygweDI4MSldPT1fMHg0YTdmODMoMHgxZGIpJiZfMHgxZDc2NzFbXzB4NGE3ZjgzKDB4MjgxKV0mJl8weDU2ODBlYVsnbmFtZSddJiZfMHgxZDc2NzFbJ25hbWUnXSE9PV8weDU2ODBlYVtfMHg0YTdmODMoMHgyODEpXSYmKF8weDU2ODBlYVtfMHg0YTdmODMoMHgyMjUpXT1fMHgxZDc2NzFbXzB4NGE3ZjgzKDB4MjgxKV0pO31bXzB4MWE2MzMyKDB4MjkyKV0oXzB4NGRkY2M0KXt2YXIgXzB4NTUyMmVmPV8weDFhNjMzMjtyZXR1cm4gMHgxL18weDRkZGNjND09PU51bWJlcltfMHg1NTIyZWYoMHgyMDIpXTt9W18weDFhNjMzMigweDFlZildKF8weDI3ZDBhZSl7dmFyIF8weDU3YTkyNz1fMHgxYTYzMzI7IV8weDI3ZDBhZVtfMHg1N2E5MjcoMHgyOWMpXXx8IV8weDI3ZDBhZVtfMHg1N2E5MjcoMHgyOWMpXVsnbGVuZ3RoJ118fF8weDI3ZDBhZVtfMHg1N2E5MjcoMHgyNTEpXT09PV8weDU3YTkyNygweDJiZSl8fF8weDI3ZDBhZVtfMHg1N2E5MjcoMHgyNTEpXT09PV8weDU3YTkyNygweDJiZCl8fF8weDI3ZDBhZVtfMHg1N2E5MjcoMHgyNTEpXT09PV8weDU3YTkyNygweDIwZSl8fF8weDI3ZDBhZVsncHJvcHMnXVtfMHg1N2E5MjcoMHgyM2MpXShmdW5jdGlvbihfMHg0MTliMjMsXzB4NGYxNWE1KXt2YXIgXzB4MTdlYjk2PV8weDU3YTkyNyxfMHgxYzhhZjI9XzB4NDE5YjIzW18weDE3ZWI5NigweDI4MSldW18weDE3ZWI5NigweDI0NSldKCksXzB4NmRlMWYyPV8weDRmMTVhNVtfMHgxN2ViOTYoMHgyODEpXVsndG9Mb3dlckNhc2UnXSgpO3JldHVybiBfMHgxYzhhZjI8XzB4NmRlMWYyPy0weDE6XzB4MWM4YWYyPl8weDZkZTFmMj8weDE6MHgwO30pO31bJ19hZGRGdW5jdGlvbnNOb2RlJ10oXzB4NTAwNDBiLF8weDUwM2IyMCl7dmFyIF8weGJlYmNhYj1fMHgxYTYzMzI7aWYoIShfMHg1MDNiMjBbXzB4YmViY2FiKDB4MWZkKV18fCFfMHg1MDA0MGJbXzB4YmViY2FiKDB4MjljKV18fCFfMHg1MDA0MGJbXzB4YmViY2FiKDB4MjljKV1bXzB4YmViY2FiKDB4MjNiKV0pKXtmb3IodmFyIF8weDVlYTdlZT1bXSxfMHgxM2ExYmI9W10sXzB4NDlhODc3PTB4MCxfMHgyMjEyNjA9XzB4NTAwNDBiW18weGJlYmNhYigweDI5YyldW18weGJlYmNhYigweDIzYildO18weDQ5YTg3NzxfMHgyMjEyNjA7XzB4NDlhODc3Kyspe3ZhciBfMHgzODI5Y2Q9XzB4NTAwNDBiW18weGJlYmNhYigweDI5YyldW18weDQ5YTg3N107XzB4MzgyOWNkW18weGJlYmNhYigweDI1MSldPT09XzB4YmViY2FiKDB4MjRlKT9fMHg1ZWE3ZWVbXzB4YmViY2FiKDB4MmIxKV0oXzB4MzgyOWNkKTpfMHgxM2ExYmJbXzB4YmViY2FiKDB4MmIxKV0oXzB4MzgyOWNkKTt9aWYoISghXzB4MTNhMWJiW18weGJlYmNhYigweDIzYildfHxfMHg1ZWE3ZWVbXzB4YmViY2FiKDB4MjNiKV08PTB4MSkpe18weDUwMDQwYlsncHJvcHMnXT1fMHgxM2ExYmI7dmFyIF8weGE3Yjc1ND17J2Z1bmN0aW9uc05vZGUnOiEweDAsJ3Byb3BzJzpfMHg1ZWE3ZWV9O3RoaXNbXzB4YmViY2FiKDB4MmE2KV0oXzB4YTdiNzU0LF8weDUwM2IyMCksdGhpc1snX3NldE5vZGVMYWJlbCddKF8weGE3Yjc1NCxfMHg1MDNiMjApLHRoaXNbJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJ10oXzB4YTdiNzU0KSx0aGlzW18weGJlYmNhYigweDIxNCldKF8weGE3Yjc1NCxfMHg1MDNiMjApLF8weGE3Yjc1NFsnaWQnXSs9J1xcXFx4MjBmJyxfMHg1MDA0MGJbXzB4YmViY2FiKDB4MjljKV1bJ3Vuc2hpZnQnXShfMHhhN2I3NTQpO319fVtfMHgxYTYzMzIoMHgyODgpXShfMHg0ZGIzMjYsXzB4YTQ5MGYpe31bXzB4MWE2MzMyKDB4MWU1KV0oXzB4Mzg4OTg3KXt9W18weDFhNjMzMigweDI5ZCldKF8weGQyZTdhMSl7dmFyIF8weDNlOTc2Mz1fMHgxYTYzMzI7cmV0dXJuIEFycmF5W18weDNlOTc2MygweDIwYyldKF8weGQyZTdhMSl8fHR5cGVvZiBfMHhkMmU3YTE9PV8weDNlOTc2MygweDJhNSkmJnRoaXNbXzB4M2U5NzYzKDB4MmE4KV0oXzB4ZDJlN2ExKT09PSdbb2JqZWN0XFxcXHgyMEFycmF5XSc7fVtfMHgxYTYzMzIoMHgyMTQpXShfMHg0NDgyNzcsXzB4ZjA0ZjM1KXt9W18weDFhNjMzMigweDJiNildKF8weDU4YzdlMSl7dmFyIF8weDMwYWEwNj1fMHgxYTYzMzI7ZGVsZXRlIF8weDU4YzdlMVtfMHgzMGFhMDYoMHgxZDQpXSxkZWxldGUgXzB4NThjN2UxW18weDMwYWEwNigweDJhOSldLGRlbGV0ZSBfMHg1OGM3ZTFbJ19oYXNNYXBPbkl0c1BhdGgnXTt9W18weDFhNjMzMigweDI4ZCldKF8weGJiMzgyOCxfMHg0ZGY4MGUpe319bGV0IF8weDVhNGNkMj1uZXcgXzB4MTA4NGI1KCksXzB4MmRkNzE5PXsncHJvcHMnOjB4NjQsJ2VsZW1lbnRzJzoweDY0LCdzdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ3RvdGFsU3RyTGVuZ3RoJzoweDQwMCoweDMyLCdhdXRvRXhwYW5kTGltaXQnOjB4MTM4OCwnYXV0b0V4cGFuZE1heERlcHRoJzoweGF9LF8weDRjYjg3Nj17J3Byb3BzJzoweDUsJ2VsZW1lbnRzJzoweDUsJ3N0ckxlbmd0aCc6MHgxMDAsJ3RvdGFsU3RyTGVuZ3RoJzoweDEwMCoweDMsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxZSwnYXV0b0V4cGFuZE1heERlcHRoJzoweDJ9O2Z1bmN0aW9uIF8weDNkNTkzMihfMHg0ZWZhYjMsXzB4MmQxYThiLF8weDQ1MGNlNSxfMHgyNjRiMTUsXzB4MTE3NzdiLF8weDI3ZmQ2YSl7dmFyIF8weGRiMjc5Yj1fMHgxYTYzMzI7bGV0IF8weDFmNGE5OSxfMHgyNjRkNzM7dHJ5e18weDI2NGQ3Mz1fMHgyYTM5OTgoKSxfMHgxZjRhOTk9XzB4MzI2N2QyW18weDJkMWE4Yl0sIV8weDFmNGE5OXx8XzB4MjY0ZDczLV8weDFmNGE5OVsndHMnXT4weDFmNCYmXzB4MWY0YTk5W18weGRiMjc5YigweDIxZildJiZfMHgxZjRhOTlbJ3RpbWUnXS9fMHgxZjRhOTlbXzB4ZGIyNzliKDB4MjFmKV08MHg2ND8oXzB4MzI2N2QyW18weDJkMWE4Yl09XzB4MWY0YTk5PXsnY291bnQnOjB4MCwndGltZSc6MHgwLCd0cyc6XzB4MjY0ZDczfSxfMHgzMjY3ZDJbXzB4ZGIyNzliKDB4MjdjKV09e30pOl8weDI2NGQ3My1fMHgzMjY3ZDJbJ2hpdHMnXVsndHMnXT4weDMyJiZfMHgzMjY3ZDJbXzB4ZGIyNzliKDB4MjdjKV1bXzB4ZGIyNzliKDB4MjFmKV0mJl8weDMyNjdkMltfMHhkYjI3OWIoMHgyN2MpXVtfMHhkYjI3OWIoMHgyMzkpXS9fMHgzMjY3ZDJbXzB4ZGIyNzliKDB4MjdjKV1bJ2NvdW50J108MHg2NCYmKF8weDMyNjdkMltfMHhkYjI3OWIoMHgyN2MpXT17fSk7bGV0IF8weDVmNWFmOT1bXSxfMHg1MDFkMTk9XzB4MWY0YTk5W18weGRiMjc5YigweDIxMildfHxfMHgzMjY3ZDJbXzB4ZGIyNzliKDB4MjdjKV1bXzB4ZGIyNzliKDB4MjEyKV0/XzB4NGNiODc2Ol8weDJkZDcxOSxfMHgxZTZlNWU9XzB4NDUyZGU3PT57dmFyIF8weDE5YzMxYj1fMHhkYjI3OWI7bGV0IF8weDIwM2IzMT17fTtyZXR1cm4gXzB4MjAzYjMxW18weDE5YzMxYigweDI5YyldPV8weDQ1MmRlN1tfMHgxOWMzMWIoMHgyOWMpXSxfMHgyMDNiMzFbXzB4MTljMzFiKDB4MjUyKV09XzB4NDUyZGU3W18weDE5YzMxYigweDI1MildLF8weDIwM2IzMVtfMHgxOWMzMWIoMHgyYmMpXT1fMHg0NTJkZTdbXzB4MTljMzFiKDB4MmJjKV0sXzB4MjAzYjMxWyd0b3RhbFN0ckxlbmd0aCddPV8weDQ1MmRlN1sndG90YWxTdHJMZW5ndGgnXSxfMHgyMDNiMzFbXzB4MTljMzFiKDB4MWQ5KV09XzB4NDUyZGU3W18weDE5YzMxYigweDFkOSldLF8weDIwM2IzMVtfMHgxOWMzMWIoMHgyMDgpXT1fMHg0NTJkZTdbJ2F1dG9FeHBhbmRNYXhEZXB0aCddLF8weDIwM2IzMVtfMHgxOWMzMWIoMHgxZTEpXT0hMHgxLF8weDIwM2IzMVtfMHgxOWMzMWIoMHgxZmQpXT0hXzB4Mzk2ODY1LF8weDIwM2IzMVtfMHgxOWMzMWIoMHgyMWEpXT0weDEsXzB4MjAzYjMxW18weDE5YzMxYigweDI5NildPTB4MCxfMHgyMDNiMzFbJ2V4cElkJ109J3Jvb3RfZXhwX2lkJyxfMHgyMDNiMzFbXzB4MTljMzFiKDB4MjkxKV09J3Jvb3RfZXhwJyxfMHgyMDNiMzFbXzB4MTljMzFiKDB4Mjc0KV09ITB4MCxfMHgyMDNiMzFbXzB4MTljMzFiKDB4Mjg2KV09W10sXzB4MjAzYjMxW18weDE5YzMxYigweDI2ZSldPTB4MCxfMHgyMDNiMzFbJ3Jlc29sdmVHZXR0ZXJzJ109ITB4MCxfMHgyMDNiMzFbXzB4MTljMzFiKDB4MjkzKV09MHgwLF8weDIwM2IzMVtfMHgxOWMzMWIoMHgxZjUpXT17J2N1cnJlbnQnOnZvaWQgMHgwLCdwYXJlbnQnOnZvaWQgMHgwLCdpbmRleCc6MHgwfSxfMHgyMDNiMzE7fTtmb3IodmFyIF8weDM5NmZmZD0weDA7XzB4Mzk2ZmZkPF8weDExNzc3YltfMHhkYjI3OWIoMHgyM2IpXTtfMHgzOTZmZmQrKylfMHg1ZjVhZjlbXzB4ZGIyNzliKDB4MmIxKV0oXzB4NWE0Y2QyW18weGRiMjc5YigweDFkMyldKHsndGltZU5vZGUnOl8weDRlZmFiMz09PSd0aW1lJ3x8dm9pZCAweDB9LF8weDExNzc3YltfMHgzOTZmZmRdLF8weDFlNmU1ZShfMHg1MDFkMTkpLHt9KSk7aWYoXzB4NGVmYWIzPT09XzB4ZGIyNzliKDB4MjU2KSl7bGV0IF8weDIzZjFlMz1FcnJvcltfMHhkYjI3OWIoMHgyYjUpXTt0cnl7RXJyb3JbXzB4ZGIyNzliKDB4MmI1KV09MHgxLzB4MCxfMHg1ZjVhZjlbJ3B1c2gnXShfMHg1YTRjZDJbXzB4ZGIyNzliKDB4MWQzKV0oeydzdGFja05vZGUnOiEweDB9LG5ldyBFcnJvcigpW18weGRiMjc5YigweDI5MCldLF8weDFlNmU1ZShfMHg1MDFkMTkpLHsnc3RyTGVuZ3RoJzoweDEvMHgwfSkpO31maW5hbGx5e0Vycm9yW18weGRiMjc5YigweDJiNSldPV8weDIzZjFlMzt9fXJldHVybnsnbWV0aG9kJzpfMHhkYjI3OWIoMHgyYWEpLCd2ZXJzaW9uJzpfMHgzZWY5ZDgsJ2FyZ3MnOlt7J3RzJzpfMHg0NTBjZTUsJ3Nlc3Npb24nOl8weDI2NGIxNSwnYXJncyc6XzB4NWY1YWY5LCdpZCc6XzB4MmQxYThiLCdjb250ZXh0JzpfMHgyN2ZkNmF9XX07fWNhdGNoKF8weDU2N2QxNCl7cmV0dXJueydtZXRob2QnOidsb2cnLCd2ZXJzaW9uJzpfMHgzZWY5ZDgsJ2FyZ3MnOlt7J3RzJzpfMHg0NTBjZTUsJ3Nlc3Npb24nOl8weDI2NGIxNSwnYXJncyc6W3sndHlwZSc6XzB4ZGIyNzliKDB4MWYxKSwnZXJyb3InOl8weDU2N2QxNCYmXzB4NTY3ZDE0W18weGRiMjc5YigweDI1NCldfV0sJ2lkJzpfMHgyZDFhOGIsJ2NvbnRleHQnOl8weDI3ZmQ2YX1dfTt9ZmluYWxseXt0cnl7aWYoXzB4MWY0YTk5JiZfMHgyNjRkNzMpe2xldCBfMHg1NjVlZTQ9XzB4MmEzOTk4KCk7XzB4MWY0YTk5W18weGRiMjc5YigweDIxZildKyssXzB4MWY0YTk5W18weGRiMjc5YigweDIzOSldKz1fMHg0YjEwOWYoXzB4MjY0ZDczLF8weDU2NWVlNCksXzB4MWY0YTk5Wyd0cyddPV8weDU2NWVlNCxfMHgzMjY3ZDJbXzB4ZGIyNzliKDB4MjdjKV1bXzB4ZGIyNzliKDB4MjFmKV0rKyxfMHgzMjY3ZDJbXzB4ZGIyNzliKDB4MjdjKV1bJ3RpbWUnXSs9XzB4NGIxMDlmKF8weDI2NGQ3MyxfMHg1NjVlZTQpLF8weDMyNjdkMltfMHhkYjI3OWIoMHgyN2MpXVsndHMnXT1fMHg1NjVlZTQsKF8weDFmNGE5OVtfMHhkYjI3OWIoMHgyMWYpXT4weDMyfHxfMHgxZjRhOTlbXzB4ZGIyNzliKDB4MjM5KV0+MHg2NCkmJihfMHgxZjRhOTlbXzB4ZGIyNzliKDB4MjEyKV09ITB4MCksKF8weDMyNjdkMltfMHhkYjI3OWIoMHgyN2MpXVtfMHhkYjI3OWIoMHgyMWYpXT4weDNlOHx8XzB4MzI2N2QyW18weGRiMjc5YigweDI3YyldWyd0aW1lJ10+MHgxMmMpJiYoXzB4MzI2N2QyW18weGRiMjc5YigweDI3YyldWydyZWR1Y2VMaW1pdHMnXT0hMHgwKTt9fWNhdGNoe319fXJldHVybiBfMHgzZDU5MzI7fSgoXzB4MzA5ZWFjLF8weDIwODcxYSxfMHhkOWI4NTcsXzB4NjdhMzQ2LF8weGI4Y2FhZixfMHgxMzVkY2IsXzB4Mzk5ZjEwLF8weDM2NTA5NCxfMHgxZWYzOGQsXzB4MTRiYzI2KT0+e3ZhciBfMHgzZjE1NzY9XzB4MWNlOGZkO2lmKF8weDMwOWVhY1snX2NvbnNvbGVfbmluamEnXSlyZXR1cm4gXzB4MzA5ZWFjW18weDNmMTU3NigweDIzNCldO2lmKCFKKF8weDMwOWVhYyxfMHgzNjUwOTQsXzB4YjhjYWFmKSlyZXR1cm4gXzB4MzA5ZWFjW18weDNmMTU3NigweDIzNCldPXsnY29uc29sZUxvZyc6KCk9Pnt9LCdjb25zb2xlVHJhY2UnOigpPT57fSwnY29uc29sZVRpbWUnOigpPT57fSwnY29uc29sZVRpbWVFbmQnOigpPT57fSwnYXV0b0xvZyc6KCk9Pnt9LCdhdXRvTG9nTWFueSc6KCk9Pnt9LCdhdXRvVHJhY2VNYW55JzooKT0+e30sJ2NvdmVyYWdlJzooKT0+e30sJ2F1dG9UcmFjZSc6KCk9Pnt9LCdhdXRvVGltZSc6KCk9Pnt9LCdhdXRvVGltZUVuZCc6KCk9Pnt9fSxfMHgzMDllYWNbXzB4M2YxNTc2KDB4MjM0KV07bGV0IF8weDNiMTBhNj1XKF8weDMwOWVhYyksXzB4M2U2NzQ4PV8weDNiMTBhNltfMHgzZjE1NzYoMHgyNTApXSxfMHgxOGE2ZWM9XzB4M2IxMGE2W18weDNmMTU3NigweDI2YyldLF8weDRkNWFjMj1fMHgzYjEwYTZbXzB4M2YxNTc2KDB4Mjg1KV0sXzB4MzYwYTViPXsnaGl0cyc6e30sJ3RzJzp7fX0sXzB4M2QxYTJjPVkoXzB4MzA5ZWFjLF8weDFlZjM4ZCxfMHgzNjBhNWIsXzB4MTM1ZGNiKSxfMHgyOWFmZjA9XzB4Mjc5OTEzPT57XzB4MzYwYTViWyd0cyddW18weDI3OTkxM109XzB4MThhNmVjKCk7fSxfMHgxMzJkOTM9KF8weGEyYTQxNCxfMHgyNTJjOGUpPT57dmFyIF8weDIzMzc5ZD1fMHgzZjE1NzY7bGV0IF8weDU5MWNiMz1fMHgzNjBhNWJbJ3RzJ11bXzB4MjUyYzhlXTtpZihkZWxldGUgXzB4MzYwYTViWyd0cyddW18weDI1MmM4ZV0sXzB4NTkxY2IzKXtsZXQgXzB4MmFhYTExPV8weDNlNjc0OChfMHg1OTFjYjMsXzB4MThhNmVjKCkpO18weDRkMmVlYihfMHgzZDFhMmMoXzB4MjMzNzlkKDB4MjM5KSxfMHhhMmE0MTQsXzB4NGQ1YWMyKCksXzB4NWU0NjQ0LFtfMHgyYWFhMTFdLF8weDI1MmM4ZSkpO319LF8weDM2YzQ4Mz1fMHgyZDc4MGY9Pl8weDVhYjBhZT0+e3ZhciBfMHg0ZWE1Zjk9XzB4M2YxNTc2O3RyeXtfMHgyOWFmZjAoXzB4NWFiMGFlKSxfMHgyZDc4MGYoXzB4NWFiMGFlKTt9ZmluYWxseXtfMHgzMDllYWNbXzB4NGVhNWY5KDB4MmEwKV1bXzB4NGVhNWY5KDB4MjM5KV09XzB4MmQ3ODBmO319LF8weDFjMWRmNj1fMHg1MDhlODQ9Pl8weDQ4NGU4ND0+e3ZhciBfMHhhYmZjYTU9XzB4M2YxNTc2O3RyeXtsZXQgW18weDUwNTMxMixfMHg1YTQ5MmNdPV8weDQ4NGU4NFtfMHhhYmZjYTUoMHgyYmIpXShfMHhhYmZjYTUoMHgxZTQpKTtfMHgxMzJkOTMoXzB4NWE0OTJjLF8weDUwNTMxMiksXzB4NTA4ZTg0KF8weDUwNTMxMik7fWZpbmFsbHl7XzB4MzA5ZWFjW18weGFiZmNhNSgweDJhMCldW18weGFiZmNhNSgweDIwZCldPV8weDUwOGU4NDt9fTtfMHgzMDllYWNbXzB4M2YxNTc2KDB4MjM0KV09eydjb25zb2xlTG9nJzooXzB4NDg2MjFmLF8weDQzZDQ5MCk9Pnt2YXIgXzB4Mjc5MGI4PV8weDNmMTU3NjtfMHgzMDllYWNbXzB4Mjc5MGI4KDB4MmEwKV1bXzB4Mjc5MGI4KDB4MmFhKV1bXzB4Mjc5MGI4KDB4MjgxKV0hPT1fMHgyNzkwYjgoMHgyYWIpJiZfMHg0ZDJlZWIoXzB4M2QxYTJjKCdsb2cnLF8weDQ4NjIxZixfMHg0ZDVhYzIoKSxfMHg1ZTQ2NDQsXzB4NDNkNDkwKSk7fSwnY29uc29sZVRyYWNlJzooXzB4NDYyMTBlLF8weDUwYWYwNCk9Pnt2YXIgXzB4ZGI5MjZhPV8weDNmMTU3NjtfMHgzMDllYWNbXzB4ZGI5MjZhKDB4MmEwKV1bXzB4ZGI5MjZhKDB4MmFhKV1bXzB4ZGI5MjZhKDB4MjgxKV0hPT1fMHhkYjkyNmEoMHgyM2UpJiZfMHg0ZDJlZWIoXzB4M2QxYTJjKF8weGRiOTI2YSgweDI1NiksXzB4NDYyMTBlLF8weDRkNWFjMigpLF8weDVlNDY0NCxfMHg1MGFmMDQpKTt9LCdjb25zb2xlVGltZSc6KCk9Pnt2YXIgXzB4MzY0MWFlPV8weDNmMTU3NjtfMHgzMDllYWNbXzB4MzY0MWFlKDB4MmEwKV1bXzB4MzY0MWFlKDB4MjM5KV09XzB4MzZjNDgzKF8weDMwOWVhY1tfMHgzNjQxYWUoMHgyYTApXVtfMHgzNjQxYWUoMHgyMzkpXSk7fSwnY29uc29sZVRpbWVFbmQnOigpPT57dmFyIF8weDU3MzU0Yz1fMHgzZjE1NzY7XzB4MzA5ZWFjWydjb25zb2xlJ11bXzB4NTczNTRjKDB4MjBkKV09XzB4MWMxZGY2KF8weDMwOWVhY1tfMHg1NzM1NGMoMHgyYTApXVtfMHg1NzM1NGMoMHgyMGQpXSk7fSwnYXV0b0xvZyc6KF8weDNiMTNiOCxfMHg0NDA1M2QpPT57XzB4NGQyZWViKF8weDNkMWEyYygnbG9nJyxfMHg0NDA1M2QsXzB4NGQ1YWMyKCksXzB4NWU0NjQ0LFtfMHgzYjEzYjhdKSk7fSwnYXV0b0xvZ01hbnknOihfMHgzNWMyZjUsXzB4MWUwYjFjKT0+e3ZhciBfMHgzNzNjMzY9XzB4M2YxNTc2O18weDRkMmVlYihfMHgzZDFhMmMoXzB4MzczYzM2KDB4MmFhKSxfMHgzNWMyZjUsXzB4NGQ1YWMyKCksXzB4NWU0NjQ0LF8weDFlMGIxYykpO30sJ2F1dG9UcmFjZSc6KF8weDFmYmNlYSxfMHgxMjQ0ZWEpPT57dmFyIF8weDE0MGQwNz1fMHgzZjE1NzY7XzB4NGQyZWViKF8weDNkMWEyYyhfMHgxNDBkMDcoMHgyNTYpLF8weDEyNDRlYSxfMHg0ZDVhYzIoKSxfMHg1ZTQ2NDQsW18weDFmYmNlYV0pKTt9LCdhdXRvVHJhY2VNYW55JzooXzB4MWZiMjEyLF8weDU4MDU2Nik9Pnt2YXIgXzB4MzZiOTI1PV8weDNmMTU3NjtfMHg0ZDJlZWIoXzB4M2QxYTJjKF8weDM2YjkyNSgweDI1NiksXzB4MWZiMjEyLF8weDRkNWFjMigpLF8weDVlNDY0NCxfMHg1ODA1NjYpKTt9LCdhdXRvVGltZSc6KF8weGM3MGI1LF8weDU5NjBiZSxfMHg0YzNiNjgpPT57XzB4MjlhZmYwKF8weDRjM2I2OCk7fSwnYXV0b1RpbWVFbmQnOihfMHgyMTIzODYsXzB4NWEzOThmLF8weDJmMTE2MCk9PntfMHgxMzJkOTMoXzB4NWEzOThmLF8weDJmMTE2MCk7fSwnY292ZXJhZ2UnOl8weDQ2YmJkMz0+e3ZhciBfMHgyMWE1NjI9XzB4M2YxNTc2O18weDRkMmVlYih7J21ldGhvZCc6XzB4MjFhNTYyKDB4Mjc2KSwndmVyc2lvbic6XzB4MTM1ZGNiLCdhcmdzJzpbeydpZCc6XzB4NDZiYmQzfV19KTt9fTtsZXQgXzB4NGQyZWViPWIoXzB4MzA5ZWFjLF8weDIwODcxYSxfMHhkOWI4NTcsXzB4NjdhMzQ2LF8weGI4Y2FhZixfMHgxNGJjMjYpLF8weDVlNDY0ND1fMHgzMDllYWNbXzB4M2YxNTc2KDB4MjNkKV07cmV0dXJuIF8weDMwOWVhY1tfMHgzZjE1NzYoMHgyMzQpXTt9KShnbG9iYWxUaGlzLF8weDFjZThmZCgweDIzMSksXzB4MWNlOGZkKDB4MjRmKSxcXFwiL2hvbWUvaW5zYW5lLy52c2NvZGUvZXh0ZW5zaW9ucy93YWxsYWJ5anMuY29uc29sZS1uaW5qYS0xLjAuMzAxL25vZGVfbW9kdWxlc1xcXCIsXzB4MWNlOGZkKDB4MjIzKSxfMHgxY2U4ZmQoMHgyYWYpLF8weDFjZThmZCgweDI3MyksXzB4MWNlOGZkKDB4MjFlKSxfMHgxY2U4ZmQoMHgyYTIpLF8weDFjZThmZCgweDI2MCkpO2Z1bmN0aW9uIF8weDIyY2EoKXt2YXIgXzB4NDdmYjI0PVsnX2tleVN0clJlZ0V4cCcsJ2RlZmF1bHQnLCduYW1lJywncHJvdG90eXBlJywnSFRNTEFsbENvbGxlY3Rpb24nLCdlbnVtZXJhYmxlJywnbm93JywnYXV0b0V4cGFuZFByZXZpb3VzT2JqZWN0cycsJ2hvc3RuYW1lJywnX2FkZExvYWROb2RlJywnX2lzU2V0JywnX2NvbnNvbGVOaW5qYUFsbG93ZWRUb1N0YXJ0JywnX3JlY29ubmVjdFRpbWVvdXQnLCdnZXQnLCdfc2V0Tm9kZUV4cHJlc3Npb25QYXRoJywncHJvY2VzcycsJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZScsJ3N0YWNrJywncm9vdEV4cHJlc3Npb24nLCdfaXNOZWdhdGl2ZVplcm8nLCdhbGxTdHJMZW5ndGgnLCdjcmVhdGUnLCdyZXNvbHZlR2V0dGVycycsJ2xldmVsJywnX3Byb3BlcnR5TmFtZScsJ19wX2xlbmd0aCcsJ2NvbmNhdCcsJzQwNjQzOXpGZEZ1SicsJ3BhdGgnLCdwcm9wcycsJ19pc0FycmF5Jywnd2FybicsJzMyMDAwNGNNVXhySScsJ2NvbnNvbGUnLCdkYXRhJywnJywnX3NldE5vZGVRdWVyeVBhdGgnLCdfbnVtYmVyUmVnRXhwJywnb2JqZWN0JywnX3NldE5vZGVJZCcsJ19xdW90ZWRSZWdFeHAnLCdfb2JqZWN0VG9TdHJpbmcnLCdfaGFzU2V0T25JdHNQYXRoJywnbG9nJywnZGlzYWJsZWRMb2cnLCdiaWdpbnQnLCdnZXRPd25Qcm9wZXJ0eVN5bWJvbHMnLCdlcnJvcicsJzEuMC4wJywnam9pbicsJ3B1c2gnLCczNTVsWXh3ZnQnLCdjbG9zZScsJ3N5bWJvbCcsJ3N0YWNrVHJhY2VMaW1pdCcsJ19jbGVhbk5vZGUnLCdnbG9iYWwnLCcyMkxQZ2hpVycsJzIxRlVZZWRFJywnX2Nvbm5lY3RBdHRlbXB0Q291bnQnLCdzcGxpdCcsJ3N0ckxlbmd0aCcsJ01hcCcsJ2FycmF5JywndmFsdWVPZicsJ3VuZGVmaW5lZCcsJ25vZGVNb2R1bGVzJywnc2VyaWFsaXplJywnX2hhc1N5bWJvbFByb3BlcnR5T25JdHNQYXRoJywnX21heENvbm5lY3RBdHRlbXB0Q291bnQnLCdvbmNsb3NlJywnbnVtYmVyJywnbmV4dC5qcycsJ2F1dG9FeHBhbmRMaW1pdCcsJ2xvZ2dlclxcXFx4MjBmYWlsZWRcXFxceDIwdG9cXFxceDIwY29ubmVjdFxcXFx4MjB0b1xcXFx4MjBob3N0LFxcXFx4MjBzZWVcXFxceDIwJywnc3RyaW5nJywnc3RyaW5naWZ5Jywnb25vcGVuJywnX3Byb2Nlc3NUcmVlTm9kZVJlc3VsdCcsJ19wX25hbWUnLCdfY29ubmVjdGVkJywnc29ydFByb3BzJywnX2lzUHJpbWl0aXZlV3JhcHBlclR5cGUnLCdwZXJmb3JtYW5jZScsJzpsb2dQb2ludElkOicsJ19zZXROb2RlRXhwYW5kYWJsZVN0YXRlJywnbG9nZ2VyXFxcXHgyMHdlYnNvY2tldFxcXFx4MjBlcnJvcicsJ191bmRlZmluZWQnLCdzZXR0ZXInLCdfcHJvcGVydHknLCdjYXBwZWRQcm9wcycsJ2VudicsJ2dldFByb3RvdHlwZU9mJywnW29iamVjdFxcXFx4MjBNYXBdJywnd3M6Ly8nLCdfc29ydFByb3BzJywnbnV4dCcsJ3Vua25vd24nLCdwZXJmX2hvb2tzJywnc3Vic3RyJywnX2FkZE9iamVjdFByb3BlcnR5Jywnbm9kZScsJzhvZ3pFWmcnLCdtYXRjaCcsJ0Jvb2xlYW4nLCdvbm1lc3NhZ2UnLCdfcF8nLCdfV2ViU29ja2V0JywnX3R5cGUnLCdub0Z1bmN0aW9ucycsJ21hcCcsJ2N1cnJlbnQnLCdfaW5OZXh0RWRnZScsJ2hydGltZScsJ05FR0FUSVZFX0lORklOSVRZJywncmVsb2FkJywndmVyc2lvbnMnLCdnZXR0ZXInLCdbb2JqZWN0XFxcXHgyMERhdGVdJywnXFxcXHgyMGJyb3dzZXInLCdhdXRvRXhwYW5kTWF4RGVwdGgnLCdsb2NhdGlvbicsJ2NvbnN0cnVjdG9yJywnX2dldE93blByb3BlcnR5TmFtZXMnLCdpc0FycmF5JywndGltZUVuZCcsJ1NldCcsJ3BvcnQnLCdfd3MnLCdXZWJTb2NrZXQnLCdyZWR1Y2VMaW1pdHMnLCdfV2ViU29ja2V0Q2xhc3MnLCdfc2V0Tm9kZVBlcm1pc3Npb25zJywnY2F0Y2gnLCdob3N0JywnYW5ndWxhcicsJ2dhdGV3YXkuZG9ja2VyLmludGVybmFsJywnc2V0JywnZGVwdGgnLCdkYXRlJywnX2FsbG93ZWRUb0Nvbm5lY3RPblNlbmQnLCdfY2FwSWZTdHJpbmcnLFtcXFwibG9jYWxob3N0XFxcIixcXFwiMTI3LjAuMC4xXFxcIixcXFwiZXhhbXBsZS5jeXByZXNzLmlvXFxcIixcXFwiWHVidW50dVxcXCIsXFxcIjEwLjAuMi4xNVxcXCJdLCdjb3VudCcsJ2luZGV4JywnbnVsbCcsJ1tvYmplY3RcXFxceDIwQXJyYXldJywnd2VicGFjaycsJ19kaXNwb3NlV2Vic29ja2V0JywnZnVuY05hbWUnLCdyZXBsYWNlJywnZXhwcmVzc2lvbnNUb0V2YWx1YXRlJywnX1N5bWJvbCcsJ2dldE93blByb3BlcnR5TmFtZXMnLCd3cy9pbmRleC5qcycsJ2RlZmluZVByb3BlcnR5Jywnc2xpY2UnLCdjYXBwZWQnLCdQT1NJVElWRV9JTkZJTklUWScsJ19pc1ByaW1pdGl2ZVR5cGUnLCdnZXRXZWJTb2NrZXRDbGFzcycsJzEyNy4wLjAuMScsJ3BhcmVudCcsJ3VybCcsJ19jb25zb2xlX25pbmphJywnX2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsJ29uZXJyb3InLCdfYWRkaXRpb25hbE1ldGFkYXRhJywnZWRnZScsJ3RpbWUnLCdiaW5kJywnbGVuZ3RoJywnc29ydCcsJ19jb25zb2xlX25pbmphX3Nlc3Npb24nLCdkaXNhYmxlZFRyYWNlJywnX2JsYWNrbGlzdGVkUHJvcGVydHknLCdfYWxsb3dlZFRvU2VuZCcsJ19zZXROb2RlTGFiZWwnLCdfY29ubmVjdGluZycsJ19hZGRGdW5jdGlvbnNOb2RlJywnX3JlZ0V4cFRvU3RyaW5nJywndG9Mb3dlckNhc2UnLCcuLi4nLCdDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlc3RhcnRpbmdcXFxceDIwdGhlXFxcXHgyMHByb2Nlc3NcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCcsJzc0NDQyZ0JZc295JywnU3ltYm9sJywnNjY1ODI1NEFzTmVteicsJ19hZGRQcm9wZXJ0eScsJzE0MzIzNjBNdUJVUm0nLCdfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseScsJ2Z1bmN0aW9uJywnMzQ5OTknLCdlbGFwc2VkJywndHlwZScsJ2VsZW1lbnRzJywnX2lzTWFwJywnbWVzc2FnZScsJ19zb2NrZXQnLCd0cmFjZScsJzhkUU9NYUcnLCdpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJywnaHR0cHM6Ly90aW55dXJsLmNvbS8zN3g4Yjc5dCcsJ051bWJlcicsJ2NhbGwnLCdfSFRNTEFsbENvbGxlY3Rpb24nLCdfaXNVbmRlZmluZWQnLCdkb2NrZXJpemVkQXBwJywnZm9yRWFjaCcsJycsJ193ZWJTb2NrZXRFcnJvckRvY3NMaW5rJywnX2luQnJvd3NlcicsJ0J1ZmZlcicsJ3Rlc3QnLCdfY29ubmVjdFRvSG9zdE5vdycsJ3VucmVmJywnX2dldE93blByb3BlcnR5U3ltYm9scycsJ3RvdGFsU3RyTGVuZ3RoJywndGhlbicsJ05FWFRfUlVOVElNRScsJ3BhdGhUb0ZpbGVVUkwnLCd0aW1lU3RhbXAnLCcxMDY4NTEzU01MWkZpJywnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnLCdwb3AnLCd0b1N0cmluZycsJ3ZhbHVlJywnMTAyMzM1NTBHSURRUngnLCcxNzEyNzUzMDEyMTUwJywnYXV0b0V4cGFuZCcsJ25lZ2F0aXZlWmVybycsJ2NvdmVyYWdlJywnU3RyaW5nJywnX3RyZWVOb2RlUHJvcGVydGllc0JlZm9yZUZ1bGxWYWx1ZScsJ19kYXRlVG9TdHJpbmcnLCdjYXBwZWRFbGVtZW50cycsJ3NlbmQnLCdoaXRzJywnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnUmVnRXhwJ107XzB4MjJjYT1mdW5jdGlvbigpe3JldHVybiBfMHg0N2ZiMjQ7fTtyZXR1cm4gXzB4MjJjYSgpO31cIik7fWNhdGNoKGUpe319Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fb28oaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlTG9nKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RyKGksLi4udil7dHJ5e29vX2NtKCkuY29uc29sZVRyYWNlKGksIHYpO31jYXRjaChlKXt9IHJldHVybiB2fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RzKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWUoKTt9Y2F0Y2goZSl7fX07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb190ZSgpe3RyeXtvb19jbSgpLmNvbnNvbGVUaW1lRW5kKCk7fWNhdGNoKGUpe319Oy8qZXNsaW50IHVuaWNvcm4vbm8tYWJ1c2l2ZS1lc2xpbnQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL2Rpc2FibGUtZW5hYmxlLXBhaXI6LGVzbGludC1jb21tZW50cy9uby11bmxpbWl0ZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWFnZ3JlZ2F0aW5nLWVuYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLWR1cGxpY2F0ZS1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tdW51c2VkLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZW5hYmxlOiwqLyIsImV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgY29uc3Qgc2lnbiA9IG51bWJlciA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gIGNvbnN0IG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKS5wYWRTdGFydCh0YXJnZXRMZW5ndGgsIFwiMFwiKTtcbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59XG4iLCJsZXQgZGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn1cbiIsImltcG9ydCB7IGdldERheU9mWWVhciB9IGZyb20gXCIuLi8uLi9nZXREYXlPZlllYXIubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuLi8uLi9nZXRJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IGdldFdlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vlay5tanNcIjtcbmltcG9ydCB7IGdldFdlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5tanNcIjtcbmltcG9ydCB7IGxpZ2h0Rm9ybWF0dGVycyB9IGZyb20gXCIuL2xpZ2h0Rm9ybWF0dGVycy5tanNcIjtcblxuY29uc3QgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06IFwiYW1cIixcbiAgcG06IFwicG1cIixcbiAgbWlkbmlnaHQ6IFwibWlkbmlnaHRcIixcbiAgbm9vbjogXCJub29uXCIsXG4gIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICBhZnRlcm5vb246IFwiYWZ0ZXJub29uXCIsXG4gIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICBuaWdodDogXCJuaWdodFwiLFxufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbmV4cG9ydCBjb25zdCBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGVyYSA9IGRhdGUuZ2V0RnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgXCJHXCI6XG4gICAgICBjYXNlIFwiR0dcIjpcbiAgICAgIGNhc2UgXCJHR0dcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIiB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgXCJHR0dHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJuYXJyb3dcIiB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlIFwiR0dHR1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHsgd2lkdGg6IFwid2lkZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gXCJ5b1wiKSB7XG4gICAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzaWduZWRXZWVrWWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3Qgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSBcIllZXCIpIHtcbiAgICAgIGNvbnN0IHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcIllvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7IHVuaXQ6IFwieWVhclwiIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGlzb1dlZWtZZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldE1vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgXCJRXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSBcIlFRXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgXCJRb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7IHVuaXQ6IFwicXVhcnRlclwiIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgXCJRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlIFwiUVFRUVFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlIFwiUVFRUVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcInFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwicXFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcInFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcInFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJxcXFxcVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJxcXFxXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJNXCI6XG4gICAgICBjYXNlIFwiTU1cIjpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJNb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTU1NXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTU1NTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJNTU1NXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcImZvcm1hdHRpbmdcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgXCJMXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxMXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgXCJMb1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHsgdW5pdDogXCJtb250aFwiIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlIFwiTExMXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlIFwiTExMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgXCJMTExMXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHsgd2lkdGg6IFwid2lkZVwiLCBjb250ZXh0OiBcInN0YW5kYWxvbmVcIiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB3ZWVrID0gZ2V0V2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJ3b1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBpc29XZWVrID0gZ2V0SVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJJb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7IHVuaXQ6IFwid2Vla1wiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiZG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXREYXRlKCksIHsgdW5pdDogXCJkYXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZGF5T2ZZZWFyID0gZ2V0RGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIkRvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwgeyB1bml0OiBcImRheU9mWWVhclwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSBcIkVcIjpcbiAgICAgIGNhc2UgXCJFRVwiOlxuICAgICAgY2FzZSBcIkVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSBcIkVFRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgXCJFRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgXCJFRUVFXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlIFwiZVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJlZVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImVvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiZWVlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImVlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImVlZWVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSBcImNcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlIFwiY2NcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSBcImNvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICBjYXNlIFwiY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiY2NjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImNjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImNjY2NcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpO1xuICAgIGNvbnN0IGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSBcImlcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcbiAgICAgIGNhc2UgXCJpaVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSBcImlvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2VlaywgeyB1bml0OiBcImRheVwiIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiaWlpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcImlpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcImlpaWlcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJiXCI6XG4gICAgICBjYXNlIFwiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplXG4gICAgICAgICAgLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgICB9KVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSBcImJiYmJiXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYmJcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiQlwiOlxuICAgICAgY2FzZSBcIkJCXCI6XG4gICAgICBjYXNlIFwiQkJCXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiQkJCQlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcImhvXCIpIHtcbiAgICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIkhvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0SG91cnMoKSwgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSBcIktvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09IFwia29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJtb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldE1pbnV0ZXMoKSwgeyB1bml0OiBcIm1pbnV0ZVwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwic29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRTZWNvbmRzKCksIHsgdW5pdDogXCJzZWNvbmRcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiBcIlpcIjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcIlhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSBcIlhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSBcIlhYWFhYXCI6XG4gICAgICBjYXNlIFwiWFhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSBcInh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eFwiOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSBcInh4eHh4XCI6XG4gICAgICBjYXNlIFwieHh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcIk9cIjpcbiAgICAgIGNhc2UgXCJPT1wiOlxuICAgICAgY2FzZSBcIk9PT1wiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJPT09PXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXpvbmVPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSBcInpcIjpcbiAgICAgIGNhc2UgXCJ6elwiOlxuICAgICAgY2FzZSBcInp6elwiOlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgXCJ6enp6XCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gXCJHTVRcIiArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCBcIjpcIik7XG4gICAgfVxuICB9LFxuXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplKSB7XG4gICAgY29uc3QgdGltZXN0YW1wID0gTWF0aC50cnVuYyhkYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkZWxpbWl0ZXIgPSBcIlwiKSB7XG4gIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgY29uc3QgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKTtcbiAgY29uc3QgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLnRydW5jKGFic09mZnNldCAvIDYwKSwgMik7XG4gIGNvbnN0IG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbiIsImltcG9ydCB7IGFkZExlYWRpbmdaZXJvcyB9IGZyb20gXCIuLi9hZGRMZWFkaW5nWmVyb3MubWpzXCI7XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbmV4cG9ydCBjb25zdCBsaWdodEZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgY29uc3Qgc2lnbmVkWWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIGNvbnN0IHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSBcInl5XCIgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNb250aFxuICBNKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSBcIk1cIiA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldERhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRIb3VycygpIC8gMTIgPj0gMSA/IFwicG1cIiA6IFwiYW1cIjtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICBjYXNlIFwiYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSBcImFhYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gXCJhbVwiID8gXCJhLm0uXCIgOiBcInAubS5cIjtcbiAgICB9XG4gIH0sXG5cbiAgLy8gSG91ciBbMS0xMl1cbiAgaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0yM11cbiAgSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldE1pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBkYXRlLmdldE1pbGxpc2Vjb25kcygpO1xuICAgIGNvbnN0IGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC50cnVuYyhcbiAgICAgIG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpLFxuICAgICk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbn07XG4iLCJjb25zdCBkYXRlTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcInBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJwcHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcInBwcHBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgY29uc3QgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgY29uc3QgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgY29uc3QgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgbGV0IGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdFxuICAgIC5yZXBsYWNlKFwie3tkYXRlfX1cIiwgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKVxuICAgIC5yZXBsYWNlKFwie3t0aW1lfX1cIiwgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcixcbn07XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHV0Y0RhdGUgPSBuZXcgRGF0ZShcbiAgICBEYXRlLlVUQyhcbiAgICAgIF9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBfZGF0ZS5nZXRNb250aCgpLFxuICAgICAgX2RhdGUuZ2V0RGF0ZSgpLFxuICAgICAgX2RhdGUuZ2V0SG91cnMoKSxcbiAgICAgIF9kYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgIF9kYXRlLmdldFNlY29uZHMoKSxcbiAgICAgIF9kYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICksXG4gICk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoX2RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiArZGF0ZSAtICt1dGNEYXRlO1xufVxuIiwiY29uc3QgZGF5T2ZZZWFyVG9rZW5SRSA9IC9eRCskLztcbmNvbnN0IHdlZWtZZWFyVG9rZW5SRSA9IC9eWSskLztcblxuY29uc3QgdGhyb3dUb2tlbnMgPSBbXCJEXCIsIFwiRERcIiwgXCJZWVwiLCBcIllZWVlcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBkYXlPZlllYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiB3ZWVrWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IF9tZXNzYWdlID0gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCk7XG4gIGNvbnNvbGUud2FybihfbWVzc2FnZSk7XG4gIGlmICh0aHJvd1Rva2Vucy5pbmNsdWRlcyh0b2tlbikpIHRocm93IG5ldyBSYW5nZUVycm9yKF9tZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBzdWJqZWN0ID0gdG9rZW5bMF0gPT09IFwiWVwiID8gXCJ5ZWFyc1wiIDogXCJkYXlzIG9mIHRoZSBtb250aFwiO1xuICByZXR1cm4gYFVzZSBcXGAke3Rva2VuLnRvTG93ZXJDYXNlKCl9XFxgIGluc3RlYWQgb2YgXFxgJHt0b2tlbn1cXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgJHtzdWJqZWN0fSB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGA7XG59XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gYW1vdW50IC0gVGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkLlxuICpcbiAqIEByZXR1cm5zIFRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXlzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxMCBkYXlzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGFtb3VudCkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgaWYgKGlzTmFOKGFtb3VudCkpIHJldHVybiBjb25zdHJ1Y3RGcm9tKGRhdGUsIE5hTik7XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBfZGF0ZTtcbiAgfVxuICBfZGF0ZS5zZXREYXRlKF9kYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBhZGREYXlzO1xuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5leHBvcnQgY29uc3QgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWF4VGltZVxuICogQHN1bW1hcnkgTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1heFRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IDg2NDAwMDAwMDAwMDAwMDEgPD0gbWF4VGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDAxKTtcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luWWVhciA9IDUyNTYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbk1vbnRoXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgbW9udGguXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Nb250aCA9IDQzMjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luRGF5ID0gMTQ0MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBzdW1tYXJ5IFF1YXJ0ZXJzIGluIDEgeWVhclxuICovXG5leHBvcnQgY29uc3QgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1pbnV0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMztcbiIsIi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEl0IGRlZmF1bHRzIHRvIGBEYXRlYCBpZiB0aGUgcGFzc2VkIHJlZmVyZW5jZSBkYXRlIGlzIGEgbnVtYmVyIG9yIGEgc3RyaW5nLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luRGF5IH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5pbXBvcnQgeyBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCB0aW1lc3RhbXBMZWZ0ID1cbiAgICArc3RhcnRPZkRheUxlZnQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgY29uc3QgdGltZXN0YW1wUmlnaHQgPVxuICAgICtzdGFydE9mRGF5UmlnaHQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBtaWxsaXNlY29uZHNJbkRheSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuIiwiaW1wb3J0IHsgZGVmYXVsdExvY2FsZSB9IGZyb20gXCIuL19saWIvZGVmYXVsdExvY2FsZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHsgbG9uZ0Zvcm1hdHRlcnMgfSBmcm9tIFwiLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy5tanNcIjtcbmltcG9ydCB7XG4gIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sXG4gIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbixcbiAgd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcixcbn0gZnJvbSBcIi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMubWpzXCI7XG5pbXBvcnQgeyBpc1ZhbGlkIH0gZnJvbSBcIi4vaXNWYWxpZC5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLy8gUmV4cG9ydHMgb2YgaW50ZXJuYWwgZm9yIGxpYnJhcmllcyB0byB1c2UuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzYzOCNpc3N1ZWNvbW1lbnQtMTg3NzA4Mjg3NFxuZXhwb3J0IHsgZm9ybWF0dGVycywgbG9uZ0Zvcm1hdHRlcnMgfTtcblxuLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5jb25zdCBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID1cbiAgL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG4vLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5jb25zdCBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG5jb25zdCBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG5jb25zdCBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xuY29uc3QgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG5leHBvcnQgeyBmb3JtYXQgYXMgZm9ybWF0RGF0ZSB9O1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZm9ybWF0fSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAYWxpYXMgZm9ybWF0RGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyKVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl0oaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcikpLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gZm9ybWF0IC0gVGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqXG4gKiBAdGhyb3dzIGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3MgYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3MgdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoZGF0ZSwgZm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgbG9jYWxlID0gb3B0aW9ucz8ubG9jYWxlID8/IGRlZmF1bHRPcHRpb25zLmxvY2FsZSA/PyBkZWZhdWx0TG9jYWxlO1xuXG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkludmFsaWQgdGltZSB2YWx1ZVwiKTtcbiAgfVxuXG4gIGxldCBwYXJ0cyA9IGZvcm1hdFN0clxuICAgIC5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcInBcIiB8fCBmaXJzdENoYXJhY3RlciA9PT0gXCJQXCIpIHtcbiAgICAgICAgY29uc3QgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3Vic3RyaW5nO1xuICAgIH0pXG4gICAgLmpvaW4oXCJcIilcbiAgICAubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgICAubWFwKChzdWJzdHJpbmcpID0+IHtcbiAgICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IFwiJ1wiIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXSkge1xuICAgICAgICByZXR1cm4geyBpc1Rva2VuOiB0cnVlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgXCJGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYFwiICtcbiAgICAgICAgICAgIGZpcnN0Q2hhcmFjdGVyICtcbiAgICAgICAgICAgIFwiYFwiLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4geyBpc1Rva2VuOiBmYWxzZSwgdmFsdWU6IHN1YnN0cmluZyB9O1xuICAgIH0pO1xuXG4gIC8vIGludm9rZSBsb2NhbGl6ZSBwcmVwcm9jZXNzb3IgKG9ubHkgZm9yIGZyZW5jaCBsb2NhbGVzIGF0IHRoZSBtb21lbnQpXG4gIGlmIChsb2NhbGUubG9jYWxpemUucHJlcHJvY2Vzc29yKSB7XG4gICAgcGFydHMgPSBsb2NhbGUubG9jYWxpemUucHJlcHJvY2Vzc29yKG9yaWdpbmFsRGF0ZSwgcGFydHMpO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZSxcbiAgfTtcblxuICByZXR1cm4gcGFydHNcbiAgICAubWFwKChwYXJ0KSA9PiB7XG4gICAgICBpZiAoIXBhcnQuaXNUb2tlbikgcmV0dXJuIHBhcnQudmFsdWU7XG5cbiAgICAgIGNvbnN0IHRva2VuID0gcGFydC52YWx1ZTtcblxuICAgICAgaWYgKFxuICAgICAgICAoIW9wdGlvbnM/LnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikpIHx8XG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJlxuICAgICAgICAgIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pKVxuICAgICAgKSB7XG4gICAgICAgIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdFN0ciwgU3RyaW5nKGRhdGUpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1t0b2tlblswXV07XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKG9yaWdpbmFsRGF0ZSwgdG9rZW4sIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIGNvbnN0IG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZlllYXIgfSBmcm9tIFwiLi9zdGFydE9mWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXREYXlPZlllYXJcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGRheSBvZiB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgeWVhciBpcyAyIEp1bHkgMjAxND9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldERheU9mWWVhcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gMTgzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlPZlllYXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhfZGF0ZSwgc3RhcnRPZlllYXIoX2RhdGUpKTtcbiAgY29uc3QgZGF5T2ZZZWFyID0gZGlmZiArIDE7XG4gIHJldHVybiBkYXlPZlllYXI7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF5T2ZZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiA1M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2VlayhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gK3N0YXJ0T2ZJU09XZWVrKF9kYXRlKSAtICtzdGFydE9mSVNPV2Vla1llYXIoX2RhdGUpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0SVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZSxcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIElTTy13ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0SVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWtZZWFyKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHllYXIgPSBfZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSB3aXRoIGRlZmF1bHQgb3B0aW9ucz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSxcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLFxuICogLy8gYW5kIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyIGFsd2F5cyBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiA1M1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSArc3RhcnRPZldlZWsoX2RhdGUsIG9wdGlvbnMpIC0gK3N0YXJ0T2ZXZWVrWWVhcihfZGF0ZSwgb3B0aW9ucyk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgZ2V0V2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKlxuICogQHJldHVybnMgVGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IHdpdGggdGhlIGRlZmF1bHQgc2V0dGluZ3M/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpKVxuICogLy89PiAyMDA1XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB3ZWVrIHN0YXJ0cyBvbiBTYXR1cmRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgd2Vla1N0YXJ0c09uOiA2IH0pXG4gKiAvLz0+IDIwMDRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHRoZSBmaXJzdCB3ZWVrIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNiksIHsgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0IH0pXG4gKiAvLz0+IDIwMDRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHllYXIgPSBfZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCBmaXJzdFdlZWtPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0V2Vla1llYXI7XG4iLCIvKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzRGF0ZTtcbiIsImltcG9ydCB7IGlzRGF0ZSB9IGZyb20gXCIuL2lzRGF0ZS5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZSlcbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB2YWxpZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChkYXRlKSB7XG4gIGlmICghaXNEYXRlKGRhdGUpICYmIHR5cGVvZiBkYXRlICE9PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihfZGF0ZSkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVmFsaWQ7XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gKG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIGNvbnN0IGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBUaGUgbG9jYWxpemUgZnVuY3Rpb24gYXJndW1lbnQgY2FsbGJhY2sgd2hpY2ggYWxsb3dzIHRvIGNvbnZlcnQgcmF3IHZhbHVlIHRvXG4gKiB0aGUgYWN0dWFsIHR5cGUuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgY29udmVydGVkIHZhbHVlXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwIG9mIGxvY2FsaXplZCB2YWx1ZXMgZm9yIGVhY2ggd2lkdGguXG4gKi9cblxuLyoqXG4gKiBUaGUgaW5kZXggdHlwZSBvZiB0aGUgbG9jYWxlIHVuaXQgdmFsdWUuIEl0IHR5cGVzIGNvbnZlcnNpb24gb2YgdW5pdHMgb2ZcbiAqIHZhbHVlcyB0aGF0IGRvbid0IHN0YXJ0IGF0IDAgKGkuZS4gcXVhcnRlcnMpLlxuICovXG5cbi8qKlxuICogQ29udmVydHMgdGhlIHVuaXQgdmFsdWUgdG8gdGhlIHR1cGxlIG9mIHZhbHVlcy5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZXJhIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBCQyxcbiAqIHRoZSBzZWNvbmQgZWxlbWVudCByZXByZXNlbnRzIEFELlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBxdWFydGVyIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBRMS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZGF5IHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBTdW5kYXkuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIG1vbnRoIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBKYW51YXJ5LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IG9wdGlvbnM/LmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgbGV0IHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSBcImZvcm1hdHRpbmdcIiAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID1cbiAgICAgICAgYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbd2lkdGhdIHx8IGFyZ3MudmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuXG4gICAgY29uc3QgbWF0Y2hQYXR0ZXJuID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIGNvbnN0IG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VQYXR0ZXJucyA9XG4gICAgICAod2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSkgfHxcbiAgICAgIGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcblxuICAgIGNvbnN0IGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucylcbiAgICAgID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpXG4gICAgICA6IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICAgICAgZmluZEtleShwYXJzZVBhdHRlcm5zLCAocGF0dGVybikgPT4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpKTtcblxuICAgIGxldCB2YWx1ZTtcblxuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpXG4gICAgICA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChcbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiZcbiAgICAgIHByZWRpY2F0ZShvYmplY3Rba2V5XSlcbiAgICApIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAobGV0IGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gKHN0cmluZywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcblxuICAgIGNvbnN0IHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICBsZXQgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2tcbiAgICAgID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKVxuICAgICAgOiBwYXJzZVJlc3VsdFswXTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55IC0tIEkgY2hhbGxhbmdlIHlvdSB0byBmaXggdGhlIHR5cGVcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIGNvbnN0IHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIHsgdmFsdWUsIHJlc3QgfTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGZvcm1hdERpc3RhbmNlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanNcIjtcbmltcG9ydCB7IGZvcm1hdExvbmcgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdExvbmcubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXRSZWxhdGl2ZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUubWpzXCI7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gXCIuL2VuLVVTL19saWIvbG9jYWxpemUubWpzXCI7XG5pbXBvcnQgeyBtYXRjaCB9IGZyb20gXCIuL2VuLVVTL19saWIvbWF0Y2gubWpzXCI7XG5cbi8qKlxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF0oaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnApXG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3MpXG4gKi9cbmV4cG9ydCBjb25zdCBlblVTID0ge1xuICBjb2RlOiBcImVuLVVTXCIsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxLFxuICB9LFxufTtcblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBlblVTO1xuIiwiY29uc3QgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6IFwiMSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIGhhbGZBTWludXRlOiBcImhhbGYgYSBtaW51dGVcIixcblxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiBcIjEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogXCJhYm91dCAxIGhvdXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4SG91cnM6IHtcbiAgICBvbmU6IFwiMSBob3VyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeERheXM6IHtcbiAgICBvbmU6IFwiMSBkYXlcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gZGF5c1wiLFxuICB9LFxuXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiBcImFib3V0IDEgd2Vla1wiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIHhXZWVrczoge1xuICAgIG9uZTogXCIxIHdlZWtcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBtb250aFwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICB4TW9udGhzOiB7XG4gICAgb25lOiBcIjEgbW9udGhcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgeFllYXJzOiB7XG4gICAgb25lOiBcIjEgeWVhclwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6IFwib3ZlciAxIHllYXJcIixcbiAgICBvdGhlcjogXCJvdmVyIHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogXCJhbG1vc3QgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwiYWxtb3N0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdERpc3RhbmNlID0gKHRva2VuLCBjb3VudCwgb3B0aW9ucykgPT4ge1xuICBsZXQgcmVzdWx0O1xuXG4gIGNvbnN0IHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoXCJ7e2NvdW50fX1cIiwgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucz8uYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gXCJpbiBcIiArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArIFwiIGFnb1wiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IHsgYnVpbGRGb3JtYXRMb25nRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi5tanNcIjtcblxuY29uc3QgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiRUVFRSwgTU1NTSBkbywgeVwiLFxuICBsb25nOiBcIk1NTU0gZG8sIHlcIixcbiAgbWVkaXVtOiBcIk1NTSBkLCB5XCIsXG4gIHNob3J0OiBcIk1NL2RkL3l5eXlcIixcbn07XG5cbmNvbnN0IHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcImg6bW06c3MgYSB6enp6XCIsXG4gIGxvbmc6IFwiaDptbTpzcyBhIHpcIixcbiAgbWVkaXVtOiBcImg6bW06c3MgYVwiLFxuICBzaG9ydDogXCJoOm1tIGFcIixcbn07XG5cbmNvbnN0IGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG4gIHNob3J0OiBcInt7ZGF0ZX19LCB7e3RpbWV9fVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG5cbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiBcImZ1bGxcIixcbiAgfSksXG59O1xuIiwiY29uc3QgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiBcIlBcIixcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRSZWxhdGl2ZSA9ICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpID0+XG4gIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbiIsImltcG9ydCB7IGJ1aWxkTG9jYWxpemVGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi5tanNcIjtcblxuY29uc3QgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkJcIiwgXCJBXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiQkNcIiwgXCJBRFwiXSxcbiAgd2lkZTogW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdLFxufTtcblxuY29uc3QgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJdLFxuICBhYmJyZXZpYXRlZDogW1wiUTFcIiwgXCJRMlwiLCBcIlEzXCIsIFwiUTRcIl0sXG4gIHdpZGU6IFtcIjFzdCBxdWFydGVyXCIsIFwiMm5kIHF1YXJ0ZXJcIiwgXCIzcmQgcXVhcnRlclwiLCBcIjR0aCBxdWFydGVyXCJdLFxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuY29uc3QgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLFxuICBhYmJyZXZpYXRlZDogW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdLFxuXG4gIHdpZGU6IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXG4gIHNob3J0OiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgd2lkZTogW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3QgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3Qgb3JkaW5hbE51bWJlciA9IChkaXJ0eU51bWJlciwgX29wdGlvbnMpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIGNvbnN0IHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJzdFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJuZFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJyZFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgXCJ0aFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyLFxuXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IChxdWFydGVyKSA9PiBxdWFydGVyIC0gMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiBcIndpZGVcIixcbiAgfSksXG59O1xuIiwiaW1wb3J0IHsgYnVpbGRNYXRjaEZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaEZuLm1qc1wiO1xuaW1wb3J0IHsgYnVpbGRNYXRjaFBhdHRlcm5GbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzXCI7XG5cbmNvbnN0IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG5jb25zdCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcblxuY29uc3QgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pLFxufTtcbmNvbnN0IHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldLFxufTtcblxuY29uc3QgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaSxcbn07XG5jb25zdCBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV0sXG59O1xuXG5jb25zdCBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaSxcbn07XG5jb25zdCBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogW1xuICAgIC9eai9pLFxuICAgIC9eZi9pLFxuICAgIC9ebS9pLFxuICAgIC9eYS9pLFxuICAgIC9ebS9pLFxuICAgIC9eai9pLFxuICAgIC9eai9pLFxuICAgIC9eYS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxuXG4gIGFueTogW1xuICAgIC9eamEvaSxcbiAgICAvXmYvaSxcbiAgICAvXm1hci9pLFxuICAgIC9eYXAvaSxcbiAgICAvXm1heS9pLFxuICAgIC9eanVuL2ksXG4gICAgL15qdWwvaSxcbiAgICAvXmF1L2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG59O1xuXG5jb25zdCBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiAodmFsdWUpID0+IHBhcnNlSW50KHZhbHVlLCAxMCksXG4gIH0pLFxuXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgICB2YWx1ZUNhbGxiYWNrOiAoaW5kZXgpID0+IGluZGV4ICsgMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJhbnlcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrKGRhdGUpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRhdGUsIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrO1xuIiwiaW1wb3J0IHsgZ2V0SVNPV2Vla1llYXIgfSBmcm9tIFwiLi9nZXRJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWsubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNTpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mSVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCB5ZWFyID0gZ2V0SVNPV2Vla1llYXIoZGF0ZSk7XG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeSA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mSVNPV2Vla1llYXI7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkYXkgPSBfZGF0ZS5nZXREYXkoKTtcbiAgY29uc3QgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG5cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi9nZXRXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1llYXJcbiAqIEBjYXRlZ29yeSBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDUgd2l0aCBkZWZhdWx0IHNldHRpbmdzOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBTdW4gRGVjIDI2IDIwMDQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDVcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHdlZWtcbiAqIC8vIGFuZCA0IEphbnVhcnkgaXMgYWx3YXlzIGluIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB5ZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gIGNvbnN0IGZpcnN0V2VlayA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vlay5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IF9kYXRlID0gc3RhcnRPZldlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZXZWVrWWVhcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mWWVhcihuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDAwKSlcbiAqIC8vPT4gV2VkIEphbiAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IGNsZWFuRGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGUgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBfZGF0ZS5zZXRGdWxsWWVhcihjbGVhbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZlllYXI7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFN0b3JhZ2VIYW5kbGVyIGZyb20gJy4vc3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBmb3JtYXQsIGFkZERheXMgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gJy4vZGlzcGxheS5qcyc7XG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJztcblxuY2xhc3MgUHJvamVjdEhhbmRsZXIge1xuICAgIHN0YXRpYyBwcm9qZWN0c0FycmF5ID0gW11cblxuICAgIHN0YXRpYyBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0c0FycmF5LnB1c2gobmV3IFByb2plY3QobmFtZSkpXG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFRvZG8ocHJvamVjdEluZGV4ID0gMCkge1xuICAgICAgICB0aGlzLnByb2plY3RzQXJyYXlbcHJvamVjdEluZGV4XS50b2Rvcy5wdXNoKG5ldyBUb2RvKCkpXG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdEluZGV4KSB7XG4gICAgICAgIHRoaXMucHJvamVjdHNBcnJheS5zcGxpY2UocHJvamVjdEluZGV4LCAxKVxuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVUb2RvKHByb2plY3RJbmRleCwgdG9kb0luZGV4KSB7XG4gICAgICAgIHRoaXMucHJvamVjdHNBcnJheVtwcm9qZWN0SW5kZXhdLnRvZG9zLnNwbGljZSh0b2RvSW5kZXgsIDEpXG4gICAgfVxufVxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gXCJNeSBQcm9qZWN0XCIpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLnRvZG9zID0gW11cbiAgICB9XG59XG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlID0gXCJUb2RvIHRpdGxlXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBcIlRvZG8gZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICBkdWVEYXRlID0gXCJUb2RvIGR1ZURhdGVcIixcbiAgICAgICAgICAgICAgICBub3RlcyA9IFwiVG9kbyBub3Rlc1wiLFxuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0gXCJMb3dcIixcbiAgICAgICAgICAgICAgICBpc0RvbmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLmlzRG9uZSA9IGlzRG9uZVxuICAgIH1cblxuICAgIGVkaXRQcm9wZXJ0eShwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5ICE9PSBcInByaW9yaXR5XCIgJiYgcHJvcGVydHkgIT09IFwiaXNEb25lXCIpIHtcbiAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0gdmFsdWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZWlzRG9uZSgpIHtcbiAgICAgICAgdGhpcy5pc0RvbmUgPT09IGZhbHNlID8gdGhpcy5pc0RvbmUgPSB0cnVlIDogdGhpcy5pc0RvbmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0b2dnbGVQcmlvcml0eSgpIHtcbiAgICAgICAgc3dpdGNoKHRoaXMucHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGNhc2UgXCJMb3dcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gXCJOb3JtYWxcIlxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwiTm9ybWFsXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IFwiSGlnaFwiXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgXCJIaWdoXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wcmlvcml0eSA9IFwiTG93XCJcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBEYXRlSGFuZGxlciB7XG4gICAgZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICAgIHJldHVybiBmb3JtYXQoZGF0ZSwgXCJkbyBNTU1NIHl5eXlcIilcbiAgICB9XG5cbiAgICBzdGF0aWMgdG9tb3Jyb3coKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxuICAgICAgICBjb25zdCB0b21vcnJvdyA9IGFkZERheXModG9kYXksIDEpXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdCh0b21vcnJvdywgXCJkbyBNTU1NIHl5eXlcIilcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMTgwNDg3MDI4NF84M184XzgzXzMwXzRgLGZvcm1hdHRlZCkpXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRcbiAgICB9XG59XG5cbmRpc3BsYXlDb250cm9sbGVyLmNyZWF0ZU1haW5MYXlvdXQoKVxuXG5Qcm9qZWN0SGFuZGxlci5hZGRQcm9qZWN0KClcblByb2plY3RIYW5kbGVyLmFkZFByb2plY3QoXCJ0ZXN0cHJvamVjdDJcIilcblByb2plY3RIYW5kbGVyLmFkZFRvZG8oMClcblByb2plY3RIYW5kbGVyLmFkZFRvZG8oMSlcblByb2plY3RIYW5kbGVyLnByb2plY3RzQXJyYXlbMF0udG9kb3NbMF0uZWRpdFByb3BlcnR5KFwiZGVzY3JpcHRpb25cIiwgXCJmaXJzdCB0ZXN0XCIpXG5Qcm9qZWN0SGFuZGxlci5wcm9qZWN0c0FycmF5WzFdLnRvZG9zWzBdLmVkaXRQcm9wZXJ0eShcImRlc2NyaXB0aW9uXCIsIFwiYW5vdGhlciB0ZXN0XCIpXG5Qcm9qZWN0SGFuZGxlci5wcm9qZWN0c0FycmF5WzBdLnRvZG9zWzBdLmVkaXRQcm9wZXJ0eShcInRpdGxlXCIsIFwiZmlyc3QgdG9kbyBvbiBmaXJzdCBsaXN0XCIpXG5Qcm9qZWN0SGFuZGxlci5wcm9qZWN0c0FycmF5WzFdLnRvZG9zWzBdLmVkaXRQcm9wZXJ0eShcInRpdGxlXCIsIFwiZmlyc3QgdG9kbywgc2Vjb25kIGxpc3RcIilcblByb2plY3RIYW5kbGVyLnByb2plY3RzQXJyYXlbMF0udG9kb3NbMF0udG9nZ2xlUHJpb3JpdHkoKVxuUHJvamVjdEhhbmRsZXIucHJvamVjdHNBcnJheVswXS50b2Rvc1swXS50b2dnbGVQcmlvcml0eSgpXG5cblN0b3JhZ2VIYW5kbGVyLnNhdmVBbmRSZWJ1aWxkVG8oUHJvamVjdEhhbmRsZXIucHJvamVjdHNBcnJheSwgUHJvamVjdCwgVG9kbylcblxuUHJvamVjdEhhbmRsZXIucHJvamVjdHNBcnJheVswXS50b2Rvc1swXS50b2dnbGVpc0RvbmUoKVxuXG5kaXNwbGF5Q29udHJvbGxlci5yZW5kZXJQcm9qZWN0cyhQcm9qZWN0SGFuZGxlci5wcm9qZWN0c0FycmF5KVxuXG5mdW5jdGlvbiBhcHAoKSB7XG4gICAgbGV0IGlzUHJvamVjdFBhbmVsVmlzaWJsZSA9IDFcblxuICAgIGZ1bmN0aW9uIGF0dGFjaFByb2plY3RQYW5lbEJ0bkV2ZW50KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0UGFuZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWJ1dHRvblwiKVxuICAgICAgICBwcm9qZWN0UGFuZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByb2plY3RQYW5lbEV2ZW50KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2plY3RQYW5lbEV2ZW50KCkge1xuICAgICAgICBjb25zdCBsZWZ0UGFuZWxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1wYW5lbFwiKVxuICAgICAgICBsZWZ0UGFuZWxFbC5jbGFzc0xpc3QudG9nZ2xlKFwiaW52aXNpYmxlXCIpXG4gICAgICAgIGlzUHJvamVjdFBhbmVsVmlzaWJsZSA9PT0gMSA/IGlzUHJvamVjdFBhbmVsVmlzaWJsZSA9IDAgOiBpc1Byb2plY3RQYW5lbFZpc2libGUgPSAxXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDE4MDQ4NzAyODRfMTE5XzhfMTE5XzY0XzRgLGBwYW5lbCB2aXNpYmlsaXR5ICR7aXNQcm9qZWN0UGFuZWxWaXNpYmxlfWApKVxuXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGF0dGFjaFByb2plY3RUaWxlRXZlbnRzKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGlsZUVsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC10aWxlXCIpXG5cbiAgICAgICAgcHJvamVjdFRpbGVFbExpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIilcbiAgICAgICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJUb2RvcyhQcm9qZWN0SGFuZGxlci5wcm9qZWN0c0FycmF5LCBpbmRleClcbiAgICAgICAgICAgICAgICBhdHRhY2hUb2RvRXZlbnRzKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXR0YWNoVG9kb0V2ZW50cygpIHtcbiAgICAgICAgY29uc3QgdG9kb0VsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb1wiKVxuXG4gICAgICAgIHRvZG9FbExpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlZGl0LWJ0blwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9jb25zb2xlLmxvZyguLi5vb19vbyhgMTgwNDg3MDI4NF8xNDJfMjRfMTQyXzU4XzRgLFwib3BlbmluZyBlZGl0IGRpYWxvZ1wiKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZWxldGUtYnRuXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGRpc3BsYXlDb250cm9sbGVyLmdldEN1cnJlbnRQcm9qZWN0SW5kZXgoKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRvZG8gPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9qZWN0SGFuZGxlci5kZWxldGVUb2RvKGN1cnJlbnRQcm9qZWN0LCBjdXJyZW50VG9kbylcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlclRvZG9zKFByb2plY3RIYW5kbGVyLnByb2plY3RzQXJyYXksIGN1cnJlbnRQcm9qZWN0KVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH19KX0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXR0YWNoRGlhbG9nRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWJ1dHRvblwiKVxuICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgXG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEaWFsb2coaXNQcm9qZWN0UGFuZWxWaXNpYmxlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGF0dGFjaENsb3NlRGlhbG9nRXZlbnQoKSB7XG4gICAgICAgIGNvbnN0IGNsb3NlQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpYWxvZy1jbG9zZS1idXR0b25cIilcbiAgICAgICAgY29uc3QgZGlhbG9nRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpYWxvZ1wiKVxuXG4gICAgICAgIGNsb3NlQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovY29uc29sZS5sb2coLi4ub29fb28oYDE4MDQ4NzAyODRfMTY2XzEyXzE2Nl80MV80YCxcImNsb3NpbmcgZGlhbG9nXCIpKVxuICAgICAgICAgICAgZGlhbG9nRWwuY2xvc2UoKVxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgYXR0YWNoUHJvamVjdFRpbGVFdmVudHMoKVxuICAgIGF0dGFjaFRvZG9FdmVudHMoKVxuICAgIGF0dGFjaFByb2plY3RQYW5lbEJ0bkV2ZW50KClcbiAgICBhdHRhY2hEaWFsb2dFdmVudCgpXG4gICAgYXR0YWNoQ2xvc2VEaWFsb2dFdmVudCgpXG5cbn1cblxuYXBwKClcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovLyogYzggaWdub3JlIHN0YXJ0ICovLyogZXNsaW50LWRpc2FibGUgKi87ZnVuY3Rpb24gb29fY20oKXt0cnl7cmV0dXJuICgwLGV2YWwpKFwiZ2xvYmFsVGhpcy5fY29uc29sZV9uaW5qYVwiKSB8fCAoMCxldmFsKShcIi8qIGh0dHBzOi8vZ2l0aHViLmNvbS93YWxsYWJ5anMvY29uc29sZS1uaW5qYSNob3ctZG9lcy1pdC13b3JrICovJ3VzZSBzdHJpY3QnO3ZhciBfMHgxY2U4ZmQ9XzB4NWNhZTtmdW5jdGlvbiBfMHg1Y2FlKF8weDQ5ZGI5ZSxfMHhhOTgwOTkpe3ZhciBfMHgyMmNhZmE9XzB4MjJjYSgpO3JldHVybiBfMHg1Y2FlPWZ1bmN0aW9uKF8weDVjYWUzNixfMHgyZDJhZjIpe18weDVjYWUzNj1fMHg1Y2FlMzYtMHgxZDE7dmFyIF8weDJiOWU4MT1fMHgyMmNhZmFbXzB4NWNhZTM2XTtyZXR1cm4gXzB4MmI5ZTgxO30sXzB4NWNhZShfMHg0OWRiOWUsXzB4YTk4MDk5KTt9KGZ1bmN0aW9uKF8weDQ5YzZiYSxfMHgzODQxNjQpe3ZhciBfMHgyYzk3ODk9XzB4NWNhZSxfMHg0NjZiZDU9XzB4NDljNmJhKCk7d2hpbGUoISFbXSl7dHJ5e3ZhciBfMHg0Y2UzZDM9LXBhcnNlSW50KF8weDJjOTc4OSgweDI5YSkpLzB4MSooLXBhcnNlSW50KF8weDJjOTc4OSgweDI1NykpLzB4MikrLXBhcnNlSW50KF8weDJjOTc4OSgweDI2ZCkpLzB4MyooLXBhcnNlSW50KF8weDJjOTc4OSgweDFmNikpLzB4NCkrLXBhcnNlSW50KF8weDJjOTc4OSgweDJiMikpLzB4NSooLXBhcnNlSW50KF8weDJjOTc4OSgweDI0OCkpLzB4NikrcGFyc2VJbnQoXzB4MmM5Nzg5KDB4MmI5KSkvMHg3KigtcGFyc2VJbnQoXzB4MmM5Nzg5KDB4MjRjKSkvMHg4KSstcGFyc2VJbnQoXzB4MmM5Nzg5KDB4MjRhKSkvMHg5Ky1wYXJzZUludChfMHgyYzk3ODkoMHgyNzIpKS8weGErcGFyc2VJbnQoXzB4MmM5Nzg5KDB4MmI4KSkvMHhiKigtcGFyc2VJbnQoXzB4MmM5Nzg5KDB4MjlmKSkvMHhjKTtpZihfMHg0Y2UzZDM9PT1fMHgzODQxNjQpYnJlYWs7ZWxzZSBfMHg0NjZiZDVbJ3B1c2gnXShfMHg0NjZiZDVbJ3NoaWZ0J10oKSk7fWNhdGNoKF8weDUwNzliYil7XzB4NDY2YmQ1WydwdXNoJ10oXzB4NDY2YmQ1WydzaGlmdCddKCkpO319fShfMHgyMmNhLDB4ZDM0NTUpKTt2YXIgaj1PYmplY3RbXzB4MWNlOGZkKDB4Mjk0KV0sSD1PYmplY3RbXzB4MWNlOGZkKDB4MjJiKV0sRz1PYmplY3RbXzB4MWNlOGZkKDB4MjdkKV0sZWU9T2JqZWN0W18weDFjZThmZCgweDIyOSldLHRlPU9iamVjdFtfMHgxY2U4ZmQoMHgxZWMpXSxuZT1PYmplY3RbXzB4MWNlOGZkKDB4MjgyKV1bJ2hhc093blByb3BlcnR5J10scmU9KF8weDQyMmJhNCxfMHhiMTcyM2EsXzB4NTYxZDA4LF8weDFjMjAyZCk9Pnt2YXIgXzB4NWNlYzcyPV8weDFjZThmZDtpZihfMHhiMTcyM2EmJnR5cGVvZiBfMHhiMTcyM2E9PV8weDVjZWM3MigweDJhNSl8fHR5cGVvZiBfMHhiMTcyM2E9PSdmdW5jdGlvbicpe2ZvcihsZXQgXzB4MTE2M2RkIG9mIGVlKF8weGIxNzIzYSkpIW5lWydjYWxsJ10oXzB4NDIyYmE0LF8weDExNjNkZCkmJl8weDExNjNkZCE9PV8weDU2MWQwOCYmSChfMHg0MjJiYTQsXzB4MTE2M2RkLHsnZ2V0JzooKT0+XzB4YjE3MjNhW18weDExNjNkZF0sJ2VudW1lcmFibGUnOiEoXzB4MWMyMDJkPUcoXzB4YjE3MjNhLF8weDExNjNkZCkpfHxfMHgxYzIwMmRbXzB4NWNlYzcyKDB4Mjg0KV19KTt9cmV0dXJuIF8weDQyMmJhNDt9LHg9KF8weDJmYTdhNyxfMHg1NjBlMWUsXzB4NGEyY2I4KT0+KF8weDRhMmNiOD1fMHgyZmE3YTchPW51bGw/aih0ZShfMHgyZmE3YTcpKTp7fSxyZShfMHg1NjBlMWV8fCFfMHgyZmE3YTd8fCFfMHgyZmE3YTdbJ19fZXMnKydNb2R1bGUnXT9IKF8weDRhMmNiOCxfMHgxY2U4ZmQoMHgyODApLHsndmFsdWUnOl8weDJmYTdhNywnZW51bWVyYWJsZSc6ITB4MH0pOl8weDRhMmNiOCxfMHgyZmE3YTcpKSxYPWNsYXNze2NvbnN0cnVjdG9yKF8weDIwYTcwZCxfMHg0NGFmMGQsXzB4NWY1NmQwLF8weDVmNTg4ZixfMHgyYTI1NDcpe3ZhciBfMHg1OWQ3ODI9XzB4MWNlOGZkO3RoaXNbJ2dsb2JhbCddPV8weDIwYTcwZCx0aGlzW18weDU5ZDc4MigweDIxNildPV8weDQ0YWYwZCx0aGlzWydwb3J0J109XzB4NWY1NmQwLHRoaXNbJ25vZGVNb2R1bGVzJ109XzB4NWY1ODhmLHRoaXNbJ2RvY2tlcml6ZWRBcHAnXT1fMHgyYTI1NDcsdGhpc1tfMHg1OWQ3ODIoMHgyNDApXT0hMHgwLHRoaXNbXzB4NTlkNzgyKDB4MjFjKV09ITB4MCx0aGlzW18weDU5ZDc4MigweDFlMCldPSEweDEsdGhpc1tfMHg1OWQ3ODIoMHgyNDIpXT0hMHgxLHRoaXNbXzB4NTlkNzgyKDB4MjAwKV09XzB4MjBhNzBkW18weDU5ZDc4MigweDI4ZSldPy5bJ2VudiddPy5bXzB4NTlkNzgyKDB4MjZhKV09PT1fMHg1OWQ3ODIoMHgyMzgpLHRoaXNbXzB4NTlkNzgyKDB4MjYyKV09IXRoaXNbJ2dsb2JhbCddW18weDU5ZDc4MigweDI4ZSldPy5bJ3ZlcnNpb25zJ10/LltfMHg1OWQ3ODIoMHgxZjUpXSYmIXRoaXNbXzB4NTlkNzgyKDB4MjAwKV0sdGhpc1tfMHg1OWQ3ODIoMHgyMTMpXT1udWxsLHRoaXNbXzB4NTlkNzgyKDB4MmJhKV09MHgwLHRoaXNbXzB4NTlkNzgyKDB4MWQ1KV09MHgxNCx0aGlzW18weDU5ZDc4MigweDI2MSldPV8weDU5ZDc4MigweDI1OSksdGhpc1snX3NlbmRFcnJvck1lc3NhZ2UnXT0odGhpc1snX2luQnJvd3NlciddPydDb25zb2xlXFxcXHgyME5pbmphXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBzZW5kXFxcXHgyMGxvZ3MsXFxcXHgyMHJlZnJlc2hpbmdcXFxceDIwdGhlXFxcXHgyMHBhZ2VcXFxceDIwbWF5XFxcXHgyMGhlbHA7XFxcXHgyMGFsc29cXFxceDIwc2VlXFxcXHgyMCc6XzB4NTlkNzgyKDB4MjQ3KSkrdGhpc1tfMHg1OWQ3ODIoMHgyNjEpXTt9YXN5bmNbXzB4MWNlOGZkKDB4MjMwKV0oKXt2YXIgXzB4M2NkZDBlPV8weDFjZThmZDtpZih0aGlzW18weDNjZGQwZSgweDIxMyldKXJldHVybiB0aGlzW18weDNjZGQwZSgweDIxMyldO2xldCBfMHgzNGVjZjI7aWYodGhpc1tfMHgzY2RkMGUoMHgyNjIpXXx8dGhpc1snX2luTmV4dEVkZ2UnXSlfMHgzNGVjZjI9dGhpc1tfMHgzY2RkMGUoMHgyYjcpXVtfMHgzY2RkMGUoMHgyMTEpXTtlbHNle2lmKHRoaXNbXzB4M2NkZDBlKDB4MmI3KV1bXzB4M2NkZDBlKDB4MjhlKV0/LltfMHgzY2RkMGUoMHgxZmIpXSlfMHgzNGVjZjI9dGhpc1tfMHgzY2RkMGUoMHgyYjcpXVtfMHgzY2RkMGUoMHgyOGUpXT8uW18weDNjZGQwZSgweDFmYildO2Vsc2UgdHJ5e2xldCBfMHgyZGM0ZmU9YXdhaXQgaW1wb3J0KF8weDNjZGQwZSgweDI5YikpO18weDM0ZWNmMj0oYXdhaXQgaW1wb3J0KChhd2FpdCBpbXBvcnQoXzB4M2NkZDBlKDB4MjMzKSkpW18weDNjZGQwZSgweDI2YildKF8weDJkYzRmZVtfMHgzY2RkMGUoMHgyYjApXSh0aGlzW18weDNjZGQwZSgweDFkMildLF8weDNjZGQwZSgweDIyYSkpKVtfMHgzY2RkMGUoMHgyNzApXSgpKSlbXzB4M2NkZDBlKDB4MjgwKV07fWNhdGNoe3RyeXtfMHgzNGVjZjI9cmVxdWlyZShyZXF1aXJlKF8weDNjZGQwZSgweDI5YikpWydqb2luJ10odGhpc1snbm9kZU1vZHVsZXMnXSwnd3MnKSk7fWNhdGNoe3Rocm93IG5ldyBFcnJvcignZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGZpbmRcXFxceDIwYW5kXFxcXHgyMGxvYWRcXFxceDIwV2ViU29ja2V0Jyk7fX19cmV0dXJuIHRoaXNbXzB4M2NkZDBlKDB4MjEzKV09XzB4MzRlY2YyLF8weDM0ZWNmMjt9W18weDFjZThmZCgweDI2NSldKCl7dmFyIF8weDIyNjk2YT1fMHgxY2U4ZmQ7dGhpc1tfMHgyMjY5NmEoMHgyNDIpXXx8dGhpc1snX2Nvbm5lY3RlZCddfHx0aGlzW18weDIyNjk2YSgweDJiYSldPj10aGlzW18weDIyNjk2YSgweDFkNSldfHwodGhpc1tfMHgyMjY5NmEoMHgyMWMpXT0hMHgxLHRoaXNbJ19jb25uZWN0aW5nJ109ITB4MCx0aGlzW18weDIyNjk2YSgweDJiYSldKyssdGhpc1snX3dzJ109bmV3IFByb21pc2UoKF8weDMyMjQ2YSxfMHgxMTlkNTQpPT57dmFyIF8weDMwNjMxOT1fMHgyMjY5NmE7dGhpc1tfMHgzMDYzMTkoMHgyMzApXSgpWyd0aGVuJ10oXzB4ZDJmY2I2PT57dmFyIF8weDkyOGFhNz1fMHgzMDYzMTk7bGV0IF8weGY1MjMyND1uZXcgXzB4ZDJmY2I2KF8weDkyOGFhNygweDFlZSkrKCF0aGlzW18weDkyOGFhNygweDI2MildJiZ0aGlzW18weDkyOGFhNygweDI1ZSldP18weDkyOGFhNygweDIxOCk6dGhpc1tfMHg5MjhhYTcoMHgyMTYpXSkrJzonK3RoaXNbXzB4OTI4YWE3KDB4MjBmKV0pO18weGY1MjMyNFsnb25lcnJvciddPSgpPT57dmFyIF8weDJkZWFkNT1fMHg5MjhhYTc7dGhpc1snX2FsbG93ZWRUb1NlbmQnXT0hMHgxLHRoaXNbXzB4MmRlYWQ1KDB4MjI0KV0oXzB4ZjUyMzI0KSx0aGlzWydfYXR0ZW1wdFRvUmVjb25uZWN0U2hvcnRseSddKCksXzB4MTE5ZDU0KG5ldyBFcnJvcihfMHgyZGVhZDUoMHgxZTYpKSk7fSxfMHhmNTIzMjRbXzB4OTI4YWE3KDB4MWRkKV09KCk9Pnt2YXIgXzB4NWM3ZmE1PV8weDkyOGFhNzt0aGlzW18weDVjN2ZhNSgweDI2MildfHxfMHhmNTIzMjRbXzB4NWM3ZmE1KDB4MjU1KV0mJl8weGY1MjMyNFtfMHg1YzdmYTUoMHgyNTUpXVtfMHg1YzdmYTUoMHgyNjYpXSYmXzB4ZjUyMzI0W18weDVjN2ZhNSgweDI1NSldW18weDVjN2ZhNSgweDI2NildKCksXzB4MzIyNDZhKF8weGY1MjMyNCk7fSxfMHhmNTIzMjRbXzB4OTI4YWE3KDB4MWQ2KV09KCk9Pnt2YXIgXzB4MzExYzZmPV8weDkyOGFhNzt0aGlzW18weDMxMWM2ZigweDIxYyldPSEweDAsdGhpc1tfMHgzMTFjNmYoMHgyMjQpXShfMHhmNTIzMjQpLHRoaXNbXzB4MzExYzZmKDB4MjRkKV0oKTt9LF8weGY1MjMyNFtfMHg5MjhhYTcoMHgxZjkpXT1fMHgzMTI3Nzg9Pnt2YXIgXzB4MmFmN2NmPV8weDkyOGFhNzt0cnl7XzB4MzEyNzc4JiZfMHgzMTI3NzhbXzB4MmFmN2NmKDB4MmExKV0mJnRoaXNbXzB4MmFmN2NmKDB4MjYyKV0mJkpTT05bJ3BhcnNlJ10oXzB4MzEyNzc4W18weDJhZjdjZigweDJhMSldKVsnbWV0aG9kJ109PT1fMHgyYWY3Y2YoMHgyMDMpJiZ0aGlzW18weDJhZjdjZigweDJiNyldW18weDJhZjdjZigweDIwOSldW18weDJhZjdjZigweDIwMyldKCk7fWNhdGNoe319O30pW18weDMwNjMxOSgweDI2OSldKF8weDNiMGNmMz0+KHRoaXNbXzB4MzA2MzE5KDB4MWUwKV09ITB4MCx0aGlzW18weDMwNjMxOSgweDI0MildPSEweDEsdGhpc1tfMHgzMDYzMTkoMHgyMWMpXT0hMHgxLHRoaXNbXzB4MzA2MzE5KDB4MjQwKV09ITB4MCx0aGlzWydfY29ubmVjdEF0dGVtcHRDb3VudCddPTB4MCxfMHgzYjBjZjMpKVtfMHgzMDYzMTkoMHgyMTUpXShfMHgxZWIzOGY9Pih0aGlzWydfY29ubmVjdGVkJ109ITB4MSx0aGlzWydfY29ubmVjdGluZyddPSEweDEsY29uc29sZVsnd2FybiddKF8weDMwNjMxOSgweDFkYSkrdGhpc1tfMHgzMDYzMTkoMHgyNjEpXSksXzB4MTE5ZDU0KG5ldyBFcnJvcignZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdDpcXFxceDIwJysoXzB4MWViMzhmJiZfMHgxZWIzOGZbXzB4MzA2MzE5KDB4MjU0KV0pKSkpKTt9KSk7fVtfMHgxY2U4ZmQoMHgyMjQpXShfMHg1NzA2NGUpe3ZhciBfMHgzODVkMGM9XzB4MWNlOGZkO3RoaXNbJ19jb25uZWN0ZWQnXT0hMHgxLHRoaXNbXzB4Mzg1ZDBjKDB4MjQyKV09ITB4MTt0cnl7XzB4NTcwNjRlWydvbmNsb3NlJ109bnVsbCxfMHg1NzA2NGVbXzB4Mzg1ZDBjKDB4MjM2KV09bnVsbCxfMHg1NzA2NGVbXzB4Mzg1ZDBjKDB4MWRkKV09bnVsbDt9Y2F0Y2h7fXRyeXtfMHg1NzA2NGVbJ3JlYWR5U3RhdGUnXTwweDImJl8weDU3MDY0ZVtfMHgzODVkMGMoMHgyYjMpXSgpO31jYXRjaHt9fVtfMHgxY2U4ZmQoMHgyNGQpXSgpe3ZhciBfMHgxOTRmOGE9XzB4MWNlOGZkO2NsZWFyVGltZW91dCh0aGlzW18weDE5NGY4YSgweDI4YildKSwhKHRoaXNbXzB4MTk0ZjhhKDB4MmJhKV0+PXRoaXNbXzB4MTk0ZjhhKDB4MWQ1KV0pJiYodGhpc1tfMHgxOTRmOGEoMHgyOGIpXT1zZXRUaW1lb3V0KCgpPT57dmFyIF8weDYxY2Y1ZT1fMHgxOTRmOGE7dGhpc1tfMHg2MWNmNWUoMHgxZTApXXx8dGhpc1snX2Nvbm5lY3RpbmcnXXx8KHRoaXNbXzB4NjFjZjVlKDB4MjY1KV0oKSx0aGlzW18weDYxY2Y1ZSgweDIxMCldPy5bXzB4NjFjZjVlKDB4MjE1KV0oKCk9PnRoaXNbXzB4NjFjZjVlKDB4MjRkKV0oKSkpO30sMHgxZjQpLHRoaXNbXzB4MTk0ZjhhKDB4MjhiKV1bJ3VucmVmJ10mJnRoaXNbXzB4MTk0ZjhhKDB4MjhiKV1bJ3VucmVmJ10oKSk7fWFzeW5jW18weDFjZThmZCgweDI3YildKF8weDQzMGJmNCl7dmFyIF8weDQ1OWFiYz1fMHgxY2U4ZmQ7dHJ5e2lmKCF0aGlzW18weDQ1OWFiYygweDI0MCldKXJldHVybjt0aGlzW18weDQ1OWFiYygweDIxYyldJiZ0aGlzW18weDQ1OWFiYygweDI2NSldKCksKGF3YWl0IHRoaXNbXzB4NDU5YWJjKDB4MjEwKV0pW18weDQ1OWFiYygweDI3YildKEpTT05bXzB4NDU5YWJjKDB4MWRjKV0oXzB4NDMwYmY0KSk7fWNhdGNoKF8weDg3MGQ5Myl7Y29uc29sZVsnd2FybiddKHRoaXNbJ19zZW5kRXJyb3JNZXNzYWdlJ10rJzpcXFxceDIwJysoXzB4ODcwZDkzJiZfMHg4NzBkOTNbXzB4NDU5YWJjKDB4MjU0KV0pKSx0aGlzW18weDQ1OWFiYygweDI0MCldPSEweDEsdGhpc1tfMHg0NTlhYmMoMHgyNGQpXSgpO319fTtmdW5jdGlvbiBiKF8weDU2ODNkNyxfMHgyZTEzNDUsXzB4NTNjZWU4LF8weDU2ZjEyNCxfMHg1ZTE2MDMsXzB4NDM2ODdlKXt2YXIgXzB4MmFmODYxPV8weDFjZThmZDtsZXQgXzB4MTQ4MGZkPV8weDUzY2VlOFtfMHgyYWY4NjEoMHgyYmIpXSgnLCcpW18weDJhZjg2MSgweDFmZSldKF8weDUyMTQ1Nz0+e3ZhciBfMHgyYmJjY2Y9XzB4MmFmODYxO3RyeXtfMHg1NjgzZDdbXzB4MmJiY2NmKDB4MjNkKV18fCgoXzB4NWUxNjAzPT09XzB4MmJiY2NmKDB4MWQ4KXx8XzB4NWUxNjAzPT09J3JlbWl4J3x8XzB4NWUxNjAzPT09J2FzdHJvJ3x8XzB4NWUxNjAzPT09XzB4MmJiY2NmKDB4MjE3KSkmJihfMHg1ZTE2MDMrPSFfMHg1NjgzZDdbXzB4MmJiY2NmKDB4MjhlKV0/LltfMHgyYmJjY2YoMHgyMDQpXT8uW18weDJiYmNjZigweDFmNSldJiZfMHg1NjgzZDdbXzB4MmJiY2NmKDB4MjhlKV0/LltfMHgyYmJjY2YoMHgxZWIpXT8uWydORVhUX1JVTlRJTUUnXSE9PV8weDJiYmNjZigweDIzOCk/XzB4MmJiY2NmKDB4MjA3KTonXFxcXHgyMHNlcnZlcicpLF8weDU2ODNkN1snX2NvbnNvbGVfbmluamFfc2Vzc2lvbiddPXsnaWQnOituZXcgRGF0ZSgpLCd0b29sJzpfMHg1ZTE2MDN9KTtsZXQgXzB4MmVhY2Q0PW5ldyBYKF8weDU2ODNkNyxfMHgyZTEzNDUsXzB4NTIxNDU3LF8weDU2ZjEyNCxfMHg0MzY4N2UpO3JldHVybiBfMHgyZWFjZDRbXzB4MmJiY2NmKDB4MjdiKV1bXzB4MmJiY2NmKDB4MjNhKV0oXzB4MmVhY2Q0KTt9Y2F0Y2goXzB4NWE3NTcpe3JldHVybiBjb25zb2xlW18weDJiYmNjZigweDI5ZSldKCdsb2dnZXJcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMGNvbm5lY3RcXFxceDIwdG9cXFxceDIwaG9zdCcsXzB4NWE3NTcmJl8weDVhNzU3W18weDJiYmNjZigweDI1NCldKSwoKT0+e307fX0pO3JldHVybiBfMHg2MTBiYzE9Pl8weDE0ODBmZFtfMHgyYWY4NjEoMHgyNWYpXShfMHgzZTViNWY9Pl8weDNlNWI1ZihfMHg2MTBiYzEpKTt9ZnVuY3Rpb24gVyhfMHgxZWRkY2Qpe3ZhciBfMHgyNWFhYzk9XzB4MWNlOGZkO2xldCBfMHgyZWJiMWE9ZnVuY3Rpb24oXzB4MTFjNTlkLF8weDMyZGNjNSl7cmV0dXJuIF8weDMyZGNjNS1fMHgxMWM1OWQ7fSxfMHhjNDM1Y2M7aWYoXzB4MWVkZGNkW18weDI1YWFjOSgweDFlMyldKV8weGM0MzVjYz1mdW5jdGlvbigpe3ZhciBfMHgzNDA4YjI9XzB4MjVhYWM5O3JldHVybiBfMHgxZWRkY2RbXzB4MzQwOGIyKDB4MWUzKV1bXzB4MzQwOGIyKDB4Mjg1KV0oKTt9O2Vsc2V7aWYoXzB4MWVkZGNkW18weDI1YWFjOSgweDI4ZSldJiZfMHgxZWRkY2RbXzB4MjVhYWM5KDB4MjhlKV1bJ2hydGltZSddJiZfMHgxZWRkY2RbJ3Byb2Nlc3MnXT8uWydlbnYnXT8uW18weDI1YWFjOSgweDI2YSldIT09XzB4MjVhYWM5KDB4MjM4KSlfMHhjNDM1Y2M9ZnVuY3Rpb24oKXt2YXIgXzB4NjllODJiPV8weDI1YWFjOTtyZXR1cm4gXzB4MWVkZGNkW18weDY5ZTgyYigweDI4ZSldW18weDY5ZTgyYigweDIwMSldKCk7fSxfMHgyZWJiMWE9ZnVuY3Rpb24oXzB4NWE0NjNhLF8weDNjMTk1MSl7cmV0dXJuIDB4M2U4KihfMHgzYzE5NTFbMHgwXS1fMHg1YTQ2M2FbMHgwXSkrKF8weDNjMTk1MVsweDFdLV8weDVhNDYzYVsweDFdKS8weGY0MjQwO307ZWxzZSB0cnl7bGV0IHtwZXJmb3JtYW5jZTpfMHg1YWE3NWR9PXJlcXVpcmUoXzB4MjVhYWM5KDB4MWYyKSk7XzB4YzQzNWNjPWZ1bmN0aW9uKCl7dmFyIF8weGRhNzFkNz1fMHgyNWFhYzk7cmV0dXJuIF8weDVhYTc1ZFtfMHhkYTcxZDcoMHgyODUpXSgpO307fWNhdGNoe18weGM0MzVjYz1mdW5jdGlvbigpe3JldHVybituZXcgRGF0ZSgpO307fX1yZXR1cm57J2VsYXBzZWQnOl8weDJlYmIxYSwndGltZVN0YW1wJzpfMHhjNDM1Y2MsJ25vdyc6KCk9PkRhdGVbXzB4MjVhYWM5KDB4Mjg1KV0oKX07fWZ1bmN0aW9uIEooXzB4NDZiNWU4LF8weDJmYzYyMSxfMHgxZWE4YTgpe3ZhciBfMHg1N2Q3NWI9XzB4MWNlOGZkO2lmKF8weDQ2YjVlOFtfMHg1N2Q3NWIoMHgyOGEpXSE9PXZvaWQgMHgwKXJldHVybiBfMHg0NmI1ZThbXzB4NTdkNzViKDB4MjhhKV07bGV0IF8weDJlNzI0MT1fMHg0NmI1ZThbJ3Byb2Nlc3MnXT8uW18weDU3ZDc1YigweDIwNCldPy5bXzB4NTdkNzViKDB4MWY1KV18fF8weDQ2YjVlOFtfMHg1N2Q3NWIoMHgyOGUpXT8uW18weDU3ZDc1YigweDFlYildPy5bXzB4NTdkNzViKDB4MjZhKV09PT1fMHg1N2Q3NWIoMHgyMzgpO3JldHVybiBfMHgyZTcyNDEmJl8weDFlYThhOD09PV8weDU3ZDc1YigweDFmMCk/XzB4NDZiNWU4W18weDU3ZDc1YigweDI4YSldPSEweDE6XzB4NDZiNWU4W18weDU3ZDc1YigweDI4YSldPV8weDJlNzI0MXx8IV8weDJmYzYyMXx8XzB4NDZiNWU4Wydsb2NhdGlvbiddPy5bXzB4NTdkNzViKDB4Mjg3KV0mJl8weDJmYzYyMVsnaW5jbHVkZXMnXShfMHg0NmI1ZThbXzB4NTdkNzViKDB4MjA5KV1bXzB4NTdkNzViKDB4Mjg3KV0pLF8weDQ2YjVlOFtfMHg1N2Q3NWIoMHgyOGEpXTt9ZnVuY3Rpb24gWShfMHg1Mjk0M2MsXzB4Mzk2ODY1LF8weDMyNjdkMixfMHgzZWY5ZDgpe3ZhciBfMHgxYTYzMzI9XzB4MWNlOGZkO18weDUyOTQzYz1fMHg1Mjk0M2MsXzB4Mzk2ODY1PV8weDM5Njg2NSxfMHgzMjY3ZDI9XzB4MzI2N2QyLF8weDNlZjlkOD1fMHgzZWY5ZDg7bGV0IF8weDI0YmFlOT1XKF8weDUyOTQzYyksXzB4NGIxMDlmPV8weDI0YmFlOVtfMHgxYTYzMzIoMHgyNTApXSxfMHgyYTM5OTg9XzB4MjRiYWU5W18weDFhNjMzMigweDI2YyldO2NsYXNzIF8weDEwODRiNXtjb25zdHJ1Y3Rvcigpe3ZhciBfMHgxZDA0MzU9XzB4MWE2MzMyO3RoaXNbXzB4MWQwNDM1KDB4MjdmKV09L14oPyEoPzpkb3xpZnxpbnxmb3J8bGV0fG5ld3x0cnl8dmFyfGNhc2V8ZWxzZXxlbnVtfGV2YWx8ZmFsc2V8bnVsbHx0aGlzfHRydWV8dm9pZHx3aXRofGJyZWFrfGNhdGNofGNsYXNzfGNvbnN0fHN1cGVyfHRocm93fHdoaWxlfHlpZWxkfGRlbGV0ZXxleHBvcnR8aW1wb3J0fHB1YmxpY3xyZXR1cm58c3RhdGljfHN3aXRjaHx0eXBlb2Z8ZGVmYXVsdHxleHRlbmRzfGZpbmFsbHl8cGFja2FnZXxwcml2YXRlfGNvbnRpbnVlfGRlYnVnZ2VyfGZ1bmN0aW9ufGFyZ3VtZW50c3xpbnRlcmZhY2V8cHJvdGVjdGVkfGltcGxlbWVudHN8aW5zdGFuY2VvZikkKVtfJGEtekEtWlxcXFx4QTAtXFxcXHVGRkZGXVtfJGEtekEtWjAtOVxcXFx4QTAtXFxcXHVGRkZGXSokLyx0aGlzW18weDFkMDQzNSgweDJhNCldPS9eKDB8WzEtOV1bMC05XSopJC8sdGhpc1tfMHgxZDA0MzUoMHgyYTcpXT0vJyhbXlxcXFxcXFxcJ118XFxcXFxcXFwnKSonLyx0aGlzW18weDFkMDQzNSgweDFlNyldPV8weDUyOTQzY1tfMHgxZDA0MzUoMHgxZDEpXSx0aGlzW18weDFkMDQzNSgweDI1YyldPV8weDUyOTQzY1snSFRNTEFsbENvbGxlY3Rpb24nXSx0aGlzWydfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJ109T2JqZWN0W18weDFkMDQzNSgweDI3ZCldLHRoaXNbXzB4MWQwNDM1KDB4MjBiKV09T2JqZWN0W18weDFkMDQzNSgweDIyOSldLHRoaXNbXzB4MWQwNDM1KDB4MjI4KV09XzB4NTI5NDNjW18weDFkMDQzNSgweDI0OSldLHRoaXNbXzB4MWQwNDM1KDB4MjQ0KV09UmVnRXhwW18weDFkMDQzNSgweDI4MildWyd0b1N0cmluZyddLHRoaXNbXzB4MWQwNDM1KDB4Mjc5KV09RGF0ZVtfMHgxZDA0MzUoMHgyODIpXVtfMHgxZDA0MzUoMHgyNzApXTt9W18weDFhNjMzMigweDFkMyldKF8weDRlMTkxZSxfMHhmN2IxMDUsXzB4ZTNkZDgxLF8weDFiMjk5MSl7dmFyIF8weDE3NWM1ND1fMHgxYTYzMzIsXzB4MWMwNTY2PXRoaXMsXzB4MzE5YzE5PV8weGUzZGQ4MVtfMHgxNzVjNTQoMHgyNzQpXTtmdW5jdGlvbiBfMHgxNzMxODUoXzB4NGU2NzhmLF8weDJlMmNkZixfMHgxOWZiMmIpe3ZhciBfMHg3YTExN2M9XzB4MTc1YzU0O18weDJlMmNkZltfMHg3YTExN2MoMHgyNTEpXT1fMHg3YTExN2MoMHgxZjEpLF8weDJlMmNkZltfMHg3YTExN2MoMHgyYWUpXT1fMHg0ZTY3OGZbXzB4N2ExMTdjKDB4MjU0KV0sXzB4MWQ5M2NhPV8weDE5ZmIyYltfMHg3YTExN2MoMHgxZjUpXVtfMHg3YTExN2MoMHgxZmYpXSxfMHgxOWZiMmJbXzB4N2ExMTdjKDB4MWY1KV1bXzB4N2ExMTdjKDB4MWZmKV09XzB4MmUyY2RmLF8weDFjMDU2NltfMHg3YTExN2MoMHgyNzgpXShfMHgyZTJjZGYsXzB4MTlmYjJiKTt9dHJ5e18weGUzZGQ4MVtfMHgxNzVjNTQoMHgyOTYpXSsrLF8weGUzZGQ4MVtfMHgxNzVjNTQoMHgyNzQpXSYmXzB4ZTNkZDgxW18weDE3NWM1NCgweDI4NildW18weDE3NWM1NCgweDJiMSldKF8weGY3YjEwNSk7dmFyIF8weDJmNDhlYyxfMHg0ZjgwZmIsXzB4NGZmOWEwLF8weDQ4NTlkMixfMHgxZDMzMTI9W10sXzB4NWQyMzE2PVtdLF8weDE4NWU1YixfMHg1MzYyYmE9dGhpc1tfMHgxNzVjNTQoMHgxZmMpXShfMHhmN2IxMDUpLF8weDNmOGNmNz1fMHg1MzYyYmE9PT1fMHgxNzVjNTQoMHgyYmUpLF8weDFmY2JlMT0hMHgxLF8weDI2OTNjYz1fMHg1MzYyYmE9PT0nZnVuY3Rpb24nLF8weDMwOTljZj10aGlzW18weDE3NWM1NCgweDIyZildKF8weDUzNjJiYSksXzB4Mzc5NDRlPXRoaXNbXzB4MTc1YzU0KDB4MWUyKV0oXzB4NTM2MmJhKSxfMHgzY2RhMGY9XzB4MzA5OWNmfHxfMHgzNzk0NGUsXzB4NTE3MDJiPXt9LF8weDU3MjM5Nj0weDAsXzB4NDY3MjU5PSEweDEsXzB4MWQ5M2NhLF8weGZmMTI1Zj0vXigoWzEtOV17MX1bMC05XSopfDApJC87aWYoXzB4ZTNkZDgxWydkZXB0aCddKXtpZihfMHgzZjhjZjcpe2lmKF8weDRmODBmYj1fMHhmN2IxMDVbJ2xlbmd0aCddLF8weDRmODBmYj5fMHhlM2RkODFbXzB4MTc1YzU0KDB4MjUyKV0pe2ZvcihfMHg0ZmY5YTA9MHgwLF8weDQ4NTlkMj1fMHhlM2RkODFbXzB4MTc1YzU0KDB4MjUyKV0sXzB4MmY0OGVjPV8weDRmZjlhMDtfMHgyZjQ4ZWM8XzB4NDg1OWQyO18weDJmNDhlYysrKV8weDVkMjMxNltfMHgxNzVjNTQoMHgyYjEpXShfMHgxYzA1NjZbXzB4MTc1YzU0KDB4MjRiKV0oXzB4MWQzMzEyLF8weGY3YjEwNSxfMHg1MzYyYmEsXzB4MmY0OGVjLF8weGUzZGQ4MSkpO18weDRlMTkxZVtfMHgxNzVjNTQoMHgyN2EpXT0hMHgwO31lbHNle2ZvcihfMHg0ZmY5YTA9MHgwLF8weDQ4NTlkMj1fMHg0ZjgwZmIsXzB4MmY0OGVjPV8weDRmZjlhMDtfMHgyZjQ4ZWM8XzB4NDg1OWQyO18weDJmNDhlYysrKV8weDVkMjMxNlsncHVzaCddKF8weDFjMDU2NltfMHgxNzVjNTQoMHgyNGIpXShfMHgxZDMzMTIsXzB4ZjdiMTA1LF8weDUzNjJiYSxfMHgyZjQ4ZWMsXzB4ZTNkZDgxKSk7fV8weGUzZGQ4MVsnYXV0b0V4cGFuZFByb3BlcnR5Q291bnQnXSs9XzB4NWQyMzE2W18weDE3NWM1NCgweDIzYildO31pZighKF8weDUzNjJiYT09PV8weDE3NWM1NCgweDIyMSl8fF8weDUzNjJiYT09PV8weDE3NWM1NCgweDFkMSkpJiYhXzB4MzA5OWNmJiZfMHg1MzYyYmEhPT1fMHgxNzVjNTQoMHgyNzcpJiZfMHg1MzYyYmEhPT1fMHgxNzVjNTQoMHgyNjMpJiZfMHg1MzYyYmEhPT1fMHgxNzVjNTQoMHgyYWMpKXt2YXIgXzB4NjRiOGE1PV8weDFiMjk5MVtfMHgxNzVjNTQoMHgyOWMpXXx8XzB4ZTNkZDgxWydwcm9wcyddO2lmKHRoaXNbXzB4MTc1YzU0KDB4Mjg5KV0oXzB4ZjdiMTA1KT8oXzB4MmY0OGVjPTB4MCxfMHhmN2IxMDVbXzB4MTc1YzU0KDB4MjVmKV0oZnVuY3Rpb24oXzB4NGQ1NjgwKXt2YXIgXzB4MzljYWQxPV8weDE3NWM1NDtpZihfMHg1NzIzOTYrKyxfMHhlM2RkODFbJ2F1dG9FeHBhbmRQcm9wZXJ0eUNvdW50J10rKyxfMHg1NzIzOTY+XzB4NjRiOGE1KXtfMHg0NjcyNTk9ITB4MDtyZXR1cm47fWlmKCFfMHhlM2RkODFbXzB4MzljYWQxKDB4MjU4KV0mJl8weGUzZGQ4MVtfMHgzOWNhZDEoMHgyNzQpXSYmXzB4ZTNkZDgxW18weDM5Y2FkMSgweDI2ZSldPl8weGUzZGQ4MVtfMHgzOWNhZDEoMHgxZDkpXSl7XzB4NDY3MjU5PSEweDA7cmV0dXJuO31fMHg1ZDIzMTZbXzB4MzljYWQxKDB4MmIxKV0oXzB4MWMwNTY2W18weDM5Y2FkMSgweDI0YildKF8weDFkMzMxMixfMHhmN2IxMDUsXzB4MzljYWQxKDB4MjBlKSxfMHgyZjQ4ZWMrKyxfMHhlM2RkODEsZnVuY3Rpb24oXzB4NDkxZjVlKXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gXzB4NDkxZjVlO307fShfMHg0ZDU2ODApKSk7fSkpOnRoaXNbXzB4MTc1YzU0KDB4MjUzKV0oXzB4ZjdiMTA1KSYmXzB4ZjdiMTA1Wydmb3JFYWNoJ10oZnVuY3Rpb24oXzB4NzIwYTI4LF8weDFiYTZhMCl7dmFyIF8weDM0N2M4MD1fMHgxNzVjNTQ7aWYoXzB4NTcyMzk2KyssXzB4ZTNkZDgxW18weDM0N2M4MCgweDI2ZSldKyssXzB4NTcyMzk2Pl8weDY0YjhhNSl7XzB4NDY3MjU5PSEweDA7cmV0dXJuO31pZighXzB4ZTNkZDgxW18weDM0N2M4MCgweDI1OCldJiZfMHhlM2RkODFbXzB4MzQ3YzgwKDB4Mjc0KV0mJl8weGUzZGQ4MVtfMHgzNDdjODAoMHgyNmUpXT5fMHhlM2RkODFbJ2F1dG9FeHBhbmRMaW1pdCddKXtfMHg0NjcyNTk9ITB4MDtyZXR1cm47fXZhciBfMHgyNDNjZWI9XzB4MWJhNmEwW18weDM0N2M4MCgweDI3MCldKCk7XzB4MjQzY2ViW18weDM0N2M4MCgweDIzYildPjB4NjQmJihfMHgyNDNjZWI9XzB4MjQzY2ViW18weDM0N2M4MCgweDIyYyldKDB4MCwweDY0KStfMHgzNDdjODAoMHgyNDYpKSxfMHg1ZDIzMTZbXzB4MzQ3YzgwKDB4MmIxKV0oXzB4MWMwNTY2W18weDM0N2M4MCgweDI0YildKF8weDFkMzMxMixfMHhmN2IxMDUsXzB4MzQ3YzgwKDB4MmJkKSxfMHgyNDNjZWIsXzB4ZTNkZDgxLGZ1bmN0aW9uKF8weDVmNDRjYyl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIF8weDVmNDRjYzt9O30oXzB4NzIwYTI4KSkpO30pLCFfMHgxZmNiZTEpe3RyeXtmb3IoXzB4MTg1ZTViIGluIF8weGY3YjEwNSlpZighKF8weDNmOGNmNyYmXzB4ZmYxMjVmW18weDE3NWM1NCgweDI2NCldKF8weDE4NWU1YikpJiYhdGhpc1tfMHgxNzVjNTQoMHgyM2YpXShfMHhmN2IxMDUsXzB4MTg1ZTViLF8weGUzZGQ4MSkpe2lmKF8weDU3MjM5NisrLF8weGUzZGQ4MVtfMHgxNzVjNTQoMHgyNmUpXSsrLF8weDU3MjM5Nj5fMHg2NGI4YTUpe18weDQ2NzI1OT0hMHgwO2JyZWFrO31pZighXzB4ZTNkZDgxWydpc0V4cHJlc3Npb25Ub0V2YWx1YXRlJ10mJl8weGUzZGQ4MVtfMHgxNzVjNTQoMHgyNzQpXSYmXzB4ZTNkZDgxW18weDE3NWM1NCgweDI2ZSldPl8weGUzZGQ4MVtfMHgxNzVjNTQoMHgxZDkpXSl7XzB4NDY3MjU5PSEweDA7YnJlYWs7fV8weDVkMjMxNltfMHgxNzVjNTQoMHgyYjEpXShfMHgxYzA1NjZbXzB4MTc1YzU0KDB4MWY0KV0oXzB4MWQzMzEyLF8weDUxNzAyYixfMHhmN2IxMDUsXzB4NTM2MmJhLF8weDE4NWU1YixfMHhlM2RkODEpKTt9fWNhdGNoe31pZihfMHg1MTcwMmJbXzB4MTc1YzU0KDB4Mjk4KV09ITB4MCxfMHgyNjkzY2MmJihfMHg1MTcwMmJbXzB4MTc1YzU0KDB4MWRmKV09ITB4MCksIV8weDQ2NzI1OSl7dmFyIF8weDUxZTUyNT1bXVtfMHgxNzVjNTQoMHgyOTkpXSh0aGlzWydfZ2V0T3duUHJvcGVydHlOYW1lcyddKF8weGY3YjEwNSkpW18weDE3NWM1NCgweDI5OSldKHRoaXNbXzB4MTc1YzU0KDB4MjY3KV0oXzB4ZjdiMTA1KSk7Zm9yKF8weDJmNDhlYz0weDAsXzB4NGY4MGZiPV8weDUxZTUyNVsnbGVuZ3RoJ107XzB4MmY0OGVjPF8weDRmODBmYjtfMHgyZjQ4ZWMrKylpZihfMHgxODVlNWI9XzB4NTFlNTI1W18weDJmNDhlY10sIShfMHgzZjhjZjcmJl8weGZmMTI1ZlsndGVzdCddKF8weDE4NWU1YltfMHgxNzVjNTQoMHgyNzApXSgpKSkmJiF0aGlzW18weDE3NWM1NCgweDIzZildKF8weGY3YjEwNSxfMHgxODVlNWIsXzB4ZTNkZDgxKSYmIV8weDUxNzAyYltfMHgxNzVjNTQoMHgxZmEpK18weDE4NWU1YltfMHgxNzVjNTQoMHgyNzApXSgpXSl7aWYoXzB4NTcyMzk2KyssXzB4ZTNkZDgxW18weDE3NWM1NCgweDI2ZSldKyssXzB4NTcyMzk2Pl8weDY0YjhhNSl7XzB4NDY3MjU5PSEweDA7YnJlYWs7fWlmKCFfMHhlM2RkODFbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXSYmXzB4ZTNkZDgxWydhdXRvRXhwYW5kJ10mJl8weGUzZGQ4MVtfMHgxNzVjNTQoMHgyNmUpXT5fMHhlM2RkODFbXzB4MTc1YzU0KDB4MWQ5KV0pe18weDQ2NzI1OT0hMHgwO2JyZWFrO31fMHg1ZDIzMTZbXzB4MTc1YzU0KDB4MmIxKV0oXzB4MWMwNTY2W18weDE3NWM1NCgweDFmNCldKF8weDFkMzMxMixfMHg1MTcwMmIsXzB4ZjdiMTA1LF8weDUzNjJiYSxfMHgxODVlNWIsXzB4ZTNkZDgxKSk7fX19fX1pZihfMHg0ZTE5MWVbXzB4MTc1YzU0KDB4MjUxKV09XzB4NTM2MmJhLF8weDNjZGEwZj8oXzB4NGUxOTFlW18weDE3NWM1NCgweDI3MSldPV8weGY3YjEwNVsndmFsdWVPZiddKCksdGhpc1tfMHgxNzVjNTQoMHgyMWQpXShfMHg1MzYyYmEsXzB4NGUxOTFlLF8weGUzZGQ4MSxfMHgxYjI5OTEpKTpfMHg1MzYyYmE9PT1fMHgxNzVjNTQoMHgyMWIpP18weDRlMTkxZVtfMHgxNzVjNTQoMHgyNzEpXT10aGlzW18weDE3NWM1NCgweDI3OSldW18weDE3NWM1NCgweDI1YildKF8weGY3YjEwNSk6XzB4NTM2MmJhPT09J2JpZ2ludCc/XzB4NGUxOTFlW18weDE3NWM1NCgweDI3MSldPV8weGY3YjEwNVtfMHgxNzVjNTQoMHgyNzApXSgpOl8weDUzNjJiYT09PV8weDE3NWM1NCgweDI3ZSk/XzB4NGUxOTFlW18weDE3NWM1NCgweDI3MSldPXRoaXNbXzB4MTc1YzU0KDB4MjQ0KV1bXzB4MTc1YzU0KDB4MjViKV0oXzB4ZjdiMTA1KTpfMHg1MzYyYmE9PT0nc3ltYm9sJyYmdGhpc1tfMHgxNzVjNTQoMHgyMjgpXT9fMHg0ZTE5MWVbXzB4MTc1YzU0KDB4MjcxKV09dGhpc1tfMHgxNzVjNTQoMHgyMjgpXVsncHJvdG90eXBlJ11bXzB4MTc1YzU0KDB4MjcwKV1bXzB4MTc1YzU0KDB4MjViKV0oXzB4ZjdiMTA1KTohXzB4ZTNkZDgxW18weDE3NWM1NCgweDIxYSldJiYhKF8weDUzNjJiYT09PV8weDE3NWM1NCgweDIyMSl8fF8weDUzNjJiYT09PV8weDE3NWM1NCgweDFkMSkpJiYoZGVsZXRlIF8weDRlMTkxZVtfMHgxNzVjNTQoMHgyNzEpXSxfMHg0ZTE5MWVbXzB4MTc1YzU0KDB4MjJkKV09ITB4MCksXzB4NDY3MjU5JiYoXzB4NGUxOTFlW18weDE3NWM1NCgweDFlYSldPSEweDApLF8weDFkOTNjYT1fMHhlM2RkODFbXzB4MTc1YzU0KDB4MWY1KV1bXzB4MTc1YzU0KDB4MWZmKV0sXzB4ZTNkZDgxWydub2RlJ11bJ2N1cnJlbnQnXT1fMHg0ZTE5MWUsdGhpc1tfMHgxNzVjNTQoMHgyNzgpXShfMHg0ZTE5MWUsXzB4ZTNkZDgxKSxfMHg1ZDIzMTZbXzB4MTc1YzU0KDB4MjNiKV0pe2ZvcihfMHgyZjQ4ZWM9MHgwLF8weDRmODBmYj1fMHg1ZDIzMTZbJ2xlbmd0aCddO18weDJmNDhlYzxfMHg0ZjgwZmI7XzB4MmY0OGVjKyspXzB4NWQyMzE2W18weDJmNDhlY10oXzB4MmY0OGVjKTt9XzB4MWQzMzEyW18weDE3NWM1NCgweDIzYildJiYoXzB4NGUxOTFlW18weDE3NWM1NCgweDI5YyldPV8weDFkMzMxMik7fWNhdGNoKF8weDFhOGMyNSl7XzB4MTczMTg1KF8weDFhOGMyNSxfMHg0ZTE5MWUsXzB4ZTNkZDgxKTt9cmV0dXJuIHRoaXNbXzB4MTc1YzU0KDB4MjM3KV0oXzB4ZjdiMTA1LF8weDRlMTkxZSksdGhpc1tfMHgxNzVjNTQoMHgyOGYpXShfMHg0ZTE5MWUsXzB4ZTNkZDgxKSxfMHhlM2RkODFbXzB4MTc1YzU0KDB4MWY1KV1bXzB4MTc1YzU0KDB4MWZmKV09XzB4MWQ5M2NhLF8weGUzZGQ4MVtfMHgxNzVjNTQoMHgyOTYpXS0tLF8weGUzZGQ4MVtfMHgxNzVjNTQoMHgyNzQpXT1fMHgzMTljMTksXzB4ZTNkZDgxW18weDE3NWM1NCgweDI3NCldJiZfMHhlM2RkODFbXzB4MTc1YzU0KDB4Mjg2KV1bXzB4MTc1YzU0KDB4MjZmKV0oKSxfMHg0ZTE5MWU7fVtfMHgxYTYzMzIoMHgyNjcpXShfMHgxYmYwYzQpe3ZhciBfMHgyZjQ2Y2E9XzB4MWE2MzMyO3JldHVybiBPYmplY3RbXzB4MmY0NmNhKDB4MmFkKV0/T2JqZWN0W18weDJmNDZjYSgweDJhZCldKF8weDFiZjBjNCk6W107fVtfMHgxYTYzMzIoMHgyODkpXShfMHgyMGQ1NzApe3ZhciBfMHgxOTY5YmQ9XzB4MWE2MzMyO3JldHVybiEhKF8weDIwZDU3MCYmXzB4NTI5NDNjWydTZXQnXSYmdGhpc1tfMHgxOTY5YmQoMHgyYTgpXShfMHgyMGQ1NzApPT09J1tvYmplY3RcXFxceDIwU2V0XScmJl8weDIwZDU3MFtfMHgxOTY5YmQoMHgyNWYpXSk7fVtfMHgxYTYzMzIoMHgyM2YpXShfMHgzZjFjMzcsXzB4Mjg0NzI0LF8weDY3NTBmMSl7dmFyIF8weDI2ZDhjOT1fMHgxYTYzMzI7cmV0dXJuIF8weDY3NTBmMVtfMHgyNmQ4YzkoMHgxZmQpXT90eXBlb2YgXzB4M2YxYzM3W18weDI4NDcyNF09PV8weDI2ZDhjOSgweDI0ZSk6ITB4MTt9WydfdHlwZSddKF8weDQ4ZGVkZSl7dmFyIF8weDI2NDBmYz1fMHgxYTYzMzIsXzB4NDQyMjgwPScnO3JldHVybiBfMHg0NDIyODA9dHlwZW9mIF8weDQ4ZGVkZSxfMHg0NDIyODA9PT1fMHgyNjQwZmMoMHgyYTUpP3RoaXNbXzB4MjY0MGZjKDB4MmE4KV0oXzB4NDhkZWRlKT09PV8weDI2NDBmYygweDIyMik/XzB4NDQyMjgwPV8weDI2NDBmYygweDJiZSk6dGhpc1tfMHgyNjQwZmMoMHgyYTgpXShfMHg0OGRlZGUpPT09XzB4MjY0MGZjKDB4MjA2KT9fMHg0NDIyODA9XzB4MjY0MGZjKDB4MjFiKTp0aGlzWydfb2JqZWN0VG9TdHJpbmcnXShfMHg0OGRlZGUpPT09J1tvYmplY3RcXFxceDIwQmlnSW50XSc/XzB4NDQyMjgwPV8weDI2NDBmYygweDJhYyk6XzB4NDhkZWRlPT09bnVsbD9fMHg0NDIyODA9XzB4MjY0MGZjKDB4MjIxKTpfMHg0OGRlZGVbXzB4MjY0MGZjKDB4MjBhKV0mJihfMHg0NDIyODA9XzB4NDhkZWRlW18weDI2NDBmYygweDIwYSldW18weDI2NDBmYygweDI4MSldfHxfMHg0NDIyODApOl8weDQ0MjI4MD09PSd1bmRlZmluZWQnJiZ0aGlzW18weDI2NDBmYygweDI1YyldJiZfMHg0OGRlZGUgaW5zdGFuY2VvZiB0aGlzW18weDI2NDBmYygweDI1YyldJiYoXzB4NDQyMjgwPV8weDI2NDBmYygweDI4MykpLF8weDQ0MjI4MDt9Wydfb2JqZWN0VG9TdHJpbmcnXShfMHg0NDVlY2Mpe3ZhciBfMHgxNzA0NDM9XzB4MWE2MzMyO3JldHVybiBPYmplY3RbXzB4MTcwNDQzKDB4MjgyKV1bXzB4MTcwNDQzKDB4MjcwKV1bXzB4MTcwNDQzKDB4MjViKV0oXzB4NDQ1ZWNjKTt9W18weDFhNjMzMigweDIyZildKF8weDRhZjRhMCl7dmFyIF8weDM0NzY5MT1fMHgxYTYzMzI7cmV0dXJuIF8weDRhZjRhMD09PSdib29sZWFuJ3x8XzB4NGFmNGEwPT09J3N0cmluZyd8fF8weDRhZjRhMD09PV8weDM0NzY5MSgweDFkNyk7fVtfMHgxYTYzMzIoMHgxZTIpXShfMHhiOTlhMjgpe3ZhciBfMHgxY2Q5YjQ9XzB4MWE2MzMyO3JldHVybiBfMHhiOTlhMjg9PT1fMHgxY2Q5YjQoMHgxZjgpfHxfMHhiOTlhMjg9PT1fMHgxY2Q5YjQoMHgyNzcpfHxfMHhiOTlhMjg9PT1fMHgxY2Q5YjQoMHgyNWEpO31bXzB4MWE2MzMyKDB4MjRiKV0oXzB4M2I1ZmY4LF8weDEwMGM0NCxfMHg1Y2M5M2QsXzB4MTg2MmMyLF8weDVlNjY0MixfMHhlMjljMDQpe3ZhciBfMHhkZmM0MzE9dGhpcztyZXR1cm4gZnVuY3Rpb24oXzB4MmIwYjdjKXt2YXIgXzB4ZGY1ZjAwPV8weDVjYWUsXzB4NTI3NDYzPV8weDVlNjY0MltfMHhkZjVmMDAoMHgxZjUpXVtfMHhkZjVmMDAoMHgxZmYpXSxfMHgyZTFiYTk9XzB4NWU2NjQyWydub2RlJ11bXzB4ZGY1ZjAwKDB4MjIwKV0sXzB4MzRlZjc0PV8weDVlNjY0MltfMHhkZjVmMDAoMHgxZjUpXVtfMHhkZjVmMDAoMHgyMzIpXTtfMHg1ZTY2NDJbXzB4ZGY1ZjAwKDB4MWY1KV1bXzB4ZGY1ZjAwKDB4MjMyKV09XzB4NTI3NDYzLF8weDVlNjY0Mlsnbm9kZSddW18weGRmNWYwMCgweDIyMCldPXR5cGVvZiBfMHgxODYyYzI9PV8weGRmNWYwMCgweDFkNyk/XzB4MTg2MmMyOl8weDJiMGI3YyxfMHgzYjVmZjhbXzB4ZGY1ZjAwKDB4MmIxKV0oXzB4ZGZjNDMxW18weGRmNWYwMCgweDFlOSldKF8weDEwMGM0NCxfMHg1Y2M5M2QsXzB4MTg2MmMyLF8weDVlNjY0MixfMHhlMjljMDQpKSxfMHg1ZTY2NDJbXzB4ZGY1ZjAwKDB4MWY1KV1bXzB4ZGY1ZjAwKDB4MjMyKV09XzB4MzRlZjc0LF8weDVlNjY0MltfMHhkZjVmMDAoMHgxZjUpXVtfMHhkZjVmMDAoMHgyMjApXT1fMHgyZTFiYTk7fTt9W18weDFhNjMzMigweDFmNCldKF8weDJkYmYwYSxfMHgyYzM0YzQsXzB4NWU3OWUxLF8weDg0ZmIwNSxfMHgyZmNiMzgsXzB4MTE5MDg3LF8weDJkNDZkMil7dmFyIF8weDViMjhiZj1fMHgxYTYzMzIsXzB4MzA2MjQwPXRoaXM7cmV0dXJuIF8weDJjMzRjNFtfMHg1YjI4YmYoMHgxZmEpK18weDJmY2IzOFtfMHg1YjI4YmYoMHgyNzApXSgpXT0hMHgwLGZ1bmN0aW9uKF8weDE5NjVmNSl7dmFyIF8weDMwNjIwYj1fMHg1YjI4YmYsXzB4MTQzZWQwPV8weDExOTA4N1tfMHgzMDYyMGIoMHgxZjUpXVtfMHgzMDYyMGIoMHgxZmYpXSxfMHgyNjg4MTU9XzB4MTE5MDg3W18weDMwNjIwYigweDFmNSldW18weDMwNjIwYigweDIyMCldLF8weDI0NWU3Mj1fMHgxMTkwODdbXzB4MzA2MjBiKDB4MWY1KV1bXzB4MzA2MjBiKDB4MjMyKV07XzB4MTE5MDg3W18weDMwNjIwYigweDFmNSldW18weDMwNjIwYigweDIzMildPV8weDE0M2VkMCxfMHgxMTkwODdbJ25vZGUnXVtfMHgzMDYyMGIoMHgyMjApXT1fMHgxOTY1ZjUsXzB4MmRiZjBhW18weDMwNjIwYigweDJiMSldKF8weDMwNjI0MFtfMHgzMDYyMGIoMHgxZTkpXShfMHg1ZTc5ZTEsXzB4ODRmYjA1LF8weDJmY2IzOCxfMHgxMTkwODcsXzB4MmQ0NmQyKSksXzB4MTE5MDg3W18weDMwNjIwYigweDFmNSldWydwYXJlbnQnXT1fMHgyNDVlNzIsXzB4MTE5MDg3W18weDMwNjIwYigweDFmNSldW18weDMwNjIwYigweDIyMCldPV8weDI2ODgxNTt9O31bXzB4MWE2MzMyKDB4MWU5KV0oXzB4NGMzYTksXzB4NTQ2NzBlLF8weGE4M2E1ZCxfMHgyMzM5MDcsXzB4MjA0YzUzKXt2YXIgXzB4NTIwMGI3PV8weDFhNjMzMixfMHgxZGY0ZWM9dGhpcztfMHgyMDRjNTN8fChfMHgyMDRjNTM9ZnVuY3Rpb24oXzB4MTc2YTg2LF8weDMwMzUxMSl7cmV0dXJuIF8weDE3NmE4NltfMHgzMDM1MTFdO30pO3ZhciBfMHg2ZDA2ZTk9XzB4YTgzYTVkW18weDUyMDBiNygweDI3MCldKCksXzB4M2Y3MTRkPV8weDIzMzkwN1snZXhwcmVzc2lvbnNUb0V2YWx1YXRlJ118fHt9LF8weDE4ODMxZj1fMHgyMzM5MDdbJ2RlcHRoJ10sXzB4NDliZjQ2PV8weDIzMzkwN1tfMHg1MjAwYjcoMHgyNTgpXTt0cnl7dmFyIF8weDJiNTQyZD10aGlzW18weDUyMDBiNygweDI1MyldKF8weDRjM2E5KSxfMHgzOTI0Y2Y9XzB4NmQwNmU5O18weDJiNTQyZCYmXzB4MzkyNGNmWzB4MF09PT0nXFxcXHgyNycmJihfMHgzOTI0Y2Y9XzB4MzkyNGNmWydzdWJzdHInXSgweDEsXzB4MzkyNGNmW18weDUyMDBiNygweDIzYildLTB4MikpO3ZhciBfMHg0NWRlMDc9XzB4MjMzOTA3W18weDUyMDBiNygweDIyNyldPV8weDNmNzE0ZFtfMHg1MjAwYjcoMHgxZmEpK18weDM5MjRjZl07XzB4NDVkZTA3JiYoXzB4MjMzOTA3W18weDUyMDBiNygweDIxYSldPV8weDIzMzkwN1snZGVwdGgnXSsweDEpLF8weDIzMzkwN1tfMHg1MjAwYjcoMHgyNTgpXT0hIV8weDQ1ZGUwNzt2YXIgXzB4MzQ4NzYxPXR5cGVvZiBfMHhhODNhNWQ9PV8weDUyMDBiNygweDJiNCksXzB4YTU1ZjIwPXsnbmFtZSc6XzB4MzQ4NzYxfHxfMHgyYjU0MmQ/XzB4NmQwNmU5OnRoaXNbJ19wcm9wZXJ0eU5hbWUnXShfMHg2ZDA2ZTkpfTtpZihfMHgzNDg3NjEmJihfMHhhNTVmMjBbXzB4NTIwMGI3KDB4MmI0KV09ITB4MCksIShfMHg1NDY3MGU9PT1fMHg1MjAwYjcoMHgyYmUpfHxfMHg1NDY3MGU9PT0nRXJyb3InKSl7dmFyIF8weDE4OGNlYj10aGlzW18weDUyMDBiNygweDIzNSldKF8weDRjM2E5LF8weGE4M2E1ZCk7aWYoXzB4MTg4Y2ViJiYoXzB4MTg4Y2ViW18weDUyMDBiNygweDIxOSldJiYoXzB4YTU1ZjIwW18weDUyMDBiNygweDFlOCldPSEweDApLF8weDE4OGNlYltfMHg1MjAwYjcoMHgyOGMpXSYmIV8weDQ1ZGUwNyYmIV8weDIzMzkwN1tfMHg1MjAwYjcoMHgyOTUpXSkpcmV0dXJuIF8weGE1NWYyMFtfMHg1MjAwYjcoMHgyMDUpXT0hMHgwLHRoaXNbXzB4NTIwMGI3KDB4MWRlKV0oXzB4YTU1ZjIwLF8weDIzMzkwNyksXzB4YTU1ZjIwO312YXIgXzB4MzYzMjRkO3RyeXtfMHgzNjMyNGQ9XzB4MjA0YzUzKF8weDRjM2E5LF8weGE4M2E1ZCk7fWNhdGNoKF8weDIyNjdlOSl7cmV0dXJuIF8weGE1NWYyMD17J25hbWUnOl8weDZkMDZlOSwndHlwZSc6XzB4NTIwMGI3KDB4MWYxKSwnZXJyb3InOl8weDIyNjdlOVtfMHg1MjAwYjcoMHgyNTQpXX0sdGhpc1tfMHg1MjAwYjcoMHgxZGUpXShfMHhhNTVmMjAsXzB4MjMzOTA3KSxfMHhhNTVmMjA7fXZhciBfMHg0ZmQ5YTM9dGhpc1tfMHg1MjAwYjcoMHgxZmMpXShfMHgzNjMyNGQpLF8weDRiYjk3Yj10aGlzWydfaXNQcmltaXRpdmVUeXBlJ10oXzB4NGZkOWEzKTtpZihfMHhhNTVmMjBbXzB4NTIwMGI3KDB4MjUxKV09XzB4NGZkOWEzLF8weDRiYjk3Yil0aGlzW18weDUyMDBiNygweDFkZSldKF8weGE1NWYyMCxfMHgyMzM5MDcsXzB4MzYzMjRkLGZ1bmN0aW9uKCl7dmFyIF8weDExN2M1ZD1fMHg1MjAwYjc7XzB4YTU1ZjIwW18weDExN2M1ZCgweDI3MSldPV8weDM2MzI0ZFtfMHgxMTdjNWQoMHgyYmYpXSgpLCFfMHg0NWRlMDcmJl8weDFkZjRlY1tfMHgxMTdjNWQoMHgyMWQpXShfMHg0ZmQ5YTMsXzB4YTU1ZjIwLF8weDIzMzkwNyx7fSk7fSk7ZWxzZXt2YXIgXzB4MmI2ZGY2PV8weDIzMzkwN1tfMHg1MjAwYjcoMHgyNzQpXSYmXzB4MjMzOTA3W18weDUyMDBiNygweDI5NildPF8weDIzMzkwN1snYXV0b0V4cGFuZE1heERlcHRoJ10mJl8weDIzMzkwN1tfMHg1MjAwYjcoMHgyODYpXVsnaW5kZXhPZiddKF8weDM2MzI0ZCk8MHgwJiZfMHg0ZmQ5YTMhPT1fMHg1MjAwYjcoMHgyNGUpJiZfMHgyMzM5MDdbXzB4NTIwMGI3KDB4MjZlKV08XzB4MjMzOTA3W18weDUyMDBiNygweDFkOSldO18weDJiNmRmNnx8XzB4MjMzOTA3W18weDUyMDBiNygweDI5NildPF8weDE4ODMxZnx8XzB4NDVkZTA3Pyh0aGlzW18weDUyMDBiNygweDFkMyldKF8weGE1NWYyMCxfMHgzNjMyNGQsXzB4MjMzOTA3LF8weDQ1ZGUwN3x8e30pLHRoaXNbXzB4NTIwMGI3KDB4MjM3KV0oXzB4MzYzMjRkLF8weGE1NWYyMCkpOnRoaXNbXzB4NTIwMGI3KDB4MWRlKV0oXzB4YTU1ZjIwLF8weDIzMzkwNyxfMHgzNjMyNGQsZnVuY3Rpb24oKXt2YXIgXzB4NWRhYTM0PV8weDUyMDBiNztfMHg0ZmQ5YTM9PT1fMHg1ZGFhMzQoMHgyMjEpfHxfMHg0ZmQ5YTM9PT0ndW5kZWZpbmVkJ3x8KGRlbGV0ZSBfMHhhNTVmMjBbJ3ZhbHVlJ10sXzB4YTU1ZjIwW18weDVkYWEzNCgweDIyZCldPSEweDApO30pO31yZXR1cm4gXzB4YTU1ZjIwO31maW5hbGx5e18weDIzMzkwN1tfMHg1MjAwYjcoMHgyMjcpXT1fMHgzZjcxNGQsXzB4MjMzOTA3W18weDUyMDBiNygweDIxYSldPV8weDE4ODMxZixfMHgyMzM5MDdbJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnXT1fMHg0OWJmNDY7fX1bXzB4MWE2MzMyKDB4MjFkKV0oXzB4NTFiNjQ0LF8weDJhNGM2NyxfMHgzZDRlZTYsXzB4MTU3MmVkKXt2YXIgXzB4MjIzMDhiPV8weDFhNjMzMixfMHgyZWMxNDc9XzB4MTU3MmVkW18weDIyMzA4YigweDJiYyldfHxfMHgzZDRlZTZbXzB4MjIzMDhiKDB4MmJjKV07aWYoKF8weDUxYjY0ND09PSdzdHJpbmcnfHxfMHg1MWI2NDQ9PT1fMHgyMjMwOGIoMHgyNzcpKSYmXzB4MmE0YzY3Wyd2YWx1ZSddKXtsZXQgXzB4NGE4NDNjPV8weDJhNGM2N1tfMHgyMjMwOGIoMHgyNzEpXVtfMHgyMjMwOGIoMHgyM2IpXTtfMHgzZDRlZTZbXzB4MjIzMDhiKDB4MjkzKV0rPV8weDRhODQzYyxfMHgzZDRlZTZbXzB4MjIzMDhiKDB4MjkzKV0+XzB4M2Q0ZWU2W18weDIyMzA4YigweDI2OCldPyhfMHgyYTRjNjdbXzB4MjIzMDhiKDB4MjJkKV09JycsZGVsZXRlIF8weDJhNGM2N1tfMHgyMjMwOGIoMHgyNzEpXSk6XzB4NGE4NDNjPl8weDJlYzE0NyYmKF8weDJhNGM2N1snY2FwcGVkJ109XzB4MmE0YzY3W18weDIyMzA4YigweDI3MSldW18weDIyMzA4YigweDFmMyldKDB4MCxfMHgyZWMxNDcpLGRlbGV0ZSBfMHgyYTRjNjdbXzB4MjIzMDhiKDB4MjcxKV0pO319W18weDFhNjMzMigweDI1MyldKF8weDU0MDRhNil7dmFyIF8weDRiNGEyOT1fMHgxYTYzMzI7cmV0dXJuISEoXzB4NTQwNGE2JiZfMHg1Mjk0M2NbJ01hcCddJiZ0aGlzW18weDRiNGEyOSgweDJhOCldKF8weDU0MDRhNik9PT1fMHg0YjRhMjkoMHgxZWQpJiZfMHg1NDA0YTZbXzB4NGI0YTI5KDB4MjVmKV0pO31bXzB4MWE2MzMyKDB4Mjk3KV0oXzB4NTRhMjAxKXt2YXIgXzB4MmRmNzdmPV8weDFhNjMzMjtpZihfMHg1NGEyMDFbXzB4MmRmNzdmKDB4MWY3KV0oL15cXFxcZCskLykpcmV0dXJuIF8weDU0YTIwMTt2YXIgXzB4MTkwYzdhO3RyeXtfMHgxOTBjN2E9SlNPTltfMHgyZGY3N2YoMHgxZGMpXSgnJytfMHg1NGEyMDEpO31jYXRjaHtfMHgxOTBjN2E9J1xcXFx4MjInK3RoaXNbXzB4MmRmNzdmKDB4MmE4KV0oXzB4NTRhMjAxKSsnXFxcXHgyMic7fXJldHVybiBfMHgxOTBjN2FbXzB4MmRmNzdmKDB4MWY3KV0oL15cXFwiKFthLXpBLVpfXVthLXpBLVpfMC05XSopXFxcIiQvKT9fMHgxOTBjN2E9XzB4MTkwYzdhWydzdWJzdHInXSgweDEsXzB4MTkwYzdhW18weDJkZjc3ZigweDIzYildLTB4Mik6XzB4MTkwYzdhPV8weDE5MGM3YVtfMHgyZGY3N2YoMHgyMjYpXSgvJy9nLCdcXFxceDVjXFxcXHgyNycpW18weDJkZjc3ZigweDIyNildKC9cXFxcXFxcXFxcXCIvZywnXFxcXHgyMicpW18weDJkZjc3ZigweDIyNildKC8oXlxcXCJ8XFxcIiQpL2csJ1xcXFx4MjcnKSxfMHgxOTBjN2E7fVtfMHgxYTYzMzIoMHgxZGUpXShfMHgzNTE2ODYsXzB4M2I3NmE3LF8weDNlMWExZCxfMHgzOTk3OTMpe3ZhciBfMHg1NjNjNzM9XzB4MWE2MzMyO3RoaXNbXzB4NTYzYzczKDB4Mjc4KV0oXzB4MzUxNjg2LF8weDNiNzZhNyksXzB4Mzk5NzkzJiZfMHgzOTk3OTMoKSx0aGlzW18weDU2M2M3MygweDIzNyldKF8weDNlMWExZCxfMHgzNTE2ODYpLHRoaXNbJ190cmVlTm9kZVByb3BlcnRpZXNBZnRlckZ1bGxWYWx1ZSddKF8weDM1MTY4NixfMHgzYjc2YTcpO31bXzB4MWE2MzMyKDB4Mjc4KV0oXzB4MWNiNDNmLF8weGJlOWU3NSl7dmFyIF8weDI5YjM2Yj1fMHgxYTYzMzI7dGhpc1snX3NldE5vZGVJZCddKF8weDFjYjQzZixfMHhiZTllNzUpLHRoaXNbXzB4MjliMzZiKDB4MmEzKV0oXzB4MWNiNDNmLF8weGJlOWU3NSksdGhpc1snX3NldE5vZGVFeHByZXNzaW9uUGF0aCddKF8weDFjYjQzZixfMHhiZTllNzUpLHRoaXNbXzB4MjliMzZiKDB4MjE0KV0oXzB4MWNiNDNmLF8weGJlOWU3NSk7fVsnX3NldE5vZGVJZCddKF8weDQ2YTYxNSxfMHgyMmI3MDQpe31bXzB4MWE2MzMyKDB4MmEzKV0oXzB4NGM2ZmIyLF8weDQyNzdhOCl7fVtfMHgxYTYzMzIoMHgyNDEpXShfMHg0MDU5NGEsXzB4NmJlZGZjKXt9W18weDFhNjMzMigweDI1ZCldKF8weDFhMWFkYSl7cmV0dXJuIF8weDFhMWFkYT09PXRoaXNbJ191bmRlZmluZWQnXTt9W18weDFhNjMzMigweDI4ZildKF8weDQyMWM2OCxfMHg1MjlkNzUpe3ZhciBfMHg1MmNmYzU9XzB4MWE2MzMyO3RoaXNbXzB4NTJjZmM1KDB4MjQxKV0oXzB4NDIxYzY4LF8weDUyOWQ3NSksdGhpc1tfMHg1MmNmYzUoMHgxZTUpXShfMHg0MjFjNjgpLF8weDUyOWQ3NVtfMHg1MmNmYzUoMHgxZTEpXSYmdGhpc1snX3NvcnRQcm9wcyddKF8weDQyMWM2OCksdGhpc1tfMHg1MmNmYzUoMHgyNDMpXShfMHg0MjFjNjgsXzB4NTI5ZDc1KSx0aGlzWydfYWRkTG9hZE5vZGUnXShfMHg0MjFjNjgsXzB4NTI5ZDc1KSx0aGlzW18weDUyY2ZjNSgweDJiNildKF8weDQyMWM2OCk7fVtfMHgxYTYzMzIoMHgyMzcpXShfMHgxZDc2NzEsXzB4NTY4MGVhKXt2YXIgXzB4NGE3ZjgzPV8weDFhNjMzMjtsZXQgXzB4MjBkOTE5O3RyeXtfMHg1Mjk0M2NbXzB4NGE3ZjgzKDB4MmEwKV0mJihfMHgyMGQ5MTk9XzB4NTI5NDNjWydjb25zb2xlJ11bJ2Vycm9yJ10sXzB4NTI5NDNjW18weDRhN2Y4MygweDJhMCldW18weDRhN2Y4MygweDJhZSldPWZ1bmN0aW9uKCl7fSksXzB4MWQ3NjcxJiZ0eXBlb2YgXzB4MWQ3NjcxW18weDRhN2Y4MygweDIzYildPT1fMHg0YTdmODMoMHgxZDcpJiYoXzB4NTY4MGVhW18weDRhN2Y4MygweDIzYildPV8weDFkNzY3MVsnbGVuZ3RoJ10pO31jYXRjaHt9ZmluYWxseXtfMHgyMGQ5MTkmJihfMHg1Mjk0M2NbXzB4NGE3ZjgzKDB4MmEwKV1bXzB4NGE3ZjgzKDB4MmFlKV09XzB4MjBkOTE5KTt9aWYoXzB4NTY4MGVhWyd0eXBlJ109PT1fMHg0YTdmODMoMHgxZDcpfHxfMHg1NjgwZWFbXzB4NGE3ZjgzKDB4MjUxKV09PT1fMHg0YTdmODMoMHgyNWEpKXtpZihpc05hTihfMHg1NjgwZWFbJ3ZhbHVlJ10pKV8weDU2ODBlYVsnbmFuJ109ITB4MCxkZWxldGUgXzB4NTY4MGVhWyd2YWx1ZSddO2Vsc2Ugc3dpdGNoKF8weDU2ODBlYVtfMHg0YTdmODMoMHgyNzEpXSl7Y2FzZSBOdW1iZXJbXzB4NGE3ZjgzKDB4MjJlKV06XzB4NTY4MGVhWydwb3NpdGl2ZUluZmluaXR5J109ITB4MCxkZWxldGUgXzB4NTY4MGVhW18weDRhN2Y4MygweDI3MSldO2JyZWFrO2Nhc2UgTnVtYmVyW18weDRhN2Y4MygweDIwMildOl8weDU2ODBlYVsnbmVnYXRpdmVJbmZpbml0eSddPSEweDAsZGVsZXRlIF8weDU2ODBlYVsndmFsdWUnXTticmVhaztjYXNlIDB4MDp0aGlzW18weDRhN2Y4MygweDI5MildKF8weDU2ODBlYVtfMHg0YTdmODMoMHgyNzEpXSkmJihfMHg1NjgwZWFbXzB4NGE3ZjgzKDB4Mjc1KV09ITB4MCk7YnJlYWs7fX1lbHNlIF8weDU2ODBlYVtfMHg0YTdmODMoMHgyNTEpXT09PV8weDRhN2Y4MygweDI0ZSkmJnR5cGVvZiBfMHgxZDc2NzFbXzB4NGE3ZjgzKDB4MjgxKV09PV8weDRhN2Y4MygweDFkYikmJl8weDFkNzY3MVtfMHg0YTdmODMoMHgyODEpXSYmXzB4NTY4MGVhWyduYW1lJ10mJl8weDFkNzY3MVsnbmFtZSddIT09XzB4NTY4MGVhW18weDRhN2Y4MygweDI4MSldJiYoXzB4NTY4MGVhW18weDRhN2Y4MygweDIyNSldPV8weDFkNzY3MVtfMHg0YTdmODMoMHgyODEpXSk7fVtfMHgxYTYzMzIoMHgyOTIpXShfMHg0ZGRjYzQpe3ZhciBfMHg1NTIyZWY9XzB4MWE2MzMyO3JldHVybiAweDEvXzB4NGRkY2M0PT09TnVtYmVyW18weDU1MjJlZigweDIwMildO31bXzB4MWE2MzMyKDB4MWVmKV0oXzB4MjdkMGFlKXt2YXIgXzB4NTdhOTI3PV8weDFhNjMzMjshXzB4MjdkMGFlW18weDU3YTkyNygweDI5YyldfHwhXzB4MjdkMGFlW18weDU3YTkyNygweDI5YyldWydsZW5ndGgnXXx8XzB4MjdkMGFlW18weDU3YTkyNygweDI1MSldPT09XzB4NTdhOTI3KDB4MmJlKXx8XzB4MjdkMGFlW18weDU3YTkyNygweDI1MSldPT09XzB4NTdhOTI3KDB4MmJkKXx8XzB4MjdkMGFlW18weDU3YTkyNygweDI1MSldPT09XzB4NTdhOTI3KDB4MjBlKXx8XzB4MjdkMGFlWydwcm9wcyddW18weDU3YTkyNygweDIzYyldKGZ1bmN0aW9uKF8weDQxOWIyMyxfMHg0ZjE1YTUpe3ZhciBfMHgxN2ViOTY9XzB4NTdhOTI3LF8weDFjOGFmMj1fMHg0MTliMjNbXzB4MTdlYjk2KDB4MjgxKV1bXzB4MTdlYjk2KDB4MjQ1KV0oKSxfMHg2ZGUxZjI9XzB4NGYxNWE1W18weDE3ZWI5NigweDI4MSldWyd0b0xvd2VyQ2FzZSddKCk7cmV0dXJuIF8weDFjOGFmMjxfMHg2ZGUxZjI/LTB4MTpfMHgxYzhhZjI+XzB4NmRlMWYyPzB4MToweDA7fSk7fVsnX2FkZEZ1bmN0aW9uc05vZGUnXShfMHg1MDA0MGIsXzB4NTAzYjIwKXt2YXIgXzB4YmViY2FiPV8weDFhNjMzMjtpZighKF8weDUwM2IyMFtfMHhiZWJjYWIoMHgxZmQpXXx8IV8weDUwMDQwYltfMHhiZWJjYWIoMHgyOWMpXXx8IV8weDUwMDQwYltfMHhiZWJjYWIoMHgyOWMpXVtfMHhiZWJjYWIoMHgyM2IpXSkpe2Zvcih2YXIgXzB4NWVhN2VlPVtdLF8weDEzYTFiYj1bXSxfMHg0OWE4Nzc9MHgwLF8weDIyMTI2MD1fMHg1MDA0MGJbXzB4YmViY2FiKDB4MjljKV1bXzB4YmViY2FiKDB4MjNiKV07XzB4NDlhODc3PF8weDIyMTI2MDtfMHg0OWE4NzcrKyl7dmFyIF8weDM4MjljZD1fMHg1MDA0MGJbXzB4YmViY2FiKDB4MjljKV1bXzB4NDlhODc3XTtfMHgzODI5Y2RbXzB4YmViY2FiKDB4MjUxKV09PT1fMHhiZWJjYWIoMHgyNGUpP18weDVlYTdlZVtfMHhiZWJjYWIoMHgyYjEpXShfMHgzODI5Y2QpOl8weDEzYTFiYltfMHhiZWJjYWIoMHgyYjEpXShfMHgzODI5Y2QpO31pZighKCFfMHgxM2ExYmJbXzB4YmViY2FiKDB4MjNiKV18fF8weDVlYTdlZVtfMHhiZWJjYWIoMHgyM2IpXTw9MHgxKSl7XzB4NTAwNDBiWydwcm9wcyddPV8weDEzYTFiYjt2YXIgXzB4YTdiNzU0PXsnZnVuY3Rpb25zTm9kZSc6ITB4MCwncHJvcHMnOl8weDVlYTdlZX07dGhpc1tfMHhiZWJjYWIoMHgyYTYpXShfMHhhN2I3NTQsXzB4NTAzYjIwKSx0aGlzWydfc2V0Tm9kZUxhYmVsJ10oXzB4YTdiNzU0LF8weDUwM2IyMCksdGhpc1snX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnXShfMHhhN2I3NTQpLHRoaXNbXzB4YmViY2FiKDB4MjE0KV0oXzB4YTdiNzU0LF8weDUwM2IyMCksXzB4YTdiNzU0WydpZCddKz0nXFxcXHgyMGYnLF8weDUwMDQwYltfMHhiZWJjYWIoMHgyOWMpXVsndW5zaGlmdCddKF8weGE3Yjc1NCk7fX19W18weDFhNjMzMigweDI4OCldKF8weDRkYjMyNixfMHhhNDkwZil7fVtfMHgxYTYzMzIoMHgxZTUpXShfMHgzODg5ODcpe31bXzB4MWE2MzMyKDB4MjlkKV0oXzB4ZDJlN2ExKXt2YXIgXzB4M2U5NzYzPV8weDFhNjMzMjtyZXR1cm4gQXJyYXlbXzB4M2U5NzYzKDB4MjBjKV0oXzB4ZDJlN2ExKXx8dHlwZW9mIF8weGQyZTdhMT09XzB4M2U5NzYzKDB4MmE1KSYmdGhpc1tfMHgzZTk3NjMoMHgyYTgpXShfMHhkMmU3YTEpPT09J1tvYmplY3RcXFxceDIwQXJyYXldJzt9W18weDFhNjMzMigweDIxNCldKF8weDQ0ODI3NyxfMHhmMDRmMzUpe31bXzB4MWE2MzMyKDB4MmI2KV0oXzB4NThjN2UxKXt2YXIgXzB4MzBhYTA2PV8weDFhNjMzMjtkZWxldGUgXzB4NThjN2UxW18weDMwYWEwNigweDFkNCldLGRlbGV0ZSBfMHg1OGM3ZTFbXzB4MzBhYTA2KDB4MmE5KV0sZGVsZXRlIF8weDU4YzdlMVsnX2hhc01hcE9uSXRzUGF0aCddO31bXzB4MWE2MzMyKDB4MjhkKV0oXzB4YmIzODI4LF8weDRkZjgwZSl7fX1sZXQgXzB4NWE0Y2QyPW5ldyBfMHgxMDg0YjUoKSxfMHgyZGQ3MTk9eydwcm9wcyc6MHg2NCwnZWxlbWVudHMnOjB4NjQsJ3N0ckxlbmd0aCc6MHg0MDAqMHgzMiwndG90YWxTdHJMZW5ndGgnOjB4NDAwKjB4MzIsJ2F1dG9FeHBhbmRMaW1pdCc6MHgxMzg4LCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4YX0sXzB4NGNiODc2PXsncHJvcHMnOjB4NSwnZWxlbWVudHMnOjB4NSwnc3RyTGVuZ3RoJzoweDEwMCwndG90YWxTdHJMZW5ndGgnOjB4MTAwKjB4MywnYXV0b0V4cGFuZExpbWl0JzoweDFlLCdhdXRvRXhwYW5kTWF4RGVwdGgnOjB4Mn07ZnVuY3Rpb24gXzB4M2Q1OTMyKF8weDRlZmFiMyxfMHgyZDFhOGIsXzB4NDUwY2U1LF8weDI2NGIxNSxfMHgxMTc3N2IsXzB4MjdmZDZhKXt2YXIgXzB4ZGIyNzliPV8weDFhNjMzMjtsZXQgXzB4MWY0YTk5LF8weDI2NGQ3Mzt0cnl7XzB4MjY0ZDczPV8weDJhMzk5OCgpLF8weDFmNGE5OT1fMHgzMjY3ZDJbXzB4MmQxYThiXSwhXzB4MWY0YTk5fHxfMHgyNjRkNzMtXzB4MWY0YTk5Wyd0cyddPjB4MWY0JiZfMHgxZjRhOTlbXzB4ZGIyNzliKDB4MjFmKV0mJl8weDFmNGE5OVsndGltZSddL18weDFmNGE5OVtfMHhkYjI3OWIoMHgyMWYpXTwweDY0PyhfMHgzMjY3ZDJbXzB4MmQxYThiXT1fMHgxZjRhOTk9eydjb3VudCc6MHgwLCd0aW1lJzoweDAsJ3RzJzpfMHgyNjRkNzN9LF8weDMyNjdkMltfMHhkYjI3OWIoMHgyN2MpXT17fSk6XzB4MjY0ZDczLV8weDMyNjdkMlsnaGl0cyddWyd0cyddPjB4MzImJl8weDMyNjdkMltfMHhkYjI3OWIoMHgyN2MpXVtfMHhkYjI3OWIoMHgyMWYpXSYmXzB4MzI2N2QyW18weGRiMjc5YigweDI3YyldW18weGRiMjc5YigweDIzOSldL18weDMyNjdkMltfMHhkYjI3OWIoMHgyN2MpXVsnY291bnQnXTwweDY0JiYoXzB4MzI2N2QyW18weGRiMjc5YigweDI3YyldPXt9KTtsZXQgXzB4NWY1YWY5PVtdLF8weDUwMWQxOT1fMHgxZjRhOTlbXzB4ZGIyNzliKDB4MjEyKV18fF8weDMyNjdkMltfMHhkYjI3OWIoMHgyN2MpXVtfMHhkYjI3OWIoMHgyMTIpXT9fMHg0Y2I4NzY6XzB4MmRkNzE5LF8weDFlNmU1ZT1fMHg0NTJkZTc9Pnt2YXIgXzB4MTljMzFiPV8weGRiMjc5YjtsZXQgXzB4MjAzYjMxPXt9O3JldHVybiBfMHgyMDNiMzFbXzB4MTljMzFiKDB4MjljKV09XzB4NDUyZGU3W18weDE5YzMxYigweDI5YyldLF8weDIwM2IzMVtfMHgxOWMzMWIoMHgyNTIpXT1fMHg0NTJkZTdbXzB4MTljMzFiKDB4MjUyKV0sXzB4MjAzYjMxW18weDE5YzMxYigweDJiYyldPV8weDQ1MmRlN1tfMHgxOWMzMWIoMHgyYmMpXSxfMHgyMDNiMzFbJ3RvdGFsU3RyTGVuZ3RoJ109XzB4NDUyZGU3Wyd0b3RhbFN0ckxlbmd0aCddLF8weDIwM2IzMVtfMHgxOWMzMWIoMHgxZDkpXT1fMHg0NTJkZTdbXzB4MTljMzFiKDB4MWQ5KV0sXzB4MjAzYjMxW18weDE5YzMxYigweDIwOCldPV8weDQ1MmRlN1snYXV0b0V4cGFuZE1heERlcHRoJ10sXzB4MjAzYjMxW18weDE5YzMxYigweDFlMSldPSEweDEsXzB4MjAzYjMxW18weDE5YzMxYigweDFmZCldPSFfMHgzOTY4NjUsXzB4MjAzYjMxW18weDE5YzMxYigweDIxYSldPTB4MSxfMHgyMDNiMzFbXzB4MTljMzFiKDB4Mjk2KV09MHgwLF8weDIwM2IzMVsnZXhwSWQnXT0ncm9vdF9leHBfaWQnLF8weDIwM2IzMVtfMHgxOWMzMWIoMHgyOTEpXT0ncm9vdF9leHAnLF8weDIwM2IzMVtfMHgxOWMzMWIoMHgyNzQpXT0hMHgwLF8weDIwM2IzMVtfMHgxOWMzMWIoMHgyODYpXT1bXSxfMHgyMDNiMzFbXzB4MTljMzFiKDB4MjZlKV09MHgwLF8weDIwM2IzMVsncmVzb2x2ZUdldHRlcnMnXT0hMHgwLF8weDIwM2IzMVtfMHgxOWMzMWIoMHgyOTMpXT0weDAsXzB4MjAzYjMxW18weDE5YzMxYigweDFmNSldPXsnY3VycmVudCc6dm9pZCAweDAsJ3BhcmVudCc6dm9pZCAweDAsJ2luZGV4JzoweDB9LF8weDIwM2IzMTt9O2Zvcih2YXIgXzB4Mzk2ZmZkPTB4MDtfMHgzOTZmZmQ8XzB4MTE3NzdiW18weGRiMjc5YigweDIzYildO18weDM5NmZmZCsrKV8weDVmNWFmOVtfMHhkYjI3OWIoMHgyYjEpXShfMHg1YTRjZDJbXzB4ZGIyNzliKDB4MWQzKV0oeyd0aW1lTm9kZSc6XzB4NGVmYWIzPT09J3RpbWUnfHx2b2lkIDB4MH0sXzB4MTE3NzdiW18weDM5NmZmZF0sXzB4MWU2ZTVlKF8weDUwMWQxOSkse30pKTtpZihfMHg0ZWZhYjM9PT1fMHhkYjI3OWIoMHgyNTYpKXtsZXQgXzB4MjNmMWUzPUVycm9yW18weGRiMjc5YigweDJiNSldO3RyeXtFcnJvcltfMHhkYjI3OWIoMHgyYjUpXT0weDEvMHgwLF8weDVmNWFmOVsncHVzaCddKF8weDVhNGNkMltfMHhkYjI3OWIoMHgxZDMpXSh7J3N0YWNrTm9kZSc6ITB4MH0sbmV3IEVycm9yKClbXzB4ZGIyNzliKDB4MjkwKV0sXzB4MWU2ZTVlKF8weDUwMWQxOSkseydzdHJMZW5ndGgnOjB4MS8weDB9KSk7fWZpbmFsbHl7RXJyb3JbXzB4ZGIyNzliKDB4MmI1KV09XzB4MjNmMWUzO319cmV0dXJueydtZXRob2QnOl8weGRiMjc5YigweDJhYSksJ3ZlcnNpb24nOl8weDNlZjlkOCwnYXJncyc6W3sndHMnOl8weDQ1MGNlNSwnc2Vzc2lvbic6XzB4MjY0YjE1LCdhcmdzJzpfMHg1ZjVhZjksJ2lkJzpfMHgyZDFhOGIsJ2NvbnRleHQnOl8weDI3ZmQ2YX1dfTt9Y2F0Y2goXzB4NTY3ZDE0KXtyZXR1cm57J21ldGhvZCc6J2xvZycsJ3ZlcnNpb24nOl8weDNlZjlkOCwnYXJncyc6W3sndHMnOl8weDQ1MGNlNSwnc2Vzc2lvbic6XzB4MjY0YjE1LCdhcmdzJzpbeyd0eXBlJzpfMHhkYjI3OWIoMHgxZjEpLCdlcnJvcic6XzB4NTY3ZDE0JiZfMHg1NjdkMTRbXzB4ZGIyNzliKDB4MjU0KV19XSwnaWQnOl8weDJkMWE4YiwnY29udGV4dCc6XzB4MjdmZDZhfV19O31maW5hbGx5e3RyeXtpZihfMHgxZjRhOTkmJl8weDI2NGQ3Myl7bGV0IF8weDU2NWVlND1fMHgyYTM5OTgoKTtfMHgxZjRhOTlbXzB4ZGIyNzliKDB4MjFmKV0rKyxfMHgxZjRhOTlbXzB4ZGIyNzliKDB4MjM5KV0rPV8weDRiMTA5ZihfMHgyNjRkNzMsXzB4NTY1ZWU0KSxfMHgxZjRhOTlbJ3RzJ109XzB4NTY1ZWU0LF8weDMyNjdkMltfMHhkYjI3OWIoMHgyN2MpXVtfMHhkYjI3OWIoMHgyMWYpXSsrLF8weDMyNjdkMltfMHhkYjI3OWIoMHgyN2MpXVsndGltZSddKz1fMHg0YjEwOWYoXzB4MjY0ZDczLF8weDU2NWVlNCksXzB4MzI2N2QyW18weGRiMjc5YigweDI3YyldWyd0cyddPV8weDU2NWVlNCwoXzB4MWY0YTk5W18weGRiMjc5YigweDIxZildPjB4MzJ8fF8weDFmNGE5OVtfMHhkYjI3OWIoMHgyMzkpXT4weDY0KSYmKF8weDFmNGE5OVtfMHhkYjI3OWIoMHgyMTIpXT0hMHgwKSwoXzB4MzI2N2QyW18weGRiMjc5YigweDI3YyldW18weGRiMjc5YigweDIxZildPjB4M2U4fHxfMHgzMjY3ZDJbXzB4ZGIyNzliKDB4MjdjKV1bJ3RpbWUnXT4weDEyYykmJihfMHgzMjY3ZDJbXzB4ZGIyNzliKDB4MjdjKV1bJ3JlZHVjZUxpbWl0cyddPSEweDApO319Y2F0Y2h7fX19cmV0dXJuIF8weDNkNTkzMjt9KChfMHgzMDllYWMsXzB4MjA4NzFhLF8weGQ5Yjg1NyxfMHg2N2EzNDYsXzB4YjhjYWFmLF8weDEzNWRjYixfMHgzOTlmMTAsXzB4MzY1MDk0LF8weDFlZjM4ZCxfMHgxNGJjMjYpPT57dmFyIF8weDNmMTU3Nj1fMHgxY2U4ZmQ7aWYoXzB4MzA5ZWFjWydfY29uc29sZV9uaW5qYSddKXJldHVybiBfMHgzMDllYWNbXzB4M2YxNTc2KDB4MjM0KV07aWYoIUooXzB4MzA5ZWFjLF8weDM2NTA5NCxfMHhiOGNhYWYpKXJldHVybiBfMHgzMDllYWNbXzB4M2YxNTc2KDB4MjM0KV09eydjb25zb2xlTG9nJzooKT0+e30sJ2NvbnNvbGVUcmFjZSc6KCk9Pnt9LCdjb25zb2xlVGltZSc6KCk9Pnt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt9LCdhdXRvTG9nJzooKT0+e30sJ2F1dG9Mb2dNYW55JzooKT0+e30sJ2F1dG9UcmFjZU1hbnknOigpPT57fSwnY292ZXJhZ2UnOigpPT57fSwnYXV0b1RyYWNlJzooKT0+e30sJ2F1dG9UaW1lJzooKT0+e30sJ2F1dG9UaW1lRW5kJzooKT0+e319LF8weDMwOWVhY1tfMHgzZjE1NzYoMHgyMzQpXTtsZXQgXzB4M2IxMGE2PVcoXzB4MzA5ZWFjKSxfMHgzZTY3NDg9XzB4M2IxMGE2W18weDNmMTU3NigweDI1MCldLF8weDE4YTZlYz1fMHgzYjEwYTZbXzB4M2YxNTc2KDB4MjZjKV0sXzB4NGQ1YWMyPV8weDNiMTBhNltfMHgzZjE1NzYoMHgyODUpXSxfMHgzNjBhNWI9eydoaXRzJzp7fSwndHMnOnt9fSxfMHgzZDFhMmM9WShfMHgzMDllYWMsXzB4MWVmMzhkLF8weDM2MGE1YixfMHgxMzVkY2IpLF8weDI5YWZmMD1fMHgyNzk5MTM9PntfMHgzNjBhNWJbJ3RzJ11bXzB4Mjc5OTEzXT1fMHgxOGE2ZWMoKTt9LF8weDEzMmQ5Mz0oXzB4YTJhNDE0LF8weDI1MmM4ZSk9Pnt2YXIgXzB4MjMzNzlkPV8weDNmMTU3NjtsZXQgXzB4NTkxY2IzPV8weDM2MGE1YlsndHMnXVtfMHgyNTJjOGVdO2lmKGRlbGV0ZSBfMHgzNjBhNWJbJ3RzJ11bXzB4MjUyYzhlXSxfMHg1OTFjYjMpe2xldCBfMHgyYWFhMTE9XzB4M2U2NzQ4KF8weDU5MWNiMyxfMHgxOGE2ZWMoKSk7XzB4NGQyZWViKF8weDNkMWEyYyhfMHgyMzM3OWQoMHgyMzkpLF8weGEyYTQxNCxfMHg0ZDVhYzIoKSxfMHg1ZTQ2NDQsW18weDJhYWExMV0sXzB4MjUyYzhlKSk7fX0sXzB4MzZjNDgzPV8weDJkNzgwZj0+XzB4NWFiMGFlPT57dmFyIF8weDRlYTVmOT1fMHgzZjE1NzY7dHJ5e18weDI5YWZmMChfMHg1YWIwYWUpLF8weDJkNzgwZihfMHg1YWIwYWUpO31maW5hbGx5e18weDMwOWVhY1tfMHg0ZWE1ZjkoMHgyYTApXVtfMHg0ZWE1ZjkoMHgyMzkpXT1fMHgyZDc4MGY7fX0sXzB4MWMxZGY2PV8weDUwOGU4ND0+XzB4NDg0ZTg0PT57dmFyIF8weGFiZmNhNT1fMHgzZjE1NzY7dHJ5e2xldCBbXzB4NTA1MzEyLF8weDVhNDkyY109XzB4NDg0ZTg0W18weGFiZmNhNSgweDJiYildKF8weGFiZmNhNSgweDFlNCkpO18weDEzMmQ5MyhfMHg1YTQ5MmMsXzB4NTA1MzEyKSxfMHg1MDhlODQoXzB4NTA1MzEyKTt9ZmluYWxseXtfMHgzMDllYWNbXzB4YWJmY2E1KDB4MmEwKV1bXzB4YWJmY2E1KDB4MjBkKV09XzB4NTA4ZTg0O319O18weDMwOWVhY1tfMHgzZjE1NzYoMHgyMzQpXT17J2NvbnNvbGVMb2cnOihfMHg0ODYyMWYsXzB4NDNkNDkwKT0+e3ZhciBfMHgyNzkwYjg9XzB4M2YxNTc2O18weDMwOWVhY1tfMHgyNzkwYjgoMHgyYTApXVtfMHgyNzkwYjgoMHgyYWEpXVtfMHgyNzkwYjgoMHgyODEpXSE9PV8weDI3OTBiOCgweDJhYikmJl8weDRkMmVlYihfMHgzZDFhMmMoJ2xvZycsXzB4NDg2MjFmLF8weDRkNWFjMigpLF8weDVlNDY0NCxfMHg0M2Q0OTApKTt9LCdjb25zb2xlVHJhY2UnOihfMHg0NjIxMGUsXzB4NTBhZjA0KT0+e3ZhciBfMHhkYjkyNmE9XzB4M2YxNTc2O18weDMwOWVhY1tfMHhkYjkyNmEoMHgyYTApXVtfMHhkYjkyNmEoMHgyYWEpXVtfMHhkYjkyNmEoMHgyODEpXSE9PV8weGRiOTI2YSgweDIzZSkmJl8weDRkMmVlYihfMHgzZDFhMmMoXzB4ZGI5MjZhKDB4MjU2KSxfMHg0NjIxMGUsXzB4NGQ1YWMyKCksXzB4NWU0NjQ0LF8weDUwYWYwNCkpO30sJ2NvbnNvbGVUaW1lJzooKT0+e3ZhciBfMHgzNjQxYWU9XzB4M2YxNTc2O18weDMwOWVhY1tfMHgzNjQxYWUoMHgyYTApXVtfMHgzNjQxYWUoMHgyMzkpXT1fMHgzNmM0ODMoXzB4MzA5ZWFjW18weDM2NDFhZSgweDJhMCldW18weDM2NDFhZSgweDIzOSldKTt9LCdjb25zb2xlVGltZUVuZCc6KCk9Pnt2YXIgXzB4NTczNTRjPV8weDNmMTU3NjtfMHgzMDllYWNbJ2NvbnNvbGUnXVtfMHg1NzM1NGMoMHgyMGQpXT1fMHgxYzFkZjYoXzB4MzA5ZWFjW18weDU3MzU0YygweDJhMCldW18weDU3MzU0YygweDIwZCldKTt9LCdhdXRvTG9nJzooXzB4M2IxM2I4LF8weDQ0MDUzZCk9PntfMHg0ZDJlZWIoXzB4M2QxYTJjKCdsb2cnLF8weDQ0MDUzZCxfMHg0ZDVhYzIoKSxfMHg1ZTQ2NDQsW18weDNiMTNiOF0pKTt9LCdhdXRvTG9nTWFueSc6KF8weDM1YzJmNSxfMHgxZTBiMWMpPT57dmFyIF8weDM3M2MzNj1fMHgzZjE1NzY7XzB4NGQyZWViKF8weDNkMWEyYyhfMHgzNzNjMzYoMHgyYWEpLF8weDM1YzJmNSxfMHg0ZDVhYzIoKSxfMHg1ZTQ2NDQsXzB4MWUwYjFjKSk7fSwnYXV0b1RyYWNlJzooXzB4MWZiY2VhLF8weDEyNDRlYSk9Pnt2YXIgXzB4MTQwZDA3PV8weDNmMTU3NjtfMHg0ZDJlZWIoXzB4M2QxYTJjKF8weDE0MGQwNygweDI1NiksXzB4MTI0NGVhLF8weDRkNWFjMigpLF8weDVlNDY0NCxbXzB4MWZiY2VhXSkpO30sJ2F1dG9UcmFjZU1hbnknOihfMHgxZmIyMTIsXzB4NTgwNTY2KT0+e3ZhciBfMHgzNmI5MjU9XzB4M2YxNTc2O18weDRkMmVlYihfMHgzZDFhMmMoXzB4MzZiOTI1KDB4MjU2KSxfMHgxZmIyMTIsXzB4NGQ1YWMyKCksXzB4NWU0NjQ0LF8weDU4MDU2NikpO30sJ2F1dG9UaW1lJzooXzB4YzcwYjUsXzB4NTk2MGJlLF8weDRjM2I2OCk9PntfMHgyOWFmZjAoXzB4NGMzYjY4KTt9LCdhdXRvVGltZUVuZCc6KF8weDIxMjM4NixfMHg1YTM5OGYsXzB4MmYxMTYwKT0+e18weDEzMmQ5MyhfMHg1YTM5OGYsXzB4MmYxMTYwKTt9LCdjb3ZlcmFnZSc6XzB4NDZiYmQzPT57dmFyIF8weDIxYTU2Mj1fMHgzZjE1NzY7XzB4NGQyZWViKHsnbWV0aG9kJzpfMHgyMWE1NjIoMHgyNzYpLCd2ZXJzaW9uJzpfMHgxMzVkY2IsJ2FyZ3MnOlt7J2lkJzpfMHg0NmJiZDN9XX0pO319O2xldCBfMHg0ZDJlZWI9YihfMHgzMDllYWMsXzB4MjA4NzFhLF8weGQ5Yjg1NyxfMHg2N2EzNDYsXzB4YjhjYWFmLF8weDE0YmMyNiksXzB4NWU0NjQ0PV8weDMwOWVhY1tfMHgzZjE1NzYoMHgyM2QpXTtyZXR1cm4gXzB4MzA5ZWFjW18weDNmMTU3NigweDIzNCldO30pKGdsb2JhbFRoaXMsXzB4MWNlOGZkKDB4MjMxKSxfMHgxY2U4ZmQoMHgyNGYpLFxcXCIvaG9tZS9pbnNhbmUvLnZzY29kZS9leHRlbnNpb25zL3dhbGxhYnlqcy5jb25zb2xlLW5pbmphLTEuMC4zMDEvbm9kZV9tb2R1bGVzXFxcIixfMHgxY2U4ZmQoMHgyMjMpLF8weDFjZThmZCgweDJhZiksXzB4MWNlOGZkKDB4MjczKSxfMHgxY2U4ZmQoMHgyMWUpLF8weDFjZThmZCgweDJhMiksXzB4MWNlOGZkKDB4MjYwKSk7ZnVuY3Rpb24gXzB4MjJjYSgpe3ZhciBfMHg0N2ZiMjQ9Wydfa2V5U3RyUmVnRXhwJywnZGVmYXVsdCcsJ25hbWUnLCdwcm90b3R5cGUnLCdIVE1MQWxsQ29sbGVjdGlvbicsJ2VudW1lcmFibGUnLCdub3cnLCdhdXRvRXhwYW5kUHJldmlvdXNPYmplY3RzJywnaG9zdG5hbWUnLCdfYWRkTG9hZE5vZGUnLCdfaXNTZXQnLCdfY29uc29sZU5pbmphQWxsb3dlZFRvU3RhcnQnLCdfcmVjb25uZWN0VGltZW91dCcsJ2dldCcsJ19zZXROb2RlRXhwcmVzc2lvblBhdGgnLCdwcm9jZXNzJywnX3RyZWVOb2RlUHJvcGVydGllc0FmdGVyRnVsbFZhbHVlJywnc3RhY2snLCdyb290RXhwcmVzc2lvbicsJ19pc05lZ2F0aXZlWmVybycsJ2FsbFN0ckxlbmd0aCcsJ2NyZWF0ZScsJ3Jlc29sdmVHZXR0ZXJzJywnbGV2ZWwnLCdfcHJvcGVydHlOYW1lJywnX3BfbGVuZ3RoJywnY29uY2F0JywnNDA2NDM5ekZkRnVKJywncGF0aCcsJ3Byb3BzJywnX2lzQXJyYXknLCd3YXJuJywnMzIwMDA0Y01VeHJJJywnY29uc29sZScsJ2RhdGEnLCcnLCdfc2V0Tm9kZVF1ZXJ5UGF0aCcsJ19udW1iZXJSZWdFeHAnLCdvYmplY3QnLCdfc2V0Tm9kZUlkJywnX3F1b3RlZFJlZ0V4cCcsJ19vYmplY3RUb1N0cmluZycsJ19oYXNTZXRPbkl0c1BhdGgnLCdsb2cnLCdkaXNhYmxlZExvZycsJ2JpZ2ludCcsJ2dldE93blByb3BlcnR5U3ltYm9scycsJ2Vycm9yJywnMS4wLjAnLCdqb2luJywncHVzaCcsJzM1NWxZeHdmdCcsJ2Nsb3NlJywnc3ltYm9sJywnc3RhY2tUcmFjZUxpbWl0JywnX2NsZWFuTm9kZScsJ2dsb2JhbCcsJzIyTFBnaGlXJywnMjFGVVllZEUnLCdfY29ubmVjdEF0dGVtcHRDb3VudCcsJ3NwbGl0Jywnc3RyTGVuZ3RoJywnTWFwJywnYXJyYXknLCd2YWx1ZU9mJywndW5kZWZpbmVkJywnbm9kZU1vZHVsZXMnLCdzZXJpYWxpemUnLCdfaGFzU3ltYm9sUHJvcGVydHlPbkl0c1BhdGgnLCdfbWF4Q29ubmVjdEF0dGVtcHRDb3VudCcsJ29uY2xvc2UnLCdudW1iZXInLCduZXh0LmpzJywnYXV0b0V4cGFuZExpbWl0JywnbG9nZ2VyXFxcXHgyMGZhaWxlZFxcXFx4MjB0b1xcXFx4MjBjb25uZWN0XFxcXHgyMHRvXFxcXHgyMGhvc3QsXFxcXHgyMHNlZVxcXFx4MjAnLCdzdHJpbmcnLCdzdHJpbmdpZnknLCdvbm9wZW4nLCdfcHJvY2Vzc1RyZWVOb2RlUmVzdWx0JywnX3BfbmFtZScsJ19jb25uZWN0ZWQnLCdzb3J0UHJvcHMnLCdfaXNQcmltaXRpdmVXcmFwcGVyVHlwZScsJ3BlcmZvcm1hbmNlJywnOmxvZ1BvaW50SWQ6JywnX3NldE5vZGVFeHBhbmRhYmxlU3RhdGUnLCdsb2dnZXJcXFxceDIwd2Vic29ja2V0XFxcXHgyMGVycm9yJywnX3VuZGVmaW5lZCcsJ3NldHRlcicsJ19wcm9wZXJ0eScsJ2NhcHBlZFByb3BzJywnZW52JywnZ2V0UHJvdG90eXBlT2YnLCdbb2JqZWN0XFxcXHgyME1hcF0nLCd3czovLycsJ19zb3J0UHJvcHMnLCdudXh0JywndW5rbm93bicsJ3BlcmZfaG9va3MnLCdzdWJzdHInLCdfYWRkT2JqZWN0UHJvcGVydHknLCdub2RlJywnOG9nekVaZycsJ21hdGNoJywnQm9vbGVhbicsJ29ubWVzc2FnZScsJ19wXycsJ19XZWJTb2NrZXQnLCdfdHlwZScsJ25vRnVuY3Rpb25zJywnbWFwJywnY3VycmVudCcsJ19pbk5leHRFZGdlJywnaHJ0aW1lJywnTkVHQVRJVkVfSU5GSU5JVFknLCdyZWxvYWQnLCd2ZXJzaW9ucycsJ2dldHRlcicsJ1tvYmplY3RcXFxceDIwRGF0ZV0nLCdcXFxceDIwYnJvd3NlcicsJ2F1dG9FeHBhbmRNYXhEZXB0aCcsJ2xvY2F0aW9uJywnY29uc3RydWN0b3InLCdfZ2V0T3duUHJvcGVydHlOYW1lcycsJ2lzQXJyYXknLCd0aW1lRW5kJywnU2V0JywncG9ydCcsJ193cycsJ1dlYlNvY2tldCcsJ3JlZHVjZUxpbWl0cycsJ19XZWJTb2NrZXRDbGFzcycsJ19zZXROb2RlUGVybWlzc2lvbnMnLCdjYXRjaCcsJ2hvc3QnLCdhbmd1bGFyJywnZ2F0ZXdheS5kb2NrZXIuaW50ZXJuYWwnLCdzZXQnLCdkZXB0aCcsJ2RhdGUnLCdfYWxsb3dlZFRvQ29ubmVjdE9uU2VuZCcsJ19jYXBJZlN0cmluZycsW1xcXCJsb2NhbGhvc3RcXFwiLFxcXCIxMjcuMC4wLjFcXFwiLFxcXCJleGFtcGxlLmN5cHJlc3MuaW9cXFwiLFxcXCJYdWJ1bnR1XFxcIixcXFwiMTAuMC4yLjE1XFxcIl0sJ2NvdW50JywnaW5kZXgnLCdudWxsJywnW29iamVjdFxcXFx4MjBBcnJheV0nLCd3ZWJwYWNrJywnX2Rpc3Bvc2VXZWJzb2NrZXQnLCdmdW5jTmFtZScsJ3JlcGxhY2UnLCdleHByZXNzaW9uc1RvRXZhbHVhdGUnLCdfU3ltYm9sJywnZ2V0T3duUHJvcGVydHlOYW1lcycsJ3dzL2luZGV4LmpzJywnZGVmaW5lUHJvcGVydHknLCdzbGljZScsJ2NhcHBlZCcsJ1BPU0lUSVZFX0lORklOSVRZJywnX2lzUHJpbWl0aXZlVHlwZScsJ2dldFdlYlNvY2tldENsYXNzJywnMTI3LjAuMC4xJywncGFyZW50JywndXJsJywnX2NvbnNvbGVfbmluamEnLCdfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywnb25lcnJvcicsJ19hZGRpdGlvbmFsTWV0YWRhdGEnLCdlZGdlJywndGltZScsJ2JpbmQnLCdsZW5ndGgnLCdzb3J0JywnX2NvbnNvbGVfbmluamFfc2Vzc2lvbicsJ2Rpc2FibGVkVHJhY2UnLCdfYmxhY2tsaXN0ZWRQcm9wZXJ0eScsJ19hbGxvd2VkVG9TZW5kJywnX3NldE5vZGVMYWJlbCcsJ19jb25uZWN0aW5nJywnX2FkZEZ1bmN0aW9uc05vZGUnLCdfcmVnRXhwVG9TdHJpbmcnLCd0b0xvd2VyQ2FzZScsJy4uLicsJ0NvbnNvbGVcXFxceDIwTmluamFcXFxceDIwZmFpbGVkXFxcXHgyMHRvXFxcXHgyMHNlbmRcXFxceDIwbG9ncyxcXFxceDIwcmVzdGFydGluZ1xcXFx4MjB0aGVcXFxceDIwcHJvY2Vzc1xcXFx4MjBtYXlcXFxceDIwaGVscDtcXFxceDIwYWxzb1xcXFx4MjBzZWVcXFxceDIwJywnNzQ0NDJnQllzb3knLCdTeW1ib2wnLCc2NjU4MjU0QXNOZW16JywnX2FkZFByb3BlcnR5JywnMTQzMjM2ME11QlVSbScsJ19hdHRlbXB0VG9SZWNvbm5lY3RTaG9ydGx5JywnZnVuY3Rpb24nLCczNDk5OScsJ2VsYXBzZWQnLCd0eXBlJywnZWxlbWVudHMnLCdfaXNNYXAnLCdtZXNzYWdlJywnX3NvY2tldCcsJ3RyYWNlJywnOGRRT01hRycsJ2lzRXhwcmVzc2lvblRvRXZhbHVhdGUnLCdodHRwczovL3Rpbnl1cmwuY29tLzM3eDhiNzl0JywnTnVtYmVyJywnY2FsbCcsJ19IVE1MQWxsQ29sbGVjdGlvbicsJ19pc1VuZGVmaW5lZCcsJ2RvY2tlcml6ZWRBcHAnLCdmb3JFYWNoJywnJywnX3dlYlNvY2tldEVycm9yRG9jc0xpbmsnLCdfaW5Ccm93c2VyJywnQnVmZmVyJywndGVzdCcsJ19jb25uZWN0VG9Ib3N0Tm93JywndW5yZWYnLCdfZ2V0T3duUHJvcGVydHlTeW1ib2xzJywndG90YWxTdHJMZW5ndGgnLCd0aGVuJywnTkVYVF9SVU5USU1FJywncGF0aFRvRmlsZVVSTCcsJ3RpbWVTdGFtcCcsJzEwNjg1MTNTTUxaRmknLCdhdXRvRXhwYW5kUHJvcGVydHlDb3VudCcsJ3BvcCcsJ3RvU3RyaW5nJywndmFsdWUnLCcxMDIzMzU1MEdJRFFSeCcsJzE3MTI3NTMwMTIxNTAnLCdhdXRvRXhwYW5kJywnbmVnYXRpdmVaZXJvJywnY292ZXJhZ2UnLCdTdHJpbmcnLCdfdHJlZU5vZGVQcm9wZXJ0aWVzQmVmb3JlRnVsbFZhbHVlJywnX2RhdGVUb1N0cmluZycsJ2NhcHBlZEVsZW1lbnRzJywnc2VuZCcsJ2hpdHMnLCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCdSZWdFeHAnXTtfMHgyMmNhPWZ1bmN0aW9uKCl7cmV0dXJuIF8weDQ3ZmIyNDt9O3JldHVybiBfMHgyMmNhKCk7fVwiKTt9Y2F0Y2goZSl7fX07LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9mdW5jdGlvbiBvb19vbyhpLC4uLnYpe3RyeXtvb19jbSgpLmNvbnNvbGVMb2coaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHIoaSwuLi52KXt0cnl7b29fY20oKS5jb25zb2xlVHJhY2UoaSwgdik7fWNhdGNoKGUpe30gcmV0dXJuIHZ9Oy8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovZnVuY3Rpb24gb29fdHMoKXt0cnl7b29fY20oKS5jb25zb2xlVGltZSgpO31jYXRjaChlKXt9fTsvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL2Z1bmN0aW9uIG9vX3RlKCl7dHJ5e29vX2NtKCkuY29uc29sZVRpbWVFbmQoKTt9Y2F0Y2goZSl7fX07Lyplc2xpbnQgdW5pY29ybi9uby1hYnVzaXZlLWVzbGludC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvZGlzYWJsZS1lbmFibGUtcGFpcjosZXNsaW50LWNvbW1lbnRzL25vLXVubGltaXRlZC1kaXNhYmxlOixlc2xpbnQtY29tbWVudHMvbm8tYWdncmVnYXRpbmctZW5hYmxlOixlc2xpbnQtY29tbWVudHMvbm8tZHVwbGljYXRlLWRpc2FibGU6LGVzbGludC1jb21tZW50cy9uby11bnVzZWQtZGlzYWJsZTosZXNsaW50LWNvbW1lbnRzL25vLXVudXNlZC1lbmFibGU6LCovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9