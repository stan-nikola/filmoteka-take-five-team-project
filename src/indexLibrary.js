import getLocalStorage from './js/getLocalStorage';
// Imports from modalFilmCard section-----
import refs from './js/modalFilmCardRefs';
import { renderModalFilmCard, closeModal } from './js/modalFilmCardRender';
import { getLocalStorage } from './js/getLocalStorage';

getLocalStorage();

// Modal listeners------------------------
refs.movieContainer.addEventListener('click', renderModalFilmCard);
refs.btnClose.addEventListener('click', closeModal);
