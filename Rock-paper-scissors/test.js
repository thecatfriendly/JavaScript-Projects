// Get DOM elements
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const lives = document.getElementById("lives-el");
const resetBtn = document.getElementById("reset-btn");
const botEl = document.getElementById("bot-el");
const message = document.getElementById("message-el");
let streakEl = document.getElementById("streak-el");

// Initialize game variables
let alive = true;
let life = 3;
let streak = 0;
const options = ["✋", "👊", "✌"];

// Update lives and streak display
lives.textContent = `💖: ${life}`;
streakEl.textContent = `streak: ${streak}`;

// Reset the game state when reset button is clicked
resetBtn.addEventListener("click", function() {
    life = 3;
    streak = 0;
    alive = true;
    lives.textContent = `💖: ${life}`;
    streakEl.textContent = `streak: ${streak}`;
    message.textContent = "Game reset. Play again!";
});

// Function to generate a random option for the bot
function randomizer() {
    const random = Math.floor(Math.random() * options.length);
    const selected = options[random];
    botEl.textContent = `🤖: ${selected}`;
    return selected;
}

// Generalized function to handle player choice
function playRound(playerChoice) {
    if (!alive) return; // Stop the game if the player is out of lives

    const botChoice = randomizer(); // Generate a new bot option

    // Determine the result of the round
    if ((playerChoice === "👊" && botChoice === "✌") ||
        (playerChoice === "✋" && botChoice === "👊") ||
        (playerChoice === "✌" && botChoice === "✋")) {
        
        // Player wins
        streak++;
        streakEl.textContent = `streak: ${streak}`;
        message.textContent = "You won this round!";
    } else if (playerChoice === botChoice) {
        // Draw
        message.textContent = "It's a draw!";
    } else {
        // Player loses
        life--;
        lives.textContent = `💖: ${life}`;
        streak = 0;
        streakEl.textContent = `streak: ${streak}`;
        message.textContent = "You lost this round!";
        
        if (life === 0) {
            alive = false;
            message.textContent = "Game over! Reset to play again.";
        }
    }
}

// Event listeners for the buttons
rockBtn.addEventListener("click", function() {
    playRound("👊");
});

paperBtn.addEventListener("click", function() {
    playRound("✋");
});

scissorsBtn.addEventListener("click", function() {
    playRound("✌");
});
