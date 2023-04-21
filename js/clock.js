class Clock extends Sprite {
    constructor(
        x = midPointX,
        y = midPointY,
        image = clockImage,
        health = 180
    ) {
        super(x, y, createVector(0, 0), image.width, health, 0, 0);

        this.image = image;
        this.font = loadFont("assets/ChivoMono.ttf");
        this.hands = {
            second: new Hand((this.size * 50) / 128, red),
            minute: new Hand((this.size * 30) / 128, green),
            hour: new Hand((this.size * 15) / 128, blue)
        };
    }

    draw() {
        image(
            this.image,
            canvasWidth / 2 - this.image.width / 2,
            canvasHeight / 2 - this.image.height / 2
        );

        for (let hand of Object.values(this.hands)) {
            hand.draw();
        }

        stroke(black);
        rect(midPointX, midPointY, lineThickness / 2, lineThickness / 2);

        this.drawHealth();
    }

    drawHealth() {
        let upperText = lastWaveTime
            ? `Wave ${waveCount + 1} starts in:`
            : "Time left:";
        let bottomText = lastWaveTime
            ? waveRate / 1000 - Math.floor((Date.now() - lastWaveTime) / 1000)
            : this.health <= 0
            ? "Dead"
            : this.formatTime();

        noStroke();
        fill(black, 120);
        textSize(45);
        textFont(this.font);
        textAlign(CENTER, CENTER);
        text(upperText, midPointX, midPointY * 0.15);
        text(bottomText, midPointX, midPointY * 0.3);

        if (lastWaveTime) {
            text("Press 'S' to skip countdown", midPointX, midPointY * 0.45);
        }
    }

    addHand(name, length, color) {
        this.hands[name] = new Hand(length, color);
    }

    shoot() {
        for (let hand of Object.values(this.hands)) {
            hand.shoot();
        }
    }

    kill() {
        console.log("dead");
    }

    formatTime() {
        // Format seconds in this.health to hh:mm:ss
        let seconds = Math.floor(this.health);
        let minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        let hours = Math.floor(minutes / 60);
        minutes -= hours * 60;
        hours %= 24;

        return nf(hours, 2) + ":" + nf(minutes, 2) + ":" + nf(seconds, 2);
    }
}
