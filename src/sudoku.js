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
  for(let i=1; i<=9; i++) {
    if(this.checkRow(i)  || this.checkCol(i) ) {
      return false;
    }
  }
  Sudoku.checkSquare();

  return true;
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

Sudoku.prototype.checkSquare = function (startRow, startCol) {
  let checkSquareArray = [];

  for(let r = startRow; r <= startRow + 3; r++) {
    for(let c = startCol; c <= startCol + 3; c ++){
      checkSquareArray.push(this.board[r][c]);
    }
  }
  for(let i=1; i<=9; i++) {
    if(checkSquareArray.indexOf(i) === -1) {
      return false;
    }
  }
  return true;
}