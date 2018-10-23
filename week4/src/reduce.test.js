var reduce = require('./reduce').reduce;
var countZeros = require('./reduce').countZeros;

test('reduce reduces array to single value using given function', () => {
  let sum = reduce([1, 2, 3, 4], (base, nextElement) => base + nextElement);
  expect(sum).toEqual(10);
});

test('countZeros counts all zeros in an array', () => {
  let zeros = countZeros([0, 1, 0, 1, 0, 0, 1, 0]);
  expect(zeros).toEqual(5);
});