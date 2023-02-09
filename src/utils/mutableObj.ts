/**
 * a function that recursively makes an object mutable.
 * @param object The object to be cloned and become mutable
 * @returns The mutable object
 */
const mutableObj = <T extends {}>(object: T): T => {
  if (typeof object !== "object") {
    return object;
  }
  let newObj;
  if (Array.isArray(object)) {
    newObj = [];
    for (let element of object) {
      newObj.push(mutableObj(element));
    }
    return newObj;
  }
  newObj = {};
  for (let key in object) {
    newObj[key] = mutableObj(object[key]);
  }
  return newObj;
};

export default mutableObj;
