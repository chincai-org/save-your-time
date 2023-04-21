class Hand {
    constructor(length, color, degree = 0) {
        this.length = length;
        this.color = color;
        this.degree = degree;
    }

    /**
     * @returns {number[]}
     */
    findEndPoint(x, y) {
        return [
            x +
                this.length *
                    Math.cos((this.degree * Math.PI) / 180 + Math.PI * 0.5),
            y -
                this.length *
                    Math.sin((this.degree * Math.PI) / 180 + Math.PI * 0.5)
        ];
    }

    draw(x, y) {
        stroke(this.color);
        strokeWeight(lineThickness);
        line(x, y, ...this.findEndPoint(x, y));
    }

    rotate(deg = (6 * Math.PI) / 180) {
        this.degree += deg;
    }

    shoot(x, y) {
        let endPoint = this.findEndPoint(x, y);
        projectiles.push(
            new Projectile(
                ...endPoint,
                createVector(endPoint[0] - x, endPoint[1] - y)
            )
        );
    }
}
