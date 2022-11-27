const API_KEY = '62f46feb65c2319fb0db62c2c080ca35';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchHomeTrendingMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchGernes() {
  try {
    const response = await fetch(
      `${BASE_URL}genre/movie/list?api_key=${API_KEY}`
    );
    const dataGernes = response.json();
    return dataGernes;
  } catch (error) {
    console.log(error);
  }
}
