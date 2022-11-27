const API_KEY = '62f46feb65c2319fb0db62c2c080ca35';
const BASE_URL = 'https://api.themoviedb.org';

export async function fetchTrendingMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
// Функиця обрабатывает результат запроса (нужен запрос)
export async function buildPagination(fetch) {
  const data = await fetch;
  const moviesArr = data.results;
  let getEl = selector => document.querySelector(`${selector}`);
  console.log(moviesArr);
  let currentPage = 1;
  let rows = 5;
  //Пушит в целевой контейнер (нужен контейнер)
  const dataContainer = getEl('#test');

  function displayPaginationResult(data, rowPerPage, page) {
    page -= 1;
    dataContainer.innerHTML = '';
    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedData = data.slice(start, end);
    // Вставляет шаблон карточки (нужен шаблон)
    paginatedData.forEach(el =>
      dataContainer.insertAdjacentHTML(
        'beforeend',
        `<div class = "test-card">${el.id}<div>`
      )
    );
  }
  function displayPagination(data, rowPerPage) {
    const paginationElementList = getEl('#pagination_list_js');
    paginationElementList.innerHTML = '';
    const pageCount = Math.ceil(data.length / rowPerPage);

    for (let i = 0; i < pageCount; i += 1) {
      paginationElementList.appendChild(createPaginationEl(i + 1));
    }
  }
  function createPaginationEl(page) {
    const paginationEl = document.createElement('li');
    paginationEl.classList.add('pagination__el');
    paginationEl.innerText = page;
    if (currentPage === page) {
      paginationEl.classList.add('pagination__el--current');
    }

    paginationEl.addEventListener('click', () => {
      const focusElement = getEl('.pagination__el--current');
      console.log(
        '🚀 ~ file: pagination.js ~ line 64 ~ paginationEl.addEventListener ~ focusElement',
        focusElement
      );
      focusElement.classList.remove('pagination__el--current');
      paginationEl.classList.add('pagination__el--current');
      currentPage = page;
      displayPaginationResult(moviesArr, rows, currentPage);
    });
    return paginationEl;
  }
  displayPaginationResult(moviesArr, rows, currentPage);
  displayPagination(moviesArr, rows);
}
