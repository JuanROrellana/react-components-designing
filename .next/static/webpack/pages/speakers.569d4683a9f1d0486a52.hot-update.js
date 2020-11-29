webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Speakers; });\n/* harmony import */ var _home_juanjo_Documents_programming_js_react_react_designing_components_code_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _SpeakerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpeakerContext */ \"./src/components/Speakers/SpeakerContext.js\");\n/* harmony import */ var _SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SpeakerSearchBar/SpeakerSearchBar */ \"./src/components/SpeakerSearchBar/SpeakerSearchBar.js\");\n/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Speaker/Speaker */ \"./src/components/Speaker/Speaker.js\");\n\n\n\nvar _jsxFileName = \"/home/juanjo/Documents/programming/js/react/react-designing-components/code/src/components/Speakers/Speakers.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_juanjo_Documents_programming_js_react_react_designing_components_code_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction Speakers() {\n  _s();\n\n  var _this = this;\n\n  var speakers = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_SpeakerContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      searchQuery: searchQuery,\n      setSearchQuery: setSearchQuery\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12\",\n      children: speakers.filter(function (rec) {\n        var targetString = \"\".concat(rec.firstName, \" \").concat(rec.lastName).toLowerCase();\n        return searchQuery.length === 0 ? true : targetString.includes(searchQuery.toLowerCase());\n      }).map(function (speaker) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _objectSpread({}, speaker), speaker.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Speakers, \"aMd6cSkXMZipoOEJtOwYcjt8HP0=\");\n\n_c = Speakers;\n\nvar _c;\n\n$RefreshReg$(_c, \"Speakers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanM/MGJlYyJdLCJuYW1lcyI6WyJTcGVha2VycyIsInNwZWFrZXJzIiwidXNlQ29udGV4dCIsIlNwZWFrZXJDb250ZXh0IiwidXNlU3RhdGUiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiZmlsdGVyIiwicmVjIiwidGFyZ2V0U3RyaW5nIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImluY2x1ZGVzIiwibWFwIiwic3BlYWtlciIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsUUFBVCxHQUFxQjtBQUFBOztBQUFBOztBQUNoQyxNQUFNQyxRQUFRLEdBQUdDLHdEQUFVLENBQUNDLHVEQUFELENBQTNCOztBQURnQyxrQkFHTUMsc0RBQVEsQ0FBQyxFQUFELENBSGQ7QUFBQSxNQUd6QkMsV0FIeUI7QUFBQSxNQUdaQyxjQUhZOztBQUloQyxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLDBFQUFEO0FBQWtCLGlCQUFXLEVBQUVELFdBQS9CO0FBQTRDLG9CQUFjLEVBQUVDO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUssZUFBUyxFQUFDLHVEQUFmO0FBQUEsZ0JBRUtMLFFBQVEsQ0FDSk0sTUFESixDQUNXLFVBQUNDLEdBQUQsRUFBUztBQUNiLFlBQU1DLFlBQVksR0FBRyxVQUFHRCxHQUFHLENBQUNFLFNBQVAsY0FBb0JGLEdBQUcsQ0FBQ0csUUFBeEIsRUFBbUNDLFdBQW5DLEVBQXJCO0FBQ0EsZUFBT1AsV0FBVyxDQUFDUSxNQUFaLEtBQXVCLENBQXZCLEdBQ0QsSUFEQyxHQUVESixZQUFZLENBQUNLLFFBQWIsQ0FBc0JULFdBQVcsQ0FBQ08sV0FBWixFQUF0QixDQUZOO0FBR0gsT0FOSixFQU9JRyxHQVBKLENBT1EsVUFBQ0MsT0FBRDtBQUFBLDRCQUNELHFFQUFDLHdEQUFELG9CQUE4QkEsT0FBOUIsR0FBY0EsT0FBTyxDQUFDQyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURDO0FBQUEsT0FQUjtBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtCSDs7R0F0QnVCakIsUTs7S0FBQUEsUSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL1NwZWFrZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcGVha2VyQ29udGV4dCBmcm9tIFwiLi9TcGVha2VyQ29udGV4dFwiO1xuaW1wb3J0IFNwZWFrZXJTZWFyY2hCYXIgZnJvbSBcIi4uL1NwZWFrZXJTZWFyY2hCYXIvU3BlYWtlclNlYXJjaEJhclwiO1xuaW1wb3J0IFNwZWFrZXIgZnJvbSAnLi4vU3BlYWtlci9TcGVha2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BlYWtlcnMoKSAge1xuICAgIGNvbnN0IHNwZWFrZXJzID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XG5cbiAgICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFNwZWFrZXJTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBncmlkLWNvbHMtMSBnYXAtMTJcIj5cblxuICAgICAgICAgICAgICAgIHtzcGVha2Vyc1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChyZWMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFN0cmluZyA9IGAke3JlYy5maXJzdE5hbWV9ICR7cmVjLmxhc3ROYW1lfWAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWFyY2hRdWVyeS5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRhcmdldFN0cmluZy5pbmNsdWRlcyhzZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoc3BlYWtlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXIga2V5PXtzcGVha2VyLmlkfSB7Li4uc3BlYWtlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speakers/Speakers.js\n");

/***/ })

})