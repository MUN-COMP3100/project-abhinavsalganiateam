import express, { json, urlencoded } from "express";
const app = express();
const port = 3000;

app.use(json()); // support json encoded bodies
app.use(urlencoded({ extended: true })); //incoming objects are strings or arrays

import { getAllMovies, GetMovie, AddMovie, GetMovieByDirector, GetMovieByGenre, DeleteMovie } from "./controller/movieController.js";
import { connectToDB, closeDBConnection } from "./utils/db.mjs";

import {
  getAllReviews,
  GetReviewByMovie,
  GetReviewByUser,
  AddReview,
  UpdateReview,
  DeleteReview,
} from "./controller/userReviewController.js";

var server;

async function createServer() {
  try {
    // we will only start our server if our database
    // starts correctly. Therefore, let's wait for
    // mongo to connect
    await connectToDB();
    // movie resource paths
    app.get("/movie", getAllMovies);
    app.get("/movie/:name", GetMovie);
    app.post("/movie", AddMovie);
    app.get("/movie/genre/:genre", GetMovieByGenre);
    app.get("/director/:director", GetMovieByDirector);
    app.delete("/movie/:name", DeleteMovie);

    // user resource paths
    /* app.get("/user", getAll);
    app.get("/user/:name", GetMovie);
    app.post("/user", AddMovie);
    app.get("/user/id", GetMovieByGenre);
    app.get("/director/:director", GetMovieByDirector);
    app.delete("/movie/:name", DeleteMovie); */

    //user Review resource paths
    app.get("/userReview", getAllReviews);
    app.get("/userReview/:userid", GetReviewByMovie);
    app.post("/userReview", AddReview);
    app.get("/userReview/user/:id", GetReviewByUser);
    app.put("/userReview/:name", UpdateReview);
    app.delete("/userReview/:userid:movietitle", DeleteReview);

    // start the server
    server = app.listen(port, () => {
      console.log("Example app listening at http://localhost:%d", port);
    });
  } catch (err) {
    console.log(err);
  }
}
createServer();

// I created this callback function to capture
// when for when we kill the server.
// This will avoid us to create many mongo connections
// and use all our computer resources
process.on("SIGINT", () => {
  console.info("SIGINT signal received.");
  console.log("Closing Mongo Client.");
  server.close(async function () {
    let msg = await closeDBConnection();
    console.log(msg);
  });
});
