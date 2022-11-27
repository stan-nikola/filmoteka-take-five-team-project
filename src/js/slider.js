import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import { FetchMoviesApi } from './apiService'

const refs = {
  slider: document.querySelector('.swiper-wrapper'),
};
const fetchMoviesApi = new FetchMoviesApi()


export async function appendMovies() {
  const data = await fetchMoviesApi.fetchTrendingMovies();
  const movies = data.results;
  const markup = movies.map(movie => createMarkUp(movie)).join('');
  console.log(movies);

  refs.slider.insertAdjacentHTML('beforeend', markup);

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay],
    breakpoints: {
      340: {
        slidesPerView:2,
        spaceBetween:10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 20
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

function createMarkUp({poster_path, vote_average, original_title}) {
  return `
  <li class="swiper-slide">
    <span class="swiper-rating">${vote_average.toFixed(1)}</span>
    <img class="swiper-image" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${original_title}">
  </li>
  `;
}
