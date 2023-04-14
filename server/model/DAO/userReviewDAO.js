export class UserReviewDTO {
  constructor(userid, movie_id, movie_title, review, rating) {
    this.userid = userid;
    this.movie_id = movie_id;
    this.movie_title = movie_title;
    this.review = review;
    this.rating = rating;
  }
}
