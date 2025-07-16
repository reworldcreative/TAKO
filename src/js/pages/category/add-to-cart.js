import { updateCheckoutProducts } from "@/js/utils/update-checkout-products";

export function addToCart(item) {
  const addButton = item.querySelector('.category-item__buy-button');
  const newItem = {
    id: item.dataset.id,
    category: item.dataset.category
  };

  const updateUI = () => {
    const products = JSON.parse(localStorage.getItem('checkoutProducts')) || [];
    const isInCart = products.some(
      (el) => String(el.id) === String(newItem.id) && String(el.category) === String(newItem.category)
    );

    if (isInCart) {
      item.classList.add('added');
      addButton.querySelector('.button-text').textContent = 'В кошику';
    } else {
      item.classList.remove('added');
      addButton.querySelector('.button-text').textContent = 'Купити';
    }
  };

  updateUI();

  window.addEventListener('checkoutProductsUpdated', updateUI);

  addButton.addEventListener('click', () => {
    const products = JSON.parse(localStorage.getItem('checkoutProducts')) || [];

    const isInCart = products.some(
      (el) => String(el.id) === String(newItem.id) && String(el.category) === String(newItem.category)
    );

    if (!isInCart) {
      const updatedProducts = [...products, newItem];
      updateCheckoutProducts(updatedProducts);
    }
  });
}
