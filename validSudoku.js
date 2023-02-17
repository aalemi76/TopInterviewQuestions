// Valid Sudoku

const isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    const hHashMap = {};
    const vHashMap = {};
    for (let j = 0; j < board[i].length; j++) {
      if (!checkHashMap(hHashMap, board, i, j)) return false;
      if (!checkHashMap(vHashMap, board, j, i)) return false;
    }
  }
  if (!checkSquare(board)) return false;
  return true;
};

const checkHashMap = function (hashMap, board, i, j) {
  const emptySign = ".";
  if (board[i][j] != emptySign) {
    if (hashMap[board[i][j]] != undefined) {
      return false;
    } else {
      hashMap[board[i][j]] = 1;
    }
  }
  return true;
};

const checkSquare = function (board, step = 3) {
  for (let i = 0; i < board.length; i += step) {
    for (let j = 0; j < board[i].length; j += step) {
      const hashMap = {};
      for (let k = i; k < i + 3; k++) {
        for (let n = j; n < j + 3; n++) {
          if (!checkHashMap(hashMap, board, k, n)) return false;
        }
      }
    }
  }
  return true;
};

// const board = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// const board = [
//   ["8", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

const board = [
  [".", ".", ".", ".", "5", ".", ".", "1", "."],
  [".", "4", ".", "3", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "1"],
  ["8", ".", ".", ".", ".", ".", ".", "2", "."],
  [".", ".", "2", ".", "7", ".", ".", ".", "."],
  [".", "1", "5", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "2", ".", "9", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
];

console.log(isValidSudoku(board));
