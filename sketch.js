let baseRadius;
let noiseMax = .3;
let zoff = 0;
let bgCol;
let shapeCol;
let numOrbs = 4;
let fr;
let title;
let code;


function setup() {
  createCanvas(windowWidth, windowHeight);
  if (windowWidth > windowHeight) {
    baseRadius = windowHeight/(numOrbs);
  } else {
    baseRadius = windowWidth/(numOrbs);
  }
  
  bgCol = color(245,240,30);
}

function draw() {
  background(bgCol);
  fr = "Frame Rate " + round(frameRate());
  title = "Pulse";
  code = "0001"
  hud(title,code,fr);
  translate(width/2, height/2);
  
  for (let i = 1; i < numOrbs; i++) {
    strokeWeight(30 - (8*i));
    stroke(0,255);
    noFill()   
    beginShape();
    for (let a = 0; a < TWO_PI; a+=(0.008)) {
      let xoff = map(cos(a), -1, 1, 0, noiseMax);
      let yoff = map(sin(a), -1, 1, 0, noiseMax);
      let r = map(noise(xoff, yoff,zoff), 0, 1, baseRadius-(i*(baseRadius/1.2)), baseRadius+(i*(baseRadius)));
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x,y);
    }
    endShape(CLOSE);
    zoff += 0.001;
        
  }
  
}
