exports.id = 977;
exports.ids = [977];
exports.modules = {

/***/ 8977:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Page; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/styles/NavStyles.js

const NavStyles = external_styled_components_default().ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-11c0d2g-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:'';width:2px;background:var(--lightGray);height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;text-decoration:none;&:after{width:calc(100% - 60px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1300px){border-top:1px solid var(--lightGray);width:100%;justify-content:center;font-size:1.5rem;}"]);
/* harmony default export */ var styles_NavStyles = (NavStyles);
// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__(4653);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(9875);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
;// CONCATENATED MODULE: ./components/SignOut.js




const SIGN_OUT_MUTATION = (external_graphql_tag_default())`
  mutation {
    endSession
  }
`;
function SignOut() {
  const [signout] = (0,client_.useMutation)(SIGN_OUT_MUTATION, {
    refetchQueries: [{
      query: User/* CURRENT_USER_QUERY */.z
    }]
  });
  return /*#__PURE__*/jsx_runtime_.jsx("button", {
    type: "button",
    onClick: signout,
    children: "Sign Out"
  });
}
;// CONCATENATED MODULE: ./components/styles/CloseButton.js

const CloseButton = external_styled_components_default().button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-1seb878-0"
})(["background:black;color:white;font-size:3rem;border:0;position:absolute;z-index:2;right:0;"]);
/* harmony default export */ var styles_CloseButton = (CloseButton);
// EXTERNAL MODULE: ./lib/cartState.js
var cartState = __webpack_require__(2773);
// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(3810);
;// CONCATENATED MODULE: ./components/CartCount.js



const Dot = external_styled_components_default().div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "sc-xxvp4g-0"
})(["background:red;color:white;border-radius:50%;padding:0.5rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-feature-settings:\"tnum\";font-variant-numeric:tabular-nums;"]);
const AnimationStyles = external_styled_components_default().span.withConfig({
  displayName: "CartCount__AnimationStyles",
  componentId: "sc-xxvp4g-1"
})(["position:relative;.count{display:block;positive:relative;transition:transform 0.4s;backface-visibility:hidden;}.count-enter{transform:scale(4) rotateX(0.5turn);}.count-enter-active{transform:rotateX(0);}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{transform:scale(4) rotateX(0.5turn);}"]);
function CartCount({
  count
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(AnimationStyles, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_transition_group_.TransitionGroup, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_transition_group_.CSSTransition, {
        unmountOnExit: true,
        className: "count",
        classNames: "count",
        timeout: {
          enter: 400,
          exit: 400
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(Dot, {
          children: count
        })
      }, count)
    })
  });
}
;// CONCATENATED MODULE: ./components/Nav.js












const Nav = () => {
  const user = (0,User/* useUser */.a)();
  const {
    openCart
  } = (0,cartState/* useCart */.j)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_NavStyles, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/products",
      children: "Products"
    }), user && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/sell",
        children: "Sell"
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/orders",
        children: "Orders"
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/account",
        children: "Account"
      }), /*#__PURE__*/jsx_runtime_.jsx(SignOut, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_CloseButton, {
        style: {
          color: "black"
        },
        onClick: openCart,
        children: ["My Cart", /*#__PURE__*/jsx_runtime_.jsx(CartCount, {
          count: user.cart.reduce((tally, cartItem) => tally + (cartItem.product ? cartItem.quantity : 0), 0)
        })]
      })]
    }), !user && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/signin",
        children: "Sign In"
      })
    })]
  });
};

/* harmony default export */ var components_Nav = (Nav);
;// CONCATENATED MODULE: ./components/styles/CartStyles.js

const CartStyles = external_styled_components_default().div.withConfig({
  displayName: "CartStyles",
  componentId: "sc-1tvog53-0"
})(["padding:20px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:40%;min-width:500px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;", ";header{border-bottom:5px solid var(--black);margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:10px double var(--black);margin-top:2rem;padding-top:2rem;align-items:center;font-size:3rem;font-weight:900;p{margin:0;}}ul{margin:0;padding:0;list-style:none;overflow:scroll;}"], props => props.open && `transform: translateX(0);`);
/* harmony default export */ var styles_CartStyles = (CartStyles);
;// CONCATENATED MODULE: ./components/styles/Supreme.js

const Supreme = external_styled_components_default().h3.withConfig({
  displayName: "Supreme",
  componentId: "sc-xv30qb-0"
})(["background:var(--red);color:white;display:inline-block;padding:4px 5px;transform:skew(-3deg);margin:0;font-size:4rem;"]);
/* harmony default export */ var styles_Supreme = (Supreme);
// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__(4849);
;// CONCATENATED MODULE: ./lib/calcTotalPrice.js
function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally; //product deleted but still in your cart

    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}
;// CONCATENATED MODULE: ./components/RemoveFromCart.js




