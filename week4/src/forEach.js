function forEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    array[i] = func(array[i]);
  }
}
module.exports = forEach;