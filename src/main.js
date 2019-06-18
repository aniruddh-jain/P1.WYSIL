const game = new Game();

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("game-board");
  background = "#7F949E";
  game.setup();
}

function draw() {
  game.draw();
}

/*
function keyPressed() {
  if (keyCode === 32) game.bird.jump();
}
*/
