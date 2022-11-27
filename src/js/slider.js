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
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 30
      },
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
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

function createMarkUp(movie) {
  return `
  <div class="swiper-slide">
    <img class="swiper-image" src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt="">
  </div>
  `;
}
