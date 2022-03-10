exports.id = "components_Page_js";
exports.ids = ["components_Page_js"];
exports.modules = {

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Cart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _RemoveFromCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RemoveFromCart */ "./components/RemoveFromCart.js");
/* harmony import */ var _Checkout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Checkout */ "./components/Checkout.js");

var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\Cart.js";










const CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default().li.withConfig({
  displayName: "Cart__CartItemStyles",
  componentId: "sc-19s6z00-0"
})(["padding:1rem 0;border-bottom:1px solid var(--lightGrey);display:grid;grid-template-columns:auto 1fr auto;img{margin-right:1rem;}h3,p{margin:0;}"]);

function CartItem({
  cartItem
}) {
  const product = cartItem.product;
  if (!product) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItemStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      width: "100",
      src: product.photo.image.publicUrlTransformed,
      alt: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [(0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__.default)(product.price * cartItem.quantity), " -", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
          children: [cartItem.quantity, " \xD7 ", (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__.default)(product.price), " each"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_9__.default, {
        id: cartItem.id
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

function Cart() {
  const me = (0,_User__WEBPACK_IMPORTED_MODULE_5__.useUser)();
  const {
    cartOpen,
    closeCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_8__.useCart)();
  if (!me) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__.default, {
    open: cartOpen,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Supreme__WEBPACK_IMPORTED_MODULE_3__.default, {
        children: [me.name, "'s Cart"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_4__.default, {
        onClick: closeCart,
        children: "\xD7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: me.cart.map(cartItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItem, {
        cartItem: cartItem
      }, cartItem.id, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Total: ", (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_6__.default)((0,_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_7__.default)(me.cart))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Checkout__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/CartCount.js":
/*!*********************************!*\
  !*** ./components/CartCount.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CartCount; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\CartCount.js";


const Dot = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "sc-xxvp4g-0"
})(["background:red;color:white;border-radius:50%;padding:0.5rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-feature-settings:\"tnum\";font-variant-numeric:tabular-nums;"]);
const AnimationStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "CartCount__AnimationStyles",
  componentId: "sc-xxvp4g-1"
})(["position:relative;.count{display:block;positive:relative;transition:transform 0.4s;backface-visibility:hidden;}.count-enter{transform:scale(4) rotateX(0.5turn);}.count-enter-active{transform:rotateX(0);}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{transform:scale(4) rotateX(0.5turn);}"]);
function CartCount({
  count
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimationStyles, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_1__.TransitionGroup, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_1__.CSSTransition, {
        unmountOnExit: true,
        className: "count",
        classNames: "count",
        timeout: {
          enter: 400,
          exit: 400
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dot, {
          children: count
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)
      }, count, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Checkout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\Checkout.js";











const CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default().form.withConfig({
  displayName: "Checkout__CheckoutFormStyles",
  componentId: "sc-10mtoy5-0"
})(["box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;"]);
const NEXT_KEY = "pk_test_51HW5fpJNuB2GTMbH2ZJpbk10WjHkkyLEFyKkpMXfG41bBtzJhFkiTydXOvJNmbepO2s6E4AXVVQnN8gjnMim7ukg00zn0HN9Wq";
const stripeLib = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__.loadStripe)(NEXT_KEY);
const CREATE_ORDER_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_7___default())`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
        quantity
      }
    }
  }
`;

function CheckoutForm() {
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useStripe)();
  const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useElements)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  const {
    closeCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_10__.useCart)();
  const [checkout, {
    error: graphQLError
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useMutation)(CREATE_ORDER_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_11__.CURRENT_USER_QUERY
    }]
  });

  async function handleSubmit(e) {
    // stop form from submitting and turn loader on
    e.preventDefault();
    setLoading(true); // start the page transition

    nprogress__WEBPACK_IMPORTED_MODULE_6___default().start(); // create the payment method via stripe (token comes back if successful)

    const {
      error,
      paymentMethod
    } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.CardElement)
    }); // console.log("HELLO", paymentMethod);
    // handle any errors from stripe (CC declined, etc)

    if (error) {
      setError(error);
      nprogress__WEBPACK_IMPORTED_MODULE_6___default().done();
      return; //stops the checkout from happening
    } // console.log(error);
    // send the token from step 3 to our keystone server, via custom mutation


    const order = await checkout({
      variables: {
        token: paymentMethod.id
      }
    }); //console.log("finished with the order!", order);
    // change the page to view the order

    router.push({
      pathname: `/order/${order.data.checkout.id}`
    }); // close the cart

    closeCart(); // turn the loader off

    setLoading(false);
    nprogress__WEBPACK_IMPORTED_MODULE_6___default().done();
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckoutFormStyles, {
    onSubmit: handleSubmit,
    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: {
        fontSize: 12
      },
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 17
    }, this), graphQLError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: {
        fontSize: 12
      },
      children: graphQLError.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 24
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.CardElement, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_SickButton__WEBPACK_IMPORTED_MODULE_4__.default, {
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

function Checkout() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.Elements, {
    stripe: stripeLib,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckoutForm, {}, void 0, false, {
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

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cart */ "./components/Cart.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Search */ "./components/Search.js");

var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\Header.js";





const Logo = styled_components__WEBPACK_IMPORTED_MODULE_3___default().h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-2cpreo-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:2;transform:skew(-7deg);background:red;a{color:white;text-decoration:none;text-transform:uppercase;padding:0.5rem 1rem;}"]);
const HeaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().header.withConfig({
  displayName: "Header__HeaderStyles",
  componentId: "sc-2cpreo-1"
})([".bar{border-bottom:10px solid var(--black,black);display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid var(--black,black);}"]);

const Header = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {
        children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: "SickFits"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "sub-bar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignOut */ "./components/SignOut.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _CartCount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CartCount */ "./components/CartCount.js");


var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\Nav.js";









const Nav = () => {
  const user = (0,_User__WEBPACK_IMPORTED_MODULE_4__.useUser)();
  const {
    openCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_7__.useCart)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: "/products",
      children: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/sell",
        children: "Sell"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/orders",
        children: "Orders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/account",
        children: "Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignOut__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_6__.default, {
        style: {
          color: "black"
        },
        onClick: openCart,
        children: ["My Cart", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartCount__WEBPACK_IMPORTED_MODULE_8__.default, {
          count: user.cart.reduce((tally, cartItem) => tally + (cartItem.product ? cartItem.quantity : 0), 0)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), !user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/signin",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, undefined)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\Page.js";




const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.createGlobalStyle)(["@font-face{font-family:'radnika_next';src:url('/static/radnikanext-medium-webfont.woff2') format('woff2');font-weight:normal;font-style:normal;}html{--red:#ff0000;--black:#393939;--grey:#3A3A3A;--gray:var(--grey);--lightGrey:#e1e1e1;--lightGray:var(--lightGrey);--offWhite:#ededed;--maxWidth:1000px;--bs:0 12px 24px 0 rgba(0,0,0,0.09);box-sizing:border-box;font-size:10px;}*,*:before,*:after{box-sizing:inherit;}body{font-family:'radnika_next',--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;padding:0;margin:0;font-size:1.5rem;line-height:2;}a{text-decoration:none;color:var(---black);}a:hover{text-decoration:underline;}button{font-family:'radnika_next',--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',}"]);
const InnerStyles = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "Page__InnerStyles",
  componentId: "sc-4u7a64-0"
})(["max-width:var(--maxWidth);margin:0 auto;padding:2rem;"]);

const Page = ({
  children,
  cool
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InnerStyles, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Page);
Page.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
  cool: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};

/***/ }),

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RemoveFromCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\RemoveFromCart.js";



const BigButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "sc-emvtd6-0"
})(["font-size:3rem;background:none;border:0;&:hover{color:var(--red);cursor:pointer;}"]);
const REMOVE_FROM_CART_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

function RemoveFromCart({
  id
}) {
  const [removeFromCart, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(REMOVE_FROM_CART_MUTATION, {
    variables: {
      id: id
    },
    update // optimisticResponse: {
    //   deleteCartItem: {
    //     __typename: "CartItem",
    //     id: id,
    //   },
    // },

  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BigButton, {
    disabled: loading,
    title: "Remove This Item from Cart",
    type: "button",
    onClick: removeFromCart,
    children: "\xD7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! downshift */ "downshift");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(downshift__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.debounce */ "lodash.debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");


var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\Search.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SEARCH_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_4___default())`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
function Search() {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const [findItems, {
    loading,
    data,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(SEARCH_PRODUCTS_QUERY, {
    fetchPolicy: "no-cache"
  });
  const items = (data === null || data === void 0 ? void 0 : data.searchTerms) || [];
  const findItemsButChill = lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(findItems, 350);
  (0,downshift__WEBPACK_IMPORTED_MODULE_3__.resetIdCounter)();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex
  } = (0,downshift__WEBPACK_IMPORTED_MODULE_3__.useCombobox)({
    items,

    onInputValueChange() {
      findItemsButChill({
        variables: {
          searchTerm: inputValue
        }
      });
    },

    onSelectedItemChange({
      selectedItem
    }) {
      router.push({
        pathname: `/product/${selectedItem.id}`
      });
    },

    itemToString: item => (item === null || item === void 0 ? void 0 : item.name) || ""
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.SearchStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({}, getInputProps({
        type: "search",
        placeholder: "Search for an Item",
        id: "search",
        className: loading ? "loading" : ""
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDown, _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [isOpen && items.map((item, index) => /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDownItem, _objectSpread(_objectSpread({}, getItemProps({
        item,
        index
      })), {}, {
        key: item.id,
        highlighted: index === highlightedIndex,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 13
        }
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: item.photo.image.publicUrlTransformed,
        alt: item.name,
        width: "50"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }, this), item.name)), isOpen && !items.length && !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDownItem, {
        children: ["Sorry, No items found for ", inputValue]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SignOut.js":
/*!*******************************!*\
  !*** ./components/SignOut.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignOut; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\SignOut.js";



const SIGN_OUT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation {
    endSession
  }
`;
function SignOut() {
  const [signout] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(SIGN_OUT_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_3__.CURRENT_USER_QUERY
    }]
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    onClick: signout,
    children: "Sign Out"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/styles/CartStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/CartStyles.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CartStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CartStyles",
  componentId: "sc-1tvog53-0"
})(["padding:20px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:40%;min-width:500px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;", ";header{border-bottom:5px solid var(--black);margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:10px double var(--black);margin-top:2rem;padding-top:2rem;align-items:center;font-size:3rem;font-weight:900;p{margin:0;}}ul{margin:0;padding:0;list-style:none;overflow:scroll;}"], props => props.open && `transform: translateX(0);`);
/* harmony default export */ __webpack_exports__["default"] = (CartStyles);

/***/ }),

/***/ "./components/styles/CloseButton.js":
/*!******************************************!*\
  !*** ./components/styles/CloseButton.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-1seb878-0"
})(["background:black;color:white;font-size:3rem;border:0;position:absolute;z-index:2;right:0;"]);
/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

/***/ }),

/***/ "./components/styles/DropDown.js":
/*!***************************************!*\
  !*** ./components/styles/DropDown.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropDown": function() { return /* binding */ DropDown; },
