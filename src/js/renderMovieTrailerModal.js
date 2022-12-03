import { fetchTrailer } from './apiService';

export async function renderTrailerModal(event) {
  let trailerId = event.target.dataset.movieid;

  const dataTrailer = await fetchTrailer(trailerId);
  // const videoKey = dataTrailer.results[0].key;
  const trailerObject = dataTrailer.results.find(
    option =>
      option.name === 'Official Trailer' ||
      option.name === 'Official Trailer [Subtitled]'
  );
  const trailercontainer = document.querySelector(
    '.modal-card__trailer__video__js'
  );
  const trailerBtn = document.querySelector('.btn__trailer__modal__js');
  const trailerInfo = document.querySelector('.info__no__trailer__modal__js');
  if (trailerObject) {
    // console.log('TRAILER KEY ', trailerObject.key);
    console.log('TRAILER IFRAME IS CREATET');
    const trailerMarkup = `
    <div>
        <iframe width=100 % " height="250" src='https://www.youtube.com/embed/${trailerObject.key}'frameborder = "0" allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe >
    </div>
      `;
    trailercontainer.insertAdjacentHTML('afterbegin', trailerMarkup);
    trailerBtn.disabled = true;
    return;
  } else {
    trailerInfo.style.display = 'block';
  }
}

export function handleTrailerMovie() {
  const trailerBtn = document.querySelector('.btn__trailer__modal__js');
  trailerBtn.addEventListener('click', renderTrailerModal);
}




