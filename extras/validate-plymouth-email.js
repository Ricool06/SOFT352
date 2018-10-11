const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('What is your email address? ', (email) => {
  const emailRegex = /^\w+([.-]?\w+)*@(\w+[.-]{1})*(plymouth\.ac\.uk)$/;
  console.log('Valid email: ' + emailRegex.test(email));
  terminal.close();
});