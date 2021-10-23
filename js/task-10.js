function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const conteinerEl = document.querySelector('#boxes');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');

inputEl.addEventListener('input', createIndexInput);
createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', deleteBoxes);

function createIndexInput() {
  inputEl.value;
}

function createBoxes() {
  let sizeBox = 30;
  let amount = Number(inputEl.value);
  for (let i = 0; i < amount; i += 1) {
    sizeBox += 10;
    const divEl = document.createElement('div');

    divEl.style.cssText = `width: ${sizeBox}px; height: ${sizeBox}px; background-color: ${getRandomHexColor()}; display: flex; margin: 10px`;

    conteinerEl.appendChild(divEl);

    inputEl.value = '';
  }
}
function deleteBoxes() {
  conteinerEl.innerHTML = '';
}
