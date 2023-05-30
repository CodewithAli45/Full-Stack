const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

const display = document.getElementById('display');

var startTime;
var elapsedTime = 0;
var timeInterval;

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timeInterval = setInterval(updateTimer, 10);
    toggleButton(true);
}

function stopTimer() {
    clearInterval(timeInterval);
    toggleButton(false);
}

function resetTimer() {
    clearInterval(timeInterval);
    toggleButton(false);
    elapsedTime = 0;
    document.getElementById('display').textContent = formatTime(elapsedTime);
}

function updateTimer(){
    elapsedTime = Date.now() - startTime;
    document.getElementById('display').textContent = formatTime(elapsedTime);
}

function formatTime(time){
    var milli = Math.floor(time  % 1000)/10;
    var sec = Math.floor(time / 1000) % 60;
    var min = Math.floor(time / ( 1000 * 60)) % 60;
    var hr = Math.floor(time / (1000 * 60 * 60)) % 24;

    return (
        pad(hr) + " : " + 
        pad(min) + " : " + 
        pad(sec) + "" + 
        pad(milli)
    );

}

function pad(num){
    return ("0" + num).slice(-2);
}

function toggleButton(running) {
    document.getElementById('start').disable = running;
    document.getElementById('stop').disable = !running;
}

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);