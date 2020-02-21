/**
 *
 * @param {[]} A
 * return Number - the missing number within the array A
 */

function missingNumber(A) {
  // declare variable i to 0 - it keeps track the index within the array
  let i = 0;

  // sort the array without duplicates
  let newA = [...new Set(A.sort((a, b) => a - b))];

  let currentValue = 1;

  if (A.length === 0) {
    return 1;
  }

  // iterate over the array to find the missing positive number
  while (i < newA.length) {
    // check if the number is negative
    if (newA[i] > 0) {
      if (currentValue !== newA[i]) {
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

module.exports = missingNumber;
