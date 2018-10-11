const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('What is an example of a prime number? ', (inputString) => {
  let inputInteger = parseInt(inputString);

  let message = isNaN(inputInteger) ?
    'Please enter a numerical value.' :
    inputInteger + ' is prime?: ' + isPrime(inputInteger);

  console.log(message);

  terminal.close();
});

function isPrime(integer) {
  let root = Math.ceil(Math.sqrt(integer));
  for (let i = 2; i < root; i++) {
    if (integer % i == 0) return false;
  }
  return integer > 1;
}