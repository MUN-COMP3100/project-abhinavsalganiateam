import { UserDAO } from "../DAO/userDAO.js";
import { connectToDB, getDb } from "../../utils/db.mjs";

async function getCollection() {
  let db = await getDb();
  return await db.collection("users");
}

export class UserBusiness {
  //userid, name, email, password, role
  static async add_user(user) {
    //check if user already exists
    let collection = await getCollection();
    let result = await collection.insertOne(user);
    return result;
  }

  static async getAll() {
    let collection = await getCollection();
    let objs = await collection.find({}).toArray();
    return objs;
  }

  static async get_user(userId) {
    let collection = await getCollection();
    let objs = await collection.find({ userid: userId }).toArray();
    if (objs.length > 0) {
      return objs;
    } else {
      return "user not found";
    }
  }

  static async get_user_by_email(email) {
    let collection = await getCollection();
    let objs = await collection.find({ email: email }).toArray();
    return objs;
  }

  static async update_user(user, userId) {
    let collection = await getCollection();
    let objs = await collection.updateOne({ userid: userId }, { $set: { name: user.name, email: user.email, password: user.password } });
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
      return false;
    }
    return true;
  }

  static async validate_email(email) {
    let collection = await getCollection();
    let objs = await collection.find({ email: email }).toArray();
    if (objs.length > 0) {
      return false;
    }
    return true;
  }
}
