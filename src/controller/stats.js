
export const uniqueLinks = (arrObjt) => {
    const newSetLinks = [...new Set(arrObjt.map((links) => links.href))];
    return newSetLinks.length;
  };

export const totalLinks = (arrObjt) => {
    const arrObjtTotal = arrObjt
    return arrObjtTotal.length;
};

export const brokenLinks = (arrObjt) => {
    const arrayBroken = arrObjt.filter(link => link.status === 'FAIL');
    return arrayBroken.length;
};
  
