class Clock {
    constructor() {
        this.image = loadImage("assets/clock.png");
        this.hands = {
            second: new Hand(secondHandSize, red),
            minute: new Hand(minuteHandSize, green),
            hour: new Hand(hourHandSize, blue)
        };
    }

    draw() {
        image(
            this.image,
            canvasWidth / 2 - this.image.width / 2,
            canvasHeight / 2 - this.image.height / 2
        );

        for (let hand of Object.values(this.hands)) {
            console.log(hand);
            hand.draw();
        }

        stroke(black);
        rect(midPointX, midPointY, lineThickness / 2, lineThickness / 2);
    }

    addHand(name, length, color) {
        this.hands[name] = new Hand(length, color);
    }
}
