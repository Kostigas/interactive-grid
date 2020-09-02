
var resolution = 20;
var squareSize;
var r = 0.0;
var g = 0.0;
var b = 0.0;
var angle = 0.0;
var distance;
var maxDistance;
var up;
var a;
var windowWidth = window.screen.width;
var windowHeight = window.screen.height;

function setup() {
  rectMode(CENTER);
  createCanvas(windowWidth, windowHeight);
  squareSize = width/resolution;
}


function draw() {
  background(0);
  for (var i = 0; i < resolution; i++)
  {
    var y = squareSize/2 + i * squareSize;
    for (var j = 0; j < resolution; j++)
    {
      g = map(i,0,resolution,0,255);
      r = map(j,0,resolution,0,255);
      b = map(mouseX,0,width,0,255);
      a = map(mouseX,0,width,100,255);
      var x = squareSize/2+j*squareSize;
      
      distance = dist(mouseX,mouseY, x, y);
      maxDistance = dist(0,0,width,height);
      angle = map(distance,0,maxDistance,0,PI/2);
      up = map(distance,0,maxDistance,0.3,2);
      push();
      translate(x,y);
      rotate(angle);
      scale(up);
      stroke(r,g,b,a);
      fill(r,g,b,a);
      rect(0,0,squareSize,squareSize);
      pop();
    }
  }
}