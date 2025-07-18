export function counter(element) {

  if (!element) return;

  const data = JSON.parse(localStorage.getItem('checkoutProducts'));
  const index = data.findIndex(el => String(el.id) === String(element.dataset.id) && String(el.category) === String(element.dataset.category));
  console.log(data)

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

    if (index !== -1) {
      data[index].quantity = input.value.toString();
      localStorage.setItem('checkoutProducts', JSON.stringify(data));
    }
  });
}