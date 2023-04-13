import Main from "./components/Main";
import AuthPage from "./components/authPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import NotFoundPage from "./components/notFoundPage";
import TvShows from "./components/tvShows";
import Movies from "./components/movies";
import ProfilePage from "./components/profilePage";
import MovieDetails from "./components/movieDetails";

import { useState } from "react";
function App() {
  const [userdata, setUser] = useState(null);

  return (
    <div className="App">
      {/* <Router> */}
      <NavBar user={userdata} onLogout={setUser} />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/auth" element={<AuthPage setUserState={setUser} />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies/:movieId" element={<Main />} />  */}
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
        <Route path="/tv" element={<TvShows />} />
        {/* <Route path="/tv/:tvId" element={<Main />} /> */}
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/profile/:id" element={<ProfilePage userState={userdata} setUserState={setUser} />} />
      </Routes>
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
