import { fetchMovies, fetchGenres } from './apiService';
import { dataMerge } from './renderHomeFilms';
import { loadStart, loadStop } from './loadingSpinner';
// import noPosterCUT from '../images/no-poster/no-poster_CUT.jpg';
import { createMovieCard } from './movieCardRender';
import { notificationError } from './notifications';
import { scrollOnSubmit } from './scrollPage';
import { Paginator } from './pagination';

let userRequest = '';

const inputFormEl = document.querySelector('.js-input-form');
const warningNotificationEl = document.querySelector('.header__warning');

warningNotificationEl.textContent = '';

// const cardGalleryEl = document.querySelector('.movie-cards-gallery');

inputFormEl.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();

  userRequest = event.currentTarget.searchQuery.value.trim();
  console.log("🚀 ~ file: searchByName.js:24 ~ onSubmit ~ userRequest", userRequest)

  if (userRequest === '') {
    event.currentTarget.searchQuery.value = '';
    warningNotificationEl.textContent = 'Please, input your query';
    return;
  } else {
    warningNotificationEl.textContent = '';
  }
  event.currentTarget.searchQuery.value = '';

  try {
    loadStart();
    const response = await fetchMovies(userRequest);
    
    const searchPagination = new Paginator(1, response .total_pages, userRequest);
    searchPagination.render();
    const arrayOfMovies = response.results;

    if (arrayOfMovies.length === 0) {
      // console.log('Хрен вам, а не кино!');
      warningNotificationEl.textContent =
        'Search result not successful. Enter the correct movie name and try again.';
      loadStop();

      return;
    } else {
      warningNotificationEl.textContent = '';
    }

    const dataGenres = await fetchGenres();
    const genresList = dataGenres.genres;

    const arrayOfMoviesWithGenres = dataMerge(arrayOfMovies, genresList);
    // console.log(arrayOfMoviesWithGenres);

    // calling rendering function
    createMovieCard(arrayOfMoviesWithGenres);
    scrollOnSubmit();
    loadStop();
  } catch (error) {
    notificationError(error.message);
  }
}

// FUNCTION FOR RENDERING A CARD
// export function createMovieCard(arrayOfMovies) {
//   cardGalleryEl.innerHTML = '';

//   const setOfCards = arrayOfMovies.map(element => {
//     const movieTitle = element.title.toUpperCase();
//     const moviePosterStartPath = 'https://image.tmdb.org/t/p/w500';

//     let movieYear = '';
//     if (element.release_date) {
//       movieYear = element.release_date.slice(0, 4);
//     }

//     let movieGenres = element.genres.join(', ');
//     if (!(element.genres.length === 0) && !(movieYear === '')) {
//       movieGenres = movieGenres + ' |';
//     }

//     let moviePoster = noPosterCUT;
//     if (element.poster_path) {
//       moviePoster = moviePosterStartPath + element.poster_path;
//     }

//     return `
//        <li class="card-container" id="${element.id}">
//         <img class="image-poster" src="${moviePoster}" alt="${element.title}"  />
//         <p class="movie-data">
//         ${movieTitle}  <br>
//         <span class="genre-year">
//         ${movieGenres}
//         ${movieYear}
//         </span>
//         </p>
//       </li>`;
//   });

//   cardGalleryEl.innerHTML = setOfCards.join('');
// }
