const dino = document.getElementById('dino')
const cactus = document.getElementById('cactus')
let finalScore = 0
let starImg = document.querySelectorAll('.pixelStarImg')


let isAlive = setInterval(function(){

    //pega a posição atual do dino no eixo Y
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    
    //pega posição atual do cacto no eixo X
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    
    //dectar colisão
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 150){

        cactus.classList.remove("moveLeft")

        reset()

        console.log("gameover")
    }

}, 10)


document.addEventListener("keydown", (event) => {
    jump()
    dinoScore()
})

function dinoJumpMobile() {
    jump()
    dinoScore() 
}