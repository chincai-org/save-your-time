class Hand {
    constructor(length, color, degree = 0) {
        this.length = length;
        this.color = color;
        this.degree = degree;
    }

    /**
     * @returns {number[]}
     */
    get endPoint() {
        return [
            midPointX +
                this.length *
                    Math.cos((this.degree * Math.PI) / 180 + Math.PI * 0.5),
            midPointY -
                this.length *
                    Math.sin((this.degree * Math.PI) / 180 + Math.PI * 0.5)
        ];
    }

    draw() {
        stroke(this.color);
        strokeWeight(lineThickness);
        line(midPointX, midPointY, ...this.endPoint);
    }

    rotate(deg = (6 * Math.PI) / 180) {
        this.degree += deg;
    }

    shoot() {
        projectiles.push(
            new Projectile(
                ...this.endPoint,
                createVector(
                    this.endPoint[0] - midPointX,
                    this.endPoint[1] - midPointY
                )
            )
        );
    }
}
