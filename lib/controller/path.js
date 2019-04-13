"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readDirectoryOrFile = exports.routeToAbsolute = exports.validRouteAbsolute = void 0;

require("core-js/modules/web.dom.iterable");

const fs = require('fs');

const path = require('path');

const validRouteAbsolute = paths => path.isAbsolute(paths);

exports.validRouteAbsolute = validRouteAbsolute;

const routeToAbsolute = paths => path.resolve('.' + paths);

exports.routeToAbsolute = routeToAbsolute;

const readDirectoryOrFile = route => {
  let arrList = [];

  if (fs.statSync(route).isFile()) {
    if (path.extname(route) === '.md') {
      arrList.push(route);
    }
  } else {
    fs.readdirSync(route).forEach(file => {
      const newList = path.join(route, file);
      const stat = fs.statSync(newList);

      if (stat.isDirectory()) {
        arrList = arrList.concat(readDirectoryOrFile(newList));
      } else if (stat.isFile() && path.extname(file) === '.md') {
        arrList.push(newList);
      }
    });
  }

  ;
  return arrList;
};

exports.readDirectoryOrFile = readDirectoryOrFile;