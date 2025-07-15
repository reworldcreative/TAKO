import { initCategorySliders, moreDescription } from "@/js/pages/category/category-item";
import { tagTranslations } from "@/js/utils/data/categories-translate";

const currentLang = "ua";

export function renderCategoryItems(items) {
  let itemsArray = [];

  items.forEach(item => {
    const categoryItem = document.createElement('article');
    categoryItem.classList.add('category-item');
    categoryItem.setAttribute('data-id', item.id);

    categoryItem.innerHTML = `
    <div class="modal category-item__modal">
      <div class="category-item__modal-content">
        <button type="button" class="category-item__modal-close" aria-label='close modal'>
          <svg class="category-item__close-icon">
            <use xlink:href="#plus"></use>
          </svg>
        </button>

        <div class="category-item__modal-slider swiper">
          <div class="swiper-wrapper">
          ${item.images.map(slide => `
              <div class="swiper-slide">
                ${slide.type === "image"
        ? `
                      <picture>
                        <source srcset="${slide.webp_url}" type="image/webp">
                        <img class="category-item__img" src="${slide.url}" alt="${slide.alt}" width="429" height="437" loading="lazy">
                      </picture>
                    `
        : slide.type === "video"
          ? `<div class='video-container category-item__img' data-video='${slide.video_id}' data-width="429" data-height="437">
                  <img class='category-item__img' src="https://img.youtube.com/vi/${slide.video_id}/hqdefault.jpg" width="429"
                    height="437" alt="Preview">

                  <div class='play-button'>
                    <svg class="play-button__icon">
                      <use xlink:href="#play"></use>
                    </svg>
                  </div>
              </div>`
          : ''
      }
              </div>
            `).join('')}
          </div>

          <button class="category-item__swiper-button category-item__swiper-button-prev" type='button'
            aria-label='previous slide'>
            <svg class="category-item__swiper-button-icon">
              <use xlink:href="#arrow-right"></use>
            </svg>
          </button>
          <button class="category-item__swiper-button category-item__swiper-button-next" type='button'
            aria-label='next slide'>
            <svg class="category-item__swiper-button-icon">
              <use xlink:href="#arrow-right"></use>
            </svg>
          </button>
        </div>

        <div class="category-item__modal-info">
          <p class='category-item__modal-text'>${item.title}</p>

          <div class='category-item__modal-pagination'> </div>
        </div>
      </div>
    </div>

    <div class='category-item__slider'>
    <div class="swiper-container-wrapper">
      <div class="swiper category-item__main-slider">
        <div class="swiper-wrapper">
          ${item.images.map(slide => `
              <div class="swiper-slide">
                ${slide.type === "image"
          ? `
                      <picture>
                        <source srcset="${slide.webp_url}" type="image/webp">
                        <img class="category-item__img" src="${slide.url}" alt="${slide.alt}" width="429" height="437" loading="lazy">
                      </picture>
                    `
          : slide.type === "video"
            ? `
                      <div class='category-item__img'>
                        <img class='category-item__img' src="https://img.youtube.com/vi/${slide.video_id}/hqdefault.jpg" width="429" height="437" alt="Preview">

                        <div class='play-button'>
                          <svg class="play-button__icon">
                            <use xlink:href="#play"></use>
                          </svg>
                      </div>
            </div>
                    `
            : ''
        }
              </div>
            `).join('')}
        </div>

        <button class="category-item__swiper-button category-item__swiper-button-prev" type='button'
          aria-label='previous slide'>
          <svg class="category-item__swiper-button-icon">
            <use xlink:href="#arrow-right"></use>
          </svg>
        </button>
        <button class="category-item__swiper-button category-item__swiper-button-next" type='button'
          aria-label='next slide'>
          <svg class="category-item__swiper-button-icon">
            <use xlink:href="#arrow-right"></use>
          </svg>
        </button>

        <div class='swiper-pagination category-item__main-slider-pagination'></div>
      </div>
    </div>

    ${item.images.length > 1 ? `
    <div class="swiper category-item__thumbnail-slider">
      <div class="swiper-wrapper">
        ${item.images.map(slide => `
              <div class="swiper-slide">
                ${slide.type === "image"
            ? `
                      <picture>
                        <source srcset="${slide.webp_url}" type="image/webp">
                        <img class="category-item__img" src="${slide.url}" alt="${slide.alt}" width="429" height="437" loading="lazy">
                      </picture>
                    `
            : slide.type === "video"
              ? `
                      <div class='category-item__img'>
                        <img class='category-item__img' src="https://img.youtube.com/vi/${slide.video_id}/hqdefault.jpg" width="429" height="437" alt="Preview">

                        <div class='play-button'>
                          <svg class="play-button__icon">
                            <use xlink:href="#play"></use>
                          </svg>
                      </div>
            </div>
                    `
              : ''
          }
              </div>
            `).join('')}
      </div>

      <div class='category-item__slides-badge'></div>
    </div>`
        : ''
      }
  </div>

  <div class='category-item__content'>
    <h2 class='category-item__title'>${item.title}</h2>

    <ul class='category-item__tags'>
      ${item.tags_in_category.map(tag => `
          <li class='category-item__tag category-item__tag_main'>${tag}</li>
        `).join('')
      }
    </ul>

    <div class='category-item__description'>
      <div class='category-item__editor'>
        ${item.description}
      </div>

      <button class='category-item__more' type='button'>Більше</button>
    </div>

    <ul class='category-item__tags'>
      ${item.tags.map(tag => `
          <li class='category-item__tag'>${tagTranslations[tag]?.[currentLang] || tag}</li>
        `).join('')
      }
    </ul>

    <div class='category-item__bottom'>
      <div class='category-item__price'>
        <div class='category-item__amount'>
          <p class='category-item__text category-item__text_accent'>
            <span class='category-item__price_accent'>${item.transferred_amount.toLocaleString('uk-UA')}</span> <span>одиниць</span>
          </p>
          <p class='category-item__text'>передано</p>
        </div>

        <div class='category-item__price-per-unit'>
          <p class='category-item__text category-item__text_accent'>
            <span class='category-item__price_accent'>${item.price_per_unit.toLocaleString('uk-UA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> <span>грн</span>
          </p>
          <p class='category-item__text'>собівартість за од.</p>
        </div>
      </div>

      <button class='button category-item__buy-button' type='button'>
        <span class='button-text'>Замовити</span>

        <svg class="button-icon">
          <use xlink:href="#plus"></use>
        </svg>
      </button>
    </div>
  </div>
  `
    initCategorySliders(categoryItem);
    moreDescription(categoryItem);
    itemsArray.push(categoryItem);
  })

  return itemsArray;
}