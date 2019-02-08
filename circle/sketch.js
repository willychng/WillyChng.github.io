var w=460;
var h=450;
var circleX=230;
var circleY=h/2;
var r=210;

var count = 0;

var c;
var cr = 65;
var cg = 15;
var cb = 235;
var redP = -1;
var greenP = 1;
var blueP = -1;

function setup() {
  createCanvas(460, 450);
  background(0, 169, 169);
  noFill();
  ellipse(circleX, circleY, 2*r, 2*r);
}

function draw() {
  background(0, 169, 169);
  fill(0, 0, 30);
  rect(circleX-r-20, circleY-r-50, 2*r+100, 2*r+100);

  draw_lines(count);
  count+=0.02;
}

function draw_lines(count) {
  c = update_color();
  for (j=0; j<360;j++) {
    stroke(c);
    line(dotX(j), dotY(j), dotX(j*count), dotY(j*count));
  }
}

function update_color() {
  cr += redP;
  cg += greenP;
  cb += blueP;

  if (cb <= 0 || cb >= 255)
    blueP = -blueP;
  if (cg <= 0 || cg >= 200)
    greenP = -greenP;
  if (cr <= 0 || cr >= 255)
    redP = -redP;
  return color(cr, cg, cb);
}

function dotX(a) {
  return circleX + r * cos(a * PI / 180);
}

function dotY(a) {
  return circleY + r * sin(a * PI / 180);
}
