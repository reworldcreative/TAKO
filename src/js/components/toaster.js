const toaster = document.querySelector('.toaster');
let toasterTimeoutId = null;

export function showToaster(text) {

  toaster.querySelector('.toaster__text').textContent = text;
  toaster.classList.add('show');

  if (toasterTimeoutId) {
    clearTimeout(toasterTimeoutId);
  }

  toasterTimeoutId = setTimeout(() => {
    toaster.classList.remove('show');
    toasterTimeoutId = null;
  }, 2000);
}