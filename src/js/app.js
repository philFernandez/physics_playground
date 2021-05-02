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
const drawBox = document.getElementById("draw-box");
const worldWidth = drawBox.clientWidth;
const worldHeight = drawBox.clientHeight;
console.log(`width : ${worldWidth}, height: ${worldHeight}`);

const s = (p) => {
    p.setup = () => {
        p.createCanvas(worldWidth, worldHeight);
        engine = Engine.create();
        world = engine.world;
        Runner.run(engine);
        // this physics lib measures rectangles from center out
        // x = 450 would be the center of the rectangle
        ground = Bodies.rectangle(worldWidth / 2, p.height, p.width, 10, {
            isStatic: true,
        });
        Composite.add(world, ground);
    };

    p.mousePressed = () => {
        boxes.push(new Box(p.mouseX, p.mouseY, 30, 30, p));
    };

    // p.mouseDragged = () => {
    //     boxes.push(new Box(p.mouseX, p.mouseY, 30, 30, p));
    // }

    p.draw = () => {
        p.background("lightgray");
        boxes.forEach((box) => box.show());
        p.rectMode(p.CENTER);
        p.fill("lightblue");
        p.stroke("blue");
        p.rect(worldWidth / 2, p.height, p.width, 10);
    };
};

new p5(s, "draw-box");
