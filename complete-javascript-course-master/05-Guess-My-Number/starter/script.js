let number = Math.trunc(Math.random() * 20) + 1;
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const message = document.querySelector('.message');
let gameFinished = false; //displays whether game is finished or not

document.querySelector('.check').addEventListener('click', function () {
  const userInput = document.querySelector('.guess').valueAsNumber;

  if (userInput == NaN || gameFinished) return;

  compare(userInput);
});

document.querySelector('.again').addEventListener('click', function () {
  number = message.textContent = 'Start guessing...';
  score.textContent = '20';
  number = Math.trunc(Math.random() * 20) + 1;
  gameFinished = false;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

const compare = function (userGuess) {
  if (userGuess == number) finished(); //Case in which user wins!
  else {
    if (score.textContent <= 1) {
      //Case in which user loses!
      score.textContent--;
      finished();
    } else {
      message.textContent =
        userGuess > number ? 'Guess is too high!' : 'Guess is too low!';
      score.textContent--;
    }
  }
};

const finished = function () {
  gameFinished = true;
  document.querySelector('.number').textContent = number;
  document.querySelector('.number').style.width = '30rem';
  if (score.textContent == 0) {
    message.textContent = 'Sorry, you ran out of tries :(';
    document.querySelector('body').style.backgroundColor = '#D24040';
    return;
  }
  document.querySelector('body').style.backgroundColor = '#60b347';
  message.textContent = 'Congratulations you guessed the number!';
  if (Number(score.textContent) > Number(highScore.textContent))
    highScore.textContent = score.textContent;
};
