
const fs = require('fs');
const path = require('path');
const myMarked = require('marked');
  
export const validRouteAbsolute = paths => path.isAbsolute(paths);

export const routeToAbsolute = paths => path.resolve(paths);

export const readDirectoryOrFile = (route) => {
    let arrList = []; 
    if(fs.statSync(route).isFile()){
        if(path.extname(route) === '.md'){
        arrList.push(route);    
        }
    } else {
    const directory = fs.readdirSync(route);
    directory.forEach(file => {
        const newList = path.join(route, file);
        const stat  = fs.statSync(newList);
        if(stat.isDirectory()) {
            arrList = arrList.concat(readDirectoryOrFile(newList));
            //arrList = [...arrList, ...(readDirectory(newList))];
        } else if (stat.isFile() && path.extname(file) === '.md'){
                arrList.push(newList);
            }
        })
    };
    return arrList
};


//console.log(readDirectoryOrFile('/Users/macbookair13/Desktop/Markdown\ Links/LIM008-fe-md-links/tests/prueba/archivosMD'));    