
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fundo;
var cenoura,cenouraImg;
var metade;
var cesta;
var botão;
var ground;
var air;

function preload(){
  fundo = loadImage("fundo2.png")
  cenouraImg = loadImage("cenoura.png")
  metade = loadImage("meiacenoura.png")
  cesta = loadImage("cesta.png")
}


function setup() {
  createCanvas(600,400);

  engine = Engine.create();
  world = engine.world;
  
  botão = createImg("botão.png")
  botão.position(205,250)
  botão.size(200,200)
  botão.mouseClicked(air)
  console.log(botão)
  var options = {
    isStatic: true,
    restitution:0.3,
    friction:0.1,
    density:1.2
  }
  
  ground = Bodies.rectangle(0,height-1,width*2,1,options)
  
  cenoura = Bodies.rectangle(300,223,50,100,options)
  World.add(world,cenoura)


}


function draw() 
{
  background(189);
  image(fundo,0,0,width,height)
  rect(ground.position.x,ground.position.y,width*2,1)
  
  push()
  imageMode(CENTER)
  image(metade,cenoura.position.x,cenoura.position.y,50,100)
  image(cenouraImg,cenoura.position.x,cenoura.position.y,50,100)
  pop()
  
  Engine.update(engine);
  
}

function air(){
 Matter.Body.applyForce(cenouraImg.body,{x:0,y:-75})
}