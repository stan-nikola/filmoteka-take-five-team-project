import { createMovieCard } from './movieCardRender';

const Ref = {
  watchedBtn: document.querySelector('.header__watched__btn__js'),
  queueBtn: document.querySelector('.header__queue__btn__js'),
  library: document.querySelector('.library__gallery__js'),
  pagination: document.querySelector('div.container'),
};

export function getLocalStorage() {
  Ref.watchedBtn.disabled = true;
  if (localStorage.getItem('filmsWatched') !== null) {
    createMovieCard(JSON.parse(localStorage.getItem('filmsWatched')));
  } else {
    Ref.library.textContent = 'Watched Gallery is empty';
    Ref.library.setAttribute(
      'style',
      'text-align: center;display: block;min-height: auto;'
    );
    Ref.pagination.classList.add('is-hidden');
  }

  Ref.watchedBtn.addEventListener('click', handleWatchedBtn);
  Ref.queueBtn.addEventListener('click', handleQueueBtn);
}

function handleWatchedBtn() {
  Ref.watchedBtn.disabled = true;
  Ref.queueBtn.disabled = false;
  if (localStorage.getItem('filmsWatched') !== null) {
    Ref.library.textContent = '';
    createMovieCard(JSON.parse(localStorage.getItem('filmsWatched')));
    Ref.pagination.classList.remove('is-hidden');
  } else {
    Ref.library.textContent = 'Watched Gallery is empty';
    Ref.library.setAttribute(
      'style',
      'text-align: center;display: block;min-height: auto;'
    );
    Ref.pagination.classList.add('is-hidden');
  }
}

function handleQueueBtn() {
  Ref.queueBtn.disabled = true;
  Ref.watchedBtn.disabled = false;
  if (localStorage.getItem('filmsQueue') !== null) {
    Ref.library.textContent = '';
    createMovieCard(JSON.parse(localStorage.getItem('filmsQueue')));
    Ref.pagination.classList.remove('is-hidden');
  } else {
    Ref.library.textContent = 'Queue Gallery is empty';
    Ref.library.setAttribute(
      'style',
      'text-align: center;display: block;min-height: auto;'
    );
    Ref.pagination.classList.add('is-hidden');
  }

}
