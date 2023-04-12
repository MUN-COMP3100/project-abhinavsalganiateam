import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AddReviewModal from "./addReviewModal";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [watchProviders, setWatchProviders] = useState(null);

  useEffect(() => {
    getMovieDetails(id);
    getMovieReviews(id);
    getWatchProviders(id);
  }, [id]);

  const getMovieDetails = (movieId) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  const getMovieReviews = (movieId) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`)
      .then((res) => res.json())
      .then((data) => setReviews(data.results));
  };

  const getWatchProviders = (movieId) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=4e44d9029b1270a757cddc766a1bcb63`)
      .then((res) => res.json())
      .then((data) => setWatchProviders(data.results.CA));
  };

  const handleAddReview = () => {
    setIsOpen(true);
  };

  const handleAddReviewClose = () => {
    setIsOpen(false);
  };

  const handleAddReviewSubmit = (review) => {
    console.log(`Username: ${review.username}, Review: ${review.review}`);
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#1d1d1f] flex flex-col items-center justify-center">
      <div className="bg-black drop-shadow-lg rounded-md p-10 w-full sm:w-3/4 lg:w-1/2 text-white">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="text-blue-500 text-lg hover:underline">
              &lt; Back to Home
            </Link>
            <h2 className="text-3xl font-semibold text-center">{movie.original_title}</h2>
            <div className="invisible w-1/5"></div>
          </div>
  
          <div className="flex flex-col lg:flex-row mb-8">
            <div className="w-full lg:w-1/2 lg:mr-8">
              <img
                className="rounded-md w-full"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="movie poster"
              />
            </div>
  
            <div className="flex flex-col lg:w-1/2">
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
            </div>
          </div>
  
          <div className="my-5">
            <label className="block text-lg font-medium mb-2">Watch it here:</label>
            {watchProviders ? (
              <div className="grid gap-4">
                {watchProviders.flatrate && (
                  <div>
                    <label className="text-lg font-medium mb-2">Subscription:</label>
                    {watchProviders.flatrate.map((provider) => (
                      <p key={provider.provider_id} className="text-gray-100 text-lg">
                        {provider.provider_name}
                      </p>
                    ))}
                  </div>
                )}
                {watchProviders.rent && (
                  <div>
                    <label className="text-lg font-medium mb-2">Rent:</label>
                    {watchProviders.rent.map((provider) => (
                      <p key={provider.provider_id} className="text-gray-100 text-lg">
                        {provider.provider_name}
                      </p>
                    ))}
                  </div>
                )}
                {watchProviders.buy && (
                  <div>
                    <label className="text-lg font-medium mb-2">Buy:</label>
                    {watchProviders.buy.map((provider) => (
                      <p key={provider.provider_id} className="text-gray-100 text-lg">
                        {provider.provider_name}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-100">Watch provider information not available.</p>
            )}
          </div>
  
        <div className="my-5">
          <label className="block text-lg font-medium mb-2">Reviews:</label>
          <button
            className="mt-5 px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            onClick={() => setIsOpen(true)}
          >
            Add Review
          </button>
          {reviews.length > 0 ? (
            <div className="grid gap-6 mt-5">
              {reviews.map((review) => (
                <div key={review.id} className="bg-gray-800 rounded-lg p-4">
                  <p className="text-lg font-semibold text-gray-100">{review.author}</p>
                  <p className="text-gray-300">{review.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-100">No reviews found.</p>
          )}
          
        </div>
  
        {isOpen && (
          <AddReviewModal closeModal={handleAddReviewClose} handleAddReview={handleAddReviewSubmit} />
        )}
      </div>
    </div>
    </div>
  );
};

export default MovieDetails;

