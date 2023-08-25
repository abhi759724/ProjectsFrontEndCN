const canvas = document.getElementById("main");
const display = canvas.getContext("2d");

// set the width and height of bounds display i.e in which ball will move

main.width = window.innerWidth;
main.height = window.innerHeight;

// set radius of ball
let ballRadius = 20;

// set the limited bounds of display where ball can move

// In X-direction
let ballX = Math.random() * (main.width - ballRadius * 2) + ballRadius;
let ballY = Math.random() * (main.height - ballRadius * 2) + ballRadius;

ballSpeed = 4;

function drawBall() {
  // to clear the rectangle

  display.clearRect(0, 0, main.width, main.height);

  //   condition to put circle in bounds

  if (ballX - ballRadius < 0) {
    ballX = ballRadius;
  } else if (ballX + ballRadius > main.width) {
    ballX = main.width - ballRadius;
  }
  if (ballY - ballRadius < 0) {
    ballY = ballRadius;
  } else if (ballY + ballRadius > main.height) {
    ballY = main.height - ballRadius;
  }

  // draw the circle
  display.beginPath();
  display.arc(ballX, ballY, ballRadius, 0, 360);
  display.fillStyle = "white";
  display.fill();
  display.closePath();
}

//  Another condition to put circle in bounds

function moveBall(e) {
  if (key["w"]) {
    ballY -= ballSpeed;
  }
  if (key["s"]) {
    ballY += ballSpeed;
  }
  if (key["a"]) {
    ballX -= ballSpeed;
  }
  if (key["d"]) {
    ballX += ballSpeed;
  }
  drawBall();
  requestAnimationFrame(moveBall);
}

const key = {};

window.addEventListener("keydown", (event) => {
  key[event.key] = true;
});
window.addEventListener("keyup", (event) => {
  key[event.key] = false;
});

function resize() {
  main.width = window.innerWidth;
  main.height = window.innerHeight;
  let ballX = Math.random() * (main.width - ballRadius * 2) + ballRadius;
  let ballY = Math.random() * (main.height - ballRadius * 2) + ballRadius;
  drawBall();
}

moveBall();
