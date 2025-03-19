const faqFilterButtons = document.querySelectorAll('.faq-buttons__button');
const accordionsContainners = document.querySelectorAll('.faq__accordion-list');

const faqFilterButtonsContainer = document.querySelector('.faq__buttons-list');


const updateFilterFaqList = (button) => {
  const index = Array.from(faqFilterButtons).indexOf(button);
  if(!accordionsContainners[index].classList.contains('faq__accordion-list--current')) {
    accordionsContainners.forEach((accordionsContainner) => {
      accordionsContainner.classList.remove('faq__accordion-list--current');
    });

    accordionsContainners[index].classList.add('faq__accordion-list--current');
  }
};

faqFilterButtons.forEach((button) =>{
  button.addEventListener('click', () => {
    faqFilterButtons.forEach((btn) => {
      btn.classList.remove('faq-buttons__button--current');
    });
    updateFilterFaqList(button);
    button.classList.add('faq-buttons__button--current');

  });
});

faqFilterButtonsContainer.addEventListener ('focusin' , (evt) => {
  updateFilterFaqList(evt.target);
});
faqFilterButtonsContainer.addEventListener ('focusout' , () => {
  const currenFilterButton = document.querySelector('.faq-buttons__button--current');
  updateFilterFaqList(currenFilterButton);
});
