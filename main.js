var counterscreen = document.querySelector(".counter-screen");
var counterreduce = document.querySelector(".counter-reduce");
var counterincrease = document.querySelector(".counter-increase")
var reset = document.querySelector(".reset")
var counter = 0

function decreament(){
    if(counter>0){
        counter--
    }
    updateScreen();
}

function increament(){
    counter++;

    updateScreen();
}

function resetValue(){
    if(counter>0){
        counter = 0
    }
    updateScreen();
}

function updateScreen(){
    counterscreen.innerHTML = counter
}


counterreduce.addEventListener("click", decreament);
counterincrease.addEventListener("click", increament);
reset.addEventListener("click", resetValue)


