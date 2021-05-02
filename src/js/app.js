// module aliases
var Engine = Matter.Engine,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

var engine;
var composite;
var runner;
var box1;
var ground;

let boxes = [];

function setup() {
    createCanvas(900, 600);
    engine = Engine.create();
    world = engine.world;
    Runner.run(engine);
    // this physics lib measures rectangles from center out
    // x = 450 would be the center of the rectangle
    ground = Bodies.rectangle(450, height, width, 10, { isStatic: true });
    Composite.add(world, ground);
}

// function mouseDragged() {
//     boxes.push(new Box(mouseX, mouseY, 30, 30));
// }
function mousePressed() {
    boxes.push(new Box(mouseX, mouseY, 30, 30));
}

function draw() {
    background("white");
    boxes.forEach((box) => box.show());
    rectMode(CENTER);
    fill("lightblue");
    stroke("blue");
    rect(450, height, width, 10);
}
