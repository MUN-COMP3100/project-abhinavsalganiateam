## Project Part 2, CS3100 W2023

<br>

# Instructions

Implement six of the server-side features of your project part 1 proposal. You may substitute different features if you wish by updating the feature table from the proposal document.

Include the following in your server-side submission:

Do not remove the proposal documents or other elements of your first submission from the project repository.

Provide steps needed to instantiate the database contents for your server implementation. Indicate in your REAMDE how the marker is to reconstitute your database to run your server-side solution. The marker will run a local Mongo server on localhost/127.0.0.1 at port 27017. Some possibilities are:

provide source data files and instructions for the marker to recreate your database in their own local MongoDB server. This could involve mongoimport command usage for example.
provide a data dump (such as mongodump) and instructions for the marker to recreate your database in their own local MongoDB server (such as mongorestore).
provide the marker access to a remote database on a remote server where the database server is already installed and running.
NOTE THAT large datasets (more than 1M) should not be tracked in a git repo; instead, put them in cloud storage or elsewhere and give the marker README instructions on downloading them.

Implementation description Describe how to run and how to shut down your server. Outline the basic architecture (code modules and module responsibilities) in your submission to help the marker understand your code.

Feature Descriptions (times 6) In your documentation, under each of six implemented feature names, briefly describe the following:

name of the feature
A one or two sentence description of the feature. You may refer to (and possibly update) a section of the proposal for this component.
A brief description of the implementation strategy for the feature, including tools and imported packages and modules used
A statement of which other features or project modules (storage, etc) this feature uses or depends on.
A brief indication of the state of the implementation for the feature. Is it complete, how much is working?
A description of how to test the feature. Test code should be provided to test both working and failure modes of the feature from the client-side. Also indicate whether the test code is working properly and what the marker should see upon running the test code. You are encouraged to use a test framework (Mocha) for this part.

<br>

# Attributions

Each line/entry of your attributions section (in the README, and possibly in your server-side documentation) should consist of three parts: (1) the source (such as web page URL, individual name, or bibliographic reference), (2) the nature of the contribution to your submission, and (3) any additional information (such as how the collaboration worked, or whether your collaborator is a classmate or student)
