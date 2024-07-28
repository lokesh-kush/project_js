const days= document.getElementById('days');
const hours= document.getElementById('hours');
const mins= document.getElementById('mins');
const secs= document.getElementById('secs');
 
const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}
const updateCountDown = (deadline) => {
const currentTime =  new Date();
const timeDifference = deadline - currentTime; //millisecounds
    

   // calculate days , hours,min, sec

   let calSecs = Math.floor( timeDifference / 1000) % 60;
   console.log(calSecs);
   let calMins =   Math.floor(timeDifference / 1000 / 60) % 60;
   let calHours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
   let calcDays =   Math.floor(timeDifference / 1000 / 60 / 60 /24);

   days.textContent = formatTime(calcDays);
   mins.textContent = formatTime(calMins);
   hours.textContent = formatTime(calHours);
   secs.textContent = formatTime(calSecs);
   console.log(secs);
}
 const countDown= (targetDate)=>{
    setInterval(()=> updateCountDown(targetDate), 1000);
 }

const targetDate = new Date("june 01 2023 07:00");
countDown(targetDate);
