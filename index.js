var recipes = { };

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

updateObjectWithKeyAndValue(obj, 'prop2', 2)
updateObjectWithKeyAndValue(obj, 'prop2', undefined)

