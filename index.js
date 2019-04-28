var recipes = new object();

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

updateObjectWithKeyAndValue(obj, 'prop2', 2);
