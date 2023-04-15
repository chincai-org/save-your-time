class Projectile extends Sprite {
    constructor(x, y, vector) {
        super(x, y, vector, projectileSpeed, projectileDamage);
    }

    draw() {
        let size = 10;
        fill(red);
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
            killProjectile(this);
            console.log("kill");
        } else {
            super.update();
        }
    }
}
