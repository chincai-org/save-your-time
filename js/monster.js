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

    static normal(x, y, vector) {
        return new Monster(x, y, vector, 30);
    }

    static tank(x, y, vector) {
        return new Monster(
            x,
            y,
            vector,
            40,
            monsterHealth + 20,
            monsterSpeed,
            monsterDamage
        );
    }

    static speedy(x, y, vector) {
        return new Monster(
            x,
            y,
            vector,
            30,
            monsterHealth,
            monsterSpeed + 20,
            monsterDamage
        );
    }

    static assasin(x, y, vector) {
        return new Monster(
            x,
            y,
            vector,
            30,
            monsterHealth,
            monsterSpeed,
            monsterDamage + 20
        );
    }

    draw() {
        fill(black);
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
        killMonster(this);
    }
}
