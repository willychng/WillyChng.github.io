let width = 1000;
let height = 460;
let circleX=230;
let circleY=230;
let rad=210;
let count = 0;

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
  createCanvas(width, height);
  background(0, 169, 169);
  noFill();
  ellipse(circleX, circleY, 2*rad, 2*rad);

  btnPause = createButton('pause');
  btnPause.position(480, 20);
  btnPause.style('font-size: 32px');
  btnPause.style('border: none');
  btnPause.style('background-color: lime');
  btnPause.mousePressed(pause);

  btnColour = createButton('toggleColour');
  btnColour.position(590, 20);
  btnColour.style('font-size: 32px');
  btnColour.style('border: none');
  btnColour.style('background-color: lime');
  btnColour.mousePressed(toggleColour);

  btnPAll = createButton('pauseAll');
  btnPAll.position(795, 20);
  btnPAll.style('font-size: 32px');
  btnPAll.style('border: none');
  btnPAll.style('background-color: lime');
  btnPAll.mousePressed(pauseAll);

  btnSubmit = createButton('Submit');
  btnSubmit.position(600, 110);
  btnSubmit.style('font-size', '32px');
  btnSubmit.mousePressed(submit);

  inpCount = createInput('');
  inpCount.style('font-size', '32px');
  inpCount.size(100);
  inpCount.position(480, 110);

  text("Made by Willy Ch'ng", 0, 450);
}

function draw() {
  if (!isPAll) {
  background(0, 169, 169);
  fill(0, 0, 30);
  text("Made by Willy Ch'ng", 700, 450);
  noStroke();
  rect(0, 0, 460, 460);

  textSize(32);
  text('count = ' + count.toFixed(2), 480, 100);

  draw_lines(count);
  if (!isPaused)
    count+=0.02;
  }
}

function draw_lines(count) {
  if (isColourChange) {
    c = update_color();
  } else {
    c = color(r, g, b);
  }
  for (j=0; j<360;j++) {
    stroke(c);
    line(dotX(j), dotY(j), dotX(j*count), dotY(j*count));
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
