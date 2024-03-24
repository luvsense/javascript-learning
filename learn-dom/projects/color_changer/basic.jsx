const btn = document.querySelector('#v2');
const reset = document.querySelector('#reset');
const h1 = document.querySelector('h1');

btn.addEventListener('click', function () {
  const newcolor = makeRandColor();
  console.log(newcolor);
  document.body.style.backgroundColor = newcolor;
  h1.innerHTML = newcolor;
});

reset.addEventListener('click', function () {
  document.body.style.backgroundColor = 'white';
});

function makeRandColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const newcolor = `rgb(${r}, ${g}, ${b})`;
  if (r + g + b < 300) {
    h1.style.color = 'white';
  } else {
    h1.style.color = 'black';
  }
  return newcolor;
}
