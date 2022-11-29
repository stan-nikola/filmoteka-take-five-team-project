import { appendMovies } from './js/slider';
// import * as footer from './js/footerModal';
import searchByName from './js/searchByName';
import onSubmit from './js/searchByName';
import { renderMovies } from './js/renderHomeFilms';
import { currentFilm } from './js/addLocalStorage';
import {
  API_KEY,
  BASE_URL,
  refs,
  renderModalFilmCard,
  closeModal,
} from './js/renderModalFilmCard';
// Slider starter
appendMovies();

renderMovies();

// Modal listeners------------------------
refs.movieContainer.addEventListener('click', renderModalFilmCard);
refs.btnClose.addEventListener('click', closeModal);

//----------lISTENERS------------------------------------
currentFilm()