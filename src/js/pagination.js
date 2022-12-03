import { loadStart, loadStop } from './loadingSpinner';
import { API_KEY, BASE_URL, URL_FOR_FETCH_BY_NAME } from './apiService';
import { onUpBtnClick } from './scrollPage';
import { fetchGenres } from './apiService';
import { dataMerge } from './renderHomeFilms';
import { createMovieCard } from './movieCardRender';

let getEl = selector => document.querySelector(`${selector}`);
export const paginationElementList = getEl('#pagination_list_js'); //СЮДА ОТРИСОВЫВАЕМ СЧЁТЧИК СТРАНИЦ
const paginationContainer = getEl('#pagination_js');

// export function pagination(pageCount, dataRowArr) {
//   let currentPage = 1;

//   if (pageCount === 1) {
//     paginationContainer.classList.add('hidden');
//     return;
//   }
//   // отрисовка елементов пагинатора
//   paginationContainer.insertAdjacentHTML(
//     'afterbegin',
//     `<button type = "button" class = "pagination___btn--prev"> < </button>`
//   );
//   paginationContainer.insertAdjacentHTML(
//     'beforeend',
//     `<button type = "button" class = "pagination___btn--next"> > </button>`
//   );

//   for (let i = 0; i <= pageCount; i += 1) {
//     paginationElementList.appendChild(createPaginationEl(i + 1));
//   }
//   // конец отрисовки єлементов пагинатора

//   //логика работы с кнопками
//   const prevBtn = getEl('.pagination___btn--prev');
//   const nextBtn = getEl('.pagination___btn--next');

//   prevBtn.addEventListener('click', async () => {
//     const focusElement = getEl('.pagination__el--current');

//     if (focusElement.previousSibling) {
//       focusElement.classList.remove('pagination__el--current');
//       focusElement.previousSibling.classList.add('pagination__el--current');
//       currentPage = currentPage - 1;

//       paginatorTrendingFetch(currentPage);

//       onUpBtnClick();
//     }
//   });

//   nextBtn.addEventListener('click', async () => {
//     const focusElement = getEl('.pagination__el--current');

//     if (focusElement.nextSibling) {
//       focusElement.classList.remove('pagination__el--current');
//       focusElement.nextSibling.classList.add('pagination__el--current');
//       currentPage = currentPage + 1;

//       paginatorTrendingFetch(currentPage);

//       onUpBtnClick();
//     }
//   });

//   //конец логики работы с кнопками

//   //ФУНКЦИЯ, СОЗДАЕТ ЭЛЕМЕНТЫ(КНОПКИ ПАГИНАТОРА)
//   function createPaginationEl(page) {
//     const paginationEl = document.createElement('li');

//     paginationEl.classList.add('pagination__el');
//     paginationEl.innerText = page;

//     if (currentPage === page) {
//       paginationEl.classList.add('pagination__el--current');
//     }

//     paginationEl.addEventListener('click', async () => {
//       const focusElement = getEl('.pagination__el--current');
//       focusElement.classList.remove('pagination__el--current');
//       paginationEl.classList.add('pagination__el--current');
//       currentPage = page;

//       paginatorTrendingFetch(currentPage); // сюда прописать рендер по фетчу с нужной страницы (переиспользуется в кнопках )

//       onUpBtnClick(); // поднималка
//     });

//     return paginationEl;
//   }
// }

//функция запроса по НОМЕРУ СТРАНИЦЫ

export class Paginator {
  constructor(current, all, parentElement) {
    this.current = current;
    this.all = all;
    this.parentElement = parentElement;

    if (this.current < 1 || this.current > this.all) {
      throw `Ошибка пагинатора: (текущая страница ${this.current}, всего страниц ${this.all})`;
    }
  }

  async render() {
    if (this.all === 1) {
      return;
    }

    const links = [1, this.all];

    for (let i = this.current - 2; i <= this.current + 2; i++) {
      if (i < 1 || i > this.all) {
        continue;
      }

      links.push(i);
    }

    const uniqLinks = [...new Set(links)];

    uniqLinks.sort((a, b) => a - b);

    for (let i = 0; i < uniqLinks.length; i++) {
      this._renderLink(uniqLinks[i]);

      if (i + 1 < uniqLinks.length && uniqLinks[i] + 1 !== uniqLinks[i + 1]) {
        this.__renderDots();
      }
    }
  }

  async _renderLink(pageNum) {
    const paginationEl = document.createElement('li');

    paginationEl.classList.add('pagination__el');
    paginationEl.innerText = pageNum;

    if (pageNum == this.current) {
      paginationEl.classList.add('pagination__el--current');
    }
    this.parentElement.appendChild(paginationEl);

    paginationEl.addEventListener('click', async () => {
      const focusElement = getEl('.pagination__el--current');
      focusElement.classList.remove('pagination__el--current');
      paginationEl.classList.add('pagination__el--current');
      this.current = Number(paginationEl.innerText);
      this.parentElement.innerHTML = '';
      this.render();

      paginatorTrendingFetch(`${this.current}`);
    });
  }

  __renderDots() {
    const span = document.createElement('span');
    span.classList.add('dots');
    span.innerHTML = '...';
    this.parentElement.appendChild(span);
  }
}

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
