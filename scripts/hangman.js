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
game1.makeGuess('o')
game1.makeGuess('p')
game1.makeGuess('t')
console.log(game1.puzzleWord())
console.log(game1.numbGuessing)


const game2= new Hangman('bye', 2)
game2.makeGuess('y')
console.log(game2.puzzleWord())
console.log(game2.numbGuessing)



