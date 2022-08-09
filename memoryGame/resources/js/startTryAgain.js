let startBtn = document.getElementById('start')
let tryAgainBtn = document.getElementById('tryAgain')


document.getElementById('start').addEventListener('click', (event) => {

    if (event.target.value == 'start') {
        console.log('começar')
        
        startBtn.style.display = 'none'
        tryAgainBtn.style.display = 'none'
    }
})


function tryAgain () {

    tryAgainBtn.style.display = 'flex'

    tryAgainBtn.addEventListener('click', (event) => {
    
        if (event.target.value == 'tryAgain') {
            console.log('recomeçar')
    
            startBtn.style.display = 'none'
            tryAgainBtn.style.display = 'none'
        }
    })
}