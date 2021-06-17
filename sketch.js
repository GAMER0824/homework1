
function preload(){
 seaImg = loadImage("sea.png");
 shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png"); 
}

function setup(){
  createCanvas(400,400);

  sea=createSprite(400,200) 
  sea.addImage("sea",seaImg)
  sea.scale = 0.3

  ship=createSprite(200,300)
  ship.addAnimation("ship",shipImg)
  ship.scale = 0.2
}


function draw() {
  background("blue");
  
   drawSprites()
  
   sea.velocityX=-2
  if(sea.x < 0) {
    sea.x = sea.width/8
  }
}