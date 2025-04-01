// xDir: 공의 진행 방향을 저장하는 변수, +1은 오른쪽, -1은 왼쪽
// 공의 방향을 변경해야한다. 이를 위해서는 공의 방향을 저장하는 변수를 만들어야한다.
let xPos, xDir;

// diam: 공의 지름
// 변수를 사용하는 연습을 해보자.
let diam; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  xPos = width / 2;
  xDir = 1;
  diam = 50;
}

function draw() {
  background(128);
  
  // ball drawing and movement
  ellipse(xPos, 50, diam, diam);
  xPos = xPos + xDir; // xPos 변수에 xDir 값을 더함으로써 공이 xDir 방향으로 움직이게 한다.
  
  // left side collision 
  if (xPos - diam/2 < 0) {
    xDir = xDir * -1; // xDir에 -1을 곱하면 xDir의 부호가 바뀜에 따라서, 공의 방향이 바뀌게 된다.
  }
  // right side collision
  if (xPos + diam/2 > width){
    xDir *=  -1; //  *= 은 ‘곱해서 넣는다’라는 의미로, 여기서는 xDir = xDir * -1; 과 동일한 의미이다.
  }
}