## 1. create the database in your localhost

```bash
mongoimport --db=IMDB --type=csv --headerline --collection=movies movie.csv
mongoimport --db=IMDB --type=csv --headerline --collection=users userReview.csv


