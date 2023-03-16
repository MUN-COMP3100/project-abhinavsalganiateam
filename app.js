import express, { json, urlencoded } from "express";
const app = express();
const port = 3000;

app.use(json()); // support json encoded bodies
app.use(urlencoded({ extended: true })); //incoming objects are strings or arrays

import { getAll, GetMovie, AddMovie, GetMovieByDirector, GetMovieByGenre } from "./controller/movieController.js";
import { connectToDB, closeDBConnection } from "./utils/db.mjs";

var server;

async function createServer() {
  try {
    // we will only start our server if our database
    // starts correctly. Therefore, let's wait for
    // mongo to connect
    await connectToDB();
    // contacts resource paths
    app.get("/movie", getAll);
    app.get("/movie/:name", GetMovie);
    app.post("/movie", AddMovie);
    app.get("/movie/genre/:genre", GetMovieByGenre);
    app.get("/director/:director", GetMovieByDirector);

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
