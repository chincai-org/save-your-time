class Sprite {
    constructor(x, y, vector, size, health, speed, damage) {
        this.x = x;
        this.y = y;
        this.vector = vector;
        this.size = size;
        this.health = health;
        this.speed = speed;
        this.damage = damage;

        this.direction = this.vector.normalize().mult(speed);
    }

    draw() {}
    kill() {}

    takeDamage(n) {
        console.log("ouch");
        this.health -= n;

        if (this.health <= 0) {
            this.kill();
        }
    }

    update() {
        this.x += this.direction.x;
        this.y += this.direction.y;
    }
}
