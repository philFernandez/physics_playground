class Box {
    constructor(x, y, w, h, p5Obj) {
        this.body = Bodies.rectangle(x, y, w, h, {
            friction: 0.4,
            restitution: 0.5,
            density: 0.09,
        });
        this.w = w;
        this.h = h;
        this.p5Obj = p5Obj;
        this.fill = RandomColor.getColor();
        this.stroke = RandomColor.getColor();
        Composite.add(world, this.body);
    }

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;

        this.p5Obj.push();
        this.p5Obj.translate(pos.x, pos.y);
        this.p5Obj.rotate(angle);
        this.p5Obj.fill(this.fill);
        this.p5Obj.stroke(this.stroke);
        this.p5Obj.rectMode(this.p5Obj.CENTER);
        this.p5Obj.rect(0, 0, this.w, this.h);
        this.p5Obj.pop();
    }
}

class Circle {
    constructor(x, y, r, p5Obj) {
        this.body = Bodies.circle(x, y, r, {
            friction: 0.4,
            frictionAir: 0.008,
            restitution: 0.8,
            density: 0.05,
        });
        this.x = x;
        this.y = y;
        this.r = r;
        this.p5Obj = p5Obj;
        this.fill = RandomColor.getColor();
        this.stroke = RandomColor.getColor();
        Composite.add(world, this.body);
    }

    show() {
        const pos = this.body.position;
        this.p5Obj.push();
        this.p5Obj.translate(pos.x, pos.y);
        this.p5Obj.fill(this.fill);
        this.p5Obj.stroke(this.stroke);
        this.p5Obj.ellipseMode(this.p5Obj.RADIUS);
        this.p5Obj.circle(0, 0, this.r);
        this.p5Obj.pop();
    }
}
