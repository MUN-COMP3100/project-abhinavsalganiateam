import React from "react";
import Home from "./home";
import MovieList from "./movieList";
function Main() {
  return (
    <div className="flex flex-col bg-[#1d1d1f] w-full">
      <Home />
      <MovieList />
      {/* <Footer /> */}
    </div>
  );
}

export default Main;
