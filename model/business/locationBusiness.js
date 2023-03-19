import { getDb } from "../../utils/db.mjs";

async function get_locations() {
  let db = await getDb();
  return await db.collection("locations");
}

export class LocationBusiness {
  static async add_location(location) {
    try {
      let collection = await get_locations();
      let result = await collection.insertOne(location);
      return "Location added successfully";
    } catch (err) {
      throw err;
    }
  }

  static async getAll() {
    let collection = await get_locations();
    let objs = await collection.find({}).toArray();
    return objs;
  }

  static async get_location(name) {
    let collection = await get_locations();
    let objs = await collection.find({ location_name: name }).toArray();
    return objs;
  }

  static async delete_location(name) {
    let collection = await get_locations();
    let objs = await collection.deleteOne({ location_name: name });
    return objs;
  }

  static async searchLocation(query) {
    const regex = new RegExp(query, "i"); // create case-insensitive regex from search query
    const collection = await get_locations();
    const locations = await collection.find({
      $or: [{ location_name: regex }, { city: regex }, { state: regex }], // search in location_name, city, and state fields
    }).toArray();
    return locations;
  }
  
}
