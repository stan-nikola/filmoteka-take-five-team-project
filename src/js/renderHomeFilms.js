import { fetchHomeTrendingMovies, fetchGenres } from './apiService';

export async function renderMovies() {
  const dataMovies = await fetchHomeTrendingMovies();
  const dataGenres = await fetchGenres();
  const genresList = dataGenres.genres;
  const moviesList = dataMovies.results;

  const movieInfo = dataMerge(moviesList, genresList);

  const markup = movieInfo.map(movie => {
    const {
      poster_path,
      original_title,
      release_date,
      vote_average,
      id,
      genre_ids,
      genres,
    } = movie;
  });
}

const dataMerge = function (allMovies, allGenres) {
  return allMovies.map(movie => ({
    ...movie,
    genres: movie.genre_ids.map(id => {
      return allGenres.find(element => element.id === id)?.name;
    }),
  }));
};
