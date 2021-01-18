let baseRadius;
let noiseMax = 5;
let zoff = 0;
let bgCol;
let shapeCol;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (windowWidth > windowHeight) {
    baseRadius = windowHeight/(10);
  } else {
    baseRadius = windowWidth/(10);
  }
  
  bgCol = color(240,240,230);
  shapeCol = color('rgba(100, 220, 244, .8)');
  strokeCol = color(80, 180, 204);
  strokeCol1 = color('rgba(245, 150, 250, .4)');
}

function draw() {
  background(bgCol);
  translate(width/2, height/2);
  stroke(0,10);
  
  noFill();
  // noStroke();
  // fill(255,100);


  // stroke(0,9);
  // strokeWeight(5);
  push();
    fill(shapeCol)
 
  beginShape();
  for (let a = 0; a < TWO_PI; a+=0.04) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax-3);
    let yoff = map(sin(a), -1, 1, 0, noiseMax+1);
    let r = map(noise(xoff, yoff,zoff), 0, 1, baseRadius+70, baseRadius + 110);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  pop();

  stroke(strokeCol1);
  strokeWeight(2);
  beginShape();
  for (let a = 0; a < TWO_PI; a+=0.06) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax-9.5);
    let yoff = map(sin(a), -1, 1, 0, noiseMax+10);
    let r = map(noise(xoff, yoff,zoff), 0, 1, baseRadius+80, baseRadius + 120);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);

  stroke(strokeCol1);
  strokeWeight(3);
  beginShape();
  for (let a = 0; a < TWO_PI; a+=0.08) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax+2);
    let yoff = map(sin(a), -1, 1, 0, noiseMax+2);
    let r = map(noise(xoff, yoff,zoff), 0, 1, baseRadius+70, baseRadius + 110);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);

  stroke(strokeCol1);
  strokeWeight(2);
  beginShape();
  for (let a = 0; a < TWO_PI; a+=0.05) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax-8);
    let yoff = map(sin(a), -1, 1, 0, noiseMax-8);
    let r = map(noise(xoff, yoff,zoff), 0, 1, baseRadius+65, baseRadius + 110);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  stroke(strokeCol);
  strokeWeight(1);
  beginShape();
  for (let a = 0; a < TWO_PI; a+=0.003) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, baseRadius+65, baseRadius+95);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);


  zoff += 0.005;
}
