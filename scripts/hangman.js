const Hangman = function(word, numbGuessing) {
    this.word= word.toLowerCase().split('')
    this.numbGuessing= numbGuessing
    this.guessedLetters= []
}

Hangman.prototype.puzzleWord= function(){
    let puzzle = ''

    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    });
    return puzzle
}

Hangman.prototype.makeGuess= function(guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }
    if (isUnique && isBadGuess) {
        this.numbGuessing--
    }
}
 

const game1= new Hangman('cOLA', 3)
console.log(game1.puzzleWord())
console.log(game1.numbGuessing)



window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    // console.log(guess)
    game1.makeGuess(guess)
    console.log(game1.puzzleWord())
    console.log(game1.numbGuessing)
})


