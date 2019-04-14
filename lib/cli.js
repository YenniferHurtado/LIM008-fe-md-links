"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commandsConsole = void 0;

var _stats = require("./controller/stats");

var _mdLinks = require("./mdLinks");

const options = {
  validate: false
};
const path = '/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md';
const firstOption = process.argv[2];
const secondOption = process.argv[3];

const commandsConsole = (path, firstOption, secondOption) => {
  if (firstOption === '--validate' && secondOption === '--stats' || firstOption === '--stats' && secondOption === '--validate') {
    options.validate = true;
    return (0, _mdLinks.mdLinks)(path, options).then(res => `Total:${(0, _stats.totalLinks)(res)}\nUnique:${(0, _stats.uniqueLinks)(res)}\nBroken:${(0, _stats.brokenLinks)(res)}`);
  } else if (firstOption === '--validate') {
    options.validate = true;
    return (0, _mdLinks.mdLinks)(path, options).then(res => {
      return res.map(links => `File: ${path}\nText: ${links.href}\nhref: ${links.href}\nStatus: ${links.code}\nStatusMessage: ${links.status}\n`).join('');
    });
  } else if (firstOption === '--stats') {
    return (0, _mdLinks.mdLinks)(path, options).then(res => `Total:${(0, _stats.totalLinks)(res)}\nUnique: ${(0, _stats.uniqueLinks)(res)}`);
  } else {
    return (0, _mdLinks.mdLinks)(path, options).then(res => {
      return res.map(links => `File: ${path}\nhref: ${links.href}\nText: ${links.text}\n`).join('');
    });
  }
};

exports.commandsConsole = commandsConsole;
commandsConsole(path, firstOption, secondOption).then(resp => console.log(resp)); //'/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md'