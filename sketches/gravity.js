let width = 1300;
let height = 550;
let pointX,pointY;
let dots;

function setup(){
  createCanvas(width, height);
  noFill();
  stroke(255);
  pointX = random(width);
  pointY = random(height);
  dots = new Array(450);
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
    this.x = random(width+30);
    this.y = random(height+30);
    this.speedX = random(0.5,2.1);
    this.speedY = random(0.25,1.5);
    this.size = random(6,35);
  }

  move() {
    if((this.x >= pointX-10) && (this.x <= pointX+10) && (this.y >= pointY-10) && (this.y <= pointY+10)){
      this.x = random(width+30);
      this.y = random(height+30);
    }
    this.angle = atan2(pointY - this.y, pointX - this.x);
    this.x += cos(this.angle)*this.speedX;
    this.y += sin(this.angle)*this.speedY;
  }

  show() {
    ellipse(this.x,this.y,this.size);
  }
}

function move(){
  for(i = 0; i < dots.length; i++){
    dots[i].move();
  }
}

function show(){
  for(i = 0; i < dots.length; i++){
    dots[i].show();
  }
}
