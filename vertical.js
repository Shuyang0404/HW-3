var x=0;
var y=0;
var ballYSpeed=3

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();
  

  fill (0, 0, 225);
  ellipse (x+70, y, 15);
  
  fill (225, 0, 0)
  ellipse(x+100, y, 20);
  
  y=y+ballYSpeed
  
if (y > 400) {
    ballYSpeed= -ballYSpeed;
  }

  if (y < 0) {
    ballYSpeed = -ballYSpeed;
  }
  }
