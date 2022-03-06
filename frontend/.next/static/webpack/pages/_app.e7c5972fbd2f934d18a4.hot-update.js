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
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");




var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\Checkout.js",
    _s = $RefreshSig$();







var CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_8__.default.form.withConfig({
  displayName: "Checkout__CheckoutFormStyles",
  componentId: "sc-10mtoy5-0"
})(["box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;"]);
_c = CheckoutFormStyles;
var REACT_KEY = process.env.REACT_APP_STRIPE_KEY;
var NEXT_KEY = "pk_test_51HW5fpJNuB2GTMbH2ZJpbk10WjHkkyLEFyKkpMXfG41bBtzJhFkiTydXOvJNmbepO2s6E4AXVVQnN8gjnMim7ukg00zn0HN9Wq";
var stripeLib = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_3__.loadStripe)(String(NEXT_KEY));

function CheckoutForm() {
  _s();

  console.log("REACTKEY", String(REACT_KEY));
  console.log("REACTKEY2", REACT_KEY);
  console.log("REACTKEY3", process.env.REACT_APP_STRIPE_KEY);
  console.log("NEXTKEY", NEXT_KEY);

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
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_SickButton__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: "Check Out Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
      lineNumber: 71,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcyJdLCJuYW1lcyI6WyJDaGVja291dEZvcm1TdHlsZXMiLCJzdHlsZWQiLCJSRUFDVF9LRVkiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX1NUUklQRV9LRVkiLCJORVhUX0tFWSIsInN0cmlwZUxpYiIsImxvYWRTdHJpcGUiLCJTdHJpbmciLCJDaGVja291dEZvcm0iLCJjb25zb2xlIiwibG9nIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdHJpcGUiLCJ1c2VTdHJpcGUiLCJlbGVtZW50cyIsInVzZUVsZW1lbnRzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiblByb2dyZXNzIiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiZ2V0RWxlbWVudCIsIkNhcmRFbGVtZW50IiwicGF5bWVudE1ldGhvZCIsIkNoZWNrb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0Msc0VBQUg7QUFBQTtBQUFBO0FBQUEsOElBQXhCO0tBQU1ELGtCO0FBUU4sSUFBTUUsU0FBUyxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsb0JBQTlCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHSCw2R0FBakI7QUFFQSxJQUFNSSxTQUFTLEdBQUdDLDZEQUFVLENBQUNDLE1BQU0sQ0FBQ0gsUUFBRCxDQUFQLENBQTVCOztBQUVBLFNBQVNJLFlBQVQsR0FBd0I7QUFBQTs7QUFDdEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JILE1BQU0sQ0FBQ1AsU0FBRCxDQUE5QjtBQUNBUyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCVixTQUF6QjtBQUNBUyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCVCxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsb0JBQXJDO0FBQ0FNLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJOLFFBQXZCOztBQUpzQixrQkFLSU8sK0NBQVEsRUFMWjtBQUFBLE1BS2ZDLEtBTGU7QUFBQSxNQUtSQyxRQUxROztBQUFBLG1CQU1RRiwrQ0FBUSxDQUFDLEtBQUQsQ0FOaEI7QUFBQSxNQU1mRyxPQU5lO0FBQUEsTUFNTkMsVUFOTTs7QUFPdEIsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Msb0VBQVcsRUFBNUI7O0FBUnNCLFdBU1BDLFlBVE87QUFBQTtBQUFBOztBQUFBO0FBQUEsZ1VBU3RCLGlCQUE0QkMsQ0FBNUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQ0FBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBUCx3QkFBVSxDQUFDLElBQUQsQ0FBVixDQUhGLENBSUU7O0FBQ0FRLG9FQUFBLEdBTEYsQ0FNRTs7QUFORjtBQUFBLHFCQU95Q1AsTUFBTSxDQUFDUSxtQkFBUCxDQUEyQjtBQUNoRUMsb0JBQUksRUFBRSxNQUQwRDtBQUVoRUMsb0JBQUksRUFBRVIsUUFBUSxDQUFDUyxVQUFULENBQW9CQyxnRUFBcEI7QUFGMEQsZUFBM0IsQ0FQekM7O0FBQUE7QUFBQTtBQU9VaEIsbUJBUFYseUJBT1VBLEtBUFY7QUFPaUJpQiwyQkFQakIseUJBT2lCQSxhQVBqQjtBQVdFO0FBQ0FwQixxQkFBTyxDQUFDQyxHQUFSLENBQVltQixhQUFaO0FBQ0FwQixxQkFBTyxDQUFDQyxHQUFSLENBQVlFLEtBQVosRUFiRixDQWNFO0FBRUE7QUFFQTtBQUVBOztBQUVBSCxxQkFBTyxDQUFDQyxHQUFSLENBQVksT0FBWjs7QUF0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FUc0I7QUFBQTtBQUFBOztBQWtDdEIsc0JBQ0UsOERBQUMsa0JBQUQ7QUFBb0IsWUFBUSxFQUFFVSxZQUE5QjtBQUFBLDRCQUNFLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7R0F4Q1FaLFk7VUFPUVMsOEQsRUFDRUUsZ0U7OztNQVJWWCxZO0FBMENNLFNBQVNzQixRQUFULEdBQW9CO0FBQ2pDLHNCQUNFLDhEQUFDLDZEQUFEO0FBQVUsVUFBTSxFQUFFekIsU0FBbEI7QUFBQSwyQkFDRSw4REFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDtNQU51QnlCLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lN2M1OTcyZmJkMmY5MzRkMThhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gXCJAc3RyaXBlL3N0cmlwZS1qc1wiO1xyXG5pbXBvcnQge1xyXG4gIENhcmRFbGVtZW50LFxyXG4gIEVsZW1lbnRzLFxyXG4gIHVzZUVsZW1lbnRzLFxyXG4gIHVzZVN0cmlwZSxcclxufSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcclxuaW1wb3J0IFNpY2tCdXR0b24gZnJvbSBcIi4vc3R5bGVzL1NpY2tCdXR0b25cIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IG5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcblxyXG5jb25zdCBDaGVja291dEZvcm1TdHlsZXMgPSBzdHlsZWQuZm9ybWBcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG5gO1xyXG5jb25zdCBSRUFDVF9LRVkgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfU1RSSVBFX0tFWTtcclxuY29uc3QgTkVYVF9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfS0VZO1xyXG5cclxuY29uc3Qgc3RyaXBlTGliID0gbG9hZFN0cmlwZShTdHJpbmcoTkVYVF9LRVkpKTtcclxuXHJcbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcclxuICBjb25zb2xlLmxvZyhcIlJFQUNUS0VZXCIsIFN0cmluZyhSRUFDVF9LRVkpKTtcclxuICBjb25zb2xlLmxvZyhcIlJFQUNUS0VZMlwiLCBSRUFDVF9LRVkpO1xyXG4gIGNvbnNvbGUubG9nKFwiUkVBQ1RLRVkzXCIsIHByb2Nlc3MuZW52LlJFQUNUX0FQUF9TVFJJUEVfS0VZKTtcclxuICBjb25zb2xlLmxvZyhcIk5FWFRLRVlcIiwgTkVYVF9LRVkpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgc3RyaXBlID0gdXNlU3RyaXBlKCk7XHJcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpO1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAvLyBzdG9wIGZvcm0gZnJvbSBzdWJtaXR0aW5nIGFuZCB0dXJuIGxvYWRlciBvblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIC8vIHN0YXJ0IHRoZSBwYWdlIHRyYW5zaXRpb25cclxuICAgIG5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgLy8gY3JlYXRlIHRoZSBwYXltZW50IG1ldGhvZCB2aWEgc3RyaXBlICh0b2tlbiBjb21lcyBiYWNrIGlmIHN1Y2Nlc3NmdWwpXHJcbiAgICBjb25zdCB7IGVycm9yLCBwYXltZW50TWV0aG9kIH0gPSBhd2FpdCBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XHJcbiAgICAgIHR5cGU6IFwiY2FyZFwiLFxyXG4gICAgICBjYXJkOiBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KSxcclxuICAgIH0pO1xyXG4gICAgLy8gaGFuZGxlIGFueSBlcnJvcnMgZnJvbSBzdHJpcGUgKENDIGRlY2xpbmVkLCBldGMpXHJcbiAgICBjb25zb2xlLmxvZyhwYXltZW50TWV0aG9kKTtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIC8vIHNlbmQgdGhlIHRva2VuIGZyb20gc3RlcCAzIHRvIG91ciBrZXlzdG9uZSBzZXJ2ZXIsIHZpYSBjdXN0b20gbXV0YXRpb25cclxuXHJcbiAgICAvLyBjaGFuZ2UgdGhlIHBhZ2UgdG8gdmlldyB0aGUgb3JkZXJcclxuXHJcbiAgICAvLyBjbG9zZSB0aGUgY2FydFxyXG5cclxuICAgIC8vIHR1cm4gdGhlIGxvYWRlciBvZmZcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInRvIGRvXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGVja291dEZvcm1TdHlsZXMgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxDYXJkRWxlbWVudCAvPlxyXG4gICAgICA8U2lja0J1dHRvbj5DaGVjayBPdXQgTm93PC9TaWNrQnV0dG9uPlxyXG4gICAgPC9DaGVja291dEZvcm1TdHlsZXM+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxFbGVtZW50cyBzdHJpcGU9e3N0cmlwZUxpYn0+XHJcbiAgICAgIDxDaGVja291dEZvcm0gLz5cclxuICAgIDwvRWxlbWVudHM+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9