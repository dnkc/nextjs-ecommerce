(function() {
var exports = {};
exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 5061:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4653);
/* harmony import */ var _SignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(433);



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({
  children
}) {
  const me = (0,_User__WEBPACK_IMPORTED_MODULE_1__/* .useUser */ .a)();
  if (!me) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SignIn__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {});
  return children;
}

/***/ }),

/***/ 4849:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ formatMoney; }
/* harmony export */ });
function formatMoney(amount = 0) {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }; // check if clean dollar amount

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat("en-US", options);
  return formatter.format(amount / 100);
}

/***/ }),

/***/ 7095:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ SingleOrderPage; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(9875);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__(7847);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/styles/OrderStyles.js

const OrderStyles = external_styled_components_default().div.withConfig({
  displayName: "OrderStyles",
  componentId: "sc-4oqalm-0"
})(["max-width:1000px;margin:0 auto;border:1px solid var(--offWhite);box-shadow:var(--bs);padding:2rem;border-top:10px solid red;& > p{display:grid;grid-template-columns:1fr 5fr;margin:0;border-bottom:1px solid var(--offWhite);span{padding:1rem;&:first-child{font-weight:900;text-align:right;}}}.order-item{border-bottom:1px solid var(--offWhite);display:grid;grid-template-columns:300px 1fr;align-items:center;grid-gap:2rem;margin:2rem 0;padding-bottom:2rem;img{width:100%;height:100%;object-fit:cover;}}"]);
/* harmony default export */ var styles_OrderStyles = (OrderStyles);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__(4849);
// EXTERNAL MODULE: ./components/PleaseSignIn.js
var PleaseSignIn = __webpack_require__(5061);
;// CONCATENATED MODULE: ./pages/order/[id].js









const SINGLE_ORDER_QUERY = (external_graphql_tag_default())`
  query SINGLE_ORDER_QUERY($id: ID!) {
    Order(where: { id: $id }) {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        quantity
        price
        description
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;
function SingleOrderPage({
  query
}) {
  const {
    data,
    error,
    loading
  } = (0,client_.useQuery)(SINGLE_ORDER_QUERY, {
    variables: {
      id: query.id
    }
  });
  if (loading) return /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: "Loading..."
  });
  if (error) return /*#__PURE__*/jsx_runtime_.jsx(ErrorMessage/* default */.Z, {
    error: error
  });
  const {
    Order: order
  } = data;
  return /*#__PURE__*/jsx_runtime_.jsx(PleaseSignIn/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_OrderStyles, {
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
          children: ["Sick Fits - ", order.id]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Order ID:"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: order.id
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Charge:"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: order.charge
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Total:"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: (0,formatMoney/* default */.Z)(order.total)
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Item Count:"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: order.items.length
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: order.items.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "order-item",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: item.photo.image.publicUrlTransformed,
            alt: item.title
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "item-details",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
              children: item.name
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: ["Qty: ", item.quantity]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: ["Each: ", (0,formatMoney/* default */.Z)(item.price)]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: ["Sub Total: ", (0,formatMoney/* default */.Z)(item.price * item.quantity)]
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              children: item.description
            })]
          })]
        }, item.id))
      })]
    })
  });
}

/***/ }),

/***/ 8074:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ 9875:
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [847,508,433], function() { return __webpack_exec__(7095); });
module.exports = __webpack_exports__;

})();