const inputNameEl = document.querySelector('#name-input');
const outputNameEl = document.querySelector('#name-output');

inputNameEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value !== '') {
    outputNameEl.textContent = event.currentTarget.value;
  } else {
    outputNameEl.textContent = 'Anonymous';
  }
}
