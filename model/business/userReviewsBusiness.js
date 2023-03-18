import { getDb } from "../../utils/db.mjs";

async function create_userReviewCol() {
  let db = await getDb();
  let collection = await db.createCollection("userReviews");

  return collection;
}

async function getCollection() {
  let db = await getDb();
  let collection = await db.collection("userReviews");
  if (collection === null) {
    collection = await create_userReviewCol();
  }
  return collection;
}

export class userReviewBusiness {
  static async addReview(Review) {
    try {
      let collection = await getCollection();
      let result = await collection.insertOne(Review);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async getAll() {
    let collection = await getCollection();
    let objs = await collection.find({}).toArray();
    return objs;
  }

  static async getReview(userid) {
    let collection = await getCollection();
    let objs = await collection.find({ userid: userid }).toArray();
  }

  static async getReviewByMovie(title) {
    let collection = await getCollection();
    let objs = await collection.find({ movie_title: title }).toArray();
    return objs;
  }

  static async updateReview(Review) {
    let collection = await getCollection();
    let objs = await collection.updateOne(
      { userid: Review.userid, movieid: Review.movieid },
      { $set: { review: Review.review, rating: Review.rating } }
    );
    return objs;
  }

  static async deleteReview(userId, movieTitle) {
    let collection = await getCollection();
    let objs = await collection.deleteOne({
      userid: userId,
      movie_title: movieTitle,
    });
    return objs;
  }
}
