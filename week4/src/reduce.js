function reduce(array, func, base = 0) {
  for (const element of array) {
    base = func(base, element);
  }
  return base;
}

function countZeros(array) {
  return reduce(array, (base, element) => element === 0 ? base + 1 : base);
}

module.exports = { reduce, countZeros };
