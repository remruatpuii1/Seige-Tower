const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var pentagon;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25;

function preload()
{

}
function setup() {
  
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(390,310,270,12);

  block1=new BlueBox(300,275,30,40);
  block2=new BlueBox(330,275,30,40);
  block3=new BlueBox(360,275,30,40);
  block4=new BlueBox(390,275,30,40);
  block5=new BlueBox(420,275,30,40);
  block6=new BlueBox(450,275,30,40);
  block7=new BlueBox(480,275,30,40);

  block8=new PinkBox(330,235,30,40);
  block9=new PinkBox(360,235,30,40);
  block10=new PinkBox(390,235,30,40);
  block11=new PinkBox(420,235,30,40);
  block12=new PinkBox(450,235,30,40);
 
  block13=new GreenBox(360,195,30,40);
  block14=new GreenBox(390,195,30,40);
  block15=new GreenBox(420,195,30,40);
 
  block16=new YellowBox(390,155,30,40);

  ground2=new Ground(800,225,210,12);

  block17=new BlueBox(800,205,30,40);
  block18=new BlueBox(800,205,30,40);
  block19=new BlueBox(800,205,30,40);
  block20=new BlueBox(800,205,30,40);
  block21=new BlueBox(800,205,30,40);

  block22=new GreenBox(800,205-40,30,40);
  block23=new GreenBox(800,205-40,30,40);
  block24=new GreenBox(800,205-40,30,40);

  block25=new PinkBox(800,205-80,30,40);

  ground3=new Ground(500,390,1000,20);

  pentagon=new Polygon(200,200,20);

  sling=new SlingShot(pentagon.body,{x:180,y:190})
}

function draw() {

  background("white"); 

  Engine.update(engine);
  
  ground1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();
  
  ground2.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();
 
  pentagon.display();
  
  ground3.display();

  sling.display();


  strokeWeight(0);
  fill("white");
  textSize(22);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",150,30);
  
}

function mouseDragged()
{
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
   sling.fly();
}


function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(pentagon.body,{x:100,y:200});
    sling.attacher(pentagon.body);
  }
}
