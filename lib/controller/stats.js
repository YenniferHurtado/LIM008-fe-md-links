"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.statLinks = void 0;

require("core-js/modules/web.dom.iterable");

var _fs = require("fs");

const statLinks = arrLinkObjLinks => {
  const links = new Set();
  links.add(arrLinkObjLinks);
  return _fs.linkSync;
}; // Total: 3
// Unique: 3


exports.statLinks = statLinks;