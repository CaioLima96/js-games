const dino = document.getElementById('dino')

function jump(){

    if(dino.classList != "jump"){
        dino.classList.add("jump")

        setTimeout(()=> {
            dino.classList.remove("jump")
        }, 300)
    } 
}

let isAlive = setInterval(function(){
    

    let dinoTop = window.getComputedStyle(dino).getPropertyValue("top")
    console.log("check")
    
}, 10)

document.addEventListener("keydown", (event) => {
    jump()
})

