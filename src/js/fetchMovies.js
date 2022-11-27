const API_KEY = '62f46feb65c2319fb0db62c2c080ca35';

const URL = 'https://api.themoviedb.org/3/search/movie';

export default function fetchMovies(inputtedName) {
  return fetch(`${URL}?api_key=${API_KEY}&query=${inputtedName}`).then(
    response => response.json()
  );
}
