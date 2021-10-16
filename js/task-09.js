function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', changeBackroundcolor);

function changeBackroundcolor() {
  spanEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
}
