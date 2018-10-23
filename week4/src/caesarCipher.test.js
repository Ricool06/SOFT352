var caesarCipher = require('./caesarCipher');

test('should shift all characters up the unicode chart by a given amount', () => {
  let result = caesarCipher('Veni, vedi, veci.', 4);
  expect(result).toEqual('Zirm0$zihm0$zigm2');
});