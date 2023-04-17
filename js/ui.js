const upSecond = document.getElementById("up-second");
const downSecond = document.getElementById("down-second");
const upMinute = document.getElementById("up-minute");
const downMinute = document.getElementById("down-minute");
const upHour = document.getElementById("up-hour");
const downHour = document.getElementById("down-hour");
const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");

window.onkeydown = e => {
    return !(e.keyCode == 32);
};

function timeDisplay(hours,minutes,seconds) {
    hour.innerText = hours < 10? hours == 0? 12 : '0' + hours : hours 
    minute.innerText = minutes < 10? '0' + minutes : minutes 
    second.innerText = seconds < 10? '0' + seconds : seconds 
}

upSecond.onclick = () => {
    seconds++;
};

downSecond.onclick = () => {
    if (--seconds <= 0) {
        seconds += 60;
    }
};

upMinute.onclick = () => {
    minutes++;
};

downMinute.onclick = () => {
    if (--minutes <= 0) {
        minutes += 60;
    }
};

upHour.onclick = () => {
    hours++;
};

downHour.onclick = () => {
    if (--hours <= 0) {
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
