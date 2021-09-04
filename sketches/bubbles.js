let pointX,pointY;
let dots;

function setup(){
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255);
  pointX = random(width);
  pointY = random(height);
  dots = new Array(1500);
  for(i = 0; i < dots.length; i++){
    dots[i] = new Dot();
  }
}

function draw(){
  background(0);
  move();
  show();
}

class Dot {
  constructor(){
    this.start();
  }

  move() {
    if((this.x >= pointX-10) && (this.x <= pointX+10) && (this.y >= pointY-10) && (this.y <= pointY+10)){
      this.start();
    }
    this.angle = atan2(pointY - this.y, pointX - this.x);
    this.x += cos(this.angle)*this.speed;
    this.y += sin(this.angle)*this.speed;
  }

  show() {
    //stroke((this.speed-0.45)/(3.2-0.45)*(255-20) + 20)
    strokeWeight((this.speed-0.45)/(3.2-0.45)*(1));
    ellipse(this.x,this.y,this.size);
  }

  start(){
    this.x = random(-30,width+30);
    this.y = random(-30,height+30);
    this.speed = random(0.45,3.2);
    this.size = random(40,6);
  }
}

function mousePressed() {
  pointX = mouseX;
  pointY = mouseY;
}

function move() {
  for(i = 0; i < dots.length; i++){
    dots[i].move();
  }
}

function show() {
  for(i = 0; i < dots.length; i++){
    dots[i].show();
  }
}

function sigmoidX(k) {
  return (width+(10))/(2+exp(k));
}
function sigmoidY(k) {
  return height/(1+exp(k));
}
