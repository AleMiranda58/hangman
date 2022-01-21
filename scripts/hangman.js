class Hangman {
    constructor(word, numbGuessing) {
        this.word= word.toLowerCase().split('')
        this.numbGuessing= numbGuessing
        this.guessedLetters= []
        this.status = 'playing'
    }

    get puzzleWord() {
        let puzzle = ''

    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter)) {
            puzzle += letter
        } else {
            puzzle += '*'
        }
        });
        return puzzle
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (this.status !== 'playing') { 
        return
    }

    if (isUnique) {
        this.guessedLetters = [...this.guessedLetters, guess]
        // this.guessedLetters.push(guess)
    }
    if (isUnique && isBadGuess) {
        this.numbGuessing--
    }
    this.calculateStatus()
    }

    calculateStatus(){
        const finished = this.word.every((letter) => {
            return this.guessedLetters.includes(letter)
        })
        if (this.numbGuessing === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.numbGuessing}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was: ${this.word.join('')}`
        } else {
            return `Great work! You guessed the word`
        }
    }
}