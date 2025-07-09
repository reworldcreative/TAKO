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

document.addEventListener('DOMContentLoaded', () => {
  const observeConfigs = [
    {
      selector: ".in-numbers",
      callback: () => import("./pages/home/animate-numbers").then(m => m.animateNumbers('.in-numbers__item-value'))
    },
    {
      selector: ".hero",
      callback: () => appearanceAnimation([".hero__title", ".hero__button"], ".hero__container")
    },
    {
      selector: ".about",
      callback: () => appearanceAnimation([".about__title", ".about__text"], ".about__container")
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