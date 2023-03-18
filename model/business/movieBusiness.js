import { getDb } from "../../utils/db.mjs";

async function get_movies() {
  let db = await getDb();
  return await db.collection("movies");
}

export class MovieBusiness {
  static async add_movie(movie) {
    try {
      let collection = await get_movies();
      let result = await collection.insertOne(movie);
      return "Movie added successfully";
    } catch (err) {
      throw err;
    }
  }

  static async getAll() {
    let collection = await get_movies();
    let objs = await collection.find({}).toArray();
    return objs;
  }

  static async get_movie(name) {
    let collection = await get_movies();
    let objs = await collection.find({ movie_title: name }).toArray();
    return objs;
  }

  static async get_movie_by_year(year) {
    let collection = await get_movies();
    let objs = await collection.find({ title_year: year }).toArray();
    return objs;
  }

  static async get_movie_by_genre(genre) {
    let collection = await get_movies();
    let objs = await collection.find({ genres: genre }).toArray();
    // console.log(objs);
    return objs;
  }

  static async get_movie_by_director(director) {
    let collection = await get_movies();
    let objs = await collection.find({ director_name: director }).toArray();
    return objs;
  }

  static async get_movie_by_actor(actor) {
    let collection = await get_movies();
    let objs = await collection.find({ actor_1_name: actor }).toArray();
    return objs;
  }

  static async delete_movie(title) {
    let collection = await get_movies();
    let objs = await collection.deleteOne({ movie_title: title });
    return objs;
  }
}
