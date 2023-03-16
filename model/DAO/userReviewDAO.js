export class UserReviewDTO {
  constructor(id, userid, movieid, review, rating) {
    this.id = id;
    this.userid = userid;
    this.movieid = movieid;
    this.review = review;
    this.rating = rating;
  }
}
