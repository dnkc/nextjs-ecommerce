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
/* harmony import */ var D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\Checkout.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  mutation CREATE_ORDER_MUTATION($token: String!) {\n    checkout(token: $token) {\n      id\n      charge\n      total\n      items {\n        id\n        name\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_13__.default.form.withConfig({
  displayName: "Checkout__CheckoutFormStyles",
  componentId: "sc-10mtoy5-0"
})(["box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;"]);
_c = CheckoutFormStyles;
var NEXT_KEY = "pk_test_51HW5fpJNuB2GTMbH2ZJpbk10WjHkkyLEFyKkpMXfG41bBtzJhFkiTydXOvJNmbepO2s6E4AXVVQnN8gjnMim7ukg00zn0HN9Wq";
var stripeLib = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__.loadStripe)(NEXT_KEY);
var CREATE_ORDER_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_14__.default)(_templateObject());

function CheckoutForm() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.useStripe)();
  var elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.useElements)();
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();

  var _useCart = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_11__.useCart)(),
      closeCart = _useCart.closeCart;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_15__.useMutation)(CREATE_ORDER_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_12__.CURRENT_USER_QUERY
    }]
  }),
      _useMutation2 = (0,D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),
      checkout = _useMutation2[0],
      graphQLError = _useMutation2[1].error;

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = (0,D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var _yield$stripe$createP, error, paymentMethod, order;

      return D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // stop form from submitting and turn loader on
              e.preventDefault();
              setLoading(true); // start the page transition

              nprogress__WEBPACK_IMPORTED_MODULE_9___default().start(); // create the payment method via stripe (token comes back if successful)

              _context.next = 5;
              return stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.CardElement)
              });

            case 5:
              _yield$stripe$createP = _context.sent;
              error = _yield$stripe$createP.error;
              paymentMethod = _yield$stripe$createP.paymentMethod;

              if (!error) {
                _context.next = 12;
                break;
              }

              setError(error);
              nprogress__WEBPACK_IMPORTED_MODULE_9___default().done();
              return _context.abrupt("return");

            case 12:
              _context.next = 14;
              return checkout({
                variables: {
                  token: paymentMethod.id
                }
              });

            case 14:
              order = _context.sent;
              //console.log("finished with the order!", order);
              // change the page to view the order
              router.push({
                pathname: "/order",
                query: {
                  id: order.data.checkout.id
                }
              }); // close the cart

              closeCart(); // turn the loader off

              setLoading(false);
              nprogress__WEBPACK_IMPORTED_MODULE_9___default().done();

            case 19:
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
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }, this), graphQLError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      style: {
        fontSize: 12
      },
      children: graphQLError.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 24
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.CardElement, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_SickButton__WEBPACK_IMPORTED_MODULE_7__.default, {
      children: "Check Out Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, this);
}

_s(CheckoutForm, "PT0aX24zQJy0A63MUjzoXGuldKk=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.useStripe, _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.useElements, next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter, _lib_cartState__WEBPACK_IMPORTED_MODULE_11__.useCart, _apollo_client__WEBPACK_IMPORTED_MODULE_15__.useMutation];
});

