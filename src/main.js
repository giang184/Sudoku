import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import {Sudoku} from './sudoku.js'


let myBoard = new Sudoku();

// const r1c3 = parseInt($("#13").val());
// console.log(r1c3);
$(document).ready(function() {
  $('#sudoku').submit(function(event) {
    event.preventDefault();
  

    let userArray = [];
    
    $('input').each(function() {
      userArray.push(parseInt($(this).val()));
    })
    console.log(userArray);

    myBoard.board[1][1] = 5;
    myBoard.board[1][2] = 3;
    myBoard.board[1][5] = 7;

    myBoard.board[2][1] = 6;
    myBoard.board[2][4] = 1;
    myBoard.board[2][5] = 9;
    myBoard.board[2][6] = 5;

    myBoard.board[3][2] = 9;
    myBoard.board[3][3] = 8;
    myBoard.board[3][8] = 6;

    myBoard.board[4][1] = 8;
    myBoard.board[4][5] = 6;
    myBoard.board[4][9] = 3;

    myBoard.board[5][1] = 4;
    myBoard.board[5][4] = 8;
    myBoard.board[5][6] = 3;
    myBoard.board[5][9] = 1;

    myBoard.board[6][1] = 7;
    myBoard.board[6][5] = 2;
    myBoard.board[6][9] = 6;
    
    myBoard.board[7][2] = 6;
    myBoard.board[7][7] = 2;
    myBoard.board[7][8] = 8;

    myBoard.board[8][4] = 4;
    myBoard.board[8][5] = 1;
    myBoard.board[8][6] = 9;
    myBoard.board[8][9] = 5;

    myBoard.board[9][5] = 8;
    myBoard.board[9][8] = 7;
    myBoard.board[9][9] = 9
    
    let count =0;
    for(let r=1; r<=9; r++) {
      for(let c=1; c<=9; c++) {
        if(myBoard.board[r][c] === 0) {
          myBoard.board[r][c] = userArray[count];
          count++;
        }
      }
    }
    console.log(myBoard.checkCol(5));
  })
})