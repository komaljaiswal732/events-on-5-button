let greeBtn = document.querySelector("#green");

let currmode ="white";

greeBtn.addEventListener("click",()=>{
    if(currmode ==="white"){
        currmode = "green";
        document.querySelector("body").style.backgroundColor ="green"
    }else{
        currmode ="white";
        document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(currmode);
});




let yellowBtn = document.querySelector("#yellow");

yellowBtn.addEventListener("click",()=>{
    if(currmode ==="white"){
        currmode = "yellow";
        document.querySelector("body").style.backgroundColor ="yellow"
    }else{
        currmode ="white";
        document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(currmode);
});




let pinkBtn = document.querySelector("#pink");

pinkBtn.addEventListener("click",()=>{
    if(currmode ==="white"){
        currmode = "pink";
        document.querySelector("body").style.backgroundColor ="pink"
    }else{
        currmode ="white";
        document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(currmode);
});




let redBtn = document.querySelector("#red");

redBtn.addEventListener("click",()=>{
    if(currmode ==="white"){
        currmode = "red";
        document.querySelector("body").style.backgroundColor ="red"
    }else{
        currmode ="white";
        document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(currmode);
});





let blueBtn = document.querySelector("#blue");

blueBtn.addEventListener("click",()=>{
    if(currmode ==="white"){
        currmode = "blue";
        document.querySelector("body").style.backgroundColor ="blue"
    }else{
        currmode ="white";
        document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(currmode);
});