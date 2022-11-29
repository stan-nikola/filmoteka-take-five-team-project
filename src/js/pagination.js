// 1й аргумент - Функиця обрабатывает масив данных по принципу dataMerge;
// 2й аргумент - кв-во  елементов на страницу;
// Для использования нужно заменить в паршалах функцию  createMovieCard на buildPagination
// и вторым аргументом передать к-во карточек которые необходимо отрисовывать на каждой странице.

let getEl = selector => document.querySelector(`${selector}`);

const paginationElementList = getEl('#pagination_list_js'); //СЮДА ОТРИСОВЫВАЕМ СЧЁТЧИК СТРАНИЦ
const cardGalleryEl = getEl('.movie-cards-gallery'); //СЮДА ОТРИСОВЫВАЕМ КАРТОЧКИ ИЗ ПАГИНИРОВАНОГО СПИСКА
const paginationCintainer = getEl('#pagination_js');

//ГЛАВНАЯ ФУНКЦИЯ КОНСТРУТОР
export default async function buildPagination(dataArr, rowPerPage) {
  let currentPage = 1;
  //ФУНКЦИЯ ОТРИСОВКИ ЭЛЕМЕНТОВ В ЦЕЛЕВОЙ КОНТЕЙНЕР
  function displayPaginationResult(data, rowPerPage, page) {
    page -= 1;
    const start = rowPerPage * page;
    const end = start + rowPerPage;
    const paginatedData = data.slice(start, end);
    // Вставляет шаблон карточки (нужен шаблон)
    createMovieCard(paginatedData);
  }
  //ФУНКЦИЯ СОЗДАНИЯ СПИСКА СТРАНИЦ (ДЛИНА ЗАВИСИТ ОТ ДЛИНЫ МАССИВА ДАННЫХ И К-ВА ЕЛЕМЕНТОВ НА СТРАНИЦЕ)
  function displayPagination(data, rowPerPage) {
    paginationElementList.innerHTML = '';
    const pageCount = Math.ceil(data.length / rowPerPage);

    if (pageCount === 1) {
      paginationCintainer.classList.add('hidden');
      return;
    }

    //отрисовка элементов
    paginationCintainer.insertAdjacentHTML(
      'afterbegin',
      `<button type = "button" class = "pagination___btn--prev"> < </button>`
    );
    paginationCintainer.insertAdjacentHTML(
      'beforeend',
      `<button type = "button" class = "pagination___btn--next"> > </button>`
    );
    for (let i = 0; i < pageCount; i += 1) {
      paginationElementList.appendChild(createPaginationEl(i + 1));
    }
    // конец отрисовки элементов

    //логика работы с кнопками
    const prevBtn = getEl('.pagination___btn--prev');
    const nextBtn = getEl('.pagination___btn--next');

    prevBtn.addEventListener('click', () => {
      const focusElement = getEl('.pagination__el--current');

      if (focusElement.previousSibling) {
        focusElement.classList.remove('pagination__el--current');
        focusElement.previousSibling.classList.add('pagination__el--current');
        currentPage = currentPage - 1;
        displayPaginationResult(dataArr, rowPerPage, currentPage);
      }
    });

    nextBtn.addEventListener('click', () => {
      const focusElement = getEl('.pagination__el--current');

      if (focusElement.nextSibling) {
        focusElement.classList.remove('pagination__el--current');
        focusElement.nextSibling.classList.add('pagination__el--current');
        currentPage = currentPage + 1;
        displayPaginationResult(dataArr, rowPerPage, currentPage);
      }
    });
  }

  //ФУНКЦИЯ СОЗДАНИЯ СТРАНИЦЫ
  function createPaginationEl(page) {
    const paginationEl = document.createElement('li');

    paginationEl.classList.add('pagination__el');
    paginationEl.innerText = page;

    if (currentPage === page) {
      paginationEl.classList.add('pagination__el--current');
    }

    paginationEl.addEventListener('click', () => {
      const focusElement = getEl('.pagination__el--current');
      focusElement.classList.remove('pagination__el--current');
      paginationEl.classList.add('pagination__el--current');
      currentPage = page;
      displayPaginationResult(dataArr, rowPerPage, currentPage);
    });

    return paginationEl;
  }
  //ФУНКЦИЯ СОЗДАНИЯ РАЗМЕТКИ 1ГО ЭЛЕМЕНТА
  function createMovieCard(arrayOfMovies) {
    cardGalleryEl.innerHTML = '';

    const setOfCards = arrayOfMovies.map(element => {
      const movieTitle = element.title.toUpperCase();
      const moviePoster = 'https://image.tmdb.org/t/p/w500';
      let movieGenres = element.genres.join(', ');

      if (!(element.genres.length === 0) && !(element.release_date === '')) {
        movieGenres = movieGenres + ' |';
      }

      return `
      <li class="card-container">
        <div class="image-wrapper">
        <img class="image-poster" src="${moviePoster}${
        element.poster_path
      }" alt="${element.title}"  />
        </div>
        <p class="movie-data">
        ${movieTitle}  <br>
        <span class="genre-year">            
        ${movieGenres}
        ${element.release_date.slice(0, 4)}         
        </span>
        </p>
      </li>`;
    });

    cardGalleryEl.innerHTML = setOfCards.join('');
  }

  displayPaginationResult(dataArr, rowPerPage, currentPage);
  displayPagination(dataArr, rowPerPage);
}
