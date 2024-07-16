function rollDice() {
    // Generate random numbers for the dice
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Update dice images based on the random numbers
    document.querySelectorAll(".dice img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelectorAll(".dice img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

    // Update the header text based on the dice rolls
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").textContent = "Player 2 Wins!";
    } else {
        document.querySelector("h1").textContent = "Draw";
    }
}

// Add event listener to the Roll Dice button
document.querySelector(".roll").addEventListener("click", rollDice);
