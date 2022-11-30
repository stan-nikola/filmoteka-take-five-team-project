let currentFilmUnit;
export function clickCurrentFilm() {
  let galleryCargRef = document.querySelector(".movie-cards-gallery");
  galleryCargRef.addEventListener("click", (event) => {
    console.log(event.target.parentElement.outerHTML)
    currentFilmUnit = event.target.parentElement.outerHTML
    galleryCargRef.removeEventListener("click", galleryCargRef);
  })

}


function addWatched() {
  if (localStorage.getItem("filmsWatched") === null) {
    localStorage.setItem("filmsWatched", currentFilmUnit);
  } else {
    let films = localStorage.getItem("filmsWatched");
    if (films.includes(currentFilmUnit) !== true) {
      localStorage.setItem("filmsWatched", films + currentFilmUnit);
    }
  }
}

function addQueue() {
  if (localStorage.getItem("filmsQueue") === null) {
    localStorage.setItem("filmsQueue", currentFilmUnit);
  } else {
    let films = localStorage.getItem("filmsQueue");
    if (films.includes(currentFilmUnit) !== true) {
      localStorage.setItem("filmsQueue", films + currentFilmUnit);
    }
  }
}

export function handleLocalStorage() {
  const addToWatched = document.querySelector('.btn__watched-js');
  const addToQueue = document.querySelector('.btn__queue-js');
  addToWatched.addEventListener('click', addWatched);
  addToQueue.addEventListener('click', addQueue);
}
export function hiddenBtn() {
  let watchedFilms = localStorage.getItem("filmsWatched");
  let queueFilms = localStorage.getItem("filmsQueue");
  if (watchedFilms.includes(currentFilmUnit) === true) {
    const addToWatched = document.querySelector('.btn__watched-js');
    addToWatched.setAttribute("disabled", "")
  }
  if (queueFilms.includes(currentFilmUnit) === true) {
    const addToQueue = document.querySelector('.btn__queue-js');
    addToQueue.setAttribute("disabled", "")
  }
}
// const filtrFilm = (films) => {
//     return films.filter((film, index, films) => films.indexOf(film) === index);
