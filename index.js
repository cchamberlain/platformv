"use strict";

var platform = process.env.platform

exports.platform = platform;
exports.platformv = getVariant();

function getVariant()
  if(platform !== "win32") {
    return platform;
  }
  var path = process.env.PATH.toLowerCase()
    , order: [
      { "msys2": path.indexOf("msys") },
      { "mingw": path.indexOf("mingw") },
      { "cygwin": path.indexOf("cygwin") }
    ]
  };
  if(order.msys === -1 && order.mingw === -1 && order.cygwin === -1) {
    return "win32";
  } else {
    return order.sort(function(a, b) {
      return a[1] - b[1];
    })[0];
  }
}
