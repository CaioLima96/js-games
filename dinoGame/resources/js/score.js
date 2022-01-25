function dinoScore(){

    document.getElementById('score').innerHTML = `<p>Pontuação: ${finalScore += 1}</p>`
    console.log(finalScore)

    switch(finalScore){
        case 10:
            starImg[0].style.opacity = 1
            starImg[0].style.filter = "none"
            break

        case 20:
            starImg[1].style.opacity = 1
            starImg[1].style.filter = "none"
            break
        
        case 30: 
            starImg[2].style.opacity = 1
            starImg[2].style.filter = "none"
            break
        
        case 40:
            starImg[3].style.opacity = 1
            starImg[3].style.filter = "none"
            break
    }
}

function scoreReset(item){
    item.style.opacity = 0.5
    item.style.filter = "grayscale(100%)"
}