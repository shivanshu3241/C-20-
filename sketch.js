
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){
  r = map(mouseX, 0, 600, 0, 255);
  g = map(mouseX, 0, 600, 100, 160);
  b = map(mouseX, 0, 600, 255, 0);
  background(r, 0, b);

  // ellipse
  fill(250, 118, 222);
  ellipse(mouseX, 200, 64, 64);
}