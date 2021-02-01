let baseRadius;
let noiseMax = 2;
let zoff = 0;
let bgCol;
let shapeCol;
let numOrbs = 10;
let fr;


function setup() {
  createCanvas(windowWidth, windowHeight);
  if (windowWidth > windowHeight) {
    baseRadius = windowHeight/(numOrbs);
  } else {
    baseRadius = windowWidth/(numOrbs);
  }
  
  bgCol = color(245,240,30);
  shapeCol = color(0,180);
  strokeCol = color(80, 180, 204);
  strokeCol1 = color('rgba(245, 150, 250, .5)');
}

function draw() {
  background(bgCol);
  fr = "Frame Rate: " + round(frameRate());
  hud(fr);
  translate(width/2, height/2);
  
  // stroke();

  
  
  for (let i = 1; i < numOrbs; i++) {
    strokeWeight(1);
    stroke(0,100);
    // shapeCol.setAlpha(200/i);
    bgCol.setAlpha(255/i)
      fill(bgCol);
    // if (i>1) {
    //   bgCol.setAlpha(255/i)
    //   fill(bgCol);
    // } else {
    //   fill(shapeCol);
    // };
    
    // fill(shapeCol);
    // let xPos = map(mouseX, 0, width, 0, 2);
    // let yPos = map(mouseY, 0, height, 0, 2);
    beginShape();
    for (let a = 0; a < TWO_PI; a+=(0.001)) {
      let xoff = map(cos(a), -1, 1, 0, noiseMax);
      let yoff = map(sin(a), -1, 1, 0, noiseMax);
      let r = map(noise(xoff, yoff,zoff), 0, 1, baseRadius - (5*i), baseRadius + (50*i));
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x,y);
    }
    endShape(CLOSE);
    zoff += 0.002;
    
    
  }



  
}
