import { slider } from '@/js/components/slider';
import { Navigation, Pagination } from 'swiper/modules'

export function reviewsSlider() {
  slider('reviews__slider', {
    slidesPerView: 1,
    spaceBetween: 5,
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.reviews__swiper-button-next',
      prevEl: '.reviews__swiper-button-prev',
    },
    pagination: {
      el: ".reviews__pagination",
      type: "progressbar",
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      540: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1023: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  });
}