"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readDirectory = exports.routeToAbsolute = exports.validRouteAbsolute = void 0;

require("core-js/modules/web.dom.iterable");

const fs = require('fs');

const path = require('path'); //const myMarked= require('marked');


const validRouteAbsolute = paths => path.isAbsolute(paths);

exports.validRouteAbsolute = validRouteAbsolute;

const routeToAbsolute = paths => path.resolve(paths);

exports.routeToAbsolute = routeToAbsolute;

const readDirectory = route => {
  let arrList = [];
  const directory = fs.readdirSync(route);
  directory.forEach(archive => {
    let newList = path.join(route, archive);
    let stat = fs.statSync(newList);

    if (stat.isDirectory()) {
      arrList = arrList.concat(readDirectory(newList));
    } else if (stat.isFile() && path.extname(archive) === '.md') {
      arrList.push(newList);
    }
  });
  return arrList;
};

exports.readDirectory = readDirectory;