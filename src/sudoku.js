export function Sudoku() {
  this.board = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ];
}

Sudoku.prototype.checker = function () {
  Sudoku.checkRow();
  Sudoku.checkCol();
  Sudoku.checkSquare();
}

Sudoku.prototype.checkRow = function (rowNum) {
  for(let i=1; i<=9; i++) {
    if(this.board[rowNum].indexOf(i) === -1)
      return false;
  }
  return true;
}

Sudoku.prototype.checkCol = function (colNum) {
  let temp = [];
  for(let i=0; i<=9; i++) {
    temp.push(this.board[i][colNum]);
  }

  for(let i=1; i<=9; i++) {
    if(temp.indexOf(i) === -1)
      return false;
  }

  return true;
}