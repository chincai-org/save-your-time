class Shield extends Sprite {
    constructor(health = 15) {
        super(midPointX, midPointY, createVector(0, 0), 150, health, 0, 0);
        this.lastHeal = Date.now();
    }

    draw() {
        noFill();
        stroke(lightBlue);
        strokeWeight(2);
        circle(this.x, this.y, this.size);

        this.drawHealth();
    }

    update() {
        let now = Date.now();
        if (now - this.lastHeal > shieldHealRate) {
            if (this.health < shieldMaxHealth * shieldLevel) {
                this.health += shieldHeal;
                this.lastHeal = now;
            }
        }
    }

    drawHealth() {
        noStroke();
        fill(grey);
        textSize(15);
        text(this.formatTime(), this.x, this.y - this.size / 2 - 10);
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

    kill() {
        shield = null;
        shieldCost = 40
        shieldLevel = 0
        let shieldBtn = document.getElementById("shield-btn");
        let shiieldLevelText = document.getElementById("shield-level");
        if (shieldBtn && shieldLevel) {
            shieldBtn.textContent = `Cost: ${shieldCost}sec`;
            shiieldLevelText.textContent = `Level: ${shieldLevel}`;
        }
    }
}
