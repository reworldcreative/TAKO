export function counter(element) {

  if (!element) return;

  const decrement = element.querySelector('.decrement');
  const increment = element.querySelector('.increment');
  const input = element.querySelector('.input');

  decrement.addEventListener('click', () => {
    input.stepDown();
    input.dispatchEvent(new Event('input'));
  });

  increment.addEventListener('click', () => {
    input.stepUp();
    input.dispatchEvent(new Event('input'));
  });

  input.addEventListener('input', () => {
    let value = parseInt(input.value, 10);

    if (isNaN(value) || value < 1) {
      value = 1;
      input.value = value;
    }

    if (value > 1) decrement.removeAttribute('disabled');
    else decrement.setAttribute('disabled', '');
  });
}