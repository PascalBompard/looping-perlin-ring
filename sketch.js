let baseRadius;
let noiseMax = 5;
let zoff = 0;
let bgCol;
let shapeCol;

function setup() {
  createCanvas(windowWidth, windowHeight);
  baseRadius = windowHeight/(6.89);
  bgCol = color(240,240,230);
  shapeCol = color('rgba(147, 220, 204, .7)');
}

function draw() {
  background(bgCol);
  translate(width/2, height/2);
  stroke(0,10);
  
  noFill();
  // noStroke();
  // fill(255,100);


  stroke(0,9);
  strokeWeight(50);
  beginShape();
  for (let a = 0; a < TWO_PI; a+=0.4) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax-3);
    let yoff = map(sin(a), -1, 1, 0, noiseMax+1);
    let r = map(noise(xoff, yoff,zoff), 0, 1, baseRadius+70, baseRadius + 110);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  stroke(0,10);
  strokeWeight(40);
  beginShape();
  for (let a = 0; a < TWO_PI; a+=0.3) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax-9.5);
    let yoff = map(sin(a), -1, 1, 0, noiseMax+10);
    let r = map(noise(xoff, yoff,zoff), 0, 1, baseRadius+70, baseRadius + 110);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);

  stroke(0,13);
  strokeWeight(20);
  beginShape();
  for (let a = 0; a < TWO_PI; a+=0.2) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax+2);
    let yoff = map(sin(a), -1, 1, 0, noiseMax+2);
    let r = map(noise(xoff, yoff,zoff), 0, 1, baseRadius+70, baseRadius + 110);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);

  stroke(0,15);
  strokeWeight(10);
  beginShape();
  for (let a = 0; a < TWO_PI; a+=0.1) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax-8);
    let yoff = map(sin(a), -1, 1, 0, noiseMax-8);
    let r = map(noise(xoff, yoff,zoff), 0, 1, baseRadius+65, baseRadius + 110);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  
  stroke(0,30);
  strokeWeight(2);
  beginShape();
  for (let a = 0; a < TWO_PI; a+=0.05) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax);
    let yoff = map(sin(a), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff,zoff), 0, 1, baseRadius+75, baseRadius+105);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);


  zoff += 0.005;
}
