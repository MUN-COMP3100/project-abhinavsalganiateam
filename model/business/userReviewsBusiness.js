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
    if (objs.length > 0) {
      return objs;
    } else {
      return "no reviews with this user id";
    }
  }

  static async getReviewByMovie(title) {
    let collection = await getCollection();
    let objs = await collection.find({ movie_title: title }).toArray();
    return objs;
  }

  static async updateReview(Review, userid, movie_title) {
    let collection = await getCollection();
    let objs = await collection.updateOne(
      { userid: userid, movieid: movie_title },
      { $set: { review: Review.review, rating: Review.rating } }
    );
    return objs;
  }

  static async deleteReview(userId, movieTitle) {
    let collection = await getCollection();
    let objs = collection.deleteOne({ userid: userId, movie_title: movieTitle });
    return objs;
  }
}
