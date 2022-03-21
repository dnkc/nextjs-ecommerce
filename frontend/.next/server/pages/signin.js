(function() {
var exports = {};
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 1029:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ signin; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/SignIn.js
var SignIn = __webpack_require__(433);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(9875);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: ./components/styles/Form.js
var Form = __webpack_require__(3804);
// EXTERNAL MODULE: ./lib/useForm.js
var useForm = __webpack_require__(8363);
// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__(4653);
// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__(7847);
;// CONCATENATED MODULE: ./components/SignUp.js








const SIGN_UP_MUTATION = (external_graphql_tag_default())`
  mutation SIGN_UP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    createUser(data: { email: $email, name: $name, password: $password }) {
      id
      email
      name
    }
  }
`;
function SignUp() {
  const {
    inputs,
    handleChange,
    resetForm
  } = (0,useForm/* default */.Z)({
    name: "",
    email: "",
    password: ""
  });
  const [signup, {
    data,
    loading,
    error
  }] = (0,client_.useMutation)(SIGN_UP_MUTATION, {
    variables: inputs // refectch the currently logged in user
    // refetchQueries: [{ query: CURRENT_USER_QUERY }],

  });

  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting

    await signup().catch(console.error);
    resetForm(); // Send the email and password to the graphqlAPI
  } //   const error =
  //     data?.authenticateUserWithPassword.__typename ===
  //     "UserAuthenticationWithPasswordFailure"
  //       ? data?.authenticateUserWithPassword
  //       : undefined;


  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form/* default */.Z, {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "Sign Up For An Account"
    }), /*#__PURE__*/jsx_runtime_.jsx(ErrorMessage/* default */.Z, {
      error: error
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.createUser) && /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Signed up with ", data.createUser.email, " - Please go ahead and sign in!"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          name: "name",
          placeholder: "Your Name",
          autoComplete: "name",
          value: inputs.name,
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "email",
          name: "email",
          placeholder: "Your Email Address",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        htmlFor: "password",
        children: ["Password", /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "password",
          name: "password",
          placeholder: "Password",
          autoComplete: "password",
          value: inputs.password,
          onChange: handleChange
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "submit",
        children: "Sign Up!"
      })]
    })]
  });
}

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/RequestReset.js
var RequestReset = __webpack_require__(5142);
;// CONCATENATED MODULE: ./pages/signin.js






const GridStyles = external_styled_components_default().div.withConfig({
  displayName: "signin__GridStyles",
  componentId: "sc-1iz4eat-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));"]);

const SignInPage = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(GridStyles, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(SignIn/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(SignUp, {}), /*#__PURE__*/jsx_runtime_.jsx(RequestReset/* default */.Z, {})]
  });
};

/* harmony default export */ var signin = (SignInPage);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [847,508,433,142], function() { return __webpack_exec__(1029); });
module.exports = __webpack_exports__;

})();