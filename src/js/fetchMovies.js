const API_KEY = '62f46feb65c2319fb0db62c2c080ca35';

const URL = 'https://api.themoviedb.org/3/search/movie';

export default function fetchMovies(inputedName) {
  // console.log('name=', inputedName);
  return fetch(`${URL}?api_key=${API_KEY}&query=${inputedName}`)
         .then(response => response.json());
}



