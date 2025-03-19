const productPrices = document.querySelectorAll('.price-card__product-price');
const priceFilterButtons = document.querySelectorAll('.price__filter-button');

const priceFilterList = document.querySelector('.price__filter-list');


const getPriceDeffault = () => {
  const prices = [];
  productPrices.forEach((price) => {
    prices.push(price.innerHTML);
  });
  return prices;
};

const deffaultPrices = getPriceDeffault();

const updatePriceValues = (prices) => {
  for (let i = 0; i < prices.length; i++) {
    productPrices[i].innerHTML = prices[i];
    productPrices[i].setAttribute('data-content', productPrices[i].innerHTML);
  }
};

const updatePrice = (filterButton) => {
  const monthvalue = filterButton.innerText.split(' ')[0];
  const newValues = deffaultPrices.map((value) => value * monthvalue);
  updatePriceValues(newValues);
};

priceFilterButtons.forEach((button) =>{
  button.addEventListener('click', (evt) => {
    priceFilterButtons.forEach((btn) => {
      btn.classList.remove('price__filter-button-current');
    });
    button.classList.add('price__filter-button-current');
    updatePrice(evt.target);
  });
});

priceFilterList.addEventListener ('focusin' , (evt) => {
  updatePrice(evt.target);
});
priceFilterList.addEventListener ('focusout' , () => {
  const currenFilterButton = document.querySelector('.price__filter-button-current');
  updatePrice(currenFilterButton);
});
