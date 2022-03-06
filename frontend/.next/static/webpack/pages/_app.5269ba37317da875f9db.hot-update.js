self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Checkout; }
/* harmony export */ });
/* harmony import */ var D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\Checkout.js",
    _s = $RefreshSig$();







var CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.form.withConfig({
  displayName: "Checkout__CheckoutFormStyles",
  componentId: "sc-10mtoy5-0"
})(["box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;"]);
_c = CheckoutFormStyles;
var NEXT_KEY = "pk_test_51HW5fpJNuB2GTMbH2ZJpbk10WjHkkyLEFyKkpMXfG41bBtzJhFkiTydXOvJNmbepO2s6E4AXVVQnN8gjnMim7ukg00zn0HN9Wq";
var stripeLib = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__.loadStripe)(NEXT_KEY);

function CheckoutForm() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.useStripe)();
  var elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.useElements)();

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = (0,D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var _yield$stripe$createP, error, paymentMethod;

      return D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // stop form from submitting and turn loader on
              e.preventDefault();
              setLoading(true); // start the page transition

              nprogress__WEBPACK_IMPORTED_MODULE_7___default().start(); // create the payment method via stripe (token comes back if successful)

              _context.next = 5;
              return stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.CardElement)
              });

            case 5:
              _yield$stripe$createP = _context.sent;
              error = _yield$stripe$createP.error;
              paymentMethod = _yield$stripe$createP.paymentMethod;

              // handle any errors from stripe (CC declined, etc)
              if (error) {
                setError(error);
              } // console.log(paymentMethod);
              // console.log(error);
              // send the token from step 3 to our keystone server, via custom mutation
              // change the page to view the order
              // close the cart
              // turn the loader off


              console.log("to do");

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CheckoutFormStyles, {
    onSubmit: handleSubmit,
    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      style: {
        fontSize: 12
      },
      children: "error.message"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.CardElement, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_SickButton__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: "Check Out Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

_s(CheckoutForm, "/GTcQkkNlUgykvoAY6A4l3RHUP4=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.useStripe, _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.useElements];
});

_c2 = CheckoutForm;
function Checkout() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.Elements, {
    stripe: stripeLib,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CheckoutForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);
}
_c3 = Checkout;

var _c, _c2, _c3;

