let userScore = 0
let aiScore = 0

let choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')

let userScorePara = document.querySelector('#user')
let aiScorePara = document.querySelector('#ai')

// AI Choice
let aiChoice = () => {
    const options = ['rock', 'paper', 'scissors']
    const index = Math.floor(Math.random() * 3)
    return options[index]
}

// Draw function
const draw = () => {
    msg.innerText = 'Draw, Play Again'
    msg.style.backgroundColor = '#e85d04'
}


// Winner msg
const winner = (userWin, user, ai) => {
    if (userWin) {
        userScore++
        userScorePara.innerText = userScore
        msg.innerText = `Your ${user} beats ${ai}`
        msg.style.backgroundColor = 'green'
    }
    else {
        aiScore++
        aiScorePara.innerText = aiScore
        msg.innerText = `${ai} beats Yours ${user}`
        msg.style.backgroundColor = 'red'
    }
}

// Function for Game-play
const gamePlay = (user) => {

    ai = aiChoice()

    if (user === ai) {
        draw()
    } else {

        userWin = true

        if (user === 'rock') {
            // Ai has Paper, Scissor
            userWin = ai === 'paper' ? false : true
        }
        else if (user === 'paper') {
            // Ai has rock & scissor
            userWin = ai === 'rock' ? true : false
        }
        else {
            //user = scissor
            // ai = rock and paper
            userWin = ai === 'rock' ? false : true
        }

        winner(userWin, user, ai)
    }

}

// Program Start Here
choices.forEach((choice) => {  // User Choice
    choice.addEventListener('click', () => {
        const user = choice.getAttribute('id')
        gamePlay(user)
    })
})

