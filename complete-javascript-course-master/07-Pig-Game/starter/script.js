'use strict';

//Selecting elements by their IDs
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1'); //.getElementById is actually faster than query selector, but it is not very relevant, unless you need  to select a large amount of IDs at once.

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

//Function receives the rolled number and the score of the player that rolled
const resetScore = function (number, score) {
  if (number == 1) score.textContent = 0; //Resets ongoing score if rolls 1
};

//When clicked, generates random number, then selects die accordingly.
btnRoll.addEventListener('click', function () {
  console.log(
    `You rolled a random number: ${Math.trunc(Math.random() * 6 + 1)}`
  );
});
