// create variable
var dice;

function setup(){
  createCanvas(400,400);
}

function draw() {
  
  background("lightblue");

  //Write if condition for space and assign random number to variable

  if(keyWentDown("space")){
    dice = Math.round(random(1,6));
  }

  //print value and string on canvas using text function and string concatenation 

  textSize(20);
  fill(0);
  text("Number on dice is " + dice, 100,200);
  
}
