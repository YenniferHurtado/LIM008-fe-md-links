import { linkSync } from "fs";


export const statLinks = (arrLinkObjLinks) => {
    const links = new Set();

    links.add(arrLinkObjLinks);

    return linkSync
};

// Total: 3
// Unique: 3