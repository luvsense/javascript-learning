const insert = document.querySelector('#insert');
window.addEventListener('keydown', function (e) {
  insert.innerHTML = `
  <div class = 'color'>
      <table>
      <tr>
      <th>Key</th>
      <th>Keycode</th>
      <th>Code</th>
      </tr>
      <tr>
      <th>${e.key === ' ' ? 'space' : e.key}</th>
      <th>${e.keyCode}</th>
      <th>${e.code}</th>
      </tr>
      </table>
  </div>`;
});
