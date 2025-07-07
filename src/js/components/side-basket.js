import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';

export function sideBasket() {
  const sideBasket = document.querySelector('.side-basket');
  const sideBasketContainer = document.querySelector('.side-basket__container');
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
}