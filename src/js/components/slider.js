import Swiper from 'swiper'

export function slider(sliderSelector, options = {}) {
  return new Swiper(`.${sliderSelector}`, {
    lazy: true,
    preloadImages: false,
    watchOverflow: true,
    ...options,
  })
}
