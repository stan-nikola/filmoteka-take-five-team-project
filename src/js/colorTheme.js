const refsTheme = {
  checkbox: document.querySelector('.switch__input'),
  body: document.querySelector('body'),
  modalCard: document.querySelector('.modal-card'),
  swiper: document.querySelector('.swiper-container'),
  movieCardContainer: document.querySelector('.movie-cards-gallery'),
  paginationList: document.querySelector('.pagination__list'),
  footerModal: document.querySelector('.footer__modal'),
};

refsTheme.checkbox.addEventListener('click', themeChange);

let savedColorTheme = localStorage.getItem('colorTheme');

if (savedColorTheme === null) {
  console.log(savedColorTheme);
  savedColorTheme = 'light-theme';
}
if (savedColorTheme === 'dark-theme') {
  refsTheme.checkbox.checked = true;
}
themeToggle(savedColorTheme);

function themeChange(evt) {
  if (evt.target.checked) {
    localStorage.setItem('colorTheme', 'dark-theme');
  } else {
    localStorage.setItem('colorTheme', 'light-theme');
  }
  savedColorTheme = localStorage.getItem('colorTheme');

  themeToggle(savedColorTheme);
}

function themeToggle(theme) {
  refsTheme.body.className = theme;
  refsTheme.modalCard.className = `modal-card ${theme}`;

  if (refsTheme.swiper) {
    refsTheme.swiper.className = `container swiper-container ${theme}`;
  }
  refsTheme.movieCardContainer.className = `movie-cards-gallery js-scrollOnSubmit ${theme}`;
  refsTheme.paginationList.className = `pagination__list ${theme}`;
  refsTheme.footerModal.className = `footer__modal ${theme}`;
}
