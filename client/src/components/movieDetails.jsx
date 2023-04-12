import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetails(id);
  }, [id]);

  const getMovieDetails = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div className="min-h-screen bg-[#1d1d1f] flex flex-col items-center justify-center">
      <div className="bg-black drop-shadow-lg rounded-md p-10 w-full sm:w-3/4 lg:w-1/2 text-white">
        <h2 className="text-3xl font-semibold mb-8 text-center">{movie.original_title}</h2>

        <div>
          <img
            className="rounded-md w-full"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="movie poster"
          />
          {console.log(movie.poster_path)}
        </div>
        <div className="my-5">
          <label className="block text-lg font-medium mb-2">Genres:</label>
          <p className="text-gray-100 text-lg">
            {movie.genres &&
              movie.genres.map((genre, index) => <span key={index}>{genre.name} </span>)}
          </p>
        </div>
        <div className="my-5">
          <label className="block text-lg font-medium mb-2">Release Date:</label>
          <p className="text-gray-100 text-lg">{movie.release_date}</p>
        </div>
        <div className="my-5">
          <label className="block text-lg font-medium mb-2">Rating:</label>
          <p className="text-gray-100 text-lg">{movie.vote_average} / 10</p>
        </div>
        <div className="my-5">
          <label className="block text-lg font-medium mb-2">Overview:</label>
          <p className="text-gray-100 text-lg">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;