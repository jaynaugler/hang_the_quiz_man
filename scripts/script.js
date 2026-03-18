
// Initialize variables for all of the elements the game needs to interact with
const hangmanImage = document.querySelector(".hangman-box img");
const keyboardDiv = document.querySelector(".keyboard");
const guessesText = document.querySelector(".guesses-text b")
const wordDisplay = document.querySelector(".word-display");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6; // ALl games end at 6 wrong guesses, with option to play again

// Reset the state of the game on initial load OR try again
const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = `../images/hangman-${wrongGuessCount}.svg`
    gameModal.classList.remove("show");
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => '<li class="letter"></li>').join("");
}

// Allow the user to select which game mode (set of questions) they want to use
function selectGame(gameMode) {
    
}

// FOr the JS quiz and default word bank, set the colour theme to pink
function applyPinkTheme() {
    const styleSheet = document.createElement("style");
    styleSheet.id = "custom-pink-theme";
    styleSheet.innerText = themeStyles;
    document.head.appendChild(styleSheet);
}

// Based on which question bank, bring in the word and hint, and remove what was there previously
const getRandomWord = (questionBank) => {
    // Selecting a random word and hint from the wordList in questions.js
    const { word, hint } = questionBank[Math.floor(Math.random() * questionBank.length)];
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}

// Display the popup for victory or loss, and show the word the user was guessing
const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `You found the word:` : `The correct word was:`;
        gameModal.querySelector("img").src = `../images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Congrats!' : 'Game Over!'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    }, 300);
}

// Logic for handling guesses, and to grey out guessed letters, or add hangman image based on num of wrong guesses
const initGame = (button, clickedLetter) => {
    // Checking if clickedLEtter exists in the currentWOrd
    if(currentWord.includes(clickedLetter)) {
        // Showing all correct letters on the word display
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // If clicked letter doesn't exist then update the wrongGuessCount and hangman image
        wrongGuessCount++;
        hangmanImage.src = `../images/hangman-${wrongGuessCount}.svg`
    }
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}


// Creating keyboard buttons and adding event listeners
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}


// Run the program and add the event listener for play again
getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);