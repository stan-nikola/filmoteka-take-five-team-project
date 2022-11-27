import { API_KEY, BASE_URL } from './apiService';

export async function fetchMovies() {
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

export async function fetchGernes(id) {
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
