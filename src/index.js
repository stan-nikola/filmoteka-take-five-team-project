import { appendMovies } from './js/slider';
import * as footer from './js/footerModal';
import searchByName from './js/searchByName';
import onSubmit from './js/searchByName';
import { onUpBtnClick } from './js/scrollPage';
import { getElem } from './js/apiService';
import { addThemeLocalStorage, useDarkTheme, refsTheme } from './js/colorTheme';
// Imports from modalFilmCard section-----
import refs from './js/modalFilmCardRefs';
import {
  renderModalFilmCard,
  closeModal,
  closeTrailerModal,
} from './js/modalFilmCardRender';
// ---------------------------------------

import { renderMovies } from './js/renderHomeFilms';
import { renderMovies2 } from './js/pagination';

// let getElem = selector => document.querySelector(selector);

// Slider starter
appendMovies();

renderMovies();

// clickCurrentFilm();

// Modal listeners------------------------
// refs.movieContainer.addEventListener('click', renderModalFilmCard);
// refs.btnClose.addEventListener('click', closeModal);

getElem('.movie-cards-gallery').addEventListener('click', renderModalFilmCard);
getElem('.close-btn-js').addEventListener('click', closeModal);
getElem('.close-trailer-btn-js').addEventListener('click', closeTrailerModal);

onUpBtnClick();
