'use strict';
//Define initial score.
let score = 10;
let highScore = 0;

//Define random number to be guessed.
let guessNumber = Math.trunc(Math.random() * 20);
//Just to check
document.querySelector('.highscore').textContent = highScore;

//Function to display message
const displayMessage = (message, color, size) => {
  document.querySelector('.message').textContent = message;
  document.querySelector('.message').style.color = color;
  document.querySelector('.message').style.fontSize = size;
};

//Function to display score
const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

//Function to bodyBgColor
const bodyBgColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

//After check button clicked.
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //When guess matches
  if (guess === guessNumber) {
    displayMessage('Number Matched!', 'blue', '4vw');
    document.querySelector('.number').textContent = guessNumber;
    bodyBgColor('green');
    console.log(score);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //If guess is different
  } else if (guess !== guessNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > guessNumber ? 'Too High!' : 'Too Low';
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!!!', 'pink', '4vw');
      displayScore(0);
      bodyBgColor('red');
    }
  }
});

//Play Again.
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...', '#eee', '4vw');
  document.querySelector('.number').textContent = '?';
  displayScore(10);
  bodyBgColor('#eee');
  score = 10;
  guessNumber = Math.trunc(Math.random() * 20);
});
