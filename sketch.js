function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    stroke(255, 255, 255, 25);
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
  } else {
    fill(0, 0, 0);
  }
  rect(mouseX, mouseY, 50, 50);
}
