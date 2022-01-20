const game1= new Hangman('cOLA', 3)

const puzzleEL = document.querySelector('#puzzle')
puzzleEL.textContent = game1.puzzleWord()

const guessesEl = document.querySelector('#guesses')
guessesEl.textContent = game1.numbGuessing
console.log(game1.status)




window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEL.textContent = game1.puzzleWord()
    guessesEl.textContent = game1.numbGuessing
    console.log(game1.status)

})

