require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {
    getWorkout,
    createWorkout,
    deleteWorkout
} = require('./controller.js')

app.use(express.json())
app.use(cors())

//Connect Public for Deployment
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.js'))
})
// Workouts
app.get('/workout', getWorkout)

// Create and Delete Workouts
app.post('/post', createWorkout)
app.delete('/delete', deleteWorkout)

//PORT
app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))