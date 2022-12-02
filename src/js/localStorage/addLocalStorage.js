import { BASE_URL, API_KEY } from '../apiService';
// import renderFilmCardInLibrary from '../libraryFilmCard';

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
let watchedMovies = [];
let watchedIds = [];

export async function handleLocalStorage() {
  const watchedBtn = document.querySelector('.btn__watched-js');
  const queueBtn = document.querySelector('.btn__queue-js');
  // if (localStorage.getItem('filmsWatched') !== null) {
  //   watchedMovies = JSON.parse(localStorage.getItem('filmsWatched'));
  //   watchedMovies.map(movie => {
  //     watchedIds.push(movie.id);
  //   });
  //   if (watchedIds.includes(Number(watchedBtn.dataset.id))) {
  //     watchedBtn.textContent = 'Delete from Watched';
  //     watchedBtn.addEventListener(
  //       'click',
  //       deleteFromWatched(
  //         watchedMovies,
  //         watchedIds.indexOf(Number(watchedBtn.dataset.id))
  //       )
  //     );
  //     return;
  //   }
  // }
  watchedBtn.addEventListener('click', addWatched);
  queueBtn.addEventListener('click', addQueue);
}

// function deleteFromWatched(array, position) {
//   const newArray = array.splice(position, 1);
//   localStorage.setItem('filmsWatched', JSON.stringify(newArray));
//   console.log(newArray);
//   renderFilmCardInLibrary(JSON.parse(localStorage.getItem('filmsWatched')));
// }

// export function handleLocalStorage() {
//   const addToWatched = document.querySelector('.btn__watched-js');
//   const addToQueue = document.querySelector('.btn__queue-js');
// }
