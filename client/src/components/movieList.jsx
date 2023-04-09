import React, { useEffect, useState } from "react";
// import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "./card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="p-[3rem] pt-0 bg-inherit text-white">
      <h2 className="text-[1.75rem] m-[2.5rem]">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="flex flex-wrap justify-center overflow-scroll scrollbar-hide gap-2">
        {movieList.map((movie, index) => (
          <Cards movie={movie} key={index} className="" />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
