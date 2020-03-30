function updateObjectWithKeyAndValue(object, key, value) {
  let cloneObj = Object.assign({}, object, {[key]: value});
  cloneObj[key] = value;
  return cloneObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  let cloneObj = Object.assign({}, object);
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
 delete cloneObj[key];
 return cloneObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
