function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(230, 230, 250);
  noStroke();
  ellipse (mouseX, mouseY, 40, 49)
  fill(216,191,216)
  ellipse(mouseY, mouseX, 50, 49)
}