const upSecond = document.getElementById("up-second");
const downSecond = document.getElementById("down-second");
const upMinute = document.getElementById("up-minute");
const downMinute = document.getElementById("down-minute");
const upHour = document.getElementById("up-hour");
const downHour = document.getElementById("down-hour");
const controls = document.getElementById("controls");
const shops = document.getElementById("shops");
const mainUi = document.getElementById("main-ui");
const playBtn = document.getElementById("play");
const playAgain = document.getElementById("play-again");
const startPage = document.querySelector(".start");
const flashText = document.querySelector(".flash-text");
const lose = document.querySelector(".lose");

function lost() {
    lose.style.visibility == "visible";
}

window.onkeydown = e => {
    return !(e.keyCode == 32);
};

playBtn.onclick = () => {
    startPage.style.visibility = "hidden";
    playBtn.style.visibility = "hidden";
    flashText.style.visibility = "hidden";
    start = true;
    //start gameplay
    spawnControls();
};

playAgain.onclick = () => {
    lose.style.visibility == "hidden";
    //restart gameplay
};

controls.onclick = spawnControls;

function spawnControls() {
    mainUi.innerHTML = ``;
    // Create section "shoot"
    const shootSection = document.createElement("section");
    shootSection.className = "shoot";
    const timeUnits = ["second", "minute", "hour"];
    timeUnits.forEach(unit => {
        const article = document.createElement("article");
        const h5 = document.createElement("h5");
        h5.textContent = `${unit.charAt(0).toUpperCase() + unit.slice(1)} hand`;
        article.appendChild(h5);
        const upDiv = document.createElement("div");
        upDiv.id = `up-${unit}`;
        upDiv.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

        upDiv.onclick = () => {
            eval(`${unit}s++`);
            tickSound.play();
        };

        article.appendChild(upDiv);
        const p = document.createElement("p");
        p.id = unit;
        p.textContent = "00";
        article.appendChild(p);
        const downDiv = document.createElement("div");
        downDiv.id = `down-${unit}`;
        downDiv.innerHTML = '<i class="fa-solid fa-arrow-down"></i>';

        downDiv.onclick = () => {
            eval(`if (--${unit}s <= 0) {
                ${unit}s += 60;
            }`);
            tickSound.play();
        };

        article.appendChild(downDiv);
        shootSection.appendChild(article);
    });
    mainUi.appendChild(shootSection);
    // Create section "powerups"
    const powerupsSection = document.createElement("section");
    powerupsSection.className = "powerups";
    const h2 = document.createElement("h2");
    h2.textContent = "Powerups";
    powerupsSection.appendChild(h2);
    const powerups = [
        {
            title: "Mirror",
            description: "You can shoot enemies behind and in front of you"
        },
        {
            title: "Double Trouble",
            description: "Summon a second clock to fight enemies alongside"
        },
        {
            title: "Time Bomb",
            description: "A bomb that is set to explode in 3 seconds"
        }
    ];
    powerups.forEach((powerup, index) => {
        const article = document.createElement("article");
        article.className = `power${index + 1}`;
        const powerupsTitleDiv = document.createElement("div");
        powerupsTitleDiv.className = "powerups-title";
        powerupsTitleDiv.innerHTML = `${powerup.title}<i class="fa-solid fa-info"></i>`;
        article.appendChild(powerupsTitleDiv);
        const powerupsTooltipP = document.createElement("p");
        powerupsTooltipP.className = "powerups-tooltip";
        powerupsTooltipP.innerHTML = `<span>Description: </span>${powerup.description}`;
        powerupsTitleDiv.appendChild(powerupsTooltipP);
        const img = document.createElement("img");
        img.textContent = "img";
        article.appendChild(img);
        powerupsSection.appendChild(article);
    });
    mainUi.appendChild(powerupsSection);
}

shops.onclick = () => {
    mainUi.innerHTML = "";
    const upgradesSection = document.createElement("section");
    upgradesSection.classList.add("upgrades");

    const upgrades = [
        { img: "img", title: "Bullet Size", description: "s" },
        { img: "img", title: "Helping Hand", description: "s" },
        { img: "img", title: "Powerup Reload Time", description: "s" },
        { img: "img", title: "Shield", description: "s" },
        { img: "e/png", title: "Kills Reward Amount", description: "s" }
    ];

    upgrades.forEach(upgrade => {
        const article = document.createElement("article");

        const powerupsTitle = document.createElement("div");
        powerupsTitle.classList.add("powerups-title");

        const img = document.createElement("img");
        img.setAttribute("src", upgrade.img);
        powerupsTitle.appendChild(img);

        const title = document.createTextNode(upgrade.title);
        powerupsTitle.appendChild(title);

        const infoIcon = document.createElement("i");
        infoIcon.classList.add("fa-solid", "fa-info");
        powerupsTitle.appendChild(infoIcon);

        const tooltip = document.createElement("p");
        tooltip.classList.add("powerups-tooltip");

        const descriptionLabel = document.createElement("span");
        descriptionLabel.textContent = "Description: ";
        tooltip.appendChild(descriptionLabel);

        const description = document.createTextNode(upgrade.description);
        tooltip.appendChild(description);

        powerupsTitle.appendChild(tooltip);
        article.appendChild(powerupsTitle);

        const level = document.createElement("p");
        level.textContent = "Level: 1";
        article.appendChild(level);

        const upgradeButton = document.createElement("div");
        upgradeButton.classList.add("upgrade-button");
        upgradeButton.textContent = "Upgrade";
        article.appendChild(upgradeButton);

        upgradesSection.appendChild(article);
    });

    // Add the section to the DOM
    mainUi.append(upgradesSection);
};

function timeDisplay(hours, minutes, seconds) {
    try {
        const second = document.getElementById("second");
        const minute = document.getElementById("minute");
        const hour = document.getElementById("hour");
        hour.innerText = hours < 10 ? (hours == 0 ? 12 : "0" + hours) : hours;
        minute.innerText = minutes < 10 ? "0" + minutes : minutes;
        second.innerText = seconds < 10 ? "0" + seconds : seconds;
    } catch (e) {}
}

function handleVisibilityChange() {
    if (document.hidden) {
        // Page is hidden
        draw();
        isPageVisible = false;
    } else {
        // Page is visible
        let now = Date.now();

        if (lastWaveTime) {
            lastWaveTime += now - lastUpdate;
        }

        lastUpdate = now;
        isPageVisible = true;
    }

    console.log(isPageVisible);
}
