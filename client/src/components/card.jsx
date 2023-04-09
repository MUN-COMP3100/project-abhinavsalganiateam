import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// import { Link } from "react-router-dom";

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
        <div className="text-white">
          {/* // <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}> */}
          <div className="inline-block relative border-[10px] overflow-hidden m-[0.19rem] cursor-pointer min-w-[200px] h-[300px] z-0 border-[rgb(99,99,99)] bg-gradient-to-r from-[rgb(0,0,0,0)] to-[rgb(0,0,0,1)] drop-shadow-md">
            <img alt="" className="h-[300px]" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
            {/* <div className="absolute px-[1rem] pt-0 pb-[1rem] bottom-0 h-[290px] flex felx-col w-[85%] justify-end opacity-0 transition-opacity hover:opacity-100">
              <div className="font-bold text-[1.5rem] mb-[0.4rem] text-left">{movie ? movie.original_title : ""}</div>
              <div className="text-[0.75rem] mb-[0.25rem]">
                {movie ? movie.release_date : ""}
                <span className="float-right">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="italic text-[0.75rem] mb-[0.25rem]">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
