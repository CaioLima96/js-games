function dinoScore(){
    //pega a posição atual do dino no eixo Y
    let dinoTopp = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
        
    //pega posição atual do cacto no eixo X
    let cactusLeftt = parseInt(window.getComputedStyle(cactus).getPropertyValue("top"))

    // if(dinoTopp > cactusLeftt){
    //     console.log(finalScore)
    //     return document.getElementById('score').innerHTML = `<p>Pontuação: ${finalScore += 1}</p>` 
    // }

    document.getElementById('score').innerHTML = `<p>Pontuação: ${finalScore += 1}</p>`
    console.log(finalScore)
}