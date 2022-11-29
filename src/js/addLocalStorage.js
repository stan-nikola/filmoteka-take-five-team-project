import { renderModalFilmCard } from './renderModalFilmCard';

const buttonRef = {
  addWatched: document.querySelector('.btn-watched-js'),
  addQueue: document.querySelector('.btn-queue-js'),
};

function addWatched(film) {
  if (localStorage.getItem('filmsWatched') === null) {
    let filmsWatched = [];
    filmsWatched.push(film);
    localStorage.setItem('filmsWatched', JSON.stringify(filmsWatched));
  } else {
    filmsWatched = JSON.parse(localStorage.getItem('filmsWatched'));
    filmsWatched.push(film);
    localStorage.setItem('filmsWatched', JSON.stringify(filmsWatched));
  }
}

function addQueue(film) {
  if (localStorage.getItem('filmsQueue') === null) {
    let filmsQueue = [];
    filmsQueue.push(film);
    localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
  } else {
    filmsQueue = JSON.parse(localStorage.getItem('filmsQueue'));
    console.log(filmsQueue);
    filmsQueue.push(film);
    localStorage.setItem('filmsQueue', JSON.stringify(filmsQueue));
  }
}

export { buttonRef, addWatched, addQueue };

// const filtrFilm = (films) => {
//     return films.filter((film, index, films) => films.indexOf(film) === index);
