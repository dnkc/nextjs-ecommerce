exports.id = "components_Products_js";
exports.ids = ["components_Products_js"];
exports.modules = {

/***/ "./components/DeleteProduct.js":
/*!*************************************!*\
  !*** ./components/DeleteProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeleteProduct; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\DeleteProduct.js";


const DELETE_PRODUCT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  //   console.log(payload);
  cache.evict(cache.identify(payload.data.deleteProduct));
}

function DeleteProduct({
  id,
  children
}) {
  const [deleteProduct, {
    loading,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(DELETE_PRODUCT_MUTATION, {
    variables: {
      id
    },
    update
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    disabled: loading,
    onClick: () => {
      if (confirm("Are you sure you want to delete this item?")) {
        // delete the item
        deleteProduct().catch(err => alert(err.message));
      }
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/ItemStyles */ "./components/styles/ItemStyles.js");
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.js");
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/PriceTag */ "./components/styles/PriceTag.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _DeleteProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DeleteProduct */ "./components/DeleteProduct.js");

var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\Product.js";







const Product = ({
  product
}) => {
  var _product$photo, _product$photo$image;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,
      alt: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Title__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: `/product/${product.id}`,
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [" ", (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__.default)(product.price)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: product.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "buttonList",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
        href: {
          pathname: "/update",
          query: {
            id: product.id
          }
        },
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteProduct__WEBPACK_IMPORTED_MODULE_6__.default, {
        id: product.id,
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_PRODUCTS_QUERY": function() { return /* binding */ ALL_PRODUCTS_QUERY; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ "./components/Product.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "D:\\Program\\react-sick-fits\\frontend\\components\\Products.js";





const ALL_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
const ProductsListStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Products__ProductsListStyles",
  componentId: "sc-1uv5x8m-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;"]);

const Products = ({
  page
}) => {
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * _config__WEBPACK_IMPORTED_MODULE_5__.perPage - _config__WEBPACK_IMPORTED_MODULE_5__.perPage,
      first: _config__WEBPACK_IMPORTED_MODULE_5__.perPage
    }
  }); //   console.log(data, error, loading);

  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 23
  }, undefined);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 21
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsListStyles, {
      children: data.allProducts.map(product => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_4__.default, {
          product: product
        }, product.id, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 18
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./components/styles/ItemStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/ItemStyles.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ItemStyles",
  componentId: "sc-16pk14u-0"
})(["background:white;border:1px solid var(--offWhite);box-shadow:var(--bs);position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid var(--lightGray);grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:var(--lightGray);& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (ItemStyles);

/***/ }),

/***/ "./components/styles/PriceTag.js":
/*!***************************************!*\
  !*** ./components/styles/PriceTag.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PriceTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "PriceTag",
  componentId: "sc-nwbk6t-0"
})(["background:var(--red);transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"]);
/* harmony default export */ __webpack_exports__["default"] = (PriceTag);

/***/ }),

