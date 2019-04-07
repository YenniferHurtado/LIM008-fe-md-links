"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _url = require("url");

var _assert = require("assert");

var _validate = require("./controller/validate");

var _links = require("./controller/links");

var _path = require("./controller/path");

const mdLinks = (path, options) => {
  if (options.validate) {
    return (0, _validate.validateLinks)(route).then(resp => resp).catch(err => err);
  } else if (options.validate === false) {
    return new Promise(resolve => resolve((0, _links.extractLinks)(route)));
  }
};

exports.mdLinks = mdLinks;