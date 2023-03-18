import { MongoClient,ServerApiVersion } from "mongodb";
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useUnifiedTopology: true });
// const uriOnline = "mongodb+srv://marker:nodejs@imdbclonedb.4z61yvm.mongodb.net/?retryWrites=true&w=majority";
// const clientOnline = new MongoClient(uriOnline, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
var db;
// var dbOnline;

/**
 * A function to stablish a connection with a MongoDB instance.
 */
export async function connectToDB() {
  try {
    // Connect the client to the server
    await client.connect();
    // Our db name is going to be "IMDB" for local and "imdbClonedb" for online
    db = await client.db("IMDB");
    // dbOnline = await clientOnline.db("imdbClonedb");
    console.log("Connected successfully to mongoDB");
  } catch (err) {
    throw err;
  }
}
/**
 * This method just returns the database instance
 * @returns A Database instance
 */
export async function getDb() {
  return db;
}

export async function closeDBConnection() {
  await client.close();
  return "Connection closed";
}

export default { connectToDB, getDb, closeDBConnection };
