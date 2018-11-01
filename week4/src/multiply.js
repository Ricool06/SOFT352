function iterativeMultiply(a, b) {
  let base = 0;
  for (let i = 0; i < a; i++) {
    base += b;
  }

  return base;
}

function recursiveMultiply(a, b) {
  return a == 0 ? a : recursiveMultiply(a - 1, b) + b;
}

module.exports = { iterativeMultiply, recursiveMultiply };