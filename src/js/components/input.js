import IMask from 'imask';

export function input() {
  const numericInputs = document.querySelectorAll('.input_numeric');
  const phoneInputs = document.querySelectorAll('.input_phone');
  const phoneMasks = [];

  numericInputs.forEach(input => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/g, '');
    });
  });

  function createMask(maskStr, startsWith, country) {
    return {
      mask: maskStr,
      startsWith,
      lazy: true,
      placeholderChar: ' ',
      country,
    };
  }

  const masks = [
    createMask('+{380} (00) 000-00-00', '380', 'UA'),
    createMask('+{1} (000) 000-0000', '1', 'US'),
    {
      mask: /^\d{0,15}$/,
    }
  ];

  phoneInputs.forEach(input => {
    const maskInstance = IMask(input, {
      mask: masks,
      dispatch: function (appended, dynamicMasked) {
        let number = (dynamicMasked.value + appended).replace(/\D/g, '');
        if (number.startsWith('0')) {
          number = '380' + number.slice(1);
        }

        const matchedMask = dynamicMasked.compiledMasks.find(m =>
          number.startsWith(m.startsWith)
        );
        return matchedMask || dynamicMasked.compiledMasks.find(m => m.mask instanceof RegExp);
      }
    });

    phoneMasks.push(maskInstance);
  });
}

export function search(list) {
  const inputEvent = new Event('input', { bubbles: true })
  let items = list;
  const searchContainer = document.querySelector('.search');

  if (!searchContainer) return

  const input = searchContainer?.querySelector('.input_search');
  const suggestionsContainer = searchContainer?.querySelector('.search__suggestions');
  const suggestionsList = searchContainer?.querySelector('.search__suggestions-list');

  function clearSuggestions() {
    suggestionsList.innerHTML = '';
    suggestionsContainer.classList.remove('open');
  }

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    clearSuggestions();

    if (query.length === 0) return;

    const matches = items.filter(item => item.toLowerCase().includes(query));

    if (matches.length > 0) {
      suggestionsContainer.classList.add('open');
    }

    matches.forEach(match => {
      const li = document.createElement('li');
      li.classList = 'search__item';
      li.textContent = match;

      li.addEventListener('click', () => {
        input.value = match;
        clearSuggestions();
        input.dispatchEvent(inputEvent)
      });

      suggestionsList.appendChild(li);
    });
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !suggestionsContainer.contains(e.target)) {
      clearSuggestions();
    }
  });
}

export function createDropdown(element, options) {
  const inputEvent = new Event('input', { bubbles: true })
  const dropdown = document.querySelector(element);
  const btn = dropdown.querySelector('.dropdown__button');
  const input = dropdown?.querySelector('.input_dropdown');
  const suggestionsContainer = dropdown?.querySelector('.dropdown__suggestions');
  const suggestionsList = dropdown?.querySelector('.dropdown__suggestions-list');

  if (!dropdown) return

  suggestionsList.innerHTML = '';

  function updateSuggestions(filteredOptions) {
    suggestionsList.innerHTML = '';

    if (filteredOptions.length === 0) {
      dropdown.classList.remove('open');
      suggestionsContainer.classList.remove('open');
      return
    }
    filteredOptions.forEach(opt => {
      const li = document.createElement('li');
      li.classList = 'dropdown__item';
      li.textContent = opt;
      li.addEventListener('click', () => {
        input.value = opt;
        suggestionsContainer.classList.remove('open');
        dropdown.classList.remove('open');
        input.dispatchEvent(inputEvent)
      });
      suggestionsList.appendChild(li);
    });
  }

  updateSuggestions(options);

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    if (query === '') {
      updateSuggestions(options);
      dropdown.classList.add('open');
      suggestionsContainer.classList.add('open');
    } else {
      const filtered = options.filter(opt => opt.toLowerCase().includes(query));
      updateSuggestions(filtered);
    }
  });

  input.addEventListener('focus', () => {
    if (suggestionsList.children.length > 0) {
      suggestionsContainer.classList.add('open');
      dropdown.classList.add('open');
    }
  });

  btn.addEventListener('click', () => {
    suggestionsContainer.classList.toggle('open');
    dropdown.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      suggestionsContainer.classList.remove('open');
      dropdown.classList.remove('open');
    }
  });
}
