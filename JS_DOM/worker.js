let prev;
function updateDate() {
    let currentTime = new Date().toString();
    let color1 = randomColor();
    let color2 = randomColor();
    while(color1 == color2 || prev == color1){
        color1 = randomColor();
    }
    postMessage([currentTime, color1, color2]);
    prev = color1;
    setTimeout(updateDate, 1000);
}
updateDate();

function randomColor() {
    const hex = ["red", "yellow", "green", "blue", "black", "white", "grey"];
    let color;
    color = hex[Math.floor(Math.random() * 6)];
    return color;
}