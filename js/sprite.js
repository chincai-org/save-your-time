class Sprite {
    constructor(x, y, vector, size, health, speed, damage) {
        this.x = x;
        this.y = y;
        this.vector = vector;
        this.size = size;
        this.health = health;
        this.speed = speed;
        this.damage = damage;
    }

    direction(delta) {
        let aspectRatio = canvasWidth / canvasHeight;
        let currentSpeed = this.speed / Math.sqrt(aspectRatio);
        let distance = currentSpeed * delta;

        return this.vector.normalize().mult(distance);
    }

    draw() {}
    kill() {}

    takeDamage(n) {
        // console.log("ouch");
        this.health -= n;

        if (this.health <= 0) {
            this.kill();
        }
    }

    update(delta) {
        let direction = this.direction(delta);
        this.x += direction.x;
        this.y += direction.y;
    }
}
