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
const btnNewHold = document.querySelector('.btn--Hold');

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality
btnNewRoll.addEventListener('click', function () {
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
    // curretn0El.textContent = currentScore;
  } else {
    //Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});