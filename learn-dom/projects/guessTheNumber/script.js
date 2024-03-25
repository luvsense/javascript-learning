// Generates Random Number
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

// selecting necessary elements and holding them in a variable
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// creates a paragraph element
const p = document.createElement('p');

let prevGuess = []; // holds all the previous guesses made
let numGuess = 1; //
let playGame = true; // the game will end if this gets false, initially set as true.

// conditional to check if user can play the game or not
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // Clears the field of any default values
    const guess = parseInt(userInput.value); // stores the value and converts it to an Int
    console.log(guess);
    validateGuess(guess); // pass the value in guess to get checked for validation
  });
}

// Check if the number entered is valid to play the game or not
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a larger number');
  } else if (guess > 100) {
    alert('please enter a smaller number');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess();
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// check the guess is equal/low/hi
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function (e) {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame(numGuess) {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
