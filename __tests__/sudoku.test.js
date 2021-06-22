import {Sudoku} from './../src/sudoku.js'

describe('Sudoku', () => {
  
  test('Sudoku constructor should have a two dimmensional array', () => {
    const s = new Sudoku(); 
    expect(s.board).toEqual([
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
    ]);
  });

  test('checkRow function should check rows correctly for occurence of numbers 1-9', () => {
    const s = new Sudoku();
    s.board[5] = [0,1,2,3,4,5,6,7,8,9];
    expect(s.checkRow(5)).toEqual(true);
  });

  test('checkRow function should check rows correctly for occurence of numbers 1-9', () => {
    const s = new Sudoku();
    s.board[5] = [0,1,1,3,4,5,6,7,8,9];
    expect(s.checkRow(5)).toEqual(false);
  });

  test('checkCol function should check cols correctly for occurence of numbers 1-9', () => {
    const s= new Sudoku();
    s.board[0][3]=0;
    s.board[1][3]=9;
    s.board[2][3]=8;
    s.board[3][3]=6;
    s.board[4][3]=7;
    s.board[5][3]=5;
    s.board[6][3]=3;
    s.board[7][3]=4;
    s.board[8][3]=1;
    s.board[9][3]=2;
    expect(s.checkCol(3)).toEqual(true);
  });

  test('checkCol function should check cols correctly for occurence of numbers 1-9', () => {
    const s= new Sudoku();
    s.board[0][3]=0;
    s.board[1][3]=2;
    s.board[2][3]=8;
    s.board[3][3]=6;
    s.board[4][3]=7;
    s.board[5][3]=5;
    s.board[6][3]=3;
    s.board[7][3]=4;
    s.board[8][3]=1;
    s.board[9][3]=2;
    expect(s.checkCol(3)).toEqual(false);
  });

  test('checkSquare function should check a block of 9 cells correctly for occurence of numbers 1-9', () => {
    const s= new Sudoku();
    s.board[1][1]=1;
    s.board[1][2]=2;
    s.board[1][3]=3;
    s.board[2][1]=4;
    s.board[2][2]=5;
    s.board[2][3]=6;
    s.board[3][1]=7;
    s.board[3][2]=8;
    s.board[3][3]=9;
    expect(s.checkSquare(1,1)).toEqual(true);
  });

  test('checkSquare function should check a block of 9 cells correctly for occurence of numbers 1-9', () => {
    const s= new Sudoku();
    s.board[1][1]=1;
    s.board[1][2]=1;
    s.board[1][3]=3;
    s.board[2][1]=4;
    s.board[2][2]=5;
    s.board[2][3]=6;
    s.board[3][1]=7;
    s.board[3][2]=8;
    s.board[3][3]=9;
    expect(s.checkSquare(1,1)).toEqual(false);
  });
});
