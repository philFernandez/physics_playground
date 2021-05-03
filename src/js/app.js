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
let shapes = [];
const goBtn = document.getElementById("go-time");
const stopBtn = document.getElementById("stop-time");
const drawBox = document.getElementById("draw-box");
const controlBox = document.getElementById("controls");
controlBox.style = "border: 1px solid black";
const worldWidth = drawBox.clientWidth;
const worldHeight = drawBox.clientHeight;
const groundHeight = 60;
// const colors = []
var radio;
const controlers = (p) => {
    p.setup = () => {
        radio = p.createRadio();
        radio.option(1, "Circle");
        radio.option(2, "Rectangle");
        radio.selected(2);
        radio.style("width", "200px");
        // const radEl = document.getElementsByTagName("input");
        const radEl = document.querySelector("input[value='1']");
        radEl.setAttribute("checked", "");
    };
};

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
            radio.value() === "2"
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
new p5(controlers, "controls");
