import { fetchHomeTrendingMovies, fetchGenres } from './apiService';
import { createMovieCard } from './movieCardRender';
import { notificationError } from './notifications';
import { Paginator, paginationElementList } from './pagination';

export async function renderMovies() {
  try {
    const dataMovies = await fetchHomeTrendingMovies();
    const dataGenres = await fetchGenres();
    const genresList = dataGenres.genres;
    const moviesList = dataMovies.results;

    const movieInfo = dataMerge(moviesList, genresList);

    createMovieCard(movieInfo);

    const trendPagination = new Paginator(
      1,
      dataMovies.total_pages,
      paginationElementList
    );
    trendPagination.render();
  } catch (error) {
    notificationError(error.message);
  }
}

export const dataMerge = function (allMovies, allGenres) {
  return allMovies.map(movie => ({
    ...movie,
    genres: movie.genre_ids.map(id => {
      return allGenres.find(element => element.id === id)?.name;
    }),
  }));
};
