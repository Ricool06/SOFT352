const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('What is your name? ', (name) => {
  console.log(name);
  terminal.close();
});