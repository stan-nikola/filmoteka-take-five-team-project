import { BASE_URL, API_KEY } from '../apiService';
import { renderFilmCardInLibrary } from '../libraryFilmCard';
import { Ref } from './getLocalStorage';

import { notificationSuccess, notificationWarning } from './../notifications';

const cardGalleryEl = document.querySelector('.movie-cards-gallery-library');

let filmId;
let movieAddedMsg;
let targetBtn;

let watchedBtn;
let queueBtn;

export async function handleLocalStorage() {
  handleWatched();
  handleQueue();
}

async function handleWatched() {
  let watchedIds = [];
  let queueIds = [];
  watchedBtn = document.querySelector('.btn__watched-js');
  queueBtn = document.querySelector('.btn__queue-js');

  if (localStorage.getItem('filmQueue') !== null) {
    let queueMovies = JSON.parse(localStorage.getItem('filmsQueue'));
    queueMovies.mqp(movie => queueIds.push(movie.id));
    if (queueIds.includes(Number(watchedBtn.dataset.id))) {
      watchedBtn.disabled = true;
    }
    return;
  }
  if (localStorage.getItem('filmsWatched') !== null) {
    let watchedMovies = JSON.parse(localStorage.getItem('filmsWatched'));
    watchedMovies.map(movie => watchedIds.push(movie.id));
    if (watchedIds.includes(Number(watchedBtn.dataset.id))) {
      watchedBtn.textContent = 'Remove from Watched';
      queueBtn.disabled = true;
      watchedBtn.addEventListener('click', deleteWatched);
      return;
    }
    watchedBtn.addEventListener('click', addWatched);
    return;
  }
  watchedBtn.addEventListener('click', addWatched);
}

async function handleQueue() {
  let queueIds = [];
  queueBtn = document.querySelector('.btn__queue-js');
  watchedBtn = document.querySelector('.btn__watched-js');

  if (localStorage.getItem('filmsQueue') !== null) {
    let queueMovies = JSON.parse(localStorage.getItem('filmsQueue'));
    queueMovies.map(movie => queueIds.push(movie.id));
    if (queueIds.includes(Number(queueBtn.dataset.id))) {
      queueBtn.textContent = 'Remove from Queue';
      watchedBtn.disabled = true;
      queueBtn.addEventListener('click', deleteQueue);
      return;
    }
    queueBtn.addEventListener('click', addQueue);
    return;
  }
  queueBtn.addEventListener('click', addQueue);
  console.log('yes');
}

async function addWatched(evt) {
  watchedBtn = document.querySelector('.btn__watched-js');
  queueBtn = document.querySelector('.btn__queue-js');

  let filmsWatched = [];
  filmId = evt.target.dataset.id;
  targetBtn = evt.target.textContent.trim().slice(6).toUpperCase();
  const response = await fetch(
    `${BASE_URL}/3/movie/${filmId}?api_key=${API_KEY}`
  );
  const currentFilm = await response.json();
  movieAddedMsg = `${currentFilm.title} added to ${targetBtn} successfully`;
  if (localStorage.getItem('filmsWatched') === null) {
    filmsWatched.push(currentFilm);
    localStorage.setItem('filmsWatched', JSON.stringify(filmsWatched));
    notificationSuccess(movieAddedMsg);
    watchedBtn.textContent = 'remove from watched';
    queueBtn.disabled = true;
    if (cardGalleryEl && Ref.watchedBtn.disabled) {
      renderFilmCardInLibrary(filmsWatched);
    }
    watchedBtn.removeEventListener('click', addWatched);
    watchedBtn.addEventListener('click', deleteWatched);
    return;
  }
  filmsWatched = JSON.parse(localStorage.getItem('filmsWatched'));
  filmsWatched.push(currentFilm);
  if (cardGalleryEl && Ref.watchedBtn.disabled) {
    renderFilmCardInLibrary(filmsWatched);
  }
  localStorage.setItem('filmsWatched', JSON.stringify(filmsWatched));
  watchedBtn.textContent = 'remove from watched';
  queueBtn.disabled = true;
  notificationSuccess(movieAddedMsg);
  watchedBtn.removeEventListener('click', addWatched);
  watchedBtn.addEventListener('click', deleteWatched);
}

