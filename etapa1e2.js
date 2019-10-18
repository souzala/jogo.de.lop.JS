var x = 190
var y = 370

function setup() {
  createCanvas(400,400);
}
function draw() {
  background(20);
  
  if (keyIsDown(RIGHT_ARROW)) {
    x= x+ 5
  }
  if (keyIsDown(LEFT_ARROW)) {
    x = x - 5
  }
  
  rect(x,y,30,30);
  ellipse(200,25,50,50);
}
