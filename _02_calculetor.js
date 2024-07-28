let display=document.getElementById("inputbox");
let buttons=document.querySelectorAll("button");

const arrayBottons=Array.from(buttons);
let string=" "

arrayBottons.forEach(btn => {

    btn.addEventListener("click", function (event) {
        if(event.target.innerHTML=="del"){
            string=string.substring(0,string.length-1);
            display.value=string;
        }
        else if(event.target.innerHTML=="ac"){
            string=" "
            display.value=string;

        } 
        else if(event.target.innerHTML=="="){
            string=eval(string);
            display.value=string;

        }
        else{
           string +=event.target.innerHTML;
           display.value=string;
        } 

   // console.log(event.target.innerHTML);
});
});