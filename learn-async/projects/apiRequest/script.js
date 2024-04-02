const requestUrl = 'https://api.github.com/users/hiteshchoudhary';
const xhr = new XMLHttpRequest();
const btn = document.querySelector('#meowbtn');
xhr.open('GET', requestUrl);

btn.addEventListener('click', function () {
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const data = JSON.parse(this.responseText);
      console.log(data);
      console.log(data.followers);

      const card = document.querySelector('.card');

      card.innerHTML = `
    <img src = "${data.avatar_url}"/>
    <p>${data.name}</p>
    <p>Followers : ${data.followers}</p>`;
      btn.remove();
    }
  };
  xhr.send();
});
