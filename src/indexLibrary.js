import getLocalStorage from './js/getLocalStorage';
// Imports from modalFilmCard section-----
import refs from './js/modalFilmCardRefs';
import { renderModalFilmCard, closeModal } from './js/modalFilmCardRender';
import { clickCurrentFilm } from './js/addLocalStorage.js';

getLocalStorage();
clickCurrentFilm();

// Modal listeners------------------------
refs.movieContainer.addEventListener('click', renderModalFilmCard);
refs.btnClose.addEventListener('click', closeModal);