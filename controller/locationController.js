import fetch from 'node-fetch';

const API_KEY = 'apikey';
const BASE_URL = 'https://serpapi.com/showtimes-results';

export const getMoviesByLocation = async (location) => {
  const url = `${BASE_URL}?api_key=${API_KEY}&location=${location}`;
  const response = await fetch(url);
  const data = await response.json();
  const movies = data.movies.map((movie) => {
    return {
      title: movie.title,
      release_date: movie.release_date,
      rating: movie.rating,
      theater: movie.theater.name,
      showtimes: movie.showtimes.map((showtime) => {
        return {
          time: showtime.time,
          ticket_uri: showtime.ticket_uri
        };
      })
    };
  });
  return movies;
};
