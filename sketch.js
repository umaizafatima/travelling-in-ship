var sea, seaImage;
var ship, ship_moving;

function preload()
{
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup()
{
  createCanvas(1000,600);

  //create a sea sprite
  sea = createSprite(600,200);
  sea.addImage(seaImage);
  sea.velocityX = -10;

  //create a ship sprite
  ship = createSprite(150,250,10,10);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.5;
  ship.X = 100;

}

function draw() 
{
 //code to rest the background
 if(sea.X > 0.4)
     {
        sea.X = width/2;
     }



 drawSprites();
}