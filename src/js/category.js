import { header } from "@/js/components/header";
import { howWorkSlider } from "@/js/pages/home/how-work";
import { globalSettings } from "@/js/utils/global";
import { copyBankDetails } from "@/js/pages/home/bank-details";
import { otherCategoriesSlider } from "./pages/category/other-categories";
import { printTextAnimation } from "./components/print-text-animation";
import { appearanceAnimation } from "./components/appearance-animation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { observeElements } from "./components/observe-once";
import { rotateRevealAnimation } from "./components/flip";

document.addEventListener('DOMContentLoaded', () => {
  const observeConfigs = [
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
    }
  ];

  ScrollTrigger.killAll();
  globalSettings();
  header();
  howWorkSlider();
  otherCategoriesSlider();
  copyBankDetails();

  observeConfigs.forEach(({ selector, callback }) => {
    observeElements(selector, callback);
  });

});