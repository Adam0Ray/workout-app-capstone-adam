require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    editWorkout
} = require('./controller.js')
const {
    seed
} = require('./seed.js')

app.use(express.json())
app.use(cors())


// DEV
app.post('/seed', seed)

// Get Workout/Workouts
app.get('/workouts', 
 getWorkouts)

app.get('/workouts/:id', 
    getWorkout)

// Create ,Edit/Patch, and Delete Workouts
app.post('/workouts',
    createWorkout)
app.delete('/workouts/:id', 
    deleteWorkout)
app.patch('/workouts/:id', 
    editWorkout)
  
  

//PORT
app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))

