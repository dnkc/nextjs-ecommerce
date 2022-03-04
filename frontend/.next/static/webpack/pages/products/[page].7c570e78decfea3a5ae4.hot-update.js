self["webpackHotUpdate_N_E"]("pages/products/[page]",{

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_PRODUCTS_QUERY": function() { return /* binding */ ALL_PRODUCTS_QUERY; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ "./components/Product.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\Products.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,D_Program_react_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {\n    allProducts(first: $first, skip: $skip) {\n      id\n      name\n      price\n      description\n      photo {\n        id\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var ALL_PRODUCTS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_4__.default)(_templateObject());
var ProductsListStyles = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.div.withConfig({
  displayName: "Products__ProductsListStyles",
  componentId: "sc-1uv5x8m-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;"]);
_c = ProductsListStyles;

var Products = function Products(_ref) {
  _s();

  var page = _ref.page;

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * _config__WEBPACK_IMPORTED_MODULE_3__.perPage - _config__WEBPACK_IMPORTED_MODULE_3__.perPage,
      first: PerPage
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading; //   console.log(data, error, loading);


  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 23
  }, _this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 21
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsListStyles, {
      children: data.allProducts.map(function (product) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {
          product: product
        }, product.id, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 18
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, _this);
};

_s(Products, "eE+cqeCo2lkI//dPlCsO1rICVGU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery];
});

_c2 = Products;
/* harmony default export */ __webpack_exports__["default"] = (Products);

var _c, _c2;

$RefreshReg$(_c, "ProductsListStyles");
$RefreshReg$(_c2, "Products");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJBTExfUFJPRFVDVFNfUVVFUlkiLCJncWwiLCJQcm9kdWN0c0xpc3RTdHlsZXMiLCJzdHlsZWQiLCJQcm9kdWN0cyIsInBhZ2UiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsInNraXAiLCJwZXJQYWdlIiwiZmlyc3QiLCJQZXJQYWdlIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsIm1lc3NhZ2UiLCJhbGxQcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGtCQUFrQixHQUFHQyxvREFBSCxtQkFBeEI7QUFpQlAsSUFBTUMsa0JBQWtCLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGlFQUF4QjtLQUFNRCxrQjs7QUFNTixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLGtCQUNJQyx3REFBUSxDQUFDTixrQkFBRCxFQUFxQjtBQUM1RE8sYUFBUyxFQUFFO0FBQ1RDLFVBQUksRUFBRUgsSUFBSSxHQUFHSSw0Q0FBUCxHQUFpQkEsNENBRGQ7QUFFVEMsV0FBSyxFQUFFQztBQUZFO0FBRGlELEdBQXJCLENBRFo7QUFBQSxNQUNyQkMsSUFEcUIsYUFDckJBLElBRHFCO0FBQUEsTUFDZkMsS0FEZSxhQUNmQSxLQURlO0FBQUEsTUFDUkMsT0FEUSxhQUNSQSxPQURRLEVBTzdCOzs7QUFDQSxNQUFJQSxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNiLE1BQUlELEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNFLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ1gsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxrQkFBRDtBQUFBLGdCQUNHSCxJQUFJLENBQUNJLFdBQUwsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQUNDLE9BQUQsRUFBYTtBQUNqQyw0QkFBTyw4REFBQyw2Q0FBRDtBQUEwQixpQkFBTyxFQUFFQTtBQUFuQyxXQUFjQSxPQUFPLENBQUNDLEVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVA7QUFDRCxPQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVNELENBbkJEOztHQUFNZixRO1VBQzZCRSxvRDs7O01BRDdCRixRO0FBcUJOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzL1twYWdlXS43YzU3MGU3OGRlY2ZlYTNhNWFlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBwZXJQYWdlIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBBTExfUFJPRFVDVFNfUVVFUlkoJHNraXA6IEludCA9IDAsICRmaXJzdDogSW50KSB7XHJcbiAgICBhbGxQcm9kdWN0cyhmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdHNMaXN0U3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLWdhcDogNjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RzID0gKHsgcGFnZSB9KSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX1BST0RVQ1RTX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgc2tpcDogcGFnZSAqIHBlclBhZ2UgLSBwZXJQYWdlLFxyXG4gICAgICBmaXJzdDogUGVyUGFnZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhkYXRhLCBlcnJvciwgbG9hZGluZyk7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFByb2R1Y3RzTGlzdFN0eWxlcz5cclxuICAgICAgICB7ZGF0YS5hbGxQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8UHJvZHVjdCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L1Byb2R1Y3RzTGlzdFN0eWxlcz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==