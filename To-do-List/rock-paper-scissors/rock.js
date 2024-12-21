const RockBtn = document.getElementById("rock-el")
const PaperBtn = document.getElementById("paper-el")
const ScissorBtn = document.getElementById("scissor-el")
const MsgEl = document.getElementById("message-el")
const BotEl = document.getElementById("bot-el")
const Lives = document.getElementById("lives-el")
const ResetBtn = document.getElementById("reset-el")
const StreakEl = document.getElementById("streak-el")

let alive = true
let life = 3
let streak = 0
const options = ["👊","✋","✌"]
Lives.textContent = `💖:${life}`
StreakEl.textContent = `🔥${streak}`

ResetBtn.addEventListener('click', function() {
    streak = 0
    alive = true
    life = 3
    Lives.textContent = `💖:${life}`
    StreakEl.textContent = `🔥${streak}`
    MsgEl.textContent = ("Game Reset")
})

function Randomizer() {
    const random = Math.floor(Math.random() * options.length)
    const selected = options[random]
    BotEl.textContent = ("🤖:" + selected)
    return selected
}

Randomizer()

function play(playerchoice) {
    if (!alive) return
    const botchoice = Randomizer()
    if ((playerchoice === "👊" && botchoice === "✌" ) ||
        (playerchoice === "✌" && botchoice === "✋") ||
        (playerchoice === "✋" && botchoice === "👊")) {

            streak++
            StreakEl.textContent = `🔥${streak}`
            MsgEl.textContent = ("You Win")
        }
    
        else if (playerchoice === botchoice) {
            MsgEl.textContent = ("Draw")
        }

    else {
        streak = 0
        life--
        StreakEl.textContent = `🔥${streak}`
        Lives.textContent = `💖:${life}`
        MsgEl.textContent = ("🤖 Wins ")
    }

    if (life === 0) {
        alive = false
        MsgEl.textContent = ("Game Over💀,Press reset to start")
    }
}


RockBtn.addEventListener('click', function(){
    play("👊")
})
PaperBtn.addEventListener('click', function(){
    play("✋")
})
ScissorBtn.addEventListener('click', function(){
    play("✌")
})