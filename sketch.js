var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var obstacleGroup, bananaGroup;

function preload()
{
  monkey_running =                        loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup()
{
  createCanvas(600,400);
  
  //sprite for monkey
  monkey = createSprite(70,340,10,10);
  monkey.addAnimation( "running",monkey_running);
  monkey.scale=0.1;
  
  //sprite for ground
  ground = createSprite(300,358,780,10);
  ground.velocityX=-3;
  ground.x = ground.width /2;
  
  obstacleGroup = new Group();
  bananaGroup = new Group();
  
  score = 0;
}

function draw() 
{
  background("white");
  
  //reset ground
  if (ground.x < 300)
     {
      ground.x = ground.width/2;
     }
    
  textSize(20);
  text("Score "+score,200,20);
  
  //if we press space monkey should jump
  if (keyDown("space") && monkey.y >=115) 
     {
      monkey.velocityY=-10;
     }
    
   //to add gravity
   monkey.velocityY = monkey.velocityY+0.9;
   monkey.collide(ground);
    
   if (bananaGroup.isTouching(monkey)) 
    {
     bananaGroup.destroyEach();
     score = score +2;
    }
    
   switch(score)
   {
     case 10: monkey.scale=0.12;
                break;
     case 20: monkey.scale=0.14;
                break;
     case 30: monkey.scale=0.16;
                break;
     case 40: monkey.scale=0.18;
                break;
     case 50: monkey.scale=0.18;
                break;
     case 60: monkey.scale=0.18;
                break;
     case 70: monkey.scale=0.18;
                break;
     case 80: monkey.scale=0.18;
                break;
     case 90: monkey.scale=0.18;
                break;
     case 100: monkey.scale=0.18;
                break;
     case 110: monkey.scale=0.18;
                break;
     case 120: monkey.scale=0.18;
                break;
     case 130: monkey.scale=0.18;
                break;
     case 140: monkey.scale=0.18;
                break;
     default: break;
   }
  
  
    if (obstacleGroup.isTouching(monkey)) 
     {
      monkey.scale = 0.08;
     }
  
    food();
    stop();
  
    drawSprites();
}
  
function reset() 
{
  monkey.x=70;
  monkey.y=340;
  
  banana.visible = false;
  obstacle.visible = false;
  
  monkey.collide(ground);
    
  score = 0;
}

//function of food
function food()
{
  if (frameCount % 80 === 0) 
  {
    banana = createSprite(250,130,10,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    
    banana.velocityX=-5;
    banana.lifetime=120;
    
    banana.x = Math.round(random(400,450));
    banana.y = Math.round(random(120,150));
    
    monkey.depth = banana.depth;
    monkey.depth = monkey.depth+1;
    
    bananaGroup.add(banana);
  }
}

//function of obstacles
function stop() 
{
  if (frameCount % 200 === 0)
  {
    obstacle = createSprite(300,339,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.09;
    obstacle.velocityX=-5; 
    obstacle.lifetime=120;
    obstacle.x = Math.round(random(450,460)); 
    
    obstacleGroup.add(obstacle);
  }
}