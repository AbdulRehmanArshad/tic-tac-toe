// function pri() {
//   var b1 = (document.getElementById("b1").value = "Q");

//   console.log(b1);
// }

function myfunc() {
  // Setting DOM to all boxes or input field

  let arr = [];
  for (let i = 0; i < 9; i++) {
    arr[i] = document.getElementById(`b${i + 1}`).value;
    console.log(arr[i]);
  }
}

if (arr[0] == arr[1] && arr[1] == arr[2]) {
  document.getElementById("print").innerHTML =
    "Congragulation Player X won Enjoy  the Game";

  window.alert("Congragulation Player X won");
} else if (arr[3] == arr[4] && arr[4] == arr[5]) {
  document.getElementById("print").innerHTML =
    "Congragulation Player X won Enjoy  the Game";
  window.alert("Congragulation Player X won");
} else if (arr[6] == arr[7] && arr[7] == arr[8]) {
  document.getElementById("print").innerHTML =
    "Congragulation Player X won Enjoy  the Game";
  window.alert("Congragulation Player X won");
} else if (arr[1] == arr[4] && arr[4] == arr[7]) {
  document.getElementById("print").innerHTML =
    "Congragulation Player X won Enjoy  the Game";
  window.alert("Congragulation Player X won");
} else if (arr[2] == arr[5] && arr[5] == arr[8]) {
  document.getElementById("print").innerHTML =
    "Congragulation Player X won Enjoy  the Game";
  window.alert("Congragulation Player X won");
} else if (arr[3] == arr[6] && arr[6] == arr[9]) {
  document.getElementById("print").innerHTML =
    "Congragulation Player X won Enjoy  the Game";
  window.alert("Congragulation Player X won");
} else if (arr[1] == arr[5] && arr[5] == arr[9]) {
  document.getElementById("print").innerHTML =
    "Congragulation Player X won Enjoy  the Game";
  window.alert("Congragulation Player X won");
} else if (arr[3] == arr[5] && arr[5] == arr[7]) {
  document.getElementById("print").innerHTML =
    "Congragulation Player X won Enjoy  the Game";
  window.alert("Congragulation Player X won");
} else {
  document.getElementById("print").innerHTML =
    "Congragulation Player 0 won Enjoy  the Game";
  window.alert("Congragulation Player 0 won");
}

// ...................................................................
//       document.getElementById("print").innerHTML =
//     "Congragulation Player X won Enjoy  the Game";
//   window.alert("Congragulation Player X won");

//   else if (
//     (b1 == "0" || b1 == "X") &&
//     (b2 == "0" || b2 == "X") &&
//     (b3 == "0" || b3 == "X") &&
//     (b4 == "0" || b4 == "X") &&
//     (b5 == "0" || b5 == "X") &&
//     (b6 == "0" || b6 == "X") &&
//     (b7 == "0" || b7 == "X") &&
//     (b8 == "0" || b8 == "X") &&
//     (b9 == "0" || b9 == "X")
//   ) {
//     window.alert("Match Draw Enjoy the Game !");
//     document.getElementById("print").innerHTML = "Match Tie Enjoy the Game !";
//   } else {
//     //  Printing Result
//     if (flag == 1) {
//       document.getElementById("print").innerHTML = "Player X Turn";
//     } else {
//       document.getElementById("print").innerHTML = "Player 0 Turn";
//     }
//   }
// }

//  reset game
// function myfunc_2() {
//   location.reload();
//   document.getElementById("b1").value = "";
//   document.getElementById("b2").value = "";
//   document.getElementById("b3").value = "";
//   document.getElementById("b4").value = "";
//   document.getElementById("b5").value = "";
//   document.getElementById("b6").value = "";
//   document.getElementById("b7").value = "";
//   document.getElementById("b8").value = "";
//   document.getElementById("b9").value = "";
// }

// // Value turn plyer
// // and put accordingly value X or 0
// flag = 1;
function myfunc_3(element) {
  if (flag == 1) {
  element.value = flag == 1 ? "X" : "0";
  element.disabled = true;

}function myfunc() {
  // Setting DOM to all boxes or input field
  let array = [];
  for (let i = 0; i < 9; i++) {
    array[i] = document.getElementById(`b${i + 1}`).value;
  }

  // 0 1 2
  // 3 4 5
  // 6 7 8
  for (let i = 0; i < 9; i += 3) {
    console.log(i);
    if (
      array[i] != "" &&
      array[i] == array[i + 1] &&
      array[i + 1] == array[i + 2]
      // ||
      // (array[3] != "" && array[3] == array[4] && array[4] == array[5]) ||
      // (array[6] != "" && array[6] == array[7] && array[7] == array[8])
      // ||
      // (array[i] == array[i + 3] && array[i + 3] == array[i + 6]) ||
      // (array[i + 1] == array[i + 4] && array[i + 4] == array[i + 7]) ||
      // (array[i + 2] == array[i + 5] && array[i + 1] == array[i + 8]) ||
      // (array[i] == array[i + 4] && array[i + 4] == array[i + 8]) ||
      // (array[i + 2] == array[i + 4] && array[i + 4] == array[i + 6])
    ) {
      document.getElementById(
        "print"
      ).innerHTML = `Congratulation Player ${array[i]} won Enjoy  the Game///`;
      window.alert(`Congratulation Player ${array[i]} won Enjoy  the Game///`);
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

//   // } else {
//   //   document.getElementById("b1").value = "0";
//   //   document.getElementById("b1").disabled = true;
//   //   flag = 1;
//   // }
// }

// function myfunc_4() {
//   if (flag == 1) {
//     document.getElementById("b2").value = "X";
//     document.getElementById("b2").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("b2").value = "0";
//     document.getElementById("b2").disabled = true;
//     flag = 1;
//   }
// }

// function myfunc_5() {
//   if (flag == 1) {
//     document.getElementById("b3").value = "X";
//     document.getElementById("b3").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("b3").value = "0";
//     document.getElementById("b3").disabled = true;
//     flag = 1;
//   }
// }

// function myfunc_6() {
//   if (flag == 1) {
//     document.getElementById("b4").value = "X";
//     document.getElementById("b4").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("b4").value = "0";
//     document.getElementById("b4").disabled = true;
//     flag = 1;
//   }
// }

// function myfunc_7() {
//   if (flag == 1) {
//     document.getElementById("b5").value = "X";
//     document.getElementById("b5").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("b5").value = "0";
//     document.getElementById("b5").disabled = true;
//     flag = 1;
//   }
// }

// function myfunc_8() {
//   if (flag == 1) {
//     document.getElementById("b6").value = "X";
//     document.getElementById("b6").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("b6").value = "0";
//     document.getElementById("b6").disabled = true;
//     flag = 1;
//   }
// }

// function myfunc_9() {
//   if (flag == 1) {
//     document.getElementById("b7").value = "X";
//     document.getElementById("b7").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("b7").value = "0";
//     document.getElementById("b7").disabled = true;
//     flag = 1;
//   }
// }

// function myfunc_10() {
//   if (flag == 1) {
//     document.getElementById("b8").value = "X";
//     document.getElementById("b8").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("b8").value = "0";
//     document.getElementById("b8").disabled = true;
//     flag = 1;
//   }
// }

// function myfunc_11() {
//   if (flag == 1) {
//     document.getElementById("b9").value = "X";
//     document.getElementById("b9").disabled = true;
//     flag = 0;
//   } else {
//     document.getElementById("b9").value = "0";
//     document.getElementById("b9").disabled = true;
//     flag = 1;
//   }
// }
