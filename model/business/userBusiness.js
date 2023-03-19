import { UserDAO } from "../DAO/userDAO.js";
import { connectToDB, getDb } from "../../utils/db.mjs";

async function getCollection() {
  let db = await getDb();
  return await db.collection("users");
}

export class UserBusiness {
  //userid, name, email, password, role
  static async add_user(user) {
    try {
      let collection = await getCollection();
      let result = await collection.insertOne(user);
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

  static async get_user(userId) {
    let collection = await getCollection();
    let objs = await collection.find({ userid: userId }).toArray();
    return objs;
  }

  static async get_user_by_email(email) {
    let collection = await getCollection();
    let objs = await collection.find({ email: email }).toArray();
  }

  static async update_user(user) {
    let collection = await getCollection();
    let objs = await collection.updateOne(
      { userid: user.userid },
      { $set: { name: user.userid, email: user.email, password: user.password, role: user.role } }
    );
    return objs;
  }

  static async delete_user(userId) {
    let collection = await getCollection();
    let objs = await collection.deleteOne({ userid: userId });
    return objs;
  }

  static async login(email, password) {
    let collection = await getCollection();
    let objs = await collection.find({ email: email, password: password }).toArray();
    if (objs.length > 0) {
      return true;
    }
    return false;
  }

  static async validate_userid(userid) {
    let collection = await getCollection();
    let objs = await collection.find({ userid: userid }).toArray();
    if (objs.length > 0) {
      return true;
    }
    return false;
  }
}
