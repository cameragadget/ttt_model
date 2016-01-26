console.log("main.js loaded!");


/* MODEL */

var won = false;
var currentPlayer = "X";
var board = [
"", "", "",  // 0, 1, 2
"", "", "",  // 3, 4, 5
"", "", ""   // 6, 7, 8
];

// 1. START THE GAME
// 2. PLAYER MOVE (CHANGES TURN)
//   inputs:
//    - whose turn it is,
//    - what cell
//
//   outcomes:
//    - fill in cell with the right player
//    - calculate if there's a winner
//    - turn changes

var move = function(cellIndex) {
  board[cellIndex] = currentPlayer;
  if (gameWon()) {
    won = true;
  } else {
    // NEW HOTNESS: TERNARY OPERATOR: DOES ALL OF THE BELOW CODE:   currentPlayer = (currentPlayer === "X" ? "O" : "X")//
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
  }
};


// 3. WINNING
var gameWon = function() {};
