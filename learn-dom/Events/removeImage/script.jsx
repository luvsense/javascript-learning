const images = document.querySelector('#images');

images.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }
});
