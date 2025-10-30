const display = document.getElementById("display");

const date = new Date();
let startTime = 0;
let elapsedTime = 0;
let timer = null;
let isRunning = false;


function start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        isRunning = true;
    }
}

function stop(){

    if(isRunning){
        clearInterval(timer)
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){

    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
}

function update(){

    const CurrentTime = Date.now();
    elapsedTime = CurrentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60)% 60);
    let seconds = Math.floor(elapsedTime / 1000) % 60 ;
    let millisecond = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    millisecond = String(millisecond).padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${seconds}:${millisecond}`
}