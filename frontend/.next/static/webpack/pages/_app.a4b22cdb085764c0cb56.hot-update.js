self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/link-error */ "./node_modules/@apollo/link-error/lib/bundle.esm.js");
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client/react/ssr */ "./node_modules/@apollo/client/react/ssr/index.js");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-upload-client */ "./node_modules/apollo-upload-client/public/index.mjs");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* module decorator */ module = __webpack_require__.hmd(module);







function createClient(_ref) {
  var headers = _ref.headers,
      initialState = _ref.initialState;
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({
    link: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloLink.from([(0,_apollo_link_error__WEBPACK_IMPORTED_MODULE_3__.onError)(function (_ref2) {
      var graphQLErrors = _ref2.graphQLErrors,
          networkError = _ref2.networkError;
      if (graphQLErrors) graphQLErrors.forEach(function (_ref3) {
        var message = _ref3.message,
            locations = _ref3.locations,
            path = _ref3.path;
        return console.log("[GraphQL error]: Message: ".concat(message, ", Location: ").concat(locations, ", Path: ").concat(path));
      });
      if (networkError) console.log("[Network error]: ".concat(networkError, ". Backend is unreachable. Is it running?"));
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_4__.createUploadLink)({
      uri:  true ? _config__WEBPACK_IMPORTED_MODULE_1__.endpoint : 0,
      fetchOptions: {
        credentials: "include"
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers: headers
    })]),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache({
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

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_0___default()(createClient, {
  getDataFromTree: _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_5__.getDataFromTree
}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3dpdGhEYXRhLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImhlYWRlcnMiLCJpbml0aWFsU3RhdGUiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiQXBvbGxvTGluayIsIm9uRXJyb3IiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwiZm9yRWFjaCIsIm1lc3NhZ2UiLCJsb2NhdGlvbnMiLCJwYXRoIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVVwbG9hZExpbmsiLCJ1cmkiLCJlbmRwb2ludCIsInByb2RFbmRwb2ludCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwidHlwZVBvbGljaWVzIiwiUXVlcnkiLCJmaWVsZHMiLCJhbGxQcm9kdWN0cyIsInBhZ2luYXRpb25GaWVsZCIsInJlc3RvcmUiLCJ3aXRoQXBvbGxvIiwiZ2V0RGF0YUZyb21UcmVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxPQUFpRDtBQUFBLE1BQXpCQyxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCO0FBQy9DLFNBQU8sSUFBSUMsd0RBQUosQ0FBaUI7QUFDdEJDLFFBQUksRUFBRUMsMkRBQUEsQ0FBZ0IsQ0FDcEJDLDJEQUFPLENBQUMsaUJBQXFDO0FBQUEsVUFBbENDLGFBQWtDLFNBQWxDQSxhQUFrQztBQUFBLFVBQW5CQyxZQUFtQixTQUFuQkEsWUFBbUI7QUFDM0MsVUFBSUQsYUFBSixFQUNFQSxhQUFhLENBQUNFLE9BQWQsQ0FBc0I7QUFBQSxZQUFHQyxPQUFILFNBQUdBLE9BQUg7QUFBQSxZQUFZQyxTQUFaLFNBQVlBLFNBQVo7QUFBQSxZQUF1QkMsSUFBdkIsU0FBdUJBLElBQXZCO0FBQUEsZUFDcEJDLE9BQU8sQ0FBQ0MsR0FBUixxQ0FDK0JKLE9BRC9CLHlCQUNxREMsU0FEckQscUJBQ3lFQyxJQUR6RSxFQURvQjtBQUFBLE9BQXRCO0FBS0YsVUFBSUosWUFBSixFQUNFSyxPQUFPLENBQUNDLEdBQVIsNEJBQ3NCTixZQUR0QjtBQUdILEtBWE0sQ0FEYSxFQWFwQjtBQUNBTywwRUFBZ0IsQ0FBQztBQUNmQyxTQUFHLEVBQUUsUUFBeUNDLDZDQUF6QyxHQUFvREMsQ0FEMUM7QUFFZkMsa0JBQVksRUFBRTtBQUNaQyxtQkFBVyxFQUFFO0FBREQsT0FGQztBQUtmO0FBQ0FuQixhQUFPLEVBQVBBO0FBTmUsS0FBRCxDQWRJLENBQWhCLENBRGdCO0FBd0J0Qm9CLFNBQUssRUFBRSxJQUFJQyx5REFBSixDQUFrQjtBQUN2QkMsa0JBQVksRUFBRTtBQUNaQyxhQUFLLEVBQUU7QUFDTEMsZ0JBQU0sRUFBRTtBQUNOO0FBQ0FDLHVCQUFXLEVBQUVDLGVBQWU7QUFGdEI7QUFESDtBQURLO0FBRFMsS0FBbEIsRUFTSkMsT0FUSSxDQVNJMUIsWUFBWSxJQUFJLEVBVHBCO0FBeEJlLEdBQWpCLENBQVA7QUFtQ0Q7O0FBRUQsK0RBQWUyQix1REFBVSxDQUFDN0IsWUFBRCxFQUFlO0FBQUU4QixpQkFBZSxFQUFmQSxxRUFBZUE7QUFBakIsQ0FBZixDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmE0YjIyY2RiMDg1NzY0YzBjYjU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEFwb2xsb0xpbmssIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tIFwiQGFwb2xsby9saW5rLWVycm9yXCI7XG5pbXBvcnQgeyBnZXREYXRhRnJvbVRyZWUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyXCI7XG5pbXBvcnQgeyBjcmVhdGVVcGxvYWRMaW5rIH0gZnJvbSBcImFwb2xsby11cGxvYWQtY2xpZW50XCI7XG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tIFwibmV4dC13aXRoLWFwb2xsb1wiO1xuaW1wb3J0IHsgZW5kcG9pbnQsIHByb2RFbmRwb2ludCB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KHsgaGVhZGVycywgaW5pdGlhbFN0YXRlIH0pIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGxpbms6IEFwb2xsb0xpbmsuZnJvbShbXG4gICAgICBvbkVycm9yKCh7IGdyYXBoUUxFcnJvcnMsIG5ldHdvcmtFcnJvciB9KSA9PiB7XG4gICAgICAgIGlmIChncmFwaFFMRXJyb3JzKVxuICAgICAgICAgIGdyYXBoUUxFcnJvcnMuZm9yRWFjaCgoeyBtZXNzYWdlLCBsb2NhdGlvbnMsIHBhdGggfSkgPT5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICBgW0dyYXBoUUwgZXJyb3JdOiBNZXNzYWdlOiAke21lc3NhZ2V9LCBMb2NhdGlvbjogJHtsb2NhdGlvbnN9LCBQYXRoOiAke3BhdGh9YFxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIGlmIChuZXR3b3JrRXJyb3IpXG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBgW05ldHdvcmsgZXJyb3JdOiAke25ldHdvcmtFcnJvcn0uIEJhY2tlbmQgaXMgdW5yZWFjaGFibGUuIElzIGl0IHJ1bm5pbmc/YFxuICAgICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIC8vIHRoaXMgdXNlcyBhcG9sbG8tbGluay1odHRwIHVuZGVyIHRoZSBob29kLCBzbyBhbGwgdGhlIG9wdGlvbnMgaGVyZSBjb21lIGZyb20gdGhhdCBwYWNrYWdlXG4gICAgICBjcmVhdGVVcGxvYWRMaW5rKHtcbiAgICAgICAgdXJpOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiID8gZW5kcG9pbnQgOiBwcm9kRW5kcG9pbnQsXG4gICAgICAgIGZldGNoT3B0aW9uczoge1xuICAgICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8gcGFzcyB0aGUgaGVhZGVycyBhbG9uZyBmcm9tIHRoaXMgcmVxdWVzdC4gVGhpcyBlbmFibGVzIFNTUiB3aXRoIGxvZ2dlZCBpbiBzdGF0ZVxuICAgICAgICBoZWFkZXJzLFxuICAgICAgfSksXG4gICAgXSksXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtcbiAgICAgIHR5cGVQb2xpY2llczoge1xuICAgICAgICBRdWVyeToge1xuICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgLy8gVE9ETzogV2Ugd2lsbCBhZGQgdGhpcyB0b2dldGhlciFcbiAgICAgICAgICAgIGFsbFByb2R1Y3RzOiBwYWdpbmF0aW9uRmllbGQoKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KS5yZXN0b3JlKGluaXRpYWxTdGF0ZSB8fCB7fSksXG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKGNyZWF0ZUNsaWVudCwgeyBnZXREYXRhRnJvbVRyZWUgfSk7XG4iXSwic291cmNlUm9vdCI6IiJ9