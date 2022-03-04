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
      }); // filters if item is undefined
      // check if we do not have existing items
      // if there are items AND there are not enough items requested per page (default 2) AND we are on last page, then send it

      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        // we do not have any items, go to network
        return false;
      } // if there are items, return them from the cache, do not go to network


      if (items.length) {
        console.log("There are ".concat(items.length, " items in the cache! Gonna send them to apollo."));
      }

      return items;
    },
    merge: function merge(existing, incoming, _ref2) {
      var args = _ref2.args;
      // runs when apollo client comes back from the network with our product
      // when apollo tries to query for all products:
      // first thing: read function for those items
      // two things possible: return items bc they are in cache OR return false from here (makes a network request)
      console.log("Merging items from the network ".concat(incoming.length));
      var skip = args.skip,
          first = args.first;
      var merged = existing ? existing.slice(0) : [];

      for (var i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

      console.log(merged); // return merged items from cache

      return merged;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsImNhY2hlIiwic2tpcCIsImZpcnN0IiwiZGF0YSIsInJlYWRRdWVyeSIsInF1ZXJ5IiwiUEFHSU5BVElPTl9RVUVSWSIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2UiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwiaXRlbXMiLCJzbGljZSIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwibWVyZ2UiLCJpbmNvbWluZyIsIm1lcmdlZCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsZUFBVCxHQUEyQjtBQUN4QyxTQUFPO0FBQ0xDLFdBQU8sRUFBRSxLQURKO0FBQ1c7QUFDaEJDLFFBRkssa0JBRWdDO0FBQUE7O0FBQUEsVUFBaENDLFFBQWdDLHVFQUFyQixFQUFxQjs7QUFBQTtBQUFBLFVBQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLFVBQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDbkM7QUFEbUMsVUFFM0JDLElBRjJCLEdBRVhGLElBRlcsQ0FFM0JFLElBRjJCO0FBQUEsVUFFckJDLEtBRnFCLEdBRVhILElBRlcsQ0FFckJHLEtBRnFCLEVBR25DOztBQUNBLFVBQU1DLElBQUksR0FBR0gsS0FBSyxDQUFDSSxTQUFOLENBQWdCO0FBQUVDLGFBQUssRUFBRUMsb0VBQWdCQTtBQUF6QixPQUFoQixDQUFiO0FBQ0EsVUFBTUMsS0FBSyxHQUFHSixJQUFILGFBQUdBLElBQUgsZ0RBQUdBLElBQUksQ0FBRUssZ0JBQVQsMERBQUcsc0JBQXdCRCxLQUF0QztBQUNBLFVBQU1FLElBQUksR0FBR1IsSUFBSSxHQUFHQyxLQUFQLEdBQWUsQ0FBNUI7QUFDQSxVQUFNUSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxLQUFLLEdBQUdMLEtBQWxCLENBQWQsQ0FQbUMsQ0FTbkM7O0FBQ0EsVUFBTVcsS0FBSyxHQUFHZixRQUFRLENBQUNnQixLQUFULENBQWViLElBQWYsRUFBcUJBLElBQUksR0FBR0MsS0FBNUIsRUFBbUNhLE1BQW5DLENBQTBDLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFQO0FBQUEsT0FBMUMsQ0FBZCxDQVZtQyxDQVVnQztBQUVuRTtBQUVBOztBQUNBLFVBQUlILEtBQUssQ0FBQ0ksTUFBTixJQUFnQkosS0FBSyxDQUFDSSxNQUFOLEtBQWlCZixLQUFqQyxJQUEwQ08sSUFBSSxLQUFLQyxLQUF2RCxFQUE4RDtBQUM1RCxlQUFPRyxLQUFQO0FBQ0Q7O0FBQ0QsVUFBSUEsS0FBSyxDQUFDSSxNQUFOLEtBQWlCZixLQUFyQixFQUE0QjtBQUMxQjtBQUNBLGVBQU8sS0FBUDtBQUNELE9BckJrQyxDQXVCbkM7OztBQUNBLFVBQUlXLEtBQUssQ0FBQ0ksTUFBVixFQUFrQjtBQUNoQkMsZUFBTyxDQUFDQyxHQUFSLHFCQUNlTixLQUFLLENBQUNJLE1BRHJCO0FBR0Q7O0FBQ0QsYUFBT0osS0FBUDtBQUNELEtBaENJO0FBa0NMTyxTQWxDSyxpQkFrQ0N0QixRQWxDRCxFQWtDV3VCLFFBbENYLFNBa0MrQjtBQUFBLFVBQVJ0QixJQUFRLFNBQVJBLElBQVE7QUFDbEM7QUFFQTtBQUNBO0FBQ0E7QUFDQW1CLGFBQU8sQ0FBQ0MsR0FBUiwwQ0FBOENFLFFBQVEsQ0FBQ0osTUFBdkQ7QUFOa0MsVUFPMUJoQixJQVAwQixHQU9WRixJQVBVLENBTzFCRSxJQVAwQjtBQUFBLFVBT3BCQyxLQVBvQixHQU9WSCxJQVBVLENBT3BCRyxLQVBvQjtBQVFsQyxVQUFNb0IsTUFBTSxHQUFHeEIsUUFBUSxHQUFHQSxRQUFRLENBQUNnQixLQUFULENBQWUsQ0FBZixDQUFILEdBQXVCLEVBQTlDOztBQUNBLFdBQUssSUFBSVMsQ0FBQyxHQUFHdEIsSUFBYixFQUFtQnNCLENBQUMsR0FBR3RCLElBQUksR0FBR29CLFFBQVEsQ0FBQ0osTUFBdkMsRUFBK0MsRUFBRU0sQ0FBakQsRUFBb0Q7QUFDbERELGNBQU0sQ0FBQ0MsQ0FBRCxDQUFOLEdBQVlGLFFBQVEsQ0FBQ0UsQ0FBQyxHQUFHdEIsSUFBTCxDQUFwQjtBQUNEOztBQUNEaUIsYUFBTyxDQUFDQyxHQUFSLENBQVlHLE1BQVosRUFaa0MsQ0FhbEM7O0FBQ0EsYUFBT0EsTUFBUDtBQUNEO0FBakRJLEdBQVA7QUFtREQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xMDI1ZWIzMzg1ZTQ4YThhZGZmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUEFHSU5BVElPTl9RVUVSWSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2luYXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2luYXRpb25GaWVsZCgpIHtcclxuICByZXR1cm4ge1xyXG4gICAga2V5QXJnczogZmFsc2UsIC8vdGVsbHMgYXBvbGxvIHRoYXQgd2Ugd2lsbCB0YWtlIGNhcmUgb2YgZXZlcnl0aGluZ1xyXG4gICAgcmVhZChleGlzdGluZyA9IFtdLCB7IGFyZ3MsIGNhY2hlIH0pIHtcclxuICAgICAgLy8gYXJnczogZmlyc3QgJiBza2lwIHZhbHVlcywgY2FjaGUgaXMgYXBvbGxvIGNhY2hlXHJcbiAgICAgIGNvbnN0IHsgc2tpcCwgZmlyc3QgfSA9IGFyZ3M7XHJcbiAgICAgIC8vIHJlYWQgbnVtYmVyIG9mIGl0ZW1zIG9uIHRoZSBwYWdlIGZyb20gY2FjaGVcclxuICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlYWRRdWVyeSh7IHF1ZXJ5OiBQQUdJTkFUSU9OX1FVRVJZIH0pO1xyXG4gICAgICBjb25zdCBjb3VudCA9IGRhdGE/Ll9hbGxQcm9kdWN0c01ldGE/LmNvdW50O1xyXG4gICAgICBjb25zdCBwYWdlID0gc2tpcCAvIGZpcnN0ICsgMTtcclxuICAgICAgY29uc3QgcGFnZXMgPSBNYXRoLmNlaWwoY291bnQgLyBmaXJzdCk7XHJcblxyXG4gICAgICAvLyBjaGVjayBpZiB3ZSBoYXZlIGV4aXN0aW5nIGl0ZW1zXHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gZXhpc3Rpbmcuc2xpY2Uoc2tpcCwgc2tpcCArIGZpcnN0KS5maWx0ZXIoKHgpID0+IHgpOyAvLyBmaWx0ZXJzIGlmIGl0ZW0gaXMgdW5kZWZpbmVkXHJcblxyXG4gICAgICAvLyBjaGVjayBpZiB3ZSBkbyBub3QgaGF2ZSBleGlzdGluZyBpdGVtc1xyXG5cclxuICAgICAgLy8gaWYgdGhlcmUgYXJlIGl0ZW1zIEFORCB0aGVyZSBhcmUgbm90IGVub3VnaCBpdGVtcyByZXF1ZXN0ZWQgcGVyIHBhZ2UgKGRlZmF1bHQgMikgQU5EIHdlIGFyZSBvbiBsYXN0IHBhZ2UsIHRoZW4gc2VuZCBpdFxyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoICYmIGl0ZW1zLmxlbmd0aCAhPT0gZmlyc3QgJiYgcGFnZSA9PT0gcGFnZXMpIHtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCAhPT0gZmlyc3QpIHtcclxuICAgICAgICAvLyB3ZSBkbyBub3QgaGF2ZSBhbnkgaXRlbXMsIGdvIHRvIG5ldHdvcmtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGlmIHRoZXJlIGFyZSBpdGVtcywgcmV0dXJuIHRoZW0gZnJvbSB0aGUgY2FjaGUsIGRvIG5vdCBnbyB0byBuZXR3b3JrXHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIGBUaGVyZSBhcmUgJHtpdGVtcy5sZW5ndGh9IGl0ZW1zIGluIHRoZSBjYWNoZSEgR29ubmEgc2VuZCB0aGVtIHRvIGFwb2xsby5gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9LFxyXG5cclxuICAgIG1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZywgeyBhcmdzIH0pIHtcclxuICAgICAgLy8gcnVucyB3aGVuIGFwb2xsbyBjbGllbnQgY29tZXMgYmFjayBmcm9tIHRoZSBuZXR3b3JrIHdpdGggb3VyIHByb2R1Y3RcclxuXHJcbiAgICAgIC8vIHdoZW4gYXBvbGxvIHRyaWVzIHRvIHF1ZXJ5IGZvciBhbGwgcHJvZHVjdHM6XHJcbiAgICAgIC8vIGZpcnN0IHRoaW5nOiByZWFkIGZ1bmN0aW9uIGZvciB0aG9zZSBpdGVtc1xyXG4gICAgICAvLyB0d28gdGhpbmdzIHBvc3NpYmxlOiByZXR1cm4gaXRlbXMgYmMgdGhleSBhcmUgaW4gY2FjaGUgT1IgcmV0dXJuIGZhbHNlIGZyb20gaGVyZSAobWFrZXMgYSBuZXR3b3JrIHJlcXVlc3QpXHJcbiAgICAgIGNvbnNvbGUubG9nKGBNZXJnaW5nIGl0ZW1zIGZyb20gdGhlIG5ldHdvcmsgJHtpbmNvbWluZy5sZW5ndGh9YCk7XHJcbiAgICAgIGNvbnN0IHsgc2tpcCwgZmlyc3QgfSA9IGFyZ3M7XHJcbiAgICAgIGNvbnN0IG1lcmdlZCA9IGV4aXN0aW5nID8gZXhpc3Rpbmcuc2xpY2UoMCkgOiBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IHNraXA7IGkgPCBza2lwICsgaW5jb21pbmcubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBtZXJnZWRbaV0gPSBpbmNvbWluZ1tpIC0gc2tpcF07XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2cobWVyZ2VkKTtcclxuICAgICAgLy8gcmV0dXJuIG1lcmdlZCBpdGVtcyBmcm9tIGNhY2hlXHJcbiAgICAgIHJldHVybiBtZXJnZWQ7XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==