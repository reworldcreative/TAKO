import { slider } from '@/js/components/slider';
import { Navigation, Pagination } from 'swiper/modules'

export function acknowledgmentsSlider() {
  slider('acknowledgments__slider', {
    slidesPerView: 1,
    spaceBetween: 5,
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '.acknowledgments__swiper-button-next',
      prevEl: '.acknowledgments__swiper-button-prev',
    },
    pagination: {
      el: ".acknowledgments__pagination",
      type: "progressbar",
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
}