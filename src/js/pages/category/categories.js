import { getData } from "@/js/components/get-data";
import { renderCategoryItems } from "./render-category";

const base = import.meta.env.BASE_URL || '/';
const categories = document.querySelector('.categories__list');
const categoriesContainer = categories.closest('.categories__container');

function createList(items) {
  if (items.length === 0) {
    categoriesContainer.classList.add('empty');
    return
  }

  categories.innerHTML = '';
  categories.append(...renderCategoryItems(items));
  categoriesContainer.classList.remove('empty');
}

export async function categoryList(category) {
  const data = await getData(`${base}data/categories/categories.json`);
  const items = data.filter(item => item.category === category);
  const radios = document.querySelectorAll('input[name="categories-selector"]');
  let filteredItems = items;

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      filteredItems = radio.value === 'all' ? items : items.filter(item => item.tags.includes(radio.value));
      createList(filteredItems);
    });
  });

  createList(filteredItems);
}