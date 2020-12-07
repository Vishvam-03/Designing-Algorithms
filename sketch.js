var rect, movingRect

function setup() {
  createCanvas(800,400);
 rect = createSprite(400, 200, 50, 80);
 rect.shapeColor = "green";
 movingRect = createSprite(500, 200, 80, 50);
 movingRect.shapeColor = "green";
 
}


function draw() {
  background(255,255,255);  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - rect.x < rect.width/2 + movingRect.width/2 && movingRect.x - rect.x < rect.width/2 + movingRect.width/2 && rect.y - movingRect.y < rect.height/2 + movingRect.height/2 && movingRect.y - rect.y < rect.height/2 + movingRect.height/2){
   movingRect.shapeColor = "red";
   rect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    rect.shapeColor = "green";
  }
  drawSprites();
}