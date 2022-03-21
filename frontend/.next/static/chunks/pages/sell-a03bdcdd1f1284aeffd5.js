(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{5061:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893),i=t(4653),a=t(433);function o(e){var n=e.children;return(0,i.a)()?n:(0,r.jsx)(a.Z,{})}},8334:function(e,n,t){"use strict";t.d(n,{$:function(){return O},Z:function(){return _}});var r=t(5893),i=t(7261),a=t(7450),o=t(3633),s=t(9163),d=s.ZP.div.withConfig({displayName:"ItemStyles",componentId:"sc-16pk14u-0"})(["background:white;border:1px solid var(--offWhite);box-shadow:var(--bs);position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid var(--lightGray);grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:var(--lightGray);& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"]),c=s.ZP.h3.withConfig({displayName:"Title",componentId:"sc-16nq74k-0"})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:var(--red);display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"]),u=s.ZP.span.withConfig({displayName:"PriceTag",componentId:"sc-nwbk6t-0"})(["background:var(--red);transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"]),l=t(1664),p=t(4849),h=t(9227),m=t(5709);function f(){var e=(0,i.Z)(["\n  mutation DELETE_PRODUCT_MUTATION($id: ID!) {\n    deleteProduct(id: $id) {\n      id\n      name\n    }\n  }\n"]);return f=function(){return e},e}var g=(0,a.ZP)(f());function b(e,n){e.evict(e.identify(n.data.deleteProduct))}function v(e){var n=e.id,t=e.children,i=(0,m.D)(g,{variables:{id:n},update:b}),a=(0,h.Z)(i,2),o=a[0],s=a[1],d=s.loading;s.error;return(0,r.jsx)("button",{type:"button",disabled:d,onClick:function(){confirm("Are you sure you want to delete this item?")&&o().catch((function(e){return alert(e.message)}))},children:t})}t(2773);var x=t(4653);function j(){var e=(0,i.Z)(["\n  mutation ADD_TO_CART_MUTATION($id: ID!) {\n    addToCart(productId: $id) {\n      id\n    }\n  }\n"]);return j=function(){return e},e}var w=(0,a.ZP)(j());function y(e){var n=e.id,t=(0,m.D)(w,{variables:{id:n},refetchQueries:[{query:x.z}]}),i=(0,h.Z)(t,2),a=i[0],o=i[1].loading;return(0,r.jsxs)("button",{type:"button",disabled:o,onClick:function(){a()},children:["Add",o&&"ing"," To Cart"]})}var P=function(e){var n,t,i=e.product;return(0,r.jsxs)(d,{children:[(0,r.jsx)("img",{src:null===i||void 0===i||null===(n=i.photo)||void 0===n||null===(t=n.image)||void 0===t?void 0:t.publicUrlTransformed,alt:i.name}),(0,r.jsx)(c,{children:(0,r.jsx)(l.default,{href:"/product/".concat(i.id),children:i.name})}),(0,r.jsxs)(u,{children:[" ",(0,p.Z)(i.price)]}),(0,r.jsx)("p",{children:i.description}),(0,r.jsxs)("div",{className:"buttonList",children:[(0,r.jsx)(l.default,{href:{pathname:"/update",query:{id:i.id}},children:"Edit"}),(0,r.jsx)(y,{id:i.id}),(0,r.jsx)(v,{id:i.id,children:"Delete"})]})]})},Z=t(4985);function k(){var e=(0,i.Z)(["\n  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {\n    allProducts(first: $first, skip: $skip) {\n      id\n      name\n      price\n      description\n      photo {\n        id\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n"]);return k=function(){return e},e}var O=(0,a.ZP)(k()),C=s.ZP.div.withConfig({displayName:"Products__ProductsListStyles",componentId:"sc-1uv5x8m-0"})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;"]),_=function(e){var n=e.page,t=(0,o.a)(O,{variables:{skip:n*Z.ji-Z.ji,first:Z.ji}}),i=t.data,a=t.error;return t.loading?(0,r.jsx)("p",{children:"Loading..."}):a?(0,r.jsxs)("p",{children:["Error: ",a.message]}):(0,r.jsx)("div",{children:(0,r.jsx)(C,{children:i.allProducts.map((function(e){return(0,r.jsx)(P,{product:e},e.id)}))})})}},433:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(809),i=t.n(r),a=t(5893),o=t(2447),s=t(9227),d=t(7261),c=t(7450),u=t(5709),l=t(3804),p=t(8363),h=t(4653),m=t(7847);function f(){var e=(0,d.Z)(["\n  mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      ... on UserAuthenticationWithPasswordSuccess {\n        item {\n          id\n          email\n          name\n        }\n      }\n      ... on UserAuthenticationWithPasswordFailure {\n        code\n        message\n      }\n    }\n  }\n"]);return f=function(){return e},e}var g=(0,c.ZP)(f());function b(){var e=(0,p.Z)({email:"",password:""}),n=e.inputs,t=e.handleChange,r=e.resetForm,d=(0,u.D)(g,{variables:n,refetchQueries:[{query:h.z}]}),c=(0,s.Z)(d,2),f=c[0],b=c[1],v=b.data;b.loading;function x(){return(x=(0,o.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,f();case 3:r();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j="UserAuthenticationWithPasswordFailure"===(null===v||void 0===v?void 0:v.authenticateUserWithPassword.__typename)?null===v||void 0===v?void 0:v.authenticateUserWithPassword:void 0;return(0,a.jsxs)(l.Z,{method:"POST",onSubmit:function(e){return x.apply(this,arguments)},children:[(0,a.jsx)("h2",{children:"Sign Into Your Account"}),(0,a.jsx)(m.Z,{error:j}),(0,a.jsxs)("fieldset",{children:[(0,a.jsxs)("label",{htmlFor:"email",children:["Email",(0,a.jsx)("input",{type:"email",name:"email",placeholder:"Your Email Address",autoComplete:"email",value:n.email,onChange:t})]}),(0,a.jsxs)("label",{htmlFor:"password",children:["Password",(0,a.jsx)("input",{type:"password",name:"password",placeholder:"Password",autoComplete:"password",value:n.password,onChange:t})]}),(0,a.jsx)("button",{type:"submit",children:"Sign In!"})]})]})}},3804:function(e,n,t){"use strict";var r=t(9163),i=(0,r.F4)(["from{background-position:0 0;}to{background-position:100% 100%;}"]),a=r.ZP.form.withConfig({displayName:"Form",componentId:"sc-1xszr8q-0"})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:var(--red);}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:"," 0.5s linear infinite;}}"],i);n.Z=a},8363:function(e,n,t){"use strict";var r=t(6265),i=t(9227),a=t(7294);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,a.useState)(e),t=n[0],o=n[1],d=Object.values(e).join("");function c(e){var n=e.target,a=n.value,d=n.name,c=n.type;("number"===c&&(a=parseInt(a)),"file"===c)&&(a=(0,i.Z)(e.target.files,1)[0]);o(s(s({},t),{},(0,r.Z)({},d,a)))}function u(){o(e)}function l(){var e=Object.fromEntries(Object.entries(t).map((function(e){var n=(0,i.Z)(e,2),t=n[0];n[1];return[t,""]})));o(e)}return(0,a.useEffect)((function(){o(e)}),[d]),{inputs:t,handleChange:c,resetForm:u,clearForm:l}}},8380:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var r=t(5893),i=(t(7294),t(809)),a=t.n(i),o=t(2447),s=t(9227),d=t(7261),c=t(8363),u=t(3804),l=t(7450),p=t(5709),h=t(7847),m=t(8334),f=t(1163);function g(){var e=(0,d.Z)(['\n  mutation CREATE_PRODUCT_MUTATION(\n    #which variables are getting passed in? and what types are they?\n    $name: String!\n    $description: String!\n    $price: Int!\n    $image: Upload\n  ) {\n    createProduct(\n      data: {\n        name: $name\n        description: $description\n        price: $price\n        status: "AVAILABLE"\n        #nested creation (specific to keystone.js)\n        photo: { create: { image: $image, altText: $name } }\n      }\n    ) {\n      id\n      price\n      description\n      name\n    }\n  }\n']);return g=function(){return e},e}var b=(0,l.ZP)(g());var v=function(){var e=(0,c.Z)({name:"",price:0,description:"",image:""}),n=e.inputs,t=e.handleChange,i=e.clearForm,d=(e.resetForm,(0,p.D)(b,{variables:n,refetchQueries:[{query:m.$}]})),l=(0,s.Z)(d,2),g=l[0],v=l[1],x=v.loading,j=v.error;return v.data,(0,r.jsxs)(u.Z,{onSubmit:function(){var e=(0,o.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,g();case 3:t=e.sent,i(),f.default.push({pathname:"/product/".concat(t.data.createProduct.id)});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:[(0,r.jsx)(h.Z,{error:j}),(0,r.jsxs)("fieldset",{disabled:x,"aria-busy":x,children:[(0,r.jsxs)("label",{htmlFor:"image",children:["Image",(0,r.jsx)("input",{type:"file",required:!0,id:"image",name:"image",onChange:t})]}),(0,r.jsxs)("label",{htmlFor:"name",children:["Name",(0,r.jsx)("input",{type:"text",id:"name",name:"name",placeholder:"Name",value:n.name,onChange:t})]}),(0,r.jsxs)("label",{htmlFor:"price",children:["Price",(0,r.jsx)("input",{type:"number",id:"price",name:"price",placeholder:"price",value:n.price,onChange:t})]}),(0,r.jsxs)("label",{htmlFor:"description",children:["Description",(0,r.jsx)("textarea",{id:"description",name:"description",placeholder:"description",value:n.description,onChange:t})]}),(0,r.jsx)("button",{type:"submit",children:"+ Add Product"})]})]})},x=(t(2010),t(5061)),j=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(x.Z,{children:(0,r.jsx)(v,{})})})}},2368:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sell",function(){return t(8380)}])}},function(e){e.O(0,[774,888,179],(function(){return n=2368,e(e.s=n);var n}));var n=e.O();_N_E=n}]);