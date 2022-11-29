import { appendMovies } from './js/slider';
import * as footer from './js/footerModal';
import searchByName from './js/searchByName';
import onSubmit from './js/searchByName';
import { onUpBtnClick } from './js/scrollPage';

import { renderMovies } from './js/renderHomeFilms';
import { buttonRef, addWatched, addQueue } from './js/addLocalStorage';
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
buttonRef.addWatched.addEventListener('click', addWatched);
buttonRef.addQueue.addEventListener('click', addQueue);

onUpBtnClick();
