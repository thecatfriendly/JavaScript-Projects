const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")
const lives = document.getElementById("lives-el")
const resetBtn = document.getElementById("reset-btn")
const botEl = document.getElementById("bot-el")
const message = document.getElementById("message-el")
let streakEl = document.getElementById("streak-el")

let alive = true
let life = 3
let streak = 0
const options = ["✋","👊","✌"]

lives.textContent = `💖: ${life}`
streakEl.textContent = `streak: ${streak}`

resetBtn.addEventListener("click", function(){
    alive = true
    life = 3
    streak = 0
    lives.textContent = `💖: ${life}`
    streakEl.textContent = `streak: ${streak}`
    message.textContent = "Game Rest, Play again"
})

function randomizer () {
    const random = Math.floor(Math.random() * options.length)
    const selected = options[random]
    botEl.textContent = ("🤖:" + selected)
    return selected
}
randomizer()

function playround(playerchocie) {
    if (!alive) return;

    const botChoice = randomizer()

    if ((playerchocie === "👊" && botChoice === "✌") ||
        (playerchocie === "✋" && botChoice === "👊") ||
        (playerchocie === "✌" && botChoice === "✋")) {

            streak++
            streakEl.textContent = `streak: ${streak}`
            message.textContent = "You Scored!"
        }
    else if (playerchocie === botChoice) {
        message.textContent = "Its a Draw"
        }
    else{
        life--
        streak = 0
        lives.textContent = `💖: ${life}`
        streakEl.textContent = `streak: ${streak}`
        message.textContent = "You Lost this round!!"
    }

    if (life === 0) {
        alive = false
        message.textContent = "GAME OVER 💀,Press Reset"
    }
}

rockBtn.addEventListener("click", function(){
    playround("👊");
});

paperBtn.addEventListener("click", function(){
    playround("✋");
});

scissorsBtn.addEventListener("click", function(){
    playround("✌");
});
 