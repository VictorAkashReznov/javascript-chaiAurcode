let btn = document.querySelectorAll(".button-container button");
let imgbox = [
  '<img src="sizer.jpeg"/>',
  '<img src="paper.png"/>',
  '<img src="Rock.jpeg"/>',
];
let arr = ["Seizer", "Paper", "Rock"];
Array.from(btn).forEach((Element) => {
  Element.addEventListener("click", () => {
    let k = Math.random() * 10;
    k = Math.floor(k % 3);
    let z = 0;
    for (const obj of arr) {
      if (Element.innerText === obj) {
        break;
      } else {
        z++;
      }
    }
    document.querySelector(".imgbox1").innerHTML = imgbox.at(k);
    document.querySelector(".imgbox2").innerHTML = imgbox.at(z);
    let z1 = Number(
      document.querySelector(".player1 .scoreCard div span").innerText
    );
    let z2 = Number(
      document.querySelector(".player2 .scoreCard div span").innerText
    );
    console.log(k);
    console.log(z);
    if ((z == 0 && k == 1) || (z == 1 && k == 2) || (z == 2 && k == 0)) {
      z2++;
      document.querySelector(".player2 .scoreCard div span").innerText = z2;
    } else if ((k == 0 && z == 1) || (k == 1 && z == 2) || (k == 2 && z == 0)) {
      z1++;
      document.querySelector(".player1 .scoreCard div span").innerText = z1;
    }
  });
});
