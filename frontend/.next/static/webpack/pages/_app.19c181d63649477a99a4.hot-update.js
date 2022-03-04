self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ paginationField; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
function paginationField() {
  return {
    keyArgs: false,
    //tells apollo that we will take care of everything
    read: function read() {},
    // when apollo tries to query for all products:
    // first thing: read function for those items
    // two things possible: return items bc they are in cache OR return false from here (makes a network request)
    merge: function merge() {} // runs when apollo client comes back from the network with our product

  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsIm1lcmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLGVBQVQsR0FBMkI7QUFDeEMsU0FBTztBQUNMQyxXQUFPLEVBQUUsS0FESjtBQUNXO0FBQ2hCQyxRQUZLLGtCQUVFLENBQUUsQ0FGSjtBQUdMO0FBQ0E7QUFDQTtBQUNBQyxTQU5LLG1CQU1HLENBQUUsQ0FOTCxDQU9MOztBQVBLLEdBQVA7QUFTRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjE5YzE4MWQ2MzY0OTQ3N2E5OWE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdpbmF0aW9uRmllbGQoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGtleUFyZ3M6IGZhbHNlLCAvL3RlbGxzIGFwb2xsbyB0aGF0IHdlIHdpbGwgdGFrZSBjYXJlIG9mIGV2ZXJ5dGhpbmdcclxuICAgIHJlYWQoKSB7fSxcclxuICAgIC8vIHdoZW4gYXBvbGxvIHRyaWVzIHRvIHF1ZXJ5IGZvciBhbGwgcHJvZHVjdHM6XHJcbiAgICAvLyBmaXJzdCB0aGluZzogcmVhZCBmdW5jdGlvbiBmb3IgdGhvc2UgaXRlbXNcclxuICAgIC8vIHR3byB0aGluZ3MgcG9zc2libGU6IHJldHVybiBpdGVtcyBiYyB0aGV5IGFyZSBpbiBjYWNoZSBPUiByZXR1cm4gZmFsc2UgZnJvbSBoZXJlIChtYWtlcyBhIG5ldHdvcmsgcmVxdWVzdClcclxuICAgIG1lcmdlKCkge30sXHJcbiAgICAvLyBydW5zIHdoZW4gYXBvbGxvIGNsaWVudCBjb21lcyBiYWNrIGZyb20gdGhlIG5ldHdvcmsgd2l0aCBvdXIgcHJvZHVjdFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==