// Imports from modalFilmCard section-----
import refs from './js/modalFilmCardRefs';
import { renderModalFilmCard, closeModal } from './js/modalFilmCardRender';
import { getLocalStorage } from './js/localStorage/getLocalStorage';
import { onUpBtnClick } from './js/scrollPage';
import * as colorTheme from './js/colorTheme';
import {
  showLogInModal,
  onCloseRegisterForm,
  onEscCloseModal,
  onBackdropCloseModal,
  onRegister,
  onLogIn,
} from './js/modalForm';

getLocalStorage();

// Modal listeners------------------------
refs.movieContainer.addEventListener('click', renderModalFilmCard);
refs.btnClose.addEventListener('click', closeModal);

onUpBtnClick();
