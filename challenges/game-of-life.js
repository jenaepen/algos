/**
 * According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:

Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
 */

 /**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function(board) {
    //initiate a game dictionary 
    const dict = {
        0: {3:1},
        1: {
            0:0,
            1:0,
            2:1,
            3:1
        }
    }
    // return array from mapping
    return board.map((outerArr, i)=>{
        return outerArr.map((element,j)=>{
            let sum = 0;
            if(board[i-1]!== undefined) {
                if(board[i-1][j-1] !== undefined) sum += board[i-1][j-1];
                if(board[i-1][j] !== undefined) sum += board[i-1][j];
                if(board[i-1][j+1] !== undefined) sum += board[i-1][j+1];
            }
            
            if(board[i][j-1] !== undefined) sum += board[i][j-1];
            if(board[i][j+1] !== undefined) sum += board[i][j+1];
            
            if(board[i+1] !== undefined){
                if(board[i+1][j-1] !== undefined) sum += board[i+1][j-1];
                if(board[i+1][j] !== undefined) sum += board[i+1][j];
                if(board[i+1][j+1] !== undefined) sum += board[i+1][j+1];
            }
            return dict[element][sum]!== undefined ? dict[element][sum]: 0;
        })
    })
};


module.exports = gameOfLife