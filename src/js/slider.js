import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import { FetchMoviesApi } from './apiService';
import { renderModalFilmCard } from './modalFilmCardRender';

const refs = {
  swiper: document.querySelector('.swiper'),
  slider: document.querySelector('.swiper-wrapper'),
  backdrop: document.querySelector('.backdrop'),
};

refs.swiper.addEventListener('click', clickOnSliderCards);

async function clickOnSliderCards(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  renderModalFilmCard(evt);
  refs.backdrop.classList.remove('is-hidden');
}

const fetchMoviesApi = new FetchMoviesApi();

export async function appendMovies() {
  const data = await fetchMoviesApi.fetchTrendingMovies();
  const movies = data.results;
  console.log(movies);
  const markup = movies.map(movie => createMarkUp(movie)).join('');
  refs.slider.insertAdjacentHTML('beforeend', markup);

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Autoplay],
    breakpoints: {
      280: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 10,
      },
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}

function createMarkUp({ poster_path, vote_average, original_title, id }) {
  return `
  <li class="swiper-slide" data-id="${id}">
    <span class="swiper-rating">${vote_average.toFixed(1)}</span>
    <img class="swiper-image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}">
  </li>
  `;
}
