import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';

export function header() {
  const header = document.querySelector('.header')
  const burgerMenu = document.querySelector('.burger-menu')
  const burgerMenuButton = document.querySelector('.header__menu-button')
  const productsButton = document.querySelector('.header__products-button')
  const productsMenu = document.querySelector('.header__products')
  const headerBG = document.querySelector('.header__bg')


  burgerMenuButton.addEventListener('click', () => {
    header.classList.toggle('open-burger')
    burgerMenu.classList.toggle('show')

    if (header.classList.contains('open-burger')) {
      disablePageScroll()
    } else {
      enablePageScroll()
    }
  })

  productsButton.addEventListener('click', (el) => {
    el.target.classList.toggle('active')
    productsMenu.classList.toggle('show')
    headerBG.classList.toggle('show')

    if (productsMenu.classList.contains('show')) {
      disablePageScroll()
    } else {
      enablePageScroll()
    }
  })

  headerBG.addEventListener('click', () => {
    header.classList.remove('open-burger')
    burgerMenu.classList.remove('show')
    productsButton.classList.remove('active')
    productsMenu.classList.remove('show')
    headerBG.classList.remove('show')
    enablePageScroll()
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1420) {
      header.classList.remove('open-burger')
      burgerMenu.classList.remove('show')
      productsButton.classList.remove('active')
      productsMenu.classList.remove('show')
      headerBG.classList.remove('show')

      if (header.classList.contains('open-burger') || productsMenu.classList.contains('show')) {
        disablePageScroll()
      } else {
        enablePageScroll()
      }
    }
  })
}