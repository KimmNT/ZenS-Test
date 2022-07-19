let array = [14, 12, 51, 61, 2];

//Sort the array
array.sort((firstNum, secoundNum) => {
  if (secoundNum > firstNum) {
    return -1;
  } else {
    return 0;
  }
});

//Sum the minium value
function sumMinArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length - 1; i++) {
    sum += array[i];
  }
  return sum;
}

// Sum the maxium value
function sumMaxArray(array) {
  array.reverse();
  let sum = 0;
  for (let i = 0; i < array.length - 1; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(sumMinArray(array) + " " + sumMaxArray(array));
