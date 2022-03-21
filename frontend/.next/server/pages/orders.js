(function() {
var exports = {};
exports.id = 984;
exports.ids = [984];
exports.modules = {

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

/***/ 6807:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ OrdersPage; }
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
;// CONCATENATED MODULE: ./components/styles/OrderItemStyles.js

const OrderItemStyles = external_styled_components_default().li.withConfig({
  displayName: "OrderItemStyles",
  componentId: "sc-fbwo89-0"
})(["box-shadow:var(--bs);list-style:none;padding:2rem;border:1px solid var(--offWhite);h2{border-bottom:2px solid red;margin-top:0;margin-bottom:2rem;padding-bottom:2rem;}.images{display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fit,minmax(0,1fr));margin-top:1rem;img{height:200px;object-fit:cover;width:100%;}}.order-meta{display:grid;grid-template-columns:repeat(auto-fit,minmax(20px,1fr));display:grid;grid-gap:1rem;text-align:center;& > *{margin:0;background:rgba(0,0,0,0.03);padding:1rem 0;}strong{display:block;margin-bottom:1rem;}}"]);
/* harmony default export */ var styles_OrderItemStyles = (OrderItemStyles);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__(4849);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./pages/orders.js










const USER_ORDERS_QUERY = (external_graphql_tag_default())`
  query USER_ORDERS_QUERY {
    allOrders {
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
const OrderUl = external_styled_components_default().ul.withConfig({
  displayName: "orders__OrderUl",
  componentId: "sc-15udvsj-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(550px,1fr));grid-gap:4rem;"]);

function countItemsInAnOrder(order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

function OrdersPage() {
  const {
    data,
    error,
    loading
  } = (0,client_.useQuery)(USER_ORDERS_QUERY);
  if (loading) return /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: "Loading..."
  });
  if (error) return /*#__PURE__*/jsx_runtime_.jsx(ErrorMessage/* default */.Z, {
    error: error
  });
  const {
    allOrders
  } = data;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: ["Your Orders (", allOrders.length, ")"]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
      children: ["You have ", allOrders.length, " orders!"]
    }), /*#__PURE__*/jsx_runtime_.jsx(OrderUl, {
      children: allOrders.map(order => /*#__PURE__*/jsx_runtime_.jsx(styles_OrderItemStyles, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/order/${order.id}`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "order-meta",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: [countItemsInAnOrder(order), " Items"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: [order.items.length, " Product", order.items.length === 1 ? "" : "s"]
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: (0,formatMoney/* default */.Z)(order.total)
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "images",
              children: order.items.map(item => {
                var _item$photo, _item$photo$image;

                return /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: (_item$photo = item.photo) === null || _item$photo === void 0 ? void 0 : (_item$photo$image = _item$photo.image) === null || _item$photo$image === void 0 ? void 0 : _item$photo$image.publicUrlTransformed,
                  alt: item.name
                }, `image-${item.id}`);
              })
            })]
          })
        })
      }))
    })]
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

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

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

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,847], function() { return __webpack_exec__(6807); });
module.exports = __webpack_exports__;

})();