import { slider } from '@/js/components/slider';

export function otherCategoriesSlider() {
  slider('other-categories__slider', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    breakpoints: {
      376: {
        slidesPerView: 1.6,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 28,
      },
      1023: {
        slidesPerView: 3.5,
        spaceBetween: 28,
      },
      1439: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  });
}