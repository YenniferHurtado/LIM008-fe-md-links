import { mdLinks } from './mdLinks';
import { totalStatLinks, uniqueStatLinks, brokenLinks} from './controller/stats';


const options = {
  validate: false,
}; 

const cliMdLinks = (path, options1, options2) => {
  return new Promise((resolve, reject) => {
if ((options1 === '--stats' && options2 === '--validate')
|| (options1 === '--validate' && options2 === '--stats' )) {
    options.validate = true;
  mdLinks(path, options)
    .then(resp => resolve(console.log(`Total: ${totalStast(resp)} \nUnique: ${linksUnique(resp)} \nBroken: ${brokenStats(resp)}`)))
    .catch(err => reject(console.log(err)));
} else if (options1 === '--validate') {
    options.validate = true;
  mdLinks(path, options)
    .then(resp => resolve(resp.forEach(objectReturn => { console.log(objectReturn.file, objectReturn.href, objectReturn.statusText, objectReturn.code, objectReturn.text)})))
    .catch(err => reject(console.log(err)));
} else if (options1 === '--stats') {
    options.validate = true;
  mdLinks(path, options)
    .then(resp => resolve(console.log(`Total: ${totalStast(resp)} \nUnique: ${linksUnique(resp)}`)))
    .catch(err => reject(console.log(err)));
} else {
  mdLinks(path, options)
    .then(resp => resolve(resp.forEach(objectReturn => { console.log(objectReturn.file, objectReturn.href, objectReturn.text)})))
    .catch(err => reject(console.log(err)));
}
  });
};

module.exports = cliMdLinks;
