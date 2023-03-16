import { getDb } from "../Utils/db.js.js";

async function get_movies() {
  let db = await getDb();
  return await db.collection("movies");
}

export class MovieBusiness {
  async add_movie(movie) {
    try {
      let collection = await get_movies();

      let result = await collection.insertOne(movie);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async getAll() {
    let collection = await get_movies();
    let objs = await collection.find({}).toArray();
    return objs;
  }

  static async get_movie(id) {
    let collection = await get_movies();
    let objs = await collection.find({ id: id }).toArray();
    return objs;
  }

  static async get_movie_by_title(title) {
    let collection = await get_movies();
    let objs = await collection.find({ title: title }).toArray();
    return objs;
  }

  static async get_movie_by_year(year) {
    let collection = await get_movies();
    let objs = await collection.find({ year: year }).toArray();
    return objs;
  }

  static async get_movie_by_genre(genre) {
    let collection = await get_movies();
    let objs = await collection.find({ genre: genre }).toArray();
    return objs;
  }

  static async get_movie_by_director(director) {
    let collection = await get_movies();
    let objs = await collection.find({ director: director }).toArray();
    return objs;
  }

  static async get_movie_by_actor(actor) {
    let collection = await get_movies();
    let objs = await collection.find({ actor: actor }).toArray();
    return objs;
  }
}
