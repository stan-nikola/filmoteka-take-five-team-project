import { appendMovies } from './js/slider';
import * as footer from './js/footerModal';
import searchByName from './js/searchByName';
import onSubmit from './js/searchByName';
import { onUpBtnClick } from './js/scrollPage';

// Imports from modalFilmCard section-----
import refs from './js/modalFilmCardRefs';
import { renderModalFilmCard, closeModal } from './js/modalFilmCardRender';
// ---------------------------------------
import { renderMovies2 } from './js/pagination';
import { renderMovies } from './js/renderHomeFilms';
import { buttonRef, addWatched, addQueue } from './js/addLocalStorage';
import { renderMovies2 } from './js/pagination';
import { clickCurrentFilm } from './js/addLocalStorage.js';

// Slider starter
appendMovies();

renderMovies2();
clickCurrentFilm();

// Modal listeners------------------------
refs.movieContainer.addEventListener('click', renderModalFilmCard);
refs.btnClose.addEventListener('click', closeModal);

onUpBtnClick();