const BigButton = external_styled_components_default().button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "sc-emvtd6-0"
})(["font-size:3rem;background:none;border:0;&:hover{color:var(--red);cursor:pointer;}"]);
const REMOVE_FROM_CART_MUTATION = (external_graphql_tag_default())`
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
  }] = (0,client_.useMutation)(REMOVE_FROM_CART_MUTATION, {
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
  return /*#__PURE__*/jsx_runtime_.jsx(BigButton, {
    disabled: loading,
    title: "Remove This Item from Cart",
    type: "button",
    onClick: removeFromCart,
    children: "\xD7"
  });
}
// EXTERNAL MODULE: external "@stripe/stripe-js"
var stripe_js_ = __webpack_require__(420);
// EXTERNAL MODULE: external "@stripe/react-stripe-js"
var react_stripe_js_ = __webpack_require__(3317);
;// CONCATENATED MODULE: ./components/styles/SickButton.js

const SickButton = external_styled_components_default().button.withConfig({
  displayName: "SickButton",
  componentId: "sc-l04z44-0"
})(["background:red;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"]);
/* harmony default export */ var styles_SickButton = (SickButton);
// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(3825);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/Checkout.js













const CheckoutFormStyles = external_styled_components_default().form.withConfig({
  displayName: "Checkout__CheckoutFormStyles",
  componentId: "sc-10mtoy5-0"
})(["box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;"]);
const NEXT_KEY = "pk_test_51HW5fpJNuB2GTMbH2ZJpbk10WjHkkyLEFyKkpMXfG41bBtzJhFkiTydXOvJNmbepO2s6E4AXVVQnN8gjnMim7ukg00zn0HN9Wq";
const stripeLib = (0,stripe_js_.loadStripe)(NEXT_KEY);
const CREATE_ORDER_MUTATION = (external_graphql_tag_default())`
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
  } = (0,external_react_.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const stripe = (0,react_stripe_js_.useStripe)();
  const elements = (0,react_stripe_js_.useElements)();
  const router = (0,router_.useRouter)();
  const {
    closeCart
  } = (0,cartState/* useCart */.j)();
  const [checkout, {
    error: graphQLError
  }] = (0,client_.useMutation)(CREATE_ORDER_MUTATION, {
    refetchQueries: [{
      query: User/* CURRENT_USER_QUERY */.z
    }]
  });

  async function handleSubmit(e) {
    // stop form from submitting and turn loader on
    e.preventDefault();
    setLoading(true); // start the page transition

    external_nprogress_default().start(); // create the payment method via stripe (token comes back if successful)

    const {
      error,
      paymentMethod
    } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(react_stripe_js_.CardElement)
    }); // console.log("HELLO", paymentMethod);
    // handle any errors from stripe (CC declined, etc)

    if (error) {
      setError(error);
      external_nprogress_default().done();
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
    external_nprogress_default().done();
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CheckoutFormStyles, {
    onSubmit: handleSubmit,
    children: [error && /*#__PURE__*/jsx_runtime_.jsx("p", {
      style: {
        fontSize: 12
      },
      children: error.message
    }), graphQLError && /*#__PURE__*/jsx_runtime_.jsx("p", {
      style: {
        fontSize: 12
      },
      children: graphQLError.message
    }), /*#__PURE__*/jsx_runtime_.jsx(react_stripe_js_.CardElement, {}), /*#__PURE__*/jsx_runtime_.jsx(styles_SickButton, {
      children: "Check Out Now"
    })]
  });
}

function Checkout() {
  return /*#__PURE__*/jsx_runtime_.jsx(react_stripe_js_.Elements, {
    stripe: stripeLib,
    children: /*#__PURE__*/jsx_runtime_.jsx(CheckoutForm, {})
  });
}
;// CONCATENATED MODULE: ./components/Cart.js












const CartItemStyles = external_styled_components_default().li.withConfig({
  displayName: "Cart__CartItemStyles",
  componentId: "sc-19s6z00-0"
})(["padding:1rem 0;border-bottom:1px solid var(--lightGrey);display:grid;grid-template-columns:auto 1fr auto;img{margin-right:1rem;}h3,p{margin:0;}"]);

function CartItem({
  cartItem
}) {
  const product = cartItem.product;
  if (!product) return null;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CartItemStyles, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      width: "100",
      src: product.photo.image.publicUrlTransformed,
      alt: product.name
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: product.name
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [(0,formatMoney/* default */.Z)(product.price * cartItem.quantity), " -", " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("em", {
          children: [cartItem.quantity, " \xD7 ", (0,formatMoney/* default */.Z)(product.price), " each"]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(RemoveFromCart, {
        id: cartItem.id
      })]
    })]
  });
}

