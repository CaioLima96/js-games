function start(){
    if(cactus.classList != "moveLeft"){
        cactus.classList.add("moveLeft")
        document.getElementById("startBtn").style.display = "none"
        document.getElementById("resetBtn").style.display = "none"
        document.getElementById('score').innerHTML = `<p>Pontuação: ${finalScore = 0}</p>`
        starImg.forEach(scoreReset)
    }
}

function reset(){
    document.getElementById("resetBtn").style.display = "flex"
    document.getElementById('score').innerHTML = `<p>Pontuação: ${finalScore = 0}</p>`
    starImg.forEach(scoreReset)
}