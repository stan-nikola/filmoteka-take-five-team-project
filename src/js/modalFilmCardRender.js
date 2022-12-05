// import refs from './modalFilmCardRefs';
import { API_KEY, BASE_URL, MOVIE_POSTER } from './apiService';

import { handleLocalStorage } from './localStorage/addLocalStorage';

import placeholderImg from '../images/no-poster/no-poster_CUT.jpg';
import { loadStart, loadStop } from './loadingSpinner';
import { handleTrailerMovie } from './renderMovieTrailerModal';
import { getElem } from './refs';

let filmId;

async function renderModalFilmCard(evt) {
  if (evt.target.parentNode.nodeName !== 'LI') {
    return;
  }
  loadStart();
  getElem('body').classList.add('modal-open');
  getElem('.modal-card__container-content').innerHTML = '';

  filmId = evt.target.parentNode.dataset.id;

  try {
    const response = await fetch(
      `${BASE_URL}/3/movie/${filmId}?api_key=${API_KEY}`
    );
    const result = await response.json();

    let movieGenres = result.genres.map(genre => genre.name).join(', ');
    let popularity = result.popularity;
    let voteAverage = Number(result.vote_average.toFixed(1));
    let voteAverageInt = Number(voteAverage.toFixed());

    if (voteAverage === voteAverageInt) {
      voteAverage = voteAverageInt;
    }

    const cardMarkup = `<div class="modal-card__container-img">
            <img
              class="modal-card__current-img current-img-js"
              src="${MOVIE_POSTER}${result.poster_path}"
              alt="Poster of film "${result.title}"
              onError="this.src='${placeholderImg}'"
            />
        </div>
        <div class="modal-card__container-description">
          <h2 class="modal-card__name-film">${result.title}</h2>
          <ul class="modal-card__list list">
            <li class="modal-card__item item">
              <span>Vote / Votes</span>
              <p class="item__vote-value">
                <span class="item__vote-rating">${voteAverage}</span>
                / <span class="item__votes-vews">${result.vote_count}</span>
              </p>
            </li>
            <li class="modal-card__item item">
              <span>Popularity</span>
              <p class="item__popularity-value">${popularity}</p>
            </li>
            <li class="modal-card__item">
              <span>Original Title</span>
              <p class="item__title-value">
                ${result.original_title}
              </p>
            </li>
            <li class="modal-card__item item">
              <span>Genre</span>
              <p class="item__genre-value">${movieGenres}</p>
            </li>
          </ul>
          <h3 class="about about__header">About</h3>
          <p class="about__description">
            ${result.overview}
          </p> 
          <div class="modal-card__container-btn">
          <button
            class="btn current-btn btn__watched btn__watched-js" data-id=${filmId}
            type="button"
          >
            add to Watched
          </button>
          <button class="btn btn__queue btn__queue-js" data-id=${filmId} type="button">
            add to queue
          </button>
          <button class="btn btn__trailer btn__trailer__modal__js" data-movieid=${filmId} type="button">
          Watch Trailer
          <img class="youtube-img" src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube">
         </button> 
        </div>
        `;
    getElem('.modal-card__container-content').insertAdjacentHTML(
      'afterbegin',
      cardMarkup
    );
    getElem('.backdrop').classList.remove('is-hidden');
    handleLocalStorage();
    handleTrailerMovie();
    window.addEventListener('keydown', onKeyCloseModal);
    getElem('.backdrop').addEventListener('click', onBackdropClick);

    getElem('.close-btn-js').classList.add(
      'animate__animated',
      'animate__zoomIn'
    );

    loadStop();
  } catch { }
}

function onBackdropClick(ev) {
  if (ev.currentTarget === ev.target) {
    closeModal();
    closeTrailerModal();
  }
}

function onKeyCloseModal(evt) {
  const ESC_KEY_CODE = 'Escape';
  evt.preventDefault();
  if (evt.code === ESC_KEY_CODE) {
    closeModal();
    closeTrailerModal();
  }
}

function closeModal() {
  getElem('body').classList.remove('modal-open');
  getElem('.backdrop').classList.add('is-hidden');
  window.removeEventListener('keydown', onKeyCloseModal);
  getElem('.backdrop').removeEventListener('click', onBackdropClick);
  getElem('.close-btn-js').classList.remove(
    'animate__animated',
    'animate__zoomIn'
  );
}

function closeTrailerModal() {
  getElem('.modal-trailer__container-content').innerHTML = '';
  getElem('body').classList.remove('modal-open');
  getElem('.backdrop_trailer').classList.add('is-hidden');
  window.removeEventListener('keydown', onKeyCloseModal);
  getElem('.backdrop_trailer').removeEventListener('click', onBackdropClick);
}

export {
  renderModalFilmCard,
  closeModal,
  onKeyCloseModal,
  onBackdropClick,
  closeTrailerModal,
};
