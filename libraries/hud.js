// adds text readout on the screen

function hud(titleTxt, codeTxt, logTxt){
  let gutter = width/24;
  let hudWidth = width - (gutter*2);
  let hudHeight = height/24;
  let hudTxtSize = gutter/2;
  let hudHeightAdjust = gutter/4;
  let titleTxtInset = gutter+10;
  let logTxtInset = width - gutter - hudWidth/5;
  let codeTxtInset = logTxtInset - gutter - hudWidth/5 ;
  
    push();
      // rectMode(CORNER);
      textAlign (LEFT,BASELINE);
      textSize(hudTxtSize);
      stroke(50);
      strokeWeight(1);
      noFill();
      // fill(240);
      rect(gutter, height-(hudHeight + gutter + hudHeightAdjust), hudWidth, hudHeight)
      fill(50);
      line(codeTxtInset-10, height-(hudHeight + gutter + hudHeightAdjust),codeTxtInset-10,height-(gutter + hudHeightAdjust));
      line(logTxtInset-10, height-(hudHeight + gutter + hudHeightAdjust), logTxtInset-10, height-(gutter + hudHeightAdjust));
      noStroke();
      
      text(codeTxt, codeTxtInset, height-((hudHeight + hudHeightAdjust)) );
      text(logTxt, logTxtInset, height-((hudHeight + hudHeightAdjust)) );
      textSize(hudTxtSize*1.4);
      text(titleTxt, titleTxtInset, height-((hudHeight + hudHeightAdjust/2)) );
    pop() ;
}
