import { createDropdown, input, search } from "@/js/components/input";
import { disablePageScroll } from '@fluejs/noscroll';
import JustValidate from 'just-validate';
import { getData } from "@/js/components/get-data";

const base = import.meta.env.BASE_URL || '/';

function checkboxDelivery() {
  const radios = document.querySelectorAll('input[name="convenient-communication-method"]');
  const contentBlocks = document.querySelectorAll('.checkout-form__delivery-content');

  function updateVisibleContent(value) {

    contentBlocks.forEach(block => {
      block.classList.toggle('active', block.dataset.method === value);
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
  checkboxDelivery();

  if (typeof navigator !== 'undefined') {
    if (navigator.userAgent.toLowerCase().includes('firefox')) {
      const productsContainer = document.querySelector('.checkout-form__products');

      productsContainer.style.setProperty('scrollbar-width', 'thin');
      productsContainer.style.setProperty('scrollbar-color', '#0F5EBB transparent');
    };
  }

  const validation = new JustValidate('.checkout-form');

  validation
    .addField('[name="surname"]', [
      {
        rule: 'required',
        errorMessage: 'Прізвище обов’язкове',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Мінімум 2 символи',
      },
    ])
    .addField('[name="name"]', [
      {
        rule: 'required',
        errorMessage: 'Ім’я обов’язкове',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Мінімум 2 символи',
      },
    ]).addField('[name="middle-name"]', [
      {
        rule: 'required',
        errorMessage: 'По батькові обов’язкове',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Мінімум 2 символи',
      },
    ]).addField('[name="phone"]', [
      {
        rule: 'required',
        errorMessage: 'Номер телефону обов’язковий',
      },
      {
        rule: 'customFunction',
        validator: (value) => {
          const cleaned = value.replace(/[^\d]/g, '');

          return /^380\d{9}$/.test(cleaned);
        },
        errorMessage: 'Введіть номер у форматі +380XXXXXXXXX',
      },
    ]).addField('[name="address"]', [
      {
        rule: 'required',
        errorMessage: 'Адреса обов’язкова',
      },
      {
        rule: 'customFunction',
        validator: (value, fields) => {
          if (cities.includes(value.trim())) {
            fields['[name="branch-number"]'].elem.disabled = false;
          }
          else {
            fields['[name="branch-number"]'].elem.disabled = true;
          }
          return cities.includes(value.trim());
        },
        errorMessage: 'Населений пункт не знайдено',
      }
    ]).addField('[name="branch-number"]', [
      {
        rule: 'customFunction',
        validator: (value, fields) => {
          const input = fields['[name="branch-number"]'].elem;
          if (input.disabled) return true;
          return value.trim() !== '';
        },
        errorMessage: 'Номер відділення обов’язковий',
      },
    ]).addField('[name="delivery-phone"]', [
      {
        rule: 'customFunction',
        validator: (value) => {
          const selectedMethod = document.querySelector('input[name="convenient-communication-method"]:checked')?.value;

          if (selectedMethod !== 'phone') {
            return true;
          }

          return value.trim() !== '';
        },
        errorMessage: 'Номер телефону обов’язковий',
      },
      {
        rule: 'customFunction',
        validator: (value) => {
          const cleaned = value.replace(/[^\d]/g, '');

          return /^380\d{9}$/.test(cleaned);
        },
        errorMessage: 'Введіть номер у форматі +380XXXXXXXXX',
      },
    ]).addField('[name="delivery-viber"]', [
      {
        rule: 'customFunction',
        validator: (value) => {
          const selectedMethod = document.querySelector('input[name="convenient-communication-method"]:checked')?.value;

          if (selectedMethod !== 'viber') {
            return true;
          }

          return value.trim() !== '';
        },
        errorMessage: 'Номер viber обов’язковий',
      },
      {
        rule: 'customFunction',
        validator: (value) => {
          const cleaned = value.replace(/[^\d]/g, '');

          return /^380\d{9}$/.test(cleaned);
        },
        errorMessage: 'Введіть номер у форматі +380XXXXXXXXX',
      },
    ]).addField('[name="delivery-telegram"]', [
      {
        rule: 'customFunction',
        validator: (value) => {
          const selectedMethod = document.querySelector('input[name="convenient-communication-method"]:checked')?.value;

          if (selectedMethod !== 'telegram') {
            return true;
          }

          return value.trim() !== '';
        },
        errorMessage: 'Номер telegram обов’язковий',
      },
      {
        rule: 'customFunction',
        validator: (value) => {
          const selectedMethod = document.querySelector('input[name="convenient-communication-method"]:checked')?.value;
          if (selectedMethod !== 'telegram') return true;

          const val = value.trim();
          if (!val) return false;

          const cleaned = val.replace(/[^\d]/g, '');

          const isPhone = /^380\d{9}$/.test(cleaned);
          const isNick = /^@?[\w\d_]{3,32}$/.test(val);

          return isPhone || isNick;
        },
        errorMessage: 'Введіть номер у форматі +380XXXXXXXXX або нік',
      },
    ]).addField('[name="delivery-whatsup"]', [
      {
        rule: 'customFunction',
        validator: (value) => {
          const selectedMethod = document.querySelector('input[name="convenient-communication-method"]:checked')?.value;

          if (selectedMethod !== 'whatsup') {
            return true;
          }

          return value.trim() !== '';
        },
        errorMessage: 'Номер whatsup обов’язковий',
      },
      {
        rule: 'customFunction',
        validator: (value) => {
          const cleaned = value.replace(/[^\d]/g, '');

          return /^380\d{9}$/.test(cleaned);
        },
        errorMessage: 'Введіть номер у форматі +380XXXXXXXXX',
      },
    ]).addField('[name="delivery-signal"]', [
      {
        rule: 'customFunction',
        validator: (value) => {
          const selectedMethod = document.querySelector('input[name="convenient-communication-method"]:checked')?.value;

          if (selectedMethod !== 'signal') {
            return true;
          }

          return value.trim() !== '';
        },
        errorMessage: 'Номер signal обов’язковий',
      },
      {
        rule: 'customFunction',
        validator: (value) => {
          const cleaned = value.replace(/[^\d]/g, '');

          return /^380\d{9}$/.test(cleaned);
        },
        errorMessage: 'Введіть номер у форматі +380XXXXXXXXX',
      },
    ])
    .onSuccess((event) => {
      event.preventDefault();
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
      localStorage.setItem('checkoutProducts', '');

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
}