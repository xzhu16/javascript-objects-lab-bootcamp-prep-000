var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[object]})
}

updateObjectWithKeyAndValue(obj, 'prop2', 2);
