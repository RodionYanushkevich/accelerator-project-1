const form = document.querySelector('.form');

const inputs = form.querySelectorAll('.form__input');
// const [nameInput, phoneNumberInput] = inputs;

const errors = form.querySelectorAll('.form__error-message');
const [nameError, phoneNumberError] = errors;

const DEFFAULT_NAME_ERRORS_MESSAGES = [nameError.innerHTML
  ,phoneNumberError.innerHTML];

form.setAttribute('novalidate', '');

inputs.forEach((input, index) => {
  input.addEventListener('focus', () => {
    errors[index].innerHTML = DEFFAULT_NAME_ERRORS_MESSAGES[index];
    errors[index].classList.add('form__error-message--hidden');
  });
});

form.addEventListener('submit' , (evt) => {
  inputs.forEach((input, index) => {
    if (input.value === '') {
      evt.preventDefault();
      errors[index].innerHTML = 'Обязательное поле';
      errors[index].classList.remove('form__error-message--hidden');
    }
    if (!input.checkValidity()) {
      evt.preventDefault();
      errors[index].classList.remove('form__error-message--hidden');
    }

  });
});

