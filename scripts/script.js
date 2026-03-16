
const hangmanImage = document.querySelector(".hangman-box img");
const keyboardDiv = document.querySelector(".keyboard");
const guessesText = document.querySelector(".guesses-text b")
const wordDisplay = document.querySelector(".word-display");
let currentWord, wrongGuessCount = 0;
const maxGuesses = 6;

const getRandomWord = () => {
    // Selecting a random word and hint from the wordList in questions.js
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    wordDisplay.innerHTML = word.split("").map(() => '<li class="letter"></li>').join("");
}

const initGame = (button, clickedLetter) => {
    // Checking if clickedLEtter exists in the currentWOrd
    if(currentWord.includes(clickedLetter)) {
        // Showing all correct letters on the word display
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        hangmanImage.src = 'images/hangman-${wrongGuessCount).svg'
    }
    guessesText.innerText = '${wrongGuessCount} / ${maxGuesses}';
}


// Creating keyboard buttons and adding event listeners
for (let i = 65; i <= 90; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
//    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}



getRandomWord();