const container = document.getElementById('container')

// Structure build
function makeElement(dic) { // Accepts => id, text, classes=[], children=[], parent
    const element = document.createElement(dic['tag'])
    dic['id'] ? element.id = dic['id'] : "" 
    dic['text'] ? element.innerHTML = dic['text'] : ""
    dic['classes'] ? dic['classes'].forEach((item) => element.classList.add(item)) : ""
    dic['children'] ? dic['children'].forEach((item) => element.appendChild(item)) : ""
    dic['parent'] ? dic['parent'].appendChild(element) : ""
    return element
}

const title = makeElement(
    {
        'tag':'h1',
        'text':'Rock, Paper, Scissors',
        'parent':container
    }
)
 
const display = makeElement(
    {
        'tag':'div',
        'classes':['diplay'],
        'parent':container
    }
)

const displayButtons = makeElement(
    {
        'tag':'div',
        'classes':['choices'],
        'parent':container
    }
)

const pcChoiceSpan = makeElement(
    {
        'tag':'span',
        'classes':['computer-choice']
    }
)

const pcChoice = makeElement(
    {
        'tag':'h2',
        'text': "Computer's Choice: ",
        'children':[pcChoiceSpan],
        'parent':display
    }
)

const userChoiceSpan = makeElement(
    {
        'tag':'span',
        'classes':['user-choice']
    }
)
        
const userChoice = makeElement(
    {
        'tag':'h2',
        'text':"User's Choice: ",
        'children':[userChoiceSpan],
        'parent':display
    }
)
            
const resultSpan = makeElement(
    {
        'tag':'span',
        'classes':['result']
    }
)

const result = makeElement(
    {
        'tag':'h2',
        'text': "Result: ",
        'children':[resultSpan],
        'parent':display
    }
)

const buttonRock = makeElement(
    {
        'tag':'button',
        'classes':['button'],
        'id':'rock',
        'text':'Rock',
        'parent':displayButtons
    }
)

const buttonPaper = makeElement(
    {
        'tag':'button',
        'classes':['button'],
        'id':'paper',
        'text':'Paper',
        'parent':displayButtons
    }
)

const buttonScissors = makeElement(
    {
        'tag':'button',
        'classes':['button'],
        'id':'scissors',
        'text':'Scissors',
        'parent':displayButtons
    }
)

// Logic of It
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