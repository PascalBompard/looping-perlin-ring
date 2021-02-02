// adds text readout on the screen

function hud(titleTxt, codeTxt, logTxt){
  let hudBgCol = color(255); //color(190,180,15)
  let gutter = width/36;
  let hudWidth = width - (gutter*2);
  let hudHeight = height/18;
  let hudTxtSize = gutter/1.5;
  let txtBaseline = hudHeight/1.8;
  let lineWeight = width/400;
  let titleTxtInset = gutter+10;
  let logTxtInset = width - gutter - hudWidth/5;
  let codeTxtInset = logTxtInset - gutter - hudWidth/5 ;

  
  
    push();
      noStroke();
      fill(hudBgCol);
      rect(0, 0, width, hudHeight)

      stroke(100);
      strokeWeight(lineWeight);
      line(codeTxtInset-10, gutter, codeTxtInset-10, hudHeight-gutter);
      line(logTxtInset-10,  gutter, logTxtInset-10, hudHeight-gutter);
      
      noStroke();
      fill(50);
      textAlign (LEFT,BASELINE);
      textSize(hudTxtSize);
      textFont(bodyFont);
      text(codeTxt, codeTxtInset, txtBaseline );
      text(logTxt, logTxtInset, txtBaseline );
      textSize(hudTxtSize*1.6)
      textFont(titleFont);
      text(titleTxt, titleTxtInset, txtBaseline);
    pop() ;
}
