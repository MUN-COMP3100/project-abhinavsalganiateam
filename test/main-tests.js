import { strictEqual, fail } from "assert";
import { UserDAO } from "../model/DAO/userDAO.js";
import axios from "axios";
const create = axios.create;

var myurl = "http://localhost:3000";
// Let's configure the base url
const instance = create({
  baseURL: myurl,
  timeout: 5000, //5 seconds max
  headers: { "content-type": "application/json" },
});

describe("IMDB Clone app - testing with Mocha", function () {
  describe("Test Models", function () {
    describe("validate password ", function () {
      it("Fail 1. Test invalid password", function () {
        let user = new UserDAO("johnsmi", "John Smith", " johnsmith@example.com", "7vM#tP!z");
        strictEqual(user.validatePassword("7vM#tP!z"), false);
      });
    });
  });
  describe("Test API calls", function () {
    describe("Movies ", async function () {});
  });
});
