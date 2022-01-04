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

    switch(finalScore){
        case 1:
            starImg[0].style.opacity = 1
            starImg[0].style.filter = "none"
            break

        case 2:
            starImg[1].style.opacity = 1
            starImg[1].style.filter = "none"
            break
        
        case 3: 
            starImg[2].style.opacity = 1
            starImg[2].style.filter = "none"
            break
        
        case 4:
            starImg[3].style.opacity = 1
            starImg[3].style.filter = "none"
            break
    }
}

function scoreReset(item){
    item.style.opacity = 0.5
    item.style.filter = "grayscale(100%)"
}