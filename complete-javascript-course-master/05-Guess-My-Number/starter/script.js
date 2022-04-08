// 'use strict';

// const p = document.querySelector('.message');

// console.log(document.querySelector('.message').textContent); //To select elements from HTML

document.querySelector('.check').addEventListener('click', function () {
  const userInput = document.querySelector('.guess').valueAsNumber;

  if (userInput == NaN) return;

  console.log(userInput);
});
