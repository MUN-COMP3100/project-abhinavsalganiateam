import Main from "./components/Main";
import AuthPage from "./components/authPage";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import NotFoundPage from "./components/notFoundPage";
import TvShows from "./components/tvShows";
import Movies from "./components/movies";
import ProfilePage from "./components/profilePage";
function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <NavBar />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies/:movieId" element={<Main />} /> */}
        <Route path="/tv" element={<TvShows />} />
        {/* <Route path="/tv/:tvId" element={<Main />} /> */}
        <Route path="/*" element={<NotFoundPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
