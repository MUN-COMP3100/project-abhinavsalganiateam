import { UserDAO } from "../model/DAO/userDAO.js";
import { UserBusiness } from "../model/business/userBusiness.js";

export async function adduser(req, res) {
  let user = new UserDAO(req.body.userid, req.body.name, req.body.email, req.body.password);
  //validate userid and email
  let validate_email = await UserBusiness.validate_email(user.email);
  let validate_userid = await UserBusiness.validate_userid(user.userid);
  console.log(validate_email);
  console.log(validate_userid);
  if (validate_email == true) {
    if (validate_userid == true) {
      let result = await UserBusiness.add_user(user);
      console.log(result);
      return "user added successfully";
    } else {
      console.log("userid already exists");
      res.json("userid already exists");
    }
  } else {
    console.log("email already exists");
    res.json("email already exists");
  }
}

export async function getall_users(req, res) {
  let result = await UserBusiness.getAll();
  res.json(result);
}

export async function get_user(req, res) {
  let userId = req.params.id;
  let result = await UserBusiness.get_user(userId);
  res.json(result);
}

export async function update_user(req, res) {
  let userid = req.params.id;
  let user = new UserDAO(req.body.userid, req.body.name, req.body.email, req.body.password);
  let result = await UserBusiness.update_user(user, userid);
  res.json(result);
}

export async function delete_user(req, res) {
  let userId = req.params.id;
  let result = await UserBusiness.delete_user(userId);
  res.json(result);
}

export async function get_user_by_email(req, res) {
  let email = req.params.email;
  let result = await UserBusiness.get_user_by_email(email);
  res.json(result);
}

export async function login(req, res) {
  let email = req.query.email;
  let password = req.query.password;
  let result = await UserBusiness.login(email, password);
  res.json(result);
}

export async function validate_userid(req, res) {
  let userid = req.params.id;
  let result = await UserBusiness.validate_userid(userid);
  res.json(result);
}

export async function validate_email(req, res) {
  let email = req.params.email;
  let result = await UserBusiness.validate_email(email);
  res.json(result);
}
