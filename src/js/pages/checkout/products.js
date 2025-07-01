import { productCard } from "./product-card";

export function observeProductRemoval(callback) {
  const container = document.querySelector('.checkout-form__products');

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.removedNodes.forEach(node => {
        if (node.classList && node.classList.contains('product-card')) {
          callback(node);
        }
      });
    });
  });

  observer.observe(container, {
    childList: true,
  });
}

export function products() {
  productCard();

  const productsList = document.querySelector('.checkout-form__products');
  const total = document.querySelector('.checkout-form__price-value');

  const updateTotal = () => {
    const products = productsList.querySelectorAll('.product-card');

    let sum = 0;

    products.forEach(product => {
      const input = product.querySelector('.product-card__counter-input');
      const priceElement = product.querySelector('.product-card__price-value');

      const count = parseInt(input.value, 10);
      const rawPrice = priceElement.textContent.trim();
      const normalized = rawPrice.replace(',', '.').replace(/[^\d.]/g, '');
      const price = parseFloat(normalized);

      if (!isNaN(count) && !isNaN(price)) {
        sum += count * price;
      }
    });

    total.textContent = sum.toFixed(2).replace('.', ',');
  };

  const attachListeners = () => {
    const products = productsList.querySelectorAll('.product-card');
    products.forEach(product => {
      const input = product.querySelector('.product-card__counter-input');
      input.addEventListener('input', updateTotal);
    });
  };

  attachListeners();

  observeProductRemoval(() => {
    updateTotal();
  });

  updateTotal();
}