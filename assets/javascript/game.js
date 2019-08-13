var letters = ["a", "b", "c"];

// This array will hold what we guess
var guessedLetters = [];

// This variable will be randomly assigned one of the three letters
var letterToGuess = null;

// This is what we'll use to count down
var guessesLeft = 9;

// This is the counter for wins/losses
var wins = 0;
var losses = 0;

var updateGuessesLeft = function() {
  // Grabbing the HTML element and setting it equal to the guessesLeft.
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
  // Get a random number 0,1 or 2 with "Math.floor(Math.random()" 
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
  // The guesses user has tried -- then display it as letters separated by commas.
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};

var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

// Execute on page load.
updateLetterToGuess();
updateGuessesLeft();


// This function will capture the keyboard clicks.
document.onkeydown = function(event) {

  // It's going to reduce the guesses by one
  guessesLeft--;

  // User's guess
  //   String.fromCharCode: Convert a Unicode number into a character
  //   event.which: Get the Unicode value of the pressed keyboard key
  //   Lowercase the letter
  var letter = String.fromCharCode(event.which).toLowerCase();

  // Then add the guess to the guessedLetters array
  guessedLetters.push(letter);

  // Then update he left# and guessedwords.
  updateGuessesLeft();
  updateGuessesSoFar();


  // We'll check if there's a match.
  if (letter === letterToGuess) {

    // If there is then we win and we'll update the HTML to display the win.
    wins++;
    document.querySelector("#wins").innerHTML = wins;

    // Then we'll reset the game
    reset();
  }

  // If we are out of guesses...
  if (guessesLeft === 0) {

    // Then we will loss and we'll update the HTML to display the loss.
    losses++;
    document.querySelector("#losses").innerHTML = losses;

    // Then we'll call the reset.
    reset();
  }
};