const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const p1button = document.querySelector('#p1btn');
const p2button = document.querySelector('#p2btn');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let p1score = 0;
let p2score = 0;
let winningScore = 3;
let isGameOver = false;

p1button.addEventListener('click', function (e) {
  if (!isGameOver) {
    p1score += 1;
    if (p1score === winningScore) {
      isGameOver = true;
      p1Display.classList.add('winner');
      p2Display.classList.add('loser');
    }
    p1Display.textContent = p1score;
  }
});

p2button.addEventListener('click', function (e) {
  if (!isGameOver) {
    p2score += 1;
    if (p2score === winningScore) {
      isGameOver = true;
      p2Display.classList.add('winner');
      p1Display.classList.add('loser');
    }
    p2Display.textContent = p2score;
  }
});

winningScoreSelect.addEventListener('change', function (e) {
  winningScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener('click', reset);

function reset() {
  isGameOver = false;
  p1score = 0;
  p2score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('winner', 'loser');
  p2Display.classList.remove('winner', 'loser');
}
