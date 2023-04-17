let ang = 0;
let len;
let dang;

function setup() {
    createCanvas(1000, 800);
    len = width/4;
    dang = 0.0125;
    frameRate(7);
}

function draw() {
    background(51);
    stroke(0, 255, 0);
    translate(width/2, height);
    branch(len);
    ang += dang;
    if (ang >= PI/5) noLoop();
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 2) { 
      push();
      rotate(ang);
      branch(len*0.67);
      pop();
      push();
      rotate(-ang);
      branch(len*0.67);
      pop();
    }
  }