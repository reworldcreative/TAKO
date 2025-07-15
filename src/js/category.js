import { header } from "@/js/components/header";
import { howWorkSlider } from "@/js/pages/home/how-work";
import { globalSettings } from "@/js/utils/global";
import { copyBankDetails } from "@/js/pages/home/bank-details";
import { otherCategoriesSlider } from "@/js/pages/category/other-categories";
import { printTextAnimation } from "@/js/components/print-text-animation";
import { appearanceAnimation } from "@/js/components/appearance-animation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { observeElements } from "@/js/components/observe-once";
import { rotateRevealAnimation } from "@/js/components/flip";
import { initCategorySliders, moreDescription } from "@/js/pages/category/category-item";
import { scaleRevealAnimation } from "@/js/components/scale";
import { categoryList } from "@/js/pages/category/categories";

document.addEventListener('DOMContentLoaded', () => {
  const observeConfigs = [
    {
      selector: ".header",
      callback: () => {
        appearanceAnimation([".header__products-button", ".header__button-contacts", ".header__button-support", ".header__button-badge"], ".header", 0.3, 0.1)
        scaleRevealAnimation([".header__logo", ".navigation__link"], ".header", 0.5, 0.2)
      }
    },
    {
      selector: ".hero-banner",
      callback: () => {
        printTextAnimation(".hero-banner__title", ".hero-banner")
        appearanceAnimation([".hero-banner__text"], ".hero-banner")
      }
    },
    {
      selector: ".about",
      callback: () => {
        appearanceAnimation([".about__title", ".about__text"], ".about__container")
        printTextAnimation(".about__title", ".about__container")
      }
    },
    {
      selector: ".other-categories",
      callback: () => {
        appearanceAnimation([".other-categories__title"], ".other-categories")
        rotateRevealAnimation([".other-categories__slide"], ".other-categories")
      }
    },
    {
      selector: ".how-work",
      callback: () => appearanceAnimation([".how-work__title"], ".how-work")
    },
    {
      selector: ".bank-details",
      callback: () => {
        appearanceAnimation([".bank-details__title"], ".bank-details")
        scaleRevealAnimation([".bank-details__code-wrapper"], ".bank-details")
      }
    },
    {
      selector: ".footer",
      callback: () => {
        appearanceAnimation([".footer__text", ".footer__button-contact"], ".footer")
        appearanceAnimation([".footer__item"], ".footer", 0.3, 0.1)
        scaleRevealAnimation([".footer__logo", ".footer__socials-item"], ".footer")
      }
    }
  ];

  ScrollTrigger.killAll();
  globalSettings();
  header();
  howWorkSlider();
  otherCategoriesSlider();
  copyBankDetails();
  categoryList();

  // document.querySelectorAll('.category-item').forEach(item => {
  //   initCategorySliders(item);
  //   moreDescription(item);
  // });

  observeConfigs.forEach(({ selector, callback }) => {
    observeElements(selector, callback);
  });

});