const Ref = {
  watchedBtn: document.querySelector('.header__watched__btn__js'),
  queueBtn: document.querySelector('.header__queue__btn__js'),
  library: document.querySelector('.library__gallery__js'),
  pagination: document.querySelector('div.container'),
};
export default function getLocalStorage() {
  Ref.watchedBtn.setAttribute('disabled', '');
  if (localStorage.getItem('filmsWatched') !== null) {
    Ref.library.insertAdjacentHTML(
      'beforeend',
      localStorage.getItem('filmsWatched')
    );
    Ref.pagination.classList.remove('is-hidden');
  } else {
    Ref.library.textContent = 'Watched Gallery is empty';
    Ref.library.setAttribute(
      'style',
      'text-align: center;display: block;min-height: auto;'
    );
    Ref.pagination.classList.add('is-hidden');
  }
  Ref.watchedBtn.addEventListener('click', () => {
    //
    Ref.queueBtn.classList.toggle('header__libary__btn__active');
    Ref.watchedBtn.classList.toggle('header__libary__btn__active');
    //
    Ref.watchedBtn.setAttribute('disabled', '');
    Ref.queueBtn.removeAttribute('disabled');
    if (localStorage.getItem('filmsWatched') !== null) {
      Ref.library.textContent = '';
      Ref.library.insertAdjacentHTML(
        'beforeend',
        localStorage.getItem('filmsWatched')
      );
      Ref.pagination.classList.remove('is-hidden');
    } else {
      Ref.library.textContent = 'Watched Gallery is empty';
      Ref.library.setAttribute(
        'style',
        'text-align: center;display: block;min-height: auto;'
      );
      Ref.watchedBtn.removeAttribute('disabled');
      Ref.pagination.classList.add('is-hidden');
    }
  });

  Ref.queueBtn.addEventListener('click', () => {
    //
    Ref.queueBtn.classList.toggle('header__libary__btn__active');
    Ref.watchedBtn.classList.toggle('header__libary__btn__active');
    //
    Ref.queueBtn.setAttribute('disabled', '');
    Ref.watchedBtn.removeAttribute('disabled');
    if (localStorage.getItem('filmsQueue') !== null) {
      Ref.library.textContent = '';
      Ref.library.insertAdjacentHTML(
        'beforeend',
        localStorage.getItem('filmsQueue')
      );
      Ref.pagination.classList.remove('is-hidden');
    } else {
      Ref.library.textContent = 'Queue Gallery is empty';
      Ref.library.setAttribute(
        'style',
        'text-align: center;display: block;min-height: auto;'
      );
      Ref.pagination.classList.add('is-hidden');
    }
  });
}
