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
              console.log(paymentMethod);
              console.log(error); // send the token from step 3 to our keystone server, via custom mutation
              // change the page to view the order
              // close the cart
              // turn the loader off

              console.log("to do");

            case 11:
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
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.CardElement, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_SickButton__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: "Check Out Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
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
      lineNumber: 66,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcyJdLCJuYW1lcyI6WyJDaGVja291dEZvcm1TdHlsZXMiLCJzdHlsZWQiLCJORVhUX0tFWSIsInByb2Nlc3MiLCJzdHJpcGVMaWIiLCJsb2FkU3RyaXBlIiwiQ2hlY2tvdXRGb3JtIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdHJpcGUiLCJ1c2VTdHJpcGUiLCJlbGVtZW50cyIsInVzZUVsZW1lbnRzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiblByb2dyZXNzIiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiZ2V0RWxlbWVudCIsIkNhcmRFbGVtZW50IiwicGF5bWVudE1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJDaGVja291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0Msc0VBQUg7QUFBQTtBQUFBO0FBQUEsOElBQXhCO0tBQU1ELGtCO0FBUU4sSUFBTUUsUUFBUSxHQUFHQyw2R0FBakI7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDZEQUFVLENBQUNILFFBQUQsQ0FBNUI7O0FBRUEsU0FBU0ksWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNJQywrQ0FBUSxFQURaO0FBQUEsTUFDZkMsS0FEZTtBQUFBLE1BQ1JDLFFBRFE7O0FBQUEsbUJBRVFGLCtDQUFRLENBQUMsS0FBRCxDQUZoQjtBQUFBLE1BRWZHLE9BRmU7QUFBQSxNQUVOQyxVQUZNOztBQUd0QixNQUFNQyxNQUFNLEdBQUdDLGtFQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxvRUFBVyxFQUE1Qjs7QUFKc0IsV0FLUEMsWUFMTztBQUFBO0FBQUE7O0FBQUE7QUFBQSxnVUFLdEIsaUJBQTRCQyxDQUE1QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFDQUEsZUFBQyxDQUFDQyxjQUFGO0FBQ0FQLHdCQUFVLENBQUMsSUFBRCxDQUFWLENBSEYsQ0FJRTs7QUFDQVEsb0VBQUEsR0FMRixDQU1FOztBQU5GO0FBQUEscUJBT3lDUCxNQUFNLENBQUNRLG1CQUFQLENBQTJCO0FBQ2hFQyxvQkFBSSxFQUFFLE1BRDBEO0FBRWhFQyxvQkFBSSxFQUFFUixRQUFRLENBQUNTLFVBQVQsQ0FBb0JDLGdFQUFwQjtBQUYwRCxlQUEzQixDQVB6Qzs7QUFBQTtBQUFBO0FBT1VoQixtQkFQVix5QkFPVUEsS0FQVjtBQU9pQmlCLDJCQVBqQix5QkFPaUJBLGFBUGpCO0FBV0U7QUFDQUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixhQUFaO0FBQ0FDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWW5CLEtBQVosRUFiRixDQWNFO0FBRUE7QUFFQTtBQUVBOztBQUVBa0IscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7O0FBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTHNCO0FBQUE7QUFBQTs7QUE4QnRCLHNCQUNFLDhEQUFDLGtCQUFEO0FBQW9CLFlBQVEsRUFBRVgsWUFBOUI7QUFBQSw0QkFDRSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0dBcENRVixZO1VBR1FPLDhELEVBQ0VFLGdFOzs7TUFKVlQsWTtBQXNDTSxTQUFTc0IsUUFBVCxHQUFvQjtBQUNqQyxzQkFDRSw4REFBQyw2REFBRDtBQUFVLFVBQU0sRUFBRXhCLFNBQWxCO0FBQUEsMkJBQ0UsOERBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7TUFOdUJ3QixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYWY4NjBiNjJlOTcwYTJhYzY1NGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcclxuaW1wb3J0IHtcclxuICBDYXJkRWxlbWVudCxcclxuICBFbGVtZW50cyxcclxuICB1c2VFbGVtZW50cyxcclxuICB1c2VTdHJpcGUsXHJcbn0gZnJvbSBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCI7XHJcbmltcG9ydCBTaWNrQnV0dG9uIGZyb20gXCIuL3N0eWxlcy9TaWNrQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRGb3JtU3R5bGVzID0gc3R5bGVkLmZvcm1gXHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMXJlbTtcclxuYDtcclxuY29uc3QgTkVYVF9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfS0VZO1xyXG5cclxuY29uc3Qgc3RyaXBlTGliID0gbG9hZFN0cmlwZShORVhUX0tFWSk7XHJcblxyXG5mdW5jdGlvbiBDaGVja291dEZvcm0oKSB7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcclxuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIC8vIHN0b3AgZm9ybSBmcm9tIHN1Ym1pdHRpbmcgYW5kIHR1cm4gbG9hZGVyIG9uXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgLy8gc3RhcnQgdGhlIHBhZ2UgdHJhbnNpdGlvblxyXG4gICAgblByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAvLyBjcmVhdGUgdGhlIHBheW1lbnQgbWV0aG9kIHZpYSBzdHJpcGUgKHRva2VuIGNvbWVzIGJhY2sgaWYgc3VjY2Vzc2Z1bClcclxuICAgIGNvbnN0IHsgZXJyb3IsIHBheW1lbnRNZXRob2QgfSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcclxuICAgICAgdHlwZTogXCJjYXJkXCIsXHJcbiAgICAgIGNhcmQ6IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpLFxyXG4gICAgfSk7XHJcbiAgICAvLyBoYW5kbGUgYW55IGVycm9ycyBmcm9tIHN0cmlwZSAoQ0MgZGVjbGluZWQsIGV0YylcclxuICAgIGNvbnNvbGUubG9nKHBheW1lbnRNZXRob2QpO1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgLy8gc2VuZCB0aGUgdG9rZW4gZnJvbSBzdGVwIDMgdG8gb3VyIGtleXN0b25lIHNlcnZlciwgdmlhIGN1c3RvbSBtdXRhdGlvblxyXG5cclxuICAgIC8vIGNoYW5nZSB0aGUgcGFnZSB0byB2aWV3IHRoZSBvcmRlclxyXG5cclxuICAgIC8vIGNsb3NlIHRoZSBjYXJ0XHJcblxyXG4gICAgLy8gdHVybiB0aGUgbG9hZGVyIG9mZlxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwidG8gZG9cIik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENoZWNrb3V0Rm9ybVN0eWxlcyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPENhcmRFbGVtZW50IC8+XHJcbiAgICAgIDxTaWNrQnV0dG9uPkNoZWNrIE91dCBOb3c8L1NpY2tCdXR0b24+XHJcbiAgICA8L0NoZWNrb3V0Rm9ybVN0eWxlcz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja291dCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlTGlifT5cclxuICAgICAgPENoZWNrb3V0Rm9ybSAvPlxyXG4gICAgPC9FbGVtZW50cz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=