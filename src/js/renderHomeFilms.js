import { fetchHomeTrendingMovies, fetchGenres } from './apiService';
import { createMovieCard } from './movieCardRender';
import { pagination } from './pagination';

export async function renderMovies() {
  try {
    const dataMovies = await fetchHomeTrendingMovies();
    const dataGenres = await fetchGenres();
    const genresList = dataGenres.genres;
    const moviesList = dataMovies.results;

    const movieInfo = dataMerge(moviesList, genresList);

    createMovieCard(movieInfo);

    let pageCount = 5;
    
    pagination(pageCount, movieInfo);


  } catch (error) {
    console.log(error.message);
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
