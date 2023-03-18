## TO create the database in your localhost

```bash
mongoimport --db=IMDB --type=csv --headerline --collection=movies movie.csv
mongoimport --db=IMDB --type=csv --headerline --collection=users userReview.csv

```
## to access the online database

```bash
simply change the import statement in app.js for the database to the following dbOnline.mjs
```

## To run the application

```bash
npm setup
npm start
```

## To run the test

```bash
npm test
```



