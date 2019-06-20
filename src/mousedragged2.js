var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

var x, y, w, h; // Location and size
var offsetX, offsetY; // Mouseclick offset

function setup() {
  createCanvas(640, 360);

  // Starting location
  x = 100; // Im not sure if we need this.
  y = 100; // Should we link this to the x and y of the other one
  // Dimensions
  w = 200;
  h = 200;
}

function draw() {
  background(255);

  // Is mouse over object
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  } else {
    rollover = false;
  }

  // Is mouse over the card secetions [ANI]
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  } else {
    rollover = false;
  }

  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

  stroke(0);
  // Different fill based on state
  if (dragging) {
    fill(50);
  } else if (rollover) {
    fill(100);
  } else {
    fill(175, 200);
  }
  rect(x, y, w, h);
}

function mousePressed() {
  // Did I click on the rectangle?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x - mouseX;
    offsetY = y - mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
  // Ill need some conditions to make sure that the dragging if done snaps to the closest x and y. Possibly need an array with those coordinate and match them.
}
