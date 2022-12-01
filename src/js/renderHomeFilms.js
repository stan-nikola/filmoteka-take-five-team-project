import { fetchHomeTrendingMovies, fetchGenres } from './apiService';
import { createMovieCard } from './movieCardRender';
import { pagination } from './pagination';

export async function renderMovies() {
  const dataMovies = await fetchHomeTrendingMovies();
  const dataGenres = await fetchGenres();
  const genresList = dataGenres.genres;
  const moviesList = dataMovies.results;

  const movieInfo = dataMerge(moviesList, genresList);

  createMovieCard(movieInfo);

  const pageCount = 8; // временная переменная - после настройки отрисовки заменить на dataMovies.total_pages

  pagination(pageCount, movieInfo);
  
}

export const dataMerge = function (allMovies, allGenres) {
  return allMovies.map(movie => ({
    ...movie,
    genres: movie.genre_ids.map(id => {
      return allGenres.find(element => element.id === id)?.name;
    }),
  }));
};
