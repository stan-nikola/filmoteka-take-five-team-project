import { fetchMovies, fetchGenres } from './apiService';
import { dataMerge } from './renderHomeFilms';
import { loadStart, loadStop } from './loadingSpinner';
import noPosterCUT from '../images/no-poster/no-poster_CUT.jpg';

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
