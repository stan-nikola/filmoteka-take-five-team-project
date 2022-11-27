import { fetchHomeTrendingMovies, fetchGernes } from './apiService';

export async function renderMovies() {
  const dataMovies = await fetchHomeTrendingMovies();
  const dataGernes = await fetchGernes();
  const gernessList = dataGernes.genres;
  const moviesList = dataMovies.results;

  const movieInfo = dataMerge(moviesList, gernessList);

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
