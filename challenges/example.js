// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // declare variable i to 0 - it keeps track the index within the array
  let i = 0;
  //
  let newA = [...new Set(A.sort((a, b) => a - b))];
  console.log("newA:", newA);
  let currentValue = 1;
  if (A.length === 0) {
    return 1;
  }
  // iterate over the array to find the missing positive number
  while (i < newA.length) {
    // check if the number is negative
    if (newA[i] > 0) {
      console.log("currentValue:", currentValue, " newA[i]:", newA[i]);
      if (currentValue !== newA[i]) {
        console.log("currentValue", currentValue);
        return currentValue;
      } else {
        currentValue += 1;
      }
    }
    i += 1;
  }
  //if number is not found return the
  return currentValue;
}

console.log("solution([1, 3, 6, 4, 1, 2]):", solution([1, 3, 6, -4, 1, 2, 4]));
