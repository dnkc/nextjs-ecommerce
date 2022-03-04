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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsImNhY2hlIiwic2tpcCIsImZpcnN0IiwiZGF0YSIsInJlYWRRdWVyeSIsInF1ZXJ5IiwiUEFHSU5BVElPTl9RVUVSWSIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2UiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwiaXRlbXMiLCJzbGljZSIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwibWVyZ2UiLCJpbmNvbWluZyIsIm1lcmdlZCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsZUFBVCxHQUEyQjtBQUN4QyxTQUFPO0FBQ0xDLFdBQU8sRUFBRSxLQURKO0FBQ1c7QUFDaEJDLFFBRkssa0JBRWdDO0FBQUE7O0FBQUEsVUFBaENDLFFBQWdDLHVFQUFyQixFQUFxQjs7QUFBQTtBQUFBLFVBQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLFVBQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDbkM7QUFEbUMsVUFFM0JDLElBRjJCLEdBRVhGLElBRlcsQ0FFM0JFLElBRjJCO0FBQUEsVUFFckJDLEtBRnFCLEdBRVhILElBRlcsQ0FFckJHLEtBRnFCLEVBR25DOztBQUNBLFVBQU1DLElBQUksR0FBR0gsS0FBSyxDQUFDSSxTQUFOLENBQWdCO0FBQUVDLGFBQUssRUFBRUMsb0VBQWdCQTtBQUF6QixPQUFoQixDQUFiO0FBQ0EsVUFBTUMsS0FBSyxHQUFHSixJQUFILGFBQUdBLElBQUgsZ0RBQUdBLElBQUksQ0FBRUssZ0JBQVQsMERBQUcsc0JBQXdCRCxLQUF0QztBQUNBLFVBQU1FLElBQUksR0FBR1IsSUFBSSxHQUFHQyxLQUFQLEdBQWUsQ0FBNUI7QUFDQSxVQUFNUSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxLQUFLLEdBQUdMLEtBQWxCLENBQWQsQ0FQbUMsQ0FTbkM7O0FBQ0EsVUFBTVcsS0FBSyxHQUFHZixRQUFRLENBQUNnQixLQUFULENBQWViLElBQWYsRUFBcUJBLElBQUksR0FBR0MsS0FBNUIsRUFBbUNhLE1BQW5DLENBQTBDLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFQO0FBQUEsT0FBMUMsQ0FBZCxDQVZtQyxDQVVnQztBQUVuRTs7QUFDQSxVQUFJSCxLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQXJCLEVBQTRCO0FBQzFCO0FBQ0EsZUFBTyxLQUFQO0FBQ0QsT0FoQmtDLENBa0JuQzs7O0FBQ0EsVUFBSVcsS0FBSyxDQUFDSSxNQUFWLEVBQWtCO0FBQ2hCQyxlQUFPLENBQUNDLEdBQVIscUJBQ2VOLEtBQUssQ0FBQ0ksTUFEckI7QUFHRDs7QUFDRCxhQUFPSixLQUFQO0FBQ0QsS0EzQkk7QUE2QkxPLFNBN0JLLGlCQTZCQ3RCLFFBN0JELEVBNkJXdUIsUUE3QlgsU0E2QitCO0FBQUEsVUFBUnRCLElBQVEsU0FBUkEsSUFBUTtBQUNsQztBQUVBO0FBQ0E7QUFDQTtBQUNBbUIsYUFBTyxDQUFDQyxHQUFSLDBDQUE4Q0UsUUFBUSxDQUFDSixNQUF2RDtBQU5rQyxVQU8xQmhCLElBUDBCLEdBT1ZGLElBUFUsQ0FPMUJFLElBUDBCO0FBQUEsVUFPcEJDLEtBUG9CLEdBT1ZILElBUFUsQ0FPcEJHLEtBUG9CO0FBUWxDLFVBQU1vQixNQUFNLEdBQUd4QixRQUFRLEdBQUdBLFFBQVEsQ0FBQ2dCLEtBQVQsQ0FBZSxDQUFmLENBQUgsR0FBdUIsRUFBOUM7O0FBQ0EsV0FBSyxJQUFJUyxDQUFDLEdBQUd0QixJQUFiLEVBQW1Cc0IsQ0FBQyxHQUFHdEIsSUFBSSxHQUFHb0IsUUFBUSxDQUFDSixNQUF2QyxFQUErQyxFQUFFTSxDQUFqRCxFQUFvRDtBQUNsREQsY0FBTSxDQUFDQyxDQUFELENBQU4sR0FBWUYsUUFBUSxDQUFDRSxDQUFDLEdBQUd0QixJQUFMLENBQXBCO0FBQ0Q7O0FBQ0RpQixhQUFPLENBQUNDLEdBQVIsQ0FBWUcsTUFBWixFQVprQyxDQWFsQzs7QUFDQSxhQUFPQSxNQUFQO0FBQ0Q7QUE1Q0ksR0FBUDtBQThDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmRlMTljNTJmZTVkMmVlODVlZmJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQQUdJTkFUSU9OX1FVRVJZIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnaW5hdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnaW5hdGlvbkZpZWxkKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBrZXlBcmdzOiBmYWxzZSwgLy90ZWxscyBhcG9sbG8gdGhhdCB3ZSB3aWxsIHRha2UgY2FyZSBvZiBldmVyeXRoaW5nXHJcbiAgICByZWFkKGV4aXN0aW5nID0gW10sIHsgYXJncywgY2FjaGUgfSkge1xyXG4gICAgICAvLyBhcmdzOiBmaXJzdCAmIHNraXAgdmFsdWVzLCBjYWNoZSBpcyBhcG9sbG8gY2FjaGVcclxuICAgICAgY29uc3QgeyBza2lwLCBmaXJzdCB9ID0gYXJncztcclxuICAgICAgLy8gcmVhZCBudW1iZXIgb2YgaXRlbXMgb24gdGhlIHBhZ2UgZnJvbSBjYWNoZVxyXG4gICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVhZFF1ZXJ5KHsgcXVlcnk6IFBBR0lOQVRJT05fUVVFUlkgfSk7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gZGF0YT8uX2FsbFByb2R1Y3RzTWV0YT8uY291bnQ7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBza2lwIC8gZmlyc3QgKyAxO1xyXG4gICAgICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbChjb3VudCAvIGZpcnN0KTtcclxuXHJcbiAgICAgIC8vIGNoZWNrIGlmIHdlIGhhdmUgZXhpc3RpbmcgaXRlbXNcclxuICAgICAgY29uc3QgaXRlbXMgPSBleGlzdGluZy5zbGljZShza2lwLCBza2lwICsgZmlyc3QpLmZpbHRlcigoeCkgPT4geCk7IC8vIGZpbHRlcnMgaWYgaXRlbSBpcyB1bmRlZmluZWRcclxuXHJcbiAgICAgIC8vIGNoZWNrIGlmIHdlIGRvIG5vdCBoYXZlIGV4aXN0aW5nIGl0ZW1zXHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggIT09IGZpcnN0KSB7XHJcbiAgICAgICAgLy8gd2UgZG8gbm90IGhhdmUgYW55IGl0ZW1zLCBnbyB0byBuZXR3b3JrXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBpZiB0aGVyZSBhcmUgaXRlbXMsIHJldHVybiB0aGVtIGZyb20gdGhlIGNhY2hlLCBkbyBub3QgZ28gdG8gbmV0d29ya1xyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICBgVGhlcmUgYXJlICR7aXRlbXMubGVuZ3RofSBpdGVtcyBpbiB0aGUgY2FjaGUhIEdvbm5hIHNlbmQgdGhlbSB0byBhcG9sbG8uYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSxcclxuXHJcbiAgICBtZXJnZShleGlzdGluZywgaW5jb21pbmcsIHsgYXJncyB9KSB7XHJcbiAgICAgIC8vIHJ1bnMgd2hlbiBhcG9sbG8gY2xpZW50IGNvbWVzIGJhY2sgZnJvbSB0aGUgbmV0d29yayB3aXRoIG91ciBwcm9kdWN0XHJcblxyXG4gICAgICAvLyB3aGVuIGFwb2xsbyB0cmllcyB0byBxdWVyeSBmb3IgYWxsIHByb2R1Y3RzOlxyXG4gICAgICAvLyBmaXJzdCB0aGluZzogcmVhZCBmdW5jdGlvbiBmb3IgdGhvc2UgaXRlbXNcclxuICAgICAgLy8gdHdvIHRoaW5ncyBwb3NzaWJsZTogcmV0dXJuIGl0ZW1zIGJjIHRoZXkgYXJlIGluIGNhY2hlIE9SIHJldHVybiBmYWxzZSBmcm9tIGhlcmUgKG1ha2VzIGEgbmV0d29yayByZXF1ZXN0KVxyXG4gICAgICBjb25zb2xlLmxvZyhgTWVyZ2luZyBpdGVtcyBmcm9tIHRoZSBuZXR3b3JrICR7aW5jb21pbmcubGVuZ3RofWApO1xyXG4gICAgICBjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xyXG4gICAgICBjb25zdCBtZXJnZWQgPSBleGlzdGluZyA/IGV4aXN0aW5nLnNsaWNlKDApIDogW107XHJcbiAgICAgIGZvciAobGV0IGkgPSBza2lwOyBpIDwgc2tpcCArIGluY29taW5nLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgbWVyZ2VkW2ldID0gaW5jb21pbmdbaSAtIHNraXBdO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKG1lcmdlZCk7XHJcbiAgICAgIC8vIHJldHVybiBtZXJnZWQgaXRlbXMgZnJvbSBjYWNoZVxyXG4gICAgICByZXR1cm4gbWVyZ2VkO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=