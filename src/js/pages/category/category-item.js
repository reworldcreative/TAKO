import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import { gsap } from "gsap";


export function initCategorySliders() {
  const modal = document.querySelector('.category-item__modal');
  const modalClose = document.querySelector('.category-item__modal-close');
  const modalContainer = document.querySelector('.category-item__modal-content');
  let players = {};

  function setupVideoClick() {
    const videos = document.querySelectorAll('.video-container');

    videos.forEach(video => {
      video.addEventListener('click', function () {
        const videoId = this.dataset.video;
        const width = this.dataset.width || 560;
        const height = this.dataset.height || 315;

        const iframe = document.createElement('iframe');
        iframe.width = width;
        iframe.height = height;
        iframe.className = this.className;
        iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
        iframe.allow = 'autoplay; encrypted-media';
        iframe.allowFullscreen = true;

        iframe.id = `youtube-player-${Math.floor(Math.random() * 10000)}`;

        this.replaceWith(iframe);
        players[iframe.id] = new YT.Player(iframe.id, {
          events: {
            onReady: (event) => {
              event.target.playVideo();
            }
          }
        });
      });
    });
  }

  function pauseAllVideos() {
    Object.values(players).forEach(player => {
      if (player.pauseVideo) {
        player.pauseVideo();
      }
    });
  }

  function updateBlur(swiper) {
    swiper.slides.forEach(slide => slide.classList.remove('blur'));

    const firstVisibleIndex = swiper.activeIndex;
    const slidesPerView = swiper.params.slidesPerView;

    let lastVisibleIndex = firstVisibleIndex + slidesPerView - 1;

    if (lastVisibleIndex >= swiper.slides.length) {
      lastVisibleIndex = swiper.slides.length - 1;
    }

    swiper.slides[lastVisibleIndex].classList.add('blur');
  }

  function stopAllVideos(swiperInstance) {
    swiperInstance.slides.forEach(slide => {
      const videos = slide.querySelectorAll('video');
      videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
      });
    });
  }

  const thumbsSwiper = new Swiper(".category-item__thumbnail-slider", {
    loop: true,
    spaceBetween: 8,
    slidesPerView: 3,
    watchSlidesProgress: true,
    modules: [FreeMode],

    on: {
      init: function () {
        const counterContainer = document.querySelector('.category-item__slides-badge');
        const slidesInView = this.params.slidesPerView;
        const counter = this.slides.length - slidesInView;

        if (this.slides.length <= slidesInView) return;

        counterContainer.textContent = "+" + counter;
        counterContainer.style.display = 'flex';
        updateBlur(this);
      },
      slideChange: function () {
        updateBlur(this);
        stopAllVideos(this);
      },
      resize: function () {
        updateBlur(this);
      }
    }
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
          gsap.fromTo(modalContainer,
            { opacity: 0, scale: 0.5 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "back.out(1.7)"
            }
          );
          disablePageScroll();
        }
      },
      slideChange: () => {
        pauseAllVideos();
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

  function closeModalAnimation() {
    gsap.to(modalContainer, {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        pauseAllVideos();
        modal.classList.remove('show');
      }
    });
  }

  modalClose.addEventListener('click', () => {
    closeModalAnimation();
    enablePageScroll();
  });

  modal?.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModalAnimation();
      enablePageScroll();
    }
  });

  setupVideoClick();
}

function getFullLineCount(element) {
  const style = window.getComputedStyle(element);
  const lineHeight = parseFloat(style.lineHeight);
  const fullHeight = element.scrollHeight;

  return Math.round(fullHeight / lineHeight);
}

export function moreDescription() {
  const moreDescriptionButtons = document.querySelectorAll('.category-item__more');

  moreDescriptionButtons.forEach(button => {
    const container = button.closest('.category-item__description');
    const editor = container.querySelector('.category-item__editor')
    const editorLineCount = window.getComputedStyle(editor).getPropertyValue('-webkit-line-clamp');

    if (getFullLineCount(editor) > editorLineCount) {
      button.classList.add('visible');
    }

    button.addEventListener('click', () => {
      container.classList.toggle('show');

      if (container.classList.contains('show')) {
        button.textContent = 'Менше';
      } else {
        button.textContent = 'Більше';
      }
    });
  });
}
