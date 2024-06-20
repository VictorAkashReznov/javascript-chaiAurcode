let turn = "X";
let boxes = document.getElementsByClassName("box");
let nextmove = new Audio("nextMove.mp3");
function winningLogic() {
  let boxtext = document.querySelectorAll(".boxtext");
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [0, 3, 6],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  let b1 = 0;
  arr.forEach((Element) => {
    if (
      boxtext[Element[0]].innerText === boxtext[Element[1]].innerText &&
      boxtext[Element[1]].innerText === boxtext[Element[2]].innerText &&
      boxtext[Element[0]].innerText != ""
    ) {
      b1 = 1;
    }
  });
  return b1;
}
let logic = 0;
Array.from(boxes).forEach((Element) => {
  let boxtext = Element.querySelector(".boxtext");
  Element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      nextmove.play();
      if (logic == 1) {
      } else if (winningLogic() == 1) {
        logic = 1;
        document.querySelector(".info div h1").innerText = turn + " Wins ";
        turn = "";
      } else {
        turn = turn === "X" ? "O" : "X";
        document.querySelector(".info div h1").innerText = "Turn for " + turn;
      }
    }
  });
});
document.querySelector(".reset").addEventListener("click", () => {
  nextmove.play();
  document.querySelectorAll(".boxtext").forEach((Element) => {
    Element.innerText = "";
  });
  document.querySelector(".info div h1").innerText = "Turn for X";
  turn = "X";
  logic = 0;
});
