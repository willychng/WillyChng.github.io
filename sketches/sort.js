let width = 1000;
let height = 500;

let values;
let sorted;
let i = 0;
let j = 0;
let count = 500;
let speed = 20;
let lineWidth;

function setup() {
  createCanvas(width, height);
  background(0);
  colorMode(HSB, height, 1, 1);
  lineWidth = float(width)/count;

  values = new Array(count);
	for (k = 0; k < values.length; k++) {
    values[k] = map(k,0,values.length - 1,0,height);
  }

  shuff();
}

function draw() {
  background(0);
  for (k = 1; k <= speed; k++) {
    if (i < values.length) {
      let a = values[j];
      let b = values[j+1];
      if (a > b) {
        swap(values, j, j+1);
      }
      j++;
      if (j >= values.length-i-1) {
        i++;
        j = 0;
      }
    } else {
      print("Finished");
      noLoop();
      break;
    }
  }
  for (k = 0; k < values.length; k++) {
    stroke(values[k],1,1);
    fill(values[k],1,1);
    //line(k*lineWidth, height, k*lineWidth + lineWidth, height - values[k]);
    //rect(k*lineWidth, height - values[k], lineWidth, values[k]);
		triangle(k*lineWidth,height,k*lineWidth+lineWidth,height,k*lineWidth,height-values[k]);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function shuff(){
  for (k = 0; k < 200000; k++) {
    swap(values, int(random(values.length)), int(random(values.length)));
  }
}
