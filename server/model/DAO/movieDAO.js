export class movieDAO {
  constructor(
    color,
    director_name,
    duration,
    gross,
    genres,
    actor_1_name,
    movie_title,
    num_voted_users,
    language,
    country,
    budget,
    title_year,
    imdb_score
  ) {
    this.color = color;
    this.director_name = director_name;
    this.duration = duration;
    this.gross = gross;
    this.genres = genres;
    this.actor_1_name = actor_1_name;
    this.movie_title = movie_title;
    this.num_voted_users = num_voted_users;
    this.language = language;
    this.country = country;
    this.budget = budget;
    this.title_year = title_year;
    this.imdb_score = imdb_score;
  }
}
