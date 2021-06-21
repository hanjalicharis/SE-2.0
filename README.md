# SE-2.0
 Hanjaries web application done in React.js
 All the information on this web application can be found in 'SE Project - specification.pdf'

 Features of the web app:
 * Create a new user and sign in into existing
 * Create new Hanjary
 * Like Hanjaries
 * Update Hanjary
 * Like other people's Hanjaries (YOU CAN EVEN LIKE YOUR OWN!) (but don't do that)

Hanjaries use MongoDB as its primary database, has been written in React.js and backend has been done in Node.js

# DEPLOYMENT (Connected with backend)
    https://hanjaries.netlify.app/

# BACKEND is deployed to HEROKU
    https://hanjaries.herokuapp.com/
    
Due to the Heroku problems, if the database does not load instantly, please refresh the website.
Also, if you want to make some changes, please clone this repository to your local machine, please do the following:

* First delete package.lock.json files from both client and server folder
* cd server - npm install 
* cd client - npm install

Then, in .env file located inside the 'client' folder set your own database and port, and change that in client.js located in 'server'.

Finally, application will be available to run in following ways, by opening two terminals
* In the first terminal - cd server - npm start
* Second terminal - cd client - npm start

Then, the application will be run on localhost:3000, while the backend will be loaded on localhost:5000 (if you set your node.js port to be 5000)

