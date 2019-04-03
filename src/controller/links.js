import { readDirectory } from './path'

export const extractLinks = (arrFiles) => {
    const arrLinks = [];
    arrFiles.forEach((file) => {
        const readFile = fs.readFileSync(file, 'utf8');
        const renderer = new myMarked.Renderer();
        renderer.link = (href, title, text) => {
            arrLinks.push({href, text: text.slice(0,50), file: file});
        };
        myMarked(readFile, {renderer});
        });
        return arrLinks;
};

    
//console.log(extractLinks(readDirectory('/Users/macbookair13/Desktop/Markdown\ Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md')));
    