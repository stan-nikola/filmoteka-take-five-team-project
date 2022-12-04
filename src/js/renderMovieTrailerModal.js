import { fetchTrailer } from './apiService';
import { notificationWarning } from './notifications';
import { onKeyCloseModal, onBackdropClick } from './modalFilmCardRender';
let getElem = selector => document.querySelector(selector);
export async function renderTrailerModal(event) {
  let trailerId = event.target.dataset.movieid;

  const dataTrailer = await fetchTrailer(trailerId);
  const trailerObject = dataTrailer.results.find(
    option =>
      option.name === 'Official Trailer' ||
      option.name === 'Official Trailer [Subtitled]'
  );
  if (trailerObject) {
    const trailerMarkup = `
        <iframe width=560" height="315" src='https://www.youtube.com/embed/${trailerObject.key}'frameborder = "0" allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe >
      `;
    getElem('.modal-trailer__container-content').innerHTML = trailerMarkup;
    getElem('.backdrop_trailer').classList.remove('is-hidden');
    window.addEventListener('keydown', onKeyCloseModal);
    getElem('.backdrop_trailer').addEventListener('click', onBackdropClick);
    getElem('.btn__trailer__modal__js').disabled = true;
    return;
  } else {
    notificationWarning('Sorry, trailer not available');
  }
}

export function handleTrailerMovie() {
  getElem('.btn__trailer__modal__js').addEventListener(
    'click',
    renderTrailerModal
  );
}
