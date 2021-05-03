class Box {
    constructor(x, y, w, h, p5Obj) {
        this.body = Bodies.rectangle(x, y, w, h, {
            friction: 0.8,
            restitution: 0.8,
            density: 0.05,
        });
        this.w = w;
        this.h = h;
        this.p5Obj = p5Obj;
        Composite.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;

        this.p5Obj.push();
        this.p5Obj.translate(pos.x, pos.y);
        this.p5Obj.rotate(angle);
        this.p5Obj.fill("lightgreen");
        this.p5Obj.stroke("green");
        this.p5Obj.rectMode(this.p5Obj.CENTER);
        this.p5Obj.rect(0, 0, this.w, this.h);
        this.p5Obj.pop();
    }
}

// class Circle
