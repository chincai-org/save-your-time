class Reward extends Sprite {
    constructor(x, y, amt) {
        super(x, y, createVector(0, -1), -1, -1, 0.05, -1);
        this.origX = x;
        this.origY = y;
        this.amt = amt;
    }

    update(delta) {
        super.update(delta);

        if (this.origY - this.y > 20) {
            this.kill();
        }
    }

    draw() {
        fill(green);
        textAlign(CENTER, CENTER);
        text("+" + this.amt + "s", this.x, this.y);
    }

    kill() {
        killReward(this);
    }
}
