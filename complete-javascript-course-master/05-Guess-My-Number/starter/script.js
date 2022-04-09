let number = Math.trunc(Math.random() * 20) + 1;
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const message = document.querySelector('.message');
let gameFinished = false; //displays whether game is finished or not

// document.querySelector('.message').textContent = 'this is the new message';

document.querySelector('.check').addEventListener('click', function () {
  const userInput = document.querySelector('.guess').valueAsNumber;

  if (userInput == NaN || gameFinished) return;

  compare(userInput);
});

document.querySelector('.again').addEventListener('click', function () {
  number = message.textContent = 'Start guessing...';
  score.textContent = '20';
  number = Math.trunc(Math.random() * 20);
  gameFinished = false;
  document.querySelector('.number').textContent = '?';
});

const compare = function (userGuess) {
  if (userGuess == number) finished(); //Case in which user wins!
  else if (
    //Case in which user loses!
    score.textContent <= 1 &&
    (userGuess > number || userGuess < number)
  ) {
    score.textContent -= 1;
    finished();
  } else if (userGuess > number) {
    message.textContent = 'Guess is too high!';
    score.textContent -= 1;
  } else if (userGuess < number) {
    message.textContent = 'Guess is too low!';
    score.textContent -= 1;
  }
};

const finished = function () {
  gameFinished = true;
  document.querySelector('.number').textContent = number;
  if (score.textContent == 0) {
    message.textContent = 'Sorry, you ran out of tries :(';
    return;
  }
  message.textContent = 'Congratulations you guessed the number!';
  if (Number(score.textContent) > Number(highScore.textContent))
    highScore.textContent = score.textContent;
};
