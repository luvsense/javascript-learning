const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert('Enter a valid number');
  } else if (guess < 1) {
    alert('Enter a number bigger than 1');
  } else if (guess > 100) {
    alert('Enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(prevGuess);
      checkGuess(guess);
    }
  }
}

function checkGuess() {
  //
  if (guess === randomNumber) {
    displayMessage(`You guesses it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number was too low!`);
  } else if (guess > randomNumber) {
    displayMessage(`Number was too high!`);
  }
}

function displayGuess(guess) {
  //
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${12 - numGuess}`;
}

function displayMessage(message) {
  //
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  //
}

function endGame() {
  //
}
