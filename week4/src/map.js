function map(array, func) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = func(array[i]);
  }
  return newArray;
}

function square(array) {
  return map(array, number => Math.pow(number, 2));
}

module.exports = { map, square };
