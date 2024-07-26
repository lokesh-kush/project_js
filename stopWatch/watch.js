let timer=document.querySelector(".timer");
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");


let msec=00;
let sec=00;
let min=00;

let timerId=null;

start.addEventListener(`click`,()=>{
    if(timerId !== null){
        clearInterval(timerId);

    }

   timerId= setInterval(startString,10);
});

stop.addEventListener(`click`,()=>{
      clearInterval(timerId);
});

reset.addEventListener(`click`,()=>{
    clearInterval(timerId);
    timer.innerHTML =`00:00:00`;
    msec=sec=min=00;
});

function startString(){
    msec++;
    if(msec == 100){
      msec=0;
      sec++;
      if(sec == 60){
        sec=0;
     min++;
}}

let msecString= msec<10 ? `0${msec}`: msec;
let secString= sec<10 ? `0${sec}`: sec;
let minString= min<10 ? `0${min}`: min;

timer.innerHTML= `${msecString} : ${secString} : ${minString}`;
}