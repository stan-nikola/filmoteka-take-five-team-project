// Imports from modalFilmCard section-----

// import refs from './js/modalFilmCardRefs';
import {
  renderModalFilmCard,
  closeModal,
  closeTrailerModal,
} from './js/modalFilmCardRender';
import * as footer from './js/footerModal';

import { getLocalStorage } from './js/localStorage/getLocalStorage';

import { onUpBtnClick } from './js/scrollPage';
import * as colorTheme from './js/colorTheme';
import {
  showLogInModal,
  onCloseRegisterForm,
  onBackdropCloseModal,
  onRegister,
  onLogIn,
  onSignOut,
} from './js/modalForm';

import { onUpBtnClick } from './js/scrollPage';
import { getElem } from './js/refs';

getLocalStorage();

// Modal listeners------------------------
getElem('.movie-cards-gallery').addEventListener('click', renderModalFilmCard);
getElem('.close-btn-js').addEventListener('click', closeModal);
getElem('.close-trailer-btn-js').addEventListener('click', closeTrailerModal);

onUpBtnClick();
