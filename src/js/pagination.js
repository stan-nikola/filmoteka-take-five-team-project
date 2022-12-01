import { loadStart, loadStop } from './loadingSpinner';
import { API_KEY, BASE_URL, URL_FOR_FETCH_BY_NAME } from './apiService';
import { onUpBtnClick } from './scrollPage';

import { fetchGenres } from './apiService';
import { dataMerge } from './renderHomeFilms';
import { createMovieCard } from './movieCardRender';

let getEl = selector => document.querySelector(`${selector}`);
const paginationElementList = getEl('#pagination_list_js'); //СЮДА ОТРИСОВЫВАЕМ СЧЁТЧИК СТРАНИЦ

export const paginationContainer = getEl('#pagination_js');

export async function pagination(pageCount, dataRowArr) {
  let currentPage = 1;

  if (pageCount === 1) {
    paginationContainer.classList.add('hidden');
    return;
  }
  // отрисовка елементов пагинатора
  paginationElementList.innerHTML = '';
  paginationContainer.innerHTML = '';
  
  for (let i = 0; i < pageCount; i += 1) {
    paginationElementList.appendChild(createPaginationEl(i + 1));
  }
  
  paginationContainer.appendChild(paginationElementList);

  paginationContainer.insertAdjacentHTML(
    'afterbegin',
    `<button type = "button" class = "pagination___btn--prev"> < </button>`
  );
  paginationContainer.insertAdjacentHTML(
    'beforeend',
    `<button type = "button" class = "pagination___btn--next"> > </button>`
  );
  // конец отрисовки єлементов пагинатора

  //логика работы с кнопками
  const prevBtn = getEl('.pagination___btn--prev');
  const nextBtn = getEl('.pagination___btn--next');

  prevBtn.addEventListener('click', async () => {
    const focusElement = getEl('.pagination__el--current');

    if (focusElement.previousSibling) {
      focusElement.classList.remove('pagination__el--current');
      focusElement.previousSibling.classList.add('pagination__el--current');
      currentPage = currentPage - 1;

      paginatorTrendingFetch(currentPage);

      onUpBtnClick();
    }
  });

  nextBtn.addEventListener('click', async () => {
    const focusElement = getEl('.pagination__el--current');

    if (focusElement.nextSibling) {
      focusElement.classList.remove('pagination__el--current');
      focusElement.nextSibling.classList.add('pagination__el--current');
      currentPage = currentPage + 1;

      paginatorTrendingFetch(currentPage);

      onUpBtnClick();
    }
  });

  //конец логики работы с кнопками

  //ФУНКЦИЯ, СОЗДАЕТ ЭЛЕМЕНТЫ(КНОПКИ ПАГИНАТОРА)
  function createPaginationEl(page) {
    const paginationEl = document.createElement('li');

    paginationEl.classList.add('pagination__el');
    paginationEl.innerText = page;

    if (currentPage === page) {
      paginationEl.classList.add('pagination__el--current');
    }

    paginationEl.addEventListener('click', async () => {
      const focusElement = getEl('.pagination__el--current');
      focusElement.classList.remove('pagination__el--current');
      paginationEl.classList.add('pagination__el--current');
      currentPage = page;

      paginatorTrendingFetch(currentPage); // сюда прописать рендер по фетчу с нужной страницы (переиспользуется в кнопках )

      onUpBtnClick(); // поднималка
    });

    return paginationEl;
  }
  console.log('Сработала функция пагинации');
}
//функция запроса по НОМЕРУ СТРАНИЦЫ
async function paginatorTrendingFetch(currentPage) {
  async function paginationTrendingMovies() {
    try {
      loadStart();
      const response = await fetch(
        `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&page=${currentPage}`
      );
      const data = response.json();
      loadStop();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const paginationDataMovies = await paginationTrendingMovies(currentPage);
  const paginationDataGenres = await fetchGenres();
  const paginationGenresList = paginationDataGenres.genres;
  const paginationMoviesList = paginationDataMovies.results;
  const paginationMovieInfo = dataMerge(
    paginationMoviesList,
    paginationGenresList
  );

  createMovieCard(paginationMovieInfo);
}

export function fetchMovies(inputtedName) {
  return fetch(
    `${URL_FOR_FETCH_BY_NAME}?api_key=${API_KEY}&query=${inputtedName}`
  ).then(response => response.json());
}
