export function counter() {
  const counters = document.querySelectorAll('.counter');

  if (!counters.length) return;

  counters.forEach(counter => {
    const decrement = counter.querySelector('.decrement');
    const increment = counter.querySelector('.increment');
    const input = counter.querySelector('.input');

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
  })
}