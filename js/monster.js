class Monster extends Sprite {
    constructor(
        x,
        y,
        vector,
        size = 30,
        health = monsterHealth,
        speed = monsterSpeed,
        damage = monsterDamage
    ) {
        super(x, y, vector, size, health, speed, damage);
    }

    draw() {
        fill(black);
        noStroke();
        circle(this.x + this.size / 2, this.y + this.size / 2, this.size);
    }

    update() {
        if (
            this.x < 0 ||
            this.x > canvasWidth ||
            this.y < 0 ||
            this.y > canvasHeight
        ) {
            this.kill();
        } else {
            super.update();
        }
    }

    kill() {
        killMonster(this);
    }
}
