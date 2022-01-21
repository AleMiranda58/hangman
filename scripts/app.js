const puzzleEL = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1



window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})



const render = () => {
    puzzleEL.innerHTML = ''
    guessesEl.textContent = game1.statusMessage

    game1.puzzleWord.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEL.appendChild(letterEl)
    })
}


const startGame = async () => {
    const puzzle = await getPuzzle('1')
    game1 = new Hangman(puzzle, 3)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
