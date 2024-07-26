let btn= document.querySelector("button");
let inp= document.querySelector("input");
let ul= document.querySelector("ul");

btn.addEventListener("click" , function(){

    let item = document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";
   
    let delBtn = document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("Delete");
    item.appendChild(delBtn);

     
});
ul.addEventListener("dblclick", function(event){
  if(event.target.nodeName == "BUTTON"){
    event.target.parentElement.remove();
    console.log("delete");
  }
})