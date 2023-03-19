### Name of the feature: Movie Database

Description: This feature aims to create a database to store movie and TV show information, including ratings. Users can add, view, search, and delete movies or TV shows from the database.

Implementation strategy: The feature is implemented using Node.js and MongoDB. The movie and TV show data is stored in a MongoDB database, and the feature uses the MovieBusiness and movieDAO modules to interact with the database. The feature provides a RESTful API that handles HTTP requests and responses using Express.js.

Dependencies: This feature depends on the MovieBusiness and movieDAO modules and the MongoDB database for storage.

State of implementation: The feature is partially complete. The database and API have been set up, and the MovieBusiness and movieDAO modules have been created. However, some API endpoints may not be fully implemented, and testing and error handling may need to be improved.

### Name of the feature: Search Engine Feature

Description: This feature allows users to search for movies in the movie database based on their input search term(s).

Implementation strategy:

    Define an API endpoint for the search feature in the searchController.js file.
    Use the Mongoose package to connect to the movie database in the movieBusiness.js file.
    Implement a search function that takes the user's search term(s) and uses the Mongoose package to search the movie database for any movies that match the search term(s).
    Return the search results to the user in the searchController.js file.

Tools and imported packages/modules used:

    Mongoose package for connecting to the movie database and searching for movies based on user input.
    Express.js framework for defining the API endpoint and handling HTTP requests and responses.

Features/Project modules used or depends on:

    The movie database module for storing movie data.

State of implementation:

The implementation of this feature is not completed yet, as the movieBusiness.js file needs to be updated with the search function using Mongoose to search for movies based on user input. The searchController.js file also needs to be updated with the API endpoint for the search feature.

### Feature Name: User Creation and Authentication

Description:
This feature allows the creation of a new user with a unique user ID, name, email, password, and role. The user's information is stored in a database using the UserDAO class. The user's input is validated using the validate-fields module before being passed on to the UserBusiness module, which performs the actual creation of the user.

Implementation:
The UserDAO class defines the structure of a user and provides getters and setters for each attribute. The UserBusiness module has static methods for adding, retrieving, updating, and deleting users from the database. These methods use the UserDAO class to interact with the database. The validate-fields module validates user input to ensure that the name, email, phone, and address fields are valid. The app.js file imports the UserBusiness module and calls its methods to create new users.

Dependencies:
This feature uses MongoDB to store user information and depends on the db.mjs module to connect to the database. The feature also uses the validate-fields module to validate user input.

Status:
The feature is fully implemented and working. Users can be created, retrieved, updated, and deleted from the database using the UserBusiness module. User input is validated using the validate-fields module before being added to the database.

##     Name of the feature: User reviews management
    Description: This feature provides functionality to manage user reviews in the application. It provides methods to add a new review, update an existing review, get all reviews, get reviews by movie, and get reviews by user.

    Implementation: The feature is implemented using a combination of JavaScript and MongoDB. The UserReviewDTO class is used to define the structure of a user review. The userReviewBusiness class contains methods for adding, retrieving, updating, and deleting user reviews. The userReviewController class contains functions for handling HTTP requests related to user reviews. The userReviewBusiness component provides a set of static methods that interact with the MongoDB database using the getDb function from utils/db.mjs. The getCollection method returns the userReviews collection from the database and creates the collection if it does not exist. The addReview method inserts a new review into the collection, while getReview, getReviewByMovie, updateReview, and deleteReview retrieve, update, or delete reviews based on the provided criteria.

    Dependencies: This component depends on the getDb function from utils/db.mjs to establish a connection to the MongoDB database.

    Status: The implementation of this feature is partially complete. The component provides methods to add, get, update, and delete reviews, and to get reviews by movie or user.

## Name of the feature: Location Based API

Description: This feature will allow users to find the nearest movie theater or streaming platform to watch their desired movie or TV show based on their current location. Users will be able to enter their current location or allow the app to access their device's GPS location to find the closest available options.

Implementation strategy: To implement this feature, we will use a third-party location-based API service, such as Google Maps API or OpenStreetMap API, to retrieve the user's current location and search for nearby movie theaters or streaming platforms. We will also need to integrate this feature with the movie and TV show database to retrieve relevant information about the available options.

Dependencies: This feature will depend on the movie and TV show database module to retrieve information about available movies and TV shows, as well as a third-party location-based API service to retrieve the user's current location and search for nearby movie theaters or streaming platforms.

State of implementation: This feature has not been implemented yet. Further development and testing will be required to fully implement and integrate this feature into the app.