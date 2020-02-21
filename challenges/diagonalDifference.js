const diagonalDifference = function(arr) {
  // Write your code here
  if (arr.length === 0) return 0;
  let sum = 0;
  let row = 0;
  let col = 0;
  while (row >= 0 && row < arr.length && col >= 0 && col < arr[0].length) {
    sum += arr[row][col];
    row += 1;
    col += 1;
  }
  row = 0;
  col = arr.length - 1;
  while (row >= 0 && row < arr.length && col >= 0 && col < arr[0].length) {
    sum -= arr[row][col];
    row += 1;
    col -= 1;
  }
  return Math.abs(sum);
};

module.exports = diagonalDifference;
