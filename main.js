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
//   inputs:
//    - current player, board, won or not
//
//   output:
//    - board is emptied, player is X, won is false

var startGame = function() {
won = false;
player = "X";
board = [
"", "", "",
"", "", "",
"", "", ""
];
};




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
//   inputs:
//     - board
//
//   outputs:
//    - true or false
//
// you can replace "if" with "return" and eliminate
// the return true/false down below
// because it's only ever returning true/false!!!
//

var gameWon = function() {
  if (((board[0] === board[1]) && (board[0] === board[2]) && (board[0] !== "")) ||
     ((board[3] === board[4]) && (board[3] === board[5]) && (board[4] !== "")) ||
     ((board[6] === board[7]) && (board[6] === board[7]) && (board[6] !== "")) ||
     ((board[0] === board[3]) && (board[0] === board[6]) && (board[0] !== "")) ||
     ((board[1] === board[4]) && (board[1] === board[8]) && (board[1] !== "")) ||
     ((board[2] === board[5]) && (board[3] === board[8]) && (board[2] !== "")) ||
     ((board[0] === board[4]) && (board[8] === board[2]) && (board[0] !== "")) ||
     ((board[6] === board[4]) && (board[6] === board[2]) && (board[6] !== "")))
    {
      return true;
    } else {
    return false;
  }
};


// RENDER OUR VIEW //

var render = function() {
  // render turn counter component
  var turnEl = document.getElementById("turn");
  turnEl.textContent = "Turn: " + currentPlayer;

  // render winner component
  var winnerEl = document.getElementById("winner");
  if (!won) {
    winnerEl.textContent = "Winner: ? ";
  } else {
    winnerEl.textContent = "Winner: " + currentPlayer;
  };


 // render board component

 // var cell0El = document.getElementById("cell0");
 // cell0EL.textContent = board[0];

 document.getElementById("cell0").textContent = board[0];
 document.getElementById("cell1").textContent = board[1];
 document.getElementById("cell2").textContent = board[2];
 document.getElementById("cell3").textContent = board[3];
 document.getElementById("cell4").textContent = board[4];
 document.getElementById("cell5").textContent = board[5];
 document.getElementById("cell6").textContent = board[6];
 document.getElementById("cell7").textContent = board[7];
 document.getElementById("cell8").textContent = board[8];

};

///
// User Interaction
//
//

document.getElementById("restart")
        .addEventListener("click", function(evt) {
            startGame();
            render();
            });

document.getElementById("board")
        .addEventListener("click", function(evt) {

var cellEl = evt.target;
var cellIndex = cellEl.id.slice(-1);

      move(cellIndex);
      render();
});
