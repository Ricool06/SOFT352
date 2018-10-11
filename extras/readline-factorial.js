const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('What integer would you like to calculate the factorial of? ', (inputString) => {
  const inputNumber = parseInt(inputString);

  let outputNumber = 1;
  for (let i = inputNumber; i > 1; i--) {
    outputNumber = outputNumber * i;
  }

  console.log(outputNumber);
  terminal.close();
});
