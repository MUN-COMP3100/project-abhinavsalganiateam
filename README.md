# Submission Date: 19th March 2023

## TO create the database in your localhost

```bash
mongoimport --db=IMDB --type=csv --headerline --collection=movies movie.csv
mongoimport --db=IMDB --type=csv --headerline --collection=users user.csv
mongoimport --db=IMDB --type=csv --headerline --collection=userReviews userReview.csv

```

## To access the online database

simply change the import statement in app.js for the database to the following dbOnline.mjs(might not work properly)

## To run the application

open the terminal in the project folder 
install all the dependencies for each client and server side individually 

### client Side 
```bash
cd client npm install
```
### server Side
```bash
## To run the test

```bash
npm test
```

## To shut down the server

```bash
press ctrl+c #on the terminal
```

## Architecture

The server is built using express and uses mongodb as the database. The server is divided into 3 modules

1. app.js - This is the main module which starts the server and handles the routing of the requests
2. db.js - This module handles the connection to the database and the queries to the database
3. dbOnline.mjs - This module handles the connection to the online database and the queries to the database
4. main-test.js - This module handles the testing of the server (all CRUD operations for all the collections)
5. Controller - This module handles the routing of the requests to the appropriate functions
6. Model - This module handles the creation of the schema for the database
7. DAO - This module contains all the classes of database access objects which handle the queries to the database

## Attributions

I have used the following resources to help me with this project:

1. [express](https://expressjs.com/)
2. [mocha](https://mochajs.org/)
3. contacts-v4 app as the base for the project [contacts-v4](http://www.cs.mun.ca/~brown/3100/Soares/Week5/contacts-app-v4.zip)
