# Instructions

## 1. Install the dependencies

```bash
npm run setup
```

## 2. create the database in your localhost

```bash
mongoimport --db=IMDB --type=csv --headerline --collection=movies movie.csv
mongoimport --db=IMDB --type=csv --headerline --collection=users userReview.csv
```

## 3. Run the app

```bash
npm run dev
```

```
this will start the app on localhost:3000 ( both server and client at once)
```
