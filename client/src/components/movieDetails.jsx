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

    const handleAddReviewOpen = () => {
    setIsOpen(true);
  };

  const handleAddReviewClose = () => {
    setIsOpen(false);
  };

  const handleAddReviewSubmit = (review) => {
    console.log(`Username: ${review.username}, Review: ${review.review}`);
    setIsOpen(false);
    setReviews((prevReviews) => [{ author: review.username, content: review.review }, ...prevReviews]);
  };

  return (
    <div className="min-h-screen w-full bg-[#1d1d1f] flex flex-col items-center justify-center">
      <div className=" mt-[80px] bg-black drop-shadow-lg rounded-md p-10 w-full sm:w-3/4 lg:w-full text-white">
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="text-blue-500 text-lg hover:underline">
              &lt; Back to Home
            </Link>
            <h2 className="text-3xl font-semibold text-center">{movie.original_title}</h2>
            <div className="invisible w-1/5"></div>
          </div>

          <div className="flex mb-8">
            <div className="w-[1000px] h-[100%] lg:mr-8">
              <img className="rounded-md " src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="movie poster" />
            </div>

            <div className="flex flex-row w-full justify-center items-center">
              <div className="flex flex-col w-full p-3">
                <div className="my-5">
                  <label className="block text-lg font-medium mb-2">Genres:</label>
                  <p className="text-gray-100 text-lg">
                    {movie.genres && movie.genres.map((genre, index) => <span key={index}>{genre.name} </span>)}
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

              <div className="rounded-md bg-slate-900 w-full h-[100%] p-3 justify-center items-center flex flex-col drop-shadow-lg shadow-[#1d1d1f] shadow-lg">
                <label className="block text-lg font-medium mb-2">Watch it here:</label>
                {watchProviders ? (
                  <div className="grid gap-4 grid-flow-col-dense ">
                    {watchProviders.flatrate && (
                      <div className="p-3 flex flex-col bg-slate-700 rounded-md drop-shadow-md">
                        <label className="text-lg font-medium mb-2">Subscription:</label>
                        {watchProviders.flatrate.map((provider) => (
                          <p key={provider.provider_id} className="text-gray-100 text-lg">
                            {provider.provider_name}
                          </p>
                        ))}
                      </div>
                    )}
                    {watchProviders.rent && (
                      <div className="p-3 flex flex-col bg-slate-700 rounded-md drop-shadow-md">
                        <label className="text-lg font-medium mb-2">Rent:</label>
                        {watchProviders.rent.map((provider) => (
                          <p key={provider.provider_id} className="text-gray-100 text-lg">
                            {provider.provider_name}
                          </p>
                        ))}
                      </div>
                    )}
                    {watchProviders.buy && (
                      <div className="p-3 flex flex-col bg-slate-700 rounded-md drop-shadow-md">
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
            </div>
          </div>
          <div className="my-5">
            <label className="block text-lg font-medium mb-2">Reviews:</label>
            <button
              className="mt-5 px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              onClick={handleAddReviewOpen}>
              Add Review
            </button>
            {reviews ? (
              <div className="flex flex-col lg:flex-row h-[550px] lg:h-[100%] gap-6 mt-5 overflow-scroll scrollbar-hide snap-y lg:snap-x snap-proximity">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-gray-800 rounded-lg p-4 w-full scale-[85%] snap-start">
                    <p className="text-lg font-semibold text-gray-100">{review.author}</p>
                    <p className="text-gray-300 text-md p-2">{review.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-100">Be the first to review this movie!</p>
            )}
          </div>

          <AddReviewModal isOpen={isOpen} handleClose={handleAddReviewClose} handleSubmit={handleAddReviewSubmit} />

        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
