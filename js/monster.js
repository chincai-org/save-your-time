class Monster extends Sprite {
    constructor(
        x,
        y,
        vector,
        size = 30,
        debugColor,
        health = monsterHealth,
        speed = monsterSpeed,
        damage = monsterDamage,
        reward = 1
    ) {
        super(x, y, vector, size, health, speed, damage);
        this.debugColor = debugColor;
        this.reward = reward;
    }

    static normal(x, y, vector) {
        return new Monster(x, y, vector, 30, black, 5, 0.2, 20, 3);
    }

    static tank(x, y, vector) {
        return new Monster(x, y, vector, 40, black, 25, 0.1, 15, 4);
    }

    static speedy(x, y, vector) {
        return new Monster(x, y, vector, 30, blue, 4, 0.5, 10, 2);
    }

    static assassin(x, y, vector) {
        return new Monster(x, y, vector, 30, red, 5, 0.15, 60, 5);
    }

    draw() {
        fill(this.debugColor);
        noStroke();
        circle(this.x, this.y, this.size);
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

            if (
                dist(this.x, this.y, clock.x, clock.y) <
                clock.size / 2 + this.size / 2
            ) {
                clock.takeDamage(this.damage);
                this.kill();
                console.log("hit");
            }
        }
    }

    kill() {
        if (this.health <= 0) {
            clock.health += this.reward;
        }

        killMonster(this);
    }
}
