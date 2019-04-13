"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLinks = void 0;

require("core-js/modules/web.dom.iterable");

const fetch = require('node-fetch');

const validateLinks = arrLinks => {
  const promises = link => new Promise(resolve => {
    fetch(link.href).then(res => {
      while (res.status >= 200 & res.status < 400) {
        link.code = res.status;
        link.status = res.statusText;
        resolve(link);
        break;
      }
    }).catch(error => {
      error = 'URL no válido';
      link.code = error;
      link.status = 'FAIL';
      resolve(link);
    });
  });

  const result = arrLinks.map(promises);
  return Promise.all(result);
}; // validateLinks(extractLinks(readDirectoryOrFile('/Users/macbookair13/Desktop/Markdown\ Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md')))
// .then(resultado => console.log(resultado))
// .catch(error => console.log(error));


exports.validateLinks = validateLinks;