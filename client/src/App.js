import Main from "./components/Main";
import AuthPage from "./components/authPage";
import {Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import NotFoundPage from "./components/notFoundPage";
function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <NavBar />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;
