var map = require('./map').map;
var square = require('./map').square;

test(`map should return a new array resulting from
applying given function to all elements in given array`, () => {
  let inputArray = [1, 2, 3, 4];
  let outputArray = map(inputArray, number => number *2);

  expect(outputArray).toEqual([2, 4, 6, 8]);
  expect(inputArray).toEqual([1, 2, 3, 4]);
});

test(`square should return a new array with the square
of all numbers in the given array`, () => {
  let inputArray = [1, 2, 3, 4];
  let outputArray = square(inputArray);

  expect(outputArray).toEqual([1, 4, 9, 16]);
  expect(inputArray).toEqual([1, 2, 3, 4]);
});