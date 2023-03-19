# Submission Date: 19th March 2023

## TO create the database in your localhost

```bash
mongoimport --db=IMDB --type=csv --headerline --collection=movies movie.csv
mongoimport --db=IMDB --type=csv --headerline --collection=users userReview.csv

```

## To access the online database

simply change the import statement in app.js for the database to the following dbOnline.mjs

## To run the application

```bash
npm setup
npm start
```

## To run the test

```bash
npm test
```

## Attributions

I have used the following resources to help me with this project:

1. [express](https://expressjs.com/)
2. [mocha](https://mochajs.org/)
3. contacts-v4 app as the base for the project [contacts-v4](http://www.cs.mun.ca/~brown/3100/Soares/Week5/contacts-app-v4.zip)
