const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const bg = document.body;

let intervalId;

function makeRandColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const newcolor = `rgb(${r}, ${g}, ${b})`;
  return newcolor;
}

const startChangingColors = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 500);
  }
  function changeBgColor() {
    bg.style.backgroundColor = makeRandColor();
  }
};
const stopChangingColors = function () {
  clearInterval(intervalId);
  intervalId = null;
};

startButton.addEventListener('click', startChangingColors);
stopButton.addEventListener('click', stopChangingColors);
