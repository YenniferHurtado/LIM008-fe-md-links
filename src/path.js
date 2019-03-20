
const fs = require('fs');
const path = require('path');
//const myMarked= require('marked');

export const validRouteAbsolute = paths => path.isAbsolute(paths);
export const routeToAbsolute = paths => path.resolve(paths);

export const readDirectory = (route) => {
    let arrList = [];
    const directory = fs.readdirSync(route);
    directory.forEach(archive => {
        let newList = path.join(route, archive);
        let stat  = fs.statSync(newList);
        if(stat.isDirectory()) {
            arrList = arrList.concat(readDirectory(newList));
        } else if (stat.isFile() && path.extname(archive) === '.md'){
                arrList.push(newList);
            }
        });
    return arrList
    }



