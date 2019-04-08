import { validateLinks } from './controller/validate'
import { extractLinks } from './controller/links'

export const mdLinks = (path, options) => {
    let newPath = path;
    return new Promise((resolve) => {
      if (!checkIfRouteIsAbsolute(path)) {
        newPath = transformRelativePath(path);  
      }
      const routeRecv = fileMd(newPath); 
      const extractLink = extractLinks(routeRecv); 
      if (options.validate) {
        validateLinks(extractLink)
          .then(response => resolve(response))
      } else {
        resolve(extractLink);
      }
    });
  };

mdLinks('/Users/macbookair13/Desktop/Markdown Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md', {validate : true}).then(resp => console.log(resp))
