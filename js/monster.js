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
        return new Monster(x, y, vector, 30, black, 5, 0.02, 20, 6);
    }

    static tank(x, y, vector) {
        return new Monster(x, y, vector, 40, black, 25, 0.017, 15, 15);
    }

    static speedy(x, y, vector) {
        return new Monster(x, y, vector, 30, blue, 4, 0.05, 10, 9);
    }

    static assassin(x, y, vector) {
        return new Monster(x, y, vector, 30, red, 5, 0.02, 60, 7);
    }

    draw() {
        fill(this.debugColor);
        noStroke();
        circle(this.x, this.y, this.size);
    }

    update(delta) {
        if (
            this.x < 0 ||
            this.x > canvasWidth ||
            this.y < 0 ||
            this.y > canvasHeight
        ) {
            this.kill();
        } else {
            super.update(delta);

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
            let reward =
                (dist(this.x, this.y, clock.x, clock.y) /
                    Math.sqrt(
                        (canvasWidth / 2) ** 2 + (canvasHeight / 2) ** 2
                    )) *
                this.reward;
            clock.health += reward;

            rewards.push(new Reward(this.x, this.y, Math.ceil(reward)));
        }

        killMonster(this);
    }
}
