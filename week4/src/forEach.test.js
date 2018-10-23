var forEach = require('./forEach');
test('applies given function to array', () => {
  let testArray = [1, 2, 3, 4];
  forEach(testArray, (number) => number * 2);

  expect(testArray).toEqual([2, 4, 6, 8]);
});
