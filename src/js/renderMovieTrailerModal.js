import { fetchTrailer } from './apiService';
import { notificationWarning } from './notifications';
let getElem = selector => document.querySelector(selector);
export async function renderTrailerModal(event) {
  let trailerId = event.target.dataset.movieid;

  // const trailerBtn = document.querySelector('.btn__trailer__modal__js');

  const dataTrailer = await fetchTrailer(trailerId);
  const trailerObject = dataTrailer.results.find(
    option =>
      option.name === 'Official Trailer' ||
      option.name === 'Official Trailer [Subtitled]'
  );
  const trailerContainer = document.querySelector(
    '.modal-card__trailer__video__js'
  );
  if (trailerObject) {
    const trailerMarkup = `
    <div>
        <iframe width=100 % " height="250" src='https://www.youtube.com/embed/${trailerObject.key}'frameborder = "0" allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe >
    </div>
      `;
    trailerContainer.insertAdjacentHTML('afterbegin', trailerMarkup);
    getElem('.btn__trailer__modal__js').disabled = true;
    return;
  } else {
    notificationWarning('Sorry, trailer not available');
  }
}

export function handleTrailerMovie() {
  const trailerBtn = document.querySelector('.btn__trailer__modal__js');
  trailerBtn.addEventListener('click', renderTrailerModal);
}
