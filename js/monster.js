class Monster extends Sprite {
    constructor(x, y, vector) {
        super(x, y, vector, monsterSpeed, monsterDamage);
    }

    draw() {
        let size = 30;
        fill(black);
        noStroke();
        circle(this.x + size / 2, this.y + size / 2, size);
    }

    update() {
        if (
            this.x < 0 ||
            this.x > canvasWidth ||
            this.y < 0 ||
            this.y > canvasHeight
        ) {
            killMonster(this);
        } else {
            super.update();
        }
    }
}
