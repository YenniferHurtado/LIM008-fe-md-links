import { uniqueLinks, totalLinks, brokenLinks } from './controller/stats'
import { mdLinks } from './mdLinks'

const options = {
   validate: false,
}; 

const path = process.argv[2];
const firstOption = process.argv[3];
const secondOption = process.argv[4];

export const commandsConsole = (path, firstOption, secondOption) => {
  if((firstOption === '--validate' && secondOption === '--stats') || (firstOption === '--stats' && secondOption === '--validate')){
    options.validate = true;
    return mdLinks(path, options)
    .then(res => (`Total:${totalLinks(res)}\nUnique:${uniqueLinks(res)}\nBroken:${brokenLinks(res)}`));
  } else if (firstOption === '--validate') {
    options.validate = true;
    return mdLinks(path, options)
    .then(res => {
      return res.map(links => (`File: ${path}\nhref: ${links.href}\nText: ${links.statusText}\nStatus: ${links.status}\nText: ${links.text}\n`)).join('');
    });
  } else if (firstOption === '--stats') {
    return mdLinks(path, options)
    .then(res => (`Total:${totalLinks(res)}\nUnique: ${uniqueLinks(res)}`));
  } else {
    return mdLinks(path, options) 
    .then(res => {
      return res.map(links => (`File: ${path}\nhref: ${links.href}\nText: ${links.text}\n`)).join('');
    });
  }
};

commandsConsole(path, firstOption, secondOption).then(resp => console.log(resp));

//'/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md'