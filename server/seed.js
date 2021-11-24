require('dotenv').config();

const Sequelize = require('sequelize')

const{CONNECTION_STRING} = process.env  //access to connection string vraiable on env file  connection string is the URI

const sequelize = new Sequelize(CONNECTION_STRING, {  //con string includes process.env from above
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
            drop table if exists workouts;

            CREATE TABLE workouts (
                workout_id SERIAL PRIMARY KEY,
                workout_name VARCHAR(50),
                description VARCHAR(200),
                exercise_one VARCHAR(50),
                repetitions_one integer,
                sets_one integer,
                exercise_two VARCHAR(50),
                repetitions_two integer,
                sets_two integer,
                exercise_three VARCHAR(50),
                repetitions_three integer,
                sets_three integer
            );            
                
            INSERT INTO workouts (workout_name, description, exercise_one, repetitions_one, sets_one, exercise_two, repetitions_two, sets_two, exercise_three, repetitions_three, sets_three)
            VALUES('The Quick 20', 'This is a whole body quick workout', 'Kettle Bell Squat Press', 8, 3, 'Pushups', 30, 3, 'Pullups', 8, 3 
            );
        
            INSERT INTO workouts (workout_name, description, exercise_one, repetitions_one, sets_one, exercise_two, repetitions_two, sets_two, exercise_three, repetitions_three, sets_three)
            VALUES('The Hiker', 'This is cardiovascular exercise designed for hikers', 'Bench Step Up', 100, 3, 'Good Mornings', 12, 3, 'Lunges', 12, 3 
            );
        
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}