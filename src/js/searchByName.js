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

inputFormEl.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();

  userRequest = event.currentTarget.searchQuery.value.trim();

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
    const arrayOfMovies = response.results;

    if (arrayOfMovies.length === 0) {
      warningNotificationEl.textContent =
        'Search result not successful. Enter the correct movie name and try again.';
      loadStop();
      return;
    } else {
      const searchPagination = new Paginator(
        1,
        response.total_pages,
        userRequest
      );

      searchPagination.render();
      warningNotificationEl.textContent = '';
    }

    const dataGenres = await fetchGenres();
    const genresList = dataGenres.genres;

    const arrayOfMoviesWithGenres = dataMerge(arrayOfMovies, genresList);

    // calling rendering function
    createMovieCard(arrayOfMoviesWithGenres);
    scrollOnSubmit();
    loadStop();
  } catch (error) {
    notificationError(error.message);
  }
}
