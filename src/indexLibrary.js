// Imports from modalFilmCard section-----
import refs from './js/modalFilmCardRefs';
import { renderModalFilmCard, closeModal } from './js/modalFilmCardRender';
import { getLocalStorage } from './js/localStorage/getLocalStorage';
import { addThemeLocalStorage, useDarkTheme, refsTheme } from './js/colorTheme';
import { onUpBtnClick } from './js/scrollPage';
import { showLogInModal, onEscCloseModal, onBackdropCloseModal, onRegister, onLogIn } from './js/modalForm';
window.onload = useDarkTheme;

addThemeLocalStorage();
getLocalStorage();

refsTheme.checkbox.addEventListener('click', useDarkTheme);
// Modal listeners------------------------
refs.movieContainer.addEventListener('click', renderModalFilmCard);
refs.btnClose.addEventListener('click', closeModal);

onUpBtnClick();
