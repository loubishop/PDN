let rectH = 300;
let Square = false;
let blueoval = false;

function setup() {
  createCanvas(600, 750);
  rectMode(CENTER);
}

function draw() {
  if (mouseX > 200 && mouseY > 200) {
    background(44, 77, 107);
  } else {
    background(224, 127, 74);
  }

  if (mouseIsPressed) {
    rectH = 200;
  } else {
    rectH = 300;
  }

  if (keyIsPressed && key === ' ') {
    Square = true;
  } else {
    Square = false;
  }

  if (keyIsPressed && key === 'b') {
    blueoval = true;
  } else {
    blueoval = false;
  }

  background(44, 77, 107);
  point(100, 100);
  point(100, 300);

  stroke(600);
  line(0, 0, 600, 750);
  line(600, 0, 0, 750);
  line(300, 0, 300, 750);
  line(0, 375, 600, 375);

  if (Square) {
    fill(255, 182, 193); // light pink
    rect(300, 375, 300, 300);
  } else {
    fill(0, 0, 0);
    ellipse(300, 375, 200, 200);
  }

  fill(126, 71, 214);
  triangle(300, 30, 150, 224, 450, 224);

  if (blueoval) {
    fill(0, 0, 255); // strong blue
    ellipse(300, 690, 200, 100);
    ellipse(300, 580, 200, 100);
  } else {
    fill(245, 66, 164);
    ellipse(300, 690, 200, 100);
    ellipse(300, 580, 200, 100);
  }
}