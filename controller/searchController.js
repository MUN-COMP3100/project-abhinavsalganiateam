import { MovieBusiness } from "../business/movieBusiness.js";

export const searchMovies = async (req, res) => {
  try {
    const query = req.query.q;
    const movies = await MovieBusiness.searchMovie(query);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