_c2 = CheckoutForm;
function Checkout() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.Elements, {
    stripe: stripeLib,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CheckoutForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 107,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcyJdLCJuYW1lcyI6WyJDaGVja291dEZvcm1TdHlsZXMiLCJzdHlsZWQiLCJORVhUX0tFWSIsInByb2Nlc3MiLCJzdHJpcGVMaWIiLCJsb2FkU3RyaXBlIiwiQ1JFQVRFX09SREVSX01VVEFUSU9OIiwiZ3FsIiwiQ2hlY2tvdXRGb3JtIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdHJpcGUiLCJ1c2VTdHJpcGUiLCJlbGVtZW50cyIsInVzZUVsZW1lbnRzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlQ2FydCIsImNsb3NlQ2FydCIsInVzZU11dGF0aW9uIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkNVUlJFTlRfVVNFUl9RVUVSWSIsImNoZWNrb3V0IiwiZ3JhcGhRTEVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiblByb2dyZXNzIiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiZ2V0RWxlbWVudCIsIkNhcmRFbGVtZW50IiwicGF5bWVudE1ldGhvZCIsInZhcmlhYmxlcyIsInRva2VuIiwiaWQiLCJvcmRlciIsInB1c2giLCJwYXRobmFtZSIsImRhdGEiLCJmb250U2l6ZSIsIm1lc3NhZ2UiLCJDaGVja291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxrQkFBa0IsR0FBR0MsdUVBQUg7QUFBQTtBQUFBO0FBQUEsOElBQXhCO0tBQU1ELGtCO0FBUU4sSUFBTUUsUUFBUSxHQUFHQyw2R0FBakI7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDZEQUFVLENBQUNILFFBQUQsQ0FBNUI7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QTNEUXRDLFk7VUFHUU8sOEQsRUFDRUUsZ0UsRUFDRkUsbUQsRUFDT0Msb0QsRUFFc0JFLHdEOzs7TUFSckNkLFk7QUE2RE0sU0FBU3VDLFFBQVQsR0FBb0I7QUFDakMsc0JBQ0UsOERBQUMsNkRBQUQ7QUFBVSxVQUFNLEVBQUUzQyxTQUFsQjtBQUFBLDJCQUNFLDhEQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEO01BTnVCMkMsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjVjMmU0MWIyNTQ1YzkyNDg0MTdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZEVsZW1lbnQsXHJcbiAgRWxlbWVudHMsXHJcbiAgdXNlRWxlbWVudHMsXHJcbiAgdXNlU3RyaXBlLFxyXG59IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xyXG5pbXBvcnQgU2lja0J1dHRvbiBmcm9tIFwiLi9zdHlsZXMvU2lja0J1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgblByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwiLi4vbGliL2NhcnRTdGF0ZVwiO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tIFwiLi9Vc2VyXCI7XHJcblxyXG5jb25zdCBDaGVja291dEZvcm1TdHlsZXMgPSBzdHlsZWQuZm9ybWBcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG5gO1xyXG5jb25zdCBORVhUX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9LRVk7XHJcblxyXG5jb25zdCBzdHJpcGVMaWIgPSBsb2FkU3RyaXBlKE5FWFRfS0VZKTtcclxuXHJcbmNvbnN0IENSRUFURV9PUkRFUl9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBDUkVBVEVfT1JERVJfTVVUQVRJT04oJHRva2VuOiBTdHJpbmchKSB7XHJcbiAgICBjaGVja291dCh0b2tlbjogJHRva2VuKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNoYXJnZVxyXG4gICAgICB0b3RhbFxyXG4gICAgICBpdGVtcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBDaGVja291dEZvcm0oKSB7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcclxuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBjbG9zZUNhcnQgfSA9IHVzZUNhcnQoKTtcclxuXHJcbiAgY29uc3QgW2NoZWNrb3V0LCB7IGVycm9yOiBncmFwaFFMRXJyb3IgfV0gPSB1c2VNdXRhdGlvbihcclxuICAgIENSRUFURV9PUkRFUl9NVVRBVElPTixcclxuICAgIHsgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0gfVxyXG4gICk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAvLyBzdG9wIGZvcm0gZnJvbSBzdWJtaXR0aW5nIGFuZCB0dXJuIGxvYWRlciBvblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIC8vIHN0YXJ0IHRoZSBwYWdlIHRyYW5zaXRpb25cclxuICAgIG5Qcm9ncmVzcy5zdGFydCgpO1xyXG4gICAgLy8gY3JlYXRlIHRoZSBwYXltZW50IG1ldGhvZCB2aWEgc3RyaXBlICh0b2tlbiBjb21lcyBiYWNrIGlmIHN1Y2Nlc3NmdWwpXHJcbiAgICBjb25zdCB7IGVycm9yLCBwYXltZW50TWV0aG9kIH0gPSBhd2FpdCBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XHJcbiAgICAgIHR5cGU6IFwiY2FyZFwiLFxyXG4gICAgICBjYXJkOiBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KSxcclxuICAgIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJIRUxMT1wiLCBwYXltZW50TWV0aG9kKTtcclxuICAgIC8vIGhhbmRsZSBhbnkgZXJyb3JzIGZyb20gc3RyaXBlIChDQyBkZWNsaW5lZCwgZXRjKVxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKGVycm9yKTtcclxuICAgICAgblByb2dyZXNzLmRvbmUoKTtcclxuICAgICAgcmV0dXJuOyAvL3N0b3BzIHRoZSBjaGVja291dCBmcm9tIGhhcHBlbmluZ1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgLy8gc2VuZCB0aGUgdG9rZW4gZnJvbSBzdGVwIDMgdG8gb3VyIGtleXN0b25lIHNlcnZlciwgdmlhIGN1c3RvbSBtdXRhdGlvblxyXG4gICAgY29uc3Qgb3JkZXIgPSBhd2FpdCBjaGVja291dCh7XHJcbiAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIHRva2VuOiBwYXltZW50TWV0aG9kLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiZmluaXNoZWQgd2l0aCB0aGUgb3JkZXIhXCIsIG9yZGVyKTtcclxuICAgIC8vIGNoYW5nZSB0aGUgcGFnZSB0byB2aWV3IHRoZSBvcmRlclxyXG4gICAgcm91dGVyLnB1c2goe1xyXG4gICAgICBwYXRobmFtZTogXCIvb3JkZXJcIixcclxuICAgICAgcXVlcnk6IHsgaWQ6IG9yZGVyLmRhdGEuY2hlY2tvdXQuaWQgfSxcclxuICAgIH0pO1xyXG4gICAgLy8gY2xvc2UgdGhlIGNhcnRcclxuICAgIGNsb3NlQ2FydCgpO1xyXG4gICAgLy8gdHVybiB0aGUgbG9hZGVyIG9mZlxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICBuUHJvZ3Jlc3MuZG9uZSgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGVja291dEZvcm1TdHlsZXMgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIHtlcnJvciAmJiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+e2Vycm9yLm1lc3NhZ2V9PC9wPn1cclxuICAgICAge2dyYXBoUUxFcnJvciAmJiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+e2dyYXBoUUxFcnJvci5tZXNzYWdlfTwvcD59XHJcbiAgICAgIDxDYXJkRWxlbWVudCAvPlxyXG4gICAgICA8U2lja0J1dHRvbj5DaGVjayBPdXQgTm93PC9TaWNrQnV0dG9uPlxyXG4gICAgPC9DaGVja291dEZvcm1TdHlsZXM+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxFbGVtZW50cyBzdHJpcGU9e3N0cmlwZUxpYn0+XHJcbiAgICAgIDxDaGVja291dEZvcm0gLz5cclxuICAgIDwvRWxlbWVudHM+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9