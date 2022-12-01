import refs from './modalFilmCardRefs';
import { API_KEY, BASE_URL, MOVIE_POSTER } from './apiService';
import { handleLocalStorage } from './addLocalStorage';
async function renderModalFilmCard(evt) {
  refs.modalCard.innerHTML = '';
  let filmId = evt.target.parentNode.dataset.id;
  console.log(evt.target.parentNode);
  try {
    const response = await fetch(
      `${BASE_URL}/3/movie/${filmId}?api_key=${API_KEY}`
    );
    const result = await response.json();
    console.log(result);

    let movieGenres = result.genres.map(genre => genre.name).join(', ');

    let popularity = result.popularity;

    let voteAverage = Number(result.vote_average.toFixed(1));
    let voteAverageInt = Number(voteAverage.toFixed());

    if (voteAverage === voteAverageInt) {
      voteAverage = voteAverageInt;
    };
  
    const cardMarkup = `<div class="modal-card__container-img">
            <img
              class="modal-card__current-img current-img-js"
              src="${MOVIE_POSTER}${result.poster_path}"
              alt="Poster of film "${result.title}"
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
    handleLocalStorage();
    window.addEventListener('keydown', onKeyCloseModal);
    refs.backdrop.addEventListener('click', onBackdropClick);
  } catch { }
}

function onBackdropClick(ev) {
  if (ev.currentTarget === ev.target) {
    closeModal();
  }
}

function onKeyCloseModal(evt) {
  const ESC_KEY_CODE = 'Escape'
  evt.preventDefault();
  if (evt.code === ESC_KEY_CODE) {
    closeModal();
  }
}

function closeModal() {
  refs.backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onKeyCloseModal);
  refs.backdrop.removeEventListener('click', onBackdropClick);
}

export { renderModalFilmCard, closeModal, onKeyCloseModal, onBackdropClick };