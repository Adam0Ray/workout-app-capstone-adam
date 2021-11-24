
const workoutList = document.querySelector('#workout-container')
const form = document.querySelector('#formId')
const getWorkoutsBtn = document.querySelector('#getWorkoutsBtn')


function handleSubmit(e) {
    e.preventDefault()

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
    // console.log(bodyObj)

    createNewWorkout(bodyObj)

}
function createNewWorkout(body) {
    axios.post('http://localhost:4060/workouts', body)
        .then(() =>  getWorkouts())
        .catch(err => console.log(err))
}

function deleteCard(id) {
    axios.delete(`http://localhost:4060/workouts/${id}`)
        .then(() => getWorkouts())
        .catch(err => console.log(err))
}

function getWorkouts() {
    workoutList.innerHTML = ''

    axios.get('http://localhost:4060/workouts')
        .then(res => {
            res.data.forEach(workout=> {
                const workoutCard = 
                `<div class="card">
                    <h2>${workout['workout_name']}</h2>
                    <h3>${workout['description']}</h3>
                    <p>${workout['exercise_one']}, ${workout['repetitions_one'] + ' Reps'}, ${workout['sets_one']  + ' Sets'}</p>
                    <p>${workout['exercise_two']}, ${workout['repetitions_two'] + ' Reps'}, ${workout['sets_two']  + ' Sets'}</p>
                    <p>${workout['exercise_three']}, ${workout['repetitions_three'] + ' Reps'}, ${workout['sets_three']  + ' Sets'}</p>
                    <button onclick="deleteCard(${workout['workout_id']})">Delete</button>
                </div>`
            
                workoutList.innerHTML += workoutCard
            })
        })
        .catch(err => console.log(err))
}


getWorkouts()
// makeWorkoutCard()
// deleteCard()
form.addEventListener('submit', handleSubmit)
getWorkoutsBtn.addEventListener('click',getWorkouts)



// function makeWorkoutCard(workout) {
//     const workoutCard = 
//     `<div class="card">
//         <h2>${workout['workout_name']}</h2>
//         <h3>${workout['description']}</h3>
//         <p>${workout['exercise_one']}, ${workout['repetitions_one']}, ${workout['sets_one']}</p>
//         <p>${workout['exercise_two']}, ${workout['repetitions_two']}, ${workout['sets_two']}</p>
//         <p>${workout['exercise_three']}, ${workout['repetitions_three']}, ${workout['sets_three']}</p>
//         <button onclick="deleteCard(${workout['workout_id']})">Delete</button>
//     </div>`

//     return workoutCard
// }


// function getWorkouts() {
//     workoutNameInput.innerHTML = ''

//     axios.get('https://workout-app-capstone-adam.herokuapp.com/workouts')
//         .then(res => {
//             res.data.forEach(elem => {
//                 let workoutCard = `<div class="workout-card">
//                     <h2>${elem.workouts}</h2>                    
//                     <button onclick="deleteCard(${elem['workout_id']})">Delete</button>
//                     </div>
//                 `

//                 workoutNameInput.innerHTML += workoutCard
//             })
//         })
//         console.log(res)
// }

// if (workoutNameInput.value < 1) {
//     alert ('You must enter a workout name')
//     return
// }
// if (descriptionInput.value < 1) {
//     alert ('You must enter a description')
//     return
// }
// if (exerciseOneInput.value < 1) {
//     alert ('You must enter an exercise')
//     return
// }
// if (repititionOneInput.value < 1) {
//     alert ('You must enter a rep')
//     return
// }
// if (setsOneInput.value < 1) {
//     alert ('You must enter a set')
//     return
// }
// if (exerciseTwoInput.value < 1) {
//     alert ('You must enter an exercise')
//     return
// }
// if (repititionsTwoInput.value < 1) {
//     alert ('You must enter a rep')
//     return
// }
// if (setsTwoInput.value < 1) {
//     alert ('You must enter a set')
//     return
// }
// if (exerciseThreeInput.value < 1) {
//     alert ('You must enter an exercise')
//     return
// }
// if (repititionsThreeInput.value < 1) {
//     alert ('You must enter a rep')
//     return
// }
// if (setsThreeInput.value < 1) {
//     alert ('You must enter a set')
//     return
// }