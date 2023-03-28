'use strict';

//-Get a random number
//-Aply all condition of scores
//-Score updation
//-Putting The AGAIN button logic
//-Implementing the High score logic of game

//GETTING A random number
let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = str => {
  document.querySelector('.message').textContent = str;
};
const displayScore = number => {
  document.querySelector('.score').textContent = number;
};

//Event Listenenr for check button
document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  //If nothing is entered
  if (!guess) {
    displayMessage('No number');
  } else if (guess == secret) {
    //When Guess is correct
    displayMessage('🥳Congratulations!!');
    document.querySelector('.number').textContent = secret;
    document.body.style.background = 'blue';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secret) {
    //When guess is wrong
    if (score > 1) {
      displayMessage(guess < secret ? '🚩Too low' : '🏴Too High');
      score--;
      displayScore(score);
    } else {
      displayMessage('😪YOu lose the game');
      displayScore(0);
    }
  }
});
//Implementing the Event listener for playing again
document.querySelector('.again').addEventListener('click', () => {
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  displayScore(score);
  document.body.style.background = '#222';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
});
