const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    let userChoiseStr = userChoice.toString()
    userChoiceDisplay.innerHTML = userChoiseStr.toUpperCase()
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
    
    switch(randomNumber) {
        case 1:
            computerChoice = 'rock'
            break
        case 2:
            computerChoice = 'paper'
            break
        case 3:
            computerChoice = 'scissors'
            break
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    console.log(userChoice)
    console.log(computerChoice)
    if (userChoice === computerChoice) {
        result = 'Draw!'
    }
    
    result = userChoice ==='rock' && computerChoice === 'scissors' ? "You win": ""

    if (userChoice === 'paper' && computerChoice === 'rock') {
        result = 'You win!'
    }
    if (userChoice === 'paper' && computerChoice === 'scissors') {
        result = 'You Loose!'
    }
    if (userChoice === 'scissors' && computerChoice === 'paper') {
        result = 'You win!'
    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
        result = 'You loose!'
    }
    resultDisplay.innerHTML = result
}