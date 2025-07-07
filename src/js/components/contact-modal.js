import { disablePageScroll, enablePageScroll } from '@fluejs/noscroll';
import { createDropdown, input } from "@/js/components/input";
import JustValidate from 'just-validate';


export function contactModal() {
  const modal = document.querySelector('.contact-modal');
  const openContactsModal = document.querySelectorAll('.contacts-button');
  const contactsModalContainer = document.querySelector('.contact-modal__container');
  const closeButtons = document.querySelectorAll('.contact-modal__close-button');
  const successMessage = document.querySelector('.contact-modal__success');
  const form = document.querySelector('.contact-modal__form');

  input();
  createDropdown('.contacts-theme-dropdown', ['Тема 1', 'Тема 2', 'Тема 3']);

  openContactsModal?.forEach((button) => {
    button.addEventListener('click', () => {
      modal.classList.add('show');
      successMessage.classList.remove('show');
      form.classList.remove('hidden');
      disablePageScroll();

      setTimeout(() => {
        contactsModalContainer.classList.add('show');
      }, 100);
    });
  });

  modal?.addEventListener('click', function (event) {
    if (event.target === modal) {
      contactsModalContainer.classList.remove('show');

      setTimeout(() => {
        modal.classList.remove('show');
      }, 100);
      enablePageScroll();
    }
  });

  closeButtons?.forEach((button) => {
    button.addEventListener('click', () => {
      contactsModalContainer.classList.remove('show');

      setTimeout(() => {
        modal.classList.remove('show');
      }, 100);
      enablePageScroll();
    });
  });


  const validation = new JustValidate('.contact-modal__form');

  validation
    .addField('[name="contact-name"]', [
      {
        rule: 'required',
        errorMessage: 'Ім’я обов’язкове',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Мінімум 2 символи',
      },
    ])
    .addField('[name="contact-phone"]', [
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
    ])
    .addField('[name="contact-email"]', [
      {
        rule: 'required',
        errorMessage: 'Пошта обов’язкова',
      },
      {
        rule: 'email',
        errorMessage: 'Введіть коректну пошту',
      },
    ])
    .addField('[name="contact-theme"]', [
      {
        rule: 'required',
        errorMessage: 'Тема обов’язкова',
      },
    ])
    .addField('[name="contact-comment"]', [
      {
        rule: 'maxLength',
        value: 1000,
        errorMessage: 'Максимум 1000 символів',
      },
    ])
    .onSuccess((event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      const successMessage = document.querySelector('.contact-modal__success');

      form.classList.add('hidden');
      successMessage.classList.add('show');
      form.reset();

      console.log(data);
    });
}