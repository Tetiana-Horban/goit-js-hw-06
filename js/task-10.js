function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const conteinerEl = document.querySelector('#boxes');
const createBtnEl = document.querySelector('button[data-action="create"]');
const destroyBtnEl = document.querySelector('button[data-action="destroy"]');
const inputEl = document.querySelector('input');

inputEl.addEventListener('input', createIndexInput);
createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', deleteBoxes);

function createIndexInput(element) {
  inputEl.setAttribute('counter', Number(element.currentTarget.value));
}

function createBoxes() {
  let sizeBox = 30;
  let amount = Number(inputEl.getAttribute('counter'));

  for (let i = 0; i < amount; i += 1) {
    sizeBox += 10;
    const divEl = document.createElement('div');

    divEl.style.cssText =
      'width: ${sizeBox}px; height: ${sizeBox}px; background-color: ${getRandomHexColor()}';

    conteinerEl.appendChild(divEl);

    inputEl.value = '';
  }
}
function deleteBoxes() {
  conteinerEl.innerHTML = '';
}
