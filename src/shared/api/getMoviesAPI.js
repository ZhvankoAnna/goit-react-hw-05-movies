import axios from 'axios';

const moviesInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '5b615476b020779510a5261655f8ba93',
    language: 'en-US',
  },
});

export const getMovies = () => {
  return moviesInstance.get('/trending/all/week');
};

export const getMovieById = id => {
  return moviesInstance.get(`/movie/${id}`);
};

export const getMovieCasts = id => {
  return moviesInstance.get(`/movie/${id}/credits`);
};

export const getMovieReview = id => {
  return moviesInstance.get(`/movie/${id}/reviews`);
};

export const getMoviesBySearchQuery = query => {
  return moviesInstance.get('/search/movie', {
    params: {
      query,
    },
  });
};
