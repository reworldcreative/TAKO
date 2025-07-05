import { showToaster } from '@/js/components/toaster';

export function copyBankDetails() {
  const copyButton = document.querySelectorAll('.bank-details__button');

  copyButton.forEach((button) => {
    button.addEventListener('click', (event) => {
      const codeValue = event.currentTarget.querySelector('.bank-details__details');

      if (!codeValue) return;

      navigator.clipboard.writeText(codeValue.textContent.trim())
      showToaster('Реквізити скопійовано');
    });
  });
}