let startBtn = document.getElementById('start')
let tryAgainBtn = document.getElementById('tryAgain')
let youWonBtn = document.getElementById('youWon')
//refatorar usando switch case

document.getElementById('start').addEventListener('click', (event) => {

    if (event.target.value == 'start') {
        console.log('começar')
        
        startBtn.style.display = 'none'
        tryAgainBtn.style.display = 'none'
        youWonBtn.style.display = 'none'
    }
})


function tryAgain () {

    tryAgainBtn.style.display = 'flex'

    tryAgainBtn.addEventListener('click', (event) => {
    
        if (event.target.value == 'tryAgain') {
            console.log('recomeçar')
    
            startBtn.style.display = 'none'
            tryAgainBtn.style.display = 'none'
            youWonBtn.style.display = 'none'
        }
    })
}

function youWon () {

    youWonBtn.style.display = 'flex'

    youWonBtn.addEventListener('click', (event) => {
    
        if (event.target.value == 'start') {
            console.log('recomeçar')
    
            startBtn.style.display = 'none'
            tryAgainBtn.style.display = 'none'
            youWonBtn.style.display = 'none'
        }
    })
}