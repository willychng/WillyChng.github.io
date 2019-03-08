let a,ball,ox,oy,r,isOrbit,friction,auto;
let rc = 255;
let bc = 0;
let gc = 255;
let isLeft,isRight,isUp,isDown = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ox = width/2;
  oy = height/2;
  friction = -0.1; 
  isOrbit = 1;
  ball = createVector(random(width),random(height));
  auto = 1;
	ball.speed = 0;
  ball.vel = createVector(0,0);
  ball.acc = 0;
	ball.rotation = 1;
  r = ((ball.x-ox)**2 + (ball.y-oy)**2)**0.5;
}

function draw() {
	prevA = a+PI/2;
  ball.acc = 0;
  if(isOrbit)	if(auto) ball.acc += 0.2;
  if(isUp) ball.acc += 0.2;
  if(isDown) ball.acc += -0.2;
  ball.acc += friction;
  ball.speed += ball.acc;
  if(ball.speed >= 10)	ball.speed = 10;
  if(ball.speed <= 0)	ball.speed = 0;
  if(isLeft) a+=0.075;
  if(isRight) a-=0.075;
  if(isOrbit) {
    a = atan2(ball.x-ox,ball.y-oy);
		//if(abs(prevA - a)<6.16)if(abs(prevA - a+(-ball.rotation*PI/2))>PI/2) ball.rotation *= -1;
    a += ball.rotation*ball.speed/r;
    r = ((ball.x-ox)**2 + (ball.y-oy)**2)**0.5;
    ball.x = ox+r*sin(a);
    ball.y = oy+r*cos(a);
  } else {
    ball.x += ball.speed*sin(a+ball.rotation*PI/2);
    ball.y += ball.speed*cos(a+ball.rotation*PI/2);
  }
  
  background(50);
  stroke(255);
  if(isOrbit){
  	line(ball.x,ball.y,ox,oy);
  	noFill();
  	circle(ox,oy,r)
  }
  fill(rc,bc,gc);
  circle(ball.x,ball.y,5);
  fill(0,0,255);
  circle(ox,oy,3);
  line(ball.x,ball.y,ball.x+(ball.speed+6)*0.75*sin(a+ball.rotation*PI/2),ball.y+(ball.speed+6)*0.75*cos(a+ball.rotation*PI/2));
	fill(255);
  triangle(13+8*sin(a+ball.rotation*PI/2),13+8*cos(a+ball.rotation*PI/2),13+8*sin(a+8*ball.rotation*PI/6),13+8*cos(a+8*ball.rotation*PI/6),13+8*sin(a-2*ball.rotation*PI/6),13+8*cos(a-2*ball.rotation*PI/6));
	text("x: " + ball.x.toFixed(3),5,32);
	text("y: " + ball.y.toFixed(3),5,44);
	text("speed: " + ball.speed.toFixed(2),5,56);
	text("orbitAuto: " + auto,5,68);
	text("orbitRotation: " + ball.rotation,5,80);
	text(a,5,92)
}

function keyPressed() { 
  switch(key){
    case 'a':
      if(auto == 0){auto=1}else{auto=0;}
      break;
    case 'o':
      if(isOrbit == 0){isOrbit=1}else{isOrbit=0;}
      break;
    case 's':
  		a += PI;
			if(isOrbit) ball.rotation *= -1;
      break;
    case 'r':
      setup();
      break;
  }
  switch(keyCode){
    case RIGHT_ARROW:
  		isRight = 1;
      break;
    case LEFT_ARROW:
  		isLeft = 1;
      break;
  	case UP_ARROW:
    	isUp=1;
      break;
    case DOWN_ARROW:
    	isDown=1;
      break;
  }
}

function keyReleased(){
  switch(keyCode){
    case RIGHT_ARROW:
  		isRight=0;
      break;
    case LEFT_ARROW:
  		isLeft=0;
      break;
  	case UP_ARROW:
    	isUp=0;
      break;
		case DOWN_ARROW:
    	isDown=0;
      break;
  }
}

function mousePressed(){
  ox = mouseX;
  oy = mouseY;
}
