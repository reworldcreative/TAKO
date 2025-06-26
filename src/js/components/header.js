import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';

export function header() {
  const header = document.querySelector('.header')
  const burgerMenu = document.querySelector('.burger-menu')
  const burgerMenuButton = document.querySelector('.header__menu-button')

  burgerMenuButton.addEventListener('click', () => {
    header.classList.toggle('open-burger')
    burgerMenu.classList.toggle('show')

    if (header.classList.contains('open-burger')) {
      disablePageScroll()
    } else {
      enablePageScroll()
    }
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1420) {
      header.classList.remove('open-burger')
      burgerMenu.classList.remove('show')

      if (header.classList.contains('open-burger')) {
        disablePageScroll()
      } else {
        enablePageScroll()
      }
    }
  })
}