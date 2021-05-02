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

function setup() {
    createCanvas(900, 600);
    engine = Engine.create();
    world = engine.world;
    box1 = Bodies.rectangle(200, 100, 80, 80);
    Runner.run(engine);
    Composite.add(world, box1);
}

function draw() {
    background(51);
    rect(box1.position.x, box1.position.y, 80, 80);
}
