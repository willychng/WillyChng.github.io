let width, height, circleX, circleY, rad, circleCan;
let count = 0;
let countSpeed = 0.02;
let j = 0;

let c;
let r = 65;
let g = 15;
let b = 235;
let redP = -1;
let greenP = 1;
let blueP = -1;

let btnPause, btnSubmit, btnColour, btnPAll, inpCount;
let isPaused = 0;
let isColourChange = 1;
let isPAll = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleCan = createGraphics(windowHeight, windowHeight);
  width = windowWidth;
  height = windowHeight;
  circleX = height/2;
  circleY = height/2;
  rad = height/2 - 20
  noFill();

  circleCan.background(0, 0, 30);

  sss();
}

function draw() {
  if (!isPAll) {
  background(0, 169, 169);
  fill(0, 0, 30);
  text("Made by Willy Ch'ng", width-310, height-30);
  noStroke();

  textSize(32);
  text('count = ' + count.toFixed(2), height+15, 100);

  circleCan.background(0, 0, 30);
  draw_lines(count);
  if (!isPaused)
    count+=countSpeed;
  }
  image(circleCan, 0, 0);
}

function draw_lines(count) {
  if (isColourChange) {
    c = update_color();
  } else {
    c = color(r, g, b);
  }
  for (i=1; i<=360;i++) {
    circleCan.stroke(c);
    circleCan.line(dotX(j), dotY(j), dotX(j*count), dotY(j*count));
    j++;
  }
}

function update_color() {
  r += redP;
  g += greenP;
  b += blueP;

  if (b <= 0 || b >= 255)
    blueP = -blueP;
  if (g <= 0 || g >= 200)
    greenP = -greenP;
  if (r <= 0 || r >= 255)
    redP = -redP;
  return color(r, g, b);
}

function dotX(a) {
  return circleX + rad * cos(a * PI / 180);
}

function dotY(a) {
  return circleY + rad * sin(a * PI / 180);
}

function pause() {
  if (isPaused) {
    isPaused = 0;
    btnPause.style('background-color: lime');
  } else {
    isPaused = 1;
    btnPause.style('background-color: red');
  }
}

function toggleColour() {
  if (!isColourChange) {
    isColourChange = 1;
    btnColour.style('background-color: lime');
  } else {
    isColourChange = 0;
    btnColour.style('background-color: red');
  }
}

function pauseAll() {
  if (isPAll) {
    isPAll = 0;
    btnPAll.style('background-color: lime');
  } else {
    isPAll = 1;
    btnPAll.style('background-color: red');
  }
}

function submit() {
  if (!isNaN(inpCount.value())) {
    count = Number(inpCount.value());
    if (isPAll){
      isPAll = 0;
      draw();
      isPAll = 1;
    }
  }
}

function sss(){
  btnPause = createButton('pause');
  btnPause.position(height+15, 20);
  btnPause.style('font-size: 32px');
  btnPause.style('border: none');
  btnPause.style('background-color: lime');
  btnPause.mousePressed(pause);

  btnColour = createButton('toggleColour');
  btnColour.position(btnPause.x + 110, 20);
  btnColour.style('font-size: 32px');
  btnColour.style('border: none');
  btnColour.style('background-color: lime');
  btnColour.mousePressed(toggleColour);

  btnPAll = createButton('pauseAll');
  btnPAll.position(btnColour.x + 205, 20);
  btnPAll.style('font-size: 32px');
  btnPAll.style('border: none');
  btnPAll.style('background-color: lime');
  btnPAll.mousePressed(pauseAll);

  inpCount = createInput('', 'number');
  inpCount.style('font-size', '32px');
  inpCount.size(115);
  inpCount.position(height+15, 120);

  btnSubmit = createButton('Submit');
  btnSubmit.position(inpCount.x + 130, 120);
  btnSubmit.style('font-size', '32px');
  btnSubmit.mousePressed(submit);
}
