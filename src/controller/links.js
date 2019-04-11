
const myMarked = require('marked');
const fs = require('fs');

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


    
    