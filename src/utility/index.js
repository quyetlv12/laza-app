export const isArrayEmpty = (arr) => {
  if (!arr) return true;
  if (Array.isArray(arr) && arr.length > 0) {
    return false;
  }
  return true;
};
export const isObjEmpty = (obj) => {
  if (!obj) return true;
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
};
