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

### Feature Name: User Creation

Description:
This feature allows the creation of a new user with a unique user ID, name, email, password, and role. The user's information is stored in a database using the UserDAO class. The user's input is validated using the validate-fields module before being passed on to the UserBusiness module, which performs the actual creation of the user.

Implementation:
The UserDAO class defines the structure of a user and provides getters and setters for each attribute. The UserBusiness module has static methods for adding, retrieving, updating, and deleting users from the database. These methods use the UserDAO class to interact with the database. The validate-fields module validates user input to ensure that the name, email, phone, and address fields are valid. The app.js file imports the UserBusiness module and calls its methods to create new users.

Dependencies:
This feature uses MongoDB to store user information and depends on the db.mjs module to connect to the database. The feature also uses the validate-fields module to validate user input.

Status:
The feature is fully implemented and working. Users can be created, retrieved, updated, and deleted from the database using the UserBusiness module. User input is validated using the validate-fields module before being added to the database.