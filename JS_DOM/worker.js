function updateDate() {
    let currentTime = new Date().toString();
    postMessage(currentTime);
    setTimeout(updateDate, 1000);
}
updateDate();