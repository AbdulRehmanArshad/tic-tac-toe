function myfunc() {
  // Setting DOM to all boxes or input field
  let array = [];
  for (let i = 0; i < 9; i++) {
    array[i] = document.getElementById(`b${i + 1}`).value;
  }

  // 0 1 2
  // 3 4 5
  // 6 7 8
  for (let i = 0; i < 9; i++) {
    if (
      (array[i] == "X" && array[i + 1] == "X" && array[i + 2] == "X") ||
      (array[i] == "X" && array[i + 3] == "X" && array[i + 6] == "X") ||
      (array[i + 3] == "X" && array[i + 4] == "X" && array[i + 5] == "X") ||
      (array[i + 1] == "X" && array[i + 4] == "X" && array[i + 7] == "X") ||
      (array[i + 6] == "X" && array[i + 7] == "X" && array[i + 8] == "X") ||
      (array[i + 2] == "X" && array[i + 5] == "X" && array[i + 8] == "X") ||
      (array[i] == "X" && array[i + 4] == "X" && array[i + 8] == "X") ||
      (array[i + 2] == "X" && array[i + 4] == "X" && array[i + 6] == "X")
    ) {
      document.getElementById("print").innerHTML =
        "Congratulation Player X won Enjoy  the Game";
      window.alert("Congratulation Player X won");
    } else if (
      (array[i] == "0" && array[i + 1] == "0" && array[i + 2] == "0") ||
      (array[i] == "0" && array[i + 3] == "0" && array[i + 6] == "0") ||
      (array[i + 3] == "0" && array[i + 4] == "0" && array[i + 5] == "0") ||
      (array[i + 1] == "0" && array[i + 4] == "0" && array[i + 7] == "0") ||
      (array[i + 6] == "0" && array[i + 7] == "0" && array[i + 8] == "0") ||
      (array[i + 2] == "0" && array[i + 5] == "0" && array[i + 8] == "0") ||
      (array[i] == "0" && array[i + 4] == "0" && array[i + 8] == "0") ||
      (array[i + 2] == "0" && array[i + 4] == "0" && array[i + 6] == "0")
    ) {
      document.getElementById("print").innerHTML =
        "Congratulation Player 0 won Enjoy  the Game";
      window.alert("Congratulation Player 0 won");
    } else if (
      (array[0] == "0" || array[0] == "X") &&
      (array[1] == "0" || array[1] == "X") &&
      (array[2] == "0" || array[2] == "X") &&
      (array[3] == "0" || array[3] == "X") &&
      (array[4] == "0" || array[4] == "X") &&
      (array[5] == "0" || array[5] == "X") &&
      (array[6] == "0" || array[6] == "X") &&
      (array[7] == "0" || array[7] == "X") &&
      (array[8] == "0" || array[8] == "X")
    ) {
      window.alert("Match Draw Enjoy the Game !");
      document.getElementById("print").innerHTML = "Match Tie Enjoy the Game !";
    } else {
      //  Printing Result
      if (flag == 1) {
        document.getElementById("print").innerHTML = "Player X Turn";
      } else {
        document.getElementById("print").innerHTML = "Player 0 Turn";
      }
    }
  }
}
//  reset game
function myfunc_2() {
  location.reload();
}

// Value turn plyer
// and put accordingly value X or 0
flag = 1;
function myFunction(element) {
  let ele = document.getElementById(element);
  if (flag == 1) {
    ele.value = flag == 1 ? "X" : "0";
    ele.disabled = true;
    flag = 0;
  } else {
    ele.value = flag == 0 ? "0" : "X";
    ele.disabled = true;
    flag = 1;
  }
}
