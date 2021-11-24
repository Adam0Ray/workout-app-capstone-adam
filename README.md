#  Workout App

## Table of Contents
* [Summary](#summary)
* [Technologies](#technologies)
* [Features](#features)
* [Setup/Installation](#setup)
* [About the Developer](#developer)

## <a name="summary"></a>Summary
    The goal of this app is to document and share workouts that can be completed in under 30 minutes, comprised of 3 workouts with a given number of repetitions and sets.

## <a name="tech-stack"></a>Tech Stack
__Front End:__ HTML, CSS, JavaScript, Axios<br/>
__Back End:__ JavaScript, Postgres, Dotenv, Sequelize, Github, Heroku, Cors, Express, Nodemon  <br/>
__Dependencies:__ 
    "axios": "^0.24.0",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "nodemon": "^2.0.15",
    "pg": "^8.7.1",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.12.0-alpha.1"

## <a name="features"></a>Features
Use the Workout App to view workouts that others have posted.  Become your own author and add your own workouts to the App or delete bad workouts.

#### Requirements

To run this app on your local computer:
Clone down repository into your code editor 
```
git clone https://github.com/Adam0Ray/workout-app-capstone-adam.git
```

Install dependencies
```
npm i
```
run server
```
nodemon server/server.js
```
Seed the database if you choose using an application such as Postman
```
POST to http://localhost:4060/seed
```

Run the index.html file in your browser with live server

## <a name="developer"></a>About the Developer
Adam Ray is a Petroleum Engineer by background.  Adam is an aspiring developer participating in a 16 week coding program.