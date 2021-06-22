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
    if(!this.checkRow(i)  || !this.checkCol(i) ) {
      return false;
    }
  }
  if (!this.checkSquare(1,1) || !this.checkSquare(1,4) || !this.checkSquare(1,7) || !this.checkSquare(4,1) || !this.checkSquare(4,4) || !this.checkSquare(4,7) || 
  !this.checkSquare(7,1) || !this.checkSquare(7,4) || !this.checkSquare(7,7)) {
    return false;
  }
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

  for(let r = startRow; r <= startRow + 2; r++) {
    for(let c = startCol; c <= startCol + 2; c ++){
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