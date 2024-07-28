let stabtn = document.querySelector('.start');
let stobtn = document.querySelector('.stop');
let h3 = document.querySelector('h3');
let div = document.querySelector('.div');

// div.style.backgroundColor = rgb(2,34,12);

function setColor(){
    let Rvalue = Math.floor(Math.random() * 255) + 1;
    let Gvalue = Math.floor(Math.random() * 255) + 1;
    let Bvalue = Math.floor(Math.random() * 255) + 1;
    

     let color = `rgb(${Rvalue},${Gvalue},${Bvalue})`; 
     div.style.backgroundColor = color;
    
     h3.innerText = color;
}
 
let b;
stabtn.addEventListener('click', () => {
     b=setInterval(setColor,2000);
    

})

stobtn.addEventListener('click', ()=>{
    clearInterval(b);
})
