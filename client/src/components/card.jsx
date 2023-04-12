import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { RiStarSFill } from "react-icons/ri";


const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <div className="cards">
          <Link to={`/movieDetails/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
          <div className="inline-block relative border-[10px] overflow-hidden m-[0.19rem] cursor-pointer min-w-[200px] h-[300px] z-0 border-[rgb(99,99,99)] bg-gradient-to-r from-[rgb(0,0,0,0)] to-[rgb(0,0,0,1)] drop-shadow-md">
              <img alt={movie.title} className="h-[300px]" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                <div className="text-lg font-bold mb-1">{movie.title}</div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <div>{movie.vote_average}</div>
                    <RiStarSFill className="text-[#ccd141]" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cards;