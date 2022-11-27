import { fetchMovies, fetchGernes } from './getHomeFilms';

export async function renderMovies() {
  const dataMovies = await fetchMovies();
  const dataGernes = await fetchGernes();
  console.log('dataGernes', dataGernes);
  console.log('dataMovies', dataMovies);

  const markup = dataMovies.results.map(movie => {
    const {
      poster_path,
      original_title,
      release_date,
      vote_average,
      id,
      genre_ids,
    } = movie;
    // console.log(`
    // <div>
    //   <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="">
    //   <p>title ${original_title}</p>
    //   <p>date ${release_date.slice(0, 4)}</p>
    //   <p>Vote ${vote_average}</p>
    //   <p>Id ${id}</p>
    //   <p>GERNE Ids ${genre_ids}</p>
    // </div>
    // `);
  });
}
