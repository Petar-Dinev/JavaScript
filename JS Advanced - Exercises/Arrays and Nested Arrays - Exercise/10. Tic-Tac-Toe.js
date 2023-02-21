function solve(input) {
  let FP = "X";
  let SP = "O";
  let turn = 0;
  let isWon = false;
  let fullBoard = false;
  let board = [
    ["false", "false", "false"],
    ["false", "false", "false"],
    ["false", "false", "false"],
  ];
  let playerWon = "";

  for (let move of input) {
    let [row, col] = move.split(" ").map(Number);
    if (board[row][col] == "false") {
      turn++;
      if (turn % 2 != 0) {
        board[row][col] = FP;
      } else {
        board[row][col] = SP;
      }
    } else {
      console.log("This place is already taken. Please choose another!");
      continue;
    }

    for (let i = 0; i < board.length; i++) {
      if (board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
        playerWon = board[i][0];
        if (playerWon != "false") {
          isWon = true;
          break;
        }
      }
      if (board[0][i] == board[1][i] && board[1][i] == board[2][i]) {
        playerWon = board[0][i];
        if (playerWon != "false") {
          isWon = true;
          break;
        }
      }
    }
    if (isWon) {
      break;
    }
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
      playerWon = board[0][0];
      if (playerWon != "false") {
        isWon = true;
        break;
      }
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
      playerWon = board[0][2];
      if (playerWon != "false") {
        isWon = true;
        break;
      }
    }

    if (
      !board[0].includes("false") &&
      !board[1].includes("false") &&
      !board[2].includes("false")
    ) {
      fullBoard = true;
      break;
    }
  }

  if (isWon && playerWon) {
    console.log(`Player ${playerWon} wins!`);
  } else {
    console.log("The game ended! Nobody wins :(");
  }

  for (let el of board) {
    console.log(el.join("\t"));
  }
}

// solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);
// solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);
solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
