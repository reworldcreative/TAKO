import { observeProductRemoval } from "@/js/components/remove-product";
import { createElement } from "./create-element";
import { getData } from "@/js/components/get-data";

const base = import.meta.env.BASE_URL || '/';

export async function products() {
  const serverData = await getData(`${base}data/categories/categories.json`);
  const data = JSON.parse(localStorage.getItem('checkoutProducts'));

  const items = serverData
    .filter(item => data.some(el => String(el.id) === String(item.id) && String(el.category) === String(item.category)))
    .map(item => {
      const matched = data.find(el => String(el.id) === String(item.id) && String(el.category) === String(item.category));
      return {
        ...item,
        image: matched.image,
        quantity: matched.quantity,
      };
    });

  const productsList = document.querySelector('.checkout-form__products');
  const preorderBlock = document.querySelector('.checkout-form__preorder');
  const preorderBlockMobile = document.querySelector('.checkout-form__second-block_mobile');
  const total = document.querySelector('.checkout-form__price-value');

  items.forEach(product => {
    productsList.appendChild(createElement(product));
  });

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

  observeProductRemoval(document.querySelector('.checkout-form__products'), () => {
    updateTotal();
  });

  updateTotal();
}