const upSecond = document.getElementById("up-second");
const downSecond = document.getElementById("down-second");
const upMinute = document.getElementById("up-minute");
const downMinute = document.getElementById("down-minute");
const upHour = document.getElementById("up-hour");
const downHour = document.getElementById("down-hour");
const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");
const controls = document.getElementById("controls");
const shops = document.getElementById("shops");
const mainUi = document.getElementById("main-ui");

window.onkeydown = e => {
    if (e.keyCode == 65 || e.keyCode == 39) {
        minutes++
    } else if (e.keyCode == 68 || e.keyCode == 37) {
        if (--minutes < 0) {
            minutes += 60;
        }
    } else if (e.keyCode == 87 || e.keyCode == 38) {
        if (--seconds < 0) {
            seconds += 60;
        }
    } else if (e.keyCode == 83 || e.keyCode == 40) {
        seconds++
    } else if (e.keyCode == 81 || e.keyCode == 188) {
        hours++
    } else if (e.keyCode == 69 || e.keyCode == 190) {
        if (--hours < 0) {
            hours += 60;
        }
    }
    return !(e.keyCode == 32);
}

controls.onclick = () => {
    mainUi.innerHTML = ''
}

shops.onclick = () => {
    mainUi.innerHTML = ''
    const upgradesSection = document.createElement('section');
    upgradesSection.classList.add('upgrades');
    
    const upgrades = [
      { img: 'img', title: 'Bullet Size', description: 's' },
      { img: 'img', title: 'Helping Hand', description: 's' },
      { img: 'img', title: 'Powerup Reload Time', description: 's' },
      { img: 'img', title: 'Shield', description: 's' },
      { img: 'e/png', title: 'Kills Reward Amount', description: 's' }
    ];
    
    upgrades.forEach((upgrade) => {
      const article = document.createElement('article');
    
      const powerupsTitle = document.createElement('div');
      powerupsTitle.classList.add('powerups-title');
    
      const img = document.createElement('img');
      img.setAttribute('src', upgrade.img);
      powerupsTitle.appendChild(img);
    
      const title = document.createTextNode(upgrade.title);
      powerupsTitle.appendChild(title);
    
      const infoIcon = document.createElement('i');
      infoIcon.classList.add('fa-solid', 'fa-info');
      powerupsTitle.appendChild(infoIcon);
    
      const tooltip = document.createElement('p');
      tooltip.classList.add('powerups-tooltip');
    
      const descriptionLabel = document.createElement('span');
      descriptionLabel.textContent = 'Description: ';
      tooltip.appendChild(descriptionLabel);
    
      const description = document.createTextNode(upgrade.description);
      tooltip.appendChild(description);
    
      powerupsTitle.appendChild(tooltip);
      article.appendChild(powerupsTitle);
    
      const level = document.createElement('p');
      level.textContent = 'Level: 1';
      article.appendChild(level);
    
      const upgradeButton = document.createElement('div');
      upgradeButton.classList.add('upgrade-button');
      upgradeButton.textContent = 'Upgrade';
      article.appendChild(upgradeButton);
    
      upgradesSection.appendChild(article);
    });
    
    // Add the section to the DOM
    mainUi.append(upgradesSection)
}

timeDisplay = (hours, minutes, seconds) => { 
    hour.innerText = hours < 10 ? (hours == 0 ? 12 : "0" + hours) : hours;
    minute.innerText = minutes < 10 ? "0" + minutes : minutes;
    second.innerText = seconds < 10 ? "0" + seconds : seconds;
}

upSecond.onclick = () => {
    seconds++;
};

downSecond.onclick = () => {
    if (--seconds < 0) {
        seconds += 60;
    }
};

upMinute.onclick = () => {
    minutes++;
};

downMinute.onclick = () => {
    if (--minutes < 0) {
        minutes += 60;
    }
};

upHour.onclick = () => {
    hours++;
};

downHour.onclick = () => {
    if (--hours < 0) {
        hours += 60;
    }
};

function handleVisibilityChange() {
    if (document.hidden) {
        // Page is hidden
        isPageVisible = false;
    } else {
        // Page is visible
        isPageVisible = true;
    }

    console.log(isPageVisible);
}
