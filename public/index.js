const workoutList = document.querySelector('#workout-container')
const form = document.querySelector('#formId')
const getWorkoutsBtn = document.querySelector('#getWorkoutsBtn')

let editWorkoutId = null

let workoutNameInput = document.getElementById('workoutName')
let descriptionInput = document.getElementById('description')
let exerciseOneInput = document.getElementById('exerciseOne')
let repititionOneInput = document.getElementById('repititionsOne')
let setsOneInput = document.getElementById('setsOne')
let exerciseTwoInput = document.getElementById('exerciseTwo')
let repititionsTwoInput = document.getElementById('repititionsTwo')
let setsTwoInput = document.getElementById('setsTwo')
let exerciseThreeInput = document.getElementById('exerciseThree')
let repititionsThreeInput = document.getElementById('repititionsThree')
let setsThreeInput = document.getElementById('setsThree')


async function handleSubmit(e) {
    e.preventDefault()
    
    let bodyObj = {
        workoutNameInput : workoutNameInput.value,
        descriptionInput : descriptionInput.value,
        exerciseOneInput : exerciseOneInput.value,
        repititionOneInput : repititionOneInput.value,
        setsOneInput : setsOneInput.value,
        exerciseTwoInput : exerciseTwoInput.value,
        repititionsTwoInput : repititionsTwoInput.value,
        setsTwoInput : setsTwoInput.value,
        exerciseThreeInput : exerciseThreeInput.value,
        repititionsThreeInput : repititionsThreeInput.value,
        setsThreeInput : setsThreeInput.value

    }

    if(editWorkoutId !== null){
        await editWorkout(editWorkoutId, bodyObj)
        editWorkoutId = null
    } else {
        await createNewWorkout(bodyObj)
    }
    workoutNameInput.value = null
    descriptionInput.value = null
    exerciseOneInput.value = null
    repititionOneInput.value = null
    setsOneInput.value = null
    exerciseTwoInput.value = null
    repititionsTwoInput.value = null
    setsTwoInput.value = null
    exerciseThreeInput.value = null
    repititionsThreeInput.value = null
    setsThreeInput.value = null
}

async function editWorkout(id, body) {
    await axios.patch(`http://localhost:4060/workouts/${id}`, body)
        .then(() =>  getWorkouts())
        .catch(err => console.log(err))
}

async function createNewWorkout(body) {
    await axios.post('http://localhost:4060/workouts', body)
        .then(() =>  getWorkouts())
        .catch(err => console.log(err))
}

async function deleteCard(id) {
    await axios.delete(`http://localhost:4060/workouts/${id}`)
        .then(() => getWorkouts())
        .catch(err => console.log(err))
}

async function getWorkout(id) {
    const response = await axios.get(`http://localhost:4060/workouts/${id}`)
        .catch(err => console.log(err))
        console.log(response.data[0])
        return response.data[0]
}

async function editCard(workout_id) {
    
    let workout = await getWorkout(workout_id)
    editWorkoutId = workout_id

    console.log(workout)
    workoutNameInput.value = workout.workout_name
    descriptionInput.value = workout.description
    exerciseOneInput.value = workout.exercise_one
    repititionOneInput.value = workout.repetitions_one
    setsOneInput.value = workout.sets_one
    exerciseTwoInput.value = workout.exercise_two
    repititionsTwoInput.value = workout.repetitions_two
    setsTwoInput.value = workout.sets_two
    exerciseThreeInput.value = workout.exercise_three
    repititionsThreeInput.value = workout.repetitions_three
    setsThreeInput.value = workout.sets_three
}


async function getWorkouts() {
    workoutList.innerHTML = ''

    await axios.get('http://localhost:4060/workouts')
        .then(res => {
            res.data.forEach(workout=> {
                const workoutCard = 
                `<div class="card">
                    <h2>${'Exercise Number ' + workout['workout_id']}</h2>
                    <h2>${workout['workout_name']}</h2>
                    <h3>${workout['description']}</h3>
                    <p>${workout['exercise_one']}, ${workout['repetitions_one'] + ' Reps'}, ${workout['sets_one']  + ' Sets'}</p>
                    <p>${workout['exercise_two']}, ${workout['repetitions_two'] + ' Reps'}, ${workout['sets_two']  + ' Sets'}</p>
                    <p>${workout['exercise_three']}, ${workout['repetitions_three'] + ' Reps'}, ${workout['sets_three']  + ' Sets'}</p>
                    <button onclick="deleteCard(${workout['workout_id']})">Delete</button>
                    <button onclick="editCard(${workout['workout_id']})">Edit</button>
                </div>`
            
                workoutList.innerHTML += workoutCard
            })
        })
        .catch(err => console.log(err))
}


getWorkouts()
form.addEventListener('submit', handleSubmit)

