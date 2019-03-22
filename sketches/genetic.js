let best,po,popu;
let genN = 0;
let bestT = "";
let poT = "";
let charss = "[]{}()!@#$%^&*,. ;_+-=~`?:|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function setup() {
  createCanvas(0,0);
  best = createP("");
  createP("");
  po = createP("");
  po.style('font-family: monospace;');
  best.style('font-family: monospace;font-size: 14px;');
  popu = new Population("Malaysia Number 1",0.01,200);
}

function draw() {
  background(220);
  let bbest = "";
  let abest = 0;
  for(let k = 0; k < 1; k++){
    
    poT = ""
    popu.calcFitness();
    popu.pool();
    popu.mate();
    popu.calcFitness();
    for(let i = 0; i < popu.population.length; i++) {
      poT += popu.population[i].text + "   " + popu.population[i].fit + "<br>";
    }
    for(let i = 0; i < popu.population.length; i++){
      if(popu.population[i].fit > abest){
        abest = popu.population[i].fit;
        bbest = popu.population[i].text;
      }
    }
    genN++;
    if(abest == 1) {
      noLoop();
      break;
    }
  }
  best.html(bbest + "  " + abest + "<br>Generation: " + genN);
  po.html(poT);

}

class DNA{
  constructor(leng) {
    this.text = "";
    this.fit = 0;
    for(let i = 0; i < leng; i++){
      this.text += charss.charAt(floor(random(charss.length)));
    }
  }
  
  fitness(tar) {
    let score = 0;
    for(let i = 0; i < tar.length; i++){
    	if(this.text[i] == tar[i]) score++;
    }
    this.fit = score/tar.length;
  }
}

class Population {
  constructor(t,m,pm){
    this.population = [];
    this.target = t;
    this.mutationRate = m;
    this.popMax = pm;
    this.matingPool = [];
    for(let i = 0; i < pm; i++) {
      this.population[i] = new DNA(t.length);
    }
  }
  
  calcFitness(){
    for(let i = 0; i < this.population.length; i++){
      this.population[i].fitness(this.target);
    }
  }
  
  pool() {
    this.matingPool = [];
    for(let i = 0; i < this.population.length; i++){
      //this.matingPool.push(this.population[i].text);
      for(let j = 0; j < round(this.population[i].fit*100); j++){
        this.matingPool.push(this.population[i].text);
      }
    }
  }
  
  mate(){
    for(let i = 0; i < this.popMax; i++){
      let par1 = this.matingPool[round(random(0,this.matingPool.length-1))];
      let par2 = this.matingPool[round(random(0,this.matingPool.length-1))];
      let res = "";
      for(let j = 0; j < this.target.length; j++){
        if(random(1) < this.mutationRate){
          res += charss.charAt(floor(random(charss.length)));
        } else {
          if(random(1)>0.5){
            res += par1[j];
          } else {
            res += par2[j];
          }
        }
      }
      this.population[i].text = res;
    }
  }
}
