import { loadStart, loadStop } from './loadingSpinner';
import { API_KEY, BASE_URL, URL_FOR_FETCH_BY_NAME } from './apiService';
import { onUpBtnClick } from './scrollPage';
import { fetchGenres } from './apiService';
import { dataMerge } from './renderHomeFilms';
import { createMovieCard } from './movieCardRender';

let getEl = selector => document.querySelector(`${selector}`);
const paginationElementList = getEl('#pagination_list_js'); //СЮДА ОТРИСОВЫВАЕМ СЧЁТЧИК СТРАНИЦ
const paginationContainer = getEl('#pagination_js');


export class Paginator {
  constructor(current, all) {
    this.current = current;
    this.all = all;


    if (this.current < 1 || this.current > this.all) {
      throw `Ошибка пагинатора: (текущая страница ${this.current}, всего страниц ${this.all})`;
    }
  }

  async render() {
    if (this.all === 1) {
      return;
    }
    paginationElementList.insertAdjacentHTML(
      'afterbegin',
      `<button type = "button" class = "pagination___btn--prev"> < </button>`
    );

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

    paginationElementList.insertAdjacentHTML(
      'beforeend',
      `<button type = "button" class = "pagination___btn--next"> > </button>`
    );
    const prevBtn = getEl('.pagination___btn--prev');
    const nextBtn = getEl('.pagination___btn--next');

    prevBtn.addEventListener('click', async () => {
      const focusElement = getEl('.pagination__el--current');

      if (focusElement.innerText !== '1') {
        focusElement.classList.remove('pagination__el--current');
        focusElement.previousSibling.classList.add('pagination__el--current');
        this.current -= 1;
        paginationElementList.innerHTML = '';
        this.render();

        paginatorTrendingFetch(`${this.current}`);

        onUpBtnClick();
      }
    });

    nextBtn.addEventListener('click', async () => {
      const focusElement = getEl('.pagination__el--current');

      if (focusElement.innerText !== `${this.all}`) {
        focusElement.classList.remove('pagination__el--current');
        focusElement.nextSibling.classList.add('pagination__el--current');
        this.current += 1;
        paginationElementList.innerHTML = '';
        this.render();

        paginatorTrendingFetch(`${this.current}`);

        onUpBtnClick();
      }
    });
  }

  async _renderLink(pageNum) {
    const paginationEl = document.createElement('li');

    paginationEl.classList.add('pagination__el');
    paginationEl.innerText = pageNum;

    if (pageNum == this.current) {
      paginationEl.classList.add('pagination__el--current');
    }
    paginationElementList.appendChild(paginationEl);

    paginationEl.addEventListener('click', async () => {
      const focusElement = getEl('.pagination__el--current');
      focusElement.classList.remove('pagination__el--current');
      paginationEl.classList.add('pagination__el--current');
      this.current = Number(paginationEl.innerText);
      paginationElementList.innerHTML = '';
      this.render();

      paginatorTrendingFetch(`${this.current}`);

      onUpBtnClick();
    });
  }

  __renderDots() {
    const span = document.createElement('span');
    span.classList.add('dots');
    span.innerHTML = '...';
    paginationElementList.appendChild(span);
  }
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

