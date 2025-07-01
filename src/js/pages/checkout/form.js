import { createDropdown, input, search } from "@/js/components/input";
import { disablePageScroll } from '@fluejs/noscroll';
const base = import.meta.env.BASE_URL || '/';

async function getData(url) {
  try {
    const response = await fetch(url);
    const items = await response.json();
    return items;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function checkActivateBranchNumber(cities) {
  const branchNumberInput = document.getElementById('branch-number');
  const countryInput = document.getElementById('address');

  countryInput.addEventListener('input', (input) => {
    const value = input.target.value.trim();
    const isMatch = cities.some(city => city.toLowerCase() === value.toLowerCase());

    if (isMatch) {
      branchNumberInput.disabled = false;
    } else {
      branchNumberInput.disabled = true;
    }
  });
}

document.querySelector('.checkout-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const totalPrice = document.querySelector('.checkout-form__price-value').textContent.trim().replace(',', '.');
  const products = document.querySelectorAll('.product-card');
  const productList = Array.from(products).map(product => {
    const id = product.dataset.id;
    const title = product.querySelector('.product-card__title')?.textContent.trim() || '';
    const quantity = product.querySelector('.product-card__counter-input')?.value || 0;

    return {
      id,
      title,
      quantity: Number(quantity),
    };
  });

  data.products = productList;
  data.totalPrice = totalPrice;

  window.scrollTo({
    top: 0,
    behavior: 'auto'
  });
  const successForm = document.querySelector('.checkout-success');
  successForm.classList.add('show');
  disablePageScroll();

  // try {
  //   const response = await fetch('/your-endpoint-url', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   if (!response.ok) {
  //     throw new Error(`Server error: ${response.status}`);
  //   }
  //   form.reset();
  // } catch (error) {
  //   console.error(error);
  // }


  console.log(data);
});

function checkboxDelivery() {
  const radios = document.querySelectorAll('input[name="convenient-communication-method"]');
  const contentBlocks = document.querySelectorAll('.checkout-form__delivery-content');

  function updateVisibleContent(value) {

    contentBlocks.forEach(block => {
      const input = block.querySelector('input');

      input.removeAttribute('required');
      block.classList.toggle('active', block.dataset.method === value);
      if (block.dataset.method === value) {
        input.setAttribute('required', '');
      }
    });
  }

  const initial = document.querySelector('input[name="convenient-communication-method"]:checked');
  if (initial) updateVisibleContent(initial.value);

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      updateVisibleContent(radio.value);
    });
  });
}


export async function form() {
  const cities = await getData(`${base}data/cities.json`);
  input();
  search(cities);
  createDropdown('.dropdown', ['Опція 1', 'Опція 2', 'Опція 3']);
  checkActivateBranchNumber(cities);
  checkboxDelivery();

  if (typeof navigator !== 'undefined') {
    if (navigator.userAgent.toLowerCase().includes('firefox')) {
      const productsContainer = document.querySelector('.checkout-form__products');

      productsContainer.style.setProperty('scrollbar-width', 'thin');
      productsContainer.style.setProperty('scrollbar-color', '#0F5EBB transparent');
    };
  }
}