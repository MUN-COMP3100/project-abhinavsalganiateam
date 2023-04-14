const express = require('express');
const mongodb = require('mongodb');

const app = express();

app.use(express.json());

// MongoDB connection string and database name
const connectionString = 'mongodb://localhost:27017';
const dbName = 'movie_reviews';

// Add a new review to the database
app.post('/reviews', async (req, res) => {
  try {
    const client = await mongodb.MongoClient.connect(connectionString);
    const db = client.db(dbName);

    const review = {
      username: req.body.username,
      review: req.body.review
    };

    const result = await db.collection('reviews').insertOne(review);

    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal server error');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
