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

  test('checkRow function should identify rows', () => {
    const s = new Sudoku();
    s.board[5] = [0,1,2,3,4,5,6,7,8,9];
    expect(s.checkRow(5)).toEqual(true);
  });
  
});
