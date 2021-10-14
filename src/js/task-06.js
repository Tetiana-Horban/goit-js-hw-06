const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onValidationInput);
const validValue = inputEl.dataset.length;

function onValidationInput(event) {
  if (event.currentTarget.value.length === 0) {
    inputEl.classList.remove('invalid');
    inputEl.classList.remove('valid');
  } else if (event.currentTarget.value.length < validValue) {
    inputEl.classList.add('invalid');
  } else {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  }
}
