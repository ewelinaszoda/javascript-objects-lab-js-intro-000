function updateObjectWithKeyAndValue(object, key, value) {
  var cloneObj = Object.assign({}, object, {[key]: value});
  cloneObj[key] = value;
  return cloneObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
 delete cloneObj[key];
 return cloneObj;
}

fun

