exports.id = 848;
exports.ids = [848];
exports.modules = {

/***/ 4912:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": function() { return /* binding */ PAGINATION_QUERY; },
  "Z": function() { return /* binding */ Pagination; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(9875);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/styles/PaginationStyles.js

const PaginationStyles = external_styled_components_default().div.withConfig({
  displayName: "PaginationStyles",
  componentId: "sc-aduuar-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid var(--lightGray);border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid var(--lightGray);&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"]);
/* harmony default export */ var styles_PaginationStyles = (PaginationStyles);
// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__(7847);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(4985);
;// CONCATENATED MODULE: ./components/Pagination.js









const PAGINATION_QUERY = (external_graphql_tag_default())`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;
function Pagination({
  page
}) {
  const {
    error,
    loading,
    data
  } = (0,client_.useQuery)(PAGINATION_QUERY);

  if (loading) {
    return /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Loading..."
    });
  }

  if (error) {
    return /*#__PURE__*/jsx_runtime_.jsx(ErrorMessage/* default */.Z, {
      error: error
    });
  }

  const {
    count
  } = data._allProductsMeta;
  const pageCount = Math.ceil(count / config/* perPage */.ji);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_PaginationStyles, {
    "data-testid": "pagination",
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: ["Sick Fits | Page ", page, " of ", pageCount]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/products/${page - 1}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        "aria-disabled": page <= 1,
        children: "Prev"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: ["Page ", page, " of ", /*#__PURE__*/jsx_runtime_.jsx("span", {
        "data-testid": "pageCount",
        children: pageCount
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [count, " Items Total"]
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/products/${page + 1}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        "aria-disabled": page >= pageCount,
        children: "Next"
      })
    })]
  });
}

/***/ }),

/***/ 4653:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": function() { return /* binding */ CURRENT_USER_QUERY; },
/* harmony export */   "a": function() { return /* binding */ useUser; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8074);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CURRENT_USER_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query CURRENT_USER_QUERY {
    authenticatedItem {
      ... on User {
        id
        email
        name
        cart {
          id
          quantity
          product {
            id
            price
            name
            description
            photo {
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`;
function useUser() {
  const {
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(CURRENT_USER_QUERY);
  return data === null || data === void 0 ? void 0 : data.authenticatedItem;
}

/***/ })

};
;