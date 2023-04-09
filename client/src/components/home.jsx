import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { RiStarSFill } from "react-icons/ri";
import MovieList from "./movieList";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);
  return (
    <div className="mt-[80px] flex flex-col bg-inherit w-full">
      <div className="flex w-full h-[600px]">
        <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false}>
          {popularMovies.map((movie, index) => (
            <div className="w-full flex items-center justify-center" key={index}>
              {/* // <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}> */}
              <div className="m-auto w-full">
                <img alt="" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
              </div>
              <div className="absolute p-[5rem] bottom-0 h-[70] flex flex-col w-[100%] justify-end items-start opacity-0 bg-gradient-to-r from-[rgb(0,0,0,0)] to-[rgb(0,0,0,1)] hover:opacity-100 text-[#FFFFFD] transition-opacity delay-[0.3s]">
                <div className="font-bold text-[4rem]  mb-[0.4rem] text-left">{movie ? movie.original_title : ""}</div>
                <div className="text-[2rem] mb-[1rem] flex flex-row justify-center items-center  ">
                  {movie ? movie.release_date : ""}
                  <span className="ml-[3rem]">{movie ? movie.vote_average : ""}</span>
                  <RiStarSFill className="text-[#ccd141]" size={30} />
                </div>
                <div className="italic text-[1.5rem] mb-[0.25rem] flex text-left w-[80%]">{movie ? movie.overview : ""}</div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="w-full mt-[100px]">
        <MovieList />
      </div>
    </div>
  );
};

export default Home;
