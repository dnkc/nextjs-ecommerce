(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5529:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/Page.js + 15 modules
var Page = __webpack_require__(8977);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(3825);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
;// CONCATENATED MODULE: external "@apollo/link-error"
var link_error_namespaceObject = require("@apollo/link-error");;
;// CONCATENATED MODULE: external "@apollo/client/react/ssr"
var ssr_namespaceObject = require("@apollo/client/react/ssr");;
;// CONCATENATED MODULE: external "apollo-upload-client"
var external_apollo_upload_client_namespaceObject = require("apollo-upload-client");;
;// CONCATENATED MODULE: external "next-with-apollo"
var external_next_with_apollo_namespaceObject = require("next-with-apollo");;
var external_next_with_apollo_default = /*#__PURE__*/__webpack_require__.n(external_next_with_apollo_namespaceObject);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(4985);
// EXTERNAL MODULE: ./components/Pagination.js + 1 modules
var Pagination = __webpack_require__(4912);
;// CONCATENATED MODULE: ./lib/paginationField.js

function paginationField() {
  return {
    keyArgs: false,

    //tells apollo that we will take care of everything
    read(existing = [], {
      args,
      cache
    }) {
      var _data$_allProductsMet;

      // args: first & skip values, cache is apollo cache
      const {
        skip,
        first
      } = args; // read number of items on the page from cache

      const data = cache.readQuery({
        query: Pagination/* PAGINATION_QUERY */.V
      });
      const count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first); // check if we have existing items

      const items = existing.slice(skip, skip + first).filter(x => x); // filters if item is undefined
      // check if we do not have existing items
      // if there are items AND there are not enough items requested per page (default 2) AND we are on last page, then send it

      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        // we do not have any items, go to network
        return false;
      } // if there are items, return them from the cache, do not go to network
      // if (items.length) {
      //   console.log(
      //     `There are ${items.length} items in the cache! Gonna send them to apollo.`
      //   );
      // }


      return items;
    },

    merge(existing, incoming, {
      args
    }) {
      // runs when apollo client comes back from the network with our product
      // when apollo tries to query for all products:
      // first thing: read function for those items
      // two things possible: return items bc they are in cache OR return false from here (makes a network request)
      // console.log(`Merging items from the network ${incoming.length}`);
      const {
        skip,
        first
      } = args;
      const merged = existing ? existing.slice(0) : [];

      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      } // console.log(merged);
      // return merged items from cache


      return merged;
    }

  };
}
;// CONCATENATED MODULE: ./lib/withData.js








function createClient({
  headers,
  initialState
}) {
  return new client_.ApolloClient({
    link: client_.ApolloLink.from([(0,link_error_namespaceObject.onError)(({
      graphQLErrors,
      networkError
    }) => {
      if (graphQLErrors) graphQLErrors.forEach(({
        message,
        locations,
        path
      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    (0,external_apollo_upload_client_namespaceObject.createUploadLink)({
      uri:  false ? 0 : config/* prodEndpoint */.W,
      fetchOptions: {
        credentials: "include"
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers
    })]),
    cache: new client_.InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            allProducts: paginationField()
          }
        }
      }
    }).restore(initialState || {})
  });
}

/* harmony default export */ var withData = (external_next_with_apollo_default()(createClient, {
  getDataFromTree: ssr_namespaceObject.getDataFromTree
}));
// EXTERNAL MODULE: ./lib/cartState.js
var cartState = __webpack_require__(2773);
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // to do: swap with our own






router_default().events.on("routeChangeStart", () => external_nprogress_default().start());
router_default().events.on("routeChangeComplete", () => external_nprogress_default().done());
router_default().events.on("routeChangeError", () => external_nprogress_default().done());

function MyApp({
  Component,
  pageProps,
  apollo
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(client_.ApolloProvider, {
    client: apollo,
    children: /*#__PURE__*/jsx_runtime_.jsx(cartState/* CartStateProvider */.J, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Page/* default */.Z, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })
    })
  });
} // fetch all queries in children components


MyApp.getInitialProps = async function ({
  Component,
  ctx
}) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
  return {
    pageProps
  };
};

/* harmony default export */ var _app = (withData(MyApp));

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

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,847,649,848,977], function() { return __webpack_exec__(5529); });
module.exports = __webpack_exports__;

})();