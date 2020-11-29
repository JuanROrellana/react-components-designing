webpackHotUpdate_N_E("pages/speakers",{

/***/ "./src/components/Speakers/Speakers.js":
/*!*********************************************!*\
  !*** ./src/components/Speakers/Speakers.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Speakers; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SpeakerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerContext */ \"./src/components/Speakers/SpeakerContext.js\");\n/* harmony import */ var _SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SpeakerSearchBar/SpeakerSearchBar */ \"./src/components/SpeakerSearchBar/SpeakerSearchBar.js\");\n/* harmony import */ var _Speaker_Speaker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Speaker/Speaker */ \"./src/components/Speaker/Speaker.js\");\n\n\nvar _jsxFileName = \"/home/juanjo/Documents/programming/js/react/react-designing-components/code/src/components/Speakers/Speakers.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Speakers() {\n  _s();\n\n  var _this = this;\n\n  var speakers = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_SpeakerContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      searchQuery = _useState[0],\n      setSearchQuery = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SpeakerSearchBar_SpeakerSearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      searchQuery: searchQuery,\n      setSearchQuery: setSearchQuery\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12\",\n      children: [speakers.filter(function (rec) {\n        var targetString = \"\".concat(rec.firstName);\n      }), speakers.map(function (speaker) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Speaker_Speaker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          speaker: speaker\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Speakers, \"aMd6cSkXMZipoOEJtOwYcjt8HP0=\");\n\n_c = Speakers;\n\nvar _c;\n\n$RefreshReg$(_c, \"Speakers\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnMvU3BlYWtlcnMuanM/MGJlYyJdLCJuYW1lcyI6WyJTcGVha2VycyIsInNwZWFrZXJzIiwidXNlQ29udGV4dCIsIlNwZWFrZXJDb250ZXh0IiwidXNlU3RhdGUiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiZmlsdGVyIiwicmVjIiwidGFyZ2V0U3RyaW5nIiwiZmlyc3ROYW1lIiwibWFwIiwic3BlYWtlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFDaEMsTUFBTUMsUUFBUSxHQUFHQyx3REFBVSxDQUFDQyx1REFBRCxDQUEzQjs7QUFEZ0Msa0JBR01DLHNEQUFRLENBQUMsRUFBRCxDQUhkO0FBQUEsTUFHekJDLFdBSHlCO0FBQUEsTUFHWkMsY0FIWTs7QUFJaEMsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQywwRUFBRDtBQUFrQixpQkFBVyxFQUFFRCxXQUEvQjtBQUE0QyxvQkFBYyxFQUFFQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBQyx1REFBZjtBQUFBLGlCQUNLTCxRQUFRLENBQ0pNLE1BREosQ0FDVyxVQUFDQyxHQUFELEVBQVM7QUFDYixZQUFNQyxZQUFZLGFBQU1ELEdBQUcsQ0FBQ0UsU0FBVixDQUFsQjtBQUNILE9BSEosQ0FETCxFQUtLVCxRQUFRLENBQ0pVLEdBREosQ0FDUSxVQUFDQyxPQUFEO0FBQUEsNEJBQ0wscUVBQUMsd0RBQUQ7QUFBUyxpQkFBTyxFQUFFQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURLO0FBQUEsT0FEUixDQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZUg7O0dBbkJ1QlosUTs7S0FBQUEsUSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzL1NwZWFrZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTcGVha2VyQ29udGV4dCBmcm9tIFwiLi9TcGVha2VyQ29udGV4dFwiO1xuaW1wb3J0IFNwZWFrZXJTZWFyY2hCYXIgZnJvbSBcIi4uL1NwZWFrZXJTZWFyY2hCYXIvU3BlYWtlclNlYXJjaEJhclwiO1xuaW1wb3J0IFNwZWFrZXIgZnJvbSAnLi4vU3BlYWtlci9TcGVha2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3BlYWtlcnMoKSAge1xuICAgIGNvbnN0IHNwZWFrZXJzID0gdXNlQ29udGV4dChTcGVha2VyQ29udGV4dCk7XG5cbiAgICBjb25zdCBbc2VhcmNoUXVlcnksIHNldFNlYXJjaFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFNwZWFrZXJTZWFyY2hCYXIgc2VhcmNoUXVlcnk9e3NlYXJjaFF1ZXJ5fSBzZXRTZWFyY2hRdWVyeT17c2V0U2VhcmNoUXVlcnl9Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBncmlkLWNvbHMtMSBnYXAtMTJcIj5cbiAgICAgICAgICAgICAgICB7c3BlYWtlcnNcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigocmVjKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRTdHJpbmcgPSBgJHtyZWMuZmlyc3ROYW1lfWBcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge3NwZWFrZXJzXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHNwZWFrZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXIgc3BlYWtlcj17c3BlYWtlcn0vPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speakers/Speakers.js\n");

/***/ })

})