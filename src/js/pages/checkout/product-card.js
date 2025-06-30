import { counter } from "../../components/counter";

export function productCard() {
  const productCards = document.querySelectorAll('.product-card');

  if (!productCards.length) return;

  productCards.forEach(productCard => productCard.querySelector('.product-card__trash-button').addEventListener('click', () => productCard.remove()));
  counter();
}