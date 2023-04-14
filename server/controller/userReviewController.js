import { UserReviewDTO } from "../model/DAO/userReviewDAO.js";
import { userReviewBusiness } from "../model/business/userReviewsBusiness.js";

// movie title == movie id

export async function getAllReviews(req, res) {
  let objs = await userReviewBusiness.getAll();
  console.log(objs.length + " item(s) sent.");
  res.send(objs);
}

export async function GetReviewByMovie(req, res) {
  let id = req.params.movie_id;
  let reviews = await userReviewBusiness.getReviewByMovie(id);
  res.send(reviews);
}

export async function GetReviewByUser(req, res) {
  let user = req.params.id;
  let reviews = await userReviewBusiness.getReview(user);
  res.send(reviews);
}

export async function AddReview(req, res) {
  let review = new UserReviewDTO(req.body.userid, req.body.movie_id, req.body.review, req.body.rating);
  let result = await userReviewBusiness.addReview(review);
  res.json(result);
}

export async function UpdateReview(req, res) {
  let userid = req.query.userid;
  let movie_id = req.query.movie_id;
  let review = new UserReviewDTO(req.body.userid, req.body.movie_id, req.body.review, req.body.rating);
  let result = await userReviewBusiness.updateReview(review, userid, movie_id);
  res.json(result);
}

export async function DeleteReview(req, res) {
  let userId = req.query.userid;
  let movie_id = req.query.movieid;
  let result = await userReviewBusiness.deleteReview(userId, movie_id);
  res.json(result);
}
