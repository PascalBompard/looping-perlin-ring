let baseRadius;
let noiseMax = .3;
let zoff = 0;
let bgCol;
let shapeCol;
let numOrbs = 4;
let fr;


function setup() {
  createCanvas(windowWidth, windowHeight);
  if (windowWidth > windowHeight) {
    baseRadius = windowHeight/(numOrbs);
  } else {
    baseRadius = windowWidth/(numOrbs*numOrbs);
  }
  
  bgCol = color(245,240,30);
}

function draw() {
  background(bgCol);
  fr = "Frame Rate: " + round(frameRate());
  hud(fr);
  translate(width/2, height/2);
  
  for (let i = 1; i < numOrbs; i++) {
    strokeWeight(20 - (5*i));
    stroke(0,255);
    noFill()   
    beginShape();
    for (let a = 0; a < TWO_PI; a+=(0.008)) {
      let xoff = map(cos(a), -1, 1, 0, noiseMax);
      let yoff = map(sin(a), -1, 1, 0, noiseMax);
      let r = map(noise(xoff, yoff,zoff), 0, 1, baseRadius-(i*20), baseRadius+(i*150));
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x,y);
    }
    endShape(CLOSE);
    zoff += 0.001;
        
  }
  
}
