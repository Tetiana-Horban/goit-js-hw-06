const formEl = document.querySelector('.login-form');
const btnEl = document.querySelector('button');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  formData.forEach((email, password) => {
    if (email === '' || password === '') {
      alert('Все поля должны быть заполнены!');
    }
    console.log(...formData);
    // formEl.email.value = '';
    // formEl.password.value = '';
    formEl.reset();
  });
}
