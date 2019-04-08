"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _validate = require("./controller/validate");

var _links = require("./controller/links");

const mdLinks = (path, options) => {
  let newPath = path;
  return new Promise(resolve => {
    if (!checkIfRouteIsAbsolute(path)) {
      newPath = transformRelativePath(path);
    }

    const routeRecv = fileMd(newPath);
    const extractLink = (0, _links.extractLinks)(routeRecv);

    if (options.validate) {
      (0, _validate.validateLinks)(extractLink).then(response => resolve(response));
    } else {
      resolve(extractLink);
    }
  });
};

exports.mdLinks = mdLinks;
mdLinks('/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md', {
  validate: true
}).then(resp => console.log(resp));