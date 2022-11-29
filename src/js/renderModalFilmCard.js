import { createMovieCard } from './searchByName';

const API_KEY = '62f46feb65c2319fb0db62c2c080ca35';
const BASE_URL = 'https://api.themoviedb.org';
const moviePoster = 'https://image.tmdb.org/t/p/w500';

const refs = {
  cardLi: document.querySelector('.card-container'),
  modalCard: document.querySelector('.modal-card__container-content'),
  movieContainer: document.querySelector('.movie-cards-gallery'),
  backdrop: document.querySelector('.backdrop'),
  btnClose: document.querySelector('.close-btn-js'),
};

async function renderModalFilmCard(evt) {
  refs.modalCard.innerHTML = '';
  try {
    const response = await fetch(
      `${BASE_URL}/3/movie/${evt.target.id}?api_key=${API_KEY}`
    );
    const result = await response.json();
    console.log(result);
    const cardMarkup = `<div class="modal-card__container-img">
            <img
              class="modal-card__current-img current-img-js"
              src="${moviePoster}${result.poster_path}"
              alt="Poster of film "${result.title}"
            />
        </div>
        <div class="modal-card__container-description">
          <h2 class="modal-card__name-film">${result.title}</h2>
          <ul class="modal-card__list list">
            <li class="modal-card__item item">
              <span>Vote / Votes</span>
              <p class="item__vote-value">
                <span class="item__vote-rating">${
                  result.vote_average
                }</span>
                / <span class="item__votes-vews">${
                  result.vote_count
                }</span>
              </p>
            </li>
            <li class="modal-card__item item">
              <span>Popularity</span>
              <p class="item__popularity-value">${
                result.popularity
              }</p>
            </li>
            <li class="modal-card__item">
              <span>Original Title</span>
              <p class="item__title-value">
                ${result.original_title}
              </p>
            </li>
            <li class="modal-card__item item">
              <span>Genre</span>
              <p class="item__genre-value">${result.genres.map(
                genre => genre.name
              )}</p>
            </li>
          </ul>
          <h3 class="about about__header">About</h3>
          <p class="about__description">
            ${result.overview}
          </p> 
          <div class="modal-card__container-btn">
          <button
            class="btn current-btn btn__watched btn__watched-js"
            type="button"
          >
            add to Watched
          </button>
          <button class="btn btn__queue btn__queue-js" type="button">
            add to queue
          </button>
        </div>`;
    refs.modalCard.insertAdjacentHTML('afterbegin', cardMarkup);
    refs.backdrop.classList.remove('is-hidden');
  } catch {}
}

function closeModal() {
  refs.backdrop.classList.add('is-hidden');
}

export {
  API_KEY,
  BASE_URL,
  moviePoster,
  refs,
  renderModalFilmCard,
  closeModal,
};

