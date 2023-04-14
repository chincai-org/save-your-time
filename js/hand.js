class Hand {
    constructor(length, color, degree = 0) {
        this.length = length;
        this.color = color;
        this.degree = degree;
    }

    draw() {
        let x2 =
            midPointX +
            this.length *
                Math.cos((this.degree * Math.PI) / 180 + Math.PI * 0.5);
        let y2 =
            midPointY -
            this.length *
                Math.sin((this.degree * Math.PI) / 180 + Math.PI * 0.5);

        stroke(this.color);
        strokeWeight(lineThickness);
        line(midPointX, midPointY, x2, y2);
    }

    rotate(deg = (6 * Math.PI) / 180) {
        console.log(this.degree, "bruh");
        this.degree += deg;
    }
}
