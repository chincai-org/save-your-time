class Projectile extends Sprite {
    constructor(
        x,
        y,
        vector,
        size = 10,
        speed = projectileSpeed,
        damage = projectileDamage,
        image = projectileImage
    ) {
        super(x, y, vector, size * bulletSizeMultiplier, -1, speed, damage);
        this.image = image;
    }

    draw() {
        image(
            this.image,
            this.x - this.image.width / 2,
            this.y - this.image.height / 2
        );
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

            for (let monster of monsters) {
                // Check if projectile hit monster
                if (
                    dist(this.x, this.y, monster.x, monster.y) <
                    monster.size / 2 + this.size / 2
                ) {
                    monster.takeDamage(this.damage);
                    this.kill();
                }
            }
        }
    }

    kill() {
        killProjectile(this);
    }
}
