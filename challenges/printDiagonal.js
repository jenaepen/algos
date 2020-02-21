/**
 * Given an MxN matrix, write a code which prints out diagonals (from upper right to lower left) of the matrix
 * In the example where M = 4 and N = 3:
 * [[9,3,2],
 * [8,6,1],
 * [5,5,6],
 * [1,2,8]
 * ]
 *
 * Your code should print
 * 9
 * 3 8
 * 2 6 5
 * 1 5 1
 * 6 2
 * 8
 */

const printDiagonal = function(array) {
  // create an array to hold the numbers the way you want to print out
  const newArray = [];

  //iterate over the array
  for (let row = 0; row < array.length; row += 1) {
    for (let col = 0; col < array[0].length; col += 1) {
      // if the value in the array at i, j is not a start,
      // then call the helper function diagonalArray
      // to get the subarray that should be printed out
      if (array[row][col] !== "*") {
        newArray.push(diagonalArray(array, row, col));
      }
    }
  }
  for (let i = 0; i < newArray.length; i += 1) {
    console.log(...newArray[i]);
    console.log("\n");
  }
};

// return an array
function diagonalArray(array, row, col) {
  const subArray = [];

  (function recallDA(array, row, col) {
    // if the position in the array does not exist, then return nothing and don't push into the subArray
    if (row < 0 || col < 0 || row >= array.length || col >= array[0].length)
      return;

    // add the value to the subArray
    subArray.push(array[row][col]);

    // change the value of the element within the array to keep track of where you have been
    array[row][col] = "*";

    // move the position to the right and down
    recallDA(array, row + 1, col - 1);
  })(array, row, col);

  return subArray;
}

printDiagonal([
  [9, 3, 2],
  [8, 6, 1],
  [5, 5, 6],
  [1, 2, 8]
]);

module.exports = printDiagonal;
