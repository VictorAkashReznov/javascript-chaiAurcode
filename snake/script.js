// game constants

let inputDirn = { x: 0, y: 0 };
let speed = 5;
let lastPainttime = 2;

let score = 0;
let snakearr = [{ x: 13, y: 15 }];
let food = { x: 2, y: 2 };
// game function

let main = (currentTime) => {
  window.requestAnimationFrame(main);
  if ((currentTime - lastPainttime) / 1000 < 1 / speed) {
    return;
  }
  lastPainttime = currentTime;
  gameEngine();
  //   console.log(currentTime);
};

let isCollide = (sarr) => {
  for (let i = 1; i < sarr.length; i++) {
    if (sarr[0].x == sarr[i].x && sarr[0].y == sarr[i].y) {
      return true;
    }
  }
  if (sarr[0].x < 0 || sarr[0].x >= 18 || sarr[0].y < 0 || sarr[0].y >= 18) {
    return true;
  }

  return false;
};

let gameEngine = () => {
  // part1: updatind the snake array & food

  if (isCollide(snakearr)) {
    inputDirn = { x: 0, y: 0 };
    alert("Game Over Press any key to play again");
    snakearr = [{ x: 13, y: 15 }];
    score = 0;
    document.querySelector("#score").textContent = "Score:" + score;
  }
  if (snakearr[0].y === food.y && snakearr[0].x === food.x) {
    // if you have eaten the food increment the score and regenerate the food
    score++;
    document.querySelector("#score").textContent = "Score:" + score;
    snakearr.unshift({
      x: snakearr[0].x + inputDirn.x,
      y: snakearr[0].y + inputDirn.y,
    });

    let a = 2;
    let b = 15;
    food = {
      x: 2 + Math.round(a + (b - a) * Math.random()),
      y: 2 + Math.round(a + (b - a) * Math.random()),
    };
  }

  // move the snake
  for (let i = snakearr.length - 2; i >= 0; i--) {
    snakearr[i + 1] = { ...snakearr[i] };
  }

  snakearr[0].x += inputDirn.x;
  snakearr[0].y += inputDirn.y;

  // part2: Display the snake and food
  // display the snake
  let board = document.getElementById("board");
  board.innerHTML = "";
  snakearr.forEach((e, index) => {
    let snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;

    if (index == 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    board.appendChild(snakeElement);
  });
  console.log("game engine is running");

  // display the food
  let foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
};

// main logic start here
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  //   inputDirn = { x: 0, y: 1 };
  switch (e.key) {
    case "ArrowUp":
      inputDirn.x = 0;
      inputDirn.y = -1;
      console.log("ArrowUp");
      break;

    case "ArrowDown":
      inputDirn.x = 0;
      inputDirn.y = 1;
      console.log("ArrowDown");
      break;

    case "ArrowLeft":
      inputDirn.x = -1;
      inputDirn.y = 0;
      console.log("ArrowLeft");
      break;

    case "ArrowRight":
      inputDirn.x = 1;
      inputDirn.y = 0;
      console.log("ArrowRight");
      break;

    default:
      console.log(e.key);
      break;
  }
});
