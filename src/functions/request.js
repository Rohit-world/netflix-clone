const API_KEY = "4fb59e5bfad7fe30e12ff689ebc9f71e";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-USI`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests