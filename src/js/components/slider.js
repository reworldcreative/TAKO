import Swiper from 'swiper'

export function slider(sliderSelector, options = {}) {
  new Swiper(`.${sliderSelector}`, {
    lazy: true,
    preloadImages: false,
    watchOverflow: true,
    ...options,
  })
}
