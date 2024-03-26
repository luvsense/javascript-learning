const ul = document.querySelector('ul');
const input = document.querySelector('#item');
const button = document.querySelector('button');

button.addEventListener('click', function (e) {
  const myItem = input.value;
  console.log(myItem);
  input.value = '';
  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  ul.appendChild(listItem);

  listBtn.addEventListener('click', function (e) {
    ul.removeChild(listItem);
  });

  input.focus();
});
