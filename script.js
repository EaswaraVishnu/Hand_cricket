'use strict'
//Generating target score
let score = 0
const target = Math.trunc(Math.random()*100+1);
document.querySelector(".target_text").textContent = `Your target score is ${target}`;


const buttons = document.getElementsByClassName("keys");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    const value = Number(this.value);
    display_score(value);
  });
}

const display_score = function(run){
    const com_choice = Math.trunc(Math.random()*6+1);
    document.querySelector(".computer_score").textContent = com_choice;
    run === com_choice ? document.querySelector(".target_text").textContent = "Howzaaaat !!!!" : score += run;
    document.querySelector(".player_score").textContent = score;
    display_result(score);
}

const display_result = function(a){
  if(score >= target){
    document.querySelector(".target_text").textContent = "You win";
  }
  else{
    document.querySelector(".target_text").textContent = `Need ${target-score} runs to win`;
  }
}

