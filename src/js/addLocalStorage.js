import { BASE_URL, API_KEY } from './apiService';

async function addWatched(evt) {
  let filmsWatched = [];
  let filmId = evt.target.dataset.id;
  const response = await fetch(
    `${BASE_URL}/3/movie/${filmId}?api_key=${API_KEY}`
  );
  console.log(response);
  const currentFilm = await response.json();
  console.log(currentFilm);
  if (localStorage.getItem('filmsWatched') === null) {
    filmsWatched.push(currentFilm);
    localStorage.setItem('filmsWatched', JSON.stringify(filmsWatched));
  } else {
    filmsWatched = JSON.parse(localStorage.getItem('filmsWatched'));
    filmsWatched.map(filmWatched => {
      if (filmWatched.id === currentFilm.id) {
        console.log('already there');
        return;
      } else {
        filmsWatched.push(currentFilm);
        localStorage.setItem('filmsWatched', JSON.stringify(filmsWatched));
      }
    });
  }
}

async function addQueue(evt) {
  let filmsQueue = [];
  let filmId = evt.target.dataset.id;
  const response = await fetch(
    `${BASE_URL}/3/movie/${filmId}?api_key=${API_KEY}`
  );
  const currentFilm = await response.json();

  if (localStorage.getItem('filmsQueue') === null) {
    filmsQueue.push(currentFilm);
    localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
  } else {
    filmsQueue = JSON.parse(localStorage.getItem('filmsQueue'));
    filmsQueue.map(filmQueue => {
      if (filmQueue.id === currentFilm.id) {
        return;
      } else {
        filmsQueue.push(currentFilm);
        localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
      }
    });
  }
}

export function handleLocalStorage() {
  const addToWatched = document.querySelector('.btn__watched-js');
  const addToQueue = document.querySelector('.btn__queue-js');
  addToWatched.addEventListener('click', addWatched);
  addToQueue.addEventListener('click', addQueue);
}

// const filtrFilm = (films) => {
//     return films.filter((film, index, films) => films.indexOf(film) === index);
