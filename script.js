const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")

const allImgs = [
    "img/rock.png",
    "img/paper.png",
    "img/scissors.png"
]

let player
let playerImg
let bot
let botImg

let animationOn

rock.addEventListener("click", () => {
    if(!animationOn){
        player = 0
        bot = randomizer(3)
        playerImg = allImgs[player]
        botImg = allImgs[bot]
        jokenpo(player, bot)
        animation()
    }
})

paper.addEventListener("click", () => {
    if(!animationOn){
        player = 1
        bot = randomizer(3)
        playerImg = allImgs[player]
        botImg = allImgs[bot]
        jokenpo(player, bot)
        animation()
    }
})

scissors.addEventListener("click", () => {
    if(!animationOn){
        player = 2
        bot = randomizer(3)
        playerImg = allImgs[player]
        botImg = allImgs[bot]
        animation()
        jokenpo(player, bot)
    }
})

function randomizer(max) {
    return Math.floor(Math.random() * max)
}

function jokenpo(p1, p2){
    const top = document.querySelector(".top")
    const message = document.querySelector("h1")
    message.innerHTML = ""
    top.appendChild(message)
    if(p1 === p2){
        message.textContent = "DRAW"
    } else if(p1 - p2 === -2 || p1 - p2 === 1){
        message.textContent = "YOU WIN"
    } else {
        message.textContent = "YOU LOSE"
    }
}

function animation(){
    const containerGame = document.querySelector(".container-game")
    containerGame.innerHTML = ""

    const containerPlayer1 = document.createElement("div")
    containerPlayer1.classList.add("player1")
    console.log("fodase")

    const containerPlayer1Img = document.createElement("img")
    containerPlayer1Img.src = playerImg

    containerPlayer1.appendChild(containerPlayer1Img)

    const containerPlayer2 = document.createElement("div")
    containerPlayer2.classList.add("player2")

    const containerPlayer2Img = document.createElement("img")
    containerPlayer2Img.src = botImg

    containerPlayer2.appendChild(containerPlayer2Img)

    containerGame.appendChild(containerPlayer1)
    containerGame.appendChild(containerPlayer2)

    let opac = 0
    let marginT = -120
    animationOn = true

    const anim = setInterval(() => {
        if(opac === 1 && marginT === 50){
            animationOn = false
            clearInterval(anim)
        } else {
            marginT = marginT + 1
            containerPlayer1.style.marginTop = `${marginT}px`
            containerPlayer2.style.marginTop = `${marginT}px`
            if(opac < 1){
                opac = opac + 0.01
                containerPlayer1.style.opacity = opac
                containerPlayer2.style.opacity = opac
            } else if(opac >= 1){
                opac = 1
                containerPlayer1.style.opacity = opac
                containerPlayer2.style.opacity = opac
            }
        }
    }, 0.1)
}