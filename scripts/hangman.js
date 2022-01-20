const Hangman = function(word, numbGuessing) {
    this.word= word.toLowerCase().split('')
    this.numbGuessing= numbGuessing
    this.guessedLetters= ['c', 'e']
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
 

const game1= new Hangman('cOLA', 3,1)
const game2= new Hangman('bye', 2, 0)


console.log(game1.puzzleWord())
console.log(game2.puzzleWord())



