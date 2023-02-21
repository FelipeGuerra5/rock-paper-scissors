const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.button')

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    let userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    let computerChoice = generateComputerChoice()
    computerChoiceDisplay.innerHTML = computerChoice
    console.log(userChoice, computerChoice)
    resultDisplay.innerHTML = getResult(userChoice, computerChoice)
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    const arr = ['rock', 'paper', 'scissors']
    return arr[randomNumber]
}

function getResult(u , c) {
    if (u === c) return 'Draw!'
    if ((u === 'rock' && c === "scissors") || 
        (u === 'paper' && c === "rock") ||
        (u === 'scissors' && c === "paper") 
        ) return 'You Win!'
        return 'You Lost!'
}