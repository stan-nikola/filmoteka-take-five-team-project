// FUNCTION FOR RENDERING A CARD
import noPosterCUT from '../images/no-poster/no-poster_CUT.jpg';
export function createMovieCard(arrayOfMovies) {
  const cardGalleryEl = document.querySelector('.movie-cards-gallery');

  cardGalleryEl.innerHTML = '';

  const setOfCards = arrayOfMovies.map(element => {
    const movieTitle = element.title.toUpperCase();
    const moviePosterStartPath = 'https://image.tmdb.org/t/p/w500';
    

    let movieYear = '';
    if (element.release_date) {
      movieYear = element.release_date.slice(0, 4);
    }

    let movieGenres = element.genres.join(', ');
    if (!(element.genres.length === 0) && !(movieYear === '')) {
      movieGenres = movieGenres + ' |';
    }

    let moviePoster = noPosterCUT;
    if (element.poster_path) {
      moviePoster = moviePosterStartPath + element.poster_path;
    }

    return `
       <li class="card-container" id="${element.id}">
        <img class="image-poster" src="${moviePoster}" alt="${element.title}"  />
        <p class="movie-data">
        ${movieTitle}  <br>
        <span class="genre-year">            
        ${movieGenres}
        ${movieYear}         
        </span>
        </p>
      </li>`;
  });

  cardGalleryEl.innerHTML = setOfCards.join('');
}