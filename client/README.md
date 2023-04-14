# Submission Date: 14th April 2023

## Project Proposal

Please see the updated project proposal document in the Proposal folder.

## Project Video

Please see the project video.

## Attribution

I have used the following resources to help me with this project:

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

5. **User Reviews Database** - We have used the user reviews database to store the user reviews. The user can add the reviews to the database, and the user can also delete the reviews from the database.

   - Working - No
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

4. **User Reviews** - The user can see the Add Review button after clicking on a movie card. The user can see the reviews and add reviews using the Add Review button. When the user clicks on the Add Review button, the user can see the form to add the review. The user can add the review and see the review on the page.

   - Working - Client-side only
   - Code can be found in - `movieReviews.jsx`
   - Access/Usage - The marker can see the code and reasonably grade the feature.
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

### Creating the Database on Localhost

To create the database on your localhost, run the following commands in your terminal:

mongoimport --db=IMDB --type=csv --headerline --collection=movies movie.csv
mongoimport --db=IMDB --type=csv --headerline --collection=users user.csv
mongoimport --db=IMDB --type=csv --headerline --collection=userReviews userReview.csv


### Accessing the Online Database

To access the online database, simply change the import statement in `app.js` for the database to the following `dbOnline.mjs` (which might not work properly).

### Running the Application

To run the application, run the following commands in your terminal:

npm setup # to install all the dependencies
npm start # to start the server on port 3000


## Shutting Down the Server

To shut down the server, press `ctrl+c` in your terminal.

