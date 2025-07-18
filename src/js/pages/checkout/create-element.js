import { productCard } from "./product-card";

export function createElement(data) {
  const element = document.createElement('div');
  element.className = 'product-card';
  element.dataset.id = data.id;
  element.dataset.category = data.category;
  element.innerHTML = `
    <picture class="product-card__image ">
        <source type="image/webp" srcset="${data.image.replace(/\.\w+$/, '.webp')}">
        <source srcset="${data.image}">
    
        <img src="${data.image}" alt="product" class="product-card__image" draggable="false" width="124" height="124" loading="lazy">
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
        <input class="input product-card__counter-input" type="number" value="${data.quantity}" min="1" aria-label="product counter">
        <button type="button" class="product-card__counter-button increment" aria-label="increment counter">
          <svg class="product-card__counter-icon">
            <use xlink:href="#plus"></use>
          </svg>
        </button>
      </div>
  
      <div class="product-card__price">
        <p class="product-card__price-container">
          <span class="product-card__price-value">${data.price_per_unit}</span><span class="product-card__price-small">грн</span>
        </p>
        <p class="product-card__price-text">собівартість за од.</p>
      </div>
    </div>
  `;

  productCard(element);
  return element;
}