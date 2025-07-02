import IMask from 'imask';

export function input() {
  const numericInputs = document.querySelectorAll('.input_numeric');
  const phoneInputs = document.querySelectorAll('.input_phone');
  const telegramInputs = document.querySelectorAll('.input_telegram');
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
    };
  }

  const masks = [
    createMask('+{38}(000)000-00-00', '380', 'UA'),
    createMask('+{1} (000) 000-0000', '1', 'US'),
    // {
    //   mask: /^\d{0,15}$/,
    // }
  ];

  phoneInputs.forEach(input => {
    const maskInstance = IMask(input, {
      mask: masks,
      dispatch(appended, dynamicMasked) {
        let number = (dynamicMasked.value + appended).replace(/\D/g, '');

        if (!number.startsWith('380') && !number.startsWith('1')) {
          number = '380' + number;
        }

        const matchedMask = dynamicMasked.compiledMasks.find(m =>
          number.startsWith(m.startsWith)
        );

        return matchedMask || dynamicMasked.compiledMasks.find(m => m.startsWith === '380');
      },
      lazy: false,
      placeholderChar: ' ',
    });

    // input.addEventListener('input', () => {
    //   let val = maskInstance.unmaskedValue;

    //   if (!val.startsWith('380')) {
    //     val = '380' + val.slice(2);

    //     if (val.length > 12) val = val.slice(0, 12);

    //     maskInstance.unmaskedValue = val;
    //   }
    // });

    phoneMasks.push(maskInstance);
  });


  telegramInputs.forEach((input) => {
    let currentMaskType = '';

    const maskInstance = IMask(input, {
      mask: [
        {
          mask: '+{38}(000)000-00-00', // UA
          lazy: true,
          placeholderChar: ' ',
        },
        {
          mask: '+{1}(000)000-0000', // US
          lazy: true,
          placeholderChar: ' ',
        },
        {
          // username
          mask: new IMask.MaskedRegExp({
            mask: /^@[\w\d_]{0,32}$/,
          }),
          lazy: false,
        },
        {
          mask: new IMask.MaskedRegExp({
            mask: /^[^\s]{0,32}$/,
          }),
          lazy: false,
        },
      ],
      dispatch: function (appended, dynamicMasked) {
        const rawValue = dynamicMasked.value + appended;
        const value = rawValue.trim();
        const numeric = value.replace(/\D/g, '');

        // reset
        if (value === '') {
          currentMaskType = '';
        }

        // username
        if (currentMaskType === 'username' || value.startsWith('@')) {
          currentMaskType = 'username';
          return dynamicMasked.compiledMasks[2];
        }

        // US 
        if (value.startsWith('+1') || numeric.startsWith('1')) {
          currentMaskType = 'us';
          return dynamicMasked.compiledMasks[1];
        }

        // UA
        if (
          value.startsWith('+38') ||
          numeric.startsWith('380') ||
          numeric.startsWith('0') ||
          /^[\d\+]+$/.test(value)
        ) {
          currentMaskType = 'ua';
          return dynamicMasked.compiledMasks[0];
        }

        return dynamicMasked.compiledMasks[3]; // default
      },
    });
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

  input.addEventListener('focus', () => {
    if (suggestionsList.children.length > 0) {
      suggestionsContainer.classList.add('open');
    }
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !suggestionsContainer.contains(e.target)) {
      // clearSuggestions();
      suggestionsContainer.classList.remove('open');
    }
  });
}

export function createDropdown(element, options, isSearch = false) {
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

  if (isSearch) {
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
  }

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
