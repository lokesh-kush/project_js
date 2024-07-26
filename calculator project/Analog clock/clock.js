let hours= document.getElementById("hour");
let min= document.getElementById("min");
let sec= document.getElementById("sec");

  function display(){
    let date= new Date();

    let hh=date.getHours();
    let mi=date.getMinutes();
    let s=date.getSeconds();

    let hRotation= 30*hh + mi/2 ;
    let mRotation=6*mi;
    let sRotation=6*s ;
    
    hours.style.transform =`rotate(${hRotation}deg)`; 
    min.style.transform =`rotate(${mRotation}deg)`; 
   sec.style.transform =`rotate(${sRotation}deg)`; 
  

}

setInterval(display, 1000);