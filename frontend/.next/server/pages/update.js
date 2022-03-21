(function() {
var exports = {};
exports.id = 60;
exports.ids = [60];
exports.modules = {

/***/ 2773:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ CartStateProvider; },
/* harmony export */   "j": function() { return /* binding */ useCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LocalStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({
  children
}) {
  // custom provider to store state and functionality - accessible via consumer
  const {
    0: cartOpen,
    1: setCartOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LocalStateProvider, {
    value: {
      cartOpen,
      setCartOpen,
      toggleCart,
      closeCart,
      openCart
    },
    children: children
  });
} // custom hook for accessing cart local state


function useCart() {
  const all = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocalStateContext);
  return all;
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

/***/ 5768:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ update; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(9875);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: ./components/styles/Form.js
var Form = __webpack_require__(3804);
// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__(7847);
// EXTERNAL MODULE: ./lib/useForm.js
var useForm = __webpack_require__(8363);
;// CONCATENATED MODULE: ./components/UpdateProduct.js







const SINGLE_PRODUCT_QUERY = (external_graphql_tag_default())`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;
const UPDATE_PRODUCT_MUTATION = (external_graphql_tag_default())`
  mutation UPDATE_PRODUCT_MUTATION(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      name
      description
      price
    }
  }
`;

const UpdateProduct = ({
  id
}) => {
  var _inputs$name, _inputs$price, _inputs$description;

  // get existing product
  const {
    data,
    error,
    loading
  } = (0,client_.useQuery)(SINGLE_PRODUCT_QUERY, {
    variables: {
      id
    }
  }); // need mutation to update the product

  const [updateProduct, {
    data: updateData,
    error: updateError,
    loading: updateLoading
  }] = (0,client_.useMutation)(UPDATE_PRODUCT_MUTATION, {
    variables: {
      id: id // updates passing in call below

    }
  }); //create state for form inputs

  const {
    inputs,
    handleChange,
    clearForm,
    resetForm
  } = (0,useForm/* default */.Z)(data === null || data === void 0 ? void 0 : data.Product); // form to handle the updates

  if (loading) {
    return /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Loading..."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form/* default */.Z, {
    onSubmit: async e => {
      // TO DO: HANDLE SUBMIT
      e.preventDefault();
      const res = await updateProduct({
        variables: {
          id: id,
          name: inputs.name,
          description: inputs.description,
          price: inputs.price
        }
      }).catch(console.error); // // console.log(inputs);
      // // submit input fields to backend
      // const res = await createProduct(); //INFO IS ALREADY PRE-LOADED
      // clearForm();
      // // go to the products page
      // Router.push({
      //   pathname: `/product/${res.data.createProduct.id}`,
      //   //query: query params (?id=)
      // });
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(ErrorMessage/* default */.Z, {
      error: error || updateError
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
      disabled: updateLoading,
      "aria-busy": updateLoading,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "image",
        children: ["Image", /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "file",
          required: true,
          id: "image",
          name: "image",
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "Name",
          value: (_inputs$name = inputs.name) !== null && _inputs$name !== void 0 ? _inputs$name : "",
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "price",
        children: ["Price", /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "number",
          id: "price",
          name: "price",
          placeholder: "price",
          value: (_inputs$price = inputs.price) !== null && _inputs$price !== void 0 ? _inputs$price : "",
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "description",
        children: ["Description", /*#__PURE__*/jsx_runtime_.jsx("textarea", {
          id: "description",
          name: "description",
          placeholder: "description",
          value: (_inputs$description = inputs.description) !== null && _inputs$description !== void 0 ? _inputs$description : "",
          onChange: handleChange
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "submit",
        children: "Update Product"
      })]
    })]
  });
};

/* harmony default export */ var components_UpdateProduct = (UpdateProduct);
// EXTERNAL MODULE: ./components/Page.js + 15 modules
var Page = __webpack_require__(8977);
;// CONCATENATED MODULE: ./pages/update.js





const UpdatePage = ({
  query
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(components_UpdateProduct, {
      id: query.id
    })
  });
};

/* harmony default export */ var update = (UpdatePage);

/***/ }),

/***/ 8074:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ 3317:
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/react-stripe-js");;

/***/ }),

/***/ 420:
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/stripe-js");;

/***/ }),

/***/ 2933:
/***/ (function(module) {

"use strict";
module.exports = require("downshift");;

/***/ }),

/***/ 9875:
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ 5371:
/***/ (function(module) {

"use strict";
module.exports = require("lodash.debounce");;

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

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 3825:
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 3810:
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,847,508,977], function() { return __webpack_exec__(5768); });
module.exports = __webpack_exports__;

})();