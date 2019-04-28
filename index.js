var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})
}

updateObjectWithKeyAndValue(obj, 'prop2', 2);
