import fetchMovies from './fetchMovies';
import fetchGenres from './fetchGenres';



let userRequest = '';
let arrayOfGenres;

const inputNameEl = document.querySelector('.js-submitBtn');
const inputFormEl = document.querySelector('.js-input-form');

const cardGalleryEl = document.querySelector('.movie-cards-gallery');


inputFormEl.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  userRequest = event.currentTarget.searchQuery.value.trim();

  try {
    const response = await fetchMovies(userRequest);
    const arrayOfMovies = response.results;
    console.log(response);
    // console.log(arrayOfMovies.length);


    
    


    
    createMovieCard(arrayOfMovies);

  } catch (error) {
    console.log(error.message);
  }


// 'https://api.themoviedb.org/3/search/movie'

  // CREATE MOVIECARD MARK-UP RENDER

  function createMovieCard(arrayOfMovies) {
  cardGalleryEl.innerHTML = '';
  console.log(arrayOfMovies);
  const setOfCards = arrayOfMovies.map(element => {
      console.log(element);
      console.log(element.poster_path);
    const movieTitle = element.title.toUpperCase();
    const moviePoster = 'https://image.tmdb.org/t/p/w500';
    const movieId = element.id;
    console.log('movieId FIRST=', movieId);
    
    
    // const arrayOfGenres = fetchGenres(movieId)

    fetchGenres(movieId)
      .then(dataArray => {
      console.log(dataArray);
    })
   
    


  return `
      <li class="card-container">
        <div class="image-wrapper">
        <p class="no-poster">NO POSTER</p>
        <img class="image-poster" src="${moviePoster}${element.poster_path}" alt="${element.title}"  />
        </div>

        <p class="movie-data">
        ${movieTitle}  <br>;
        <span class="genre-year">            
        ${element.genre_ids}
        ${element.release_date.slice(0, 4)}         
        </span>
        </p>
      </li>`
  });
  cardGalleryEl.insertAdjacentHTML('beforeend', setOfCards.join(''));
  };





















  // fetchMovies(userRequest)
  //   .then(data => {
  //   console.log(data);
  // })



}