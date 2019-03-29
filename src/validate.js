import { extractLinks, readDirectory } from './path';

import { url } from 'inspector';
import { link } from 'fs';
const fetch = require('node-fetch'); 

export const validateLinks = (arrLinks) => { 
  const arrPromises = arrLinks.map(links => new Promise((resolve) => {
    fetch(links)
      .then(response => {
        if (response.status >= 200 && response.status < 400) {
          links.status = response.status;
          links.statusText = response.statusText;
          resolve(links);
        } else {
          links.status = response.status;
          links.statusText = 'Fallo';
          resolve(links);
        }
      }).catch(() => {
        links.status = 'Link no valido';
        links.statusText = 'FAIL';
        resolve(links);
      }); 
  }));
  return Promise.all(arrPromises);
};

validateLinks(extractLinks(readDirectory('/Users/macbookair13/Desktop/Markdown\ Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md'))).then(resultado => console.log(resultado))
.catch(error => console.log(error));

// let promesa = new Promise((resolve, reject) => {
//   resolve('exito al procesar')
//   reject('error')
// });

// promesa.then(resutado => console.log(resutado))
// .catch(error => console.log(error));