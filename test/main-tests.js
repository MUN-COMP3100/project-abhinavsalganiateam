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

      // it("Test if userid is valid add user fail ", async function () {
      //   let data = {
      //     userid: "johnsmith",
      //     name: "John Smith",
      //     email: "JOhnsmoth@exmple.com",
      //     password: "RMk2002.",
      //   };
      //   let res = await instance.post("/user", data);
      //   strictEqual(res.data, "user already exists");
      // });

      // it("Test if userid is valid add user pass ", async function () {
      //   let data = {
      //     userid: "johnsmith1",
      //     name: "John Smith",
      //     email: "john1@email.com",
      //     password: "RMk2002.",
      //   };
      //   let res = await instance.post("/user", data);
      //   strictEqual(res.data, "user added successfully to the database ! ");
      // });
    });
    describe("Test API calls", function () {
      describe("testing user apis  ", async function () {
        it("1. pass - add user ", async function () {
          let data = {
            userid: "johnsmith",
            name: "John Smith",
            email: "JOhnsmoth@exmple.com",
            password: "RMk2002.",
          };
          let res = await instance.post("/user", data);
          strictEqual(res.data.acknowledged, true);
        });

        it("2. pass - get user ", async function () {
          let res = await instance.get("/user/johnsmith");
          // console.log(res.data);
          strictEqual(res.data[0].userid, "johnsmith");
        });

        it("3 . fail - get user ", async function () {
          let res = await instance.get("/user/johnsmit");
          strictEqual(res.data, "user not found");
        });

        it("4. pass - update user ", async function () {
          let data = {
            userid: "johnsmith",
            name: "John Smith",
            email: "rashodk@gmail.com",
          };
          let res = await instance.put("/user/johnsmith", data);
          strictEqual(res.data.modifiedCount, 1);
        });

        it("5. pass - delete user ", async function () {
          let res = await instance.delete("/user/johnsmith");
          strictEqual(res.data.deletedCount, 1);
        });
      });

      describe("testing movie apis  ", async function () {
        it("1. pass - add movie ", async function () {
          let data = {
            color: "Color",
            director_name: "James Cameron",
            duration: 178,
            gross: 760505847,
            genres: "Action|Adventure|Fantasy|Sci-Fi",
            actor_1_name: "CCH Pounder",
            movie_title: "Lorem Ipsum",
            num_voted_users: 886204,
            language: "English",
            country: "USA",
            budget: 237000000,
            title_year: 2009,
            imdb_score: 7.9,
          };
          let res = await instance.post("/movie", data);
          strictEqual(res.data, "Movie added successfully");
        });

        it("2. pass - get movie ", async function () {
          let res = await instance.get("/movie/Lorem Ipsum");

          strictEqual(res.data[0].movie_title, "Lorem Ipsum");
        });

        it("3 . fail - get movie ", async function () {
          let res = await instance.get("/movie/tt123456");
          strictEqual(res.data, "Movie not found");
        });

        it("5. pass - delete movie ", async function () {
          let res = await instance.delete("/movie/Lorem Ipsum");
          strictEqual(res.data.deletedCount, 1);
        });

        it("6. fail - delete movie ", async function () {
          let res = await instance.delete("/movie/Lorem Ipsum");
          strictEqual(res.data.deletedCount, 0);
        });
      });

      describe("testing userreview apis  ", async function () {
        it("1. pass - add userreview ", async function () {
          let data = {
            userid: "johnsmith",
            movie_title: "tt123456",
            review: "Lorem Ipsum",
            rating: 5,
          };
          let res = await instance.post("/userReview", data);
          strictEqual(res.data.acknowledged, true);
        });

        it("2. pass - get userreview ", async function () {
          let res = await instance.get("/userReview/user/johnsmith");
          strictEqual(res.data[0].userid, "johnsmith");
        });

        it("3 . fail - get userreview ", async function () {
          let res = await instance.get("/userReview/user/johnsmit");
          strictEqual(res.data, "no reviews with this user id");
        });

        it("4. pass - update userreview ", async function () {
          let data = {
            userid: "johnsmith",
            movie_title: "tt123456",
            review: "Lorem pua",
            rating: 7,
          };
          let res = await instance.put("/userReview/update/?userid=johnsmith&movieid=tt123456", data);
          strictEqual(res.data.modifiedCount, 1);
        });

        it("5. fail - update userreview ", async function () {
          let data = {
            userid: "johnsmith",
            movie_title: "tt123456",
            review: "Lorem puka",
            rating: 7,
          };
          let res = await instance.put("/userReview/update/?userid=johsmith&movieid=tt123456", data);
          strictEqual(res.data.modifiedCount, 0);
        });

        it("6. pass - delete userreview ", async function () {
          let res = await instance.delete("/userReview/delete/?userid=johnsmith&movieid=tt123456");
          strictEqual(res.data.deletedCount, 1);
        });
      });
    });
  });
});
