export class UserReviewDTO {
  constructor(userid, movieTitle, review, rating) {
    this.userid = userid;
    this.movie_title = movieTitle;
    this.review = review;
    this.rating = rating;
  }
}
