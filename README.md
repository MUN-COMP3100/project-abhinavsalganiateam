# Submission Date: 14th April 2023

## Project Proposal

Please see the updated project proposal document in the Proposal folder.

## Project Video

Please see the project video.

## Attribution

I have used the following resources to help me with this project:

- [React Router](https://reactrouter.com/web/guides/quick-start)
- [React Bootstrap Modal](https://react-bootstrap.github.io/components/modal/)
- [Movie Api](https://www.themoviedb.org/documentation/api)
- contacts-v4 app as the base for the server side project [contacts-v4](http://www.cs.mun.ca/~brown/3100/Soares/Week5/contacts-app-v4.zip)

## Server-side Features

1. **API Integration** - We have used the third-party API to get the data from the server. The API is used to get the data from the server and then the data is used to display the data on the client side. We have used the following APIs:

   - Working - Yes
   - Code can be found in - `home.jsx`, `movieList.jsx`, `movies.jsx`, `tvList.jsx`, `tvShows.jsx`, `movieDetails.jsx`
   - Access/Usage - The marker can access the API using the API key.
   - Tests - The API should return the data in the correct format and the data should be visible on the client side. If you can see the data on the client side, then the API works.

2. **Popular and Upcoming Movies/Tv Shows** - We have used the popular and upcoming movies to display the popular and upcoming movies. The user can see the popular and upcoming movies on the home page.

   - Working - Yes
   - Code can be found in - `home.jsx`, `movieList.jsx`, `movies.jsx`, `tvList.jsx`, `tvShows.jsx`
   - Access/Usage - The marker can access the popular and upcoming movies using the API key, and that can be seen on the home page.
   - Tests - The API should return the data in the correct format and the data should be visible on the client side. If you can see the popular and upcoming movies on the home page, then the API works.

3. **User Authentication** - We have used the user authentication to authenticate the user. The user can login to the application using the username and password. The user can also register to the application using the username and password.

   - Working - Yes
   - Code can be found in - `authPage.jsx`
   - Access/Usage - The marker can access the user authentication using the username and password.
   - Tests - The user should be able to login to the application using the username and password. The user should be able to register to the application using the username and password.

4. **User Profile** - We have used the MongoDB database to store the user profiles. The user can add and edit the profile to the database, and the user can also delete the profile from the database.

   - Working - Yes
   - Code can be found in - `profilePage.jsx`
   - Access/Usage - The marker can access the user profile using the username and password.
   - Tests - The user should be able to add the profile to the database using the username and password. The user should be able to delete the profile from the database using the username and password. To test it properly, you can create a new profile using Sign up and then delete the profile using the Delete button.

5. **User Reviews Database** - We have used the user reviews database to store the user reviews. The user can add the reviews to the database, and user can see all the reviews user has added in the past in the user profile page.

   - Working - yes
   - Code can be found in - `movieReviews.jsx`
   - Access/Usage - The marker can see the code and reasonably grade the feature.

6. **Search Engine** - We have used the search engine to search the movies. The user can search the movies using the search engine.

   - Working - No
   - Code can be found in - `searchBar.jsx`
   - Access/Usage - The marker can check the code and reasonably grade the feature.

## Client-side Features

1. **Movie Details** - The user can click on movie cards and see the details of the movie.

   - Working - Yes
   - Code can be found in - `movieDetails.jsx`
   - Access/Usage - The marker can click on the movie card and see the details of the movie.
   - Tests - The user should be able to see the details of the movie after clicking on the movie card.
   - GUI works as expected.

2. **Movie Search** - The user can search the movies using the search engine.

   - Working - Yes, client-side only
   - Code can be found in - `searchBar.jsx`
   - Access/Usage - The marker can search the movies using the search engine.
   - Tests - The user should be able to write the movie name in the search bar.
   - GUI works as expected.

3. **Popular Movies/Upcoming Movies** - The user can see the popular and upcoming movies on the home page.

   - Working - Yes
   - Code can be found in - `home.jsx`, `movieList.jsx`, `movies.jsx`
   - Access/Usage - The marker can see the popular movies on the home page.
   - Tests - The user should be able to see the popular movies on the home page.
   - GUI works as expected.

4. **User Reviews** - User is able to add reviews to each movie on movie details page only if user is logged in, to access movie details page click on the movie card.

   - Working - yes
   - Code can be found in - `movieReviews.jsx`,
   - Access/Usage - The marker can add the review to the movie after clicking on the movie card if the user is logged in.
   - Tests - The user should be able to see the Add Review button after clicking on a movie card. The user should be able to see the reviews and add reviews using the Add Review button. The user should be able to add the review and see the review on the page. GUI works as expected.

5. **User Profiles** - After clicking Log in/Sign up button, the user can see the form to add the profile. The user can add the profile and see the profile on the page. The user can also delete the profile.

   - Working - Yes
   - Code can be found in - `profilePage.jsx`
   - Access/Usage - The marker can make a profile and log in.
   - Tests - The user should be able to add the profile using username and password and also be able to delete the profile.
   - GUI works as expected.

6. **Sign In/Sign Up** - The user can login to the application using the username and password. The user can also register to the application using the username and password.

   - Working - Yes
   - Code can be found in - `authPage.jsx`
   - Access/Usage - The marker can login to the application using the username and password. The marker can also register to the application using the username and password.
   - Tests - The user should be able to login to the application using the username and password. The user should be able to register to the application using the username and password.
   - GUI works as expected.

## Running the Application

install the dependencies for each client and server side by running the following commands in your terminal:

for server side:

```bash
cd server # to go to the server directory make sure you are in the root directory in your terminal
npm install # to install all the dependencies
```

for client side:

```bash
cd client # to go to the client directory make sure you are in the root directory in your terminal
npm install # to install all the dependencies
```

now start the server side first by running the following command in your terminal: (make sure you have created the database on your localhost. If you have not created the database, please follow the [instructions](#creating-the-database-on-localhost)])

```bash
cd server # to go to the server directory make sure you are in the root directory in your terminal
npm start # to start the server on port 3000
```

and then start the client side by running the following command in your terminal:

```bash
cd client # to go to the client directory make sure you are in the root directory in your terminal
npm start # to start the client on port 3001

this will open the application in your browser
```

now you can use the application

## important points

- The application is not responsive, so please use the application on a desktop.
- To add Reviews to the movies , you need to create a new account.
- The server and client side are running on different ports, so you need to run both the server and client side to use the application.
- you need a internet connection to use the application since we are using the TMDB API to fetch the movies.

### Creating the Database on Localhost

To create the database on your localhost, run the following commands in your terminal:

```bash
mongoimport --db=IMDB --type=csv --headerline --collection=movies movie.csv
mongoimport --db=IMDB --type=csv --headerline --collection=users user.csv
mongoimport --db=IMDB --type=csv --headerline --collection=userReviews userReview.csv
```

## Shutting Down the Server

To shut down the server, press `ctrl+c` in your terminal.
