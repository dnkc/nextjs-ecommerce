(function() {
var exports = {};
exports.id = 276;
exports.ids = [276];
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

/***/ 8380:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ sell; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./lib/useForm.js
var useForm = __webpack_require__(8363);
// EXTERNAL MODULE: ./components/styles/Form.js
var Form = __webpack_require__(3804);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(9875);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__(7847);
// EXTERNAL MODULE: ./components/Products.js + 6 modules
var Products = __webpack_require__(8334);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./components/CreateProduct.js









const CREATE_PRODUCT_MUTATION = (external_graphql_tag_default())`
  mutation CREATE_PRODUCT_MUTATION(
    #which variables are getting passed in? and what types are they?
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createProduct(
      data: {
        name: $name
        description: $description
        price: $price
        status: "AVAILABLE"
        #nested creation (specific to keystone.js)
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

function CreateProduct() {
  const {
    inputs,
    handleChange,
    clearForm,
    resetForm
  } = (0,useForm/* default */.Z)({
    name: "",
    price: 0,
    description: "",
    image: ""
  });
  const [createProduct, {
    loading,
    error,
    data
  }] = (0,client_.useMutation)(CREATE_PRODUCT_MUTATION, {
    variables: inputs,
    //refetch all products after creation mutation
    refetchQueries: [{
      query: Products/* ALL_PRODUCTS_QUERY */.$ //variables:

    }]
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form/* default */.Z, {
    onSubmit: async e => {
      e.preventDefault(); // console.log(inputs);
      // submit input fields to backend

      const res = await createProduct(); //INFO IS ALREADY PRE-LOADED

      clearForm(); // go to the products page

      router_default().push({
        pathname: `/product/${res.data.createProduct.id}` //query: query params (?id=)

      });
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(ErrorMessage/* default */.Z, {
      error: error
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
      disabled: loading,
      "aria-busy": loading,
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
          value: inputs.name,
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "price",
        children: ["Price", /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "number",
          id: "price",
          name: "price",
          placeholder: "price",
          value: inputs.price,
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "description",
        children: ["Description", /*#__PURE__*/jsx_runtime_.jsx("textarea", {
          id: "description",
          name: "description",
          placeholder: "description",
          value: inputs.description,
          onChange: handleChange
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "submit",
        children: "+ Add Product"
      })]
    })]
  });
}

/* harmony default export */ var components_CreateProduct = (CreateProduct);

// EXTERNAL MODULE: ./components/Page.js + 15 modules
var Page = __webpack_require__(8977);
// EXTERNAL MODULE: ./components/PleaseSignIn.js
var PleaseSignIn = __webpack_require__(5061);
;// CONCATENATED MODULE: ./pages/sell.js






const SellPage = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(PleaseSignIn/* default */.Z, {
      children: /*#__PURE__*/jsx_runtime_.jsx(components_CreateProduct, {})
    })
  });
};

/* harmony default export */ var sell = (SellPage);

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,847,508,649,334,977,433], function() { return __webpack_exec__(8380); });
module.exports = __webpack_exports__;

})();