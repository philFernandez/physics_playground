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
var runner;
let box = false;
let shapes = [];
const goBtn = document.getElementById("go-time");
const stopBtn = document.getElementById("stop-time");
console.log(goBtn);
const drawBox = document.getElementById("draw-box");
const worldWidth = drawBox.clientWidth;
const worldHeight = drawBox.clientHeight;
const groundHeight = 60;
// const colors = []

const s = (p) => {
    p.setup = () => {
        p.createCanvas(worldWidth, worldHeight);
        // engine = Engine.create({ gravity: { x: 0.01, y: 1 } });
        engine = Engine.create();
        runner = Runner.create();
        world = engine.world;
        goBtn.addEventListener("click", () => {
            Runner.run(runner, engine);
        });
        stopBtn.addEventListener("click", () => {
            Runner.stop(runner);
        });
        // this physics lib measures rectangles from center out
        // x = 450 would be the center of the rectangle
        ground = Bodies.rectangle(
            worldWidth / 2,
            p.height,
            p.width,
            groundHeight,
            {
                isStatic: true,
            }
        );
        Composite.add(world, ground);
    };

    p.mousePressed = () => {
        shapes.push(
            box
                ? new Box(
                      p.mouseX,
                      p.mouseY,
                      p.random(10, 40),
                      p.random(10, 40),
                      p
                  )
                : new Circle(p.mouseX, p.mouseY, p.random(10, 50), p)
        );
    };

    p.mouseWheel = () => {
        box = !box;
    };

    // p.mouseDragged = () => {
    //     shapes.push(new Box(p.mouseX, p.mouseY, 30, 30, p));
    // };

    p.draw = () => {
        p.background("white");
        shapes.forEach((shape) => shape.show());
        p.rectMode(p.CENTER);
        p.fill("chartreuse");
        p.stroke("blue");
        // World Ground
        p.rect(worldWidth / 2, p.height, p.width, groundHeight);
    };
};

new p5(s, "draw-box");
