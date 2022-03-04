self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./components/SignIn.js":
/*!******************************!*\
  !*** ./components/SignIn.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\SignIn.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      item {\n        id\n        email\n        name\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SIGNIN_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_7__.default)(_templateObject());

var SignIn = function SignIn() {
  _s();

  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_3__.default)({
    email: "",
    password: ""
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  var _useMutation = useMutation(SIGNIN_MUTATION, {
    variables: {
      inputs: inputs,
      // refetch the currently logged in user
      refetchQueries: [{
        query: _User__WEBPACK_IMPORTED_MODULE_6__.CURRENT_USER_QUERY
      }]
    }
  }),
      _useMutation2 = (0,D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation, 2),
      signin = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      error = _useMutation2$.error,
      loading = _useMutation2$.loading;

  function handleSubmit(e) {
    e.preventDefault(); // send email and password to the graphqlAPI
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_4__.default, {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "Sign Into Your Account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("fieldset", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "email",
          id: "email",
          name: "email",
          placeholder: "Your Email Address",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "password",
        children: ["Password", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "password",
          id: "password",
          name: "password",
          placeholder: "Password",
          autoComplete: "password",
          value: inputs.password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "Sign In!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
};

_s(SignIn, "sg1URPqH60vhPzb2oqwgBpjO7qY=", true, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_3__.default];
});

_c = SignIn;
/* harmony default export */ __webpack_exports__["default"] = (SignIn);

var _c;

$RefreshReg$(_c, "SignIn");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduSW4uanMiXSwibmFtZXMiOlsiU0lHTklOX01VVEFUSU9OIiwiZ3FsIiwiU2lnbkluIiwidXNlRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJDVVJSRU5UX1VTRVJfUVVFUlkiLCJzaWduaW4iLCJlcnJvciIsImxvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0Msb0RBQUgsbUJBQXJCOztBQVlBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxpQkFDb0NDLHFEQUFPLENBQUM7QUFDN0RDLFNBQUssRUFBRSxFQURzRDtBQUU3REMsWUFBUSxFQUFFO0FBRm1ELEdBQUQsQ0FEM0M7QUFBQSxNQUNYQyxNQURXLFlBQ1hBLE1BRFc7QUFBQSxNQUNIQyxZQURHLFlBQ0hBLFlBREc7QUFBQSxNQUNXQyxTQURYLFlBQ1dBLFNBRFg7QUFBQSxNQUNzQkMsU0FEdEIsWUFDc0JBLFNBRHRCOztBQUFBLHFCQU1rQkMsV0FBVyxDQUFDVixlQUFELEVBQWtCO0FBQ2hFVyxhQUFTLEVBQUU7QUFDVEwsWUFBTSxFQUFOQSxNQURTO0FBRVQ7QUFDQU0sb0JBQWMsRUFBRSxDQUFDO0FBQUVDLGFBQUssRUFBRUMscURBQWtCQTtBQUEzQixPQUFEO0FBSFA7QUFEcUQsR0FBbEIsQ0FON0I7QUFBQTtBQUFBLE1BTVpDLE1BTlk7QUFBQTtBQUFBLE1BTUZDLEtBTkUsa0JBTUZBLEtBTkU7QUFBQSxNQU1LQyxPQU5MLGtCQU1LQSxPQU5MOztBQWNuQixXQUFTQyxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUN2QkEsS0FBQyxDQUFDQyxjQUFGLEdBRHVCLENBRXZCO0FBQ0Q7O0FBRUQsc0JBQ0UsOERBQUMsaURBQUQ7QUFBTSxVQUFNLEVBQUMsTUFBYjtBQUFvQixZQUFRLEVBQUVGLFlBQTlCO0FBQUEsNEJBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQUEsOEJBQ0U7QUFBTyxlQUFPLEVBQUMsT0FBZjtBQUFBLHlDQUVFO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxZQUFFLEVBQUMsT0FGTDtBQUdFLGNBQUksRUFBQyxPQUhQO0FBSUUscUJBQVcsRUFBQyxvQkFKZDtBQUtFLHNCQUFZLEVBQUMsT0FMZjtBQU1FLGVBQUssRUFBRVosTUFBTSxDQUFDRixLQU5oQjtBQU9FLGtCQUFRLEVBQUVHO0FBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWFFO0FBQU8sZUFBTyxFQUFDLFVBQWY7QUFBQSw0Q0FFRTtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsWUFBRSxFQUFDLFVBRkw7QUFHRSxjQUFJLEVBQUMsVUFIUDtBQUlFLHFCQUFXLEVBQUMsVUFKZDtBQUtFLHNCQUFZLEVBQUMsVUFMZjtBQU1FLGVBQUssRUFBRUQsTUFBTSxDQUFDRCxRQU5oQjtBQU9FLGtCQUFRLEVBQUVFO0FBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRixlQXlCRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0NELENBckREOztHQUFNTCxNO1VBQ21EQyxpRDs7O0tBRG5ERCxNO0FBdUROLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi42YTJkYzMwN2JhMTM3MjAyNzQyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL3N0eWxlcy9Gb3JtXCI7XHJcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSBcIi4vRXJyb3JNZXNzYWdlXCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gXCIuL1VzZXJcIjtcclxuXHJcbmNvbnN0IFNJR05JTl9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBTSUdOSU5fTVVUQVRJT04oJGVtYWlsOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcclxuICAgIC4uLiBvbiBVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRTdWNjZXNzIHtcclxuICAgICAgaXRlbSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNpZ25JbiA9ICgpID0+IHtcclxuICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCBjbGVhckZvcm0sIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbc2lnbmluLCB7IGVycm9yLCBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oU0lHTklOX01VVEFUSU9OLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaW5wdXRzLFxyXG4gICAgICAvLyByZWZldGNoIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcclxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gc2VuZCBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gdGhlIGdyYXBocWxBUElcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybSBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIHsvKiA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz4gKi99XHJcbiAgICAgIHsvKiBkaXNhYmxlZD17bG9hZGluZ30gYXJpYS1idXN5PXtsb2FkaW5nfSAqL31cclxuICAgICAgPGgyPlNpZ24gSW50byBZb3VyIEFjY291bnQ8L2gyPlxyXG4gICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgRW1haWxcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIEluITwvYnV0dG9uPlxyXG4gICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=