"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brokenStats = exports.totalStast = exports.linksUnique = void 0;

require("core-js/modules/web.dom.iterable");

const linksUnique = arrObjt => {
  const newSetLinks = [...new Set(arrObjt.map(links => links.href))];
  return newSetLinks.length;
};

exports.linksUnique = linksUnique;

const totalStast = arrObjt => {
  const arrObjtTotal = arrObjt.length;
  return arrObjtTotal;
};

exports.totalStast = totalStast;

const brokenStats = arrObjt => {
  const arrayBroken = arrObjt.filter(link => link.statusText === 'FAIL').length;
  return arrayBroken;
};

exports.brokenStats = brokenStats;