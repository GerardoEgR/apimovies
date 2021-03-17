//INITIAL VALUES
const API_KEY = '7056a360ca4c8c85f6202c75aaa216cb';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=7056a360ca4c8c85f6202c75aaa216cb';

function generateUrl(path) {
  const url = `https://api.themoviedb.org/3${path}?api_key=7056a360ca4c8c85f6202c75aaa216cb`;
  return url;
}

function resquesMovies(url, oncomplete, onError) {
  fetch(url)
    .then((res) => res.json())
    .then(oncomplete)
    .catch((onError) => {
      console.log('Error: ', error);
    });
}

function searchMovie(value) {
  const path = '/search/movie';
  const url = generateUrl(path) + '&query=' + value;

  const renderSearch = renderSearchMovies.bind({ title: 'Search Result' })
  resquesMovies(url, renderSearch, handleError);
}

function getUpcomingMovies() {
  const path = '/movie/upcoming';
  const url = generateUrl(path);

  const render = renderMovies.bind({ title: 'Upcoming Movies' });
  resquesMovies(url, render, handleError);
}

function getTopRatedMovies() {
  const path = '/movie/top_rated';
  const url = generateUrl(path);

  const render = renderMovies.bind({ title: 'Top Rated Movies' });
  resquesMovies(url, render, handleError);
}

function getPopularMovies() {
  const path = '/movie/popular';
  const url = generateUrl(path);

  const render = renderMovies.bind({ title: 'Popular Movies' });
  resquesMovies(url, render, handleError);
}
