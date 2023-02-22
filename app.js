const container = document.getElementById('container')

// Display
const display = document.createElement('div')
display.classList.add('display')
container.appendChild(display)

// Choices div
const displayButtons = document.createElement('div')
displayButtons.classList.add('choices')
container.appendChild(displayButtons)

// Create h2 and span
const pcChoiceSpan = document.createElement('span')
pcChoiceSpan.classList.add('computer-choice')

const pcChoice = document.createElement('h2')
pcChoice.innerHTML = "Computer's Choice: "
pcChoice.appendChild(pcChoiceSpan)
display.appendChild(pcChoice)

// Create h2 and span
const userChoiceSpan = document.createElement('span')
userChoiceSpan.classList.add('user-choice')

const userChoice = document.createElement('h2')
userChoice.innerHTML = 'User Choice: '
userChoice.appendChild(userChoiceSpan)
display.appendChild(userChoice)

// Create h2 and span
const resultSpan = document.createElement('span')
resultSpan.classList.add('result')

const result = document.createElement('h2')
result.innerHTML = 'Result: '
result.appendChild(resultSpan)
display.appendChild(result)

// Create Button Rock
const buttonRock = document.createElement('button')
buttonRock.classList.add('button')
buttonRock.id = 'rock'
buttonRock.innerHTML = 'Rock'
displayButtons.appendChild(buttonRock)

// Create Button Paper
const buttonPaper = document.createElement('button')
buttonPaper.classList.add('button')
buttonPaper.id = 'paper'
buttonPaper.innerHTML = 'Paper'
displayButtons.appendChild(buttonPaper)

// Create Button Scissors
const buttonScissors = document.createElement('button')
buttonScissors.classList.add('button')
buttonScissors.id = 'scissors'
buttonScissors.innerHTML = 'Scissors'
displayButtons.appendChild(buttonScissors)

console.log('hello world')

const possibleChoices = document.querySelectorAll('.button')
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    let userChoice = e.target.id
    userChoiceSpan.innerHTML = userChoice
    let computerChoice = generateComputerChoice()
    pcChoiceSpan.innerHTML = computerChoice
    console.log(userChoice, computerChoice)
    resultSpan.innerHTML = getResult(userChoice, computerChoice)
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