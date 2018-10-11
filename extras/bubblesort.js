
function main() {
  let someArray = [2, 8, 4, 4, 16, 256, 256, 32, 64];

  let swapped = true;
  do {
    swapped = sortPass(someArray);
  } while (swapped);

  console.log(someArray);
}

function sortPass(array) {
  let swapped = false;

  for(let i = 0; i < (array.length - 1); i++){
    if (array[i] > array[i + 1]) {
      let temp = array[i];
      array[i] = array[i + 1];
      array[i + 1] = temp;
      swapped = true;
    }
  }

  return swapped;
}

main();