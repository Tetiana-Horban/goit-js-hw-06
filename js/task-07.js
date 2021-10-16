const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

spanEl.style.fontSize = inputEl.value + 'px';

inputEl.addEventListener('change', changeSizeText);
function changeSizeText() {
  spanEl.style.fontSize = inputEl.value + 'px';
}
