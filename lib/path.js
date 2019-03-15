const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], function(err, archivos){
    archivos
    .filter(function(archivo){ 
        return path.extname(archivo) === '.' + process.argv[3]; 
    })
    .forEach(function(archivo){ console.log(archivo); });
});

 const convertToAbsolute = (pathRelative) => {       
    return path.resolve(pathRelative)
}

console.log(relativeToAbsolute());




