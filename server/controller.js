require('dotenv').config();

const Sequelize = require('sequelize')

const{CONNECTION_STRING} = process.env  //access to connection string variable on env file  connection string is the URI

const sequelize = new Sequelize(CONNECTION_STRING, {  //connection string includes process.env from above
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

let nextWorkout = 4

module.exports = {
    getWorkouts: (req, res) => {
        sequelize.query(`SELECT * FROM workouts`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }, 
    
    createWorkout: (req, res) => {
        const {workout_name, description, exercise_one, repetitions_one, sets_one, exercise_two, repetitions_two, sets_two, exercise_three, repetitions_three, sets_three} = req.body
        sequelize.query(`INSERT INTO workouts (workout_name, description, exercise_one, repetitions_one, sets_one, exercise_two, repetitions_two, sets_two, exercise_three, repetitions_three, sets_three)
        VALUES('${workout_name}', '${description}', '${exercise_one}', '${repetitions_one}', '${sets_one}', '${exercise_two}', '${repetitions_two}', '${sets_two}', '${exercise_three}', '${repetitions_three, sets_three}');`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }, 
    deleteWorkout: (req, res) =>{
        const {workout_id} = req.params 
        sequelize.query(`DELETE FROM workouts 
        where workout_id = ${workout_id};`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))               
    }  
    

}