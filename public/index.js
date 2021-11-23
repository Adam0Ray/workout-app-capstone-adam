const form = document.querySelector('#formId')
const workoutNameInput = document.querySelector('#workoutName')
const descriptionInput = document.querySelector('#description')
const exerciseOneInput = document.querySelector('#exerciseOne')
const repititionOneInput = document.querySelector('#repititionOne')
const setsOneInput = document.querySelector('#setsOne')
const exerciseTwoInput = document.querySelector('#exerciseTwo')
const repititionsTwoInput = document.querySelector('#repititionsTwo')
const setsTwoInput = document.querySelector('#setsTwo')
const exerciseThreeInput = document.querySelector('#exerciseThree')
const repititionsThreeInput = document.querySelector('#repititionsThree')
const setsThreeInput = document.querySelector('#setsThree')

function handleSubmit(e) {
    e.preventDefault()

    if (workoutNameInput.value < 1) {
        alert ('You must enter a workout name')
        return
    }
    if (descriptionInput.value < 1) {
        alert ('You must enter a workout name')
        return
    }
    if (exerciseOneInput.value < 1) {
        alert ('You must enter a workout name')
        return
    }
    if (repititionOneInput.value < 1) {
        alert ('You must enter a workout name')
        return
    }
    if (setsOneInput.value < 1) {
        alert ('You must enter a workout name')
        return
    }
    if (exerciseTwoInput.value < 1) {
        alert ('You must enter a workout name')
        return
    }
    if (repititionsTwoInput.value < 1) {
        alert ('You must enter a workout name')
        return
    }
    if (setsTwoInput.value < 1) {
        alert ('You must enter a workout name')
        return
    }
    if (exerciseThreeInput.value < 1) {
        alert ('You must enter a workout name')
        return
    }
    if (repititionsThreeInput.value < 1) {
        alert ('You must enter a workout name')
        return
    }
    if (setsThreeInput.value < 1) {
        alert ('You must enter a workout name')
        return
    }
}

function deleteCard(workout_id) {
    axios.delete(`https://workout-app-capstone-adam.herokuapp.com/${workout_id}`)
        .then(() => getWorkouts())
        .catch(err => console.log(err))
}

function getWorkouts() {
    workoutNameInput.innerHTML = ''

    axios.get('https://workout-app-capstone-adam.herokuapp.com/')
        .then(res => {
            res.data.forEach(elem => {
                let workoutCard = `<div class="workout-card">
                    <h2>${elem.workouts}</h2>                    
                    <button onclick="deleteCard(${elem['workout_id']})">Delete</button>
                    </div>
                `

                workoutNameInput.innerHTML += workoutCard
            })
        })
        console.log(res)
}


getWorkouts()
deleteCard()
form.addEventListener('submit', handleSubmit)