/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.
The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
*/


// Beats 54% Solution:
var isValidSudoku = function(board) {
  // Helper function to check every number only appears once
  const hashTable = (array) => {
    let hash = {};
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== '.') {
        if (hash[array[i]]) {
          hash[array[i]]++;
        } else {
          hash[array[i]] = 1;
        }
      }  
    }
    return hash;
  };

  for (let i = 0; i < 9; i++) {
    // Check each 1X9 row
    let hashRow = hashTable(board[i]);
    let filterRow = Object.values(hashRow).filter(item => item > 1);
    if (filterRow.length) return false;
    // Check each 9X1 Row
    let column = [];
    for (let j = 0; j < 9; j++) {
      column.push(board[j][i]);
    }
    let hashColumn = hashTable(column);
    let filterCol = Object.values(hashColumn).filter(item => item > 1);
    if (filterCol.length) return false;
  } 

  // Check each 3X3 sub-boxes
  let baseI = 0;
  while (baseI < 9) {
    let baseJ = 0;
    while (baseJ < 9) {
      let subBox = [];
      for (let i = baseI; i < baseI + 3; i++) {
        for (let j = baseJ; j < baseJ + 3; j++) {
          subBox.push(board[i][j]);
        }
      }
      let hashSub = hashTable(subBox);
      let filterSub = Object.values(hashSub).filter(item => item > 1);
      if (filterSub.length) return false;
      baseJ += 3;
    }
    baseI += 3;
  }

  return true;    
};
