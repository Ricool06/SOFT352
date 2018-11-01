var iterativeMultiply = require('./multiply').iterativeMultiply;
var recursiveMultiply = require('./multiply').recursiveMultiply;

test('should multiply iteratively', () => {
  let result = iterativeMultiply(5, 6);
  expect(result).toEqual(30);
});

test('should multiply by 0 correctly and iteratively', () => {
  let result = iterativeMultiply(48, 0);
  expect(result).toEqual(0);
});

test('should multiply iteratively', () => {
  let result = recursiveMultiply(5, 6);
  expect(result).toEqual(30);
});

test('should multiply by 0 correctly and iteratively', () => {
  let result = recursiveMultiply(48, 0);
  expect(result).toEqual(0);
});

test('performance', () => {
  let start = Date.now();
  iterativeMultiply(10000, 2);
  let end = Date.now();
  let result = end - start;

  console.log(`Iterative took ${result}ms to complete.`);

  start = Date.now();
  recursiveMultiply(10000, 2);
  end = Date.now();
  result = end - start;

  console.log(`Recursive took ${result}ms to complete.`);

});