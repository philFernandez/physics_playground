class Box {
    constructor(x, y, w, h, p) {
        this.body = Bodies.rectangle(x, y, w, h, {
            friction: 0.8,
            restitution: 0.8,
            density: 0.05,
        });
        this.w = w;
        this.h = h;
        this.p = p;
        Composite.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;

        this.p.push();
        this.p.translate(pos.x, pos.y);
        this.p.rotate(angle);
        this.p.fill("lightgreen");
        this.p.stroke("green");
        this.p.rectMode(this.p.CENTER);
        this.p.rect(0, 0, this.w, this.h);
        this.p.pop();
    }
}
