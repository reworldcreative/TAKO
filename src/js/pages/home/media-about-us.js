import { slider } from '@/js/components/slider';

export function mediaAboutUsSlider() {
  slider('media-about-us__slider', {
    slidesPerView: 1,
    spaceBetween: 5,
  });

  const wrappers = document.querySelectorAll('.media-about-us__video');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const wrapper = entry.target;
        const videoId = wrapper.dataset.videoId;

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
        iframe.width = '771';
        iframe.height = '392';
        iframe.frameBorder = '0';
        iframe.allow = 'autoplay; encrypted-media';
        iframe.allowFullscreen = true;

        wrapper.appendChild(iframe);
        observer.unobserve(wrapper);
      }
    });
  }, { threshold: 0.25 });

  wrappers.forEach(wrapper => observer.observe(wrapper));
}