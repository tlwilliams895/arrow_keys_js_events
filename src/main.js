let boxTop = 200;
let boxLeft = 200;

document.addEventListener('keydown', logKey);
//If-Else-If Statement
// function logKey(e) {
//     log.textContent += ` ${e.code}`;
//     if (e.code === "ArrowUp") {
//         document.getElementById("box").style.top = (boxTop -= 10) + "px";
//     } else if (e.code === "ArrowDown") {
//         document.getElementById("box").style.top = (boxTop += 10) + "px";
//     } else if (e.code === "ArrowLeft") {
//         document.getElementById("box").style.left = (boxLeft -= 10) + "px";
//     } else if (e.code === "ArrowRight") {
//         document.getElementById("box").style.left = (boxLeft += 10) + "px";
//     }
// }


// Switch Statement
function logKey(e) {
    // stops and prevents arrow keys to keep the movevemnt from
    // going off of the page
    event.preventDefault();
    log.textContent += ` ${e.code}`;
    switch (e.code) {
        case "ArrowUp":
            document.getElementById("box").style.top = (boxTop -= 10) + "px";
            break;
        case "ArrowDown":
            document.getElementById("box").style.top = (boxTop += 10) + "px";
            break;
        case "ArrowRight":
            document.getElementById("box").style.left = (boxLeft += 10) + "px";
            break;
        case "ArrowLeft":
            document.getElementById("box").style.left = (boxLeft -= 10) + "px";
            break;
    }
}