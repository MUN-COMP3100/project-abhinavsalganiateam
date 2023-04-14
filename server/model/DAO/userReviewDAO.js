export class UserReviewDTO {
  constructor(userid, movie_id, review, rating) {
    this.userid = userid;
    this.movie_id = movie_id;
    this.review = review;
    this.rating = rating;
  }
}
