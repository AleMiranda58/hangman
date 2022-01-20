const Hangman = function(word, numbGuessing) {
    this.word= word.toLowerCase().split('')
    this.numbGuessing= numbGuessing
    this.guessedLetters= []
    this.status = 'playing'

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

    this.calculateStatus()
}


Hangman.prototype.calculateStatus = function() {
    const finished = this.word.every((letter) => {
        return this.guessedLetters.includes(letter)
    })
    // const letterUnguessed = this.word.filter((letter) => {
    //     return !this.guessedLetters.includes(letter)
    // })
    // const finished = letterUnguessed.length === 0

    if (this.numbGuessing === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'Still playing'
    }
}
