/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3


*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  // check if grid is empty or null return 0;
  if (grid === null || grid.length === 0) return 0;

  // initialize a count to 0
  let count = 0;

  // iterate over the grid
  for (let row = 0; row < grid.length; row += 1) {
    for (let column = 0; column < grid[0].length; column += 1) {
      // if the value at [row][column] is 1 or "1" add one to count
      if (grid[row][column] == 1) {
        count += 1;
        depthFirstSearch(grid, row, column);
      }
    }
  }
  return count;
};

// helper function
function depthFirstSearch(grid, row, column) {
    // check if reach an end or out of bounds
    if(row < 0 || column < 0 || row >= grid.length || column >= grid[0].length || grid[row][column] == 0)
    return;
    // reassign the grid[row][column] to 0 to indicate we have been there
    grid[row][column] = 0;
    depthFirstSearch(grid, row - 1, column)
    depthFirstSearch(grid, row + 1, column)
    depthFirstSearch(grid, row, column - 1)
    depthFirstSearch(grid, row, column + 1)
}

module.exports = numIslands;
