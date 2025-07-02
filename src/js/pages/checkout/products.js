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
  const preorderBlock = document.querySelector('.checkout-form__preorder');
  const preorderBlockMobile = document.querySelector('.checkout-form__second-block_mobile');
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

    if (products.length === 0) {
      preorderBlock.classList.add('empty');
      preorderBlockMobile.classList.add('empty');
      return
    }

    preorderBlock.classList.remove('empty');
    preorderBlockMobile.classList.remove('empty');

  };

  const attachListeners = (product) => {
    const input = product.querySelector('.product-card__counter-input');
    input.addEventListener('input', updateTotal);
  };

  const attachListenersToAllProducts = () => {
    const products = productsList.querySelectorAll('.product-card');
    products.forEach(product => {
      attachListeners(product);
    });
  };

  const observer = new MutationObserver(() => {
    attachListenersToAllProducts();
    updateTotal();
  });

  observer.observe(productsList, {
    childList: true,
  });

  attachListenersToAllProducts();

  observeProductRemoval(() => {
    updateTotal();
  });

  updateTotal();
}