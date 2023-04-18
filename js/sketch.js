const canvasWidth = window.innerWidth * 0.7;
const canvasHeight = window.innerHeight;
const midPointX = canvasWidth / 2;
const midPointY = canvasHeight / 2;

const black = 0;
const white = [255, 255, 255];
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
const monsterHealth = 5;
const monsterSpeed = 0.2;
const monsterDamage = 3;

let clock;
let bg;

let hours = 0;
let minutes = 0;
let seconds = 0;

let isPageVisible = true;
let lastUpdate = 0;

const projectiles = [];
const monsters = [];

let waveCount = 0;

let minBatch = 2;
let maxBatch = 4;
let minSpawn = 1;
let maxSpawn = 2;

let nextWaveTime = 0;
let nextBatchTime = 0;

function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("main");

    bg = loadImage("assets/bg.png");

    clock = new Clock();

    document.onvisibilitychange = handleVisibilityChange;

    setInterval(() => {
        for (let i = 0; i < 5; i++) {
            spawnMonster();
        }
        console.log("spawn 5");
        console.log("total:", monsters.length);
    }, 5000);
}

function draw() {
    background(bg);
    // background(grey);

    let now = Date.now();

    if (lastUpdate !== 0) {
        let deltaTime = now - lastUpdate;

        clock.health -= deltaTime / 1000;

        seconds += deltaTime / 1000;
        minutes += Math.floor(seconds / 60);
        seconds %= 60;
        hours += Math.floor(minutes / 60);
        minutes %= 60;
        hours %= 12;

        timeDisplay(...[hours, minutes, seconds].map(Math.floor));
    }

    lastUpdate = now;

    clock.hands.hour.degree = -30 * hours + -0.5 * minutes;
    clock.hands.minute.degree = -6 * minutes + -0.1 * seconds;
    clock.hands.second.degree = -6 * seconds;

    clock.draw();

    for (let projectile of projectiles) {
        projectile.update();
        projectile.draw();
    }

    for (let monster of monsters) {
        monster.update();
        monster.draw();
    }
}

function keyPressed(e) {
    e.preventDefault();
    if (keyCode === " ".charCodeAt(0)) {
        clock.shoot();
    } else if (keyCode === 100) {
        upSecond.click();
    } else if (keyCode === 101) {
        upMinute.click();
    } else if (keyCode === 102) {
        upHour.click();
    } else if (keyCode === 97) {
        downSecond.click();
    } else if (keyCode === 98) {
        downMinute.click();
    } else if (keyCode === 99) {
        downHour.click();
    }
}

function randint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function killProjectile(projectile) {
    projectiles.splice(projectiles.indexOf(projectile), 1);
}

function killMonster(monster) {
    monsters.splice(monsters.indexOf(monster), 1);
}

function spawnMonster() {
    let x0 = 0;
    let y0 = 0;
    let x1 = canvasWidth - 1;
    let y1 = canvasHeight - 1;

    let choice = randint(0, 3);

    switch (choice) {
        case 0:
            x0 = canvasWidth - 1;
            break;
        case 1:
            x1 = 0;
            break;
        case 2:
            y0 = canvasHeight - 1;
            break;
        case 3:
            y1 = 0;
            break;
    }

    // console.log(x0, y0, x1, y1);

    let x = randint(x0, x1);
    let y = randint(y0, y1);

    monsters.push(
        new Monster(x, y, createVector(midPointX - x, midPointY - y))
    );
}
