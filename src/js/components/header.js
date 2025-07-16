import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import { contactModal } from './contact-modal';
import { sideBasket } from './side-basket';

export function header() {
  const header = document.querySelector('.header')
  const burgerMenu = document.querySelector('.burger-menu')
  const burgerMenuButton = document.querySelector('.header__menu-button')
  const productsButton = document.querySelector('.header__products-button')
  const productsMenu = document.querySelector('.header__products')
  const modalBG = document.querySelector('.modal__bg')
  const badgeButton = document.querySelector('.header__button-badge ')
  const badge = badgeButton.querySelector('.button-badge')

  function updateBadgeUI() {
    const products = JSON.parse(localStorage.getItem('checkoutProducts')) || [];
    const badgeNumber = badge.querySelector('.button-badge__number');
    const count = products.length;

    badgeNumber.textContent = count > 0 ? (count > 9 ? '9' : count) : '';
    badge.classList.toggle('more', count > 9);
    badge.classList.toggle('empty', count === 0);
  }

  window.addEventListener('checkoutProductsUpdated', updateBadgeUI);
  updateBadgeUI();

  burgerMenuButton.addEventListener('click', () => {
    header.classList.toggle('open-burger')
    burgerMenu.classList.toggle('show')

    if (header.classList.contains('open-burger')) {
      disablePageScroll()
    } else {
      enablePageScroll()
    }
  })

  productsButton.addEventListener('click', (el) => {
    el.target.classList.toggle('active')
    productsMenu.classList.toggle('show')
    modalBG.classList.toggle('show')

    if (productsMenu.classList.contains('show')) {
      disablePageScroll()
    } else {
      enablePageScroll()
    }
  })

  modalBG.addEventListener('click', () => {
    header.classList.remove('open-burger')
    burgerMenu.classList.remove('show')
    productsButton.classList.remove('active')
    productsMenu.classList.remove('show')
    modalBG.classList.remove('show')
    enablePageScroll()
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1420) {
      header.classList.remove('open-burger')
      burgerMenu.classList.remove('show')
      productsButton.classList.remove('active')
      productsMenu.classList.remove('show')
      modalBG.classList.remove('show')

      if (header.classList.contains('open-burger') || productsMenu.classList.contains('show')) {
        disablePageScroll()
      } else {
        enablePageScroll()
      }
    }
  })

  contactModal();
  sideBasket();
}