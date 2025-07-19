import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import { productCard } from '@/js/pages/checkout/product-card';
import { observeProductRemoval } from './remove-product';
import { getData } from "@/js/components/get-data";

const base = import.meta.env.BASE_URL || '/';

function createCard(data) {
  const productCardElement = document.createElement('div');
  productCardElement.className = 'product-card';
  productCardElement.dataset.id = data.id;
  productCardElement.dataset.category = data.category;

  const imagePlaceholder = {
    url: 'img/medkit.jpg',
    webp_url: 'img/medkit.webp',
    alt: 'no image available'
  };

  const firstImage = data.images.find(img => img.type === 'image') || imagePlaceholder;

  productCardElement.innerHTML = `
    <picture class="product-card__image">
      <source type="image/webp" srcset="${firstImage.webp_url}">
      <source srcset="${firstImage.url}">
      <img src="${firstImage.url}" alt="${firstImage.alt}" class="product-card__image" draggable="false" width="124" height="124" loading="lazy">
    </picture>
    
    <div class="product-card__top">
      <p class="product-card__title">${data.title}</p>
  
      <button class="product-card__trash-button" type="button" aria-label="delete product">
        <svg class="product-card__trash-icon">
          <use xlink:href="#trash-can"></use>
        </svg>
      </button>
    </div>
  
    <div class="product-card__bottom">
      <div class="counter product-card__counter">
        <button type="button" class="product-card__counter-button decrement" disabled="" aria-label="decrement counter">
          <svg class="product-card__counter-icon">
            <use xlink:href="#nimus"></use>
          </svg>
        </button>
        <input class="input product-card__counter-input" type="number" value="1" min="1" aria-label="product counter">
        <button type="button" class="product-card__counter-button increment" aria-label="increment counter">
          <svg class="product-card__counter-icon">
            <use xlink:href="#plus"></use>
          </svg>
        </button>
      </div>
  
      <div class="product-card__price">
        <p class="product-card__price-container">
          <span class="product-card__price-value">${data.price_per_unit.toLocaleString('uk-UA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span><span class="product-card__price-small">грн</span>
        </p>
        <p class="product-card__price-text">собівартість за од.</p>
      </div>
    </div>
  `;

  productCard(productCardElement);

  return productCardElement;
}

function createCardList(items, basket, basketContent) {
  const data = JSON.parse(localStorage.getItem('checkoutProducts')) || [];

  if (data.length === 0) {
    basket.classList.add('empty');
    return
  };

  basket.classList.remove('empty');

  const basketItems = items.filter(item =>
    data.some(el => String(el.id) === String(item.id) && String(el.category) === String(item.category))
  );

  basketContent.innerHTML = '';

  basketItems.map(item => {
    basketContent.appendChild(createCard(item))
  });
}

export async function sideBasket() {
  const items = await getData(`${base}data/categories/categories.json`);
  const sideBasket = document.querySelector('.side-basket');
  const sideBasketContainer = document.querySelector('.side-basket__container');
  const sideBasketContent = document.querySelector('.side-basket__content');
  const sideBasketCheckout = document.querySelector('.side-basket__checkout-button');
  const sideBasketOpenButton = document.querySelector('.side-basket-open');
  const sideBasketCloseButton = document.querySelector('.side-basket__close-button');

  // window.addEventListener('checkoutProductsUpdated', () => {
  //   createCardList(sideBasket, sideBasketContent);
  // });

  sideBasketOpenButton?.addEventListener('click', () => {
    createCardList(items, sideBasket, sideBasketContent)
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
      category: el.dataset.category,
      quantity: el.querySelector('.product-card__counter-input').value,
      image: el.querySelector('img.product-card__image').src,
    }));

    localStorage.setItem('checkoutProducts', JSON.stringify(products));
    window.location.href = this.href;
  });
}