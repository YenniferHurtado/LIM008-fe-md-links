
const fs = require('fs');
const path = require('path');
  
export const validRouteAbsolute = paths => path.isAbsolute(paths);
export const routeToAbsolute = paths => path.resolve(paths);

export const readDirectoryOrFile = (route) => {
    let arrList = []; 
    if(fs.statSync(route).isFile()){
        if(path.extname(route) === '.md'){
        arrList.push(route);    
        }
    } else {
    fs.readdirSync(route).forEach(file => {
        const newList = path.join(route, file);
        const stat  = fs.statSync(newList);
        if(stat.isDirectory()) {
            arrList = arrList.concat(readDirectoryOrFile(newList));
        } else if (stat.isFile() && path.extname(file) === '.md'){
                arrList.push(newList);
            }
        })
    };
    return arrList
};

