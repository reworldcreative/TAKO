import { updateCheckoutProducts } from "@/js/utils/update-checkout-products";


export function removeProductFromStorage(idToRemove) {
  const products = JSON.parse(localStorage.getItem('checkoutProducts')) || [];
  const updated = products.filter(product => String(product.id) !== String(idToRemove));

  updateCheckoutProducts(updated);
}

export function observeProductRemoval(container, callback) {
  if (!container || typeof callback !== 'function') return;

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.removedNodes.forEach(node => {
        if (node.classList && node.classList.contains('product-card')) {
          const id = node.dataset.id;
          if (id) {
            removeProductFromStorage(id);
            callback(node);
          }
        }
      });
    });
  });

  observer.observe(container, {
    childList: true,
  });
}