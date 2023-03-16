import { UserReviewDTO } from "../model/DAO/userReviewDAO.js";
import { userReviewBusiness } from "../model/business/userReviewsBusiness.js";

export async function getAll(req, res) {
  let objs = await userReviewBusiness.getAll();
  console.log(objs.length + " item(s) sent.");
  res.send(objs);
}

export async function GetReviewByMovie(req, res) {
  let title = req.params.movie_title;
  let reviews = await userReviewBusiness.getReviewByMovie(title);
  res.send(reviews);
}

export async function GetReviewByUser(req, res) {
  let user = req.params.userId;
  let reviews = await userReviewBusiness.getReview(user);
  res.send(reviews);
}

export async function AddReview(req, res) {
  let review = new UserReviewDTO(req.body.userId, req.body.movie_title, req.body.review, req.body.rating);
  let result = await userReviewBusiness.addReview(review);
  res.json(result);
}

export async function UpdateReview(req, res) {
  let review = new UserReviewDTO(req.body.userId, req.body.movie_title, req.body.review, req.body.rating);
  let result = await userReviewBusiness.updateReview(review);
  res.json(result);
}

export async function DeleteReview(req, res) {
  let review = new UserReviewDTO(req.body.userId, req.body.movie_title, req.body.review, req.body.rating);
  let result = await userReviewBusiness.deleteReview(review);
  res.json(result);
}
