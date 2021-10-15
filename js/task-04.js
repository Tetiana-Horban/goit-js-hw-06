const counterEl = document.querySelector('#value');
const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");

let counterValue = 0;

decrementBtn.addEventListener('click', onDecrementValue);
incrementBtn.addEventListener('click', onIncrementValue);

function onDecrementValue() {
  counterValue -= 1;
  counterEl.innerHTML = counterValue;
}
function onIncrementValue() {
  counterValue += 1;
  counterEl.innerHTML = counterValue;
}
