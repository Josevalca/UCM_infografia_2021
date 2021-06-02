let w = 700; 
let g = 29; // grosor
let d = w/3; 
let ep = 0


function setup() {
  createCanvas(550, 950);
}

function draw() {
  background(0);
noFill(300);

  
  
  {fill(250, w-500,250);
strokeWeight(29.0)
ellipse(275,500, 450, 700)}
  
  {strokeWeight(30.0);
strokeJoin(MITER);
beginShape();

endShape();
strokeJoin(MITER);
  { noFill()
strokeWeight(g)
   color (0)
   beginShape();
vertex(240, 0);
vertex(240, w+50);
vertex(140, 480);
   endShape();}

   noFill()
   beginShape();
vertex( 310, 0);
   vertex (310, w+50) ;
vertex(410, 480);
endShape(); }


strokeWeight(5.0)

 noFill();
strokeWeight(29.0)
ellipse(275,500, 450, w); 

}

 
function keyTyped(){
  
  w = random (300, 700) 
  //ea = random (-200,100)
  
}
  
