export class movieDTO {
  constructor(id, title, description, genre, duration, releaseDate, rating, image) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.genre = genre;
    this.duration = duration;
    this.releaseDate = releaseDate;
    this.rating = rating;
    this.image = image;
  }

  get id() {
    return this.id;
  }

  set id(id) {
    this.id = id;
  }

  get title() {
    return this.title;
  }

  set title(title) {
    this.title = title;
  }

  get description() {
    return this.description;
  }

  set description(description) {
    this.description = description;
  }

  get genre() {
    return this.genre;
  }

  set genre(genre) {
    this.genre = genre;
  }

  get duration() {
    return this.duration;
  }

  set duration(duration) {
    this.duration = duration;
  }

  get releaseDate() {
    return this.releaseDate;
  }

  set releaseDate(releaseDate) {
    this.releaseDate = releaseDate;
  }

  get rating() {
    return this.rating;
  }

  set rating(rating) {
    this.rating = rating;
  }

  get image() {
    return this.image;
  }

  set image(image) {
    this.image = image;
  }

  toString() {
    return `id: ${this.id}, title: ${this.title}, description: ${this.description}, genre: ${this.genre}, duration: ${this.duration}, releaseDate: ${this.releaseDate}, rating: ${this.rating}, image: ${this.image}`;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      genre: this.genre,
      duration: this.duration,
      releaseDate: this.releaseDate,
      rating: this.rating,
      image: this.image,
    };
  }
}
