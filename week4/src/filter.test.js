var filter = require('./filter').filter;
var strip = require('./filter').strip;

test('should return a new array with all elements matching predicate removed', () => {
  let testArray = [1, 2, 3, 4, 2, 4, 5, 5, 8];
  let result = filter(testArray, number => number % 2 != 0);
  expect(result).toEqual([1, 3, 5, 5]);
  expect(testArray).toEqual([1, 2, 3, 4, 2, 4, 5, 5, 8]);
});

test('should return a new array with all elements with sqrt lower than 50 removed', () => {
  let testArray = [1, 2, 3, 4, 2, 4, 5, 5, 8, 2500, 4000, 8000];
  let result = filter(testArray, number => Math.sqrt(number) >= 50);
  expect(result).toEqual([2500, 4000, 8000]);
  expect(testArray).toEqual([1, 2, 3, 4, 2, 4, 5, 5, 8, 2500, 4000, 8000]);
});

test('should strip a string', () => {
  let result = strip('hello world', 'h', 'w', 'd');
  expect(result).toEqual('ello orl');
});