let boxTop = 200;
let boxLeft = 200;

document.getElementById("box").style.top = boxTop + "px";

document.addEventListener('keydown', logKey);

function logKey(e) {
    log.textContent += ` ${e.code}`;
}