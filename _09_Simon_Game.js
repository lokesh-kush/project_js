let gameSeq = [];
let userSeq = [];

let started =false;
let level=0;

let btns = ["b1","b2","b3","b4"];

let h3 = document.querySelector("h3");
 

 
document.addEventListener("keypress" , function(){
   if(started== false){
    console.log("game start");
    started=true;
}
 
  levelUp();

});



function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },500);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}


function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`

    let randInx =Math.floor(Math.random()*3);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`)
    // console.log(randColor);
    // console.log(randBtn);
    // console.log(randInx);

    gameSeq.push(randColor);
    console.log("game seq",gameSeq)
    
    gameFlash(randBtn);
}
function checkAns(idx){


    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h3.innerHTML=`Game Over ! <b>Your Score Was ${level}<b><br> press any key to start game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        }, 150);
       reset();
    }
}

function pressBtn(){
    
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click", pressBtn);
}

function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
     
}