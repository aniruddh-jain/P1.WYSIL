const game = new Game();
const timer = new Timer();

let bgimg;

function preLoad() {
  bgimg = loadimage("assets/fish.jpg");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-board");

  //background("#7F949E");
  game.setup();
  //image = (bgimg, 0, 0, WIDTH, HEIGHT);
}

function draw() {
  clear();
  //background = (img src='http://www.52dazhew.com/data/out/160/586824408-minimal-desktop-wallpapers.jpg');
  image = (bgimg, 0, 0, WIDTH, HEIGHT);
  game.draw();
  timer.draw();
}

function gameOver() {
  if (timer.seconds == 0) {
    text("GAME OVER", width / 2, height * 0.7);
    // Add the condition for 7 cards in deck later.
  }
}

// function keyPressed() {
//   if (keyCode === 32) {
//   }
// }
