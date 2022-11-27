const API_KEY = '62f46feb65c2319fb0db62c2c080ca35';
const BASE_URL = 'https://api.themoviedb.org';

export class FetchMoviesApi{
    constructor(){
        this.searchQuery = ''
        this.page = 1
    }

    async fetchTrendingMovies() {
        try {
          const response = await fetch(
            `${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`
          );
          const data = response.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      }

    get query() {
        return this.searchQuery
    }
    set query(newQuery) {
        this.searchQuery = newQuery
    }
}