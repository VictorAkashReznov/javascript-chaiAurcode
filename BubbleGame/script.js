let makeBubble = function () {
  let clutter = document.querySelector("#pbtm");
  let str = "";
  let p = 112;
  for (let index = 0; index < p; index++) {
    let k = Math.floor(Math.random() * 10);
    str += `<div class="bubble">${k}</div>`;
  }
  clutter.innerHTML = str;
};

let runTimer = function (time) {
  let timeinterval = setInterval(() => {
    time--;
    document.querySelector("#timer").textContent = time;
    if (time == 0) {
      let x = document.querySelector("#score").textContent;
      document.querySelector(
        "#pbtm"
      ).innerHTML = `<h1>Game over</h1> <h1>Your score ${x}</h1> `;
      clearInterval(timeinterval);
    }
  }, 1000);
};

function incresaeScore() {
  let score = Number(document.querySelector("#score").textContent);
  score += 10;
  document.querySelector("#score").textContent = score;
}

function generateRandom() {
  let randNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = randNumber;
}

makeBubble();
runTimer(60);

document.querySelector("#pbtm").addEventListener("click", (details) => {
  let k = document.querySelector("#hit").textContent;
  if (details.target.textContent === k) {
    incresaeScore();
    makeBubble();
    generateRandom();
  }
});
