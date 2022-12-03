import noPosterCUT from '../images/no-poster/no-poster_CUT.jpg';

export default function renderFilmCardInLibrary(movies) {
  const cardGalleryEl = document.querySelector('.movie-cards-gallery-library');
  if (cardGalleryEl) {
    const setOfCards = movies.map(movie => {
      const movieTitle = movie.title.toUpperCase();
      const moviePosterStartPath = 'https://image.tmdb.org/t/p/w500';

      let movieYear = '';
      if (movie.release_date) {
        movieYear = movie.release_date.slice(0, 4);
      }

      let movieGenres = movie.genres.map(genre => genre.name).join(', ');
      let voteAverage = Number(movie.vote_average.toFixed(1));

      let moviePoster = noPosterCUT;
      if (movie.poster_path) {
        moviePoster = moviePosterStartPath + movie.poster_path;
      }
      return `
       <li class="card-container" data-id="${movie.id}">
        <img class="image-poster" src="${moviePoster}" alt="${movie.title}"  />
        <p class="movie-data">
        ${movieTitle}  <br>
        <span class="genre-year">            
        ${movieGenres} |
        ${movieYear}         
        </span>
       <span class="item__vote-rating library">${voteAverage}</span>
        </p>
      </li>`;
    });

    cardGalleryEl.innerHTML = setOfCards.join('');
  } else {
    return;
  }
}
