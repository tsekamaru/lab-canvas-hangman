class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById("hangman").getContext("2d");
    // ... your code goes here
    this.secretWord = secretWord;
    this.winnerElement = document.getElementById('winner')
    this.loserElement = document.getElementById('loser')
  }

  createBoard() {
    // ... your code goes here
    // find a way to clear the board
    this.loserElement.style.display = "none"
    // this.winnerElement.style.display = "none"
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    // Draw one line for each letter of the secret word
    this.context.beginPath();
    for (let i in this.secretWord) {
      this.context.moveTo(i * 60 + 450, 700);
      this.context.lineTo(i * 60 + 500, 700);
    }
    this.context.stroke();
    console.log(this.secretWord);
  }

  writeCorrectLetter(index) {
    // ... your code goes here
    this.context.font = "48px sans-serif";
    this.context.fillText(hangman.secretWord[index], 60 * index + 460, 690);
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
    let position = 10 - errorsLeft;
    this.context.font = "48px sans-serif";
    if (errorsLeft >= 5) this.context.fillText(letter, position * 60 + 750, 400);
    if (errorsLeft < 5) this.context.fillText(letter, position * 60 + 450, 500);
  }

  drawHangman(errorsLeft) {
    // ... your code goes here

    // Drawing the frame
    this.context.beginPath();
    this.context.moveTo(300, 600);
    if (errorsLeft <= 9) this.context.lineTo(200, 700);
    if (errorsLeft <= 8) this.context.lineTo(400, 700);
    if (errorsLeft <= 7) this.context.lineTo(300, 600);
    if (errorsLeft <= 6) this.context.lineTo(300, 100);
    if (errorsLeft <= 5) this.context.lineTo(600, 100);
    if (errorsLeft <= 4) this.context.lineTo(600, 200);
    this.context.stroke();

    // Drawing the man's head
    this.context.beginPath();
    if (errorsLeft <= 3) this.context.arc(600, 250, 50, 0, Math.PI * 2, true);
    this.context.stroke();

    // Drawing the man's body
    this.context.beginPath();
    this.context.moveTo(600, 300);
    if (errorsLeft <= 2) this.context.lineTo(600, 500);
    if (errorsLeft <= 1) this.context.lineTo(500, 600);
    this.context.moveTo(600, 500);
    if (errorsLeft <= 0) this.context.lineTo(700, 600);
    this.context.stroke();
  }

  gameOver() {
    // ... your code goes here
    console.log("loser moser zoser!");
    this.loserElement.style.display = "block"
  }

  winner() {
    // ... your code goes here
    console.log("winner winner chicken dinner!");
    this.winnerElement.style.display = "block"
  }
}
