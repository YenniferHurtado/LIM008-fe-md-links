"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brokenStats = exports.totalStats = exports.linksUnique = void 0;

require("core-js/modules/web.dom.iterable");

const linksUnique = arrObjt => {
  const newSetLinks = [...new Set(arrObjt.map(links => links.href))];
  return newSetLinks.length;
};

exports.linksUnique = linksUnique;

const totalStats = arrObjt => {
  const arrObjtTotal = arrObjt;
  return arrObjtTotal.length;
};

exports.totalStats = totalStats;

const brokenStats = arrObjt => {
  const arrayBroken = arrObjt.filter(link => link.statusText === 'FAIL');
  return arrayBroken.length;
};

exports.brokenStats = brokenStats;