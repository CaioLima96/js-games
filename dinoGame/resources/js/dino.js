function jump(){

    if(dino.classList != "jump"){
        dino.classList.add("jump")

        setTimeout(()=> {
            dino.classList.remove("jump")
        }, 300)
    } 
}