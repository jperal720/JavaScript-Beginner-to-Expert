'use strict';

//* Selecting elements by their IDs
let player0Turn = true;
// let localCurrentScore0 = 0; //Keeps track of the currentScore before it is set as textContent
// let localCurrentScore1 = 0; //Keeps track of the currentScore before it is set as textContent
let gameOver = false; //Determines if game is over
let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');
// let localScore0 = 0;
// let localScore1 = 0;
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
//! .getElementById is actually faster than query selector, but it is not very relevant, unless you need  to select a large amount of IDs at once.;

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

currentScore0.textContent = 0;
currentScore1.textContent = 0;
score0.textContent = 0;
score1.textContent = 0;

const resetGame = function () {
  gameOver = false;
  dice.classList.add('hidden');
  player0Turn = true;

  if (player0.classList.contains('player--winner'))
    player0.classList.remove('player--winner');
  else if (player1.classList.contains('player--winner'))
    player1.classList.remove('player-winner');

  player0.classList.add('player--active');
  if (player1.classList.contains('player--active'))
    player1.classList.remove('player--active');

  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
};

const passTurn = function () {
  player0Turn = !player0Turn;

  if (player0Turn) {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  } else {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  }
  currentScore0.textContent = Number(0);
  currentScore1.textContent = Number(0);
};

const checkDiceScore = function (number) {
  if (number == 1) {
    passTurn();
    return;
  }

  if (player0Turn)
    currentScore0.textContent =
      Number(currentScore0.textContent) + Number(number);
  else
    currentScore1.textContent =
      Number(currentScore1.textContent) + Number(number);
};

//* Resets the game;

btnNew.addEventListener('click', resetGame);

//* When clicked, generates random number, then selects die accordingly.;

btnRoll.addEventListener('click', function () {
  if (gameOver) return;

  dice.classList.remove('hidden');
  const numRandom = Math.trunc(Math.random() * 6 + 1);
  dice.src = `dice-${numRandom}.png`;
  checkDiceScore(numRandom);
});

//* Whenever button hold gets pressed;

btnHold.addEventListener('click', function () {
  if (gameOver) return;

  console.log(score0);
  if (player0Turn)
    score0.textContent =
      Number(score0.textContent) + Number(currentScore0.textContent);
  else
    score1.textContent =
      Number(score1.textContent) + Number(currentScore1.textContent);

  //* Checks if either player wins the game

  if (score0.textContent >= 100) {
    gameOver = true;
    player0.classList.remove('player--active');
    player0.classList.add('player--winner');
    return;
  } else if (score1.textContent >= 100) {
    gameOver = true;
    player1.classList.remove('player--active');
    player1.classList.add('player--winner');
    return;
  }
  passTurn();
});
