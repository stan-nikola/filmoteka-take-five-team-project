import { BASE_URL, API_KEY } from './apiService';

let filmId;

async function addWatched(evt) {
  let existingWatchedIds = [];
  let filmsWatched = [];
  filmId = evt.target.dataset.id;

  console.log(filmId);

  const response = await fetch(
    `${BASE_URL}/3/movie/${filmId}?api_key=${API_KEY}`
  );

  const currentFilm = await response.json();

  if (localStorage.getItem('filmsWatched') === null) {
    filmsWatched.push(currentFilm);
    localStorage.setItem('filmsWatched', JSON.stringify(filmsWatched));
    return;
  }
  filmsWatched = JSON.parse(localStorage.getItem('filmsWatched'));

  filmsWatched.map(film => {
    existingWatchedIds.push(film.id);
  });
  if (existingWatchedIds.includes(currentFilm.id)) {
    return;
  } else {
    filmsWatched.push(currentFilm);
    localStorage.setItem('filmsWatched', JSON.stringify(filmsWatched));
  }
}

async function addQueue(evt) {
  let existingQueueIds = [];
  let filmsQueue = [];
  filmId = evt.target.dataset.id;
  const response = await fetch(
    `${BASE_URL}/3/movie/${filmId}?api_key=${API_KEY}`
  );
  const currentFilm = await response.json();

  if (localStorage.getItem('filmsQueue') === null) {
    filmsQueue.push(currentFilm);
    localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
  } else {
    filmsQueue = JSON.parse(localStorage.getItem('filmsQueue'));
    filmsQueue.map(film => {
      existingQueueIds.push(film.id);
    });
    if (existingQueueIds.includes(currentFilm.id)) {
      return;
    } else {
      filmsQueue.push(currentFilm);
      localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
    }
  }
}

export function handleLocalStorage() {
  const addToWatched = document.querySelector('.btn__watched-js');

  const addToQueue = document.querySelector('.btn__queue-js');
  addToWatched.addEventListener('click', addWatched);
  addToQueue.addEventListener('click', addQueue);
}
