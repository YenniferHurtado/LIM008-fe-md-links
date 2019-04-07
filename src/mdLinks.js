import { resolve } from "url";
import { rejects } from "assert";
import { validateLinks } from './controller/validate'
import { extractLinks } from './controller/links'
import { validRouteAbsolute } from './controller/path';


export const mdLinks = (path, options) => {
    if (options.validate) {
        return validateLinks(route).then(resp => resp)
        .catch(err => err);
    } else if (options.validate === false) {
        return new Promise(resolve => resolve(extractLinks(route)));
    }
};