function Cart() {
  const me = (0,User/* useUser */.a)();
  const {
    cartOpen,
    closeCart
  } = (0,cartState/* useCart */.j)();
  if (!me) return null;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_CartStyles, {
    open: cartOpen,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_Supreme, {
        children: [me.name, "'s Cart"]
      }), /*#__PURE__*/jsx_runtime_.jsx(styles_CloseButton, {
        onClick: closeCart,
        children: "\xD7"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
      children: me.cart.map(cartItem => /*#__PURE__*/jsx_runtime_.jsx(CartItem, {
        cartItem: cartItem
      }, cartItem.id))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Total: ", (0,formatMoney/* default */.Z)(calcTotalPrice(me.cart))]
      }), /*#__PURE__*/jsx_runtime_.jsx(Checkout, {})]
    })]
  });
}
// EXTERNAL MODULE: external "downshift"
var external_downshift_ = __webpack_require__(2933);
// EXTERNAL MODULE: external "lodash.debounce"
var external_lodash_debounce_ = __webpack_require__(5371);
var external_lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(external_lodash_debounce_);
// EXTERNAL MODULE: ./node_modules/next/dist/client/router.js
var client_router = __webpack_require__(2441);
;// CONCATENATED MODULE: ./components/styles/DropDown.js

const DropDown = external_styled_components_default().div.withConfig({
  displayName: "DropDown",
  componentId: "sc-n5d97g-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid var(--lightGray);"]);
const DropDownItem = external_styled_components_default().div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "sc-n5d97g-1"
})(["border-bottom:1px solid var(--lightGray);background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], props => props.highlighted ? '#f7f7f7' : 'white', props => props.highlighted ? 'padding-left: 2rem;' : null, props => props.highlighted ? props.theme.lightgrey : 'white');
const glow = (0,external_styled_components_.keyframes)(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
const SearchStyles = external_styled_components_default().div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "sc-n5d97g-2"
})(["position:relative;input{width:100%;padding:10px;border:0;font-size:2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);

;// CONCATENATED MODULE: ./components/Search.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SEARCH_PRODUCTS_QUERY = (external_graphql_tag_default())`
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
  const router = (0,client_router.useRouter)();
  const [findItems, {
    loading,
    data,
    error
  }] = (0,client_.useLazyQuery)(SEARCH_PRODUCTS_QUERY, {
    fetchPolicy: "no-cache"
  });
  const items = (data === null || data === void 0 ? void 0 : data.searchTerms) || [];
  const findItemsButChill = external_lodash_debounce_default()(findItems, 350);
  (0,external_downshift_.resetIdCounter)();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex
  } = (0,external_downshift_.useCombobox)({
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
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SearchStyles, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({}, getInputProps({
        type: "search",
        placeholder: "Search for an Item",
        id: "search",
        className: loading ? "loading" : ""
      })))
    })), /*#__PURE__*/(0,jsx_runtime_.jsxs)(DropDown, _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [isOpen && items.map((item, index) => /*#__PURE__*/(0,external_react_.createElement)(DropDownItem, _objectSpread(_objectSpread({}, getItemProps({
        item,
        index
      })), {}, {
        key: item.id,
        highlighted: index === highlightedIndex
      }), /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: item.photo.image.publicUrlTransformed,
        alt: item.name,
        width: "50"
      }), item.name)), isOpen && !items.length && !loading && /*#__PURE__*/(0,jsx_runtime_.jsxs)(DropDownItem, {
        children: ["Sorry, No items found for ", inputValue]
      })]
    }))]
  });
}
;// CONCATENATED MODULE: ./components/Header.js







const Logo = external_styled_components_default().h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-2cpreo-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:2;transform:skew(-7deg);background:red;a{color:white;text-decoration:none;text-transform:uppercase;padding:0.5rem 1rem;}"]);
const HeaderStyles = external_styled_components_default().header.withConfig({
  displayName: "Header__HeaderStyles",
  componentId: "sc-2cpreo-1"
})([".bar{border-bottom:10px solid var(--black,black);display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid var(--black,black);}"]);

const Header = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderStyles, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "bar",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Logo, {
        children: [" ", /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: "SickFits"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(components_Nav, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "sub-bar",
      children: /*#__PURE__*/jsx_runtime_.jsx(Search, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(Cart, {})]
  });
};

/* harmony default export */ var components_Header = (Header);
;// CONCATENATED MODULE: ./components/Page.js





const GlobalStyles = (0,external_styled_components_.createGlobalStyle)(["@font-face{font-family:'radnika_next';src:url('/static/radnikanext-medium-webfont.woff2') format('woff2');font-weight:normal;font-style:normal;}html{--red:#ff0000;--black:#393939;--grey:#3A3A3A;--gray:var(--grey);--lightGrey:#e1e1e1;--lightGray:var(--lightGrey);--offWhite:#ededed;--maxWidth:1000px;--bs:0 12px 24px 0 rgba(0,0,0,0.09);box-sizing:border-box;font-size:10px;}*,*:before,*:after{box-sizing:inherit;}body{font-family:'radnika_next',--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;padding:0;margin:0;font-size:1.5rem;line-height:2;}a{text-decoration:none;color:var(---black);}a:hover{text-decoration:underline;}button{font-family:'radnika_next',--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',}"]);
const InnerStyles = external_styled_components_default().div.withConfig({
  displayName: "Page__InnerStyles",
  componentId: "sc-4u7a64-0"
})(["max-width:var(--maxWidth);margin:0 auto;padding:2rem;"]);

const Page = ({
  children,
  cool
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyles, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(InnerStyles, {
      children: children
    })]
  });
};

/* harmony default export */ var components_Page = (Page);

/***/ })

};
;