import { header } from "@/js/components/header";
import { howWorkSlider } from "@/js/pages/home/how-work";
import { reviewsSlider } from "@/js/pages/home/reviews";
import { globalSettings } from "@/js/utils/global";
import { acknowledgmentsSlider } from "@/js/pages/home/acknowledgments";
import { mediaAboutUsSlider } from "@/js/pages/home/media-about-us";
import { copyBankDetails } from "@/js/pages/home/bank-details";
import { appearanceAnimation } from "./components/appearance-animation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { observeElements } from "./components/observe-once";
import { rotateRevealAnimation } from "./components/flip";

document.addEventListener('DOMContentLoaded', () => {
  const observeConfigs = [
    {
      selector: ".in-numbers",
      callback: () => import("./pages/home/animate-numbers").then(m => {
        m.animateNumbers('.in-numbers__item-value')
        appearanceAnimation([".in-numbers__title", ".in-numbers__text"], ".in-numbers")
      })
    },
    {
      selector: ".hero",
      callback: () => appearanceAnimation([".hero__title", ".hero__button"], ".hero__container")
    },
    {
      selector: ".partners",
      callback: () => {
        appearanceAnimation([".partners__title"], ".partners")
        rotateRevealAnimation([".partners__item"], ".partners")
      }
    },
    {
      selector: ".how-work",
      callback: () => {
        appearanceAnimation([".how-work__title", ".how-work__top-text", ".how-work__subtitle"], ".how-work")
        rotateRevealAnimation([".how-work__info-block"], ".how-work")
      }
    },
    {
      selector: ".about",
      callback: () => appearanceAnimation([".about__title", ".about__text"], ".about__container")
    },
    {
      selector: ".reviews",
      callback: () => appearanceAnimation([".reviews__title", ".reviews__text"], ".reviews")
    },
    {
      selector: ".acknowledgments",
      callback: () => appearanceAnimation([".acknowledgments__title", ".acknowledgments__text"], ".acknowledgments")
    },
    {
      selector: ".media-about-us",
      callback: () => appearanceAnimation([".media-about-us__title"], ".media-about-us")
    },
    {
      selector: ".our-products",
      callback: () => {
        appearanceAnimation([".our-products__title"], ".our-products")
        rotateRevealAnimation([".our-products__item"], ".our-products")
      }
    },
    {
      selector: ".bank-details",
      callback: () => {
        appearanceAnimation([".bank-details__title"], ".bank-details")
        rotateRevealAnimation([".bank-details__second"], ".bank-details")
      }
    }
  ];

  ScrollTrigger.killAll();
  globalSettings();
  header();
  howWorkSlider();
  reviewsSlider();
  acknowledgmentsSlider();
  mediaAboutUsSlider();
  copyBankDetails();

  observeConfigs.forEach(({ selector, callback }) => {
    observeElements(selector, callback);
  });
});