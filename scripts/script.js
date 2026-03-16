
const keyboardDiv = document.querySelector(".keyboard")

// Creating keyboard buttons
for (let i = 65; i <= 90; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
}



