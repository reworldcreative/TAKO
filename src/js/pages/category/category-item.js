import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import { gsap } from "gsap";


export function initCategorySliders() {
  document.querySelectorAll('.category-item').forEach((categoryItem, index) => {
    const modal = categoryItem.querySelector('.category-item__modal');
    const modalClose = categoryItem.querySelector('.category-item__modal-close');
    const modalContainer = categoryItem.querySelector('.category-item__modal-content');
    const badge = categoryItem.querySelector('.category-item__slides-badge');
    const mainSliderEl = categoryItem.querySelector(".category-item__main-slider");
    const thumbnailSliderEl = categoryItem.querySelector(".category-item__thumbnail-slider");
    const modalSliderEl = categoryItem.querySelector(".category-item__modal-slider");
    let players = {};
    let thumbsSwiper = null;

    function initThumbsSwiper() {
      if (thumbsSwiper) thumbsSwiper.destroy(true, true);

      thumbsSwiper = new Swiper(thumbnailSliderEl, {
        loop: true,
        spaceBetween: 8,
        slidesPerView: 3,
        watchSlidesProgress: true,
        modules: [FreeMode],
        on: {
          init() {
            // твій код для лічильника і updateBlur
          },
          slideChange() {
            updateBlur(this);
            stopAllVideos(this);
          },
          resize() {
            updateBlur(this);
          },
          touchMove() {
            if (badge) badge.style.opacity = '0';
          },
          touchEnd() {
            if (badge) badge.style.opacity = '1';
          }
        }
      });
    }

    function checkThumbsSwiper() {
      if (window.innerWidth <= 1024) {
        if (thumbsSwiper) {
          thumbsSwiper.destroy(true, true);
          thumbsSwiper = null;
        }
        thumbnailSliderEl.style.display = 'none';
      } else {
        thumbnailSliderEl.style.display = '';
        if (!thumbsSwiper) {
          initThumbsSwiper();
        }
      }
    }

    checkThumbsSwiper();

    window.addEventListener('resize', () => {
      checkThumbsSwiper();
    });

    const mainSwiper = new Swiper(mainSliderEl, {
      loop: true,
      spaceBetween: 10,
      slideToClickedSlide: true,
      navigation: {
        nextEl: mainSliderEl.querySelector(".category-item__swiper-button-next"),
        prevEl: mainSliderEl.querySelector(".category-item__swiper-button-prev"),
      },
      pagination: {
        el: mainSliderEl.querySelector(".category-item__main-slider-pagination"),
        type: "progressbar",
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
      modules: [Navigation, Pagination, Thumbs],
      on: {
        click(swiper, event) {
          const clickedIndex = swiper.clickedIndex;
          if (clickedIndex !== undefined) {
            modal?.classList.add('show');
            modalSwiper?.slideToLoop(swiper.realIndex);

            gsap.fromTo(modalContainer,
              { opacity: 0, scale: 0.5 },
              { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
            );

            disablePageScroll();
          }
        },
        slideChange: () => {
          pauseAllVideos();
        }
      }
    });

    const modalSwiper = new Swiper(modalSliderEl, {
      loop: true,
      spaceBetween: 10,
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: modalSliderEl.querySelector('.category-item__swiper-button-next'),
        prevEl: modalSliderEl.querySelector('.category-item__swiper-button-prev'),
      },
      pagination: {
        el: modal.querySelector(".category-item__modal-pagination"),
        type: "fraction",
      },
      on: {
        slideChange(swiper) {
          mainSwiper?.slideToLoop(swiper.realIndex);
        }
      }
    });

    function stopAllVideos(swiperInstance) {
      swiperInstance.slides.forEach(slide => {
        const videos = slide.querySelectorAll('video');
        videos.forEach(video => {
          video.pause();
          video.currentTime = 0;
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
      if (!swiper) return;
      swiper.slides.forEach(slide => slide.classList.remove('blur'));
      const i = Math.min(swiper.activeIndex + swiper.params.slidesPerView - 1, swiper.slides.length - 1);
      swiper.slides[i]?.classList.add('blur');
    }

    function closeModalAnimation() {
      gsap.to(modalContainer, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          pauseAllVideos();
          modal?.classList.remove('show');
          enablePageScroll();
        }
      });
    }

    modalClose?.addEventListener('click', closeModalAnimation);
    modal?.addEventListener('click', function (event) {
      if (event.target === modal) {
        closeModalAnimation();
      }
    });

    const videos = categoryItem.querySelectorAll('.video-container');
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
  });
}

function getFullLineCount(element) {
  const style = window.getComputedStyle(element);
  const lineHeight = parseFloat(style.lineHeight);
  const fullHeight = element.scrollHeight;

  return Math.round(fullHeight / lineHeight);
}

function updateVisibility(button, editor) {
  const editorLineCount = parseInt(window.getComputedStyle(editor).getPropertyValue('-webkit-line-clamp'), 10);

  if (getFullLineCount(editor) > editorLineCount) {
    button.classList.add('visible');
    return
  }

  button.classList.remove('visible');
}

export function moreDescription() {
  const moreDescriptionButtons = document.querySelectorAll('.category-item__more');

  const updateAllDescriptions = () => {
    moreDescriptionButtons.forEach(button => {
      const container = button.closest('.category-item__description');
      const editor = container.querySelector('.category-item__editor');
      updateVisibility(button, editor);
    });
  };

  updateAllDescriptions();

  window.addEventListener('resize', () => {
    updateAllDescriptions();
  });

  moreDescriptionButtons.forEach(button => {
    const container = button.closest('.category-item__description');

    button.addEventListener('click', () => {
      container.classList.toggle('show');
      button.textContent = container.classList.contains('show') ? 'Менше' : 'Більше';
    });
  });
}
