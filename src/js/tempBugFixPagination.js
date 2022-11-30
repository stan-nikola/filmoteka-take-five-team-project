import { loadStart, loadStop } from './loadingSpinner';

const API_KEY = '62f46feb65c2319fb0db62c2c080ca35';
const BASE_URL = 'https://api.themoviedb.org';
const URL_FOR_FETCH_BY_NAME = 'https://api.themoviedb.org/3/search/movie';

import { fetchHomeTrendingMovies, fetchGenres } from './apiService';
import { createMovieCard } from './searchByName';
import buildPagination from './pagination';

let getEl = selector => document.querySelector(`${selector}`);
const paginationElementList = getEl('#pagination_list_js'); //СЮДА ОТРИСОВЫВАЕМ СЧЁТЧИК СТРАНИЦ
const cardGalleryEl = getEl('.movie-cards-gallery'); //СЮДА ОТРИСОВЫВАЕМ КАРТОЧКИ ИЗ ПАГИНИРОВАНОГО СПИСКА
const paginationCintainer = getEl('#pagination_js');
let page = 1;

export async function fetchHomeTrendingMovies2() {
  try {
    loadStart();
    const response = await fetch(
      `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );
    const data = response.json();
    loadStop();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchGenres2() {
  try {
    const response = await fetch(
      `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}`
    );
    const dataGenres = response.json();
    return dataGenres;
  } catch (error) {
    console.log(error);
  }
}

export async function renderMovies2() {
  const dataMovies = await fetchHomeTrendingMovies2();
  const dataGenres = await fetchGenres2();
  const genresList = dataGenres.genres;
  const moviesList = dataMovies.results;

  const movieInfo = dataMerge(moviesList, genresList);

  console.log(dataMovies.total_pages);

  pagination(dataMovies.total_pages, movieInfo);
}

export const dataMerge = function (allMovies, allGenres) {
  return allMovies.map(movie => ({
    ...movie,
    genres: movie.genre_ids.map(id => {
      return allGenres.find(element => element.id === id)?.name;
    }),
  }));
};

function pagination(total_pages, dataRowArr) {
  let currentPage = 1;
  for (let i = 0; i <= total_pages; i += 1) {
    paginationElementList.appendChild(createPaginationEl(i + 1));
  }

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
      console.log(
        '🚀 ~ file: renderHomeFilms.js:32 ~ paginationEl.addEventListener ~ currentPage',
        currentPage
      );
      // сюда прописать рендер по фетчу с нужной страницы
      async function fetchHomeTrendingMovies3(page) {
        try {
          loadStart();
          const response = await fetch(
            `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&page=${page}`
          );
          const data = response.json();
          loadStop();
          return data;
        } catch (error) {
          console.log(error);
        }
      }
      const dataMovies2 = await fetchHomeTrendingMovies3(currentPage);
      const dataGenres2 = await fetchGenres2();
      const genresList2 = dataGenres2.genres;
      const moviesList2 = dataMovies2.results;

      const movieInfo2 = dataMerge(moviesList2, genresList2);
      createMovieCard(movieInfo2);
    });
    return paginationEl;
  }
}
