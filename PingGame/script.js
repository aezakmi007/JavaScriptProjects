//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const curretn0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1 ');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnNewRoll = document.querySelector('.btn--roll');
const btnNewHold = document.querySelector('.btn--hold');
const btnReset = document.querySelector('.btn--new');
//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//switching player functionality
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Resetting game functionality
const resetGame = () => {
  scores = [0, 0];
  currentScore = 0;
  playing = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  diceEl.classList.add('hidden');
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  activePlayer = 0;
};
//Rolling dice functionality
btnNewRoll.addEventListener('click', function () {
  if (playing) {
    //1 .Generatig a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2 Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1
    if (dice !== 1) {
      //Add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnNewHold.addEventListener('click', () => {
  if (playing) {
    //1/ Add current score to active player's score.

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2 Check if player's score is  >= 100
    //Finish the game
    if (scores[activePlayer] >= 20) {
      //Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3Switch to the next player
      switchPlayer();
    }
  }
});

btnReset.addEventListener('click', () => {
  console.log('clicked');
  resetGame();
});
