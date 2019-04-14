"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brokenLinks = exports.totalLinks = exports.uniqueLinks = void 0;

require("core-js/modules/web.dom.iterable");

const uniqueLinks = arrObjt => {
  const newSetLinks = [...new Set(arrObjt.map(links => links.href))];
  return newSetLinks.length;
};

exports.uniqueLinks = uniqueLinks;

const totalLinks = arrObjt => {
  const arrObjtTotal = arrObjt;
  return arrObjtTotal.length;
};

exports.totalLinks = totalLinks;

const brokenLinks = arrObjt => {
  const arrayBroken = arrObjt.filter(link => link.status === 'FAIL');
  return arrayBroken.length;
};

exports.brokenLinks = brokenLinks;