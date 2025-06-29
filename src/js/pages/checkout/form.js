import { createDropdown, input, search } from "@/js/components/input";

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

document.querySelector('.checkout-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  console.log(data);
});

function checkboxDelivery() {
  const radios = document.querySelectorAll('input[name="delivery"]');
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

  const initial = document.querySelector('input[name="delivery"]:checked');
  if (initial) updateVisibleContent(initial.value);

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      updateVisibleContent(radio.value);
    });
  });
}


export async function form() {
  const cities = await getData('/data/cities.json');
  input();
  search(cities);
  createDropdown('.dropdown', ['Опція 1', 'Опція 2', 'Опція 3']);
  checkActivateBranchNumber(cities);
  checkboxDelivery();
}