const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>Tecla</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>Código de tecla</small>
</div>

<div class="key">
  ${event.code}
  <small>Código</small>
</div>
  `
})