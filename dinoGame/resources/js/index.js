const dino = document.getElementById('dino')
const cactus = document.getElementById('cactus')


function jump(){

    if(dino.classList != "jump"){
        dino.classList.add("jump")

        setTimeout(()=> {
            dino.classList.remove("jump")
        }, 300)
    } 
}

let isAlive = setInterval(function(){

    //pega a posição atual do dino no eixo Y
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    
    //pega posição atual do cacto no eixo X
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    
    //dectar colisão
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 150){
        alert("GameOver")
        console.log("gameover")
    }


}, 10)

document.addEventListener("keydown", (event) => {
    jump()
})

