### 1. _Name of the feature: Movie Database_

### Description:

This feature aims to create a database to store movie and TV show information, including ratings. Users can add, view, search, and delete movies or TV shows from the database.

### Implementation:

The feature is implemented using Node.js and MongoDB. The movie and TV show data is stored in a MongoDB database, and the feature uses the MovieBusiness and movieDAO modules to interact with the database. The feature provides a RESTful API that handles HTTP requests and responses using Express.js.

### Dependencies:

This feature depends on the MovieBusiness and movieDAO modules and the MongoDB database for storage.
State of implementation: The feature is partially complete. The database and API have been set up, and the MovieBusiness and movieDAO modules have been created. However, some API endpoints may not be fully implemented, and testing and error handling may need to be improved.

### Status:

The feature is fully implemented and working.

### Testing:

The feature has been tested using Mocha testing framework for all CRUD funtions. run npm test to run the tests.

### 2. _Name of the feature: Search Engine Feature_

### Description:

This feature allows users to search for movies in the movie database based on their input search term(s).

### Implementation:

Define an API endpoint for the search feature in the searchController.js file.
Use the Mongoose package to connect to the movie database in the movieBusiness.js file.
Implement a search function that takes the user's search term(s) and uses the Mongoose package to search the movie database for any movies that match the search term(s).
Return the search results to the user in the searchController.js file.

### Dependancies:

Mongoose package for connecting to the movie database and searching for movies based on user input.
Express.js framework for defining the API endpoint and handling HTTP requests and responses.

### Status:

The feature is fully implemented and working.

### Testing:

The feature has been tested using Mocha testing framework run npm test to run the tests.

### 3. _Feature Name: User Creation and Authentication_

### Description:

This feature allows the creation of a new user with a unique user ID, name, email, password, and role. The user's information is stored in a database using the UserDAO class. The user's input is validated using the validate-fields module before being passed on to the UserBusiness module, which performs the actual creation of the user.

### Implementation:

The UserDAO class defines the structure of a user and provides getters and setters for each attribute. The UserBusiness module has static methods for adding, retrieving, updating, and deleting users from the database. These methods use the UserDAO class to interact with the database. The validate-fields module validates user input to ensure that the name, email, phone, and address fields are valid. The app.js file imports the UserBusiness module and calls its methods to create new users.

### Dependencies:

This feature uses MongoDB to store user information and depends on the db.mjs module to connect to the database. The feature also uses the validate-fields module to validate user input.

### Status:

The feature is fully implemented and working. Users can be created, retrieved, updated, and deleted from the database using the UserBusiness module. User input is validated using the validate-fields module before being added to the database.

### Testing:

The feature has been tested using Mocha testing framework run npm test to run the tests.

## 4. _Name of the feature: User reviews management_

Description: This feature provides functionality to manage user reviews in the application. It provides methods to add a new review, update an existing review, get all reviews, get reviews by movie, and get reviews by user.

### Implementation:

The feature is implemented using a combination of JavaScript and MongoDB. The UserReviewDTO class is used to define the structure of a user review. The userReviewBusiness class contains methods for adding, retrieving, updating, and deleting user reviews. The userReviewController class contains functions for handling HTTP requests related to user reviews. The userReviewBusiness component provides a set of static methods that interact with the MongoDB database using the getDb function from utils/db.mjs. The getCollection method returns the userReviews collection from the database and creates the collection if it does not exist. The addReview method inserts a new review into the collection, while getReview, getReviewByMovie, updateReview, and deleteReview retrieve, update, or delete reviews based on the provided criteria.

### Dependencies:

This component depends on the getDb function from utils/db.mjs to establish a connection to the MongoDB database.

Status: The implementation of this feature is partially complete. The component provides methods to add, get, update, and delete reviews, and to get reviews by movie or user.

### Status:

The feature has been tested using Mocha testing framework run npm test to run the tests.

### Testing:

## 5. _Name of the feature: Location Based Movie-Showtimes_

### Description:

LocationController.js is a feature that uses Serp API to get movie timings, OpenCage to get city and geoLocation, and files called getCity and movieUtils to display movie showtimes for a given location.

### Implementation:

The LocationController.js feature uses the Axios package to make HTTP requests to the Serp API and OpenCage API. It also imports several modules, including getCity and movieUtils, to help with data manipulation and display.

The feature first retrieves the user's current location using the geolocation API. If the user denies access to their location, it will default to a predetermined location. It then uses the OpenCage API to get the user's city and geoLocation based on the coordinates.

Next, the feature uses the getCity module to retrieve movie data from the Serp API based on the user's city. The movie data is then processed using the movieUtils module to extract the movie showtimes.

### Dependencies:

LocationController.js depends on the geolocation API, Serp API, OpenCage API, Axios package, and the getCity and movieUtils modules.

### Status::

The feature is complete and working as intended.

### Testing:

## 6. _Name of the feature: Content Moderation_

### Description:

This feature will allow the system to moderate user reviews and prevent spam and inappropriate content from being published on the platform. This will help maintain a high-quality user experience and prevent any potentially harmful content from being shared.

### Implementation:

The implementation strategy for this feature will involve using third-party services or libraries that provide content moderation and spam detection functionalities. These services will be integrated into the user review submission process, where they will analyze the content of the review and flag any potentially inappropriate or spammy content. The system will then either reject the review or send it to an admin for further review.

Tools and imported packages and modules: Some of the tools and imported packages and modules that can be used to implement this feature include Google's Perspective API, Microsoft Azure's Content Moderator, Amazon Rekognition, and TensorFlow.js.

### Dependencies:

This feature will depend on the user review management feature and the user authentication feature. The content moderation system will only moderate reviews submitted by authenticated users.

### Status:

This feature is implemented and working.

### Testing:

The feature has been tested using Mocha testing framework.
