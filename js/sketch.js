const canvasWidth = window.innerWidth * 0.7;
const canvasHeight = window.innerHeight;
const midPointX = canvasWidth / 2;
const midPointY = canvasHeight / 2;

const black = 0;
const grey = [211, 211, 211];
const red = [255, 0, 0];
const green = [0, 255, 0];
const blue = [0, 0, 255];

const hourHandSize = 15;
const minuteHandSize = 30;
const secondHandSize = 50;

const lineThickness = 5;

const projectileSpeed = 2;
const projectileDamage = 5;

let clock;

let hours = 0;
let minutes = 0;
let seconds = 0;

const projectiles = [];

function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("main");

    clock = new Clock();

    setInterval(() => {
        seconds++;

        minutes += Math.floor(seconds / 60000);
        seconds %= 60;
        hours += Math.floor(minutes / 60);
        minutes %= 60;
        hours %= 12;
    }, 1000);
}

function draw() {
    background(grey);

    clock.hands.hour.degree = -30 * hours + -0.5 * minutes;
    clock.hands.minute.degree = -6 * minutes + -0.1 * seconds;
    clock.hands.second.degree = -6 * seconds;

    clock.draw();

    for (let projectile of projectiles) {
        projectile.update();
        projectile.draw();
    }
}

function keyPressed(e) {
    e.preventDefault();
    if (keyCode === " ".charCodeAt(0)) {
        clock.shoot();
    }
}

function killProjectile(projectile) {
    projectiles.splice(projectiles.indexOf(projectile), 1);
}
