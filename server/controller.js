require('dotenv').config();


const Sequelize = require('sequelize')

const{CONNECTION_STRING} = process.env 

const sequelize = new Sequelize(CONNECTION_STRING, {  
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false, 
        },
        socketPath: '/var/run/mysqld/mysqld.sock',
    }
    
})



module.exports = {
    getWorkouts: (req, res) => { 
        sequelize.query(`SELECT * FROM workouts;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }, 

    getWorkout: (req, res) => { 
        sequelize.query(`SELECT * FROM workouts
        WHERE workout_id = '${req.params.id}';`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }, 


    createWorkout: (req, res) => {
        const {workoutNameInput, descriptionInput, exerciseOneInput, repititionOneInput, setsOneInput, exerciseTwoInput, repititionsTwoInput, setsTwoInput, exerciseThreeInput, repititionsThreeInput, setsThreeInput} = req.body
       
        sequelize.query(`INSERT INTO workouts (workout_name, description, exercise_one, repetitions_one, sets_one, exercise_two, repetitions_two, sets_two, exercise_three, repetitions_three, sets_three)
        VALUES ('${workoutNameInput}', '${descriptionInput}', '${exerciseOneInput}', ${setsOneInput}, ${repititionOneInput}, '${exerciseTwoInput}', ${repititionsTwoInput}, ${setsTwoInput}, '${exerciseThreeInput}', ${repititionsThreeInput}, ${setsThreeInput});`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }, 
    deleteWorkout: (req, res) =>{
        const {id} = req.params 
        sequelize.query(`DELETE FROM workouts 
        WHERE workout_id = ${id};`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))               
    },
    editWorkout: (req, res) => {
        const {id} = req.params 

        const {workoutNameInput, descriptionInput, exerciseOneInput, repititionOneInput, setsOneInput, exerciseTwoInput, repititionsTwoInput, setsTwoInput, exerciseThreeInput, repititionsThreeInput, setsThreeInput} = req.body

        sequelize.query(`UPDATE workouts 
        SET workout_name = '${workoutNameInput}', description = '${descriptionInput}', exercise_one = '${exerciseOneInput}', repetitions_one = ${repititionOneInput}, sets_one = ${setsOneInput}, exercise_two = '${exerciseTwoInput}', repetitions_two = ${repititionsTwoInput}, sets_two = ${setsTwoInput}, exercise_three = '${exerciseThreeInput}', repetitions_three = ${repititionsThreeInput}, sets_three = ${setsThreeInput}
        WHERE workout_id = ${id};`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }
}
