import { slider } from '@/js/components/slider';
import { Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';

export function howWorkSlider() {
  const infoBlocks = document.querySelectorAll('.how-work__info-block');

  const infoBlocksSlider = slider('how-work__slider', {
    slidesPerView: 1,
    spaceBetween: 5,
    effect: "fade",
    modules: [Navigation, Pagination, EffectFade],
    navigation: {
      nextEl: '.how-work__swiper-button-next',
      prevEl: '.how-work__swiper-button-prev',
    },
    pagination: {
      el: ".how-work__swiper-pagination",
      type: "progressbar",
    },
    on: {
      slideChange: function () {
        infoBlocks.forEach((block, index) => {
          if (index === this.realIndex) {
            block.classList.add('active');
          } else {
            block.classList.remove('active');
          }
        })
      }
    }
  });

  const infoButtons = document.querySelectorAll('.how-work__info-block');

  infoButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (index !== -1) {
        infoBlocksSlider.slideTo(index)
      }
    })
  });
}