'use strict'
//Generating computer choice
let score = 0

const buttons = document.getElementsByClassName("keys");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    const value = Number(this.value);
    display(value);
  });
}

const display = function(run){
    const com_choice = Math.trunc(Math.random()*6+1);
    run === com_choice ? score = 0 : score += run;
    document.querySelector(".score").textContent = score;
}


