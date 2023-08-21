export const fetcher = (...args) => fetch(...args).then((res) => res.json())
export const API_KEY = '5e6b78a5f9690b9cb75bb71bb40ab0b4'
const tmdbEndPoint = `https://api.themoviedb.org/3/movie`
const tmdbImageEndPoint = `https://image.tmdb.org/t/p/original`

export const tmdbAPI = {
  getTrendingMovies: (page = 1) => `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`,
  getMovieList: (type) => `${tmdbEndPoint}/${type}?api_key=${API_KEY}`,
  getMovieDetail: (movieId) => `${tmdbEndPoint}/${movieId}?api_key=${API_KEY}`,
  getMovieMeta: (movieId, type) => `${tmdbEndPoint}/${movieId}/${type}?api_key=${API_KEY}`,
  getMoviesSearch: (query, page) => `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
  imageOriginal: (path) => `${tmdbImageEndPoint}/${path}`,
  image500: (path) => `https://image.tmdb.org/t/p/w500/${path}`
}
