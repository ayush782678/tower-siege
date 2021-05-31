const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,stand;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand = new Ground(390,300,250,10);
    box1 = new Box(300,275)
    box2 = new Box(330,275)
    box3 = new Box(360,275)
    box4 = new Box(390,275)
    box5 = new Box(420,275)
    box6 = new Box(450,275)
    box7 = new Box(480,275)
    box8 = new Box(330,235)
    box9 = new Box(360,235)
    box10 = new Box(390,235)
    box11 = new Box(420,235)
    box12 = new Box(450,235)
    box13 = new Box(360,195)
    box14 = new Box(390,195)
    box15 = new Box(420,195)
    box16 = new Box(390,155)
    polygon = new Polygon(50,200,20)
    slingshot = new SlingShot(polygon.body,{x:100,y:200})

}

function draw(){
    background(180)
    ground.display();
    stand.display();
    fill("blue")
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    fill("red")
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    fill("green")
    box13.display()
    box14.display()
    box15.display()
    fill("yellow")
    box16.display()
    polygon.display()
    slingshot.display();

}

function mouseDragged(){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
      
}


function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon.body)
    }
}