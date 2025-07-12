import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

export function initCategorySliders() {
  const modal = document.querySelector('.category-item__modal');
  const modalClose = document.querySelector('.category-item__modal-close');

  const thumbsSwiper = new Swiper(".category-item__thumbnail-slider", {
    loop: true,
    spaceBetween: 8,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    modules: [FreeMode],
  });

  const mainSwiper = new Swiper(".category-item__main-slider", {
    loop: true,
    spaceBetween: 10,
    slideToClickedSlide: true,
    navigation: {
      nextEl: ".category-item__swiper-button-next",
      prevEl: ".category-item__swiper-button-prev",
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
    modules: [Navigation, Thumbs],
    on: {
      click(swiper, event) {
        const clickedIndex = swiper.clickedIndex;
        if (clickedIndex !== undefined) {
          modal.classList.add('show');
          modalSwiper?.slideToLoop(swiper.realIndex);
          disablePageScroll();
        }
      }
    }
  });

  const modalSwiper = new Swiper(".category-item__modal-swiper", {
    loop: true,
    spaceBetween: 10,
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.category-item__swiper-button-next',
      prevEl: '.category-item__swiper-button-prev',
    },
    pagination: {
      el: ".category-item__modal-pagination",
      type: "fraction",
    },
    on: {
      slideChange(swiper) {
        mainSwiper?.slideToLoop(swiper.realIndex);
      }
    }
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  modal?.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.classList.remove('show');
      enablePageScroll();
    }
  });
}
