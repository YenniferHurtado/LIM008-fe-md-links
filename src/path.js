
const fs = require('fs');
const path = require('path');

export const validRouteAbsolute = paths => path.isAbsolute(paths);
export const routeToAbsolute = paths => path.resolve(paths);


/*

fs.readdir(process.argv[2], function(err, archivos){
    archivos
    .filter(function(archivo){ 
        return path.extname(archivo) === '.' + process.argv[3]; 
    })
    .forEach(function(archivo){ console.log(archivo); });
});

*/



