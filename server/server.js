require('dotenv').config()
const express = require('express')
// const path = require('path')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {
    getWorkouts,
    createWorkout,
    deleteWorkout,
} = require('./controller.js')
const {
    seed
} = require('./seed.js')

app.use(express.json())
app.use(cors())

//Connect Public for Deployment
// app.use(express.static("public"));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// })

// app.get('../public/index.css', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.css'))
// })

// app.get('../public/index.js', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.js'))
// })



// DEV
app.post('/seed', seed)

// Workouts
 app.get('/workouts', 
 getWorkouts
)


// Create and Delete Workouts
app.post('/workouts',
    createWorkout)
app.delete('/workouts/:id', 
    deleteWorkout)

//PORT
app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))

