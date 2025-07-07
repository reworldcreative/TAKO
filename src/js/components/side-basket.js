import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import { productCard } from '@/js/pages/checkout/product-card';
import { observeProductRemoval } from './remove-product';

export function sideBasket() {
  const sideBasket = document.querySelector('.side-basket');
  const sideBasketContainer = document.querySelector('.side-basket__container');
  const sideBasketContent = document.querySelector('.side-basket__content');
  const sideBasketCheckout = document.querySelector('.side-basket__checkout-button');
  const sideBasketOpenButton = document.querySelector('.side-basket-open');
  const sideBasketCloseButton = document.querySelector('.side-basket__close-button');

  sideBasketOpenButton?.addEventListener('click', () => {
    sideBasket.classList.add('show');

    setTimeout(() => {
      sideBasketContainer.classList.add('show');
    }, 100);
    disablePageScroll();
  });

  sideBasketCloseButton?.addEventListener('click', () => {
    sideBasketContainer.classList.remove('show');

    setTimeout(() => {
      sideBasket.classList.remove('show');

    }, 100);
    enablePageScroll();
  });

  sideBasket?.addEventListener('click', function (event) {
    if (event.target === sideBasket) {
      sideBasketContainer.classList.remove('show');

      setTimeout(() => {
        sideBasket.classList.remove('show');

      }, 100);
      enablePageScroll();
    }
  });

  const updateTotal = () => {
    const products = sideBasketContent.querySelectorAll('.product-card');

    if (products.length === 0) {
      sideBasket.classList.add('empty');
      return
    }

    sideBasket.classList.remove('empty');
  };

  observeProductRemoval(document.querySelector('.side-basket__content'), () => {
    updateTotal();
  });

  sideBasketCheckout?.addEventListener('click', function (event) {
    event.preventDefault();
    const productElements = sideBasketContent.querySelectorAll('.product-card');

    const products = Array.from(productElements).map(el => ({
      id: el.dataset.id,
      name: el.querySelector('.product-card__title').textContent,
      quantity: el.querySelector('.product-card__counter-input').value,
      image: el.querySelector('img.product-card__image').src,
      price: el.querySelector('.product-card__price-value').textContent,
    }));

    localStorage.setItem('checkoutProducts', JSON.stringify(products));
    window.location.href = this.href;
  });

  productCard(sideBasket);
}