'use strict';

const guessEl = document.querySelector('.guess');
const btn2El = document.querySelector(".btn2");
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const btnEl = document.querySelector('.btn');


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage  (message) {
messageEl.textContent = message
}

btn2El.addEventListener('click',function(){
    // console.log(document.querySelector('.guess').value)
    const guess = Number((guessEl).value);
   //  console.log(guess);
   //  console.log(guess,  typeof guess);
  

   //When there is no guess
     if(!guess) {
      //   messageEl.textContent = '⛔No number';
      displayMessage('⛔No number!')
   // When Player wins
     } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        numberEl.textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if(score > highscore) {
         highscore = score;
         highscoreEl.textContent = highscore;
      }

     }  else if(guess !== secretNumber){
        if(score > 1){
      displayMessage( guess > secretNumber ? '📈 Too High!' : '📉 Too Low!' );
      score--;
      scoreEl.textContent = score;
      } else {
         displayMessage('😟You lost the game!')
         scoreEl.textContent = 0;
         messageEl.classList.add('lost-message');
      }
   }
});

// reset game

btnEl.addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
   displayMessage('Start Guessing....🤔')
   scoreEl.textContent = score;
   numberEl.textContent = '?';
   guessEl.value = ' ';
   document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
});