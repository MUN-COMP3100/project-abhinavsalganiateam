import { MovieBusiness } from "../Models/movieBusiness";
import { Movie } from "../Models/movieDTO";

export async function getAll(res) {
  let movies = await MovieBusiness.getAll();
  res.json(movies);
}

export async function GetMovie(req, res) {
  let id = req.params.id;
  let movie = await MovieBusiness.get_movie(id);
  res.json(movie);
}

export async function GetMovieByTitle(req, res) {
  let title = req.params.title;
  let movie = await MovieBusiness.get_movie_by_title(title);
  res.json(movie);
}

export async function GetMovieByYear(req, res) {
  let year = req.params.year;
  let movie = await MovieBusiness.get_movie_by_year(year);
  res.json(movie);
}

export async function GetMovieByGenre(req, res) {
  let genre = req.params.genre;
  let movie = await MovieBusiness.get_movie_by_genre(genre);
  res.json(movie);
}

export async function GetMovieByDirector(req, res) {
  let director = req.params.director;
  let movie = await MovieBusiness.get_movie_by_director(director);
  res.json(movie);
}

export async function GetMovieByActor(req, res) {
  let actor = req.params.actor;
  let movie = await MovieBusiness.get_movie_by_actor(actor);
  res.json(movie);
}

export async function AddMovie(req, res) {
  let movie = new Movie(
    req.body.id,
    req.body.title,
    req.body.description,
    req.body.genre,
    req.body.duration,
    req.body.releaseDate,
    req.body.rating,
    req.body.image
  );
  let result = await MovieBusiness.add_movie(movie);
  res.json(result);
}

export async function UpdateMovie(req, res) {
  let movie = new Movie(
    req.body.id,
    req.body.title,
    req.body.description,
    req.body.genre,
    req.body.duration,
    req.body.releaseDate,
    req.body.rating,
    req.body.image
  );
  let result = await MovieBusiness.update_movie(movie);
  res.json(result);
}

export async function DeleteMovie(req, res) {
  let id = req.params.id;
  let result = await MovieBusiness.delete_movie(id);
  res.json(result);
}
