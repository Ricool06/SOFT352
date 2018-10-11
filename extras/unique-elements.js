let someArray = [1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 5, 6];
let filteredArray = someArray.filter((value, index, thisArray) => {
  return thisArray.indexOf(value) == index;
});
console.log(filteredArray.length);