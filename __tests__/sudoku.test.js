import {Sudoku} from './../src/sudoku.js'

describe('Sudoku', () => {
  
  test('Sudoku constructor should have 9 properties', () => {
    const s = new Sudoku() 
    expect(s.row1).toEqual([0,0,0,0,0,0,0,0,0,0]);
    expect(s.row2).toEqual([0,0,0,0,0,0,0,0,0,0]);
    expect(s.row3).toEqual([0,0,0,0,0,0,0,0,0,0]);
    expect(s.row4).toEqual([0,0,0,0,0,0,0,0,0,0]);
    expect(s.row5).toEqual([0,0,0,0,0,0,0,0,0,0]);
    expect(s.row6).toEqual([0,0,0,0,0,0,0,0,0,0]);
    expect(s.row7).toEqual([0,0,0,0,0,0,0,0,0,0]);
    expect(s.row8).toEqual([0,0,0,0,0,0,0,0,0,0]);
    expect(s.row9).toEqual([0,0,0,0,0,0,0,0,0,0]);
  });
  
});
