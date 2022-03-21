(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{5061:function(e,r,n){"use strict";n.d(r,{Z:function(){return o}});var t=n(5893),i=n(4653),a=n(433);function o(e){var r=e.children;return(0,i.a)()?r:(0,t.jsx)(a.Z,{})}},433:function(e,r,n){"use strict";n.d(r,{Z:function(){return b}});var t=n(809),i=n.n(t),a=n(5893),o=n(2447),s=n(9227),d=n(7261),c=n(7450),l=n(5709),u=n(3804),p=n(8363),h=n(4653),m=n(7847);function f(){var e=(0,d.Z)(["\n  mutation SIGNIN_MUTATION($email: String!, $password: String!) {\n    authenticateUserWithPassword(email: $email, password: $password) {\n      ... on UserAuthenticationWithPasswordSuccess {\n        item {\n          id\n          email\n          name\n        }\n      }\n      ... on UserAuthenticationWithPasswordFailure {\n        code\n        message\n      }\n    }\n  }\n"]);return f=function(){return e},e}var g=(0,c.ZP)(f());function b(){var e=(0,p.Z)({email:"",password:""}),r=e.inputs,n=e.handleChange,t=e.resetForm,d=(0,l.D)(g,{variables:r,refetchQueries:[{query:h.z}]}),c=(0,s.Z)(d,2),f=c[0],b=c[1],x=b.data;b.loading;function j(){return(j=(0,o.Z)(i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,f();case 3:t();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v="UserAuthenticationWithPasswordFailure"===(null===x||void 0===x?void 0:x.authenticateUserWithPassword.__typename)?null===x||void 0===x?void 0:x.authenticateUserWithPassword:void 0;return(0,a.jsxs)(u.Z,{method:"POST",onSubmit:function(e){return j.apply(this,arguments)},children:[(0,a.jsx)("h2",{children:"Sign Into Your Account"}),(0,a.jsx)(m.Z,{error:v}),(0,a.jsxs)("fieldset",{children:[(0,a.jsxs)("label",{htmlFor:"email",children:["Email",(0,a.jsx)("input",{type:"email",name:"email",placeholder:"Your Email Address",autoComplete:"email",value:r.email,onChange:n})]}),(0,a.jsxs)("label",{htmlFor:"password",children:["Password",(0,a.jsx)("input",{type:"password",name:"password",placeholder:"Password",autoComplete:"password",value:r.password,onChange:n})]}),(0,a.jsx)("button",{type:"submit",children:"Sign In!"})]})]})}},3804:function(e,r,n){"use strict";var t=n(9163),i=(0,t.F4)(["from{background-position:0 0;}to{background-position:100% 100%;}"]),a=t.ZP.form.withConfig({displayName:"Form",componentId:"sc-1xszr8q-0"})(["box-shadow:0 0 5px 3px rgba(0,0,0,0.05);background:rgba(0,0,0,0.02);border:5px solid white;padding:20px;font-size:1.5rem;line-height:1.5;font-weight:600;label{display:block;margin-bottom:1rem;}input,textarea,select{width:100%;padding:0.5rem;font-size:1rem;border:1px solid black;&:focus{outline:0;border-color:var(--red);}}button,input[type='submit']{width:auto;background:red;color:white;border:0;font-size:2rem;font-weight:600;padding:0.5rem 1.2rem;}fieldset{border:0;padding:0;&[disabled]{opacity:0.5;}&::before{height:10px;content:'';display:block;background-image:linear-gradient( to right,#ff3019 0%,#e2b04a 50%,#ff3019 100% );}&[aria-busy='true']::before{background-size:50% auto;animation:"," 0.5s linear infinite;}}"],i);r.Z=a},8363:function(e,r,n){"use strict";var t=n(6265),i=n(9227),a=n(7294);function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}r.Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=(0,a.useState)(e),n=r[0],o=r[1],d=Object.values(e).join("");function c(e){var r=e.target,a=r.value,d=r.name,c=r.type;("number"===c&&(a=parseInt(a)),"file"===c)&&(a=(0,i.Z)(e.target.files,1)[0]);o(s(s({},n),{},(0,t.Z)({},d,a)))}function l(){o(e)}function u(){var e=Object.fromEntries(Object.entries(n).map((function(e){var r=(0,i.Z)(e,2),n=r[0];r[1];return[n,""]})));o(e)}return(0,a.useEffect)((function(){o(e)}),[d]),{inputs:n,handleChange:c,resetForm:l,clearForm:u}}},7095:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return m}});var t=n(5893),i=n(7261),a=n(3633),o=n(7450),s=n(7847),d=n(9163).ZP.div.withConfig({displayName:"OrderStyles",componentId:"sc-4oqalm-0"})(["max-width:1000px;margin:0 auto;border:1px solid var(--offWhite);box-shadow:var(--bs);padding:2rem;border-top:10px solid red;& > p{display:grid;grid-template-columns:1fr 5fr;margin:0;border-bottom:1px solid var(--offWhite);span{padding:1rem;&:first-child{font-weight:900;text-align:right;}}}.order-item{border-bottom:1px solid var(--offWhite);display:grid;grid-template-columns:300px 1fr;align-items:center;grid-gap:2rem;margin:2rem 0;padding-bottom:2rem;img{width:100%;height:100%;object-fit:cover;}}"]),c=n(9008),l=n(4849),u=n(5061);function p(){var e=(0,i.Z)(["\n  query SINGLE_ORDER_QUERY($id: ID!) {\n    Order(where: { id: $id }) {\n      id\n      charge\n      total\n      user {\n        id\n      }\n      items {\n        id\n        name\n        quantity\n        price\n        description\n        photo {\n          image {\n            publicUrlTransformed\n          }\n        }\n      }\n    }\n  }\n"]);return p=function(){return e},e}var h=(0,o.ZP)(p());function m(e){var r=e.query,n=(0,a.a)(h,{variables:{id:r.id}}),i=n.data,o=n.error;if(n.loading)return(0,t.jsx)("p",{children:"Loading..."});if(o)return(0,t.jsx)(s.Z,{error:o});var p=i.Order;return(0,t.jsx)(u.Z,{children:(0,t.jsxs)(d,{children:[(0,t.jsx)(c.default,{children:(0,t.jsxs)("title",{children:["Sick Fits - ",p.id]})}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{children:"Order ID:"}),(0,t.jsx)("span",{children:p.id})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{children:"Charge:"}),(0,t.jsx)("span",{children:p.charge})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{children:"Total:"}),(0,t.jsx)("span",{children:(0,l.Z)(p.total)})]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("span",{children:"Item Count:"}),(0,t.jsx)("span",{children:p.items.length})]}),(0,t.jsx)("div",{children:p.items.map((function(e){return(0,t.jsxs)("div",{className:"order-item",children:[(0,t.jsx)("img",{src:e.photo.image.publicUrlTransformed,alt:e.title}),(0,t.jsxs)("div",{className:"item-details",children:[(0,t.jsx)("h2",{children:e.name}),(0,t.jsxs)("p",{children:["Qty: ",e.quantity]}),(0,t.jsxs)("p",{children:["Each: ",(0,l.Z)(e.price)]}),(0,t.jsxs)("p",{children:["Sub Total: ",(0,l.Z)(e.price*e.quantity)]}),(0,t.jsx)("p",{children:e.description})]})]},e.id)}))})]})})}},9869:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order/[id]",function(){return n(7095)}])}},function(e){e.O(0,[774,888,179],(function(){return r=9869,e(e.s=r);var r}));var r=e.O();_N_E=r}]);