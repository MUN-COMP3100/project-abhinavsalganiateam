import { MovieBusiness } from "../model/business/movieBusiness.js";
import { movieDAO } from "../model/DAO/movieDAO.js";

export async function getAllMovies(req, res) {
  let objs = await MovieBusiness.getAll();
  console.log(objs.length + " item(s) sent.");
  res.send(objs);
}

export async function GetMovie(req, res) {
  let name = req.params.name;
  let movie = await MovieBusiness.get_movie(name);
  res.send(movie);
}

export async function GetMovieByYear(req, res) {
  let year = req.params.year;
  let movie = await MovieBusiness.get_movie_by_year(year);
  res.json(movie);
}

export async function GetMovieByGenre(req, res) {
  let genre = req.params.genre;
  let movie = await MovieBusiness.get_movie_by_genre(genre);
  res.send(movie);
}

export async function GetMovieByDirector(req, res) {
  let director = req.params.director;
  let movie = await MovieBusiness.get_movie_by_director(director);
  res.send(movie);
}

export async function GetMovieByActor(req, res) {
  let actor = req.params.actor;
  let movie = await MovieBusiness.get_movie_by_actor(actor);
  res.send(movie);
}

export async function AddMovie(req, res) {
  let movie = new movieDAO(
    req.body.color,
    req.body.director_name,
    req.body.duration,
    req.body.gross,
    req.body.genres,
    req.body.actor_1_name,
    req.body.movie_title,
    req.body.num_voted_users,
    req.body.language,
    req.body.country,
    req.body.budget,
    req.body.title_year,
    req.body.imdb_score
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
  let name = req.params.name;
  let result = await MovieBusiness.delete_movie(name);
  res.json(result);
}
