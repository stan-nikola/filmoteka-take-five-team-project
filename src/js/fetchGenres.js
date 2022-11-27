const API_KEY = '62f46feb65c2319fb0db62c2c080ca35';

const URL = 'https://api.themoviedb.org/3/search/movie';
const URL_FOR_GENRES = 'https://api.themoviedb.org/3/movie';

const BASE_URL = `https://api.themoviedb.org/3`;




export default function fetchGenres(movieId) {
  console.log('movieId=', movieId);
    return fetch(`${URL_FOR_GENRES}/${movieId}?api_key=${API_KEY}&append_to_response=genre_ids`)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      // console.log(data.genres);
      arrayOfGenres = data.genres.map(el => {
        console.log(el.name);  
        return el.name;
        });
      console.log(arrayOfGenres);
      
  return arrayOfGenres;


    });
  
}

