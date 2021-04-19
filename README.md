<div align="center">

# Fitness-Tracker

</div>
A fitness app that allows users to create, view and track daily workouts. The user is able to log multiple exercises in a given day and also go back and update the workout. The user may track the name, type, weight, sets, reps and duration of each exercise. Cardiovascular exercises show the distance traveled in miles.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Links](#Links)
* [Features](#Features)
* [License](#License)

## Installation

1. Download or clone repository
2. `npm install` to install the required npm packages to run
3. To prepopulate database, run `npm seed`

## Usage

* Application will be invoked by using the following command:

  `node server.js`

* Open your browser and go to
  
  `http://localhost:3001`

  Once at the homepage the users last workout results will be shown, the user will then have the option to select **Continue Workout** or **New Workout**

  ![Workout Tracker Home Page](public/assets/Images/workout-tracker-index.png)

* After selecting an option, the user can add their exercise by choosing an **Exercise Type**

  * *Resistance* or
  * *Cardio*

  ![Workout Tracker Add Exercise](public/assets/Images/.png)

* If *Resistance* is selected, the user input the following required fields:

  * Exercise Name
  * Weight in lbs
  * Sets
  * Reps
  * Duration in minutes

  ![Fitness Tracker Resistance](public/assets/Images/fitness-tracker-resistance.png)  

* If *Cardio* is selected, the user input the following required fields:

  * Name
  * Distance in miles
  * Duration in minutes

  ![Fitness Tracker Cardio](public/assets/Images/fitness-tracker-cardio.png)

* After the required the fields are entered, the user can select **Complete** or **Add Exercise** to save the workout

* There is a **Dashboard** that tracks all the workouts that was entered in graphic details

  ![Fitness Tracker Dashboard](public/assets/Images/fitness-tracker-dashboard.png)

## Links

* [Github](https://github.com/TomFallon9/fitness-tracker)
* [Heroku App](https://fitness-tracker222.herokuapp.com/)

## Features

* Node
* Express
* JavaScript
* MongoDB
* Mongoose



