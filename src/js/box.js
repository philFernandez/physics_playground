class Box {
    constructor(x, y, w, h) {
        this.body = Bodies.rectangle(x, y, w, h);
        this.w = w;
        this.h = h;
        Composite.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("lightgreen");
        stroke("green");
        rectMode(CENTER);
        rect(0, 0, this.w, this.h);
        pop();
    }
}
