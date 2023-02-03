var trex, trex_running, edges;
var groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");  
groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();

  trex.scale = 0.5;
  trex.x = 50;
}

function draw(){
  background("white");

  console.log(trex.y);

  if(keyDown("space")){
    trex.velocityY=-10;
  } 

  trex.collide(edges[3]);
  drawSprites();
}