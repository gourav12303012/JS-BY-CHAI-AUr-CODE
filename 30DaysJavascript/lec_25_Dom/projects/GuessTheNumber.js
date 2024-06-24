let randomNumber=parseInt(Math.random() * 100 + 1 ) // gives the random number everytime and we multiply by 10 to jump a number

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.LastResult')

const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [] 
let numGuess = 1 

let PlayGame = true

if(PlayGame)
    {
        submit.addEventListener('click' , function(e)
    {
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
    }

function validateGuess(guess) // it guesses the values lies between one or hundered or not
{
    if(isNaN(guess))
        {
            alert('please enter a valid number')
        } else if(guess<1){
            alert('please enter a number more than 1')
        }else if(guess > 100)
            {
                alert("please enter a number less than 100")
            }else{
                prevGuess.push(guess)
                if(numGuess === 11)
                    {
                        displayGuess(guess)
                        displayMessage(`Game Over. Random number was ${randomNumber}`)
                        endgame()
                    }else {
                        displayGuess(guess)
                        checkGuess(guess)
                    }
            }
}
function checkGuess(guess) // kahi wo value jo hai wo random ke equal hai ya nahi agr equal hai to bas ye bolna h ki ap game jeet gye hai 
{
    if(guess === randomNumber)
        {
            displayMessage(`You guessed is right`)
            endgame()
        }else if(guess < randomNumber)
            {
                displayMessage(`Number is Too low`)
            }
            else if(guess > randomNumber)
                {
                    displayMessage(`Number is too high`)
                }
}
function displayGuess() // update the array
{
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    // iteracts with dom
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endgame()
{
    userInput.value = ''
    userInput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new Game </h2>`;
    startOver.appendChild(p)
    PlayGame = false
    newGame()
}
function newGame()
{
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click' , function(e){
     randomNumber=parseInt(Math.random() * 100 + 1 ) // gives the random number everytime and we multiply by 10 to jump a number
     prevGuess = []
     numGuess = 1
     guessSlot.innerHTML = ''
     remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')

    startOver.removeChild(p)
   
    PlayGame = true
   })
}
