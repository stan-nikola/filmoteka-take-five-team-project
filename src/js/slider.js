import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const API_KEY = '62f46feb65c2319fb0db62c2c080ca35';
const URL = 'https://api.themoviedb.org';
const refs = {
  slider: document.querySelector('.swiper-wrapper'),
};

async function fetchTrendingMovies() {
  try {
    const response = await fetch(
      `${URL}/3/trending/all/day?api_key=${API_KEY}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function appendMovies() {
  const data = await fetchTrendingMovies();
  const movies = data.results;
  const markup = movies.map(movie => createMarkUp(movie)).join('');
  console.log(movies);

  refs.slider.insertAdjacentHTML('beforeend', markup);

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    slidesPerView: 7,
    spaceBetween: 10,
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
