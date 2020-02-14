var ballX = 0;
var ballXSpeed = 3;

var ballX2 = 0;
var ballXSpeed2 = 5;

var ballX3=0
var ballXSpeed3=3

function setup() {
  createCanvas(400, 400);
}

  function draw() {
  background(220);
  ellipse(ballX, 200, 20);
  ellipse(ballX2, 100, 40);
  ellipse(ballX3, 50, 60);


  ballX = ballX + ballXSpeed
  ballX2 = ballX2 + ballXSpeed2;
    ballX3=ballX3+ballXSpeed3;

  // bounce first ball
  if (ballX > width) {
    ballXSpeed = -ballXSpeed;
  }

  if (ballX < 0) {
    ballXSpeed = -ballXSpeed;
  }
 
  // bounce second ball
  if (ballX2 > width) {
    ballXSpeed2 = -ballXSpeed2;
  }

  if (ballX2 < 0) {
    ballXSpeed2 = -ballXSpeed2;
  }
  
  //bounce third ball
  if (ballX3> width) {
    ballXSpeed3=-ballXSpeed3;
  }    
    if (ballX3<0){
      ballXSpeed3 =-ballXSpeed3;
  }
}