async function deleteWatched() {
  let watchedIds = [];
  let movieDeletedWatchedMsg = `Movie has been removed from WATCHED`;
  watchedBtn = document.querySelector('.btn__watched-js');
  queueBtn = document.querySelector('.btn__queue-js');
  // watchedBtn.textContent = 'remove from watched';
  // queueBtn.disabled = true;
  let watchedMovies = JSON.parse(localStorage.getItem('filmsWatched'));
  watchedMovies.map(movie => watchedIds.push(movie.id));
  if (watchedIds.includes(Number(watchedBtn.dataset.id))) {
    watchedMovies.splice(watchedIds.indexOf(Number(watchedBtn.dataset.id)), 1);
    localStorage.setItem('filmsWatched', JSON.stringify(watchedMovies));
    watchedBtn.textContent = 'add to watched';
    queueBtn.disabled = false;
    notificationWarning(movieDeletedWatchedMsg);
    if (cardGalleryEl && Ref.watchedBtn.disabled) {
      renderFilmCardInLibrary(watchedMovies);
    }

    watchedBtn.removeEventListener('click', deleteWatched);

    watchedBtn.addEventListener('click', addWatched);
  }
  if (localStorage.getItem('filmsWatched') === '[]' && Ref.library) {
    localStorage.removeItem('filmsWatched');
    Ref.library.textContent = 'Watched Gallery is empty';
  }
}

async function addQueue(evt) {
  queueBtn = document.querySelector('.btn__queue-js');
  watchedBtn = document.querySelector('.btn__watched-js');
  let filmsQueue = [];
  filmId = evt.target.dataset.id;
  targetBtn = evt.target.textContent.trim().slice(6).toUpperCase();
  const response = await fetch(
    `${BASE_URL}/3/movie/${filmId}?api_key=${API_KEY}`
  );
  const currentFilm = await response.json();
  movieAddedMsg = `${currentFilm.title} added to ${targetBtn} successfully`;
  if (localStorage.getItem('filmsQueue') === null) {
    filmsQueue.push(currentFilm);
    localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
    notificationSuccess(movieAddedMsg);
    queueBtn.textContent = 'remove from queue';
    watchedBtn.disabled = true;
    if (cardGalleryEl && Ref.queueBtn.disabled) {
      renderFilmCardInLibrary(filmsQueue);
    }
    queueBtn.removeEventListener('click', addQueue);
    queueBtn.addEventListener('click', deleteQueue);
    return;
  }
  filmsQueue = JSON.parse(localStorage.getItem('filmsQueue'));
  filmsQueue.push(currentFilm);
  localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
  notificationSuccess(movieAddedMsg);
  queueBtn.textContent = 'remove from queue';
  watchedBtn.disabled = true;
  if (cardGalleryEl && Ref.queueBtn.disabled) {
    renderFilmCardInLibrary(filmsQueue);
  }
  queueBtn.removeEventListener('click', addQueue);
  queueBtn.addEventListener('click', deleteQueue);
}

async function deleteQueue() {
  let queueIds = [];
  let movieDeletedQueueMsg = `Movie has been removed from QUEUE`;
  queueBtn = document.querySelector('.btn__queue-js');
  watchedBtn = document.querySelector('.btn__watched-js');
  queueBtn.textContent = 'remove from queue';
  watchedBtn.disabled = true;
  let queueMovies = JSON.parse(localStorage.getItem('filmsQueue'));
  queueMovies.map(movie => queueIds.push(movie.id));
  if (queueIds.includes(Number(queueBtn.dataset.id))) {
    queueMovies.splice(queueIds.indexOf(Number(queueBtn.dataset.id)), 1);
    localStorage.setItem('filmsQueue', JSON.stringify(queueMovies));
    queueBtn.textContent = 'add to queue';
    watchedBtn.disabled = false;
    notificationWarning(movieDeletedQueueMsg);
    if (cardGalleryEl && Ref.queueBtn.disabled) {
      renderFilmCardInLibrary(queueMovies);
    }
    queueBtn.removeEventListener('click', deleteQueue);
    queueBtn.addEventListener('click', addQueue);
  }
  if (localStorage.getItem('filmsQueue') === '[]' && Ref.library) {
    localStorage.removeItem('filmsQueue');
    Ref.library.textContent = 'Queue Gallery is empty';
  }
}
