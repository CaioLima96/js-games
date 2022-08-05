//Grab a couple of things
const section = document.querySelector('section')
const playerLivesCount = document.querySelector('span')
const playerLives = 6


//Link text
playerLivesCount.textContent = playerLives


//Generate the data
const getData = () => [

    {img: './assets/img/beatles.jpeg', name: 'beatles'},
    {img: './assets/img/blink182.jpeg', name: 'blink182'},
    {img: './assets/img/fkatwigs.jpeg', name: 'fka twigs'},
    {img: './assets/img/fleetwood.jpeg', name: 'fleetwood'},
    {img: './assets/img/joy-division.jpeg', name: 'joy division'},
    {img: './assets/img/ledzep.jpeg', name: 'led zeppelin'},
    {img: './assets/img/metallica.jpeg', name: 'metallica'},
    {img: './assets/img/pinkfloyd.jpeg', name: 'pink floyd'},

    {img: './assets/img/beatles.jpeg', name: 'beatles'},
    {img: './assets/img/blink182.jpeg', name: 'blink182'},
    {img: './assets/img/fkatwigs.jpeg', name: 'fka twigs'},
    {img: './assets/img/fleetwood.jpeg', name: 'fleetwood'},
    {img: './assets/img/joy-division.jpeg', name: 'joy division'},
    {img: './assets/img/ledzep.jpeg', name: 'led zeppelin'},
    {img: './assets/img/metallica.jpeg', name: 'metallica'},
    {img: './assets/img/pinkfloyd.jpeg', name: 'pink floyd'},
]


//Randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5)
    
    return cardData
}

randomize()


//Card Generator Function
const cardGenerator = () => {

    const cardData = randomize()
    
    //Generate the HTML
    cardData.forEach((item) => {
        const card = document.createElement('div')
        const face = document.createElement('img')
        const back = document.createElement('div')
        card.classList = 'card'
        face.classList = 'face'
        back.classList = 'back'

        //Attach the info to the cards
        face.src = item.img
        card.setAttribute('name', item.name)

        //Attach the cards to the section
        section.appendChild(card)
        card.appendChild(face)
        card.appendChild(back)

        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard')
            checkCards(e)
        })
    })
}

//Check cards
const checkCards = (e) => {

    const clickedCard = e.target
    clickedCard.classList.add('flipped')
    const flippedCards = document.querySelectorAll('.flipped')
    
    console.log(clickedCard)

    //Logic
    if(flippedCards.length === 2) {
        
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            console.log('match')
        } else {
            console.log('wrong')
        }
    } 
}


cardGenerator()