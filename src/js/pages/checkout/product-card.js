import { counter } from "@/js/components/counter";

export function productCard(cardItem, list = document) {
  // const productCards = list.querySelectorAll('.product-card');

  // if (!productCards.length) return;

  // productCards.forEach(productCard => {
  //   productCard.querySelector('.product-card__trash-button').addEventListener('click', () => productCard.remove())
  //   counter(productCard);
  // });

  if (!cardItem) return;

  cardItem.querySelector('.product-card__trash-button').addEventListener('click', () => cardItem.remove())
  counter(cardItem);
}