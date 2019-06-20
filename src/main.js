const game = new Game();
const timer = new Timer();
let canvas;
let bgimg;

function preload() {
  bgimg = loadImage("assets/fish.jpg");
}

function setup() {
  canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-board");
  //background("#7F949E");
  game.setup();
}

function draw() {
  clear();
  image(bgimg, 0, 0, WIDTH, HEIGHT);
  game.draw();
  timer.draw();

  gameOver();
}

function gameOver() {
  if (timer.seconds === 0 || game.finalistArr.length === 7) {
    text("GAME OVER", WIDTH / 2, HEIGHT / 2);
    game.drawCharts();
    canvas.hide();
    noLoop();
    // Add the condition for 7 cards in deck later.
  }
}

function mousePressed() {
  game.mousePressed();
}
