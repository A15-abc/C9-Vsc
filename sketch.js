var box;

function setup() {
  createCanvas(800,400);

  box = createSprite(400,200,50,50)
  box.shapeColor = "slateblue"
}

function draw() 
{
  background("powderblue");

  if(keyDown(RIGHT_ARROW)){
    box.x += 5
  }
  
  if(keyDown(LEFT_ARROW)){
    box.x -= 5
  }

  if(keyDown(UP_ARROW)){
    box.y -= 5
  }
  
  if(keyDown(DOWN_ARROW)){
    box.y += 5
  }

  drawSprites()
}




