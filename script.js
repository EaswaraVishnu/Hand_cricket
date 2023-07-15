'use strict'
//Generating target score
let score = 0
const target = Math.trunc(Math.random()*100+1);
document.querySelector(".target_text").textContent = `Your target score is ${target}`;

//Getting player name
const player_name = prompt("Enter player name")
document.querySelector(".target_score").textContent = `${player_name} score - ${score}/0 `;
document.querySelector(".player_name").textContent = `${player_name}`;


//getting button value
const buttons = document.getElementsByClassName("keys");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    const value = Number(this.value);
    display_score(value);
  });
}

//main game logic
const display_score = function(run){
  const com_choice = Math.trunc(Math.random()*6+1);
  document.querySelector(".image").src = `image_${run}.jpg`;
  document.querySelector(".image2").src = `image_${com_choice}.jpg`;
  document.querySelector(".player_score").textContent = run;
  document.querySelector(".computer_score").textContent = com_choice;
  if (run != com_choice){
    score += run;
    document.querySelector(".target_score").textContent = `${player_name} score - ${score}/0 `;
    display_result(score);
  }
  else{
    document.querySelector(".target_score").textContent = "Howzaat!!!! 😭"
    document.querySelector(".target_text").textContent = `You lost by ${target-score} runs 😭`
    disable_buttons();
    
  }

}
//displaying the result
const display_result = function(a){
  if(score >= target){
    document.querySelector(".target_text").textContent = "You win 🏆";
    disable_buttons();
  }
  else{
    document.querySelector(".target_text").textContent = `Need ${target-score} runs to win`;
  }
}

//disabling buttons if player win/lose
const disable_buttons = function(){
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}


