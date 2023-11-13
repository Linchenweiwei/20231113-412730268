var sound1
function preload(){
  sound1 = loadSound("mixkit-raising-me-higher-34.mp3") //先把音樂檔載入到sound1程式碼中
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#f4a261")
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}


var w = 100
var s_w = 40
var fc
function draw() {
  background("#f4a261")
  rectMode(CENTER)  
  noFill()
  
  if(sound1.isPlaying()){
    
    fc = map(analyzer.getLevel(),0,1,0,100)
  }
  else{
    
    fc = map(mouseX,0,width,0,100)
  }
  for(var y=50;y<=width+50;y=y+w){
  for(var x=50;x<=width+50;x=x+w){
  stroke("#219ebc")
  strokeWeight(4)
  ellipse(x,y,w+fc)
  stroke("#219ebc")
  strokeWeight(4)
  rect(x,y,w+fc)
  noFill()
  stroke("#219ebc")
  strokeWeight(3)
  ellipse(x+50,y+50,s_w+fc)
  ellipse(x,y,50)
  rect(x,y,50)
  }
  textSize(fc+30)
  text("412730268林宸瑋",width-800,height-100)
  
 }
}



function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }
  else{
    sound1.play();

  }
}





  




