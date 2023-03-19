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

/**
 * Endpoint to get the details of a single movie
 * @param {*} req - HTTP request object
 * @param {*} res - HTTP response object
 */
export const getMovieDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await MovieBusiness.getMovieDetails(id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Endpoint to add a new movie
 * @param {*} req - HTTP request object
 * @param {*} res - HTTP response object
 */
export const addMovie = async (req, res) => {
  try {
    const { title, description, releaseDate, runtime, genres, cast } = req.body;
    const movie = await MovieBusiness.addMovie(title, description, releaseDate, runtime, genres, cast);
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Endpoint to update the details of a movie
 * @param {*} req - HTTP request object
 * @param {*} res - HTTP response object
 */
export const updateMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, releaseDate, runtime, genres, cast } = req.body;
    const movie = await MovieBusiness.updateMovie(id, title, description, releaseDate, runtime, genres, cast);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * Endpoint to delete a movie
 * @param {*} req - HTTP request object
 * @param {*} res - HTTP response object
 */
export const deleteMovie = async (req, res) => {
  try {
    const id = req.params.id;
    await MovieBusiness.deleteMovie(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
