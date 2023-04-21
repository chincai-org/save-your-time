class SmallClock extends Clock {
    constructor() {
        super(-1, -1, smallClockImage, 60);

        this.angle = 0;
        this.radius = 200;
    }

    update(delta) {
        if (this.health <= 0) smallClock = null;

        this.x = this.radius * Math.cos(this.angle) + midPointX;
        this.y = this.radius * Math.sin(this.angle) + midPointY;

        this.angle += 0.001 * delta;
    }

    drawHealth() {
        noStroke();
        fill(black, 120);
        textSize(15);
        text(this.formatTime(), this.x, this.y - 45);
    }
}
