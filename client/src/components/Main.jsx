import React from "react";
import Header from "./navbar";
import Home from "./home";
import MovieList from "./movieList";
function Main() {
  return (
    <div className="flex flex-col bg-[#1d1d1f]">
      <Header />
      <Home />
      <MovieList />
    </div>
  );
}

export default Main;
