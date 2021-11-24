require('dotenv').config();


const Sequelize = require('sequelize')

const{CONNECTION_STRING} = process.env  //access to connection string variable on env file  connection string is the URI

const sequelize = new Sequelize(CONNECTION_STRING, {  //connection string includes process.env from above
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
        // console.log('im hit')
        sequelize.query(`SELECT * FROM workouts;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }, 



    createWorkout: (req, res) => {
        const {workoutNameInput, descriptionInput, exerciseOneInput, repititionOneInput, setsOneInput, exerciseTwoInput, repititionsTwoInput, setsTwoInput, exerciseThreeInput, repititionsThreeInput, setsThreeInput} = req.body
        // console.log(workout_name) //undefined
        // console.log (req.body.workoutNameInput) //a
        // console.log (workoutNameInput)
        
       
        sequelize.query(`INSERT INTO workouts (workout_name, description, exercise_one, repetitions_one, sets_one, exercise_two, repetitions_two, sets_two, exercise_three, repetitions_three, sets_three)
        VALUES ('${workoutNameInput}', '${descriptionInput}', '${exerciseOneInput}', ${setsOneInput}, ${repititionOneInput}, '${exerciseTwoInput}', ${repititionsTwoInput}, ${setsTwoInput}, '${exerciseThreeInput}', ${repititionsThreeInput}, ${setsThreeInput});`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }, 
    deleteWorkout: (req, res) =>{
        const {id} = req.params 
        sequelize.query(`DELETE FROM workouts 
        where workout_id = ${id};`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))               
    },

}

// let nextWorkout = 4

// module.exports = {
//     getWorkouts: (req, res) => {
//         sequelize.query(`SELECT * FROM workouts;`)
//             .then(dbRes => res.status(200).send(dbRes[0]))
//             .catch(err => console.log(err))
//     }, 
    
//     createWorkout: (req, res) => {
//         const {workout_name, description, exercise_one, repetitions_one, sets_one, exercise_two, repetitions_two, sets_two, exercise_three, repetitions_three, sets_three} = req.body
//         sequelize.query(`INSERT INTO workouts (workout_id, workout_name, description, exercise_one, repetitions_one, sets_one, exercise_two, repetitions_two, sets_two, exercise_three, repetitions_three, sets_three)
//         VALUES (${nextWorkout}, ${workout_name}, ${description}, ${exercise_one}, ${repetitions_one}, ${sets_one}, ${exercise_two}, ${repetitions_two}, ${sets_two}, ${exercise_three}, ${repetitions_three}, ${sets_three});`)
//             .then(dbRes => res.status(200).send(dbRes[0]))
//             .catch(err => console.log(err))
//     }, 
//     deleteWorkout: (req, res) =>{
//         const {id} = req.params 
//         sequelize.query(`DELETE FROM workouts 
//         where workout_id = ${id};`)
//             .then(dbRes => res.status(200).send(dbRes[0]))
//             .catch(err => console.log(err))               
//     }  
    

// }