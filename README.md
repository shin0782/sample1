let xPos = 50;
let aPos = 550;

function setup() {
  createCanvas(600, 600);
  console.log("과제 잘해보자")
}

function draw() {
  background(0);
  
  stroke(0);
  fill(255);
  rect(450, 0, 300, 600);
  
  line(600, 0, 600, 600);
  
  stroke(255, 0, 0);
  strokeWeight(3);
  rect(100, 100, 400, 400);
  
  fill(0);
  rect(260, 100, 240, 400);
  
  fill(255);
  stroke('#0000ff');
  strokeWeight(3);
  rect(200, 200, 200, 200);
  
  fill(0);
  rect(200, 200, 100, 200);
  
  stroke(0, 255, 0);
  strokeWeight(3);
  rect(250, 250, 100, 100);
  
  fill(255);
  rect(250, 250, 70, 100);
  
  fill(0);
  stroke('#ffff00');
  strokeWeight(3);
  rect(275, 275, 50, 50);
  
  point(300, 300);
  
  stroke('#fff0f5');
  ellipse(xPos, 50, 50, 50);
  xPos = xPos + 0.02;
  
  fill(255);
  stroke('#fff0f5');
  ellipse(aPos, 550, 50, 50);
  aPos = aPos - 0.02;
}
