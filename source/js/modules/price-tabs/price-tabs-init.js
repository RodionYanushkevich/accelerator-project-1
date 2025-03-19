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

function formatPrice(price) {
  let priceValue = price.toString();

  if (priceValue.length >= 5) {
    priceValue = `${priceValue.slice(0, 2) } ${ priceValue.slice(2)}`;
  }
  return priceValue;
}

const updatePriceValues = (prices) => {
  for (let i = 0; i < prices.length; i++) {
    const formattedPrice = formatPrice(prices[i]);
    productPrices[i].innerHTML = formattedPrice;
    productPrices[i].setAttribute('data-content', prices[i]);
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
