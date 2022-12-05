import renderFilmCardInLibrary from '../libraryFilmCard';
// import refs from '../modalFilmCardRefs';

export const Ref = {
  watchedBtn: document.querySelector('.header__watched__btn__js'),
  queueBtn: document.querySelector('.header__queue__btn__js'),
  library: document.querySelector('.movie-cards-gallery'),
  pagination: document.querySelector('div.container'),
};

export function getLocalStorage() {
  Ref.watchedBtn.disabled = true;
  if (localStorage.getItem('filmsWatched') !== null) {
    renderFilmCardInLibrary(JSON.parse(localStorage.getItem('filmsWatched')));
  } else {
    Ref.library.textContent = 'Watched Gallery is empty';
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
    renderFilmCardInLibrary(JSON.parse(localStorage.getItem('filmsWatched')));
    Ref.pagination.classList.remove('is-hidden');
  } else {
    Ref.library.textContent = 'Watched Gallery is empty';
    Ref.pagination.classList.add('is-hidden');
  }
}

function handleQueueBtn() {
  Ref.queueBtn.classList.toggle('header__libary__btn__active');
  Ref.watchedBtn.classList.toggle('header__libary__btn__active');
  Ref.queueBtn.disabled = true;
  Ref.watchedBtn.disabled = false;
  if (localStorage.getItem('filmsQueue') !== null) {
    renderFilmCardInLibrary(JSON.parse(localStorage.getItem('filmsQueue')));
    Ref.pagination.classList.remove('is-hidden');
  } else {
    Ref.library.textContent = 'Queue Gallery is empty';
    Ref.pagination.classList.add('is-hidden');
  }
}
