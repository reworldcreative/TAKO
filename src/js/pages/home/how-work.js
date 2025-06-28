import { slider } from '@/js/components/slider';
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';

export function howWorkSlider() {
  const infoBlocks = document.querySelectorAll('.how-work__info-block');

  slider('how-work__slider', {
    slidesPerView: 1,
    spaceBetween: 5,
    modules: [Navigation, Pagination],
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
}