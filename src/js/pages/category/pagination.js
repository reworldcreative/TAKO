import { renderCategoryItems } from "./render-category";

const categories = document.querySelector('.categories__list');
const categoriesContainer = categories.closest('.categories__container');

function createItem(text, active = false) {
  const item = document.createElement('button');
  item.className = `pagination__item ${text === '...' ? 'pagination__dots' : ''} ${active ? 'active' : ''}`;
  item.type = 'button';
  item.textContent = text;
  return item;
}

export function createPagination(current, total) {
  const center = window.innerWidth < 350 ? [current - 1, current, current + 1] : [current - 2, current - 1, current, current + 1, current + 2];
  const filteredCenter = center
    .filter(p => p > 1 && p < total)
    .map(p => createItem(p, p === current));
  const includeThreeLeft = current === 5;
  const includeThreeRight = current === total - 4;
  const includeLeftDots = current > 5;
  const includeRightDots = current < total - 4;

  if (includeThreeLeft) filteredCenter.unshift(createItem(2));
  if (includeThreeRight) filteredCenter.push(createItem(total - 1));
  if (includeLeftDots) filteredCenter.unshift(createItem('...'));
  if (includeRightDots) filteredCenter.push(createItem('...'));

  const result = [createItem(1, current === 1), ...filteredCenter, createItem(total, current === total)];

  if (total <= 7 && window.innerWidth >= 350) {
    const full = [];

    for (let i = 1; i <= total; i++) {
      full.push(createItem(i, i === current));
    }
    return full;
  }

  if (result.length > 7) {
    const trimmed = [];

    trimmed.push(result[0]);
    if (current > 4) trimmed.push(createItem('...'));

    for (let i = current - 1; i <= current + 1; i++) {
      if (i > 1 && i < total) {
        trimmed.push(createItem(i, i === current));
      }
    }

    if (current < total - 3) trimmed.push(createItem('...'));
    trimmed.push(result[result.length - 1]);

    return trimmed;
  }

  return result;
}

const getPaginatedItems = (data, itemsOnPage, page) => {
  const startIndex = (page - 1) * itemsOnPage;
  const endIndex = startIndex + itemsOnPage;
  return data.slice(startIndex, endIndex);
};

export async function pagination(categoriesItems) {
  const itemsOnPage = 6;
  let currentPage = 1;
  let totalPages = 1;

  if (categoriesItems.length === 0) {
    categoriesContainer.classList.add('empty');
    return
  }

  const paginationContainer = document.querySelector('.pagination');
  const buttonPrev = document.createElement('button');
  const buttonNext = document.createElement('button');

  buttonPrev.className = 'pagination__item pagination__button pagination__button_prev disabled';
  buttonPrev.type = 'button';
  buttonPrev.innerHTML = `
    <svg class="icon pagination__arrow">
      <use xlink:href="#arrow-right"></use>
    </svg>`;

  buttonNext.className = 'pagination__item pagination__button pagination__button_next';
  buttonNext.type = 'button';
  buttonNext.innerHTML = `
    <svg class="icon pagination__arrow">
      <use xlink:href="#arrow-right"></use>
    </svg>`;

  async function renderPagination(page) {

    if (!categoriesItems) return;
    totalPages = Math.ceil(categoriesItems.length / itemsOnPage);

    if (totalPages <= 1) {
      paginationContainer.innerHTML = '';
      // renderCategoryItems(getPaginatedItems(categoriesItems, itemsOnPage, currentPage));
      categories.innerHTML = '';
      categories.append(...renderCategoryItems(getPaginatedItems(categoriesItems, itemsOnPage, currentPage)));
      categoriesContainer.classList.remove('empty');
      return;
    }

    if (!paginationContainer.contains(buttonPrev)) {
      paginationContainer.appendChild(buttonPrev);
      paginationContainer.appendChild(buttonNext);
    }

    while (buttonNext.previousSibling && buttonNext.previousSibling !== buttonPrev) {
      paginationContainer.removeChild(buttonNext.previousSibling);
    }

    const paginationItems = createPagination(page, totalPages);
    paginationItems.forEach(item => paginationContainer.insertBefore(item, buttonNext));

    paginationItems.forEach(item => {
      item.addEventListener('click', () => {
        if (item.textContent === '...') return;
        const newPage = Number(item.textContent);
        if (!isNaN(newPage) && newPage !== currentPage) {
          currentPage = newPage;
          renderPagination(currentPage);
        }
      });
    });

    buttonPrev.classList.toggle('disabled', page === 1);
    buttonNext.classList.toggle('disabled', page === totalPages);
    // renderCategoryItems(getPaginatedItems(categoriesItems, itemsOnPage, currentPage));

    categories.innerHTML = '';
    categories.append(...renderCategoryItems(getPaginatedItems(categoriesItems, itemsOnPage, currentPage)));
    categoriesContainer.classList.remove('empty');
  }

  await renderPagination(currentPage);

  buttonPrev.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderPagination(currentPage);
    }
  });

  buttonNext.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderPagination(currentPage);
    }
  });
}