/* harmony export */   "DropDownItem": function() { return /* binding */ DropDownItem; },
/* harmony export */   "SearchStyles": function() { return /* binding */ SearchStyles; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const DropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DropDown",
  componentId: "sc-n5d97g-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid var(--lightGray);"]);
const DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "sc-n5d97g-1"
})(["border-bottom:1px solid var(--lightGray);background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], props => props.highlighted ? '#f7f7f7' : 'white', props => props.highlighted ? 'padding-left: 2rem;' : null, props => props.highlighted ? props.theme.lightgrey : 'white');
const glow = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
const SearchStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "sc-n5d97g-2"
})(["position:relative;input{width:100%;padding:10px;border:0;font-size:2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);


/***/ }),

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-11c0d2g-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:'';width:2px;background:var(--lightGray);height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;text-decoration:none;&:after{width:calc(100% - 60px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1300px){border-top:1px solid var(--lightGray);width:100%;justify-content:center;font-size:1.5rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (NavStyles);

/***/ }),

/***/ "./components/styles/SickButton.js":
/*!*****************************************!*\
  !*** ./components/styles/SickButton.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SickButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "SickButton",
  componentId: "sc-l04z44-0"
})(["background:red;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"]);
/* harmony default export */ __webpack_exports__["default"] = (SickButton);

