import { header } from "@/js/components/header";
import { globalSettings } from "@/js/utils/global";
import { copyBankDetails } from "@/js/pages/home/bank-details";
import { appearanceAnimation } from "./components/appearance-animation";
import { scaleRevealAnimation } from "./components/scale";
import { observeElements } from "./components/observe-once";

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


  globalSettings();
  header();
  copyBankDetails();

  observeConfigs.forEach(({ selector, callback }) => {
    observeElements(selector, callback);
  });
});