"use strict";

var _mdLinks = require("./mdLinks");

(0, _mdLinks.mdLinks)('/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md', {
  validate: true
}).then(res => console.log(res)).catch(err => console.log(err));