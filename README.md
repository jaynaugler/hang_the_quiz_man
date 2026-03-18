## Hang the Quiz Man! 🤓


**The reference video used:** https://www.youtube.com/watch?v=hSSdc8vKP1I

**Original Project**
The original project is a classic Hangman game built with HTML, CSS, and vanilla JavaScript. Players are given a hint for a word, and can make letter guesses using an interactive on-screen keyboard. Core feature include dynamic SVG/image updates based on incorrect guesses (to build the stick figure image), a tracking system for correct/incorrect letters, and a responsive win/loss popup modal.

**Custom Improvements**

 - *Multiple Game Modes*: Implemented a pop-up on startup that asks for game mode, and persistent buttons to allow users to switch between 'classic' and 'quiz' game modes.
 - *Dynamic Theming*: Based on which game mode the user has selected, the underlying colour theme of the pages will change. This includes the ability to switch back to the default styling if 'classic' mode is later selected.
 - *Word Bank Flexibility* - Refactored the JavaScript logic which handles loading the questions, to allow for n number of arrays holding different word banks, allowing for easy addition of future game modes.

*By Kitt, and Justin* 🚀