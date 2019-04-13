"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _validate = require("./controller/validate");

var _links = require("./controller/links");

var _path = require("./controller/path");

const mdLinks = (path, options) => {
  let pathAbsolute = [];

  if (!(0, _path.validRouteAbsolute)(path)) {
    pathAbsolute = (0, _path.routeToAbsolute)(path);
  } else {
    pathAbsolute = path;
  }

  ;
  return new Promise(resolve => {
    !options.validate ? resolve((0, _links.extractLinks)((0, _path.readDirectoryOrFile)(pathAbsolute))) : resolve((0, _validate.validateLinks)((0, _links.extractLinks)((0, _path.readDirectoryOrFile)(pathAbsolute))));
  });
};

exports.mdLinks = mdLinks;
mdLinks('/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md', {
  validate: true
}).then(res => console.log(res)).catch(err => console.log(err));