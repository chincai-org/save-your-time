class Sprite {
    constructor(x, y, vector, speed, damage) {
        this.x = x;
        this.y = y;
        this.vector = vector;
        this.speed = speed;
        this.damage = damage;

        this.direction = this.vector.normalize().mult(speed);
    }

    draw() {}

    update() {
        this.x += this.direction.x;
        this.y += this.direction.y;
    }
}
