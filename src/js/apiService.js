import { loadStart, loadStop } from './loadingSpinner';

import { notificationError } from './notifications';

export const API_KEY = '62f46feb65c2319fb0db62c2c080ca35';
export const BASE_URL = 'https://api.themoviedb.org';
export const URL_FOR_FETCH_BY_NAME =
  'https://api.themoviedb.org/3/search/movie';
export const MOVIE_POSTER = 'https://image.tmdb.org/t/p/w500';

export class FetchMoviesApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchTrendingMovies() {
    try {
      loadStart();
      const response = await fetch(
        `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`
      );
      const data = response.json();
      loadStop();

      return data;
    } catch (error) {
      notificationError(`Error!!!  ${error}`);
    }
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

export async function fetchHomeTrendingMovies() {
  try {
    loadStart();
    const response = await fetch(
      `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`
    );
    const data = response.json();
    loadStop();
    return data;
  } catch (error) {
    notificationError(`Error!!!  ${error}`);
  }
}

export async function fetchGenres() {
  try {
    const response = await fetch(
      `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}`
    );
    const dataGenres = response.json();
    return dataGenres;
  } catch (error) {
    notificationError(`Error!!!  ${error}`);
  }
}

export async function fetchTrailer(filmId) {
  try {
    const response = await fetch(
      `${BASE_URL}/3/movie/${filmId}/videos?api_key=${API_KEY}`
    );
    const dataTrailer = response.json();
    return dataTrailer;
  } catch (error) {
    notificationError(`Error!!!  ${error}`);
  }
}

export function fetchMovies(inputtedName) {
  return fetch(
    `${URL_FOR_FETCH_BY_NAME}?api_key=${API_KEY}&query=${inputtedName}`
  ).then(response => response.json());
}

export let getElem = selector => document.querySelector(selector);
