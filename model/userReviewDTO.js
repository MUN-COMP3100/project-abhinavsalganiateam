export class UserReviewDTO {
  constructor(id, userid, movieid, review, rating) {
    this.id = id;
    this.userid = userid;
    this.movieid = movieid;
    this.review = review;
    this.rating = rating;
  }

  get id() {
    return this.id;
  }

  set id(id) {
    this.id = id;
  }

  get userid() {
    return this.userid;
  }

  set userid(userid) {
    this.userid = userid;
  }

  get movieid() {
    return this.movieid;
  }

  set movieid(movieid) {
    this.movieid = movieid;
  }

  get review() {
    return this.review;
  }

  set review(review) {
    this.review = review;
  }

  get rating() {
    return this.rating;
  }

  set rating(rating) {
    this.rating = rating;
  }
}
