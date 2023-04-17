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
    return !(e.keyCode == 32)
}

function timeDisplay(hours,minutes,seconds) {
    hour.innerText = hours;
    minute.innerText = minutes
    second.innerText = seconds
}

upSecond.onclick = () => {
    seconds++;
}

downSecond.onclick = () => {
    seconds--;
}

upMinute.onclick = () => {
    minutes++;
}

downMinute.onclick = () => {
    minutes--;
}

upHour.onclick = () => {
    hours++;
}

downHour.onclick = () => {
    hours--;
}

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
