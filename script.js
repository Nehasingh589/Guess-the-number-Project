'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function (message){
 document.querySelector('.message').textContent = message;   
};

document.querySelector('.btn2').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if(!guess) {
        displayMessage('⛔No number!');
   // when player wins 
    } else if(guess === secretNumber) {
        displayMessage('🎉Correct Number!');
        document.querySelector('div').textContent = secretNumber;

          document.querySelector('body').style.backgroundColor = ' rgb(31, 134, 127);'
document.querySelector('div').style.width = '30rem';

if(score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
}
//when guess is wrong
        }else if(guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
                score--;
                document.querySelector('.score').textContent = score;   
             } else {
                displayMessage('😿You lost the Game!');
                document.querySelector('.score').textContent = 0;
             }
        }

});

document.querySelector('.btn2').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing....🤔');
    document.querySelector('.score').textContent = score;
    document.querySelector('div').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = 'blue'
    document.querySelector('div').style.width = '15rem';
  });
















