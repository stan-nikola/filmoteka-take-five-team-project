// Imports from modalFilmCard section-----
import refs from './js/modalFilmCardRefs';
import {
  renderModalFilmCard,
  closeModal,
  closeTrailerModal,
} from './js/modalFilmCardRender';
import { getLocalStorage } from './js/localStorage/getLocalStorage';
import { addThemeLocalStorage, useDarkTheme } from './js/colorTheme';
import { onUpBtnClick } from './js/scrollPage';
import { getElem } from './js/refs';
window.onload = useDarkTheme;

addThemeLocalStorage();
getLocalStorage();

getElem('.switch__input').addEventListener('click', useDarkTheme);
// Modal listeners------------------------
getElem('.movie-cards-gallery').addEventListener('click', renderModalFilmCard);
getElem('.close-btn-js').addEventListener('click', closeModal);
getElem('.close-trailer-btn-js').addEventListener('click', closeTrailerModal);

onUpBtnClick();
