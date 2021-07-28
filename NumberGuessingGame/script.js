'use strict';

// document.querySelector('.message').textContent;

// document.querySelector('.number').textContent = 13;
//

// document.querySelector('.guess').value = 23;
let number = 0;
let guess = 0;
const generateRandom = () => {
  number = Math.trunc(Math.random() * 20) + 1;
};
generateRandom();

//

let score = 20;
let highScore = 0;

// document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'Too High' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  // else if (guess > number) {
  //   if (score > 1) {
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = 'Too High';
  //   } else {
  //     whenLost();
  //   }
  // } else {
  //   if (score > 1) {
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = 'Too Low';
  //   } else {
  //     whenLost();
  //   }
  // }
});

//game reset functionality

// This function will only be called when click event happen

document.querySelector('.again').addEventListener('click', () => {
  if ((score != 1 && number === guess) || (score === 1 && number != guess)) {
    score = 20;
    generateRandom();
    document.querySelector('.message').textContent = 'Guess the number';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = number;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = 'black';
  }
});
