class Hangman {
  constructor(words) {
    this.words = words;
    // ... your code goes here
    this.secretWord = "";
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    // ... your code goes here
    let wordIndex = Math.floor(Math.random() * this.words.length);
    return this.words[wordIndex];
  }

  checkIfLetter(key) {
    // ... your code goes here
    return key.toLowerCase() != key.toUpperCase() && key.length == 1;
  }

  checkClickedLetters(letter) {
    // ... your code goes here
    return this.letters.includes(letter);
  }

  addCorrectLetter(letter) {
    // ... your code goes here
    this.guessedLetters += letter;
    if (this.checkWinner()) hangmanCanvas.winner();
  }

  addWrongLetter(letter) {
    // ... your code goes here
    this.errorsLeft -= 1;
    this.letters.push(letter);
    if (this.checkGameOver()) hangmanCanvas.gameOver();
    console.log(this.errorsLeft);
    console.log(this.checkWinner())
    console.log(this.guessedLetters)
  }

  checkGameOver() {
    // ... your code goes here
    return this.errorsLeft <= 0;
  }

  checkWinner() {
    // ... your code goes here
    return this.guessedLetters.split("").sort().join() == this.secretWord.split("").sort().join();
  }
}

let hangman;

const startGameButton = document.getElementById("start-game-button");

if (startGameButton) {
  startGameButton.addEventListener("click", (event) => {
    hangman = new Hangman(["node", "javascript", "react", "miami", "paris", "amsterdam", "lisboa"]);

    // HINT (uncomment when start working on the canvas portion of the lab)
    hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
    console.log("Game has started!");
    hangmanCanvas.createBoard();
    // hangmanCanvas.winnerElement.style.display = "none"
    // hangmanCanvas.loserElement.style.display = "none"

  });
}

document.addEventListener("keydown", (event) => {
  // React to user pressing a key
  // ... your code goes here
  if (!hangman.checkIfLetter(event.key)) return;
  let letter = event.key.toLowerCase();
  let guessStatus = false;

  for (let i in hangman.secretWord) {
    if (hangman.secretWord[i] == letter) {
      hangman.addCorrectLetter(letter);
      hangmanCanvas.writeCorrectLetter(i);
      guessStatus = true;
    }
  }
  // console.log(guessStatus);
  if (guessStatus == false) {
    hangman.letters.push(letter);
    hangman.addWrongLetter(letter);
    hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);
    hangmanCanvas.drawHangman(hangman.errorsLeft);
  }
});

// window.addEventListener("load", function () {
//   // ....
//   hangman = new Hangman(["node", "javascript", "react", "miami", "paris", "amsterdam", "lisbon"]);

//   // HINT (uncomment when start working on the canvas portion of the lab)
//   hangman.secretWord = hangman.pickWord();
//   hangmanCanvas = new HangmanCanvas(hangman.secretWord);
//   // ... your code goes here
//   hangmanCanvas.createBoard();
// });
