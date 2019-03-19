"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeToAbsolute = exports.validRouteAbsolute = void 0;

const fs = require('fs');

const path = require('path');

const validRouteAbsolute = paths => path.isAbsolute(paths);

exports.validRouteAbsolute = validRouteAbsolute;

const routeToAbsolute = paths => path.resolve(paths);

exports.routeToAbsolute = routeToAbsolute;
console.log(validRouteAbsolute());
/*

fs.readdir(process.argv[2], function(err, archivos){
    archivos
    .filter(function(archivo){ 
        return path.extname(archivo) === '.' + process.argv[3]; 
    })
    .forEach(function(archivo){ console.log(archivo); });
});

*/