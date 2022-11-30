// // 1й аргумент - Функиця обрабатывает масив данных по принципу dataMerge;
// // 2й аргумент - кв-во  елементов на страницу;
// // Для использования нужно заменить в паршалах функцию  createMovieCard на buildPagination
// // и вторым аргументом передать к-во карточек которые необходимо отрисовывать на каждой странице.

// let getEl = selector => document.querySelector(`${selector}`);

// const paginationElementList = getEl('#pagination_list_js'); //СЮДА ОТРИСОВЫВАЕМ СЧЁТЧИК СТРАНИЦ
// const cardGalleryEl = getEl('.movie-cards-gallery'); //СЮДА ОТРИСОВЫВАЕМ КАРТОЧКИ ИЗ ПАГИНИРОВАНОГО СПИСКА
// const paginationCintainer = getEl('#pagination_js');

// //ГЛАВНАЯ ФУНКЦИЯ КОНСТРУТОР
// export default async function buildPagination(dataArr, rowPerPage) {
//   let currentPage = 1;
//   //ФУНКЦИЯ ОТРИСОВКИ ЭЛЕМЕНТОВ В ЦЕЛЕВОЙ КОНТЕЙНЕР
//   function displayPaginationResult(data, rowPerPage, page) {
//     page -= 1;
//     const start = rowPerPage * page;
//     const end = start + rowPerPage;
//     const paginatedData = data.slice(start, end);
//     // Вставляет шаблон карточки (нужен шаблон)
//     createMovieCard(paginatedData);
//   }
//   //ФУНКЦИЯ СОЗДАНИЯ СПИСКА СТРАНИЦ (ДЛИНА ЗАВИСИТ ОТ ДЛИНЫ МАССИВА ДАННЫХ И К-ВА ЕЛЕМЕНТОВ НА СТРАНИЦЕ)
//   function displayPagination(data, rowPerPage) {
//     paginationElementList.innerHTML = '';
//     const pageCount = Math.ceil(data.length / rowPerPage);

//     if (pageCount === 1) {
//       paginationCintainer.classList.add('hidden');
//       return;
//     }

//     //отрисовка элементов
//     paginationCintainer.insertAdjacentHTML(
//       'afterbegin',
//       `<button type = "button" class = "pagination___btn--prev"> < </button>`
//     );
//     paginationCintainer.insertAdjacentHTML(
//       'beforeend',
//       `<button type = "button" class = "pagination___btn--next"> > </button>`
//     );
//     for (let i = 0; i < pageCount; i += 1) {
//       paginationElementList.appendChild(createPaginationEl(i + 1));
//     }
//     // конец отрисовки элементов

//     //логика работы с кнопками
//     const prevBtn = getEl('.pagination___btn--prev');
//     const nextBtn = getEl('.pagination___btn--next');

//     prevBtn.addEventListener('click', () => {
//       const focusElement = getEl('.pagination__el--current');

//       if (focusElement.previousSibling) {
//         focusElement.classList.remove('pagination__el--current');
//         focusElement.previousSibling.classList.add('pagination__el--current');
//         currentPage = currentPage - 1;
//         displayPaginationResult(dataArr, rowPerPage, currentPage);
//       }
//     });

//     nextBtn.addEventListener('click', () => {
//       const focusElement = getEl('.pagination__el--current');

//       if (focusElement.nextSibling) {
//         focusElement.classList.remove('pagination__el--current');
//         focusElement.nextSibling.classList.add('pagination__el--current');
//         currentPage = currentPage + 1;
//         displayPaginationResult(dataArr, rowPerPage, currentPage);
//       }
//     });
//   }

//   //ФУНКЦИЯ СОЗДАНИЯ СТРАНИЦЫ
//   function createPaginationEl(page) {
//     const paginationEl = document.createElement('li');

//     paginationEl.classList.add('pagination__el');
//     paginationEl.innerText = page;

//     if (currentPage === page) {
//       paginationEl.classList.add('pagination__el--current');
//     }

//     paginationEl.addEventListener('click', () => {
//       const focusElement = getEl('.pagination__el--current');
//       focusElement.classList.remove('pagination__el--current');
//       paginationEl.classList.add('pagination__el--current');
//       currentPage = page;
//       displayPaginationResult(dataArr, rowPerPage, currentPage);
//     });

//     return paginationEl;
//   }
//   //ФУНКЦИЯ СОЗДАНИЯ РАЗМЕТКИ 1ГО ЭЛЕМЕНТА
//   function createMovieCard(arrayOfMovies) {
//     cardGalleryEl.innerHTML = '';

//     const setOfCards = arrayOfMovies.map(element => {
//       const movieTitle = element.title.toUpperCase();
//       const moviePoster = 'https://image.tmdb.org/t/p/w500';
//       let movieGenres = element.genres.join(', ');

//       if (!(element.genres.length === 0) && !(element.release_date === '')) {
//         movieGenres = movieGenres + ' |';
//       }

//       return `
//       <li class="card-container" data-id="${element.id}">
//         <img class="image-poster" src="${moviePoster}${
//         element.poster_path
//       }" alt="${element.title}"  />
//         <p class="movie-data">
//         ${movieTitle}  <br>
//         <span class="genre-year">
//         ${movieGenres}
//         ${element.release_date.slice(0, 4)}
//         </span>
//         </p>
//       </li>`;
//     });

//     cardGalleryEl.innerHTML = setOfCards.join('');
//   }

//   displayPaginationResult(dataArr, rowPerPage, currentPage);
//   displayPagination(dataArr, rowPerPage);
// }

import { loadStart, loadStop } from './loadingSpinner';

const API_KEY = '62f46feb65c2319fb0db62c2c080ca35';
const BASE_URL = 'https://api.themoviedb.org';
const URL_FOR_FETCH_BY_NAME = 'https://api.themoviedb.org/3/search/movie';

import { fetchHomeTrendingMovies, fetchGenres } from './apiService';
import { createMovieCard } from './movieCardRender';
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
  createMovieCard(movieInfo);
  console.log(dataMovies.total_pages);

  const tempCounter = 8;

  pagination(tempCounter, movieInfo);
}

export const dataMerge = function (allMovies, allGenres) {
  return allMovies.map(movie => ({
    ...movie,
    genres: movie.genre_ids.map(id => {
      return allGenres.find(element => element.id === id)?.name;
    }),
  }));
};

export function pagination(total_pages, dataRowArr) {
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
      page = currentPage;
      async function fetchHomeTrendingMovies3() {
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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    return paginationEl;
  }
}
