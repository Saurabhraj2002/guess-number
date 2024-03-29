'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //no input
  if (!guess) {
    displayMessage('⛔No Nunber!');
  }
  //when player wins
  else if (guess === secretNumber) {
    displayMessage('🥳Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess ids wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈To High!' : '📉To Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭You Lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//   //When guess is too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈To High!!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😭You Lost the Game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }

//   //When guess is too low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉To Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😭You Lost the Game';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  const guess = Number((document.querySelector('.guess').value = ''));
});
