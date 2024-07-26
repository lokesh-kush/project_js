const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
let image =document.querySelectorAll(".image");

let sideN0=1;
let length=image.length;

const next=()=>{
    slider.style.transform = `translateX(-${sideN0*800}px)`; 
   sideN0++;
};

const prev=()=>{

    slider.style.transform=`translateX(-${(sideN0-2)*800}px)`;
        sideN0--;
}
const first=()=>{
    slider.style.transform = `translateX(0px)`; 
    sideN0=1;

}

const last=()=>{
    slider.style.transform=`translateX(-${(length-1)*800}px)`;
    sideN0=length;

}

right.addEventListener('click',()=>{
    sideN0<length ? next():first();
});

left.addEventListener('click',()=>{
    sideN0 > 1 ?prev():last();
});


/*right.addEventListener('click',()=>{
    if(sideN0<image.length){
   slider.style.transform = `translateX(-${sideN0*800}px)`; 
   sideN0++;
}else{
    slider.style.transform = `translateX(0px)`; 
   sideN0=1;
}
});


left.addEventListener('click',()=>{
    if(sideN0<image.length){
        slider.style.transform=`translateX(-${(sideN0-2)*800}px)`;
        sideN0--;
    }else{
        slider.style.transform=`translateX(-${(length-1)*800}px)`;
        sideN0=image.length;
    }
});*/
