const display = document.getElementById("display");
let timer = null;
let startTime=0;
let elapsedtime=0;
let isRunningm = false;

function start(){
    if(!isRunningm){
        startTime =Date.now() - elapsedtime;
        timer = setInterval(update,10);
        isRunningm = true;
    }
}
function stop(){
    if(isRunningm){
        clearInterval(timer);
        elapsedtime = Date.now() - startTime;
        isRunningm=false;
    }

}
function Reset(){
    timer = null;
    startTime=0;
    elapsedtime=0;
    isRunningm = false;
    display.textContent="00:00:00:00";

}
function update(){
    const currentTime = Date.now();
    elapsedtime = currentTime - startTime;
    let hours = Math.floor(elapsedtime/(1000*60*60));
    let minutes = Math.floor(elapsedtime/(1000*60)%60);
    let seconds = Math.floor(elapsedtime/1000%60);
    let ms = Math.floor(elapsedtime %1000 /10);
    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");
    ms = String(ms).padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${seconds}:${ms}`


}