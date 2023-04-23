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
        return new Monster(x, y, vector, 30, grey, 5, 0.02, 20, 6);
    }

    static epic(x, y, vector, choice) {
        switch (choice || randint(1, 3)) {
            case 1:
                return new Monster(x, y, vector, 40, grey, 25, 0.017, 15, 15); // tank
            case 2:
                return new Monster(x, y, vector, 30, blue, 4, 0.05, 10, 7); // speedy
            case 3:
                return new Monster(x, y, vector, 30, red, 5, 0.02, 60, 9); // assassin
        }
    }

    static mythic(x, y, vector, choice) {
        switch (choice || randint(1, 3)) {
            case 1:
                return new Monster(x, y, vector, 40, blue, 25, 0.0335, 15, 22); // speedy tank
            case 2:
                return new Monster(x, y, vector, 30, purple, 5, 0.04, 60, 16); // speedy assassin
            case 3:
                return new Monster(x, y, vector, 40, red, 25, 0.0235, 60, 23); // tank assassin
        }
    }

    draw() {
        fill(this.debugColor);
        noStroke();
        circle(this.x, this.y, this.size);
    }

    update(delta) {
        if (
            this.x < -this.size ||
            this.x > canvasWidth + this.size ||
            this.y < -this.size ||
            this.y > canvasHeight + this.size
        ) {
            this.kill();
        } else {
            super.update(delta);

            if (
                dist(this.x, this.y, clock.x, clock.y) <
                clock.size / 2 + this.size / 2
            ) {
                clock.takeDamage(this.damage);
                return this.kill();
            }

            if (smallClock) {
                if (
                    dist(this.x, this.y, smallClock.x, smallClock.y) <
                    smallClock.size / 2 + this.size / 2
                ) {
                    smallClock.takeDamage(this.damage);
                    return this.kill();
                }
            }

            if (shield) {
                if (
                    dist(this.x, this.y, shield.x, shield.y) <
                    shield.size / 2 + this.size / 2
                ) {
                    shield.takeDamage(this.damage);
                    return this.kill();
                }
            }

            if (timeBomb) {
                if (
                    dist(this.x, this.y, timeBomb.x, timeBomb.y) <
                    timeBomb.size / 2 + this.size / 2
                ) {
                    return this.kill();
                }
            }
        }
    }

    takeDamage(n) {
        super.takeDamage(n);
        enemyHurtSound.play();
    }

    kill() {
        if (this.health <= 0) {
            let reward =
                (dist(this.x, this.y, clock.x, clock.y) /
                    Math.sqrt(
                        (canvasWidth / 2) ** 2 + (canvasHeight / 2) ** 2
                    )) *
                this.reward *
                rewardMulitplier;

            clock.health += reward;
            if (smallClock)
                smallClock.health = Math.min(
                    smallClock.health + reward / 2,
                    60
                );
            score += reward;

            rewards.push(new Reward(this.x, this.y, Math.ceil(reward)));
        }

        killMonster(this);
    }
}
