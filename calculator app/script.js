console.log("Welcome to MyClaculator.Com");
document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("disp1").innerText = "";
  document.getElementById("disp2").innerText = "";
  document.getElementById("disp3").innerText = "";
});

let boxtext = document.getElementsByClassName("boxtext");
Array.from(boxtext).forEach((Element) => {
  let a = document.querySelector("#disp1");
  let b = document.querySelector("#disp2");
  let c = document.querySelector("#disp3");
  Element.addEventListener("click", () => {
    if (b.innerText === "") {
      if (a.innerText.length > 10) {
        alert("length is very large ");
      } else {
        a.innerText += Element.innerText;
      }
    } else {
      c.innerText += Element.innerText;
    }
  });
});
let b = document.querySelector("#disp2");
let c = document.querySelectorAll(".op");
Array.from(c).forEach((Element) => {
  Element.addEventListener("click", () => {
    if (b.innerText === "") {
      b.innerText += Element.innerText;
    } else {
      alert("operator is already added");
    }
  });
});

let d = document.querySelector("#equal");
let d1 = document.querySelector("#disp1");
let d2 = document.querySelector("#disp2");
let d3 = document.querySelector("#disp3");
d.addEventListener("click", function () {
  if (d1.innerText != "" && d1.innerText != "" && d1.innerText != "") {
    let num1 = Number(d1.innerText);
    let num2 = Number(d3.innerText);
    if (d2.innerText === "+") {
      d1.innerText = num1 + num2;
    } else if (d2.innerText === "-") {
      d1.innerText = num1 - num2;
    } else if (d2.innerText === "*") {
      d1.innerText = num1 * num2;
    } else if (d2.innerText === "/") {
      d1.innerText = num1 / num2;
    } else if (d2.innerText === "%") {
      d1.innerText = num1 % num2;
    }
    d3.innerText = "";
    d2.innerText = "";
  } else {
    alert(" Condition to apply operator is not applied ");
  }
});
