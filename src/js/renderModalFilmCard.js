import { createMovieCard } from './movieCardRender';

const API_KEY = '62f46feb65c2319fb0db62c2c080ca35';
const BASE_URL = 'https://api.themoviedb.org';
const moviePoster = 'https://image.tmdb.org/t/p/w500';

const refs = {
  cardLi: document.querySelector('.card-container'),
  modalCard: document.querySelector('.container-content'),
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
    const cardMarkup = `<div class="container-img">
            <img
              class="current-img current-img-js"
              src="${moviePoster}${result.poster_path}"
              alt="Poster of film "${result.title}"
            />
        </div>
        <div class="container-description">
          <h2 class="name-film name-film-js">${result.title}</h2>
          <ul class="list">
            <li class="item">
              <span>Vote / Votes</span>
              <p class="vote-value-list vote-value-list-js">
                <span class="vote-rating-list vote-rating-list-js">${
                  result.vote_average
                }</span>
                / <span class="votes-vews-list votes-vews-list-js">${
                  result.vote_count
                }</span>
              </p>
            </li>
            <li class="item">
              <span>Popularity</span>
              <p class="popularity-value-list popularity-value-list-js">${
                result.popularity
              }</p>
            </li>
            <li class="item">
              <span>Original Title</span>
              <p class="title-value-list title-value-list-js">
                ${result.original_title}
              </p>
            </li>
            <li class="item">
              <span>Genre</span>
              <p class="genre-value-list genre-value-list-js">${result.genres.map(
                genre => genre.name
              )}</p>
            </li>
          </ul>
          <h3 class="header-about">About</h3>
          <p class="description-about description-about-js">
            ${result.overview}
          </p> `;
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
