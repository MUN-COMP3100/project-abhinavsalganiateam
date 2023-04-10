import React, { useEffect, useState } from "react";
// import "./movieList.css";
import { useParams } from "react-router-dom";
import Cards from "./card";

const TvList = () => {
  const [movieList, setMovieList] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const { type } = useParams();

  const getData = () => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-CA&page=2&region=CA`)
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  const getDataUpcoming = () => {
    fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`).then((res) =>
      res.json().then((data) => setUpcoming(data.results))
    );
  };

  useEffect(() => {
    getData();
    getDataUpcoming();
  }, [type]);

  return (
    <div>
      <div id="popular" className="p-[3rem] pt-0 bg-inherit text-white">
        <h2 className="text-[1.75rem] m-[2.5rem]">POPULAR</h2>
        <div className="flex flex-wrap justify-center overflow-scroll scrollbar-hide gap-2">
          {movieList.map((movie, index) => (
            <Cards movie={movie} key={index} />
          ))}
        </div>
      </div>
      <div id="upcoming" className="p-[3rem] pt-0 bg-inherit text-white">
        <h2 className="text-[1.75rem] m-[2.5rem]">TOP RATED</h2>
        <div className="flex flex-wrap justify-center overflow-scroll scrollbar-hide gap-2">
          {upcoming.map((movie, index) => (
            <Cards movie={movie} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TvList;
