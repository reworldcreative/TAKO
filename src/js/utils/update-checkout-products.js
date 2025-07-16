export function updateCheckoutProducts(newProducts) {
  localStorage.setItem('checkoutProducts', JSON.stringify(newProducts));

  window.dispatchEvent(new Event('checkoutProductsUpdated'));
}