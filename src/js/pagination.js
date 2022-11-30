import { loadStart, loadStop } from './loadingSpinner';
import { API_KEY, BASE_URL, URL_FOR_FETCH_BY_NAME } from './apiService';

import { fetchHomeTrendingMovies, fetchGenres } from './apiService';
import { dataMerge } from './renderHomeFilms';
import { createMovieCard } from './movieCardRender';

let getEl = selector => document.querySelector(`${selector}`);
const paginationElementList = getEl('#pagination_list_js'); //СЮДА ОТРИСОВЫВАЕМ СЧЁТЧИК СТРАНИЦ
// const cardGalleryEl = getEl('.movie-cards-gallery'); //СЮДА ОТРИСОВЫВАЕМ КАРТОЧКИ ИЗ ПАГИНИРОВАНОГО СПИСКА
const paginationContainer = getEl('#pagination_js');

export async function renderMovies2() {
  const dataMovies = await fetchHomeTrendingMovies();
  const dataGenres = await fetchGenres();
  const genresList = dataGenres.genres;
  const moviesList = dataMovies.results;
  const movieInfo = dataMerge(moviesList, genresList);
  createMovieCard(movieInfo);

  const pageCount = 8; // временная переменная - после настройки отрисовки заменить на dataMovies.total_pages

  pagination(pageCount, movieInfo);
}

function pagination(pageCount, dataRowArr) {
  let currentPage = 1;

  if (pageCount === 1) {
    paginationContainer.classList.add('hidden');
    return;
  }
  // отрисовка елементов пагинатора
  paginationContainer.insertAdjacentHTML(
    'afterbegin',
    `<button type = "button" class = "pagination___btn--prev"> < </button>`
  );
  paginationContainer.insertAdjacentHTML(
    'beforeend',
    `<button type = "button" class = "pagination___btn--next"> > </button>`
  );

  for (let i = 0; i <= pageCount; i += 1) {
    paginationElementList.appendChild(createPaginationEl(i + 1));
  }
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

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  });

  nextBtn.addEventListener('click', async () => {
    const focusElement = getEl('.pagination__el--current');

    if (focusElement.nextSibling) {
      focusElement.classList.remove('pagination__el--current');
      focusElement.nextSibling.classList.add('pagination__el--current');
      currentPage = currentPage + 1;

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

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  });

  //конец логики работы с кнопками
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

      // сюда прописать рендер по фетчу с нужной страницы

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

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });

    return paginationEl;
  }
}
