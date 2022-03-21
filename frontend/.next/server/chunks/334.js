exports.id = 334;
exports.ids = [334];
exports.modules = {

/***/ 8334:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": function() { return /* binding */ ALL_PRODUCTS_QUERY; },
  "Z": function() { return /* binding */ components_Products; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__(9875);
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/styles/ItemStyles.js

const ItemStyles = external_styled_components_default().div.withConfig({
  displayName: "ItemStyles",
  componentId: "sc-16pk14u-0"
})(["background:white;border:1px solid var(--offWhite);box-shadow:var(--bs);position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid var(--lightGray);grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:var(--lightGray);& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"]);
/* harmony default export */ var styles_ItemStyles = (ItemStyles);
;// CONCATENATED MODULE: ./components/styles/Title.js

const Title = external_styled_components_default().h3.withConfig({
  displayName: "Title",
  componentId: "sc-16nq74k-0"
})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:var(--red);display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"]);
/* harmony default export */ var styles_Title = (Title);
;// CONCATENATED MODULE: ./components/styles/PriceTag.js

const PriceTag = external_styled_components_default().span.withConfig({
  displayName: "PriceTag",
  componentId: "sc-nwbk6t-0"
})(["background:var(--red);transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"]);
/* harmony default export */ var styles_PriceTag = (PriceTag);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__(4849);
;// CONCATENATED MODULE: ./components/DeleteProduct.js



const DELETE_PRODUCT_MUTATION = (external_graphql_tag_default())`
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
  }] = (0,client_.useMutation)(DELETE_PRODUCT_MUTATION, {
    variables: {
      id
    },
    update
  });
  return /*#__PURE__*/jsx_runtime_.jsx("button", {
    type: "button",
    disabled: loading,
    onClick: () => {
      if (confirm("Are you sure you want to delete this item?")) {
        // delete the item
        deleteProduct().catch(err => alert(err.message));
      }
    },
    children: children
  });
}
// EXTERNAL MODULE: ./lib/cartState.js
var cartState = __webpack_require__(2773);
// EXTERNAL MODULE: ./components/User.js
var User = __webpack_require__(4653);
;// CONCATENATED MODULE: ./components/AddToCart.js




 //const { openCart } = useCart();

const ADD_TO_CART_MUTATION = (external_graphql_tag_default())`
  mutation ADD_TO_CART_MUTATION($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`;
function AddToCart({
  id
}) {
  const [addToCart, {
    loading
  }] = (0,client_.useMutation)(ADD_TO_CART_MUTATION, {
    variables: {
      id
    },
    refetchQueries: [{
      query: User/* CURRENT_USER_QUERY */.z
    }]
  });

  const buttonClick = () => {
    addToCart(); //openCart();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
    type: "button",
    disabled: loading,
    onClick: buttonClick,
    children: ["Add", loading && "ing", " To Cart"]
  });
}
;// CONCATENATED MODULE: ./components/Product.js










const Product = ({
  product
}) => {
  var _product$photo, _product$photo$image;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_ItemStyles, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,
      alt: product.name
    }), /*#__PURE__*/jsx_runtime_.jsx(styles_Title, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/product/${product.id}`,
        children: product.name
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_PriceTag, {
      children: [" ", (0,formatMoney/* default */.Z)(product.price)]
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: product.description
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "buttonList",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: {
          pathname: "/update",
          query: {
            id: product.id
          }
        },
        children: "Edit"
      }), /*#__PURE__*/jsx_runtime_.jsx(AddToCart, {
        id: product.id
      }), /*#__PURE__*/jsx_runtime_.jsx(DeleteProduct, {
        id: product.id,
        children: "Delete"
      })]
    })]
  });
};

/* harmony default export */ var components_Product = (Product);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(4985);
;// CONCATENATED MODULE: ./components/Products.js







const ALL_PRODUCTS_QUERY = (external_graphql_tag_default())`
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
const ProductsListStyles = external_styled_components_default().div.withConfig({
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
  } = (0,client_.useQuery)(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * config/* perPage */.ji - config/* perPage */.ji,
      first: config/* perPage */.ji
    }
  }); //   console.log(data, error, loading);

  if (loading) return /*#__PURE__*/jsx_runtime_.jsx("p", {
    children: "Loading..."
  });
  if (error) return /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
    children: ["Error: ", error.message]
  });
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(ProductsListStyles, {
      children: data.allProducts.map(product => {
        return /*#__PURE__*/jsx_runtime_.jsx(components_Product, {
          product: product
        }, product.id);
      })
    })
  });
};

/* harmony default export */ var components_Products = (Products);


/***/ })

};
;