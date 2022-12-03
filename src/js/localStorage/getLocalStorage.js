import renderFilmCardInLibrary from '../libraryFilmCard';
import refs from '../modalFilmCardRefs';

export const Ref = {
  watchedBtn: document.querySelector('.header__watched__btn__js'),
  queueBtn: document.querySelector('.header__queue__btn__js'),
  library: document.querySelector('.library__gallery__js'),
  pagination: document.querySelector('div.container'),
  warningSign: document.querySelector('.library__warning-sign'),
};

export function getLocalStorage() {
  Ref.watchedBtn.disabled = true;
  if (localStorage.getItem('filmsWatched') !== null) {
    renderFilmCardInLibrary(JSON.parse(localStorage.getItem('filmsWatched')));
  } else {
    Ref.warningSign.textContent = 'Watched Gallery is empty';
    Ref.pagination.classList.add('is-hidden');
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
    renderFilmCardInLibrary(JSON.parse(localStorage.getItem('filmsWatched')));
    Ref.pagination.classList.remove('is-hidden');
  } else {
    Ref.warningSign.textContent = 'Watched Gallery is empty';
    Ref.library.textContent = '';
    Ref.pagination.classList.add('is-hidden');
  }
}

function handleQueueBtn() {
  Ref.queueBtn.classList.toggle('header__libary__btn__active');
  Ref.watchedBtn.classList.toggle('header__libary__btn__active');
  Ref.queueBtn.disabled = true;
  Ref.watchedBtn.disabled = false;
  if (localStorage.getItem('filmsQueue') !== null) {
    Ref.warningSign.textContent = '';
    renderFilmCardInLibrary(JSON.parse(localStorage.getItem('filmsQueue')));
    Ref.pagination.classList.remove('is-hidden');
  } else {
    Ref.warningSign.textContent = 'Queue Gallery is empty';
    Ref.library.textContent = '';
    Ref.pagination.classList.add('is-hidden');
  }
}
