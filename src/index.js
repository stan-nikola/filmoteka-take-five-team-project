import { appendMovies } from './js/slider';
import * as footer from './js/footerModal';
import searchByName from './js/searchByName';
import onSubmit from './js/searchByName';
import { onUpBtnClick } from './js/scrollPage';

import { addThemeLocalStorage, useDarkTheme, refsTheme } from './js/colorTheme';
// Imports from modalFilmCard section-----
import refs from './js/modalFilmCardRefs';
import { renderModalFilmCard, closeModal } from './js/modalFilmCardRender';
// ---------------------------------------

import { renderMovies } from './js/renderHomeFilms';
import { renderMovies2 } from './js/pagination';

window.onload = useDarkTheme;
addThemeLocalStorage();
// Slider starter
appendMovies();

renderMovies();
refsTheme.checkbox.addEventListener('click', useDarkTheme);
// clickCurrentFilm();

// Modal listeners------------------------
refs.movieContainer.addEventListener('click', renderModalFilmCard);
refs.btnClose.addEventListener('click', closeModal);

onUpBtnClick();
