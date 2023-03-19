import { strictEqual, fail } from "assert";
import { UserDAO } from "../model/DAO/userDAO.js";
import { validate_fields } from "../utils/validate-fields.mjs";
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
    describe("Testing user inputs (email, password)", function () {
      it("Test if user is invalid function (Invalid password)", async function () {
        let user = new UserDAO("JoSmith", "John Smith", "johnsmith@example.com", "asdasdad");
        strictEqual(await validate_fields(user.name, user.email, user.password), false);
      });
      it("Test if user is invalid function (Invalid Email)", async function () {
        let user = new UserDAO("JoSmith", "John Smith", "johnsmithexample.com", "7vM#tP!z");
        strictEqual(await validate_fields(user.name, user.email, user.password), false);
      });

      it("Test if user email is valid", async function () {
        let user = new UserDAO("JoSmith", "John Smith", "jonh@eam.com", "7vM#tP!z");
        strictEqual(await validate_fields(user.name, user.email, user.password), true);
      });

      it("Test if user password is valid", async function () {
        let user = new UserDAO("JoSmith", "John Smith", "jonh@eam.com", "7vM#tP!z");
        strictEqual(await validate_fields(user.name, user.email, user.password), true);
      });
    });
    describe("Test API calls", function () {
      describe("Movies ", async function () {
        it("1. pass - add movie ", async function () {
          let data = {
            color: "Color",
            director_name: "James Cameron",
            duration: 178,
            gross: 760505847,
            genres: "Action|Adventure|Fantasy|Sci-Fi",
            actor_1_name: "CCH Pounder",
            movie_title: "Avatar",
            num_voted_users: 886204,
            language: "English",
            country: "USA",
            budget: 237000000,
            title_year: 2009,
            imdb_score: 7.9,
          };
          let res = await instance.post("/movies", data);
          strictEqual(res.data, "Error. User not inserted in the database.");
        });
      });
    });
  });
});
