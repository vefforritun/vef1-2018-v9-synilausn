const API_URL = 'https://apis.is/isnic?domain=';

/**
 * Leit að lénum á Íslandi gegnum apis.is
 */
const program = (() => {
  let input;
  let results;

  function empty(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  function el(name, ...children) {
    const element = document.createElement(name);

    for (let child of children) { /* eslint-disable-line */
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child) {
        element.appendChild(child);
      }
    }

    return element;
  }

  function formatDate(date) {
    const d = new Date(date);

    if (Number.isNaN(d.getTime())) {
      return date;
    }

    function zeropad(s) {
      if (s.toString().length === 1) {
        return `0${s}`;
      }

      return s;
    }

    return `${d.getFullYear()}-${zeropad(d.getMonth() + 1)}-${zeropad(d.getDate())}`;
  }

  function showMessage(msg) {
    empty(results);
    results.appendChild(el('p', msg));
  }

  function showResults(item) {
    if (item.length === 0) {
      showMessage('Lén er ekki skráð');
      return;
    }

    const [{
      domain,
      registered,
      lastChange,
      expires,
      registrantname,
      address,
      country,
      email,
    }] = item;

    const result = el(
      'dl', el('dt', 'Lén'),
      el('dd', domain),
      el('dt', 'Skráð'),
      el('dd', formatDate(registered)),
      el('dt', 'Seinast breytt'),
      el('dd', formatDate(lastChange)),
      el('dt', 'Rennur út'),
      el('dd', formatDate(expires)),
      registrantname ? el('dt', 'Skráningaraðili') : null,
      registrantname ? el('dd', registrantname) : null,
      email ? el('dt', 'Netfang') : null,
      email ? el('dd', email) : null,
      address ? el('dt', 'Heimilisfang') : null,
      address ? el('dd', address) : null,
      country ? el('dt', 'Land') : null,
      country ? el('dd', country) : null,
    );

    empty(results);
    results.appendChild(result);
  }

  function showLoading() {
    empty(results);

    const img = document.createElement('img');
    img.setAttribute('alt', '');
    img.setAttribute('src', 'loading.gif');

    const loading = el('div', img, 'Leita að léni...');
    loading.classList.add('loading');

    results.appendChild(loading);
  }

  function fetchResults(domain) {
    showLoading();

    fetch(`${API_URL}${domain}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Non 200 status');
        }
        return res.json();
      })
      .then(data => showResults(data.results))
      .catch((error) => {
        console.error('Villa við að sækja gögn', error);
        showMessage('Villa við að sækja gögn');
      });
  }

  function onSubmit(e) {
    e.preventDefault();

    const domain = input.value;

    if (typeof domain !== 'string' || domain === '') {
      showMessage('Lén verður að vera strengur');
    } else {
      fetchResults(domain);
    }
  }

  function init(domains) {
    const form = domains.querySelector('form');
    input = form.querySelector('input');
    results = domains.querySelector('.results');

    form.addEventListener('submit', onSubmit);
  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  const domains = document.querySelector('.domains');

  program.init(domains);
});
