import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { RiStarSFill } from "react-icons/ri";
import TvList from "./tvList";

const TvShows = () => {
  const [popularTVShows, setPopularTVshows] = useState([]);

  const getposter = () => {
    fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=6f8cd9f03058d4fc70b3413d4ce50bac&language=en-US&page=1")
      .then((res) => res.json())
      .then((data) => setPopularTVshows(data.results));
  };
  useEffect(() => {
    getposter();
  }, []);
  return (
    <div className="flex flex-col bg-inherit w-full">
      <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false}>
        {popularTVShows.map((show, index) => (
          <div className="w-full flex items-center justify-center" key={index}>
            {/* // <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}> */}
            <div className="h-[800px]">
              <img
                alt=""
                src={`https://image.tmdb.org/t/p/original${show && show.backdrop_path}`}
                className="m-auto w-[100%] object-cover"
              />
            </div>
            <div className="absolute p-[5rem] bottom-0 h-[70%] flex flex-col w-[100%] justify-end items-start opacity-100 bg-gradient-to-r from-[rgb(0,0,0,0)] to-[rgb(0,0,0,1)] hover:opacity-100 text-[#FFFFFD] transition-opacity delay-[0.3s]">
              <div className="font-bold text-[4rem]  mb-[0.4rem] text-left">{show ? show.original_name : ""}</div>
              <div className="text-[2rem] mb-[1rem] flex flex-row justify-center items-center  ">
                {show ? show.first_air_date : ""}
                <span className="ml-[3rem]">{show ? show.vote_average : ""}</span>
                <RiStarSFill className="text-[#ccd141]" size={30} />
              </div>
              <div className="italic text-[1.5rem] mb-[0.25rem] flex text-left w-[80%]">{show ? show.overview : ""}</div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="bg-[#1d1d1f]">
        <TvList />
      </div>
    </div>
  );
};

export default TvShows;
