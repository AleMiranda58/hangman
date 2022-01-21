const puzzleEL = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1



window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})



const render = () => {
    puzzleEL.textContent = game1.puzzleWord
    guessesEl.textContent = game1.statusMessage
}


const startGame = async () => {
    const puzzle = await getPuzzle('1')
    game1 = new Hangman(puzzle, 3)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
