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


  const target = document.querySelector('.reviews');

  if (!target) return

  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      const script = document.createElement('script');
      script.src = "https://connect.facebook.net/uk_UA/sdk.js#xfbml=1&version=v19.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.nonce = "FbNonce";
      document.body.appendChild(script);

      observer.unobserve(target);
    }
  }, {
    threshold: 0.01
  });

  observer.observe(target);
}