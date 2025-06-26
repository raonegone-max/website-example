// website-example
//this a example web site of a restaurant
let tap=document.querySelector("#tap");
let img=document.querySelector(".menu");
let tap2=document.querySelector("#tap2");
let img2=document.querySelector(".menu2");

tap.addEventListener("click",()=>{
    if(img.style.display==="none"){
        img.style.display="block";
    }else{
        img.style.display="none";
    }
})
tap2.addEventListener("click",()=>{
    if(img2.style.display==="none"){
        img2.style.display="block";
    }else{
        img2.style.display="none";
    }
})
