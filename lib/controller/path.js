"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractLinks = exports.readDirectory = exports.routeToAbsolute = exports.validRouteAbsolute = void 0;

require("core-js/modules/web.dom.iterable");

const fs = require('fs');

const path = require('path');

const myMarked = require('marked');

const validRouteAbsolute = paths => path.isAbsolute(paths);

exports.validRouteAbsolute = validRouteAbsolute;

const routeToAbsolute = paths => path.resolve(paths);

exports.routeToAbsolute = routeToAbsolute;

const readDirectory = route => {
  let arrList = [];
  let statTwo = fs.statSync(route);

  if (statTwo.isFile()) {
    if (path.extname(route) === '.md') {
      arrList.push(route);
    }
  } else {
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
  }

  ;
  return arrList;
}; //console.log(readDirectory('/Users/macbookair13/Desktop/Markdown\ Links/LIM008-fe-md-links/tests/prueba/archivosMD'));


exports.readDirectory = readDirectory;

const extractLinks = arrFiles => {
  const arrLinks = [];
  arrFiles.forEach(file => {
    const readFile = fs.readFileSync(file, 'utf8');
    const renderer = new myMarked.Renderer();

    renderer.link = (href, title, text) => {
      arrLinks.push({
        href,
        text: text.slice(0, 50),
        file: file
      });
    };

    myMarked(readFile, {
      renderer
    });
  });
  return arrLinks;
}; //console.log(extractLinks(readDirectory('/Users/macbookair13/Desktop/Markdown\ Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md')));


exports.extractLinks = extractLinks;