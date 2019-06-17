const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-board");

  game.setup();
}

function draw() {
  game.draw();
}

function mousePressed() {
  game.bird.jump();
}

function keyPressed() {
  if (keyCode === 32) game.bird.jump();
}