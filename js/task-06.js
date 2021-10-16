const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onValidationInput);
const validValue = inputEl.dataset.length;
function onValidationInput(event) {
  if (event.currentTarget.value.length != validValue) {
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.replace('invalid', 'valid');
  }
}
