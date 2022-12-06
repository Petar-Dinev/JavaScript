function chessBoard(num) {
  let result = '<div class="chessboard">';
  for (let i = 0; i < num; i++) {
    result += "\n" + "  <div>";
    for (let k = 0; k < num; k++) {
      if (i % 2 != 0) {
        if (k % 2 != 0) {
          result += "\n" + '    <span class="black"></span>';
        } else {
          result += "\n" + '    <span class="white"></span>';
        }
      } else {
        if (k % 2 != 0) {
          result += "\n" + '    <span class="white"></span>';
        } else {
          result += "\n" + '    <span class="black"></span>';
        }
      }
    }
    result += "\n" + "  </div>";
  }
  result += "\n" + "</div>";
  console.log(result);
}

chessBoard(6);
