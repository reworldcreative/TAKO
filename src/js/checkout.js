import { header } from "@/js/components/header";
import { form } from "./pages/checkout/form";
import { products } from "./pages/checkout/products";
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
    }
  ];

  header();
  form();
  products();

  observeConfigs.forEach(({ selector, callback }) => {
    observeElements(selector, callback);
  });
});