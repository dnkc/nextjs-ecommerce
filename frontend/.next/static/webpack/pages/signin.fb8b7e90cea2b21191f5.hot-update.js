self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./components/SignIn.js":
/*!******************************!*\
  !*** ./components/SignIn.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\SignIn.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n    authenticateUserWithPassword(email: $email, password: $password)\n    ... on UserAuthenticationWithPasswordSuccess {\n      item {\n        id\n        email\n        name\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var SIGNIN_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_9__.default)(_templateObject());

var SignIn = function SignIn() {
  _s();

  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_5__.default)({
    email: "",
    password: ""
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation)(SIGNIN_MUTATION, {
    variables: {
      inputs: inputs,
      // refetch the currently logged in user
      refetchQueries: [{
        query: _User__WEBPACK_IMPORTED_MODULE_8__.CURRENT_USER_QUERY
      }]
    }
  }),
      _useMutation2 = (0,D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),
      signin = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      error = _useMutation2$.error,
      loading = _useMutation2$.loading;

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = (0,D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var res;
      return D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault(); // send email and password to the graphqlAPI

              _context.next = 3;
              return signin();

            case 3:
              res = _context.sent;
              console.log(res);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_6__.default, {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
      children: "Sign Into Your Account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("fieldset", {
      disabled: loading,
      "aria-busy": loading,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "email",
          id: "email",
          name: "email",
          placeholder: "Your Email Address",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        htmlFor: "password",
        children: ["Password", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          type: "password",
          id: "password",
          name: "password",
          placeholder: "Password",
          autoComplete: "password",
          value: inputs.password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        type: "submit",
        children: "Sign In!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_s(SignIn, "sg1URPqH60vhPzb2oqwgBpjO7qY=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_5__.default, _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduSW4uanMiXSwibmFtZXMiOlsiU0lHTklOX01VVEFUSU9OIiwiZ3FsIiwiU2lnbkluIiwidXNlRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJjbGVhckZvcm0iLCJyZXNldEZvcm0iLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJDVVJSRU5UX1VTRVJfUVVFUlkiLCJzaWduaW4iLCJlcnJvciIsImxvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0Msb0RBQUgsbUJBQXJCOztBQWFBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxpQkFDb0NDLHFEQUFPLENBQUM7QUFDN0RDLFNBQUssRUFBRSxFQURzRDtBQUU3REMsWUFBUSxFQUFFO0FBRm1ELEdBQUQsQ0FEM0M7QUFBQSxNQUNYQyxNQURXLFlBQ1hBLE1BRFc7QUFBQSxNQUNIQyxZQURHLFlBQ0hBLFlBREc7QUFBQSxNQUNXQyxTQURYLFlBQ1dBLFNBRFg7QUFBQSxNQUNzQkMsU0FEdEIsWUFDc0JBLFNBRHRCOztBQUFBLHFCQU1rQkMsNERBQVcsQ0FBQ1YsZUFBRCxFQUFrQjtBQUNoRVcsYUFBUyxFQUFFO0FBQ1RMLFlBQU0sRUFBTkEsTUFEUztBQUVUO0FBQ0FNLG9CQUFjLEVBQUUsQ0FBQztBQUFFQyxhQUFLLEVBQUVDLHFEQUFrQkE7QUFBM0IsT0FBRDtBQUhQO0FBRHFELEdBQWxCLENBTjdCO0FBQUE7QUFBQSxNQU1aQyxNQU5ZO0FBQUE7QUFBQSxNQU1GQyxLQU5FLGtCQU1GQSxLQU5FO0FBQUEsTUFNS0MsT0FOTCxrQkFNS0EsT0FOTDs7QUFBQSxXQWNKQyxZQWRJO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdVQWNuQixpQkFBNEJDLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxlQUFDLENBQUNDLGNBQUYsR0FERixDQUVFOztBQUZGO0FBQUEscUJBR29CTCxNQUFNLEVBSDFCOztBQUFBO0FBR1FNLGlCQUhSO0FBSUVDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjs7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWRtQjtBQUFBO0FBQUE7O0FBcUJuQixzQkFDRSw4REFBQyxpREFBRDtBQUFNLFVBQU0sRUFBQyxNQUFiO0FBQW9CLFlBQVEsRUFBRUgsWUFBOUI7QUFBQSw0QkFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBVSxjQUFRLEVBQUVELE9BQXBCO0FBQTZCLG1CQUFXQSxPQUF4QztBQUFBLDhCQUNFO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSx5Q0FFRTtBQUNFLGNBQUksRUFBQyxPQURQO0FBRUUsWUFBRSxFQUFDLE9BRkw7QUFHRSxjQUFJLEVBQUMsT0FIUDtBQUlFLHFCQUFXLEVBQUMsb0JBSmQ7QUFLRSxzQkFBWSxFQUFDLE9BTGY7QUFNRSxlQUFLLEVBQUVYLE1BQU0sQ0FBQ0YsS0FOaEI7QUFPRSxrQkFBUSxFQUFFRztBQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFhRTtBQUFPLGVBQU8sRUFBQyxVQUFmO0FBQUEsNENBRUU7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLFlBQUUsRUFBQyxVQUZMO0FBR0UsY0FBSSxFQUFDLFVBSFA7QUFJRSxxQkFBVyxFQUFDLFVBSmQ7QUFLRSxzQkFBWSxFQUFDLFVBTGY7QUFNRSxlQUFLLEVBQUVELE1BQU0sQ0FBQ0QsUUFOaEI7QUFPRSxrQkFBUSxFQUFFRTtBQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkYsZUF5QkU7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlDRCxDQXRERDs7R0FBTUwsTTtVQUNtREMsaUQsRUFLbEJPLHdEOzs7S0FOakNSLE07QUF3RE4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLmZiOGI3ZTkwY2VhMmIyMTE5MWY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlRm9ybSBmcm9tIFwiLi4vbGliL3VzZUZvcm1cIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vc3R5bGVzL0Zvcm1cIjtcclxuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSBcIi4vVXNlclwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuY29uc3QgU0lHTklOX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFNJR05JTl9NVVRBVElPTigkZW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xyXG4gICAgYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZChlbWFpbDogJGVtYWlsLCBwYXNzd29yZDogJHBhc3N3b3JkKVxyXG4gICAgLi4uIG9uIFVzZXJBdXRoZW50aWNhdGlvbldpdGhQYXNzd29yZFN1Y2Nlc3Mge1xyXG4gICAgICBpdGVtIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGVtYWlsXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2lnbkluID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIGNsZWFyRm9ybSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtzaWduaW4sIHsgZXJyb3IsIGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihTSUdOSU5fTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBpbnB1dHMsXHJcbiAgICAgIC8vIHJlZmV0Y2ggdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdXNlclxyXG4gICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byB0aGUgZ3JhcGhxbEFQSVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgc2lnbmluKCk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgey8qIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfSAvPiAqL31cclxuICAgICAgPGgyPlNpZ24gSW50byBZb3VyIEFjY291bnQ8L2gyPlxyXG4gICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9IGFyaWEtYnVzeT17bG9hZGluZ30+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgRW1haWxcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIEVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5wYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIEluITwvYnV0dG9uPlxyXG4gICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=