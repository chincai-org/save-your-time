class TimeBomb extends Sprite {
    constructor() {
        super(midPointX, midPointY, createVector(0, 0), 0, 0, 0, 0);
    }

    draw() {
        noFill();
        stroke(red);
        strokeWeight(2);
        circle(this.x, this.y, this.size);
    }

    update() {
        if (++this.size > canvasWidth) {
            timeBomb = null;
        }
    }
}