/***/ }),

/***/ "./components/styles/Supreme.js":
/*!**************************************!*\
  !*** ./components/styles/Supreme.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Supreme = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "Supreme",
  componentId: "sc-xv30qb-0"
})(["background:var(--red);color:white;display:inline-block;padding:4px 5px;transform:skew(-3deg);margin:0;font-size:4rem;"]);
/* harmony default export */ __webpack_exports__["default"] = (Supreme);

/***/ }),

/***/ "./lib/calcTotalPrice.js":
/*!*******************************!*\
  !*** ./lib/calcTotalPrice.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ calcTotalPrice; }
/* harmony export */ });
function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally; //product deleted but still in your cart

    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9DYXJ0Q291bnQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9DaGVja291dC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL05hdi5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9SZW1vdmVGcm9tQ2FydC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1NpZ25PdXQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvQ2FydFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9DbG9zZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9Ecm9wRG93bi5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9OYXZTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvU2lja0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9TdXByZW1lLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2xpYi9jYWxjVG90YWxQcmljZS5qcyJdLCJuYW1lcyI6WyJDYXJ0SXRlbVN0eWxlcyIsInN0eWxlZCIsIkNhcnRJdGVtIiwiY2FydEl0ZW0iLCJwcm9kdWN0IiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwibmFtZSIsImZvcm1hdE1vbmV5IiwicHJpY2UiLCJxdWFudGl0eSIsImlkIiwiQ2FydCIsIm1lIiwidXNlVXNlciIsImNhcnRPcGVuIiwiY2xvc2VDYXJ0IiwidXNlQ2FydCIsImNhcnQiLCJtYXAiLCJjYWxjVG90YWxQcmljZSIsIkRvdCIsIkFuaW1hdGlvblN0eWxlcyIsIkNhcnRDb3VudCIsImNvdW50IiwiZW50ZXIiLCJleGl0IiwiQ2hlY2tvdXRGb3JtU3R5bGVzIiwiTkVYVF9LRVkiLCJwcm9jZXNzIiwic3RyaXBlTGliIiwibG9hZFN0cmlwZSIsIkNSRUFURV9PUkRFUl9NVVRBVElPTiIsImdxbCIsIkNoZWNrb3V0Rm9ybSIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsInJvdXRlciIsInVzZVJvdXRlciIsImNoZWNrb3V0IiwiZ3JhcGhRTEVycm9yIiwidXNlTXV0YXRpb24iLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiblByb2dyZXNzIiwicGF5bWVudE1ldGhvZCIsImNyZWF0ZVBheW1lbnRNZXRob2QiLCJ0eXBlIiwiY2FyZCIsImdldEVsZW1lbnQiLCJDYXJkRWxlbWVudCIsIm9yZGVyIiwidmFyaWFibGVzIiwidG9rZW4iLCJwdXNoIiwicGF0aG5hbWUiLCJkYXRhIiwiZm9udFNpemUiLCJtZXNzYWdlIiwiQ2hlY2tvdXQiLCJMb2dvIiwiSGVhZGVyU3R5bGVzIiwiSGVhZGVyIiwiTmF2IiwidXNlciIsIm9wZW5DYXJ0IiwiY29sb3IiLCJyZWR1Y2UiLCJ0YWxseSIsIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiSW5uZXJTdHlsZXMiLCJQYWdlIiwiY2hpbGRyZW4iLCJjb29sIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiQmlnQnV0dG9uIiwiUkVNT1ZFX0ZST01fQ0FSVF9NVVRBVElPTiIsInVwZGF0ZSIsImNhY2hlIiwicGF5bG9hZCIsImV2aWN0IiwiaWRlbnRpZnkiLCJkZWxldGVDYXJ0SXRlbSIsIlJlbW92ZUZyb21DYXJ0IiwicmVtb3ZlRnJvbUNhcnQiLCJTRUFSQ0hfUFJPRFVDVFNfUVVFUlkiLCJTZWFyY2giLCJmaW5kSXRlbXMiLCJ1c2VMYXp5UXVlcnkiLCJmZXRjaFBvbGljeSIsIml0ZW1zIiwic2VhcmNoVGVybXMiLCJmaW5kSXRlbXNCdXRDaGlsbCIsImRlYm91bmNlIiwicmVzZXRJZENvdW50ZXIiLCJpc09wZW4iLCJpbnB1dFZhbHVlIiwiZ2V0TWVudVByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImdldENvbWJvYm94UHJvcHMiLCJnZXRJdGVtUHJvcHMiLCJoaWdobGlnaHRlZEluZGV4IiwidXNlQ29tYm9ib3giLCJvbklucHV0VmFsdWVDaGFuZ2UiLCJzZWFyY2hUZXJtIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJzZWxlY3RlZEl0ZW0iLCJpdGVtVG9TdHJpbmciLCJpdGVtIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJpbmRleCIsImxlbmd0aCIsIlNJR05fT1VUX01VVEFUSU9OIiwiU2lnbk91dCIsInNpZ25vdXQiLCJDYXJ0U3R5bGVzIiwicHJvcHMiLCJvcGVuIiwiQ2xvc2VCdXR0b24iLCJEcm9wRG93biIsIkRyb3BEb3duSXRlbSIsImhpZ2hsaWdodGVkIiwidGhlbWUiLCJsaWdodGdyZXkiLCJnbG93Iiwia2V5ZnJhbWVzIiwiU2VhcmNoU3R5bGVzIiwiTmF2U3R5bGVzIiwiU2lj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V0FBTixHQUFvQixxQkFBcEIsR0FBNEMsSUFMMUMsRUFTWEwsS0FBRCxJQUFZQSxLQUFLLENBQUNLLFdBQU4sR0FBb0JMLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxTQUFoQyxHQUE0QyxPQVQ1QyxDQUFsQjtBQWVBLE1BQU1DLElBQUksR0FBR0MsNERBQUgseUVBQVY7QUFVQSxNQUFNQyxZQUFZLEdBQUc3SSx1RUFBSDtBQUFBO0FBQUE7QUFBQSxnSkFRQzJJLElBUkQsQ0FBbEI7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUVBLE1BQU1HLFNBQVMsR0FBRzlJLHNFQUFIO0FBQUE7QUFBQTtBQUFBLHUzQkFBZjtBQWlFQSwrREFBZThJLFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFFQSxNQUFNQyxVQUFVLEdBQUcvSSwwRUFBSDtBQUFBO0FBQUE7QUFBQSxrT0FBaEI7QUFpQkEsK0RBQWUrSSxVQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBRUEsTUFBTUMsT0FBTyxHQUFHaEosc0VBQUg7QUFBQTtBQUFBO0FBQUEsNkhBQWI7QUFVQSwrREFBZWdKLE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7O0FDWmUsU0FBUzVILGNBQVQsQ0FBd0JGLElBQXhCLEVBQThCO0FBQzNDLFNBQU9BLElBQUksQ0FBQzRELE1BQUwsQ0FBWSxDQUFDQyxLQUFELEVBQVE3RSxRQUFSLEtBQXFCO0FBQ3RDLFFBQUksQ0FBQ0EsUUFBUSxDQUFDQyxPQUFkLEVBQXVCLE9BQU80RSxLQUFQLENBRGUsQ0FDRDs7QUFDckMsV0FBT0EsS0FBSyxHQUFHN0UsUUFBUSxDQUFDUSxRQUFULEdBQW9CUixRQUFRLENBQUNDLE9BQVQsQ0FBaUJNLEtBQXBEO0FBQ0QsR0FITSxFQUdKLENBSEksQ0FBUDtBQUlELEMiLCJmaWxlIjoiY29tcG9uZW50c19QYWdlX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IENhcnRTdHlsZXMgZnJvbSBcIi4vc3R5bGVzL0NhcnRTdHlsZXNcIjtcclxuaW1wb3J0IFN1cHJlbWUgZnJvbSBcIi4vc3R5bGVzL1N1cHJlbWVcIjtcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCIuL3N0eWxlcy9DbG9zZUJ1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSBcIi4vVXNlclwiO1xyXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSBcIi4uL2xpYi9mb3JtYXRNb25leVwiO1xyXG5pbXBvcnQgY2FsY1RvdGFsUHJpY2UgZnJvbSBcIi4uL2xpYi9jYWxjVG90YWxQcmljZVwiO1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcIi4uL2xpYi9jYXJ0U3RhdGVcIjtcclxuaW1wb3J0IFJlbW92ZUZyb21DYXJ0IGZyb20gXCIuL1JlbW92ZUZyb21DYXJ0XCI7XHJcbmltcG9ydCBDaGVja291dCBmcm9tIFwiLi9DaGVja291dFwiO1xyXG5cclxuY29uc3QgQ2FydEl0ZW1TdHlsZXMgPSBzdHlsZWQubGlgXHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodEdyZXkpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIGgzLFxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIENhcnRJdGVtKHsgY2FydEl0ZW0gfSkge1xyXG4gIGNvbnN0IHByb2R1Y3QgPSBjYXJ0SXRlbS5wcm9kdWN0O1xyXG4gIGlmICghcHJvZHVjdCkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0SXRlbVN0eWxlcz5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICBzcmM9e3Byb2R1Y3QucGhvdG8uaW1hZ2UucHVibGljVXJsVHJhbnNmb3JtZWR9XHJcbiAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHtmb3JtYXRNb25leShwcm9kdWN0LnByaWNlICogY2FydEl0ZW0ucXVhbnRpdHkpfSAte1wiIFwifVxyXG4gICAgICAgICAgPGVtPlxyXG4gICAgICAgICAgICB7Y2FydEl0ZW0ucXVhbnRpdHl9ICZ0aW1lczsge2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfSBlYWNoXHJcbiAgICAgICAgICA8L2VtPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8UmVtb3ZlRnJvbUNhcnQgaWQ9e2NhcnRJdGVtLmlkfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FydEl0ZW1TdHlsZXM+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcclxuICBjb25zdCBtZSA9IHVzZVVzZXIoKTtcclxuICBjb25zdCB7IGNhcnRPcGVuLCBjbG9zZUNhcnQgfSA9IHVzZUNhcnQoKTtcclxuXHJcbiAgaWYgKCFtZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydFN0eWxlcyBvcGVuPXtjYXJ0T3Blbn0+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPFN1cHJlbWU+e21lLm5hbWV9J3MgQ2FydDwvU3VwcmVtZT5cclxuICAgICAgICA8Q2xvc2VCdXR0b24gb25DbGljaz17Y2xvc2VDYXJ0fT4mdGltZXM7PC9DbG9zZUJ1dHRvbj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bWUuY2FydC5tYXAoKGNhcnRJdGVtKSA9PiAoXHJcbiAgICAgICAgICA8Q2FydEl0ZW0ga2V5PXtjYXJ0SXRlbS5pZH0gY2FydEl0ZW09e2NhcnRJdGVtfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxwPlRvdGFsOiB7Zm9ybWF0TW9uZXkoY2FsY1RvdGFsUHJpY2UobWUuY2FydCkpfTwvcD5cclxuICAgICAgICA8Q2hlY2tvdXQgLz5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L0NhcnRTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBDU1NUcmFuc2l0aW9uLCBUcmFuc2l0aW9uR3JvdXAgfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgRG90ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgbWluLXdpZHRoOiAzcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJ0bnVtXCI7XHJcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcclxuYDtcclxuXHJcbmNvbnN0IEFuaW1hdGlvblN0eWxlcyA9IHN0eWxlZC5zcGFuYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAuY291bnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGl2ZTogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLmNvdW50LWVudGVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoNCkgcm90YXRlWCgwLjV0dXJuKTtcclxuICB9XHJcbiAgLmNvdW50LWVudGVyLWFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XHJcbiAgfVxyXG4gIC5jb3VudC1leGl0IHtcclxuICAgIHRvcDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcclxuICB9XHJcbiAgLmNvdW50LWV4aXQtYWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoNCkgcm90YXRlWCgwLjV0dXJuKTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0Q291bnQoeyBjb3VudCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmltYXRpb25TdHlsZXM+XHJcbiAgICAgIDxUcmFuc2l0aW9uR3JvdXA+XHJcbiAgICAgICAgPENTU1RyYW5zaXRpb25cclxuICAgICAgICAgIHVubW91bnRPbkV4aXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvdW50XCJcclxuICAgICAgICAgIGNsYXNzTmFtZXM9XCJjb3VudFwiXHJcbiAgICAgICAgICBrZXk9e2NvdW50fVxyXG4gICAgICAgICAgdGltZW91dD17eyBlbnRlcjogNDAwLCBleGl0OiA0MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8RG90Pntjb3VudH08L0RvdD5cclxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XHJcbiAgICAgIDwvVHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgPC9BbmltYXRpb25TdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZEVsZW1lbnQsXHJcbiAgRWxlbWVudHMsXHJcbiAgdXNlRWxlbWVudHMsXHJcbiAgdXNlU3RyaXBlLFxyXG59IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xyXG5pbXBvcnQgU2lja0J1dHRvbiBmcm9tIFwiLi9zdHlsZXMvU2lja0J1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgblByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tIFwiLi4vbGliL2NhcnRTdGF0ZVwiO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tIFwiLi9Vc2VyXCI7XHJcblxyXG5jb25zdCBDaGVja291dEZvcm1TdHlsZXMgPSBzdHlsZWQuZm9ybWBcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG5gO1xyXG5jb25zdCBORVhUX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9LRVk7XHJcblxyXG5jb25zdCBzdHJpcGVMaWIgPSBsb2FkU3RyaXBlKE5FWFRfS0VZKTtcclxuXHJcbmNvbnN0IENSRUFURV9PUkRFUl9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBDUkVBVEVfT1JERVJfTVVUQVRJT04oJHRva2VuOiBTdHJpbmchKSB7XHJcbiAgICBjaGVja291dCh0b2tlbjogJHRva2VuKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNoYXJnZVxyXG4gICAgICB0b3RhbFxyXG4gICAgICBpdGVtcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgcXVhbnRpdHlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHN0cmlwZSA9IHVzZVN0cmlwZSgpO1xyXG4gIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGNsb3NlQ2FydCB9ID0gdXNlQ2FydCgpO1xyXG5cclxuICBjb25zdCBbY2hlY2tvdXQsIHsgZXJyb3I6IGdyYXBoUUxFcnJvciB9XSA9IHVzZU11dGF0aW9uKFxyXG4gICAgQ1JFQVRFX09SREVSX01VVEFUSU9OLFxyXG4gICAgeyByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSB9XHJcbiAgKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIC8vIHN0b3AgZm9ybSBmcm9tIHN1Ym1pdHRpbmcgYW5kIHR1cm4gbG9hZGVyIG9uXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgLy8gc3RhcnQgdGhlIHBhZ2UgdHJhbnNpdGlvblxyXG4gICAgblByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAvLyBjcmVhdGUgdGhlIHBheW1lbnQgbWV0aG9kIHZpYSBzdHJpcGUgKHRva2VuIGNvbWVzIGJhY2sgaWYgc3VjY2Vzc2Z1bClcclxuICAgIGNvbnN0IHsgZXJyb3IsIHBheW1lbnRNZXRob2QgfSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcclxuICAgICAgdHlwZTogXCJjYXJkXCIsXHJcbiAgICAgIGNhcmQ6IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpLFxyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIkhFTExPXCIsIHBheW1lbnRNZXRob2QpO1xyXG4gICAgLy8gaGFuZGxlIGFueSBlcnJvcnMgZnJvbSBzdHJpcGUgKENDIGRlY2xpbmVkLCBldGMpXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG4gICAgICBuUHJvZ3Jlc3MuZG9uZSgpO1xyXG4gICAgICByZXR1cm47IC8vc3RvcHMgdGhlIGNoZWNrb3V0IGZyb20gaGFwcGVuaW5nXHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAvLyBzZW5kIHRoZSB0b2tlbiBmcm9tIHN0ZXAgMyB0byBvdXIga2V5c3RvbmUgc2VydmVyLCB2aWEgY3VzdG9tIG11dGF0aW9uXHJcbiAgICBjb25zdCBvcmRlciA9IGF3YWl0IGNoZWNrb3V0KHtcclxuICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgdG9rZW46IHBheW1lbnRNZXRob2QuaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vY29uc29sZS5sb2coXCJmaW5pc2hlZCB3aXRoIHRoZSBvcmRlciFcIiwgb3JkZXIpO1xyXG4gICAgLy8gY2hhbmdlIHRoZSBwYWdlIHRvIHZpZXcgdGhlIG9yZGVyXHJcbiAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgIHBhdGhuYW1lOiBgL29yZGVyLyR7b3JkZXIuZGF0YS5jaGVja291dC5pZH1gLFxyXG4gICAgfSk7XHJcbiAgICAvLyBjbG9zZSB0aGUgY2FydFxyXG4gICAgY2xvc2VDYXJ0KCk7XHJcbiAgICAvLyB0dXJuIHRoZSBsb2FkZXIgb2ZmXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIG5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENoZWNrb3V0Rm9ybVN0eWxlcyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAge2Vycm9yICYmIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fT57ZXJyb3IubWVzc2FnZX08L3A+fVxyXG4gICAgICB7Z3JhcGhRTEVycm9yICYmIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fT57Z3JhcGhRTEVycm9yLm1lc3NhZ2V9PC9wPn1cclxuICAgICAgPENhcmRFbGVtZW50IC8+XHJcbiAgICAgIDxTaWNrQnV0dG9uPkNoZWNrIE91dCBOb3c8L1NpY2tCdXR0b24+XHJcbiAgICA8L0NoZWNrb3V0Rm9ybVN0eWxlcz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja291dCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlTGlifT5cclxuICAgICAgPENoZWNrb3V0Rm9ybSAvPlxyXG4gICAgPC9FbGVtZW50cz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4vQ2FydFwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL1NlYXJjaFwiO1xyXG5cclxuY29uc3QgTG9nbyA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgdHJhbnNmb3JtOiBza2V3KC03ZGVnKTtcclxuXHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG4gIGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlclN0eWxlcyA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgLmJhciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHZhcigtLWJsYWNrLCBibGFjayk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIH1cclxuICAuc3ViLWJhciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ibGFjaywgYmxhY2spO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWRlclN0eWxlcz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cclxuICAgICAgICA8TG9nbz5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+U2lja0ZpdHM8L0xpbms+XHJcbiAgICAgICAgPC9Mb2dvPlxyXG4gICAgICAgIDxOYXYgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLWJhclwiPlxyXG4gICAgICAgIDxTZWFyY2ggLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDYXJ0IC8+XHJcbiAgICA8L0hlYWRlclN0eWxlcz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE5hdlN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvTmF2U3R5bGVzXCI7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tIFwiLi9Vc2VyXCI7XHJcbmltcG9ydCBTaWduT3V0IGZyb20gXCIuL1NpZ25PdXRcIjtcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gXCIuL3N0eWxlcy9DbG9zZUJ1dHRvblwiO1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSBcIi4uL2xpYi9jYXJ0U3RhdGVcIjtcclxuaW1wb3J0IENhcnRDb3VudCBmcm9tIFwiLi9DYXJ0Q291bnRcIjtcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuICBjb25zdCB1c2VyID0gdXNlVXNlcigpO1xyXG4gIGNvbnN0IHsgb3BlbkNhcnQgfSA9IHVzZUNhcnQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPE5hdlN0eWxlcz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0c1wiPlByb2R1Y3RzPC9MaW5rPlxyXG5cclxuICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NlbGxcIj5TZWxsPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9vcmRlcnNcIj5PcmRlcnM8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnRcIj5BY2NvdW50PC9MaW5rPlxyXG4gICAgICAgICAgPFNpZ25PdXQgLz5cclxuICAgICAgICAgIDxDbG9zZUJ1dHRvbiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19IG9uQ2xpY2s9e29wZW5DYXJ0fT5cclxuICAgICAgICAgICAgTXkgQ2FydFxyXG4gICAgICAgICAgICA8Q2FydENvdW50XHJcbiAgICAgICAgICAgICAgY291bnQ9e3VzZXIuY2FydC5yZWR1Y2UoXHJcbiAgICAgICAgICAgICAgICAodGFsbHksIGNhcnRJdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgICB0YWxseSArIChjYXJ0SXRlbS5wcm9kdWN0ID8gY2FydEl0ZW0ucXVhbnRpdHkgOiAwKSxcclxuICAgICAgICAgICAgICAgIDBcclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9DbG9zZUJ1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgICAgeyF1c2VyICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5TaWduIEluPC9MaW5rPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9OYXZTdHlsZXM+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdyYWRuaWthX25leHQnO1xyXG4gICAgc3JjOiB1cmwoJy9zdGF0aWMvcmFkbmlrYW5leHQtbWVkaXVtLXdlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIH1cclxuICBodG1sIHtcclxuICAgIC0tcmVkOiAjZmYwMDAwO1xyXG4gICAgLS1ibGFjazogIzM5MzkzOTtcclxuICAgIC0tZ3JleTogIzNBM0EzQTtcclxuICAgIC0tZ3JheTogdmFyKC0tZ3JleSk7XHJcbiAgICAtLWxpZ2h0R3JleTogI2UxZTFlMTtcclxuICAgIC0tbGlnaHRHcmF5OiB2YXIoLS1saWdodEdyZXkpO1xyXG4gICAgLS1vZmZXaGl0ZTogI2VkZWRlZDtcclxuICAgIC0tbWF4V2lkdGg6IDEwMDBweDtcclxuICAgIC0tYnM6IDAgMTJweCAyNHB4IDAgcmdiYSgwLDAsMCwwLjA5KTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gICosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgfVxyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdyYWRuaWthX25leHQnLCAtLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6MjtcclxuICB9XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tLWJsYWNrKTtcclxuICB9XHJcbiAgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAncmFkbmlrYV9uZXh0JywgLS1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJyxcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbm5lclN0eWxlcyA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXhXaWR0aCk7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMnJlbTtcclxuYDtcclxuXHJcbmNvbnN0IFBhZ2UgPSAoeyBjaGlsZHJlbiwgY29vbCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8SW5uZXJTdHlsZXM+e2NoaWxkcmVufTwvSW5uZXJTdHlsZXM+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcclxuXHJcblBhZ2UucHJvcFR5cGVzID0ge1xyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxyXG4gIGNvb2w6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcbiIsImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBCaWdCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMDtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gUkVNT1ZFX0ZST01fQ0FSVF9NVVRBVElPTigkaWQ6IElEISkge1xyXG4gICAgZGVsZXRlQ2FydEl0ZW0oaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZShjYWNoZSwgcGF5bG9hZCkge1xyXG4gIGNhY2hlLmV2aWN0KGNhY2hlLmlkZW50aWZ5KHBheWxvYWQuZGF0YS5kZWxldGVDYXJ0SXRlbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZW1vdmVGcm9tQ2FydCh7IGlkIH0pIHtcclxuICBjb25zdCBbcmVtb3ZlRnJvbUNhcnQsIHsgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczogeyBpZDogaWQgfSxcclxuICAgIHVwZGF0ZSxcclxuICAgIC8vIG9wdGltaXN0aWNSZXNwb25zZToge1xyXG4gICAgLy8gICBkZWxldGVDYXJ0SXRlbToge1xyXG4gICAgLy8gICAgIF9fdHlwZW5hbWU6IFwiQ2FydEl0ZW1cIixcclxuICAgIC8vICAgICBpZDogaWQsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJpZ0J1dHRvblxyXG4gICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgdGl0bGU9XCJSZW1vdmUgVGhpcyBJdGVtIGZyb20gQ2FydFwiXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBvbkNsaWNrPXtyZW1vdmVGcm9tQ2FydH1cclxuICAgID5cclxuICAgICAgJnRpbWVzO1xyXG4gICAgPC9CaWdCdXR0b24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgcmVzZXRJZENvdW50ZXIsIHVzZUNvbWJvYm94IH0gZnJvbSBcImRvd25zaGlmdFwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC5kZWJvdW5jZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRHJvcERvd24sIERyb3BEb3duSXRlbSwgU2VhcmNoU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzL0Ryb3BEb3duXCI7XHJcblxyXG5jb25zdCBTRUFSQ0hfUFJPRFVDVFNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgU0VBUkNIX1BST0RVQ1RTX1FVRVJZKCRzZWFyY2hUZXJtOiBTdHJpbmchKSB7XHJcbiAgICBzZWFyY2hUZXJtczogYWxsUHJvZHVjdHMoXHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgT1I6IFtcclxuICAgICAgICAgIHsgbmFtZV9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XHJcbiAgICAgICAgICB7IGRlc2NyaXB0aW9uX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZmluZEl0ZW1zLCB7IGxvYWRpbmcsIGRhdGEsIGVycm9yIH1dID0gdXNlTGF6eVF1ZXJ5KFxyXG4gICAgU0VBUkNIX1BST0RVQ1RTX1FVRVJZLFxyXG4gICAge1xyXG4gICAgICBmZXRjaFBvbGljeTogXCJuby1jYWNoZVwiLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgY29uc3QgaXRlbXMgPSBkYXRhPy5zZWFyY2hUZXJtcyB8fCBbXTtcclxuICBjb25zdCBmaW5kSXRlbXNCdXRDaGlsbCA9IGRlYm91bmNlKGZpbmRJdGVtcywgMzUwKTtcclxuICByZXNldElkQ291bnRlcigpO1xyXG4gIGNvbnN0IHtcclxuICAgIGlzT3BlbixcclxuICAgIGlucHV0VmFsdWUsXHJcbiAgICBnZXRNZW51UHJvcHMsXHJcbiAgICBnZXRJbnB1dFByb3BzLFxyXG4gICAgZ2V0Q29tYm9ib3hQcm9wcyxcclxuICAgIGdldEl0ZW1Qcm9wcyxcclxuICAgIGhpZ2hsaWdodGVkSW5kZXgsXHJcbiAgfSA9IHVzZUNvbWJvYm94KHtcclxuICAgIGl0ZW1zLFxyXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKCkge1xyXG4gICAgICBmaW5kSXRlbXNCdXRDaGlsbCh7XHJcbiAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICBzZWFyY2hUZXJtOiBpbnB1dFZhbHVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0ZWRJdGVtQ2hhbmdlKHsgc2VsZWN0ZWRJdGVtIH0pIHtcclxuICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgIHBhdGhuYW1lOiBgL3Byb2R1Y3QvJHtzZWxlY3RlZEl0ZW0uaWR9YCxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaXRlbVRvU3RyaW5nOiAoaXRlbSkgPT4gaXRlbT8ubmFtZSB8fCBcIlwiLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2VhcmNoU3R5bGVzPlxyXG4gICAgICA8ZGl2IHsuLi5nZXRDb21ib2JveFByb3BzKCl9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xyXG4gICAgICAgICAgICB0eXBlOiBcInNlYXJjaFwiLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWFyY2ggZm9yIGFuIEl0ZW1cIixcclxuICAgICAgICAgICAgaWQ6IFwic2VhcmNoXCIsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogbG9hZGluZyA/IFwibG9hZGluZ1wiIDogXCJcIixcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RHJvcERvd24gey4uLmdldE1lbnVQcm9wcygpfT5cclxuICAgICAgICB7aXNPcGVuICYmXHJcbiAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxEcm9wRG93bkl0ZW1cclxuICAgICAgICAgICAgICB7Li4uZ2V0SXRlbVByb3BzKHsgaXRlbSwgaW5kZXggfSl9XHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodGVkPXtpbmRleCA9PT0gaGlnaGxpZ2h0ZWRJbmRleH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICAgICAgICAgIGFsdD17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI1MFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICA8L0Ryb3BEb3duSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIHtpc09wZW4gJiYgIWl0ZW1zLmxlbmd0aCAmJiAhbG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8RHJvcERvd25JdGVtPlNvcnJ5LCBObyBpdGVtcyBmb3VuZCBmb3Ige2lucHV0VmFsdWV9PC9Ecm9wRG93bkl0ZW0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Ecm9wRG93bj5cclxuICAgIDwvU2VhcmNoU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSBcIi4vVXNlclwiO1xyXG5cclxuY29uc3QgU0lHTl9PVVRfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24ge1xyXG4gICAgZW5kU2Vzc2lvblxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25PdXQoKSB7XHJcbiAgY29uc3QgW3NpZ25vdXRdID0gdXNlTXV0YXRpb24oU0lHTl9PVVRfTVVUQVRJT04sIHtcclxuICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZIH1dLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtzaWdub3V0fT5cclxuICAgICAgU2lnbiBPdXRcclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgQ2FydFN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDAlO1xuICBtaW4td2lkdGg6IDUwMHB4O1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgJHsocHJvcHMpID0+IHByb3BzLm9wZW4gJiYgYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtgfTtcbiAgaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tYmxhY2spO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIH1cbiAgZm9vdGVyIHtcbiAgICBib3JkZXItdG9wOiAxMHB4IGRvdWJsZSB2YXIoLS1ibGFjayk7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG4gIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRTdHlsZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgYm9yZGVyOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIHJpZ2h0OiAwO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2xvc2VCdXR0b247XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgRHJvcERvd24gPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xuYDtcblxuY29uc3QgRHJvcERvd25JdGVtID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiAocHJvcHMuaGlnaGxpZ2h0ZWQgPyAnI2Y3ZjdmNycgOiAnd2hpdGUnKX07XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAkeyhwcm9wcykgPT4gKHByb3BzLmhpZ2hsaWdodGVkID8gJ3BhZGRpbmctbGVmdDogMnJlbTsnIDogbnVsbCl9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZFxuICAgICR7KHByb3BzKSA9PiAocHJvcHMuaGlnaGxpZ2h0ZWQgPyBwcm9wcy50aGVtZS5saWdodGdyZXkgOiAnd2hpdGUnKX07XG4gIGltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBnbG93ID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMHB4IHllbGxvdztcbiAgfVxuXG4gIHRvIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggeWVsbG93O1xuICB9XG5gO1xuXG5jb25zdCBTZWFyY2hTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgJi5sb2FkaW5nIHtcbiAgICAgIGFuaW1hdGlvbjogJHtnbG93fSAwLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCB7IERyb3BEb3duLCBEcm9wRG93bkl0ZW0sIFNlYXJjaFN0eWxlcyB9O1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IE5hdlN0eWxlcyA9IHN0eWxlZC51bGBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBhLFxuICBidXR0b24ge1xuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgd2lkdGg6IDJweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0R3JheSk7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdHJhbnNmb3JtOiBza2V3KC0yMGRlZyk7XG4gICAgICB0b3A6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC40cztcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMSwgLTAuNjUsIDAsIDIuMzEpO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlN0eWxlcztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTaWNrQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZDogcmVkO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtO1xuICB0cmFuc2Zvcm06IHNrZXcoLTJkZWcpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAmW2Rpc2FibGVkXSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTaWNrQnV0dG9uO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFN1cHJlbWUgPSBzdHlsZWQuaDNgXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA0cHggNXB4O1xuICB0cmFuc2Zvcm06IHNrZXcoLTNkZWcpO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFN1cHJlbWU7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYWxjVG90YWxQcmljZShjYXJ0KSB7XHJcbiAgcmV0dXJuIGNhcnQucmVkdWNlKCh0YWxseSwgY2FydEl0ZW0pID0+IHtcclxuICAgIGlmICghY2FydEl0ZW0ucHJvZHVjdCkgcmV0dXJuIHRhbGx5OyAvL3Byb2R1Y3QgZGVsZXRlZCBidXQgc3RpbGwgaW4geW91ciBjYXJ0XHJcbiAgICByZXR1cm4gdGFsbHkgKyBjYXJ0SXRlbS5xdWFudGl0eSAqIGNhcnRJdGVtLnByb2R1Y3QucHJpY2U7XHJcbiAgfSwgMCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==