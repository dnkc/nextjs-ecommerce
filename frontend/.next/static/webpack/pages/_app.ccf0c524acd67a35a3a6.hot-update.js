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
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");
/* module decorator */ module = __webpack_require__.hmd(module);

function paginationField() {
  return {
    keyArgs: false,
    //tells apollo that we will take care of everything
    read: function read() {
      var _data$_allProductsMet;

      var existing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var _ref = arguments.length > 1 ? arguments[1] : undefined,
          args = _ref.args,
          cache = _ref.cache;

      // args: first & skip values, cache is apollo cache
      var skip = args.skip,
          first = args.first; // read number of items on the page from cache

      var data = cache.readQuery({
        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__.PAGINATION_QUERY
      });
      var count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;
      var page = skip / first + 1;
      var pages = Math.ceil(count / first); // check if we have existing items

      var items = existing.slice(skip, skip + first).filter(function (x) {
        return x;
      });
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsImNhY2hlIiwic2tpcCIsImZpcnN0IiwiZGF0YSIsInJlYWRRdWVyeSIsInF1ZXJ5IiwiUEFHSU5BVElPTl9RVUVSWSIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2UiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwiaXRlbXMiLCJzbGljZSIsImZpbHRlciIsIngiLCJtZXJnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxlQUFULEdBQTJCO0FBQ3hDLFNBQU87QUFDTEMsV0FBTyxFQUFFLEtBREo7QUFDVztBQUNoQkMsUUFGSyxrQkFFZ0M7QUFBQTs7QUFBQSxVQUFoQ0MsUUFBZ0MsdUVBQXJCLEVBQXFCOztBQUFBO0FBQUEsVUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQUEsVUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUNuQztBQURtQyxVQUUzQkMsSUFGMkIsR0FFWEYsSUFGVyxDQUUzQkUsSUFGMkI7QUFBQSxVQUVyQkMsS0FGcUIsR0FFWEgsSUFGVyxDQUVyQkcsS0FGcUIsRUFHbkM7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHSCxLQUFLLENBQUNJLFNBQU4sQ0FBZ0I7QUFBRUMsYUFBSyxFQUFFQyxvRUFBZ0JBO0FBQXpCLE9BQWhCLENBQWI7QUFDQSxVQUFNQyxLQUFLLEdBQUdKLElBQUgsYUFBR0EsSUFBSCxnREFBR0EsSUFBSSxDQUFFSyxnQkFBVCwwREFBRyxzQkFBd0JELEtBQXRDO0FBQ0EsVUFBTUUsSUFBSSxHQUFHUixJQUFJLEdBQUdDLEtBQVAsR0FBZSxDQUE1QjtBQUNBLFVBQU1RLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVMLEtBQUssR0FBR0wsS0FBbEIsQ0FBZCxDQVBtQyxDQVNuQzs7QUFDQSxVQUFNVyxLQUFLLEdBQUdmLFFBQVEsQ0FBQ2dCLEtBQVQsQ0FBZWIsSUFBZixFQUFxQkEsSUFBSSxHQUFHQyxLQUE1QixFQUFtQ2EsTUFBbkMsQ0FBMEMsVUFBQ0MsQ0FBRDtBQUFBLGVBQU9BLENBQVA7QUFBQSxPQUExQyxDQUFkO0FBQ0QsS0FiSTtBQWVMO0FBQ0E7QUFDQTtBQUNBQyxTQWxCSyxtQkFrQkcsQ0FBRSxDQWxCTCxDQW1CTDs7QUFuQkssR0FBUDtBQXFCRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmNjZjBjNTI0YWNkNjdhMzVhM2E2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQQUdJTkFUSU9OX1FVRVJZIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnaW5hdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnaW5hdGlvbkZpZWxkKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBrZXlBcmdzOiBmYWxzZSwgLy90ZWxscyBhcG9sbG8gdGhhdCB3ZSB3aWxsIHRha2UgY2FyZSBvZiBldmVyeXRoaW5nXHJcbiAgICByZWFkKGV4aXN0aW5nID0gW10sIHsgYXJncywgY2FjaGUgfSkge1xyXG4gICAgICAvLyBhcmdzOiBmaXJzdCAmIHNraXAgdmFsdWVzLCBjYWNoZSBpcyBhcG9sbG8gY2FjaGVcclxuICAgICAgY29uc3QgeyBza2lwLCBmaXJzdCB9ID0gYXJncztcclxuICAgICAgLy8gcmVhZCBudW1iZXIgb2YgaXRlbXMgb24gdGhlIHBhZ2UgZnJvbSBjYWNoZVxyXG4gICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVhZFF1ZXJ5KHsgcXVlcnk6IFBBR0lOQVRJT05fUVVFUlkgfSk7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gZGF0YT8uX2FsbFByb2R1Y3RzTWV0YT8uY291bnQ7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBza2lwIC8gZmlyc3QgKyAxO1xyXG4gICAgICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbChjb3VudCAvIGZpcnN0KTtcclxuXHJcbiAgICAgIC8vIGNoZWNrIGlmIHdlIGhhdmUgZXhpc3RpbmcgaXRlbXNcclxuICAgICAgY29uc3QgaXRlbXMgPSBleGlzdGluZy5zbGljZShza2lwLCBza2lwICsgZmlyc3QpLmZpbHRlcigoeCkgPT4geCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHdoZW4gYXBvbGxvIHRyaWVzIHRvIHF1ZXJ5IGZvciBhbGwgcHJvZHVjdHM6XHJcbiAgICAvLyBmaXJzdCB0aGluZzogcmVhZCBmdW5jdGlvbiBmb3IgdGhvc2UgaXRlbXNcclxuICAgIC8vIHR3byB0aGluZ3MgcG9zc2libGU6IHJldHVybiBpdGVtcyBiYyB0aGV5IGFyZSBpbiBjYWNoZSBPUiByZXR1cm4gZmFsc2UgZnJvbSBoZXJlIChtYWtlcyBhIG5ldHdvcmsgcmVxdWVzdClcclxuICAgIG1lcmdlKCkge30sXHJcbiAgICAvLyBydW5zIHdoZW4gYXBvbGxvIGNsaWVudCBjb21lcyBiYWNrIGZyb20gdGhlIG5ldHdvcmsgd2l0aCBvdXIgcHJvZHVjdFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==