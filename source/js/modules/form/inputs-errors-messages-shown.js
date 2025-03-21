const form = document.querySelector('.form');

const inputs = form.querySelectorAll('.form__input');
const errors = form.querySelectorAll('.form__error-message');
const [nameError, phoneNumberError] = errors;

const DEFFAULT_NAME_ERRORS_MESSAGES = [nameError.innerHTML ,phoneNumberError.innerHTML];

const inputFormatter = (input) => {
  const trimmedValue = input.value.trim();
  input.value = trimmedValue;

  if (input === inputs[1] && input.checkValidity()){
    const newValue = input.value
      .replace(/\s+/g, '-')
      .replace(/-{2,}/g, '-');

    input.value = newValue;

  }
};


form.setAttribute('novalidate', '');

inputs.forEach((input, index) => {
  input.addEventListener('focus', () => {
    errors[index].innerHTML = DEFFAULT_NAME_ERRORS_MESSAGES[index];
    errors[index].classList.add('form__error-message--hidden');
  });

  input.addEventListener('focusout', () => {
    inputFormatter(input);
  });
});

form.addEventListener('submit' , (evt) => {
  for (let i = 0 ; i < inputs.length ;i++) {

    if (inputs[i].value === '') {
      evt.preventDefault();
      errors[i].innerHTML = 'Обязательное поле';
      errors[i].classList.remove('form__error-message--hidden');
      return;
    }

    if (!inputs[i].checkValidity()) {
      evt.preventDefault();
      errors[i].classList.remove('form__error-message--hidden');
      return;
    }
  }

});

