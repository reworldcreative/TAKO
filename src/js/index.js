import { header } from "@/js/components/header";
import { howWorkSlider } from "@/js/pages/home/how-work";
import { reviewsSlider } from "@/js/pages/home/reviews";
import { globalSettings } from "@/js/utils/global";
import { acknowledgmentsSlider } from "@/js/pages/home/acknowledgments";
import { mediaAboutUsSlider } from "@/js/pages/home/media-about-us";
import { copyBankDetails } from "@/js/pages/home/bank-details";
import { animateNumbers } from "./pages/home/animate-numbers";
import { appearanceAnimation } from "./components/appearance-animation";

document.addEventListener('DOMContentLoaded', () => {
  globalSettings();
  header();
  appearanceAnimation([".hero__title", ".hero__button"], ".hero__container");
  appearanceAnimation([".about__title", ".about__text"], ".about__container");
  howWorkSlider();
  reviewsSlider();
  acknowledgmentsSlider();
  mediaAboutUsSlider();
  copyBankDetails();
  animateNumbers('in-numbers__item-value');
});