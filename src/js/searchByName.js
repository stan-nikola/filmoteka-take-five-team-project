import { fetchMovies, fetchGenres } from './apiService';
import { dataMerge } from './renderHomeFilms';
import { loadStart, loadStop } from './loadingSpinner';
let userRequest = '';

const inputNameEl = document.querySelector('.js-submitBtn');
const inputFormEl = document.querySelector('.js-input-form');

const cardGalleryEl = document.querySelector('.movie-cards-gallery');

inputFormEl.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  userRequest = event.currentTarget.searchQuery.value.trim();

  try {
    loadStart();
    const response = await fetchMovies(userRequest);
    const arrayOfMovies = response.results;

    if (arrayOfMovies.length === 0) {
      console.log('Хрен вам, а не кино!');
    }

    const dataGenres = await fetchGenres();
    const genresList = dataGenres.genres;

    const arrayOfMoviesWithGenres = dataMerge(arrayOfMovies, genresList);
    console.log(arrayOfMoviesWithGenres);

    // calling rendering function
    createMovieCard(arrayOfMoviesWithGenres);
    loadStop();
  } catch (error) {
    console.log(error.message);
  }
}
// function for rendering a card
export function createMovieCard(arrayOfMovies) {
  cardGalleryEl.innerHTML = '';

  const setOfCards = arrayOfMovies.map(element => {
    const movieTitle = element.title.toUpperCase();
    const moviePoster = 'https://image.tmdb.org/t/p/w500';
    let movieGenres = element.genres.join(', ');

    if (!(element.genres.length === 0) && !(element.release_date === '')) {
      movieGenres = movieGenres + ' |';
    }

    return `
      <li class="card-container">
        <div class="image-wrapper">
        <p class="no-poster">NO POSTER</p>
        <img class="image-poster" src="${moviePoster}${
      element.poster_path
    }" alt="${element.title}"  />
        </div>
        <p class="movie-data">
        ${movieTitle}  <br>
        <span class="genre-year">            
        ${movieGenres}
        ${element.release_date.slice(0, 4)}         
        </span>
        </p>
      </li>`;
  });

  cardGalleryEl.innerHTML = setOfCards.join('');
}
