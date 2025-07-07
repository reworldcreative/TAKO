import { counter } from "../../components/counter";

export function productCard(list = document) {
  const productCards = list.querySelectorAll('.product-card');

  if (!productCards.length) return;

  productCards.forEach(productCard => {
    productCard.querySelector('.product-card__trash-button').addEventListener('click', () => productCard.remove())
    counter(productCard);
  });
}