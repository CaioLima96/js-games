function start(){
    if(cactus.classList != "moveLeft"){
        cactus.classList.add("moveLeft")
        document.getElementById("startBtn").style.display = "none"
        document.getElementById("resetBtn").style.display = "none"
    }
}

function reset(){
    document.getElementById("resetBtn").style.display = "flex"
}