/***/ "./components/styles/Title.js":
/*!************************************!*\
  !*** ./components/styles/Title.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "Title",
  componentId: "sc-16nq74k-0"
})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:var(--red);display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endpoint": function() { return /* binding */ endpoint; },
/* harmony export */   "prodEndpoint": function() { return /* binding */ prodEndpoint; },
/* harmony export */   "perPage": function() { return /* binding */ perPage; }
/* harmony export */ });
// This is client side config only - don't put anything in here that shouldn't be public!
const endpoint = `http://localhost:3000/api/graphql`;
const prodEndpoint = `fill me in when we deploy`;
const perPage = 2;

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formatMoney; }
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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0RlbGV0ZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvUHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvSXRlbVN0eWxlcy5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9QcmljZVRhZy5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9UaXRsZS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vbGliL2Zvcm1hdE1vbmV5LmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9pZ25vcmVkfEQ6XFxQcm9ncmFtXFxyZWFjdC1zaWNrLWZpdHNcXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiREVMRVRFX1BST0RVQ1RfTVVUQVRJT04iLCJncWwiLCJ1cGRhdGUiLCJjYWNoZSIsInBheWxvYWQiLCJldmljdCIsImlkZW50aWZ5IiwiZGF0YSIsImRlbGV0ZVByb2R1Y3QiLCJEZWxldGVQcm9kdWN0IiwiaWQiLCJjaGlsZHJlbiIsImxvYWRpbmciLCJlcnJvciIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwiY29uZmlybSIsImNhdGNoIiwiZXJyIiwiYWxlcnQiLCJtZXNzYWdlIiwiUHJvZHVjdCIsInByb2R1Y3QiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIiwiZm9ybWF0TW9uZXkiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwicGF0aG5hbWUiLCJxdWVyeSIsIkFMTF9QUk9EVUNUU19RVUVSWSIsIlByb2R1Y3RzTGlzdFN0eWxlcyIsInN0eWxlZCIsIlByb2R1Y3RzIiwicGFnZSIsInVzZVF1ZXJ5Iiwic2tpcCIsInBlclBhZ2UiLCJmaXJzdCIsImFsbFByb2R1Y3RzIiwibWFwIiwiSXRlbVN0eWxlcyIsIlByaWNlVGFnIiwiVGl0bGUiLCJlbmRwb2ludCIsInByb2RFbmRwb2ludCIsImFtb3VudCIsIm9wdGlvbnMiLCJzdHlsZSIsImN1cnJlbmN5IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsdUJBQXVCLEdBQUdDLG9EQUFJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUEE7O0FBU0EsU0FBU0MsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUJDLE9BQXZCLEVBQWdDO0FBQzlCO0FBQ0FELE9BQUssQ0FBQ0UsS0FBTixDQUFZRixLQUFLLENBQUNHLFFBQU4sQ0FBZUYsT0FBTyxDQUFDRyxJQUFSLENBQWFDLGFBQTVCLENBQVo7QUFDRDs7QUFFYyxTQUFTQyxhQUFULENBQXVCO0FBQUVDLElBQUY7QUFBTUM7QUFBTixDQUF2QixFQUF5QztBQUN0RCxRQUFNLENBQUNILGFBQUQsRUFBZ0I7QUFBRUksV0FBRjtBQUFXQztBQUFYLEdBQWhCLElBQXNDQywyREFBVyxDQUNyRGQsdUJBRHFELEVBRXJEO0FBQ0VlLGFBQVMsRUFBRTtBQUFFTDtBQUFGLEtBRGI7QUFFRVI7QUFGRixHQUZxRCxDQUF2RDtBQVFBLHNCQUNFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxZQUFRLEVBQUVVLE9BRlo7QUFHRSxXQUFPLEVBQUUs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QyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsWUFBTCxDQUFrQixPQUFsQixFQUEyQk4sT0FBM0IsQ0FBbEI7QUFDQSxTQUFPSSxTQUFTLENBQUNHLE1BQVYsQ0FBaUJSLE1BQU0sR0FBRyxHQUExQixDQUFQO0FBQ0QsQzs7Ozs7Ozs7OztBQ2JELGUiLCJmaWxlIjoiY29tcG9uZW50c19Qcm9kdWN0c19qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5LCB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuY29uc3QgREVMRVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gREVMRVRFX1BST0RVQ1RfTVVUQVRJT04oJGlkOiBJRCEpIHtcclxuICAgIGRlbGV0ZVByb2R1Y3QoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlKGNhY2hlLCBwYXlsb2FkKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcclxuICBjYWNoZS5ldmljdChjYWNoZS5pZGVudGlmeShwYXlsb2FkLmRhdGEuZGVsZXRlUHJvZHVjdCkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxldGVQcm9kdWN0KHsgaWQsIGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbZGVsZXRlUHJvZHVjdCwgeyBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFxyXG4gICAgREVMRVRFX1BST0RVQ1RfTVVUQVRJT04sXHJcbiAgICB7XHJcbiAgICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gICAgICB1cGRhdGUsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT9cIikpIHtcclxuICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgaXRlbVxyXG4gICAgICAgICAgZGVsZXRlUHJvZHVjdCgpLmNhdGNoKChlcnIpID0+IGFsZXJ0KGVyci5tZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBJdGVtU3R5bGVzIGZyb20gXCIuL3N0eWxlcy9JdGVtU3R5bGVzXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi9zdHlsZXMvVGl0bGVcIjtcclxuaW1wb3J0IFByaWNlVGFnIGZyb20gXCIuL3N0eWxlcy9QcmljZVRhZ1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tIFwiLi4vbGliL2Zvcm1hdE1vbmV5XCI7XHJcbmltcG9ydCBEZWxldGVQcm9kdWN0IGZyb20gXCIuL0RlbGV0ZVByb2R1Y3RcIjtcclxuXHJcbmNvbnN0IFByb2R1Y3QgPSAoeyBwcm9kdWN0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEl0ZW1TdHlsZXM+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e3Byb2R1Y3Q/LnBob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9XHJcbiAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUaXRsZT5cclxuICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9Pntwcm9kdWN0Lm5hbWV9PC9MaW5rPlxyXG4gICAgICA8L1RpdGxlPlxyXG4gICAgICA8UHJpY2VUYWc+IHtmb3JtYXRNb25leShwcm9kdWN0LnByaWNlKX08L1ByaWNlVGFnPlxyXG4gICAgICA8cD57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uTGlzdFwiPlxyXG4gICAgICAgIDxMaW5rXHJcbiAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBcIi91cGRhdGVcIixcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRWRpdFxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8RGVsZXRlUHJvZHVjdCBpZD17cHJvZHVjdC5pZH0+RGVsZXRlPC9EZWxldGVQcm9kdWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvSXRlbVN0eWxlcz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuIiwiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4vUHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBwZXJQYWdlIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFMTF9QUk9EVUNUU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBBTExfUFJPRFVDVFNfUVVFUlkoJHNraXA6IEludCA9IDAsICRmaXJzdDogSW50KSB7XHJcbiAgICBhbGxQcm9kdWN0cyhmaXJzdDogJGZpcnN0LCBza2lwOiAkc2tpcCkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJvZHVjdHNMaXN0U3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBncmlkLWdhcDogNjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFByb2R1Y3RzID0gKHsgcGFnZSB9KSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX1BST0RVQ1RTX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgc2tpcDogcGFnZSAqIHBlclBhZ2UgLSBwZXJQYWdlLFxyXG4gICAgICBmaXJzdDogcGVyUGFnZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhkYXRhLCBlcnJvciwgbG9hZGluZyk7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFByb2R1Y3RzTGlzdFN0eWxlcz5cclxuICAgICAgICB7ZGF0YS5hbGxQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8UHJvZHVjdCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L1Byb2R1Y3RzTGlzdFN0eWxlcz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0cztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgSXRlbVN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1vZmZXaGl0ZSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJzKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gIH1cbiAgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZzogMCAzcmVtO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIC5idXR0b25MaXN0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICAgIGdyaWQtZ2FwOiAxcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHRHcmF5KTtcbiAgICAmID4gKiB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtU3R5bGVzO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFByaWNlVGFnID0gc3R5bGVkLnNwYW5gXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTNweDtcbiAgcmlnaHQ6IC0zcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQcmljZVRhZztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiBza2V3KC01ZGVnKSByb3RhdGUoLTFkZWcpO1xuICBtYXJnaW4tdG9wOiAtM3JlbTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiIsIi8vIFRoaXMgaXMgY2xpZW50IHNpZGUgY29uZmlnIG9ubHkgLSBkb24ndCBwdXQgYW55dGhpbmcgaW4gaGVyZSB0aGF0IHNob3VsZG4ndCBiZSBwdWJsaWMhXG5leHBvcnQgY29uc3QgZW5kcG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmFwaHFsYDtcbmV4cG9ydCBjb25zdCBwcm9kRW5kcG9pbnQgPSBgZmlsbCBtZSBpbiB3aGVuIHdlIGRlcGxveWA7XG5leHBvcnQgY29uc3QgcGVyUGFnZSA9IDI7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRNb25leShhbW91bnQgPSAwKSB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXHJcbiAgICBjdXJyZW5jeTogXCJVU0RcIixcclxuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICB9O1xyXG4gIC8vIGNoZWNrIGlmIGNsZWFuIGRvbGxhciBhbW91bnRcclxuICBpZiAoYW1vdW50ICUgMTAwID09PSAwKSB7XHJcbiAgICBvcHRpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA9IDA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtYXR0ZXIgPSBJbnRsLk51bWJlckZvcm1hdChcImVuLVVTXCIsIG9wdGlvbnMpO1xyXG4gIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGFtb3VudCAvIDEwMCk7XHJcbn1cclxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==