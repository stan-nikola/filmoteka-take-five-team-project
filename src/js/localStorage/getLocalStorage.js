import { renderFilmCardInLibrary } from '../libraryFilmCard';
import { Paginator } from '../pagination';
// import refs from '../modalFilmCardRefs';

export const Ref = {
  watchedBtn: document.querySelector('.header__watched__btn__js'),
  queueBtn: document.querySelector('.header__queue__btn__js'),
  library: document.querySelector('.library__gallery__js'),
  pagination: document.querySelector('div.container'),
  warningSign: document.querySelector('.library__warning-sign'),
};

export async function getLocalStorage() {
  let totalPages;
  Ref.watchedBtn.disabled = true;
  if (localStorage.getItem('filmsWatched') !== null) {
    const watchedFilms = JSON.parse(localStorage.getItem('filmsWatched'));
    const libraryInitialPage = [...watchedFilms];
    renderFilmCardInLibrary(libraryInitialPage.splice(0, 21));
    if (watchedFilms.length % 21 === 0) {
      totalPages = watchedFilms.length / 21;
    } else {
      totalPages = Math.floor(watchedFilms.length / 21) + 1;
    }
    const libraryFilms = new Paginator(1, totalPages);
    libraryFilms.render();
  } else {
    Ref.warningSign.textContent = 'Watched Gallery is empty';
  }

  Ref.watchedBtn.addEventListener('click', handleWatchedBtn);
  Ref.queueBtn.addEventListener('click', handleQueueBtn);
}

function handleWatchedBtn() {
  Ref.queueBtn.classList.toggle('header__libary__btn__active');
  Ref.watchedBtn.classList.toggle('header__libary__btn__active');
  Ref.watchedBtn.disabled = true;
  Ref.queueBtn.disabled = false;
  if (localStorage.getItem('filmsWatched') !== null) {
    Ref.warningSign.textContent = '';
    const watchedFilms = JSON.parse(localStorage.getItem('filmsWatched'));
    const libraryInitialPage = [...watchedFilms];
    renderFilmCardInLibrary(libraryInitialPage.splice(0, 21));
    console.log(watchedFilms);
    if (watchedFilms.length % 21 === 0) {
      totalPages = watchedFilms.length / 21;
    } else {
      totalPages = Math.floor(watchedFilms.length / 21) + 1;
    }
    const libraryFilms = new Paginator(1, totalPages);
    libraryFilms.render();
  } else {
    Ref.warningSign.textContent = 'Watched Gallery is empty';
    Ref.library.textContent = '';
  }
}

function handleQueueBtn() {
  let totalPages;
  Ref.queueBtn.classList.toggle('header__libary__btn__active');
  Ref.watchedBtn.classList.toggle('header__libary__btn__active');
  Ref.queueBtn.disabled = true;
  Ref.watchedBtn.disabled = false;
  if (localStorage.getItem('filmsQueue') !== null) {
    Ref.warningSign.textContent = '';
    const queueFilms = JSON.parse(localStorage.getItem('filmsQueue'));
    const libraryInitialPage = [...queueFilms];
    renderFilmCardInLibrary(libraryInitialPage.splice(0, 21));
    console.log(queueFilms);
    if (queueFilms.length % 21 === 0) {
      totalPages = queueFilms.length / 21;
    } else {
      totalPages = Math.floor(queueFilms.length / 21) + 1;
    }
    const libraryFilms = new Paginator(1, totalPages);
    libraryFilms.render();
    renderFilmCardInLibrary(JSON.parse(localStorage.getItem('filmsQueue')));
  } else {
    Ref.warningSign.textContent = 'Queue Gallery is empty';
    Ref.library.textContent = '';
  }
}
