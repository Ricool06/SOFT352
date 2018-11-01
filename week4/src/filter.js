function filter(array, predicate) {
  let result = [];
  let i = 0;
  for (const element of array) {
    if(predicate(element)) {
      result[i] = element;
      i++;
    }
  }
  return result;
}

function strip(string, ...chars) {
  return filter(string.split(''), char => !chars.includes(char)).join('');
}

module.exports = { filter, strip };