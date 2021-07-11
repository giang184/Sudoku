import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import {Sudoku} from './sudoku.js'




// const r1c3 = parseInt($("#13").val());
// console.log(r1c3);
$(document).ready(function() {
  $('#sudoku').submit(function(event) {
    event.preventDefault();
    let myBoard = new Sudoku();

    let userArray = [];
    
    $('input').each(function() {
      userArray.push(parseInt($(this).val()));
    })
    if(userArray.length < 29)
      alert("Please enter a number into every box and check again!")

    myBoard.board[1][1] = 8;
    myBoard.board[1][3] = 9;
    myBoard.board[1][4] = 3;
    myBoard.board[1][6] = 6;
    myBoard.board[1][7] = 7;
    myBoard.board[1][8] = 5;
    myBoard.board[1][9] = 2;

    myBoard.board[2][1] = 3;
    myBoard.board[2][3] = 2;
    myBoard.board[2][4] = 1;
    myBoard.board[2][6] = 5;
    myBoard.board[2][7] = 8;
    myBoard.board[2][9] = 4;

    myBoard.board[3][2] = 4;
    myBoard.board[3][3] = 7;
    myBoard.board[3][4] = 8;
    myBoard.board[3][5] = 2;
    myBoard.board[3][6] = 9;
    myBoard.board[3][8] = 6;
    myBoard.board[3][9] = 3;

    myBoard.board[4][1] = 2;
    myBoard.board[4][3] = 5;
    myBoard.board[4][6] = 8;
    myBoard.board[4][7] = 6;
    myBoard.board[4][8] = 3;

    myBoard.board[5][1] = 1;
    myBoard.board[5][3] = 6;
    myBoard.board[5][4] = 7;
    myBoard.board[5][6] = 3;
    myBoard.board[5][7] = 2;
    myBoard.board[5][9] = 8;

    myBoard.board[6][1] = 4;
    myBoard.board[6][3] = 3;
    myBoard.board[6][4] = 9;
    myBoard.board[6][6] = 2;
    myBoard.board[6][9] = 7;
    
    myBoard.board[7][1] = 7;
    myBoard.board[7][2] = 3;
    myBoard.board[7][5] = 8;
    myBoard.board[7][6] = 4;
    myBoard.board[7][8] = 2;
    myBoard.board[7][9] = 6;

    myBoard.board[8][1] = 6;
    myBoard.board[8][3] = 4;
    myBoard.board[8][4] = 2;
    myBoard.board[8][5] = 9;
    myBoard.board[8][6] = 7;
    myBoard.board[8][7] = 3;
    myBoard.board[8][8] = 8;

    myBoard.board[9][2] = 2;
    myBoard.board[9][4] = 6;
    myBoard.board[9][5] = 3;
    myBoard.board[9][8] = 7;
    
    let count =0;
    for(let r=1; r<=9; r++) {
      for(let c=1; c<=9; c++) {
        if(myBoard.board[r][c] === 0) {
          myBoard.board[r][c] = userArray[count];
          count++;
        }
      }
    }
    console.log(myBoard.board);
    console.log(myBoard.checker());
  })
})