
const btn=document.querySelector(".toggler");
const nb=document.querySelector("aside");
const min=document.querySelector("main");

btn.addEventListener("click",()=>{
    nb.classList.toggle("toggle");
    min.classList.toggle("toggle");
})


const drop=document.getElementById("nav-hover");
const item=document.getElementById("dynamic");

drop.addEventListener("click",()=>{
    item.classList.toggle("none");
})