const accordeonButtons = document.querySelectorAll('.accordion__button');


accordeonButtons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', () => {
    button.classList.toggle('accordion__button--checked');
  });
});


