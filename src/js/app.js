// module aliases
var Engine = Matter.Engine,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

var engine;
var composite;
var runner;
var box1;
var ground;
var runner;
var mouse;
var mouseConstraint;
let shapes = [];
const goBtn = document.getElementById("go-time");
const drawBox = document.getElementById("draw-box");
const controlBox = document.getElementById("controls");
const worldWidth = drawBox.clientWidth;
const worldHeight = drawBox.clientHeight;
const groundHeight = 60;
// const colors = []
let engineActive = false;
const radios = document.getElementsByName("shape");
const s = (p) => {
    p.setup = () => {
        p.createCanvas(worldWidth, worldHeight);
        // engine = Engine.create({ gravity: { x: 0.01, y: 1 } });
        engine = Engine.create();
        runner = Runner.create();
        world = engine.world;
        goBtn.addEventListener("click", () => {
            if (engineActive) {
                Runner.stop(runner);
            } else {
                Runner.run(runner, engine);
            }
            engineActive = !engineActive;
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
        mouse = Mouse.create(drawBox);
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });
        Composite.add(world, mouseConstraint);
    };

    p.doubleClicked = () => {
        shapes.push(
            radios[1].checked
                ? new Box(
                      p.mouseX,
                      p.mouseY,
                      p.random(10, 85),
                      p.random(10, 85),
                      p
                  )
                : new Circle(p.mouseX, p.mouseY, p.random(10, 50), p)
        );
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
// new p5(controlers, "controls");