$RefreshReg$(_c, "CheckoutFormStyles");
$RefreshReg$(_c2, "CheckoutForm");
$RefreshReg$(_c3, "Checkout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcyJdLCJuYW1lcyI6WyJDaGVja291dEZvcm1TdHlsZXMiLCJzdHlsZWQiLCJORVhUX0tFWSIsInByb2Nlc3MiLCJzdHJpcGVMaWIiLCJsb2FkU3RyaXBlIiwiQ2hlY2tvdXRGb3JtIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdHJpcGUiLCJ1c2VTdHJpcGUiLCJlbGVtZW50cyIsInVzZUVsZW1lbnRzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiblByb2dyZXNzIiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiZ2V0RWxlbWVudCIsIkNhcmRFbGVtZW50IiwicGF5bWVudE1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJmb250U2l6ZSIsIkNoZWNrb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHQyxzRUFBSDtBQUFBO0FBQUE7QUFBQSw4SUFBeEI7S0FBTUQsa0I7QUFRTixJQUFNRSxRQUFRLEdBQUdDLDZHQUFqQjtBQUVBLElBQU1DLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQ0gsUUFBRCxDQUE1Qjs7QUFFQSxTQUFTSSxZQUFULEdBQXdCO0FBQUE7O0FBQUEsa0JBQ0lDLCtDQUFRLEVBRFo7QUFBQSxNQUNmQyxLQURlO0FBQUEsTUFDUkMsUUFEUTs7QUFBQSxtQkFFUUYsK0NBQVEsQ0FBQyxLQUFELENBRmhCO0FBQUEsTUFFZkcsT0FGZTtBQUFBLE1BRU5DLFVBRk07O0FBR3RCLE1BQU1DLE1BQU0sR0FBR0Msa0VBQVMsRUFBeEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLG9FQUFXLEVBQTVCOztBQUpzQixXQUtQQyxZQUxPO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdVQUt0QixpQkFBNEJDLENBQTVCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTtBQUNBQSxlQUFDLENBQUNDLGNBQUY7QUFDQVAsd0JBQVUsQ0FBQyxJQUFELENBQVYsQ0FIRixDQUlFOztBQUNBUSxvRUFBQSxHQUxGLENBTUU7O0FBTkY7QUFBQSxxQkFPeUNQLE1BQU0sQ0FBQ1EsbUJBQVAsQ0FBMkI7QUFDaEVDLG9CQUFJLEVBQUUsTUFEMEQ7QUFFaEVDLG9CQUFJLEVBQUVSLFFBQVEsQ0FBQ1MsVUFBVCxDQUFvQkMsZ0VBQXBCO0FBRjBELGVBQTNCLENBUHpDOztBQUFBO0FBQUE7QUFPVWhCLG1CQVBWLHlCQU9VQSxLQVBWO0FBT2lCaUIsMkJBUGpCLHlCQU9pQkEsYUFQakI7O0FBV0U7QUFDQSxrQkFBSWpCLEtBQUosRUFBVztBQUNUQyx3QkFBUSxDQUFDRCxLQUFELENBQVI7QUFDRCxlQWRILENBZUU7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7QUFFQWtCLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaOztBQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUxzQjtBQUFBO0FBQUE7O0FBaUN0QixzQkFDRSw4REFBQyxrQkFBRDtBQUFvQixZQUFRLEVBQUVYLFlBQTlCO0FBQUEsZUFDR1IsS0FBSyxpQkFBSTtBQUFHLFdBQUssRUFBRTtBQUFFb0IsZ0JBQVEsRUFBRTtBQUFaLE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEWixlQUVFLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7R0F4Q1F0QixZO1VBR1FPLDhELEVBQ0VFLGdFOzs7TUFKVlQsWTtBQTBDTSxTQUFTdUIsUUFBVCxHQUFvQjtBQUNqQyxzQkFDRSw4REFBQyw2REFBRDtBQUFVLFVBQU0sRUFBRXpCLFNBQWxCO0FBQUEsMkJBQ0UsOERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7TUFOdUJ5QixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTI2OWJhMzczMTdkYTg3NWY5ZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcclxuaW1wb3J0IHtcclxuICBDYXJkRWxlbWVudCxcclxuICBFbGVtZW50cyxcclxuICB1c2VFbGVtZW50cyxcclxuICB1c2VTdHJpcGUsXHJcbn0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XHJcbmltcG9ydCBTaWNrQnV0dG9uIGZyb20gXCIuL3N0eWxlcy9TaWNrQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRGb3JtU3R5bGVzID0gc3R5bGVkLmZvcm1gXHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMXJlbTtcclxuYDtcclxuY29uc3QgTkVYVF9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfS0VZO1xyXG5cclxuY29uc3Qgc3RyaXBlTGliID0gbG9hZFN0cmlwZShORVhUX0tFWSk7XHJcblxyXG5mdW5jdGlvbiBDaGVja291dEZvcm0oKSB7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcclxuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIC8vIHN0b3AgZm9ybSBmcm9tIHN1Ym1pdHRpbmcgYW5kIHR1cm4gbG9hZGVyIG9uXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgLy8gc3RhcnQgdGhlIHBhZ2UgdHJhbnNpdGlvblxyXG4gICAgblByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAvLyBjcmVhdGUgdGhlIHBheW1lbnQgbWV0aG9kIHZpYSBzdHJpcGUgKHRva2VuIGNvbWVzIGJhY2sgaWYgc3VjY2Vzc2Z1bClcclxuICAgIGNvbnN0IHsgZXJyb3IsIHBheW1lbnRNZXRob2QgfSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcclxuICAgICAgdHlwZTogXCJjYXJkXCIsXHJcbiAgICAgIGNhcmQ6IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpLFxyXG4gICAgfSk7XHJcbiAgICAvLyBoYW5kbGUgYW55IGVycm9ycyBmcm9tIHN0cmlwZSAoQ0MgZGVjbGluZWQsIGV0YylcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwYXltZW50TWV0aG9kKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIC8vIHNlbmQgdGhlIHRva2VuIGZyb20gc3RlcCAzIHRvIG91ciBrZXlzdG9uZSBzZXJ2ZXIsIHZpYSBjdXN0b20gbXV0YXRpb25cclxuXHJcbiAgICAvLyBjaGFuZ2UgdGhlIHBhZ2UgdG8gdmlldyB0aGUgb3JkZXJcclxuXHJcbiAgICAvLyBjbG9zZSB0aGUgY2FydFxyXG5cclxuICAgIC8vIHR1cm4gdGhlIGxvYWRlciBvZmZcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInRvIGRvXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGVja291dEZvcm1TdHlsZXMgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIHtlcnJvciAmJiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+ZXJyb3IubWVzc2FnZTwvcD59XHJcbiAgICAgIDxDYXJkRWxlbWVudCAvPlxyXG4gICAgICA8U2lja0J1dHRvbj5DaGVjayBPdXQgTm93PC9TaWNrQnV0dG9uPlxyXG4gICAgPC9DaGVja291dEZvcm1TdHlsZXM+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxFbGVtZW50cyBzdHJpcGU9e3N0cmlwZUxpYn0+XHJcbiAgICAgIDxDaGVja291dEZvcm0gLz5cclxuICAgIDwvRWxlbWVudHM+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9