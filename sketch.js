const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

var bg_img;
var food;
var rabbit_img,rabbit;
var button

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit_img = loadImage('Rabbit-01.png');
}

function setup() 
{
  createCanvas(displayWidth,displayHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height-50,width,20);

  rope = new Rope(8,{x:width/2,y:30});
  fruit = Bodies.circle(width/2,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);

  button=createImg("cut_button.png")
  button.position(width/2-20,30)
  button.size(50,50)
  button.mouseClicked(drop)
  

  rabbit=createSprite(width/2,height-100)
  rabbit.addImage(rabbit_img)
  rabbit.scale=0.4
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,width,height);

  image(food,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();

 drawSprites();
   
}

function drop(){
 rope.break();
 fruit_con.detach();
 fruit_con=null 
}
